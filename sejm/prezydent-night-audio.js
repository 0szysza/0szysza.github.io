/* Local CC BY 4.0 soundtrack; see assets/election-night/music/CREDITS.html. */
(() => {
  'use strict';
  const base = new URL('assets/election-night/music/', document.currentScript.src);
  const tracks = { news: 'breaking-news-5.mp3', studio: 'breaking-news-6.mp3', finale: 'breaking-news-5.mp3' };
  const newsCueSeconds = 24;
  const storageKey = 'presidential-night-audio';
  const clamp = value => Math.max(0, Math.min(1, value));
  let preferences = { volume: .22, muted: false };
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved && Number.isFinite(saved.volume)) preferences.volume = clamp(saved.volume);
    if (typeof saved?.muted === 'boolean') preferences.muted = saved.muted;
  } catch (_) { /* Storage is optional, including when opened as a local file. */ }
  const save = () => { try { localStorage.setItem(storageKey, JSON.stringify(preferences)); } catch (_) {} };

  function create(onChange = () => {}) {
    let active = null, scene = 'intro', paused = false, destroyed = false, interval = null;
    const players = {};
    const canPlay = () => !destroyed && !paused && !document.hidden && !preferences.muted && preferences.volume > 0;
    const status = () => ({ ...preferences, blocked: !!active?.blocked, unavailable: !!active?.failed });
    const notify = () => { if (!destroyed) onChange(status()); };
    function play(player) {
      if (!player || !canPlay()) return;
      player.blocked = false;
      const promise = player.audio.play();
      promise?.then(() => {
        if (destroyed || !canPlay() || active !== player) player.audio.pause();
        notify();
      }).catch(error => {
        if (destroyed) return;
        if (error.name !== 'AbortError') {
          player.blocked = error.name === 'NotAllowedError';
          player.failed = !player.blocked;
          notify();
        }
      });
    }
    function getPlayer(key) {
      if (players[key]) return players[key];
      const audio = new Audio(new URL(tracks[key], base).href);
      audio.preload = 'none'; audio.volume = 0; audio.loop = key !== 'news';
      const player = { audio, key, blocked: false, failed: false };
      audio.addEventListener('error', () => { player.failed = true; notify(); });
      audio.addEventListener('ended', () => {
        if (!destroyed && active === player && key === 'news') select('studio');
      });
      // Use a short opening/late-poll cue, then crossfade to the longer news bed.
      // Media time keeps this aligned when playback is muted or paused.
      audio.addEventListener('timeupdate', () => {
        if (!destroyed && active === player && key === 'news' && audio.currentTime >= newsCueSeconds) select('studio');
      });
      players[key] = player;
      return player;
    }
    function select(key, restart = false) {
      const player = getPlayer(key);
      if (active === player && !restart) return;
      active = player;
      if (restart || player.audio.paused) {
        try { player.audio.currentTime = 0; } catch (_) {}
      }
      play(player); notify();
    }
    function fade() {
      const level = { intro: .95, exit: .8, studio: .55, live: .45, late: .85, finale: .8, official: .55 }[scene] ?? .55;
      Object.values(players).forEach(player => {
        const target = player === active && canPlay() ? preferences.volume * level : 0;
        const delta = target - player.audio.volume;
        player.audio.volume = clamp(Math.abs(delta) < .001 ? target : player.audio.volume + delta * .12);
        if (!target && player.audio.volume === 0 && !player.audio.paused) player.audio.pause();
      });
    }
    function suspendOrResume() {
      if (!canPlay()) Object.values(players).forEach(({ audio }) => { audio.volume = 0; audio.pause(); });
      else play(active);
      notify();
    }
    const visibility = () => suspendOrResume();
    const pageHide = () => destroy();
    function start() {
      if (destroyed || interval !== null) return;
      // Start all three elements silently within the user's click. This unlocks
      // later cues on browsers which require a gesture for each media element.
      if (canPlay()) Object.keys(tracks).forEach(key => play(getPlayer(key)));
      select('news');
      interval = setInterval(fade, 40);
      document.addEventListener('visibilitychange', visibility);
      window.addEventListener('pagehide', pageHide);
    }
    function setScene(next) {
      if (destroyed) return;
      scene = next;
      if (next === 'exit' && active?.key === 'news') return; // Let the opening resolve.
      select(next === 'intro' || next === 'late' ? 'news' : next === 'finale' || next === 'official' ? 'finale' : 'studio', next === 'late');
    }
    function toggleMute() {
      // A blocked player gets a fresh play request from this explicit gesture.
      preferences.muted = active?.blocked || active?.failed || preferences.volume === 0 ? false : !preferences.muted;
      if (!preferences.muted && !preferences.volume) preferences.volume = .22;
      if (active?.failed) { active.failed = false; active.audio.load(); }
      save(); suspendOrResume();
    }
    function setVolume(value) {
      if (!Number.isFinite(value)) return;
      preferences.volume = clamp(value);
      if (value > 0) preferences.muted = false;
      save();
      if (!canPlay() || active?.audio.paused) suspendOrResume(); else notify();
    }
    function setPaused(value) { paused = value; suspendOrResume(); }
    function destroy() {
      destroyed = true; clearInterval(interval); interval = null;
      document.removeEventListener('visibilitychange', visibility);
      window.removeEventListener('pagehide', pageHide);
      Object.values(players).forEach(({ audio }) => { audio.pause(); audio.removeAttribute('src'); audio.load(); });
      active = null;
    }
    return { start, setScene, toggleMute, setVolume, setPaused, destroy, status };
  }
  window.PresidentialNightAudio = { create };
})();
