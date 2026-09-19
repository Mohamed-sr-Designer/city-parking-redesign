// Reusable page components (cards, heroes, tickets, FAQ …).
import { b, t, esc, u, img, plain } from './i18n.mjs';
import { ui } from '../data/site.mjs';
import { ico, arrow, pbadge, btn } from './layout.mjs';
import { kinds, caseBySlug } from '../data/cases.mjs';
import { solutions } from '../data/solutions.mjs';
import { services } from '../data/services.mjs';
import { faqs } from '../data/faq.mjs';

export const bySlug = (arr) => Object.fromEntries(arr.map((x) => [x.slug, x]));
export const solBy = bySlug(solutions);
export const svcBy = bySlug(services);

/* ---- breadcrumbs ---- */
export const crumbs = (items) =>
  `<nav class="crumbs" aria-label="${esc(plain(ui.breadcrumbs))}" data-aria-label-ar="${esc(ui.breadcrumbs.ar)}"><ol>${items
    .map((c, i) => (c.href && i < items.length - 1 ? `<li><a href="${c.href}">${t(c.label)}</a></li>` : `<li aria-current="page">${t(c.label)}</li>`))
    .join('')}</ol></nav>`;

/* ---- inner-page hero ---- */
export function phero({ crumb, badge, title, lead, sub = '', imgId, focus = '50% 40%', extra = '', cls = '', alt }) {
  return `<section class="phero ${cls}">
  <div class="phero-bg" aria-hidden="true">${imgId ? img(imgId, alt || { en: '', ar: '' }, { eager: true, sizes: '100vw', style: `object-position:${focus}` }) : ''}<div class="phero-shade"></div><div class="grain"></div></div>
  <div class="wrap phero-in">
    ${crumb ? crumbs(crumb) : ''}
    ${badge ? pbadge(badge) : ''}
    <h1 class="phero-h1">${t(title)}</h1>
    ${lead ? `<p class="phero-lead">${t(lead)}</p>` : ''}
    ${sub ? `<p class="phero-sub">${t(sub)}</p>` : ''}
    ${extra}
  </div>
</section>`;
}

/* ---- section heading ---- */
export const shead = ({ badge, title, sub, cls = '' }) =>
  `<header class="shead ${cls}">${badge ? pbadge(badge) : ''}<h2 class="h2">${t(title)}</h2>${sub ? `<p class="lead">${t(sub)}</p>` : ''}</header>`;

/* ---- outcome cards ---- */
export const outcomeCards = (list) =>
  `<div class="oc-grid">${list
    .map(
      (o, i) => `<article class="oc" data-reveal><span class="oc-n">${String(i + 1).padStart(2, '0')}</span><h3>${t(o.h)}</h3><p>${t(o.p)}</p>${o.tech ? `<p class="oc-tech"><i aria-hidden="true"></i>${t(o.tech)}</p>` : ''}</article>`
    )
    .join('')}</div>`;

/* ---- case card ---- */
export function caseCard(c, size = 'm') {
  const showHead = size !== 's';
  const metric = c.metric ? `<span class="cc-metric"><b>${Number(c.metric.led).toLocaleString('en-US')}${c.metric.suffix}</b> ${t(c.metric.label)}</span>` : '';
  return `<a class="case-card case-card--${size}" href="${u('case-studies/' + c.slug + '/')}" data-kind="${c.kind}">
  <div class="cc-img">${img(c.img, c.name, { sizes: size === 'l' ? '(min-width:900px) 58vw, 100vw' : '(min-width:900px) 30vw, 100vw' })}</div>
  <div class="cc-shade" aria-hidden="true"></div>
  <div class="cc-body">
    <span class="plate">${t(kinds[c.kind])}</span>
    ${showHead ? `<h3>${t(c.headline)}</h3>` : `<h3>${t(c.name)}</h3>`}
    <p class="cc-meta"><b>${t(c.name)}</b><i aria-hidden="true">·</i>${t(c.city)}${c.date ? `<i aria-hidden="true">·</i>${t(c.date)}` : ''}</p>
    ${metric}
  </div>
  <span class="cc-go" aria-hidden="true">${arrow()}</span>
</a>`;
}

/* ---- solution / service card (hubs) ---- */
export function itemCard(x, base) {
  return `<a class="item-card" href="${u(base + x.slug + '/')}" data-reveal>
  <div class="ic-img">${img(x.img, x.name, { sizes: '(min-width:900px) 32vw, 100vw', style: x.focus ? `object-position:${x.focus}` : '' })}<span class="ic-ico">${ico(x.icon)}</span></div>
  <div class="ic-body"><h3>${t(x.name)}</h3><p class="ic-line">${t(x.line)}</p><p class="ic-tech">${x.outcomes.map((o) => `<span>${t(o.h)}</span>`).join('')}</p><span class="link-arrow">${t(ui.learnMore)}${arrow()}</span></div>
</a>`;
}

/* ---- industry card ---- */
export const indCard = (x) => `<a class="ind-card" href="${u('industries/' + x.slug + '/')}" data-reveal>
  <span class="ind-ico">${ico(x.icon)}</span>
  <h3>${t(x.name)}</h3>
  <p class="ind-who">${t(x.who)}</p>
  <p class="ind-ask">${t(x.ask)}</p>
  <span class="ind-go" aria-hidden="true">${arrow()}</span>
</a>`;

/* ---- insight card ---- */
export const insCard = (a, size = 'm') => `<a class="ins-card ins-card--${size}" href="${u('insights/' + a.slug + '/')}" data-reveal>
  <div class="ins-img">${img(a.img, a.title, { sizes: size === 'l' ? '(min-width:900px) 50vw, 100vw' : '(min-width:900px) 30vw, 100vw' })}</div>
  <div class="ins-body">
    <p class="ins-tag"><span class="plate plate--ink">${t(a.tag)}</span><time datetime="${a.date}">${t(b('Oct 16, 2024', '16 أكتوبر 2024'))}</time></p>
    <h3>${t(a.title)}</h3>
    <p class="ins-ex">${t(a.excerpt)}</p>
    <span class="link-arrow">${t(ui.readArticle)}${arrow()}</span>
  </div>
</a>`;

/* ---- chips linking to solutions / services ---- */
export function stackChips(slugs) {
  return `<ul class="stack-chips">${slugs
    .map((s) => {
      const x = solBy[s] || svcBy[s];
      if (!x) throw new Error('unknown stack slug ' + s);
      const base = solBy[s] ? 'solutions/' : 'services/';
      return `<li><a href="${u(base + s + '/')}">${ico(x.icon)}<span>${t(x.name)}</span></a></li>`;
    })
    .join('')}</ul>`;
}

/* ---- FAQ accordion ---- */
export const faqList = (ids) =>
  `<div class="faq">${ids
    .map((id) => {
      const f = faqs[id];
      if (!f) throw new Error('unknown faq ' + id);
      return `<details class="faq-i"><summary><span>${t(f.q)}</span>${ico('plus', 'faq-pm')}</summary><div class="faq-a"><p>${t(f.a)}</p></div></details>`;
    })
    .join('')}</div>`;

/* ---- facts "entry ticket" ---- */
export function ticket(c) {
  const row = (k, v) => `<div><dt>${t(k)}</dt><dd>${t(v)}</dd></div>`;
  return `<aside class="ticket" aria-label="${esc(plain(ui.factsFigures))}" data-aria-label-ar="${esc(ui.factsFigures.ar)}">
  <div class="ticket-top"><span class="ticket-tag">${t(ui.entryTicket)}</span><b>${t(c.name)}</b></div>
  <dl>
    ${row(ui.fLocation, c.city)}
    ${c.date ? row(ui.fDate, c.date) : ''}
    ${row(ui.fReq, c.facts.req)}
    ${row(ui.fSol, c.facts.sol)}
    ${row(ui.fSpec, c.facts.spec)}
  </dl>
  <div class="ticket-bar" aria-hidden="true"></div>
</aside>`;
}

/* ---- gallery (lightbox-enabled) ---- */
export const gallery = (ids, nameObj) =>
  `<div class="gal">${ids
    .map((id, i) => `<a class="gal-i gal-i--${i % 4}" href="${u('assets/img/' + id + '.webp')}" data-lightbox>${img(id, b(plain(nameObj) + ' — on site', nameObj.ar + ' — في الموقع'), { sizes: '(min-width:900px) 33vw, 100vw' })}</a>`)
    .join('')}</div>`;

/* ---- mini list of linked cases ---- */
export function casesFor(slugs, size = 'm') {
  const list = slugs.map((s) => caseBySlug[s]).filter(Boolean);
  if (!list.length) return '';
  return `<div class="cases-grid cases-grid--rel">${list.map((c) => caseCard(c, size)).join('')}</div>`;
}

export { btn, pbadge, ico, arrow };
