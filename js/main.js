/* meddo.pl – makieta. Slider sekcji „Jeden ekosystem” i atrapa formularza. */
(function () {
  'use strict';

  /* ---------- Slider ---------- */
  var bar = document.querySelector('.eko-bar');
  if (bar) {
    var SLIDE_MS = 12000;   // jak długo widać slajd w trybie automatycznym
    var IDLE_MS = 12000;    // po ilu ms bez interakcji timer rusza ponownie
    var TICK_MS = 100;
    var RING = 56.55;       // obwód okręgu spinnera (2πr, r = 9)

    var tabs = Array.prototype.slice.call(bar.querySelectorAll('.tab'));
    var slides = Array.prototype.slice.call(document.querySelectorAll('[data-slide]'));
    var active = 0, mode = 'auto', progress = 0, lastPick = 0;

    function render() {
      bar.setAttribute('data-mode', mode);
      tabs.forEach(function (tab, i) {
        var on = i === active;
        tab.classList.toggle('on', on);
        tab.setAttribute('aria-selected', on ? 'true' : 'false');
        tab.tabIndex = on ? 0 : -1;
        var ring = tab.querySelector('.ring');
        if (ring) ring.setAttribute('stroke-dashoffset', on ? (RING * progress).toFixed(2) : '0');
      });
      slides.forEach(function (slide, i) { slide.hidden = i !== active; });
    }

    function pick(i, focus) {
      active = i;
      mode = 'manual';
      progress = 0;
      lastPick = Date.now();
      render();
      if (focus) tabs[i].focus();
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { pick(i, false); });
      tab.addEventListener('keydown', function (e) {
        var n = tabs.length, next = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % n;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + n) % n;
        if (e.key === 'Home') next = 0;
        if (e.key === 'End') next = n - 1;
        if (next !== null) { e.preventDefault(); pick(next, true); }
      });
    });

    setInterval(function () {
      if (document.hidden) return; // nie przewijaj, gdy karta przeglądarki jest w tle
      if (mode === 'manual') {
        if (Date.now() - lastPick >= IDLE_MS) { mode = 'auto'; progress = 0; render(); }
        return;
      }
      progress += TICK_MS / SLIDE_MS;
      if (progress >= 1) { active = (active + 1) % tabs.length; progress = 0; }
      render();
    }, TICK_MS);

    render();
  }

  /* ---------- Formularz (atrapa) ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('form'), function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var note = document.createElement('p');
      note.className = 'form-note';
      note.setAttribute('role', 'status');
      note.textContent = 'Dziękujemy! To makieta – wiadomość nie została wysłana.';
      if (btn) btn.replaceWith(note); else form.appendChild(note);
    });
  });
})();
