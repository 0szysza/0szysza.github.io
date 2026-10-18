/* Shared presidential election-night studio for both rounds. */
(() => {
  'use strict';
  const M = window.PresidentialNightModel;
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pct = v => Number(v).toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '%';
  const groups = {
    jobs: ['Przedsiębiorca', 'Menedżer/dyrektor/specjalista', 'Rolnik', 'Pracownik', 'Student/Uczeń', 'Bezrobotny', 'Emeryt/Rencista'],
    ages: ['18–29', '30–39', '40–49', '50–59', '60+'],
    genders: ['Mężczyzna', 'Kobieta']
  };
  let dialog, state, timer, returnFocus, visualFrame, soundtrack;
  const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  function stopVisuals() { cancelAnimationFrame(visualFrame); visualFrame = null; }
  const $ = selector => dialog.querySelector(selector);
  const bubbles = () => '<span class="pn-bubbles" aria-hidden="true">' + Array.from({ length: 15 }, (_, i) => `<i style="--x:${(i * 37 + 13) % 100}%;--s:${3 + i % 5}px;--d:${2.1 + i % 4 * .6}s;--delay:-${i * .41}s"></i>`).join('') + '</span>';
  function portrait(c) {
    return `<span class="pn-portrait"><span>${esc(c.initials || c.name.split(' ').map(n => n[0]).slice(0, 2).join(''))}</span>${c.photoUrl ? `<img src="${esc(c.photoUrl)}" alt="${esc(c.name)}">` : ''}</span>`;
  }
  function wireImages() {
    dialog.querySelectorAll('img').forEach(img => img.onerror = () => img.remove());
  }
  function color(c) { return /^#[\da-f]{3,8}$/i.test(c.partyColor) ? c.partyColor : '#639bff'; }
  function stop() { clearInterval(timer); timer = null; }
  function close() {
    soundtrack?.destroy(); soundtrack = null;
    stop(); stopVisuals(); state = null;
    dialog.close(); dialog.remove(); dialog = null;
    returnFocus?.focus();
  }
  function open(round = 1) {
    if (dialog) return;
    round = round === 2 ? 2 : 1;
    returnFocus = document.activeElement;
    dialog = document.createElement('dialog'); dialog.className = 'pn-dialog pn-setup';
    dialog.setAttribute('aria-labelledby', 'pn-title');
    document.body.append(dialog);
    dialog.addEventListener('cancel', e => { e.preventDefault(); close(); });
    dialog.addEventListener('click', e => {
      const b = e.target.closest('[data-action]'); if (!b) return;
      const a = b.dataset.action;
      if (a === 'close') close();
      if (a === 'music') soundtrack?.toggleMute();
      if (a === 'next') navigate(1);
      if (a === 'back') navigate(-1);
      if (a === 'pause') { state.paused = !state.paused; b.textContent = state.paused ? '▶ Wznów' : 'Ⅱ Pauza'; soundtrack?.setPaused(state.paused); }
      if (a === 'map') { state.mapMode = b.dataset.mode; renderMap(); }
      if (a === 'late-close') { $('.pn-late').remove(); state.lateOpen = false; soundtrack?.setScene('live'); }
      if (a === 'official' && state.current.complete) showOfficial();
    });
    dialog.addEventListener('change', e => { if (e.target.id === 'pn-speed') state.speed = Number(e.target.value); });
    dialog.addEventListener('input', e => { if (e.target.id === 'pn-volume') soundtrack?.setVolume(Number(e.target.value) / 100); });
    dialog.innerHTML = `<form class="pn-settings"><button type="button" class="pn-close" data-action="close" aria-label="Zamknij">×</button>
      <div class="pn-eyebrow">WYBORY PREZYDENCKIE · ${round === 2 ? 'II' : 'I'} TURA</div><h1 id="pn-title">Twoja noc wyborcza</h1>
      <p>Od pierwszego exit pollu do ostatniej policzonej komisji.</p>
      <label class="pn-option"><span><b>Late poll</b><small>Jedna publikacja o losowej pełnej godzinie lub wpół do, między 23:00 a 02:00.</small></span><select name="late" aria-label="Late poll"><option value="yes">Tak</option><option value="no">Nie</option></select></label>
      <label class="pn-option"><span><b>Przekroje wyborców</b><small>Grupy zawodowe, wiekowe i płeć po ogłoszeniu exit pollu.</small></span><select name="groups" aria-label="Przekroje wyborców"><option value="yes">Tak</option><option value="no">Nie</option></select></label>
      ${round === 2 ? '<label class="pn-option"><span><b>Przepływy z I tury</b><small>Jak wyborcy kandydatów I tury podzielili głosy między finalistów. Tylko uczestnicy II tury.</small></span><select name="flows" aria-label="Przepływy z I tury"><option value="yes">Tak</option><option value="no">Nie</option></select></label>' : '<label class="pn-option"><span><b>Sondaż II tury</b><small>Dwóch liderów, przepływy wyborców I tury i błąd do ±3 p.p.</small></span><select name="runoff" aria-label="Sondaż II tury"><option value="yes">Tak</option><option value="no">Nie</option></select></label>'}
      <p class="pn-error" role="alert"></p><button class="pn-primary" type="submit">Wejdź do studia <span>→</span></button>
      <small class="pn-muted">Symulacja na podstawie bieżących ustawień kalkulatora.</small></form>`;
    $('.pn-settings').onsubmit = e => { e.preventDefault(); start(new FormData(e.target), round); };
    dialog.showModal();
  }
  function start(options, round) {
    updateCalculation();
    const allCandidates = CANDIDATES_CONFIG.map(c => {
      const profile = typeof extractCandidateProfile === 'function' ? extractCandidateProfile(c.id) : null;
      return { ...c, profile, conservatism: profile ? Math.max(-1, Math.min(1, ((profile.aborcja + profile.lgbt) / 2 - 5) / 5)) : 0 };
    });
    const round1Candidates = allCandidates.filter(c => (candidateSupports[c.id] || 0) > 0);
    if (!round1Candidates.length || turnoutR1 <= 0 || (round === 2 && turnoutR2 <= 0)) {
      $('.pn-error').textContent = 'Ustaw dodatnią frekwencję i poparcie przynajmniej jednego kandydata.'; return;
    }
    const source = round === 2 ? lastR2Results : lastR1Results;
    const finalists = round === 2 ? [source.candA, source.candB].map(c => allCandidates.find(a => a.id === c.id)) : [];
    if (round === 2 && (!finalists[0] || !finalists[1] || finalists[0].id === finalists[1].id)) {
      $('.pn-error').textContent = 'Wybierz dwóch różnych finalistów II tury.'; return;
    }
    const candidates = round === 2 ? [...finalists] : [...round1Candidates];
    const turnout = round === 2 ? turnoutR2 : turnoutR1;
    const counties = {};
    for (const [name, res] of Object.entries(source.powiatResults)) {
      counties[name] = { ...PRESIDENTIAL_NIGHT_GEOGRAPHY[name], province: POWIAT_INFO[name].woj, votes: { ...res.votes } };
    }
    const round1Support = Object.fromEntries(round1Candidates.map(c => [c.id, Number(candidateSupports[c.id]) || 0]));
    const nationalSupport = round === 2 ? { [finalists[0].id]: source.natPctA, [finalists[1].id]: source.natPctB } : round1Support;
    const model = M.create({ candidates, counties, turnout, nationalSupport, latePoll: options.get('late') === 'yes' });
    const final = M.at(model, model.duration);
    const { exitPoll, latePoll: lateEstimate } = M.survey(final.percentages);
    const exitCandidates = [...candidates].sort((a, b) => exitPoll[b.id] - exitPoll[a.id]);
    candidates.sort((a, b) => final.percentages[b.id] - final.percentages[a.id]);
    const pair = (round === 2 ? finalists : candidates.slice(0, 2)).map(c => c.id);
    let flows;
    if (pair[0] === round2Finalists[0] && pair[1] === round2Finalists[1]) flows = structuredClone(flowSettings);
    else if (pair[0] === round2Finalists[1] && pair[1] === round2Finalists[0]) {
      flows = Object.fromEntries(Object.entries(flowSettings).map(([id, f]) => [id, { ...f, a: f.b, b: f.a }]));
    } else flows = pair.length === 2 ? getSmartDefaultFlows(pair[0], pair[1]) : {};
    const round1Percentages = M.summarize(round1Support).percentages;
    const demographics = round === 2 ? M.runoffDemographics({ candidates: round1Candidates, finalists,
      round1Percentages, flows, turnoutR1, turnoutR2, exitPoll }) : M.demographics(candidates, exitPoll);
    const transfers = round === 2 ? M.electorateTransfers(round1Candidates, finalists, flows) : [];
    const poll = round === 1 ? M.runoff(candidates, final.percentages, flows, Math.random() * 6 - 3) : null;
    const pages = ['exit'];
    if (options.get('groups') === 'yes') pages.push('jobs', 'ages', 'genders');
    if (options.get('runoff') === 'yes' && poll) pages.push('runoff');
    if (round === 2 && options.get('flows') === 'yes') pages.push('flows');
    state = { round, model, final, candidates, round1Candidates, round1Percentages, transfers, exitCandidates, exitPoll, demographics, lateEstimate, poll, pages, page: 0, phase: 'countdown', turnout,
      minute: 0, speed: 4, paused: false, mapMode: 'counties', lateShown: false, lateOpen: false, startTime: performance.now() };
    window.__pnState = state;
    dialog.classList.remove('pn-setup');
    soundtrack = window.PresidentialNightAudio?.create(updateAudioControls);
    soundtrack?.start();
    renderStudio();
    timer = setInterval(tick, 200);
  }
  function shell(title, subtitle, content, footer = '') {
    stopVisuals();
    dialog.innerHTML = `<div class="pn-stars" aria-hidden="true"></div><div class="pn-deck" aria-hidden="true"></div>
      <div class="pn-shell"><div class="pn-top"><div><div class="pn-eyebrow"><span class="pn-live-dot"></span> NOC WYBORCZA <span class="pn-tag">${state.round === 2 ? 'II' : 'I'} TURA · SYMULACJA</span></div><h1 id="pn-title">${title}</h1><p class="pn-subtitle">${subtitle}</p></div>
      <div class="pn-top-tools"><div class="pn-top-right"><div class="pn-clock"><b id="pn-clock">21:00</b><small id="pn-day">DZIEŃ WYBORÓW</small></div><button class="pn-close" data-action="close" aria-label="Zamknij noc wyborczą">×</button></div>${soundtrack ? '<div class="pn-audio-controls"><button type="button" data-action="music" aria-label="Wycisz muzykę" aria-pressed="false">♫</button><input id="pn-volume" type="range" min="0" max="100" step="1" aria-label="Głośność muzyki"><a href="assets/election-night/music/CREDITS.html" target="_blank" rel="noopener" title="Muzyka: Sascha Ende · CC BY 4.0" aria-label="Muzyka — autor i licencja">ⓘ</a></div>' : ''}</div></div>
      <main class="pn-content">${content}</main><div class="pn-footer">${footer}</div></div><div class="pn-tooltip" role="tooltip" hidden></div>`;
    wireImages();
    updateAudioControls();
  }
  function updateAudioControls() {
    if (!dialog || !soundtrack) return;
    const controls = soundtrack.status(), button = $('[data-action="music"]'), volume = $('#pn-volume');
    if (!button || !volume) return;
    const silent = controls.muted || controls.volume === 0 || controls.blocked || controls.unavailable;
    button.textContent = controls.unavailable ? '♫ !' : silent ? '♫ ×' : '♫';
    button.setAttribute('aria-pressed', String(!silent));
    button.setAttribute('aria-label', controls.unavailable ? 'Ponów odtwarzanie muzyki' : silent ? 'Włącz muzykę' : 'Wycisz muzykę');
    button.title = controls.unavailable ? 'Nie udało się wczytać muzyki. Kliknij, aby ponowić.' : controls.blocked ? 'Kliknij, aby włączyć muzykę' : silent ? 'Włącz muzykę' : 'Wycisz muzykę';
    volume.value = Math.round(controls.volume * 100);
    volume.setAttribute('aria-valuetext', `${volume.value}%`);
  }
  function navigation() {
    const last = state.page === state.pages.length - 1;
    return `<button data-action="back" ${state.page === 0 ? 'disabled' : ''}>← Wstecz</button>
      <span class="pn-step">STUDIO ${state.page + 1} / ${state.pages.length}${last ? '<small>Rozpoczęcie liczenia zamyka powrót do studia.</small>' : ''}</span>
      <button class="pn-primary" data-action="next">${last ? 'Rozpocznij liczenie' : 'Dalej'} →</button>`;
  }
  function bars(candidates, values, countdown = false) {
    const max = Math.max(...candidates.map(c => values[c.id]), 1);
    if (countdown) {
      // No identities, party colours, scores or ranking leak during the opening.
      return `<div class="pn-bars pn-anonymous" style="--count:${candidates.length}" aria-hidden="true">${candidates.map((_, i) => `<div class="pn-column" style="--wave-duration:${3.6 + i % 5 * .43}s;--wave-delay:-${i * .83}s;--hue-delay:-${i * 1.47}s"><div class="pn-column-track"><div class="pn-column-fill">${bubbles()}</div></div><div class="pn-candidate-name"></div><small>&nbsp;</small></div>`).join('')}</div>`;
    }
    return `<div class="pn-bars ${candidates.length === 2 ? 'pn-duel' : ''}" style="--count:${candidates.length}">${candidates.map(c => `<div class="pn-column" data-candidate="${esc(c.id)}" style="--cand:${color(c)}">
      <div class="pn-column-track"><div class="pn-column-fill" style="height:${countdown ? 20 + Math.random() * 75 : values[c.id] / max * 100}%">${bubbles()}</div><strong class="pn-score" style="bottom:max(${values[c.id] / max * 100}%,var(--portrait-clearance,122px))">${countdown ? '•••' : pct(values[c.id])}</strong>${portrait(c)}</div>
      <div class="pn-candidate-name">${esc(c.name)}</div><small>${esc(c.partyShort)}</small></div>`).join('')}</div>`;
  }
  function revealResults() {
    const stage = $('.pn-stage');
    stage.classList.add('pn-revealing');
    const columns = [...stage.querySelectorAll('.pn-column')].map((column, i) => {
      const fill = column.querySelector('.pn-column-fill'), score = column.querySelector('.pn-score');
      const target = parseFloat(fill.style.height);
      column.style.setProperty('--reveal-delay', `${i * 45}ms`);
      fill.style.height = '0%'; score.textContent = pct(0);
      score.style.bottom = 'var(--portrait-clearance,122px)';
      return { fill, score, target, value: state.exitPoll[column.dataset.candidate], delay: i * 45 };
    });
    const started = performance.now(), duration = reducedMotion() ? 0 : 1800;
    function frame(now) {
      let done = true;
      columns.forEach(({ fill, score, target, value, delay }) => {
        const t = duration ? Math.max(0, Math.min(1, (now - started - delay) / duration)) : 1;
        const eased = t * t * (3 - 2 * t);
        fill.style.height = target * eased + '%'; score.textContent = pct(value * eased);
        score.style.bottom = `max(${target * eased}%,var(--portrait-clearance,122px))`;
        if (t < 1) done = false;
      });
      if (!done) visualFrame = requestAnimationFrame(frame);
      else { visualFrame = null; stage.classList.remove('pn-revealing'); }
    }
    visualFrame = requestAnimationFrame(frame);
  }
  function turnoutRing() {
    return `<aside class="pn-turnout"><svg viewBox="0 0 120 120" aria-label="Prognozowana frekwencja ${pct(state.turnout)}"><defs><pattern id="pn-turnout-bubbles" width="12" height="13" patternUnits="userSpaceOnUse"><circle cx="3" cy="4" r="1.6" fill="#d6faff"/><circle cx="9" cy="10" r="1" fill="#fff"/></pattern></defs><circle cx="60" cy="60" r="48" fill="none" stroke="#162d50" stroke-width="12"/><circle class="pn-ring-stroke" cx="60" cy="60" r="48" fill="none" stroke="#6be4ff" stroke-width="12" pathLength="100" stroke-dasharray="${state.turnout} 100" transform="rotate(-90 60 60)"/><circle cx="60" cy="60" r="48" fill="none" stroke="url(#pn-turnout-bubbles)" stroke-width="12" pathLength="100" stroke-dasharray="${state.turnout} 100" transform="rotate(-90 60 60)"/><text x="60" y="65" text-anchor="middle">${pct(state.turnout)}</text></svg><span>PROGNOZOWANA<br>FREKWENCJA</span></aside>`;
  }
  function transferRing(source, transfer, index) {
    const cx = 110, cy = 110, rOut = 96, rIn = 58, rMid = 77;
    const point = (r, a) => `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`;
    // Two arcs per edge also render a complete 100% ring without a seam.
    const ringSector = (a, step) => {
      const mid = a + step / 2, b = a + step;
      return `M${point(rOut, a)} A${rOut},${rOut} 0 0 1 ${point(rOut, mid)} A${rOut},${rOut} 0 0 1 ${point(rOut, b)} L${point(rIn, b)} A${rIn},${rIn} 0 0 0 ${point(rIn, mid)} A${rIn},${rIn} 0 0 0 ${point(rIn, a)} Z`;
    };
    let angle = -Math.PI / 2;
    const sectors = state.candidates.map((c, i) => {
      const share = transfer.percentages[c.id] || 0;
      if (share <= 0) return '';
      const step = (share / 100) * 2 * Math.PI;
      const a = angle;
      angle += step;
      const d = ringSector(a, step);
      const mid = a + step / 2;
      const label = share >= 8 ? `<text x="${(cx + rMid * Math.cos(mid)).toFixed(1)}" y="${(cy + 4 + rMid * Math.sin(mid)).toFixed(1)}" text-anchor="middle">${share.toLocaleString('pl-PL', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%</text>` : '';
      return `<g><path class="pn-transfer-segment" d="${d}" fill="${color(c)}" stroke="#0b1730" stroke-width="1.2" style="--cand:${color(c)}" data-flow-cand="${i}" data-flow-share="${share}" tabindex="0" role="img" title="${esc(c.name)}: ${pct(share)}" aria-label="${esc(c.name)}: ${pct(share)}"/>${label}</g>`;
    }).join('');
    const particles = Array.from({ length: 28 }, (_, i) => `<circle class="pn-ring-particle" cx="${14 + (i * 37 + index * 19) % 192}" cy="218" r="${1.2 + i % 4 * .55}" style="--particle-duration:${3.4 + i % 5 * .5}s;--particle-delay:-${i * .61 + index * .23}s"/>`).join('');
    const trackPath = ringSector(-Math.PI / 2, 2 * Math.PI);
    const initials = esc(source.initials || source.name.split(' ').map(n => n[0]).slice(0, 2).join(''));
    return `<div class="pn-transfer-hero"><div class="pn-transfer-stage"><svg viewBox="0 0 220 220" aria-hidden="false"><defs><clipPath id="pn-flow-clip-${index}"><path d="${trackPath}"/></clipPath></defs><path d="${trackPath}" fill="#09172b" stroke="#ffffff22" stroke-width="1"/>${sectors}<g clip-path="url(#pn-flow-clip-${index})" pointer-events="none" aria-hidden="true">${particles}</g><path d="${trackPath}" fill="none" stroke="#ffffff2e" stroke-width="1.2" pointer-events="none"/></svg><div class="pn-transfer-center-photo" style="--cand:${color(source)}"><span>${initials}</span>${source.photoUrl ? `<img src="${esc(source.photoUrl)}" alt="${esc(source.name)}">` : ''}</div></div><div class="pn-transfer-labels">${state.candidates.map(c => {
      const share = transfer.percentages[c.id] || 0;
      return `<div class="pn-flow-badge" style="--cand:${color(c)}"><span><i style="background:${color(c)};box-shadow:0 0 8px ${color(c)}"></i>${esc(c.name)}</span><b>${pct(share)}</b></div>`;
    }).join('')}</div></div>`;
  }
  function renderStudio() {
    const page = state.pages[state.page];
    soundtrack?.setScene(state.phase === 'countdown' ? 'intro' : page === 'exit' ? 'exit' : 'studio');
    if (page === 'exit' || page === 'runoff') {
      const isPoll = page === 'runoff', counting = state.phase === 'countdown';
      shell(isPoll ? 'Pojedynek o prezydenturę' : 'Polska wybrała. Pierwsze wyniki.',
        isPoll ? 'SONDAŻ II TURY · przepływy z I tury · błąd symulacji do ±3 p.p.' : 'EXIT POLL · ogólnopolskie poparcie · symulowany błąd do ±3 p.p.',
        `<div class="pn-stage">${bars(isPoll ? state.poll.pair : state.exitCandidates, isPoll ? state.poll.percentages : state.exitPoll, counting)}${!isPoll && !counting ? turnoutRing() : ''}
        ${counting ? '<div class="pn-countdown"><span>DO OGŁOSZENIA EXIT POLLU</span><b aria-live="polite">10</b></div>' : ''}</div>
        ${isPoll ? '<p class="pn-poll-note">Tylko wyborcy I tury deklarujący udział w II turze. Bez nowych wyborców; osoby rezygnujące z udziału wyłączono z podstawy procentowania.</p>' : ''}`,
        counting ? '<span class="pn-muted">Za chwilę poznamy wyniki exit pollu…</span>' : navigation());
    } else if (page === 'flows') {
      shell('Dokąd przeszły elektoraty I tury?', 'PRZEPŁYWY I → II TURA · podział głosów wśród uczestników II tury',
        `<div class="pn-transfers">${state.transfers.map((transfer, idx) => {
          const source = state.round1Candidates.find(c => c.id === transfer.candidateId);
          const r1Pct = state.round1Percentages?.[source.id] ?? 0;
          return `<article class="pn-transfer-card" data-source="${esc(source.id)}" style="--card-delay:${idx * 55}ms;--cand:${color(source)}"><div class="pn-transfer-source" style="--cand:${color(source)}"><div class="pn-transfer-title"><i class="pn-transfer-dot" style="background:${color(source)};box-shadow:0 0 8px ${color(source)}"></i><div><h2>${esc(source.name)}</h2><small>${esc(source.partyShort || 'WYBORCY Z I TURY')}</small></div></div><span class="pn-transfer-r1-badge">I tura: ${pct(r1Pct)}</span></div>${transfer.hasVoters ? transferRing(source, transfer, idx) : '<p class="pn-transfer-empty">Brak wyborców uczestniczących w II turze.</p>'}</article>`;
        }).join('')}</div>${legend()}`, navigation());
      dialog.querySelectorAll('[data-flow-cand]').forEach(path => {
        const c = state.candidates[Number(path.dataset.flowCand)];
        const share = Number(path.dataset.flowShare) || 0;
        const show = e => {
          dialog.querySelectorAll('[data-legend]').forEach(l => l.classList.toggle('pn-highlight', l.dataset.legend === c.id));
          tooltip(e, `<b>${esc(c.name)}</b><strong>${pct(share)}</strong>`, path);
        };
        path.onpointermove = show; path.onfocus = show;
        path.onpointerleave = path.onblur = () => { hideTip(); dialog.querySelectorAll('.pn-highlight').forEach(l => l.classList.remove('pn-highlight')); };
      });
    } else {
      const names = { jobs: 'Jak głosowały grupy zawodowe?', ages: 'Jak głosowały grupy wiekowe?', genders: 'Jak głosowały kobiety i mężczyźni?' };
      shell(names[page], state.round === 2 ? 'EXIT POLL · wybory grup w I turze, przepływy i nowi wyborcy II tury' : 'EXIT POLL · przekrój demograficzny wyborców wg poglądów i zasięgów',
        `<div class="pn-donuts pn-donuts-${groups[page].length}" tabindex="0" aria-label="Wykresy grup wyborców">${groups[page].map((name, i) => `<article class="pn-donut-card" style="--card-delay:${i * 70}ms"><h2>${esc(name)}</h2>${donut(page, i)}</article>`).join('')}</div>${legend()}`, navigation());
      dialog.querySelectorAll('[data-segment]').forEach(path => {
        const c = state.candidates[Number(path.dataset.segment)];
        const gIdx = Number(path.dataset.group);
        const share = state.demographics?.[page]?.[gIdx]?.percentages?.[c.id] ?? (100 / state.candidates.length);
        const diff = share - (state.exitPoll[c.id] || 0);
        const diffSign = diff >= 0 ? '+' : '';
        const diffText = `${diffSign}${diff.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} p.p. wzg. ogółu`;
        const show = e => {
          dialog.querySelectorAll('[data-legend]').forEach(l => l.classList.toggle('pn-highlight', l.dataset.legend === c.id));
          tooltip(e, `<b>${esc(c.name)}</b><strong>${pct(share)}</strong><div class="pn-tip-progress">${esc(diffText)}</div>`, path);
        };
        path.onpointermove = show; path.onfocus = show;
        path.onpointerleave = path.onblur = () => { hideTip(); dialog.querySelectorAll('.pn-highlight').forEach(l => l.classList.remove('pn-highlight')); };
      });
    }
  }
  function donut(page, index) {
    const n = state.candidates.length;
    const shares = state.demographics?.[page]?.[index]?.percentages;
    const point = (r, a) => `${120 + r * Math.cos(a)},${120 + r * Math.sin(a)}`;
    let angle = -Math.PI / 2;
    const sectors = state.candidates.map((c, i) => {
      const share = shares ? (shares[c.id] ?? 0) : (100 / n);
      if (share <= 0) return '';
      const step = (share / 100) * 2 * Math.PI;
      const a = angle;
      angle += step;
      const effectiveStep = step >= 2 * Math.PI - 0.0001 ? 2 * Math.PI - 0.0001 : step;
      const b = a + effectiveStep;
      const large = effectiveStep > Math.PI ? 1 : 0;
      const d = `M${point(100, a)} A100,100 0 ${large} 1 ${point(100, b)} L${point(57, b)} A57,57 0 ${large} 0 ${point(57, a)} Z`;
      const showLabel = share >= 5.5;
      const label = showLabel ? `<text x="${120 + 79 * Math.cos(a + step / 2)}" y="${124 + 79 * Math.sin(a + step / 2)}" text-anchor="middle" style="font-size:${n > 12 || share < 8.5 ? 9 : 11}px">${share.toLocaleString('pl-PL', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%</text>` : '';
      return `<g><path d="${d}" fill="${color(c)}" stroke="#0b1730" stroke-width="1" data-group="${index}" data-segment="${i}" tabindex="0" role="img" aria-label="${esc(c.name)}: ${pct(share)}"/>${label}</g>`;
    }).join('');
    const particles = Array.from({ length: 38 }, (_, i) => `<circle class="pn-ring-particle" cx="${23 + (i * 47 + index * 13) % 194}" cy="246" r="${1.2 + i % 4 * .6}" style="--particle-duration:${4 + i % 6 * .55}s;--particle-delay:-${i * .73 + index * .29}s"/>`).join('');
    return `<svg viewBox="12 12 216 216"><defs><clipPath id="pn-ring-clip-${index}"><path clip-rule="evenodd" d="M120 20a100 100 0 1 0 0 200a100 100 0 1 0 0-200 M120 63a57 57 0 1 0 0 114a57 57 0 1 0 0-114"/></clipPath></defs>${sectors}<g clip-path="url(#pn-ring-clip-${index})" pointer-events="none" aria-hidden="true">${particles}</g><text class="pn-donut-center" x="120" y="116" text-anchor="middle">EXIT</text><text class="pn-donut-center" x="120" y="135" text-anchor="middle">POLL</text></svg>`;
  }
  function legend() { return `<div class="pn-legend">${state.candidates.map(c => `<span data-legend="${esc(c.id)}"><i style="background:${color(c)}"></i>${esc(c.name)}</span>`).join('')}</div>`; }
  function navigate(dir) {
    if (state.phase !== 'studio') return;
    if (dir > 0 && state.page === state.pages.length - 1) { beginCounting(); return; }
    state.page = Math.max(0, Math.min(state.pages.length - 1, state.page + dir)); renderStudio();
  }
  function beginCounting() {
    soundtrack?.setScene('live');
    state.phase = 'live'; state.lastTick = performance.now(); state.current = M.at(state.model, 0);
    renderCounting(false);
  }
  function resultsRows(values) {
    const isDuel = state.candidates.length === 2;
    return `<div class="pn-results ${isDuel ? 'pn-results-duel' : ''}">${state.candidates.map(c => `<div class="pn-result-row" data-candidate="${esc(c.id)}" style="--cand:${color(c)}">${portrait(c)}<div class="pn-result-main"><div class="pn-result-label"><div class="pn-result-ident"><span>${esc(c.name)}</span>${isDuel ? `<small>${esc(c.partyName || c.partyShort)}</small>` : ''}</div><strong>${pct(values[c.id] || 0)}</strong></div><div class="pn-result-track"><div class="pn-result-fill" style="width:${values[c.id] || 0}%">${bubbles()}</div></div></div></div>`).join('')}</div>`;
  }
  function mapPanel() {
    return `<section class="pn-map-panel"><div class="pn-map-toolbar"><span>POLSKA</span><div><button data-action="map" data-mode="counties">Powiaty</button><button data-action="map" data-mode="provinces">Województwa</button></div></div><div class="pn-map"></div><small>Najedź lub dotknij regionu, aby zobaczyć wyniki.</small></section>`;
  }
  function renderCounting(official) {
    shell(official ? `Oficjalne wyniki ${state.round === 2 ? 'II' : 'I'} tury` : 'Każdy głos ma znaczenie.', official ? 'WYNIKI SYMULACJI · 100% komisji' : 'LICZENIE NA ŻYWO · wyniki cząstkowe',
      `<div class="pn-live-layout ${official ? 'pn-official-layout' : ''}">${mapPanel()}<section class="pn-national"><div class="pn-section-label">${official ? 'OSTATECZNE POPARCIE' : 'AKTUALNE POPARCIE'} · POLSKA</div>${resultsRows(state.current.percentages)}</section></div>`,
      `<div class="pn-counting-footer"><div class="pn-counting-controls">${official ? '<span class="pn-complete">Noc wyborcza zakończona</span>' : '<button data-action="official" class="pn-primary" hidden>Oficjalne wyniki ↗</button><span id="pn-count-status">Trwa spływ protokołów</span><button data-action="pause">Ⅱ Pauza</button><label>Tempo <select id="pn-speed"><option value="4">×240</option><option value="10">×600</option><option value="30">×1800</option></select></label>'}</div><div class="pn-progress-label"><span>POLICZONE KOMISJE</span><strong id="pn-progress-value">0,00%</strong></div><div class="pn-progress" role="progressbar" aria-label="Policzone komisje" aria-valuemin="0" aria-valuemax="100"><div>${bubbles()}</div></div></div>`);
    renderMap(); updateLive();
  }
  function renderMap() {
    hideTip(); state.hovered = null;
    const host = $('.pn-map');
    const source = document.getElementById(state.mapMode === 'counties' ? 'poland-map' : 'map-wojewodztwa');
    const svg = source.cloneNode(true);
    svg.removeAttribute('id'); svg.removeAttribute('style'); svg.setAttribute('class', 'pn-map-svg');
    svg.querySelectorAll('*').forEach(node => {
      node.removeAttribute('id'); node.removeAttribute('style');
      for (const a of [...node.attributes]) if (a.name.startsWith('on')) node.removeAttribute(a.name);
    });
    host.replaceChildren(svg);
    dialog.querySelectorAll('[data-action="map"]').forEach(b => { const active = b.dataset.mode === state.mapMode; b.classList.toggle('pn-active', active); b.setAttribute('aria-pressed', String(active)); });
    svg.querySelectorAll('path[data-name]').forEach(path => {
      path.setAttribute('tabindex', '0');
      const show = e => { state.hovered = { name: path.dataset.name, e, path }; showRegion(); };
      path.onpointermove = path.onclick = path.onfocus = show;
      path.onpointerleave = path.onblur = () => { state.hovered = null; hideTip(); };
    });
    paintMap();
  }
  function paintMap() {
    const data = state.current[state.mapMode];
    $('.pn-map')?.querySelectorAll('path[data-name]').forEach(path => {
      const res = data[path.dataset.name];
      const c = state.candidates.find(c => c.id === res?.winner);
      path.style.fill = c ? color(c) : '#142c4f';
      path.style.opacity = res?.total ? .4 + .6 * res.progress / 100 : 1;
      path.setAttribute('aria-label', `${path.dataset.name}: ${pct(res?.progress || 0)} komisji`);
    });
  }
  function showRegion() {
    if (!state.hovered) return;
    const { name, e, path } = state.hovered, res = state.current[state.mapMode][name];
    if (!res) return;
    tooltip(e, `<b>${esc(state.mapMode === 'counties' ? 'Powiat ' + (POWIAT_INFO[name]?.name || name) : 'Województwo ' + name)}</b><div class="pn-tip-progress">${pct(res.progress)} komisji · ${res.counted} / ${res.commissions}</div>${res.total ? res.sorted.map(([id, value]) => {
      const c = state.candidates.find(c => c.id === id);
      return `<div><span><i style="background:${color(c)}"></i>${esc(c.name)}</span><strong>${pct(value)}</strong></div>`;
    }).join('') : '<p>Oczekiwanie na pierwsze protokoły</p>'}`, path);
  }
  function tooltip(e, html, anchor) {
    const tip = $('.pn-tooltip'); if (!tip) return;
    tip.innerHTML = html; tip.hidden = false;
    const rect = anchor.getBoundingClientRect();
    const x = Number.isFinite(e.clientX) ? e.clientX : rect.x + rect.width / 2;
    const y = Number.isFinite(e.clientY) ? e.clientY : rect.y + rect.height / 2;
    tip.style.left = Math.max(8, Math.min(innerWidth - tip.offsetWidth - 12, x + 16)) + 'px';
    tip.style.top = Math.max(8, Math.min(innerHeight - tip.offsetHeight - 12, y + 16)) + 'px';
  }
  function hideTip() { const t = dialog && $('.pn-tooltip'); if (t) t.hidden = true; }
  function updateClock() {
    const time = 21 * 60 + Math.floor(state.minute);
    $('#pn-clock').textContent = `${String(Math.floor(time / 60) % 24).padStart(2, '0')}:${String(time % 60).padStart(2, '0')}`;
    $('#pn-day').textContent = time >= 1440 ? 'NASTĘPNY DZIEŃ' : 'DZIEŃ WYBORÓW';
  }
  function updateLive() {
    updateClock();
    const r = state.current;
    stopVisuals();
    const rows = [...dialog.querySelectorAll('.pn-result-row')];
    const orderChanged = rows.some(row => row.style.order !== String(r.sorted.findIndex(([id]) => id === row.dataset.candidate)));
    if (orderChanged) {
      // FLIP: keep each photo and bar together as candidates exchange places.
      const before = rows.map(row => row.getBoundingClientRect().top);
      rows.forEach(row => {
        row.getAnimations().forEach(animation => animation.cancel());
        row.style.order = r.sorted.findIndex(([id]) => id === row.dataset.candidate);
      });
      const after = rows.map(row => row.getBoundingClientRect().top);
      if (!reducedMotion()) rows.forEach((row, i) => {
        if (Math.abs(before[i] - after[i]) > 1) row.animate([
          { transform: `translateY(${before[i] - after[i]}px)` }, { transform: 'translateY(0)' }
        ], { duration: 650, easing: 'cubic-bezier(.22,1,.36,1)' });
      });
    }
    const entries = rows.map(row => {
      const fill = row.querySelector('.pn-result-fill');
      return { fill, score: row.querySelector('strong'), from: parseFloat(fill.style.width) || 0,
        to: r.percentages[row.dataset.candidate] || 0 };
    });
    const progress = $('.pn-progress'), progressFill = progress.firstElementChild, progressLabel = $('#pn-progress-value');
    const fromProgress = parseFloat(progressFill.style.width) || 0;
    const started = performance.now();
    const duration = reducedMotion() || state.phase === 'official' || r.complete || !r.total ? 0 : 240;
    function frame(now) {
      const t = duration ? Math.min(1, (now - started) / duration) : 1;
      entries.forEach(({ fill, score, from, to }) => {
        const value = t >= 1 ? to : from + (to - from) * t;
        fill.style.width = value + '%'; score.textContent = r.total ? pct(value) : '—';
      });
      const value = t >= 1 ? r.progress : fromProgress + (r.progress - fromProgress) * t;
      progressFill.style.width = value + '%'; progress.setAttribute('aria-valuenow', value);
      progressLabel.textContent = pct(value === 100 ? 100 : Math.floor(value * 100) / 100);
      if (t < 1) visualFrame = requestAnimationFrame(frame);
      else { visualFrame = null; if (r.complete && state.phase === 'live') $('[data-action="official"]').hidden = false; }
    }
    frame(started);
    paintMap(); showRegion();
    if (r.complete && state.phase === 'live') {
      $('#pn-count-status').hidden = true;
      $('[data-action="pause"]').disabled = true; $('#pn-speed').disabled = true;
      stop();
    }
  }
  function latePoll() {
    soundtrack?.setScene('late');
    state.lateShown = true; state.lateOpen = true;
    const estimate = state.lateEstimate;
    const candidates = [...state.candidates].sort((a, b) => estimate[b.id] - estimate[a.id]);
    const box = document.createElement('section'); box.className = 'pn-late ' + (Math.random() < .5 ? 'pn-late-left' : 'pn-late-right');
    box.setAttribute('role', 'dialog'); box.setAttribute('aria-label', 'Late poll');
    box.innerHTML = `<div class="pn-eyebrow">NOWE DANE SONDAŻOWE · ${$('#pn-clock').textContent}</div><h2>Late poll</h2><p>Jedyna aktualizacja sondażowa tej nocy · symulowany błąd do ±1 p.p.</p>${bars(candidates, estimate)}<button class="pn-primary" data-action="late-close">Wróć do liczenia →</button>`;
    dialog.append(box); wireImages(); box.querySelector('button').focus();
  }
  function showOfficial() {
    soundtrack?.setScene('official');
    stop(); state.phase = 'official'; state.current = state.final; hideTip();
    renderCounting(true);
  }
  function tick() {
    if (!state) return;
    const now = performance.now();
    if (state.phase === 'countdown') {
      const elapsed = (now - state.startTime) / 1000, n = Math.max(0, 10 - Math.floor(elapsed));
      $('.pn-countdown b').textContent = n;
      if (elapsed >= 9.6) $('.pn-stage').classList.add('pn-countdown-departing');
      if (elapsed >= 10.4) { state.phase = 'studio'; renderStudio(); revealResults(); }
    } else if (state.phase === 'live') {
      const dt = (now - state.lastTick) / 1000; state.lastTick = now;
      if (state.paused || state.lateOpen) return;
      let next = Math.min(state.model.duration, state.minute + dt * state.speed);
      const showLate = state.model.lateAt !== null && !state.lateShown && next >= state.model.lateAt;
      if (showLate) next = state.model.lateAt;
      state.minute = next; state.current = M.at(state.model, next); updateLive();
      if (showLate) latePoll();
    }
  }
  window.PresidentialNight = { open };
})();
