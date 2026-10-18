// export.js - Skrypt do generowania grafiki z wynikami wyborów
// Wymaga załadowanej biblioteki html2canvas

async function svgToImage(svgNode, width = '100%', maxHeight = '420px') {
    if (!svgNode.getAttribute('width') || !svgNode.getAttribute('height')) {
        svgNode.setAttribute('width', '550');
        svgNode.setAttribute('height', '550');
    }
    const xml = new XMLSerializer().serializeToString(svgNode);
    const dataUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(xml);
    const img = new Image();
    img.style.width = width;
    img.style.height = 'auto';
    img.style.maxHeight = maxHeight;
    img.style.display = 'block';
    await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = dataUrl;
    });
    return img;
}

function prepareSvgElement(svgNode, strokeWidth = '1.5', options = {}) {
    const clone = svgNode.cloneNode(true);
    clone.id = 'exported-poland-map';
    if (!clone.getAttribute('xmlns')) {
        clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    }
    if (!clone.getAttribute('xmlns:inkscape')) {
        clone.setAttribute('xmlns:inkscape', 'http://www.inkscape.org/namespaces/inkscape');
    }
    if (!clone.getAttribute('xmlns:sodipodi')) {
        clone.setAttribute('xmlns:sodipodi', 'http://www.sodipodi.sourceforge.net/DTD/sodipodi-0.dtd');
    }

    const namedview = clone.querySelector('#namedview1');
    if (namedview) namedview.remove();

    clone.setAttribute('width', '550');
    clone.setAttribute('height', '550');
    clone.style.width = '100%';
    clone.style.height = 'auto';
    clone.style.maxHeight = '420px';
    clone.style.display = 'block';

    const isSejmiki = options.isSejmiki;
    const mapType = options.mapType;

    if (isSejmiki) {
        // Upewnij się, że definicje wzorców koalicyjnych (<pattern>) są w klonie SVG
        const defs = document.getElementById('map-defs');
        if (defs && !clone.querySelector('#map-defs')) {
            clone.insertBefore(defs.cloneNode(true), clone.firstChild);
        }

        if (mapType === 'voivodeships') {
            // Usuń ścieżki okręgów, zostaw tylko województwa
            clone.querySelectorAll('.district-path').forEach(p => p.remove());
            clone.querySelectorAll('.voivodeship-path').forEach(p => {
                p.style.display = 'block';
                p.style.transition = 'none';
                p.removeAttribute('opacity');
                p.style.opacity = '1';
                p.setAttribute('stroke', '#0b0d17');
                p.setAttribute('stroke-width', strokeWidth || '1.8');
            });
        } else {
            // Usuń ścieżki województw, zostaw tylko okręgi
            clone.querySelectorAll('.voivodeship-path').forEach(p => p.remove());
            clone.querySelectorAll('.district-path').forEach(p => {
                p.style.display = 'block';
                p.style.transition = 'none';
                p.removeAttribute('opacity');
                p.style.opacity = '1';
                if (!p.getAttribute('stroke') || p.getAttribute('stroke') === 'none') {
                    p.setAttribute('stroke', '#262d4a');
                }
                p.setAttribute('stroke-width', strokeWidth || '1.0');
            });
        }
    } else {
        // Ensure all paths have stroke & fill preserved and transitions disabled
        clone.querySelectorAll('path').forEach(p => {
            p.style.transition = 'none';
            if (!p.getAttribute('stroke') || p.getAttribute('stroke') === 'none') {
                p.setAttribute('stroke', '#262d4a');
            }
            p.setAttribute('stroke-width', strokeWidth);
            const fill = p.getAttribute('fill') || p.style.fill;
            if (!fill || fill === 'none') {
                p.setAttribute('fill', '#262d4a');
            }
        });
    }
    return clone;
}

async function exportGraphic(titlePrefix, options = {}) {
  options = options || {};
  const mapType = options.mapType || (typeof currentMapType !== 'undefined' ? currentMapType : 'districts');
  const coalitionMode = options.coalitionMode || 'together'; // 'together' (domyślnie) lub 'separate'

  const exportBtn = document.getElementById('exportBtn');
  if(exportBtn) {
    exportBtn.innerText = 'Generowanie...';
    exportBtn.disabled = true;
  }
  const confirmExportBtn = document.getElementById('confirmExportBtn');
  if(confirmExportBtn) {
    confirmExportBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" style="margin-right:8px;"></i>Generowanie...';
    confirmExportBtn.disabled = true;
  }

  // --- EXTRACT DATA ---
  
  // 1. Results (Mandaty)
  let partyResults = [];
  let sourceDiv = null;
  const breakdownSection = document.getElementById('breakdownSection');
  const breakdownNode = document.getElementById('breakdownResults');
  const mainResultsDiv = document.getElementById('results');

  if (coalitionMode === 'separate' && breakdownNode && breakdownNode.children.length > 0) {
      sourceDiv = breakdownNode;
  } else {
      sourceDiv = mainResultsDiv;
  }
  
  if (sourceDiv) {
      const resultNodes = sourceDiv.querySelectorAll('.result-top');
      resultNodes.forEach(node => {
          const name = node.querySelector('.result-name')?.textContent.trim() || '';
          const seatNode = node.querySelector('.seat');
          let seats = '0';
          if (seatNode) {
              const match = seatNode.textContent.trim().match(/^\d+/);
              if (match) seats = match[0];
          }
          
          // Kolory partii - naprawa błędu szarego podziału mandatów
          let color = '';
          let short = '';
          const avatar = node.querySelector('.result-avatar');
          if (avatar) {
              short = avatar.textContent.trim();
              const bg = avatar.style.backgroundColor || avatar.style.background;
              if (bg) {
                  const match = bg.match(/(#[0-9a-fA-F]{3,8}|rgb[a]?\([^)]+\))/);
                  if (match) color = match[1];
                  else if (!bg.includes('gradient')) color = bg;
              }
          }
          
          if (!color) {
              const colorBar = node.querySelector('.color-bar');
              if (colorBar) {
                  const bg = colorBar.style.backgroundColor || colorBar.style.background;
                  if (bg) {
                      const match = bg.match(/(#[0-9a-fA-F]{3,8}|rgb[a]?\([^)]+\))/);
                      if (match) color = match[1];
                      else color = bg;
                  }
              }
          }
          
          // Dopasowanie koloru z bazy partii PARTIE
          if (!color || color === '#ccc') {
              if (typeof PARTIE !== 'undefined' && Array.isArray(PARTIE)) {
                  const found = PARTIE.find(p => p.name === name || p.key === name || p.short === name);
                  if (found) {
                      color = found.color;
                      if (!short) short = found.short;
                  }
              }
          }
          // Fallback do entityColor
          if (!color || color === '#ccc') {
              if (window.lastElectionState && window.lastElectionState.entityColor) {
                  for (const [k, c] of Object.entries(window.lastElectionState.entityColor)) {
                      if (name.includes(k) || (window.lastElectionState.entityLabel && window.lastElectionState.entityLabel[k] === name)) {
                          color = c;
                          break;
                      }
                  }
              }
          }
          
          if (!color || color === '#ccc') color = '#34bfe5';
          
          if (name && parseInt(seats) > 0) {
              partyResults.push({ name, seats: parseInt(seats), color, short });
          }
      });
      partyResults.sort((a,b) => b.seats - a.seats);
  }

  // 2. Poparcie (Horizontal Bar Chart)
  let poparcieItems = [];
  const poparcieNodes = document.querySelectorAll('.pop-horizontal-item');
  poparcieNodes.forEach(node => {
      const avatar = node.querySelector('.pop-horizontal-avatar');
      const short = avatar ? avatar.textContent.trim() : '';
      let color = '#888';
      if(avatar) {
          const colorMatch = avatar.style.background.match(/(#[0-9a-fA-F]+|rgb\([^)]+\))/);
          if(colorMatch) color = colorMatch[1];
          else color = avatar.style.backgroundColor;
      }
      const percent = node.querySelector('.pop-horizontal-percent')?.textContent.trim() || '0%';
      const votes = node.querySelector('.pop-horizontal-votes')?.textContent.trim() || '';
      const bar = node.querySelector('.pop-horizontal-bar');
      const barWidth = bar ? bar.style.width : '0%';
      poparcieItems.push({ short, color, percent, votes, barWidth });
  });

  // 3. Wybór i przygotowanie Mapy
  const isSejmiki = window.location.pathname.includes('sejmiki') || titlePrefix.toLowerCase().includes('sejmiki');
  const isSejm = !isSejmiki && (window.location.pathname.includes('sejm') || titlePrefix.toLowerCase().includes('sejm'));

  let mapSvg = null;
  let mapBoxTitle = 'Zwycięzcy w okręgach';
  let mapStrokeWidth = '1.5';
  let prevSejmikiMapType = null;

  if (isSejm) {
      if (mapType === 'powiaty') {
          if (typeof updateMapPowiaty === 'function' && window.lastElectionState) {
              updateMapPowiaty(window.lastElectionState);
          }
          mapSvg = document.getElementById('poland-map');
          mapBoxTitle = 'Zwycięzcy w powiatach';
          mapStrokeWidth = '0.6';
      } else if (mapType === 'voivodeships') {
          if (typeof updateMapVoivodeships === 'function' && window.lastElectionState) {
              updateMapVoivodeships(window.lastElectionState);
          }
          mapSvg = document.getElementById('map-wojewodztwa');
          mapBoxTitle = 'Zwycięzcy w województwach';
          mapStrokeWidth = '2.5';
      } else {
          // districts (default)
          if (typeof updateMapDistricts === 'function' && window.lastElectionState) {
              updateMapDistricts(window.lastElectionState);
          }
          mapSvg = document.getElementById('map-okregi-sejm') || document.getElementById('poland-map');
          mapBoxTitle = 'Zwycięzcy w okręgach';
          mapStrokeWidth = '1.5';
      }
  } else if (isSejmiki) {
      prevSejmikiMapType = (typeof currentMapType !== 'undefined') ? currentMapType : 'districts';
      mapSvg = document.getElementById('poland-map');
      if (mapType === 'voivodeships') {
          if (typeof switchMapType === 'function') {
              switchMapType('voivodeships');
          }
          if (typeof updateMapVoivodeships === 'function' && window.lastElectionState) {
              updateMapVoivodeships(window.lastElectionState);
          }
          mapBoxTitle = 'Większości w województwach';
          mapStrokeWidth = '1.8';
      } else {
          // districts (default)
          if (typeof switchMapType === 'function') {
              switchMapType('districts');
          }
          if (typeof updateMapDistricts === 'function' && window.lastElectionState) {
              updateMapDistricts(window.lastElectionState);
          }
          mapBoxTitle = 'Zwycięzcy w okręgach';
          mapStrokeWidth = '1.0';
      }
  } else {
      mapSvg = document.getElementById('poland-map') || document.getElementById('map-okregi-sejm') || document.getElementById('map-wojewodztwa');
  }

  // --- BUILD MODERN LAYOUT ---

  const wrapper = document.createElement('div');
  wrapper.style.position = 'absolute';
  wrapper.style.left = '-9999px';
  wrapper.style.top = '0';
  wrapper.style.width = '1200px';
  // Nowoczesne tło (Glassmorphism / Dark Modern)
  wrapper.style.background = 'linear-gradient(135deg, #0b0d17 0%, #151f38 100%)';
  wrapper.style.color = '#e2e8f0';
  wrapper.style.padding = '40px';
  wrapper.style.fontFamily = '"Segoe UI", Roboto, Helvetica, Arial, sans-serif';
  wrapper.style.boxSizing = 'border-box';
  
  // Header
  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.justifyContent = 'space-between';
  header.style.alignItems = 'center';
  header.style.marginBottom = '35px';
  header.style.paddingBottom = '20px';
  header.style.borderBottom = '2px solid rgba(255,255,255,0.1)';
  header.innerHTML = `
      <div>
        <h1 style="margin:0; font-size: 32px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">${titlePrefix}</h1>
        <div style="font-size: 14px; color: #94a3b8; margin-top: 5px;">Symulacja wyborcza &bull; DawidStats.pl</div>
      </div>
      <div style="font-size: 28px; background: rgba(255,255,255,0.08); padding: 10px 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">🗳️</div>
  `;
  wrapper.appendChild(header);

  // Content Grid
  const grid = document.createElement('div');
  grid.style.display = 'flex';
  grid.style.gap = '35px';
  
  // LEWA KOLUMNA: POPARCIE (Wykres Horyzontalny) + WYKRES PARLAMENTU (DLA SEJMU)
  const leftCol = document.createElement('div');
  leftCol.style.flex = '1.15';
  leftCol.style.display = 'flex';
  leftCol.style.flexDirection = 'column';
  leftCol.style.gap = '25px';

  if (poparcieItems.length > 0) {
      const popBox = document.createElement('div');
      popBox.style.background = 'rgba(255,255,255,0.03)';
      popBox.style.borderRadius = '20px';
      popBox.style.padding = '25px';
      popBox.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
      popBox.style.border = '1px solid rgba(255,255,255,0.05)';
      popBox.style.display = 'flex';
      popBox.style.flexDirection = 'column';
      
      const popTitle = document.createElement('h3');
      popTitle.innerText = 'Wynik Poparcia (%)';
      popTitle.style.margin = '0 0 20px 0';
      popTitle.style.fontSize = '22px';
      popTitle.style.color = '#fff';
      popBox.appendChild(popTitle);

      const popList = document.createElement('div');
      popList.style.display = 'flex';
      popList.style.flexDirection = 'column';
      popList.style.gap = '14px';

      poparcieItems.forEach(item => {
          const row = document.createElement('div');
          row.style.display = 'flex';
          row.style.alignItems = 'center';
          row.style.gap = '15px';
          
          row.innerHTML = `
            <div style="width: 44px; height: 44px; border-radius: 50%; background: ${item.color}; text-align: center; line-height: 44px; font-weight: bold; font-size: 14px; color: #ffffff !important; flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">${item.short}</div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: 6px;">
                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                    <span style="font-weight: 800; font-size: 20px; color: #ffffff !important;">${item.percent}</span>
                    <span style="font-size: 14px; color: rgba(255,255,255,0.8) !important;">${item.votes}</span>
                </div>
                <div style="height: 12px; background: rgba(255,255,255,0.05); border-radius: 6px; overflow: hidden;">
                    <div style="width: ${item.barWidth}; height: 100%; background: ${item.color}; border-radius: 6px; box-shadow: 0 0 8px ${item.color};"></div>
                </div>
            </div>
          `;
          popList.appendChild(row);
      });
      popBox.appendChild(popList);
      leftCol.appendChild(popBox);
  }

  // PODSUMOWANIE SALI SEJMOWEJ (TYLKO DLA SEJMU)
  const origParlSvg = document.getElementById('parliament-svg');
  if (origParlSvg) {
      const parlBox = document.createElement('div');
      parlBox.style.background = 'rgba(255,255,255,0.03)';
      parlBox.style.borderRadius = '20px';
      parlBox.style.padding = '24px';
      parlBox.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
      parlBox.style.border = '1px solid rgba(255,255,255,0.05)';
      parlBox.style.display = 'flex';
      parlBox.style.flexDirection = 'column';
      parlBox.style.alignItems = 'center';
      
      const parlTitle = document.createElement('h3');
      const isSeparateMode = (coalitionMode === 'separate' && breakdownNode && breakdownNode.children.length > 0);
      parlTitle.innerText = `Układ Sali Sejmowej${isSeparateMode ? ' (wg partii)' : ''}`;
      parlTitle.style.margin = '0 0 15px 0';
      parlTitle.style.fontSize = '22px';
      parlTitle.style.color = '#fff';
      parlTitle.style.alignSelf = 'flex-start';
      parlBox.appendChild(parlTitle);

      const clonedParlSvg = origParlSvg.cloneNode(true);
      clonedParlSvg.id = 'exported-parliament-svg';
      if (!clonedParlSvg.getAttribute('xmlns')) {
          clonedParlSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      }
      clonedParlSvg.style.width = '100%';
      clonedParlSvg.style.height = 'auto';
      clonedParlSvg.style.maxHeight = '240px';
      clonedParlSvg.style.display = 'block';
      clonedParlSvg.style.overflow = 'visible';
      
      // Wyłączenie animacji/transition na kropkach dla natychmiastowego czystego zrzutu
      clonedParlSvg.querySelectorAll('circle').forEach(c => {
          c.style.transition = 'none';
          c.style.animation = 'none';
          c.style.opacity = '1';
      });

      // JEŚLI WYBRANO "OSOBNO DLA PARTII": KROPKI I LEGENDA ROZBITE NA POSZCZEGÓLNE PARTIE
      if (isSeparateMode && partyResults.length > 0) {
          const getOrient = (p) => {
              if (typeof politicalOrientation !== 'undefined') {
                  const partyObj = (typeof PARTIE !== 'undefined' && Array.isArray(PARTIE))
                      ? PARTIE.find(pp => pp.name === p.name || pp.short === p.short || pp.key === p.name)
                      : null;
                  const key = partyObj ? partyObj.key : p.name;
                  if (politicalOrientation[key] !== undefined) return politicalOrientation[key];
              }
              return 0;
          };

          const sortedPartiesForChamber = [...partyResults].sort((a, b) => getOrient(a) - getOrient(b));

          const totalChamberSeats = sortedPartiesForChamber.reduce((sum, p) => sum + p.seats, 0) || 460;
          const seatList = [];
          sortedPartiesForChamber.forEach(p => {
              for (let i = 0; i < p.seats; i++) {
                  seatList.push(p);
              }
          });
          while (seatList.length < totalChamberSeats) {
              seatList.push(null);
          }

          const circles = clonedParlSvg.querySelectorAll('#parliament-dots circle');
          circles.forEach((circle, idx) => {
              const party = seatList[idx];
              if (party) {
                  circle.setAttribute('fill', party.color);
                  circle.setAttribute('stroke', 'none');
              } else {
                  circle.setAttribute('fill', '#2a344d');
                  circle.setAttribute('stroke', '#3d4b6c');
                  circle.setAttribute('stroke-width', '1');
              }
          });

          parlBox.appendChild(clonedParlSvg);

          // Legenda dla osobnych partii
          const sepLegend = document.createElement('div');
          sepLegend.id = 'exported-parliament-legend';
          sepLegend.style.display = 'flex';
          sepLegend.style.flexWrap = 'wrap';
          sepLegend.style.justifyContent = 'center';
          sepLegend.style.gap = '6px 10px';
          sepLegend.style.marginTop = '14px';
          sepLegend.style.width = '100%';

          sortedPartiesForChamber.forEach(p => {
              const item = document.createElement('div');
              item.style.display = 'flex';
              item.style.alignItems = 'center';
              item.style.gap = '6px';
              item.style.background = 'rgba(0,0,0,0.25)';
              item.style.padding = '4px 10px';
              item.style.borderRadius = '8px';
              item.style.fontSize = '12px';
              item.style.color = '#e2e8f0';
              item.style.border = '1px solid rgba(255,255,255,0.06)';

              item.innerHTML = `
                  <span style="display:inline-block; width:10px; height:10px; border-radius:50%; background:${p.color}; flex-shrink:0;"></span>
                  <span>${p.name}</span>
                  <span style="font-weight:bold; color:#fff;">(${p.seats})</span>
              `;
              sepLegend.appendChild(item);
          });
          parlBox.appendChild(sepLegend);

      } else {
          // Tryb domyślny ("Razem"): oryginalne kropki i legenda z podsumowania łącznego
          parlBox.appendChild(clonedParlSvg);

          const origParlLegend = document.getElementById('parliament-legend');
          if (origParlLegend && origParlLegend.children.length > 0) {
              const clonedLegend = origParlLegend.cloneNode(true);
              clonedLegend.id = 'exported-parliament-legend';
              clonedLegend.style.display = 'flex';
              clonedLegend.style.flexWrap = 'wrap';
              clonedLegend.style.justifyContent = 'center';
              clonedLegend.style.gap = '6px 10px';
              clonedLegend.style.marginTop = '14px';
              clonedLegend.style.width = '100%';
              
              clonedLegend.querySelectorAll('.parliament-legend-item').forEach(item => {
                  item.style.display = 'flex';
                  item.style.alignItems = 'center';
                  item.style.gap = '6px';
                  item.style.background = 'rgba(0,0,0,0.25)';
                  item.style.padding = '4px 10px';
                  item.style.borderRadius = '8px';
                  item.style.fontSize = '12px';
                  item.style.color = '#e2e8f0';
                  item.style.border = '1px solid rgba(255,255,255,0.06)';
              });
              clonedLegend.querySelectorAll('.parliament-legend-dot').forEach(dot => {
                  dot.style.display = 'inline-block';
                  dot.style.width = '10px';
                  dot.style.height = '10px';
                  dot.style.borderRadius = '50%';
                  dot.style.flexShrink = '0';
              });
              clonedLegend.querySelectorAll('.parliament-legend-seats').forEach(s => {
                  s.style.fontWeight = 'bold';
                  s.style.color = '#fff';
              });
              parlBox.appendChild(clonedLegend);
          }
      }

      leftCol.appendChild(parlBox);
  }

  grid.appendChild(leftCol);

  // PRAWA KOLUMNA: MAPA + WYNIKI MANDATÓW
  const rightCol = document.createElement('div');
  rightCol.style.flex = '1';
  rightCol.style.display = 'flex';
  rightCol.style.flexDirection = 'column';
  rightCol.style.gap = '25px';

  if (mapSvg) {
      const mapBox = document.createElement('div');
      mapBox.style.background = 'rgba(255,255,255,0.03)';
      mapBox.style.borderRadius = '20px';
      mapBox.style.padding = '25px';
      mapBox.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
      mapBox.style.border = '1px solid rgba(255,255,255,0.05)';
      mapBox.style.display = 'flex';
      mapBox.style.flexDirection = 'column';
      mapBox.style.alignItems = 'center';
      
      const mapTitle = document.createElement('h3');
      mapTitle.innerText = mapBoxTitle;
      mapTitle.style.margin = '0 0 15px 0';
      mapTitle.style.fontSize = '22px';
      mapTitle.style.color = '#fff';
      mapTitle.style.alignSelf = 'flex-start';
      mapBox.appendChild(mapTitle);

      const clonedSvg = prepareSvgElement(mapSvg, mapStrokeWidth, { isSejmiki, mapType });
      
      try {
          // Renderowanie przez Image daje 100% wsparcie dla deseń koalicyjnych (<pattern>)
          const mapImg = await svgToImage(clonedSvg);
          mapBox.appendChild(mapImg);
      } catch (imgErr) {
          console.warn('Fallback to direct SVG node:', imgErr);
          mapBox.appendChild(clonedSvg);
      }
      
      rightCol.appendChild(mapBox);
  }

  const resultsBox = document.createElement('div');
  resultsBox.style.background = 'rgba(255,255,255,0.03)';
  resultsBox.style.borderRadius = '20px';
  resultsBox.style.padding = '25px';
  resultsBox.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
  resultsBox.style.border = '1px solid rgba(255,255,255,0.05)';
  resultsBox.style.flex = '1';
  
  const isBreakdownMode = (coalitionMode === 'separate' && sourceDiv === breakdownNode);
  const breakdownSuffix = isBreakdownMode ? ' (rozbicie na partie)' : '';
  resultsBox.innerHTML = `<h3 style="margin: 0 0 18px 0; font-size: 22px; color: #fff;">Podział Mandatów${breakdownSuffix}</h3>`;
  
  const resultsList = document.createElement('div');
  resultsList.style.display = 'flex';
  resultsList.style.flexDirection = 'column';
  resultsList.style.gap = '10px';

  partyResults.forEach(p => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.justifyContent = 'space-between';
      row.style.alignItems = 'center';
      row.style.background = 'rgba(0,0,0,0.25)';
      row.style.padding = '12px 18px';
      row.style.borderRadius = '12px';
      row.style.borderLeft = `6px solid ${p.color}`;
      row.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      
      const avatarHtml = p.short ? `
          <div style="width: 36px; height: 36px; border-radius: 50%; background: ${p.color}; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 13px; color: #ffffff !important; flex-shrink: 0; box-shadow: 0 2px 6px rgba(0,0,0,0.3); text-shadow: 0 1px 2px rgba(0,0,0,0.5);">${p.short}</div>
      ` : `
          <div style="width: 14px; height: 14px; border-radius: 50%; background: ${p.color}; flex-shrink: 0; box-shadow: 0 0 8px ${p.color};"></div>
      `;

      row.innerHTML = `
          <div style="display: flex; align-items: center; gap: 14px;">
              ${avatarHtml}
              <div style="font-size: 18px; font-weight: 600; color: #ffffff;">${p.name}</div>
          </div>
          <div style="font-size: 26px; font-weight: 900; color: ${p.color}; text-shadow: 0 2px 6px rgba(0,0,0,0.4);">${p.seats}</div>
      `;
      resultsList.appendChild(row);
  });
  
  resultsBox.appendChild(resultsList);
  rightCol.appendChild(resultsBox);
  
  grid.appendChild(rightCol);
  wrapper.appendChild(grid);

  // Stopka / Watermark
  const footer = document.createElement('div');
  footer.style.marginTop = '35px';
  footer.style.paddingTop = '18px';
  footer.style.borderTop = '2px solid rgba(255,255,255,0.1)';
  footer.style.display = 'flex';
  footer.style.justifyContent = 'space-between';
  footer.style.color = '#94a3b8';
  footer.style.fontSize = '16px';
  footer.innerHTML = `
      <div>Źródło: <strong style="color:#fff;">dawidstats.pl</strong></div>
      <div>X (Twitter): <strong style="color:#fff;">@DawidStats</strong></div>
  `;
  wrapper.appendChild(footer);

  document.body.appendChild(wrapper);

  // --- RENDER & EXPORT ---
  try {
      const canvas = await html2canvas(wrapper, {
          backgroundColor: '#0b0d17',
          scale: 2, // 2x dla Retina (wysoka jakość)
          useCORS: true
      });
      const link = document.createElement('a');
      link.download = `symulacja_${titlePrefix.replace(/[^a-zA-Z0-9]+/g, '_').toLowerCase()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
  } catch (err) {
      console.error('Błąd generowania grafiki:', err);
      alert('Wystąpił błąd podczas generowania grafiki.');
  } finally {
      document.body.removeChild(wrapper);
      if(exportBtn) {
          exportBtn.innerHTML = '<i class="fa-solid fa-download" style="margin-right: 6px;"></i>Pobierz grafikę';
          exportBtn.disabled = false;
      }
      if (confirmExportBtn) {
          confirmExportBtn.innerHTML = '<i class="fa-solid fa-download" style="margin-right: 8px;"></i>Pobierz grafikę (PNG)';
          confirmExportBtn.disabled = false;
      }
      // Przywróć aktywny widok mapy użytkownika na ekranie
      if (isSejmiki && prevSejmikiMapType) {
          if (typeof switchMapType === 'function') {
              switchMapType(prevSejmikiMapType);
          }
          if (typeof updateMap === 'function' && window.lastElectionState) {
              updateMap(window.lastElectionState);
          }
      } else if (typeof updateMap === 'function' && window.lastElectionState) {
          updateMap(window.lastElectionState);
      }
  }
}
