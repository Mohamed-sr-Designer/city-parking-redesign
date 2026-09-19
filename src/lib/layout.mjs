// Shared chrome: icons, <head>, header + mega menus, drawer, footer, CTA form.
import { b, t, esc, attr, u, img, plain, strip } from './i18n.mjs';
import { SITE, ui } from '../data/site.mjs';
import { solutions } from '../data/solutions.mjs';
import { services } from '../data/services.mjs';
import { industries } from '../data/industries.mjs';

/* ------------------------------------------------------------------ icons */
const ICONS = {
  smart: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/><path d="M7 12l3-3 2 2 4-4"/>',
  pgs: '<path d="M12 3v18M8 21h8"/><path d="M12 5h6l2.5 2.5L18 10h-6"/><path d="M12 12H6l-2.5 2.5L6 17h6"/>',
  ev: '<path d="M13 2.5L5.5 13.5h6L10.5 21.5 18.5 10.5h-6z"/>',
  street: '<path d="M6 21L9 3M18 21L15 3"/><path d="M12 5v2.5M12 11v2.5M12 17v2.5"/>',
  toll: '<path d="M3.5 20V10a1 1 0 011-1h3a1 1 0 011 1v10"/><path d="M8.5 11.5L21 7.5"/><path d="M12.5 10.3l1 2.6M16.3 9.1l1 2.6M20 7.9l.5 1.4"/>',
  wim: '<path d="M12 3v17M7 20.5h10"/><path d="M4 7h16"/><path d="M4 7l-2.4 6a3 3 0 004.8 0zM20 7l-2.4 6a3 3 0 004.8 0z"/>',
  radar: '<circle cx="12" cy="12" r="9"/><path d="M12 12l5.5-5.5"/><circle cx="12" cy="12" r="1.4"/><path d="M12 7.5a4.5 4.5 0 014.5 4.5"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.6 8.4l-2 5.2-5.2 2 2-5.2z"/>',
  pmark: '<rect x="4" y="3" width="16" height="18" rx="3"/><path d="M9.5 17V7.5H13a2.7 2.7 0 010 5.4H9.5"/>',
  valet: '<path d="M5 15l1.4-4.4A2 2 0 018.3 9.2h7.4a2 2 0 011.9 1.4L19 15"/><rect x="3.5" y="15" width="17" height="4" rx="1.5"/><path d="M6.5 19v1.5M17.5 19v1.5"/><circle cx="7.5" cy="17" r=".7"/><circle cx="16.5" cy="17" r=".7"/>',
  cone: '<path d="M12 3.5l4.6 14.5H7.4z"/><path d="M9.3 11.5h5.4M8.4 14.5h7.2"/><path d="M4 20.5h16"/>',
  cart: '<path d="M3.5 15V7.5h9V15"/><path d="M12.5 10h4l3.5 5"/><circle cx="7" cy="17.5" r="2"/><circle cx="17" cy="17.5" r="2"/><path d="M9 17.5h6"/>',
  event: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M12 12.8l.9 1.9 2.1.3-1.5 1.5.4 2.1-1.9-1-1.9 1 .4-2.1L9 15l2.1-.3z"/>',
  greet: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M18 7v6M15 10h6"/>',
  drop: '<path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z"/><path d="M9.5 15a2.5 2.5 0 002.5 2.3"/>',
  bag: '<path d="M5 8h14l-1 12H6z"/><path d="M9 8V6.5a3 3 0 016 0V8"/>',
  plane: '<path d="M21 15.5l-8.5-4.8V5a1.5 1.5 0 00-3 0v5.7L1 15.5V18l8.5-2.5V20l-2.2 1.6V23L12 21.7l4.7 1.3v-1.4L14.5 20v-4.5L23 18z"/>',
  cross: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
  stadium: '<ellipse cx="12" cy="8.5" rx="9" ry="4"/><path d="M3 8.5v7c0 2.2 4 4 9 4s9-1.8 9-4v-7"/><path d="M8 12.2v7M16 12.2v7"/>',
  office: '<rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/>',
  ticket: '<path d="M3.5 8a2 2 0 002-2h13a2 2 0 002 2v2a2 2 0 000 4v2a2 2 0 00-2 2h-13a2 2 0 00-2-2v-2a2 2 0 000-4z"/><path d="M14 6.5v11" stroke-dasharray="1.8 2.2"/>',
  cap: '<path d="M2 9.5L12 4.5l10 5-10 5z"/><path d="M6 12v4.5c0 1.4 2.7 3 6 3s6-1.6 6-3V12"/>',
  pyramid: '<path d="M3 20L12 4l9 16z"/><path d="M7.6 12h8.8M5.3 16h13.4"/>',
  pay: '<rect x="3" y="6" width="18" height="12" rx="2.5"/><path d="M3 10h18M7 14.5h3"/>',
  arrow: '<path d="M4 12h16M14 6l6 6-6 6"/>',
  check: '<path d="M4 12.5l5 5L20 6.5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  chev: '<path d="M6 9l6 6 6-6"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  pin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  up: '<path d="M12 19V5M6 11l6-6 6 6"/>',
  play: '<path d="M8 5.5v13l11-6.5z" fill="currentColor"/>',
  pause: '<path d="M8 5.5v13M16 5.5v13" stroke-width="3.2"/>',
  vol: '<path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z" fill="currentColor" stroke="none"/><path d="M15.5 9a4.2 4.2 0 010 6M18 6.5a8 8 0 010 11"/>',
  mute: '<path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z" fill="currentColor" stroke="none"/><path d="M16 9.5l5 5M21 9.5l-5 5"/>',
  full: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
};
export const ico = (name, cls = '') => {
  if (!ICONS[name]) throw new Error('Unknown icon: ' + name);
  return `<svg class="i${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;
};
export const arrow = () => ico('arrow', 'arr');

/* ------------------------------------------------------------------ small shared components */
export const pbadge = (label) => `<span class="pbadge"><i class="pbadge-p" aria-hidden="true">P</i><span>${t(label)}</span></span>`;

export const btn = (href, label, cls = 'btn--lime', extra = '') =>
  `<a class="btn ${cls}" href="${href}"${extra}><span>${t(label)}</span>${arrow()}</a>`;

/* LED dot-matrix counter — JS draws the dots, the attributes carry the value */
export const led = (value, suffix = '', cls = '') =>
  `<div class="led ${cls}" data-led="${esc(value)}" data-suffix="${esc(suffix)}" role="img" aria-label="${esc(Number(value).toLocaleString('en-US') + suffix)}"></div>`;

export const stat = (s) => `<div class="stat">${led(s.led, s.suffix)}<p>${t(s.label)}</p></div>`;

/* ------------------------------------------------------------------ <head> */
export function head({ title, desc, path: p = '', ogImg = 'gem', noindex = false, jsonld = '' }) {
  const full = `${strip(title.en)} — City Parking`;
  const fullAr = `${strip(title.ar)} — سيتي باركينج`;
  const canon = `${SITE.origin}/${p}`;
  const og = `${SITE.origin}/assets/img/og.jpg`;
  return `<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title data-title-en="${esc(full)}" data-title-ar="${esc(fullAr)}">${esc(full)}</title>
<meta name="description" content="${esc(desc.en)}" data-desc-ar="${esc(desc.ar)}">
<meta name="theme-color" content="#0A1226">
${noindex ? '<meta name="robots" content="noindex,nofollow">' : ''}
<link rel="canonical" href="${canon}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="City Parking Integrated Solutions">
<meta property="og:title" content="${esc(full)}">
<meta property="og:description" content="${esc(desc.en)}">
<meta property="og:url" content="${canon}">
<meta property="og:image" content="${og}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" sizes="32x32" href="${u('assets/img/icon-32x32.png')}">
<link rel="apple-touch-icon" href="${u('assets/img/icon-180x180.png')}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Noto+Kufi+Arabic:wght@400..800&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600&display=swap">
<link rel="stylesheet" href="${u('assets/css/main.css')}">
<script>document.documentElement.classList.add('js');try{var q=new URLSearchParams(location.search).get('lang'),l=q||localStorage.getItem('cp-lang');if(l==='ar'){var d=document.documentElement;d.lang='ar';d.dir='rtl'}}catch(e){}</script>
${jsonld}
</head>`;
}

/* ------------------------------------------------------------------ header */
const megaItems = (list, base) =>
  list
    .map(
      (x) => `<a class="mega-item" href="${u(base + x.slug + '/')}"><span class="mega-ico">${ico(x.icon)}</span><span class="mega-tx"><b>${t(x.name)}</b><small>${t(x.line || x.ask)}</small></span></a>`
    )
    .join('');

function header(active) {
  const nl = (k, href, label) =>
    `<li><a class="nav-link${active === k ? ' is-active' : ''}" href="${u(href)}">${t(label)}</a></li>`;
  const mega = (k, label) =>
    `<li class="has-mega"><button class="nav-link${active === k ? ' is-active' : ''}" type="button" aria-expanded="false" aria-controls="mega-${k}" data-mega="${k}">${t(label)}${ico('chev', 'chev')}</button></li>`;
  return `<header class="hdr" data-hdr>
  <div class="hdr-in wrap">
    <a class="brand" href="${u('')}" aria-label="${esc(SITE.name.en)}" data-aria-label-ar="${esc(SITE.name.ar)}"><img src="${u('assets/img/logo-light.png')}" alt="" width="104" height="44"></a>
    <nav class="nav" aria-label="Primary">
      <ul>
        ${mega('solutions', ui.solutions)}
        ${mega('services', ui.services)}
        ${mega('industries', ui.industries)}
        ${nl('cases', 'case-studies/', ui.cases)}
        ${nl('insights', 'insights/', ui.insights)}
        ${nl('about', 'about/', ui.about)}
      </ul>
    </nav>
    <div class="hdr-tools">
      <button class="lang" type="button" data-lang-toggle ${attr('aria-label', ui.langAria)}>${ico('globe')}<span>${t(ui.language)}</span></button>
      <a class="btn btn--lime btn--sm hdr-cta" href="${u('contact/')}"><span>${t(ui.talk)}</span>${arrow()}</a>
      <button class="burger" type="button" aria-expanded="false" aria-controls="drawer" ${attr('aria-label', ui.menu)}>${ico('menu', 'i-open')}${ico('x', 'i-close')}</button>
    </div>
  </div>
  <div class="mega" id="mega-solutions" hidden data-panel="solutions"><div class="wrap mega-in">
    <div class="mega-intro"><h3>${t(ui.solutions)}</h3><p>${t(b('The technology we integrate — described by what it does for your business.', 'التقنية التي ندمجها — موصوفة بما تفعله لعملك.'))}</p><a class="link-arrow" href="${u('solutions/')}">${t(ui.seeAllSolutions)}${arrow()}</a></div>
    <div class="mega-grid mega-grid--2">${megaItems(solutions, 'solutions/')}</div>
  </div></div>
  <div class="mega" id="mega-services" hidden data-panel="services"><div class="wrap mega-in">
    <div class="mega-intro"><h3>${t(ui.services)}</h3><p>${t(b('The people and operations we run — from the first plan to the last car of the night.', 'الفرق والعمليات التي نديرها — من أول خطة حتى آخر سيارة في الليل.'))}</p><a class="link-arrow" href="${u('services/')}">${t(ui.seeAllServices)}${arrow()}</a></div>
    <div class="mega-grid mega-grid--2">${megaItems(services, 'services/')}</div>
  </div></div>
  <div class="mega" id="mega-industries" hidden data-panel="industries"><div class="wrap mega-in">
    <div class="mega-intro"><h3>${t(ui.industries)}</h3><p>${t(b('Nine sectors, nine different questions — start with the one on your desk.', 'تسعة قطاعات وتسعة أسئلة مختلفة — ابدأ بالسؤال الذي على مكتبك.'))}</p><a class="link-arrow" href="${u('industries/')}">${t(ui.seeAllIndustries)}${arrow()}</a></div>
    <div class="mega-grid mega-grid--3">${industries.map((x) => `<a class="mega-item mega-item--s" href="${u('industries/' + x.slug + '/')}"><span class="mega-ico">${ico(x.icon)}</span><span class="mega-tx"><b>${t(x.name)}</b></span></a>`).join('')}</div>
  </div></div>
</header>
<div class="drawer" id="drawer" hidden>
  <div class="drawer-in">
    <details class="dr-grp"><summary>${t(ui.solutions)}${ico('chev', 'chev')}</summary><div>${solutions.map((x) => `<a href="${u('solutions/' + x.slug + '/')}">${t(x.name)}</a>`).join('')}<a class="dr-all" href="${u('solutions/')}">${t(ui.seeAllSolutions)}</a></div></details>
    <details class="dr-grp"><summary>${t(ui.services)}${ico('chev', 'chev')}</summary><div>${services.map((x) => `<a href="${u('services/' + x.slug + '/')}">${t(x.name)}</a>`).join('')}<a class="dr-all" href="${u('services/')}">${t(ui.seeAllServices)}</a></div></details>
    <details class="dr-grp"><summary>${t(ui.industries)}${ico('chev', 'chev')}</summary><div>${industries.map((x) => `<a href="${u('industries/' + x.slug + '/')}">${t(x.name)}</a>`).join('')}<a class="dr-all" href="${u('industries/')}">${t(ui.seeAllIndustries)}</a></div></details>
    <a class="dr-link" href="${u('case-studies/')}">${t(ui.cases)}</a>
    <a class="dr-link" href="${u('insights/')}">${t(ui.insights)}</a>
    <a class="dr-link" href="${u('about/')}">${t(ui.about)}</a>
    <a class="dr-link" href="${u('careers/')}">${t(ui.careers)}</a>
    <a class="dr-link" href="${u('contact/')}">${t(ui.contact)}</a>
    <div class="dr-foot"><button class="lang" type="button" data-lang-toggle ${attr('aria-label', ui.langAria)}>${ico('globe')}<span>${t(ui.language)}</span></button>${btn(u('contact/'), ui.talk)}</div>
  </div>
</div>`;
}

/* ------------------------------------------------------------------ footer */
function footer() {
  const list = (arr, base) => arr.map((x) => `<li><a href="${u(base + x.slug + '/')}">${t(x.name)}</a></li>`).join('');
  const soc = SITE.social.map((s) => `<a class="soc" href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}">${{ facebook: 'f', instagram: 'ig', linkedin: 'in', youtube: 'yt' }[s.k]}</a>`).join('');
  return `<footer class="ftr">
  <div class="wrap">
    <div class="ftr-top">
      <div class="ftr-brand">
        <img src="${u('assets/img/logo-light.png')}" alt="${esc(SITE.name.en)}" data-alt-ar="${esc(SITE.name.ar)}" width="150" height="64" loading="lazy">
        <p class="ftr-tag">${t(ui.footPartner)}</p>
        <address>
          <a href="${SITE.mapsHref}" target="_blank" rel="noopener">${ico('pin')}<span>${t(SITE.address)}</span></a>
          <a href="tel:${SITE.telHref}">${ico('phone')}<span dir="ltr">${SITE.tel}</span></a>
          <a href="mailto:${SITE.email}">${ico('mail')}<span dir="ltr">${SITE.email}</span></a>
        </address>
        <p class="ftr-dist">${t(SITE.distributor)}</p>
        <div class="socs">${soc}</div>
      </div>
      <nav class="ftr-col" aria-label="${esc(plain(ui.solutions))}"><h4>${t(ui.solutions)}</h4><ul>${list(solutions, 'solutions/')}</ul></nav>
      <nav class="ftr-col" aria-label="${esc(plain(ui.services))}"><h4>${t(ui.services)}</h4><ul>${list(services, 'services/')}</ul></nav>
      <nav class="ftr-col" aria-label="${esc(plain(ui.industries))}"><h4>${t(ui.industries)}</h4><ul>${list(industries, 'industries/')}</ul></nav>
      <nav class="ftr-col" aria-label="${esc(plain(ui.quickLinks))}"><h4>${t(ui.quickLinks)}</h4><ul>
        <li><a href="${u('')}">${t(ui.home)}</a></li>
        <li><a href="${u('about/')}">${t(ui.about)}</a></li>
        <li><a href="${u('case-studies/')}">${t(ui.cases)}</a></li>
        <li><a href="${u('insights/')}">${t(ui.insights)}</a></li>
        <li><a href="${u('careers/')}">${t(ui.careers)}</a></li>
        <li><a href="${u('faq/')}">${t(ui.faq)}</a></li>
        <li><a href="${u('contact/')}">${t(ui.contact)}</a></li>
      </ul></nav>
    </div>
    <div class="ftr-bot">
      <p>${t(ui.rights)}</p>
      <p class="ftr-legal"><a href="${u('privacy/')}">${t(ui.privacy)}</a><i>·</i><a href="${u('terms/')}">${t(ui.terms)}</a><i>·</i><a href="${u('sitemap/')}">${t(ui.sitemap)}</a></p>
      <p class="ftr-proto">${t(ui.proto)} <a href="${SITE.originalSite}" target="_blank" rel="noopener">${t(ui.visitOriginal)}</a></p>
    </div>
  </div>
</footer>`;
}

/* ------------------------------------------------------------------ CTA blocks */
export function ctaForm(id = 'contact-form', { compact = false } = {}) {
  const topics = [ui.topicConsult, ui.topicSmart, ui.topicOps, ui.topicEvent, ui.topicOther];
  const fld = (name, label, type = 'text', req = true, extra = '') =>
    `<label class="field"><span class="field-l">${t(label)}${req ? `<em>*</em>` : ''}</span><input name="${name}" type="${type}" ${req ? 'required' : ''} autocomplete="${type === 'email' ? 'email' : type === 'tel' ? 'tel' : 'off'}" ${extra}></label>`;
  return `<form class="form" id="${id}" data-form novalidate>
    <fieldset class="topics"><legend>${t(ui.fTopic)}</legend>
      <div class="chips-select">${topics.map((x, i) => `<label class="chip-r"><input type="radio" name="topic" value="${i}"${i === 0 ? ' checked' : ''}><span>${t(x)}</span></label>`).join('')}</div>
    </fieldset>
    <div class="form-row">${fld('first', ui.fFirst)}${fld('last', ui.fLast)}</div>
    <div class="form-row">${fld('email', ui.fEmail, 'email')}${fld('phone', ui.fPhone, 'tel', false)}</div>
    ${compact ? '' : fld('company', ui.fCompany, 'text', false)}
    <label class="field"><span class="field-l">${t(ui.fMsg)}<em>*</em></span><textarea name="message" rows="${compact ? 3 : 5}" required ${attr('placeholder', ui.fMsgPh)}></textarea></label>
    <button class="btn btn--lime" type="submit"><span>${t(ui.fSend)}</span>${arrow()}</button>
    <div class="form-ok" role="status" hidden><b>${t(ui.fThanks)}</b><p>${t(ui.fThanksSub)}</p></div>
  </form>`;
}

export function ctaBand() {
  return `<section class="cta sec sec--dark" id="contact-cta" data-reveal>
  <div class="cta-bg" aria-hidden="true"></div>
  <div class="wrap cta-in">
    <div class="cta-copy">
      ${pbadge(b('Start here', 'ابدأ من هنا'))}
      <h2 class="h2">${t(ui.ctaTitle)}</h2>
      <p class="lead">${t(ui.ctaSub)}</p>
      <ul class="cta-contact">
        <li>${ico('phone')}<a href="tel:${SITE.telHref}" dir="ltr">${SITE.tel}</a></li>
        <li>${ico('mail')}<a href="mailto:${SITE.email}" dir="ltr">${SITE.email}</a></li>
        <li>${ico('pin')}<span>${t(SITE.address)}</span></li>
      </ul>
    </div>
    <div class="cta-form">${ctaForm('cta-form', { compact: true })}</div>
  </div>
</section>`;
}

export function ctaStrip(title = ui.ctaTitle, sub = ui.ctaSub) {
  return `<section class="strip sec sec--dark" data-reveal><div class="cta-bg" aria-hidden="true"></div><div class="wrap strip-in">
    <div><h2 class="h2">${t(title)}</h2><p class="lead">${t(sub)}</p></div>
    <div class="strip-btns">${btn(u('contact/'), ui.talk)}<a class="btn btn--ghost" href="tel:${SITE.telHref}"><span dir="ltr">${SITE.tel}</span></a></div>
  </div></section>`;
}

/* ------------------------------------------------------------------ page shell */
export function shell({ title, desc, path: p = '', active = null, body, ogImg, noindex, jsonld, cls = '' }) {
  return `<!doctype html>
<html lang="en" dir="ltr">
${head({ title, desc, path: p, ogImg, noindex, jsonld })}
<body class="${cls}">
<a class="skip" href="#main">${t(ui.skip)}</a>
<div class="lane" aria-hidden="true"><i class="lane-pin"></i></div>
${header(active)}
<main id="main">
${body}
</main>
${footer()}
<script src="${u('assets/js/main.js')}" defer></script>
</body>
</html>
`;
}
