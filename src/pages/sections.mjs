// Hub + detail pages for solutions, services, industries, case studies and insights.
import { b, t, esc, u, img, plain, fmtDate } from '../lib/i18n.mjs';
import { ui } from '../data/site.mjs';
import { shell, ico, arrow, pbadge, btn, led, ctaStrip } from '../lib/layout.mjs';
import { phero, shead, outcomeCards, caseCard, itemCard, indCard, insCard, faqList, stackChips, ticket, gallery, casesFor, solBy, svcBy, crumbs } from '../lib/components.mjs';
import { solutions, stack } from '../data/solutions.mjs';
import { services } from '../data/services.mjs';
import { industries } from '../data/industries.mjs';
import { cases, caseBySlug, kinds } from '../data/cases.mjs';
import { insights } from '../data/insights.mjs';

const indBy = Object.fromEntries(industries.map((x) => [x.slug, x]));
const home = { label: ui.home, href: '' };
const C = (label, href) => ({ label, href });

/* ================================================================== SOLUTIONS */
export function solutionsHub() {
  const body = `
${phero({
  crumb: [C(ui.home, u('')), { label: ui.solutions }],
  badge: ui.solutions,
  title: b('Technology that earns its place.', 'تقنية تستحق مكانها.'),
  lead: b('Seven solutions on one integrated platform. Each is described by what it does for your business — the technical detail sits underneath.', 'سبعة حلول على منصة متكاملة. يُوصف كلٌّ منها بما يفعله لعملك — أما التفاصيل التقنية فتأتي تحتها.'),
  imgId: 'sol-pgs',
  focus: '50% 30%',
})}
<section class="sec sec--paper">
  <div class="wrap">
    ${shead({ badge: b('The stack', 'المنظومة'), title: ui.stackTitle, sub: ui.stackSub })}
    <div class="stack-grid">${stack
      .map(
        (s, i) => `<a class="stack-card" href="${u('solutions/' + s.to + '/')}" data-reveal><span class="stack-n">${String(i + 1).padStart(2, '0')}</span><h3>${t(s.name)}</h3><p>${t(s.does)}</p><span class="link-arrow">${t(ui.learnMore)}${arrow()}</span></a>`
      )
      .join('')}</div>
  </div>
</section>
<section class="sec sec--paper2">
  <div class="wrap">
    ${shead({ badge: ui.solutions, title: b('Seven solutions, one platform', 'سبعة حلول، منصة واحدة') })}
    <div class="item-grid">${solutions.map((s) => itemCard(s, 'solutions/')).join('')}</div>
  </div>
</section>
${ctaStrip()}`;
  return shell({
    title: ui.solutions,
    desc: b('Smart parking management, guidance, EV charging, on-street, toll gates, weight-in-motion and traffic intelligence — described by what they do for your business.', 'إدارة مواقف ذكية وتوجيه وشحن كهربائي ومواقف الشوارع وبوابات العبور والوزن أثناء الحركة وذكاء المرور — بما تفعله لعملك.'),
    path: 'solutions/',
    active: 'solutions',
    body,
  });
}

export function solutionPage(s) {
  const idx = solutions.indexOf(s);
  const next = solutions[(idx + 1) % solutions.length];
  const inds = s.industries.map((k) => indBy[k]).filter(Boolean);
  const body = `
${phero({
  crumb: [C(ui.home, u('')), C(ui.solutions, u('solutions/')), { label: s.name }],
  badge: ui.solutions,
  title: s.name,
  lead: s.line,
  sub: s.intro,
  imgId: s.img,
  alt: s.name,
  focus: s.focus || '50% 40%',
})}
<section class="sec sec--paper">
  <div class="wrap">
    ${shead({ badge: ui.theBusinessCase, title: b('What it does for the business', 'ماذا تفعل للأعمال') })}
    ${outcomeCards(s.outcomes)}
  </div>
</section>
${
  s.cases.length
    ? `<section class="sec sec--dark rel">
  <div class="grain" aria-hidden="true"></div>
  <div class="wrap">
    ${shead({ badge: ui.whereUsed, title: ui.whereUsed, cls: 'shead--dark' })}
    ${casesFor(s.cases)}
  </div>
</section>`
    : ''
}
<section class="sec ${s.cases.length ? 'sec--paper' : 'sec--dark'} rel">
  <div class="wrap">
    ${shead({ badge: ui.whereApplies, title: ui.whereApplies, cls: s.cases.length ? '' : 'shead--dark' })}
    <div class="ind-grid ind-grid--rel">${inds.map(indCard).join('')}</div>
  </div>
</section>
<section class="sec sec--paper2 faqs">
  <div class="wrap faqs-in"><div>${shead({ badge: ui.faqEyebrow, title: ui.faqs })}</div>${faqList(s.faq)}</div>
</section>
<section class="sec sec--paper next">
  <div class="wrap"><a class="next-link" href="${u('solutions/' + next.slug + '/')}"><small>${t(b('Next solution', 'الحل التالي'))}</small><b>${t(next.name)}</b><span>${t(next.line)}</span>${arrow()}</a></div>
</section>
${ctaStrip()}`;
  return shell({
    title: s.name,
    desc: b(plain(s.line) + ' ' + plain(s.intro).split('.')[0] + '.', s.line.ar + ' ' + s.intro.ar.split('.')[0] + '.'),
    path: `solutions/${s.slug}/`,
    active: 'solutions',
    body,
  });
}

/* ================================================================== SERVICES */
export function servicesHub() {
  const body = `
${phero({
  crumb: [C(ui.home, u('')), { label: ui.services }],
  badge: ui.services,
  title: b('People who run it, every day.', 'فريق يديرها كل يوم.'),
  lead: b('Eight services — from the first plan to the last car of the night. Trained teams, clear protocols and one operational command center.', 'ثماني خدمات — من أول خطة حتى آخر سيارة في الليل. فرق مدرَّبة وبروتوكولات واضحة ومركز عمليات واحد.'),
  imgId: 'gem-crew-2',
  focus: '50% 50%',
})}
<section class="sec sec--paper">
  <div class="wrap">
    ${shead({ badge: b('Advise', 'استشارة'), title: b('Start with the plan', 'ابدأ بالخطة') })}
    <div class="item-grid item-grid--one">${itemCard(services[0], 'services/')}</div>
  </div>
</section>
<section class="sec sec--paper2">
  <div class="wrap">
    ${shead({ badge: b('Operate', 'تشغيل'), title: b('Then let a team run it', 'ثم دع فريقًا يديرها') })}
    <div class="item-grid">${services.slice(1).map((s) => itemCard(s, 'services/')).join('')}</div>
  </div>
</section>
${ctaStrip()}`;
  return shell({
    title: ui.services,
    desc: b('Parking management, valet, traffic management, event parking, meet-and-greet, golf carts, waterless car wash and parking & traffic consultancy.', 'إدارة المواقف والفاليه وإدارة الحركة ومواقف الفعاليات والاستقبال وعربات الجولف وغسيل السيارات بلا ماء واستشارات المواقف والمرور.'),
    path: 'services/',
    active: 'services',
    body,
  });
}

export function servicePage(s) {
  const idx = services.indexOf(s);
  const next = services[(idx + 1) % services.length];
  const inds = s.industries.map((k) => indBy[k]).filter(Boolean);
  const body = `
${phero({
  crumb: [C(ui.home, u('')), C(ui.services, u('services/')), { label: s.name }],
  badge: ui.services,
  title: s.name,
  lead: s.line,
  sub: s.intro,
  imgId: s.img,
  alt: s.name,
  focus: '50% 45%',
})}
<section class="sec sec--paper">
  <div class="wrap">
    ${shead({ badge: ui.theBusinessCase, title: b('What it does for the business', 'ماذا تفعل للأعمال') })}
    ${outcomeCards(s.outcomes)}
  </div>
</section>
${
  s.cases.length
    ? `<section class="sec sec--dark rel">
  <div class="grain" aria-hidden="true"></div>
  <div class="wrap">
    ${shead({ badge: ui.whereUsed, title: ui.whereUsed, cls: 'shead--dark' })}
    ${casesFor(s.cases)}
  </div>
</section>`
    : ''
}
<section class="sec ${s.cases.length ? 'sec--paper' : 'sec--dark'} rel">
  <div class="wrap">
    ${shead({ badge: ui.whereApplies, title: ui.whereApplies, cls: s.cases.length ? '' : 'shead--dark' })}
    <div class="ind-grid ind-grid--rel">${inds.map(indCard).join('')}</div>
  </div>
</section>
<section class="sec sec--paper2 faqs">
  <div class="wrap faqs-in"><div>${shead({ badge: ui.faqEyebrow, title: ui.faqs })}</div>${faqList(s.faq)}</div>
</section>
<section class="sec sec--paper next">
  <div class="wrap"><a class="next-link" href="${u('services/' + next.slug + '/')}"><small>${t(b('Next service', 'الخدمة التالية'))}</small><b>${t(next.name)}</b><span>${t(next.line)}</span>${arrow()}</a></div>
</section>
${ctaStrip()}`;
  return shell({
    title: s.name,
    desc: b(plain(s.line) + ' ' + plain(s.intro).split('.')[0] + '.', s.line.ar + ' ' + s.intro.ar.split('.')[0] + '.'),
    path: `services/${s.slug}/`,
    active: 'services',
    body,
  });
}

/* ================================================================== INDUSTRIES */
export function industriesHub() {
  const body = `
${phero({
  crumb: [C(ui.home, u('')), { label: ui.industries }],
  badge: ui.industries,
  title: b('Nine sectors. Nine different questions.', 'تسعة قطاعات. تسعة أسئلة مختلفة.'),
  lead: b('Parking looks different to a mall GM, a hospital administrator and a municipality. Start with the question on your desk.', 'تبدو المواقف مختلفة لمدير مول ومدير مستشفى وبلدية. ابدأ بالسؤال الذي على مكتبك.'),
  imgId: 'zia',
  focus: '50% 40%',
})}
<section class="sec sec--paper">
  <div class="wrap"><div class="ind-grid">${industries.map(indCard).join('')}</div></div>
</section>
${ctaStrip()}`;
  return shell({
    title: ui.industries,
    desc: b('Shopping malls, airports, hospitals, stadiums, on-street parking, offices, event venues, education and tourist destinations.', 'مراكز التسوق والمطارات والمستشفيات والاستادات ومواقف الشوارع والمباني الإدارية وأماكن الفعاليات والتعليم والوجهات السياحية.'),
    path: 'industries/',
    active: 'industries',
    body,
  });
}

export function industryPage(x) {
  const idx = industries.indexOf(x);
  const next = industries[(idx + 1) % industries.length];
  const sols = x.solutions.map((s) => solBy[s]);
  const svcs = x.services.map((s) => svcBy[s]);
  const mini = (it, base) => `<a class="mini-card" href="${u(base + it.slug + '/')}"><span class="mini-ico">${ico(it.icon)}</span><span><b>${t(it.name)}</b><small>${t(it.line)}</small></span>${arrow()}</a>`;
  const body = `
${phero({
  crumb: [C(ui.home, u('')), C(ui.industries, u('industries/')), { label: x.name }],
  badge: ui.industries,
  title: x.name,
  lead: x.ask,
  sub: x.intro,
  imgId: x.img,
  alt: x.name,
  focus: '50% 45%',
  extra: `<p class="phero-who"><small>${t(ui.forWho)}</small> ${t(x.who)}</p>`,
})}
<section class="sec sec--paper">
  <div class="wrap">
    ${shead({ badge: ui.theBusinessCase, title: b('What changes for you', 'ما الذي يتغيّر لديك') })}
    ${outcomeCards(x.outcomes)}
  </div>
</section>
${
  x.cases.length
    ? `<section class="sec sec--dark rel"><div class="grain" aria-hidden="true"></div><div class="wrap">${shead({ badge: ui.proof, title: b('Proof from the field', 'دليل من الميدان'), cls: 'shead--dark' })}${casesFor(x.cases)}</div></section>`
    : x.quote
      ? `<section class="sec sec--dark rel"><div class="grain" aria-hidden="true"></div><div class="wrap wrap--n"><figure class="voice voice--solo"><blockquote>${t(b('At Schiphol we invest a lot to provide mobility solutions. There is really a transition in mobility going on with more electric cars and electric buses. But yield management is also important to optimize revenue.', 'في سخيبول نستثمر كثيرًا في حلول التنقّل. هناك تحوّل حقيقي في التنقّل مع زيادة السيارات والحافلات الكهربائية. لكن إدارة العائد مهمّة أيضًا لتحسين الإيرادات.'))}</blockquote><figcaption><b>${t(b('Dhiredj Sadhoe', 'ديهريدج سادهو'))}</b><span>${t(b('Director Parking & Mobility Services, Schiphol Group', 'مدير خدمات المواقف والتنقّل، مجموعة سخيبول'))}</span></figcaption></figure></div></section>`
      : ''
}
<section class="sec sec--paper2">
  <div class="wrap">
    ${shead({ badge: b('The toolkit', 'الأدوات'), title: b('Solutions and services for this sector', 'الحلول والخدمات لهذا القطاع') })}
    <div class="mini-grid">${sols.map((s) => mini(s, 'solutions/')).join('')}${svcs.map((s) => mini(s, 'services/')).join('')}</div>
  </div>
</section>
<section class="sec sec--paper faqs">
  <div class="wrap faqs-in"><div>${shead({ badge: ui.faqEyebrow, title: ui.faqs })}</div>${faqList(x.faq)}</div>
</section>
<section class="sec sec--paper2 next">
  <div class="wrap"><a class="next-link" href="${u('industries/' + next.slug + '/')}"><small>${t(b('Next sector', 'القطاع التالي'))}</small><b>${t(next.name)}</b><span>${t(next.ask)}</span>${arrow()}</a></div>
</section>
${ctaStrip()}`;
  return shell({
    title: x.name,
    desc: b(plain(x.ask) + ' ' + plain(x.intro).split('.')[0] + '.', x.ask.ar + ' ' + x.intro.ar.split('.')[0] + '.'),
    path: `industries/${x.slug}/`,
    active: 'industries',
    body,
  });
}

/* ================================================================== CASE STUDIES */
export function casesHub() {
  const filters = [`<button class="chip is-on" type="button" data-filter="all">${t(ui.all)}<sup>${cases.length}</sup></button>`]
    .concat(
      Object.entries(kinds).map(
        ([k, v]) => `<button class="chip" type="button" data-filter="${k}">${t(v)}<sup>${cases.filter((c) => c.kind === k).length}</sup></button>`
      )
    )
    .join('');
  const body = `
${phero({
  crumb: [C(ui.home, u('')), { label: ui.cases }],
  badge: ui.cases,
  title: b('Landmarks that trusted us with their first impression.', 'معالم وثقت بنا في انطباعها الأول.'),
  lead: b('Thirteen references across culture, retail, mixed-use and events — each told as a business story: the stake, what we did and what it delivered.', 'ثلاثة عشر مشروعًا مرجعيًا في الثقافة والتجزئة والمشروعات متعددة الاستخدامات والفعاليات — يُروى كلٌّ منها كقصة أعمال: ما كان على المحك وما فعلناه وما حقّقناه.'),
  imgId: 'gem',
  focus: '60% 40%',
})}
<section class="sec sec--paper" data-filter-group>
  <div class="wrap">
    <div class="chips chips--filter" role="group" aria-label="${esc(plain(ui.filterBy))}" data-aria-label-ar="${esc(ui.filterBy.ar)}">${filters}</div>
    <div class="cases-grid cases-grid--hub" data-filter-items>${cases.map((c) => caseCard(c, 'm')).join('')}</div>
  </div>
</section>
${ctaStrip()}`;
  return shell({
    title: ui.cases,
    desc: b('Thirteen landmark parking and traffic references in Egypt — the Grand Egyptian Museum, Mivida, Zia Mall, Alamein Festival and more — told as business stories.', 'ثلاثة عشر مشروعًا مرجعيًا للمواقف والحركة في مصر — المتحف المصري الكبير وميفيدا وزيا مول ومهرجان العلمين وغيرها — كقصص أعمال.'),
    path: 'case-studies/',
    active: 'cases',
    body,
  });
}

export function casePage(c) {
  const idx = cases.indexOf(c);
  const next = cases[(idx + 1) % cases.length];
  const meta = `<p class="phero-meta"><b>${t(c.name)}</b><i>·</i>${t(c.city)}<i>·</i>${t(c.date)}</p>${
    c.metric ? `<div class="phero-metric">${led(c.metric.led, c.metric.suffix, 'led--md')}<p>${t(c.metric.label)}</p></div>` : ''
  }`;
  const body = `
${phero({
  crumb: [C(ui.home, u('')), C(ui.cases, u('case-studies/')), { label: c.name }],
  badge: kinds[c.kind],
  title: c.headline,
  lead: c.summary,
  imgId: c.img,
  alt: c.name,
  focus: c.slug === 'mivida-complex' ? '50% 60%' : '50% 40%',
  extra: meta,
  cls: 'phero--case',
})}
<section class="sec sec--paper case-story">
  <div class="wrap case-grid">
    <div class="case-side">${ticket(c)}</div>
    <div class="case-main">
      <div class="beat" data-reveal><span class="beat-k">${t(b('01', '01'))} · ${t(ui.stake)}</span><p class="beat-lead">${t(c.stake)}</p></div>
      <div class="beat" data-reveal><span class="beat-k">02 · ${t(ui.whatWeDid)}</span>
        <ol class="steps">${c.did.map((d, i) => `<li><span>${i + 1}</span><p>${t(d)}</p></li>`).join('')}</ol></div>
      <div class="beat" data-reveal><span class="beat-k">03 · ${t(ui.whatChanged)}</span>
        <ul class="ticks ticks--l">${c.outcomes.map((d) => `<li>${ico('check')}<span>${t(d)}</span></li>`).join('')}</ul></div>
      <div class="beat" data-reveal><span class="beat-k">${t(ui.whatWeDeployed)}</span>${stackChips(c.stack)}</div>
    </div>
  </div>
</section>
${
  c.gallery.length
    ? `<section class="sec sec--paper2 galsec"><div class="wrap">${shead({ badge: ui.field, title: b('The team on site', 'الفريق في الموقع') })}${gallery(c.gallery, c.name)}</div></section>`
    : ''
}
<section class="sec sec--dark rel">
  <div class="grain" aria-hidden="true"></div>
  <div class="wrap">
    ${shead({ badge: ui.nextStory, title: ui.nextStory, cls: 'shead--dark' })}
    <div class="cases-grid cases-grid--rel cases-grid--two">${caseCard(next, 'm')}${caseCard(cases[(idx + 2) % cases.length], 'm')}</div>
  </div>
</section>
${ctaStrip()}`;
  return shell({
    title: b(plain(c.name) + ' — ' + plain(c.headline), c.name.ar + ' — ' + c.headline.ar),
    desc: b(plain(c.summary), c.summary.ar),
    path: `case-studies/${c.slug}/`,
    active: 'cases',
    body,
    ogImg: c.img,
  });
}

/* ================================================================== INSIGHTS */
export function insightsHub() {
  const body = `
${phero({
  crumb: [C(ui.home, u('')), { label: ui.insights }],
  badge: ui.insights,
  title: b('Ideas for the people who run properties.', 'أفكار لمن يديرون العقارات.'),
  lead: b('Five articles on smart parking, valet, AI and sustainability. Each one opens with three takeaways for decision-makers.', 'خمسة مقالات عن المواقف الذكية والفاليه والذكاء الاصطناعي والاستدامة. يبدأ كل مقال بثلاث خلاصات لصانعي القرار.'),
  imgId: 'in-ai',
  focus: '50% 50%',
})}
<section class="sec sec--paper">
  <div class="wrap"><div class="ins-grid ins-grid--hub">${insights.map((a, i) => insCard(a, i === 0 ? 'l' : 'm')).join('')}</div></div>
</section>
${ctaStrip()}`;
  return shell({
    title: ui.insights,
    desc: b('Articles on smart parking, valet and guest experience, AI, sustainability and commercial property — each with three takeaways for decision-makers.', 'مقالات عن المواقف الذكية والفاليه وتجربة الضيف والذكاء الاصطناعي والاستدامة والعقار التجاري — مع ثلاث خلاصات لصانعي القرار.'),
    path: 'insights/',
    active: 'insights',
    body,
  });
}

const inline = (s) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
function prose(blocks) {
  let html = '';
  let list = false;
  for (const bl of blocks) {
    if (bl.t !== 'li' && list) { html += '</ul>'; list = false; }
    if (bl.t === 'li') { if (!list) { html += '<ul>'; list = true; } html += `<li>${inline(bl.x)}</li>`; }
    else if (bl.t === 'h2') html += `<h2>${bl.x}</h2>`;
    else if (bl.t === 'h3' || bl.t === 'h4') html += `<h3>${bl.x}</h3>`;
    else html += `<p>${inline(bl.x)}</p>`;
  }
  return html + (list ? '</ul>' : '');
}

export function articlePage(a) {
  const idx = insights.indexOf(a);
  const others = insights.filter((x) => x !== a).slice(0, 2);
  const links = a.links
    .map((s) => {
      const x = solBy[s] || svcBy[s] || indBy[s];
      const base = solBy[s] ? 'solutions/' : svcBy[s] ? 'services/' : 'industries/';
      return `<a class="mini-card" href="${u(base + s + '/')}"><span class="mini-ico">${ico(x.icon)}</span><span><b>${t(x.name)}</b></span>${arrow()}</a>`;
    })
    .join('');
  const body = `
${phero({
  crumb: [C(ui.home, u('')), C(ui.insights, u('insights/')), { label: a.tag }],
  badge: a.tag,
  title: a.title,
  imgId: a.img,
  alt: a.title,
  focus: '50% 45%',
  cls: 'phero--article',
  extra: `<p class="phero-meta"><time datetime="${a.date}"><span data-l="en">${fmtDate(a.date, 'en')}</span><span data-l="ar" lang="ar">${fmtDate(a.date, 'ar')}</span></time><i>·</i>${a.mins} ${t(ui.minRead)}<i>·</i>${t(a.who)}</p>`,
})}
<section class="sec sec--paper article">
  <div class="wrap wrap--n">
    <aside class="takeaways"><h2>${t(ui.takeaways)}</h2><p class="tk-who">${t(ui.forWho)} — ${t(a.who)}</p><ol>${a.takeaways.map((x) => `<li>${t(x)}</li>`).join('')}</ol></aside>
    <p class="ar-note" data-l="ar" lang="ar">${ui.arabicNote.ar}</p>
    <div class="prose" lang="en" dir="ltr">${prose(a.blocks)}</div>
  </div>
</section>
<section class="sec sec--paper2">
  <div class="wrap">
    ${shead({ badge: ui.related, title: b('Where this connects', 'أين يرتبط هذا') })}
    <div class="mini-grid">${links}</div>
  </div>
</section>
<section class="sec sec--paper">
  <div class="wrap">
    ${shead({ badge: ui.insights, title: b('Keep reading', 'واصل القراءة') })}
    <div class="ins-grid">${others.map((x) => insCard(x, 'm')).join('')}</div>
  </div>
</section>
${ctaStrip()}`;
  return shell({
    title: a.title,
    desc: b(plain(a.excerpt), a.excerpt.ar),
    path: `insights/${a.slug}/`,
    active: 'insights',
    body,
    ogImg: a.img,
  });
}
