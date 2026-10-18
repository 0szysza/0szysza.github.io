/* Presentation helpers only; calculations and scenario handlers live in the source pages. */
(() => {
  'use strict';
  const menu = document.querySelector('.sejm-tools-menu');
  document.addEventListener('click', event => { if (menu && !menu.contains(event.target)) menu.open = false; });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu?.open) { menu.open = false; menu.querySelector('summary').focus(); } });
  document.querySelector('.sejm-navigation .is-active')?.scrollIntoView({ block: 'nearest', inline: 'center' });
  // Support touch and keyboard access to source map tooltips without replacing their handlers.
  for (const svg of document.querySelectorAll('svg.map-svg, #map svg')) {
    if (!svg.hasAttribute('aria-label')) svg.setAttribute('aria-label', 'Interaktywna mapa wyborcza Polski');
  }
})();
