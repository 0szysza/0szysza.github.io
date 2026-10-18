/* Standalone PNG composition from the calculator's current results and local map paths. */
(() => {
  'use strict';
  let dialog, imageUrl;
  let revision = 0;
  const $ = selector => dialog.querySelector(selector);
  const pct = value => Number(value).toLocaleString('pl-PL', { minimumFractionDigits:2, maximumFractionDigits:2 }) + '%';

  function clearPreview() {
    revision++;
    if (imageUrl) URL.revokeObjectURL(imageUrl);
    imageUrl = null;
    $('.pe-preview').hidden = true;
    $('.pe-preview img').removeAttribute('src');
    $('.pe-download').hidden = true;
    $('.pe-download').removeAttribute('href');
    $('.pe-status').textContent = 'Wybierz mapę, a następnie wygeneruj podgląd.';
  }

  function open() {
    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.className = 'pe-dialog';
      dialog.setAttribute('aria-labelledby', 'pe-title');
      dialog.innerHTML = `
        <div class="pe-header"><div><div class="pe-eyebrow">DAWIDSTATS / EKSPORT WYNIKÓW</div><h2 id="pe-title">Twoje wybory na jednej grafice</h2><p>Wyniki, zdjęcia kandydatów, frekwencja i mapy obu tur.</p></div><button type="button" class="pe-close" aria-label="Zamknij">×</button></div>
        <div class="pe-body"><form>
          <div class="pe-options">
            <fieldset><legend>Wybierz podział obu map</legend><div class="pe-choices">
              <label class="pe-choice"><input type="radio" name="geography" value="powiaty" checked><span><b>Powiaty</b><small>380 powiatów</small></span></label>
              <label class="pe-choice"><input type="radio" name="geography" value="wojewodztwa"><span><b>Województwa</b><small>16 województw</small></span></label>
            </div></fieldset>
          </div>
          <p class="pe-hint">Na grafice zawsze znajdą się wyniki i mapy I oraz II tury, obie frekwencje i okrągłe zdjęcia kandydatów. Wybrany podział dotyczy obu map. Kolory oznaczają regionalnych liderów.</p>
          <div class="pe-actions"><button type="submit" class="pe-primary">Generuj grafikę</button><a class="pe-download" hidden>Pobierz PNG</a></div>
          <p class="pe-status" role="status" aria-live="polite"></p>
        </form><figure class="pe-preview" hidden><img alt="Podgląd grafiki: wyniki i mapy I oraz II tury, frekwencja i okrągłe zdjęcia kandydatów"><figcaption></figcaption></figure></div>`;
      document.body.appendChild(dialog);
      $('.pe-close').addEventListener('click', () => dialog.close());
      dialog.addEventListener('close', clearPreview);
      $('form').addEventListener('change', clearPreview);
      $('form').addEventListener('submit', generate);
    }
    if (dialog.open) return;
    $(`input[name="geography"][value="${currentMapView}"]`).checked = true;
    clearPreview();
    dialog.showModal();
  }

  function loadPhoto(url) {
    if (!url) return Promise.resolve(null);
    return new Promise(resolve => {
      const img = new Image();
      // Only origin-clean images may enter the downloadable canvas.
      img.crossOrigin = 'anonymous';
      const finish = value => { clearTimeout(timer); img.onload = img.onerror = null; resolve(value); };
      const timer = setTimeout(() => finish(null), 7000);
      img.onload = () => finish(img.naturalWidth ? img : null);
      img.onerror = () => finish(null);
      img.src = url;
    });
  }

  async function candidatePhoto(candidate) {
    // Resolve the exact configured local asset; never substitute a different person's portrait.
    let embedded;
    try {
      const source = new URL(candidate.photoUrl, document.baseURI);
      const directory = new URL('.', document.baseURI);
      if (source.protocol === directory.protocol && source.host === directory.host && source.pathname.startsWith(directory.pathname)) {
        const relative = decodeURIComponent(source.pathname.slice(directory.pathname.length));
        embedded = window.PRESIDENTIAL_EXPORT_PHOTOS?.[relative];
      }
    } catch { /* Custom data URLs and unavailable images use the normal loader below. */ }
    if (location.protocol === 'file:' && embedded) return loadPhoto(embedded);
    return await loadPhoto(candidate.photoUrl) || await loadPhoto(embedded) || await loadPhoto(candidate.photoFallback);
  }

  async function compose(geography) {
    const sum = CANDIDATES_CONFIG.reduce((total,c) => total + (candidateSupports[c.id] || 0), 0);
    if (!(sum > 0)) throw new Error('Ustaw poparcie kandydatów w I turze, aby wygenerować grafikę.');
    const r1 = CANDIDATES_CONFIG.filter(c => candidateSupports[c.id] > 0)
      .map(c => ({ ...c, pct:candidateSupports[c.id] / sum * 100 })).sort((a,b) => b.pct-a.pct);
    const r2 = [{ ...lastR2Results.candA, pct:lastR2Results.natPctA }, { ...lastR2Results.candB, pct:lastR2Results.natPctB }].sort((a,b) => b.pct-a.pct);
    const turnouts = [turnoutR1, turnoutR2];
    const maps = [lastR1Results, lastR2Results].map((source, index) => {
      const regional = geography === 'powiaty' ? source.powiatResults : source.voivResults;
      const winners = new Set(Object.values(regional).map(r => r.winner).filter(Boolean));
      const legend = (index === 0 ? r1 : r2).filter(c => winners.has(c.id));
      return { regional, legend, height:590 + legend.length * 34 };
    });
    const candidates = [...new Map([...r1,...r2].map(c => [c.id,c])).values()];
    const photos = new Map(await Promise.all(candidates.map(async c => [c.id, await candidatePhoto(c)])));
    const missingPhotos = candidates.filter(c => !photos.get(c.id)).length;
    const width = 1800, height = Math.max(590 + r1.length * 100, 834 + maps[0].height + maps[1].height);
    const canvas = document.createElement('canvas');
    canvas.width = width; canvas.height = height;
    const ctx = canvas.getContext('2d');
    const text = (str,x,y,size=24,color='#eaf1ff',weight=400,maxWidth) => {
      ctx.font = `${weight} ${size}px "Segoe UI", Arial, sans-serif`;
      ctx.fillStyle = color;
      // Shrink long custom candidate names instead of clipping them.
      if (maxWidth && ctx.measureText(str).width > maxWidth) {
        ctx.font = `${weight} ${Math.max(10,size * maxWidth / ctx.measureText(str).width)}px "Segoe UI", Arial, sans-serif`;
      }
      ctx.fillText(str,x,y);
    };
    const box = (x,y,w,h,color,r=20) => { ctx.fillStyle=color; ctx.beginPath(); ctx.roundRect(x,y,w,h,r); ctx.fill(); };
    const portrait = (c,x,y) => {
      const radius = 42, img = photos.get(c.id);
      ctx.save();
      ctx.beginPath(); ctx.arc(x,y,radius,0,Math.PI*2); ctx.clip();
      ctx.fillStyle='#263953'; ctx.fillRect(x-radius,y-radius,radius*2,radius*2);
      if (img) {
        // Match object-fit: cover / object-position: top used for candidate portraits.
        const side = Math.min(img.naturalWidth,img.naturalHeight);
        ctx.drawImage(img,(img.naturalWidth-side)/2,0,side,side,x-radius,y-radius,radius*2,radius*2);
      } else {
        ctx.textAlign='center';
        text(c.initials || c.name.split(/\s+/).map(part=>part[0]).slice(0,2).join(''),x,y+9,25,'#fff',700);
      }
      ctx.restore();
      ctx.beginPath(); ctx.arc(x,y,radius+2,0,Math.PI*2);
      ctx.strokeStyle=c.partyColor; ctx.lineWidth=4; ctx.stroke();
    };
    const supportBar = (x,y,w,value,color) => {
      const h=28, fillWidth=w*Math.max(0,Math.min(100,value))/100;
      box(x,y,w,h,'#0a1426',h/2);
      if (fillWidth<=0) return;
      ctx.save();
      ctx.beginPath(); ctx.roundRect(x,y,fillWidth,h,Math.min(h/2,fillWidth/2)); ctx.clip();
      const gradient=ctx.createLinearGradient(x,y,x,y+h);
      gradient.addColorStop(0,mixWithWhite(color,.85)); gradient.addColorStop(1,color);
      ctx.fillStyle=gradient; ctx.fillRect(x,y,fillWidth,h);
      ctx.restore();
      ctx.strokeStyle='#ffffff16'; ctx.lineWidth=1;
      ctx.beginPath(); ctx.roundRect(x,y,w,h,h/2); ctx.stroke();
    };
    const resultRow = (c,x,y,w) => {
      portrait(c,x+44,y+5);
      text(c.name,x+112,y,26,'#f5f8ff',650,w-270);
      ctx.textAlign='right'; text(pct(c.pct),x+w,y,29,'#fff',750); ctx.textAlign='left';
      supportBar(x+112,y+16,w-112,c.pct,c.partyColor);
    };
    ctx.fillStyle='#0b1222'; ctx.fillRect(0,0,width,height);
    const gradient=ctx.createLinearGradient(0,0,width,220); gradient.addColorStop(0,'#1e3a64'); gradient.addColorStop(1,'#17223c');
    ctx.fillStyle=gradient; ctx.fillRect(0,0,width,220);
    box(56,53,5,108,'#7faaff',2);
    text('DAWIDSTATS  /  KALKULATOR WYBORÓW',82,75,20,'#adcbff',700);
    text('Wybory prezydenckie',80,135,55,'#fff',750);
    text('Symulacja wyników • głosy powszechne',82,178,24,'#b9cbe8');
    ctx.textAlign='right'; text('I + II TURA',1744,111,26,'#afc9ff',700); ctx.textAlign='left';
    const turnout = (x,label,value,color) => {
      box(x,250,829,112,'#18253c');
      box(x+24,276,5,58,color,2);
      text(label,x+48,295,20,'#aebfd9',600);
      text(pct(value),x+48,338,36,'#fff',750);
    };
    turnout(56,'FREKWENCJA / I TURA',turnouts[0],'#82abff');
    turnout(915,'FREKWENCJA / II TURA',turnouts[1],'#bcadff');
    box(56,392,829,height-476,'#131f34');
    text('01',84,447,23,'#82abff',700); text('Wyniki I tury',137,447,31,'#fff',700);
    const rowSpacing = Math.min(140,(height-680)/Math.max(1,r1.length-1));
    r1.forEach((c,i) => resultRow(c,86,520+i*rowSpacing,769));
    box(915,392,829,298,'#131f34');
    text('02',943,447,23,'#bcadff',700); text('Wyniki II tury',996,447,31,'#fff',700);
    r2.forEach((c,i) => resultRow(c,945,510+i*96,769));
    const svg = document.getElementById(geography === 'powiaty' ? 'poland-map' : 'map-wojewodztwa');
    const paths = svg.querySelectorAll(geography === 'powiaty' ? '.powiat-path' : '.voivodeship-path');
    const view = svg.viewBox.baseVal;
    const scale = Math.min(749/view.width,440/view.height);
    const mapWidth=view.width*scale;
    let mapY = 720;
    maps.forEach((map,index) => {
      box(915,mapY,829,map.height,'#131f34');
      text(index === 0 ? '03' : '04',943,mapY+51,23,'#86ddc8',700);
      text(`Mapa ${index === 0 ? 'I' : 'II'} tury`,996,mapY+51,31,'#fff',700);
      text(`${geography === 'powiaty' ? '380 powiatów' : '16 województw'} · liderzy według udziału w głosach`,945,mapY+90,21,'#aebfd9');
      ctx.save(); ctx.translate(955+(749-mapWidth)/2,mapY+112); ctx.scale(scale,scale); ctx.translate(-view.x,-view.y);
      paths.forEach(path => {
        const key=(path.getAttribute('data-name') || '').toLowerCase().trim();
        const cand=candidates.find(c => c.id === map.regional[key]?.winner);
        const shape=new Path2D(path.getAttribute('d'));
        ctx.fillStyle=cand?.partyColor || '#34425b'; ctx.fill(shape);
        ctx.strokeStyle='#0b1222'; ctx.lineWidth=geography === 'powiaty' ? 1.8 : 4; ctx.stroke(shape);
      });
      ctx.restore();
      map.legend.forEach((c,i) => { box(947,mapY+572+i*34,14,14,c.partyColor,3); text(c.name,974,mapY+586+i*34,21,'#d7e3f6',500,738); });
      mapY += map.height+30;
    });
    ctx.fillStyle='#2a3b56'; ctx.fillRect(56,height-58,1688,1);
    text('Symulacja z bieżących ustawień kalkulatora • udziały w głosach, nie oficjalne wyniki wyborów',56,height-26,18,'#91a6c5');
    ctx.textAlign='right'; text('DawidStats',1744,height-26,19,'#b9cbe8',700);
    return { canvas, missingPhotos };
  }

  async function generate(event) {
    event.preventDefault();
    clearPreview();
    const generation = revision;
    const button=$('.pe-primary');
    button.disabled=true;
    $('.pe-status').textContent='Generowanie grafiki…';
    $('form').setAttribute('aria-busy','true');
    dialog.querySelectorAll('input').forEach(input => { input.disabled=true; });
    try {
      await new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve,0)));
      if (!dialog.open || generation !== revision) return;
      updateCalculation();
      const geography=$('input[name="geography"]:checked').value;
      const { canvas, missingPhotos }=await compose(geography);
      if (!dialog.open || generation !== revision) return;
      const blob=await new Promise((resolve,reject) => canvas.toBlob(b => b ? resolve(b) : reject(new Error('Nie udało się zapisać PNG. Spróbuj ponownie.')),'image/png'));
      if (!dialog.open || generation !== revision) return;
      imageUrl=URL.createObjectURL(blob);
      $('.pe-preview img').src=imageUrl;
      $('.pe-preview').hidden=false;
      $('.pe-preview figcaption').textContent=`PNG · ${canvas.width} × ${canvas.height} px · wyniki i mapy obu tur`;
      $('.pe-download').href=imageUrl;
      $('.pe-download').download=`wybory-prezydenckie-${geography}-obie-tury.png`;
      $('.pe-download').hidden=false;
      $('.pe-status').textContent='Grafika gotowa. Sprawdź podgląd i wybierz „Pobierz PNG”.' + (missingPhotos ? ` Brak dostępnego zdjęcia dla ${missingPhotos} kandydatów — w ich miejscu użyto inicjałów.` : '');
    } catch(error) {
      $('.pe-status').textContent=error.message || 'Nie udało się wygenerować grafiki. Spróbuj ponownie.';
    } finally {
      button.disabled=false;
      $('form').removeAttribute('aria-busy');
      dialog.querySelectorAll('input').forEach(input => { input.disabled=false; });
    }
  }
  window.PresidentialExport={open};
})();
