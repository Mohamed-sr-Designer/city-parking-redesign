/* City Parking — redesign concept. Vanilla JS, no dependencies. */
(function () {
  'use strict';
  var doc = document, root = doc.documentElement;
  var $ = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var store = { get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };

  /* ------------------------------------------------------------ language */
  function applyLang(l, persist) {
    root.lang = l; root.dir = l === 'ar' ? 'rtl' : 'ltr';
    var ti = $('title[data-title-ar]');
    if (ti) doc.title = l === 'ar' ? ti.getAttribute('data-title-ar') : ti.getAttribute('data-title-en');
    var md = $('meta[name="description"]');
    if (md) { if (!md.hasAttribute('data-desc-en')) md.setAttribute('data-desc-en', md.content); md.content = l === 'ar' ? md.getAttribute('data-desc-ar') : md.getAttribute('data-desc-en'); }
    ['aria-label', 'placeholder', 'title', 'alt'].forEach(function (a) {
      $$('[data-' + a + '-ar]').forEach(function (el) {
        var k = 'data-' + a + '-en';
        if (!el.hasAttribute(k)) el.setAttribute(k, el.getAttribute(a) || '');
        el.setAttribute(a, l === 'ar' ? el.getAttribute('data-' + a + '-ar') : el.getAttribute(k));
      });
    });
    if (persist) store.set('cp-lang', l);
  }
  applyLang(root.lang === 'ar' ? 'ar' : 'en', false);
  $$('[data-lang-toggle]').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(root.lang === 'ar' ? 'en' : 'ar', true); });
  });

  /* ------------------------------------------------------------ header */
  var hdr = $('[data-hdr]');
  function onScroll() {
    if (hdr) hdr.classList.toggle('is-solid', window.scrollY > 24);
    var pin = $('.lane-pin');
    if (pin) {
      var h = doc.documentElement.scrollHeight - window.innerHeight;
      var p = h > 0 ? window.scrollY / h : 0;
      pin.style.setProperty('--y', Math.round(p * (window.innerHeight - 96 - 40 - 32)) + 'px');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* mega menus */
  var megaBtns = $$('[data-mega]'), openKey = null, closeT = null;
  function setMega(k) {
    openKey = k;
    megaBtns.forEach(function (b) { b.setAttribute('aria-expanded', String(b.getAttribute('data-mega') === k)); });
    $$('.mega').forEach(function (p) { p.hidden = p.getAttribute('data-panel') !== k; });
    if (hdr) hdr.classList.toggle('is-open', !!k);
  }
  megaBtns.forEach(function (b) {
    var k = b.getAttribute('data-mega');
    b.addEventListener('click', function () { setMega(openKey === k ? null : k); });
    b.parentNode.addEventListener('mouseenter', function () { if (window.innerWidth > 1020) { clearTimeout(closeT); setMega(k); } });
  });
  if (hdr) {
    hdr.addEventListener('mouseleave', function () { closeT = setTimeout(function () { setMega(null); }, 200); });
    hdr.addEventListener('mouseenter', function () { clearTimeout(closeT); });
  }
  doc.addEventListener('click', function (e) { if (openKey && hdr && !hdr.contains(e.target)) setMega(null); });
  doc.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { if (openKey) { var b = $('[data-mega][aria-expanded="true"]'); setMega(null); if (b) b.focus(); } closeDrawer(); closeLb(); }
  });

  /* mobile drawer */
  var burger = $('.burger'), drawer = $('#drawer');
  function closeDrawer() { if (!drawer || drawer.hidden) return; drawer.hidden = true; burger.setAttribute('aria-expanded', 'false'); doc.body.style.overflow = ''; if (hdr) hdr.classList.remove('is-open'); }
  if (burger && drawer) {
    burger.addEventListener('click', function () {
      var open = drawer.hidden;
      drawer.hidden = !open; burger.setAttribute('aria-expanded', String(open));
      doc.body.style.overflow = open ? 'hidden' : '';
      if (hdr) hdr.classList.toggle('is-open', open);
    });
    $$('a', drawer).forEach(function (a) { a.addEventListener('click', closeDrawer); });
    window.addEventListener('resize', function () { if (window.innerWidth > 1020) closeDrawer(); });
  }

  /* ------------------------------------------------------------ reveal */
  var rv = $$('[data-reveal]');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    rv.forEach(function (el) {
      var sib = $$('[data-reveal]', el.parentNode).filter(function (x) { return x.parentNode === el.parentNode; });
      el.style.setProperty('--rd', Math.min(sib.indexOf(el), 6) * 0.07 + 's');
      io.observe(el);
    });
  } else { rv.forEach(function (el) { el.classList.add('in'); }); }

  /* ------------------------------------------------------------ LED dot-matrix */
  var F = {
    '0': ['01110', '10001', '10011', '10101', '11001', '10001', '01110'],
    '1': ['00100', '01100', '00100', '00100', '00100', '00100', '01110'],
    '2': ['01110', '10001', '00001', '00010', '00100', '01000', '11111'],
    '3': ['11110', '00001', '00001', '01110', '00001', '00001', '11110'],
    '4': ['00010', '00110', '01010', '10010', '11111', '00010', '00010'],
    '5': ['11111', '10000', '11110', '00001', '00001', '10001', '01110'],
    '6': ['00110', '01000', '10000', '11110', '10001', '10001', '01110'],
    '7': ['11111', '00001', '00010', '00100', '01000', '01000', '01000'],
    '8': ['01110', '10001', '10001', '01110', '10001', '10001', '01110'],
    '9': ['01110', '10001', '10001', '01111', '00001', '00010', '01100'],
    '+': ['00000', '00100', '00100', '11111', '00100', '00100', '00000'],
    'M': ['10001', '11011', '10101', '10101', '10001', '10001', '10001'],
    'K': ['10001', '10010', '10100', '11000', '10100', '10010', '10001'],
    'L': ['10000', '10000', '10000', '10000', '10000', '10000', '11111'],
    ',': ['00', '00', '00', '00', '11', '11', '10'],
    '.': ['00', '00', '00', '00', '00', '11', '11'],
    ' ': ['00000', '00000', '00000', '00000', '00000', '00000', '00000']
  };
  function fmt(n, raw, len) { return raw ? String(n).padStart(len, '0') : Number(n).toLocaleString('en-US'); }
  function glyph(c) { return F[c] || F[' ']; }
  function paint(ch, c) {
    var colw = ch.children.length / 7, g = glyph(c), w = g[0].length, cells = ch.children;
    for (var r = 0; r < 7; r++) for (var x = 0; x < colw; x++) cells[r * colw + x].className = x < w && g[r].charAt(x) === '1' ? 'on' : '';
  }
  function buildLed(el) {
    var val = el.getAttribute('data-led'), suffix = el.getAttribute('data-suffix') || '';
    var raw = val.length > 1 && val.charAt(0) === '0';
    var target = parseInt(val, 10);
    var finalStr = fmt(target, raw, val.length) + suffix;
    el._led = { raw: raw, len: val.length, target: target, suffix: suffix, n: finalStr.length, cols: [] };
    el.textContent = '';
    for (var i = 0; i < finalStr.length; i++) {
      var c = finalStr.charAt(i), narrow = c === ',' || c === '.';
      var ch = doc.createElement('div'); ch.className = 'led-ch' + (narrow ? ' led-ch--c' : ''); ch.setAttribute('aria-hidden', 'true');
      var cellCount = (narrow ? 2 : 5) * 7;
      for (var k = 0; k < cellCount; k++) ch.appendChild(doc.createElement('i'));
      el.appendChild(ch); el._led.cols.push(ch);
    }
    render(el, target);
  }
  function render(el, n) {
    var s = el._led, str = fmt(n, s.raw, s.len) + s.suffix, pad = s.n - str.length;
    for (var i = 0; i < s.n; i++) paint(s.cols[i], i < pad ? ' ' : str.charAt(i - pad));
  }
  function countUp(el) {
    var s = el._led;
    if (!s || el.getAttribute('data-fixed') || reduce || s.raw) { return; }
    var t0 = null, dur = 1500;
    render(el, 0);
    (function step(t) {
      if (t0 === null) t0 = t;
      var p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      render(el, Math.round(s.target * e));
      if (p < 1) requestAnimationFrame(step);
    })(performance.now());
  }
  var leds = $$('.led[data-led]');
  leds.forEach(buildLed);
  if ('IntersectionObserver' in window && !reduce) {
    var lio = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { countUp(e.target); lio.unobserve(e.target); } });
    }, { threshold: 0.6 });
    leds.forEach(function (el) { if (!el.hasAttribute('data-sign') && !el.hasAttribute('data-fixed')) { render(el, 0); lio.observe(el); } });
  }
  /* guidance-sign ticker (purely illustrative) */
  var signs = $$('.led[data-sign]');
  if (signs.length && !reduce) {
    setInterval(function () {
      var el = signs[Math.floor(Math.random() * signs.length)], s = el._led;
      var n = Math.max(3, Math.min(240, s.target + (Math.random() < 0.5 ? -1 : 1) * (1 + Math.floor(Math.random() * 4))));
      s.target = n; render(el, n);
    }, 2400);
  }

  /* ------------------------------------------------------------ tab widgets */
  function tabs(rootSel, tabSel, panelPrefix, onSelect) {
    var wrap = $(rootSel); if (!wrap) return null;
    var tl = $$(tabSel, wrap);
    function select(i, focus) {
      tl.forEach(function (t, j) {
        var on = i === j;
        t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1;
        var p = doc.getElementById(t.getAttribute('aria-controls')); if (p) p.hidden = !on;
      });
      if (focus) tl[i].focus();
      if (onSelect) onSelect(i);
    }
    tl.forEach(function (t, i) {
      t.addEventListener('click', function () { wrap._user = true; select(i); });
      t.addEventListener('keydown', function (e) {
        var k = e.key, n = tl.length, rtl = root.dir === 'rtl', nx = null;
        if (k === 'ArrowDown' || k === (rtl ? 'ArrowLeft' : 'ArrowRight')) nx = (i + 1) % n;
        else if (k === 'ArrowUp' || k === (rtl ? 'ArrowRight' : 'ArrowLeft')) nx = (i - 1 + n) % n;
        else if (k === 'Home') nx = 0; else if (k === 'End') nx = n - 1;
        if (nx !== null) { e.preventDefault(); wrap._user = true; select(nx, true); }
      });
    });
    return { select: select, count: tl.length, wrap: wrap };
  }
  tabs('.lens-tabs', '.lens-tab');
  var jr = $('.jr-road');
  var jt = tabs('.jr-road', '.jr-stop', 'jp', function (i) { if (jr) jr.style.setProperty('--pos', i); });
  if (jt) {
    jr.style.setProperty('--pos', 0);
    var idx = 0, timer = null, paused = false;
    var sec = $('[data-journey]');
    function tick() { if (jt.wrap._user || paused) return; idx = (idx + 1) % jt.count; jt.select(idx); }
    if ('IntersectionObserver' in window && !reduce && sec) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting && !timer) timer = setInterval(tick, 3800); else if (!e.isIntersecting && timer) { clearInterval(timer); timer = null; } });
      }, { threshold: 0.45 }).observe(sec);
      sec.addEventListener('mouseenter', function () { paused = true; });
      sec.addEventListener('mouseleave', function () { paused = false; });
      jr.addEventListener('click', function (e) { var b = e.target.closest('.jr-stop'); if (b) idx = $$('.jr-stop', jr).indexOf(b); });
    }
  }

  /* ------------------------------------------------------------ voices */
  var vs = $$('[data-voice]');
  if (vs.length) {
    var vi = 0, cnt = $('[data-voice-count]');
    function showV(n) { vi = (n + vs.length) % vs.length; vs.forEach(function (v, i) { v.hidden = i !== vi; }); if (cnt) cnt.textContent = (vi + 1) + ' / ' + vs.length; }
    var pv = $('[data-voice-prev]'), nv = $('[data-voice-next]');
    if (pv) pv.addEventListener('click', function () { showV(vi - 1); });
    if (nv) nv.addEventListener('click', function () { showV(vi + 1); });
  }

  /* ------------------------------------------------------------ case filter */
  var fg = $('[data-filter-group]');
  if (fg) {
    var chips = $$('[data-filter]', fg), items = $$('[data-kind]', fg);
    function filter(k) {
      chips.forEach(function (c) { c.classList.toggle('is-on', c.getAttribute('data-filter') === k); });
      items.forEach(function (it) { it.hidden = !(k === 'all' || it.getAttribute('data-kind') === k); });
    }
    chips.forEach(function (c) { c.addEventListener('click', function () { filter(c.getAttribute('data-filter')); }); });
    var h = location.hash.replace('#', ''); if (h && chips.some(function (c) { return c.getAttribute('data-filter') === h; })) filter(h);
  }

  /* ------------------------------------------------------------ forms (front-end only) */
  function bi(en, ar) { return '<span data-l="en">' + en + '</span><span data-l="ar" lang="ar">' + ar + '</span>'; }
  function validate(scope) {
    var ok = true;
    $$('input:not([type=radio]), textarea', scope).forEach(function (f) {
      var wrap = f.closest('.field') || f.closest('.check');
      var valid = f.checkValidity();
      if (wrap) wrap.classList.toggle('is-invalid', !valid);
      if (!valid && ok) { ok = false; f.focus(); }
    });
    return ok;
  }
  $$('[data-form]').forEach(function (form) {
    var steps = $$('[data-step]', form), cur = 0;
    function show(i) {
      cur = i; steps.forEach(function (s, j) { s.hidden = j !== i; });
      var lab = $('[data-step-label]', form), bar = $('[data-step-bar]', form);
      if (lab) lab.innerHTML = bi('Step ' + (i + 1) + ' of ' + steps.length, 'الخطوة ' + (i + 1) + ' من ' + steps.length);
      if (bar) bar.style.width = ((i + 1) / steps.length * 100) + '%';
    }
    var nx = $('[data-next]', form), pv = $('[data-prev]', form);
    if (nx) nx.addEventListener('click', function () { if (validate(steps[cur])) show(cur + 1); });
    if (pv) pv.addEventListener('click', function () { show(cur - 1); });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validate(steps.length ? steps[cur] : form)) return;
      Array.prototype.forEach.call(form.children, function (c) { if (!c.classList.contains('form-ok')) c.hidden = true; });
      var ok = $('.form-ok', form); if (ok) { ok.hidden = false; ok.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' }); }
    });
    form.addEventListener('input', function (e) { var w = e.target.closest('.field, .check'); if (w && w.classList.contains('is-invalid') && e.target.checkValidity()) w.classList.remove('is-invalid'); });
  });

  /* ------------------------------------------------------------ lightbox */
  var lb = null;
  function closeLb() { if (lb) { lb.remove(); lb = null; doc.body.style.overflow = ''; } }
  $$('[data-lightbox]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      lb = doc.createElement('div'); lb.className = 'lb'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true');
      var im = doc.createElement('img'); im.src = a.getAttribute('href'); im.alt = (a.querySelector('img') || {}).alt || '';
      var bt = doc.createElement('button'); bt.type = 'button'; bt.setAttribute('aria-label', 'Close'); bt.innerHTML = '&times;'; bt.style.fontSize = '28px';
      lb.appendChild(im); lb.appendChild(bt); doc.body.appendChild(lb); doc.body.style.overflow = 'hidden'; bt.focus();
      lb.addEventListener('click', function (ev) { if (ev.target !== im) closeLb(); });
    });
  });
})();
