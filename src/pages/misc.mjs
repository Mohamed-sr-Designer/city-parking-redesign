import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { b, t, esc, u, img, plain } from '../lib/i18n.mjs';
import { SITE, ui, about, careers, pio } from '../data/site.mjs';
import { shell, ico, arrow, pbadge, btn, led, ctaStrip, ctaForm } from '../lib/layout.mjs';
import { phero, shead, faqList } from '../lib/components.mjs';
import { cases } from '../data/cases.mjs';
import { solutions } from '../data/solutions.mjs';
import { services } from '../data/services.mjs';
import { industries } from '../data/industries.mjs';
import { insights } from '../data/insights.mjs';
import { faqPage } from '../data/faq.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const C = (label, href) => ({ label, href });

/* ================================================================== ABOUT */
export function aboutPage() {
  const route = [...cases].sort((x, y) => x.year - y.year);
  const body = `
${phero({
  crumb: [C(ui.home, u('')), { label: ui.about }],
  badge: ui.about,
  title: about.h1,
  lead: about.lead,
  imgId: 'gem-crew-2',
  alt: b('The City Parking team at the Grand Egyptian Museum', 'فريق سيتي باركينج في المتحف المصري الكبير'),
  focus: '50% 55%',
})}
<section class="sec sec--paper">
  <div class="wrap about-story">
    <div>${shead({ badge: b('Our story', 'قصتنا'), title: about.storyTitle })}${about.story.map((p) => `<p class="body-l">${t(p)}</p>`).join('')}</div>
    <figure class="about-fig">${img('north-square-crew-1', b('The City Parking team', 'فريق سيتي باركينج'), { sizes: '(min-width:900px) 45vw, 100vw' })}<figcaption>${t(ui.ourPeople)}</figcaption></figure>
  </div>
</section>
<section class="sec sec--dark vision">
  <div class="grain" aria-hidden="true"></div>
  <div class="wrap wrap--n">
    ${pbadge(about.visionTitle)}
    <blockquote class="bigquote">${t(about.visionQuote)}</blockquote>
    <p class="lead lead--dark">${t(about.vision)}</p>
  </div>
</section>
<section class="sec sec--paper ceo">
  <div class="wrap ceo-in">
    <div class="ceo-led">${led('20', '+', 'led--lg')}<p>${t(b('years of industry expertise', 'عامًا من الخبرة في القطاع'))}</p></div>
    <div>
      ${pbadge(about.ceoTitle)}
      <blockquote class="quote">${t(about.ceoQuote)}</blockquote>
      <p class="body-l">${t(about.ceoText)}</p>
    </div>
  </div>
</section>
<section class="sec sec--paper2">
  <div class="wrap">
    ${shead({ badge: b('Why City Parking', 'لماذا سيتي باركينج'), title: about.whyTitle })}
    <div class="why-grid">${about.why.map((w, i) => `<article class="why" data-reveal><span class="oc-n">${String(i + 1).padStart(2, '0')}</span><h3>${t(w.h)}</h3><p>${t(w.p)}</p></article>`).join('')}</div>
  </div>
</section>
<section class="sec sec--paper pio">
  <div class="wrap">
    ${shead({ badge: ui.pioEyebrow, title: ui.pioTitle, sub: ui.pioSub })}
    <div class="pio-grid">${pio
      .map(
        (c) => `<article class="pio-col" data-reveal><div class="pio-img">${img(c.img, c.name, { sizes: '(min-width:900px) 30vw, 100vw' })}<span class="pio-n">${c.n}</span></div><h3>${t(c.name)}</h3><p class="pio-line">${t(c.line)}</p><p>${t(c.text)}</p><a class="link-arrow" href="${u(c.href)}">${t(ui.explore)}${arrow()}</a></article>`
      )
      .join('')}</div>
  </div>
</section>
<section class="sec sec--dark route">
  <div class="grain" aria-hidden="true"></div>
  <div class="wrap">
    ${shead({ badge: b('Track record', 'سجل الإنجاز'), title: about.routeTitle, sub: about.routeSub, cls: 'shead--dark' })}
    <ol class="route-list">${route
      .map(
        (c) => `<li><a href="${u('case-studies/' + c.slug + '/')}"><span class="route-pin"></span><span class="route-date">${t(c.date)}</span><b>${t(c.name)}</b><small>${t(c.city)}</small></a></li>`
      )
      .join('')}</ol>
  </div>
</section>
${ctaStrip()}`;
  return shell({
    title: ui.about,
    desc: b('City Parking Integrated Solutions — a leading parking operator and smart-parking system integrator with over 20 years of experience across the Middle East.', 'سيتي باركينج للحلول المتكاملة — مشغّل مواقف رائد ومتكامل لأنظمة المواقف الذكية بخبرة تزيد على 20 عامًا في الشرق الأوسط.'),
    path: 'about/',
    active: 'about',
    body,
  });
}

/* ================================================================== CONTACT */
export function contactPage() {
  const soc = SITE.social.map((s) => `<a class="soc soc--l" href="${s.href}" target="_blank" rel="noopener">${s.label}</a>`).join('');
  const body = `
${phero({
  crumb: [C(ui.home, u('')), { label: ui.contact }],
  badge: ui.contact,
  title: ui.ctaTitle,
  lead: ui.ctaSub,
  imgId: 'zia',
  focus: '50% 40%',
  cls: 'phero--short',
})}
<section class="sec sec--paper contact">
  <div class="wrap contact-in">
    <div class="contact-form">${ctaForm('contact-form')}</div>
    <aside class="contact-card">
      <h2 class="h3">${t(b('Reach us directly', 'تواصل معنا مباشرة'))}</h2>
      <ul class="cta-contact cta-contact--light">
        <li>${ico('pin')}<a href="${SITE.mapsHref}" target="_blank" rel="noopener">${t(SITE.address)}</a></li>
        <li>${ico('phone')}<a href="tel:${SITE.telHref}" dir="ltr">${SITE.tel}</a></li>
        <li>${ico('mail')}<a href="mailto:${SITE.email}" dir="ltr">${SITE.email}</a></li>
      </ul>
      <p class="contact-dist">${t(SITE.distributor)}</p>
      <div class="socs socs--l">${soc}</div>
      <div class="contact-more">
        <p>${t(b('Prefer to read first?', 'تفضّل أن تقرأ أولًا؟'))}</p>
        <a class="link-arrow" href="${u('case-studies/')}">${t(ui.seeAllCases)}${arrow()}</a>
        <a class="link-arrow" href="${u('faq/')}">${t(ui.faq)}${arrow()}</a>
      </div>
    </aside>
  </div>
</section>`;
  return shell({
    title: ui.contact,
    desc: b('Talk to a City Parking expert — 21 Nagaty Serag, Makram Ebid, Nasr City, Cairo · +2 0222 714 200 · info@cityparking-eg.com', 'تحدّث مع خبير من سيتي باركينج — 21 نجاتي سراج، مكرم عبيد، مدينة نصر، القاهرة · +2 0222 714 200 · info@cityparking-eg.com'),
    path: 'contact/',
    active: null,
    body,
  });
}

/* ================================================================== CAREERS */
export function careersPage() {
  const roles = [
    b('Valet attendants', 'سائقو الفاليه'),
    b('Traffic attendants & wardens', 'منظّمو الحركة والمراقبون'),
    b('Operational supervisors', 'المشرفون التشغيليون'),
    b('Command-center operators', 'مشغّلو مركز العمليات'),
    b('Systems & integration engineers', 'مهندسو الأنظمة والتكامل'),
  ];
  const f = (name, label, type = 'text', req = true) =>
    `<label class="field"><span class="field-l">${t(label)}${req ? '<em>*</em>' : ''}</span><input name="${name}" type="${type}" ${req ? 'required' : ''}></label>`;
  const body = `
${phero({
  crumb: [C(ui.home, u('')), { label: ui.careers }],
  badge: ui.careers,
  title: careers.h1,
  lead: careers.lead,
  imgId: 'eiec-crew',
  focus: '50% 60%',
  cls: 'phero--short',
})}
<section class="sec sec--paper careers">
  <div class="wrap careers-in">
    <div>
      ${shead({ badge: b('Who we hire', 'من نوظّف'), title: b('Roles across the whole arrival', 'وظائف عبر رحلة الوصول كاملة') })}
      <ul class="ticks ticks--l">${roles.map((r) => `<li>${ico('check')}<span>${t(r)}</span></li>`).join('')}</ul>
    </div>
    <form class="form form--steps" id="career-form" data-form data-steps novalidate>
      <div class="steps-hd"><span data-step-label>${t(b('Step 1 of 2', 'الخطوة 1 من 2'))}</span><div class="steps-bar"><i data-step-bar style="width:50%"></i></div></div>
      <div class="step" data-step="1">
        <h3>${t(careers.step1)}</h3>
        <div class="form-row">${f('first', ui.fFirst)}${f('last', ui.fLast)}</div>
        <div class="form-row">${f('email', ui.fEmail, 'email')}${f('phone', ui.fPhone, 'tel')}</div>
        <fieldset class="topics"><legend>${t(careers.callTime)}</legend><div class="chips-select">${careers.times.map((x, i) => `<label class="chip-r"><input type="radio" name="time" value="${i}"${i === 0 ? ' checked' : ''}><span>${t(x)}</span></label>`).join('')}</div></fieldset>
        <button class="btn btn--ink" type="button" data-next><span>${t(careers.next)}</span>${arrow()}</button>
      </div>
      <div class="step" data-step="2" hidden>
        <h3>${t(careers.step2)}</h3>
        ${f('position', careers.position)}
        <label class="field"><span class="field-l">${t(careers.about)}<em>*</em></span><textarea name="about" rows="4" required></textarea></label>
        <label class="field field--file"><span class="field-l">${t(careers.resume)}<em>*</em></span><input name="resume" type="file" accept=".pdf,.doc,.docx" required><small>${t(careers.resumeHint)}</small></label>
        <label class="check"><input type="checkbox" name="agree" required><span>${t(careers.agree)}</span></label>
        <div class="step-btns"><button class="btn btn--ghost btn--ghost-ink" type="button" data-prev><span>${t(careers.prev)}</span></button><button class="btn btn--lime" type="submit"><span>${t(careers.submit)}</span>${arrow()}</button></div>
      </div>
      <div class="form-ok" role="status" hidden><b>${t(careers.thanks)}</b><p>${t(ui.fThanksSub)}</p></div>
    </form>
  </div>
</section>`;
  return shell({
    title: ui.careers,
    desc: b('Join the City Parking crew — valets, traffic attendants, supervisors, command-center operators and systems engineers.', 'انضم إلى فريق سيتي باركينج — سائقو فاليه ومنظّمو حركة ومشرفون ومشغّلو مركز عمليات ومهندسو أنظمة.'),
    path: 'careers/',
    active: null,
    body,
  });
}

/* ================================================================== FAQ */
export function faqPageBuild() {
  const body = `
${phero({
  crumb: [C(ui.home, u('')), { label: ui.faq }],
  badge: ui.faqEyebrow,
  title: ui.faqTitle,
  lead: b('Straight answers about smart parking, valet, traffic and event operations.', 'إجابات مباشرة عن المواقف الذكية والفاليه والحركة وتشغيل الفعاليات.'),
  imgId: 'sol-pgs',
  focus: '50% 30%',
  cls: 'phero--short',
})}
<section class="sec sec--paper">
  <div class="wrap wrap--n faq-groups">${faqPage.map((g) => `<div class="faq-group"><h2 class="h3">${t(g.title)}</h2>${faqList(g.ids)}</div>`).join('')}</div>
</section>
${ctaStrip()}`;
  return shell({
    title: ui.faq,
    desc: b('Frequently asked questions about City Parking smart parking systems, valet, traffic management and event parking.', 'أسئلة شائعة عن أنظمة المواقف الذكية والفاليه وإدارة الحركة ومواقف الفعاليات لدى سيتي باركينج.'),
    path: 'faq/',
    active: null,
    body,
  });
}

/* ================================================================== LEGAL */
function legalHtml(file) {
  const raw = fs.readFileSync(path.join(HERE, '../data/legal', file), 'utf8').split('\n');
  const start = raw.findIndex((l) => l.startsWith('# '));
  const end = raw.findIndex((l) => l.startsWith('## Your Parking Partner'));
  const lines = raw.slice(start + 1, end).filter((l) => l && !l.startsWith('[IMG'));
  const e = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  return lines
    .map((l) => {
      if (l.startsWith('### ')) return `<h3>${e(l.slice(4))}</h3>`;
      if (l.startsWith('## ')) return `<h2>${e(l.slice(3))}</h2>`;
      const m = l.match(/^([A-Z“][^:]{2,60}) : (.+)$/);
      if (m) return `<p><strong>${e(m[1])}</strong> — ${e(m[2])}</p>`;
      return `<p>${e(l)}</p>`;
    })
    .join('\n');
}
export function legalPage(kind) {
  const isP = kind === 'privacy';
  const title = isP ? ui.privacy : ui.terms;
  const body = `
${phero({
  crumb: [C(ui.home, u('')), { label: title }],
  badge: b('Legal', 'قانوني'),
  title,
  imgId: 'sol-pgs',
  focus: '50% 30%',
  cls: 'phero--short',
})}
<section class="sec sec--paper article">
  <div class="wrap wrap--n">
    <p class="ar-note" data-l="ar" lang="ar">${ui.legalNote.ar}</p>
    <div class="prose" lang="en" dir="ltr">${legalHtml(isP ? 'data-privacy.txt' : 'terms-of-use.txt')}</div>
  </div>
</section>`;
  return shell({
    title,
    desc: b(isP ? 'How City Parking Integrated Solutions collects, uses and protects personal information.' : 'The terms that govern use of the City Parking Integrated Solutions website and services.', isP ? 'كيف تجمع سيتي باركينج للحلول المتكاملة المعلومات الشخصية وتستخدمها وتحميها.' : 'الشروط التي تحكم استخدام موقع وخدمات سيتي باركينج للحلول المتكاملة.'),
    path: `${kind}/`,
    active: null,
    body,
  });
}

/* ================================================================== SITEMAP + 404 */
export function sitemapPage() {
  const grp = (title, arr, base) => `<div><h2 class="h3">${t(title)}</h2><ul class="sitemap-list">${arr.map((x) => `<li><a href="${u(base + x.slug + '/')}">${t(x.name || x.title)}</a></li>`).join('')}</ul></div>`;
  const pages = [
    [ui.home, ''], [ui.about, 'about/'], [ui.cases, 'case-studies/'], [ui.insights, 'insights/'], [ui.careers, 'careers/'], [ui.contact, 'contact/'], [ui.faq, 'faq/'], [ui.privacy, 'privacy/'], [ui.terms, 'terms/'],
  ];
  const body = `
${phero({ crumb: [C(ui.home, u('')), { label: ui.sitemap }], badge: ui.sitemap, title: ui.sitemap, imgId: 'sol-pgs', focus: '50% 30%', cls: 'phero--short' })}
<section class="sec sec--paper">
  <div class="wrap sitemap-grid">
    <div><h2 class="h3">${t(ui.quickLinks)}</h2><ul class="sitemap-list">${pages.map(([l, h]) => `<li><a href="${u(h)}">${t(l)}</a></li>`).join('')}</ul></div>
    ${grp(ui.solutions, solutions, 'solutions/')}
    ${grp(ui.services, services, 'services/')}
    ${grp(ui.industries, industries, 'industries/')}
    ${grp(ui.cases, cases, 'case-studies/')}
    ${grp(ui.insights, insights, 'insights/')}
  </div>
</section>`;
  return shell({ title: ui.sitemap, desc: b('All pages of the City Parking redesign concept.', 'كل صفحات تصوّر إعادة تصميم سيتي باركينج.'), path: 'sitemap/', body });
}

export function notFoundPage() {
  const body = `
<section class="nf sec sec--dark">
  <div class="grain" aria-hidden="true"></div>
  <div class="wrap wrap--n nf-in">
    <div class="nf-sign"><i>P</i><b>404</b></div>
    <h1 class="h1">${t(ui.notFoundT)}</h1>
    <p class="lead lead--dark">${t(ui.notFoundP)}</p>
    ${btn(u(''), ui.backHome)}
  </div>
</section>`;
  return shell({ title: b('Page not found', 'الصفحة غير موجودة'), desc: b('Page not found.', 'الصفحة غير موجودة.'), path: '404.html', body, noindex: true });
}
