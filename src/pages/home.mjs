import { b, t, esc, u, img, plain } from '../lib/i18n.mjs';
import { SITE, ui, marquee, marqueeAr, heroStats, numbers, pio, lenses, journey, voices, pins, film } from '../data/site.mjs';
import { shell, ico, arrow, pbadge, btn, led, stat, ctaBand } from '../lib/layout.mjs';
import { attr } from '../lib/i18n.mjs';
import { shead, caseCard, indCard, insCard, faqList, stackChips, solBy, svcBy } from '../lib/components.mjs';
import { cases, caseBySlug, kinds } from '../data/cases.mjs';
import { industries } from '../data/industries.mjs';
import { insights } from '../data/insights.mjs';
import { homeFaq } from '../data/faq.mjs';

const track = (arr, lang) =>
  `<div class="marq-track" data-l="${lang}"${lang === 'ar' ? ' lang="ar"' : ''}>${[...arr, ...arr].map((n, i) => `<span${i >= arr.length ? ' aria-hidden="true"' : ''}>${n}</span>`).join('')}</div>`;

function hero() {
  const gem = caseBySlug['grand-egyptian-museum'];
  return `<section class="hero" id="top">
  <div class="hero-bg" aria-hidden="true">
    ${img('gem', gem.name, { eager: true, sizes: '100vw', cls: 'hero-img', style: 'object-position:62% 42%' })}
    <div class="hero-shade"></div><div class="grain"></div>
  </div>
  <div class="wrap hero-in">
    <div class="hero-copy">
      ${pbadge(ui.heroEyebrow)}
      <h1 class="hero-h1"><span class="l1">${t(ui.heroL1)}</span> <span class="l2">${t(ui.heroL2)}</span></h1>
      <p class="hero-sub">${t(ui.heroSub)}</p>
      <div class="hero-ctas">
        ${btn(u('case-studies/grand-egyptian-museum/'), ui.heroCta1)}
        <a class="btn btn--ghost" href="${u('contact/')}"><span>${t(ui.heroCta2)}</span>${arrow()}</a>
      </div>
    </div>
    <aside class="led-sign" aria-hidden="true">
      <div class="led-sign-hd"><i>P</i><span data-l="en">PARKING</span><span data-l="ar" lang="ar">المواقف</span></div>
      <ul>
        <li><span>P1</span><div class="led led--sm" data-led="042" data-sign="42"></div><em>${t(ui.free)}</em></li>
        <li><span>P2</span><div class="led led--sm" data-led="118" data-sign="118"></div><em>${t(ui.free)}</em></li>
        <li class="is-full"><span>P3</span><div class="led led--sm" data-led="000" data-fixed="1"></div><em>${t(ui.full)}</em></li>
      </ul>
      <p>${t(ui.ledCaption)}</p>
    </aside>
  </div>
  <div class="wrap hero-foot">
    <div class="hero-stats">${heroStats.map(stat).join('')}</div>
    <a class="hero-card" href="${u('case-studies/grand-egyptian-museum/')}">
      <span class="hero-card-img">${img('gem-crew-1', gem.name, { sizes: '96px' })}</span>
      <span class="hero-card-tx"><small>${t(ui.nowShowing)} · ${t(gem.city)}</small><b>${t(gem.name)}</b><em>${t(gem.headline)}</em></span>
      <span class="hero-card-go">${arrow()}</span>
    </a>
  </div>
</section>
<div class="marq" aria-label="${esc(plain(ui.cases))}" data-aria-label-ar="${esc(ui.cases.ar)}">${track(marquee, 'en')}${track(marqueeAr, 'ar')}</div>`;
}

function filmSection() {
  const chapters = film.chapters
    .map(
      (c, i) => `<li><button type="button" class="film-ch${i === 0 ? ' is-on' : ''}" data-film-seek="${c.t}"><time dir="ltr">${c.time}</time><span class="film-ch-tx"><b>${t(c.name)}</b><small>${t(c.desc)}</small></span></button>${c.to ? `<a class="film-ch-go" href="${u(c.to)}" ${attr('aria-label', ui.filmOpen)}>${arrow()}</a>` : ''}</li>`
    )
    .join('');
  return `<section class="sec sec--paper film" id="film">
  <div class="wrap film-in">
    <header class="shead film-copy">${pbadge(ui.filmEyebrow)}<h2 class="h2">${t(ui.filmTitle)}</h2><p class="lead">${t(ui.filmSub)}</p></header>
    <div class="film-player" data-film>
      <video class="film-video" muted loop playsinline preload="none" disablepictureinpicture poster="${u(film.poster)}" ${attr('aria-label', ui.filmAria)}><source src="${u(film.src)}" type="video/mp4"></video>
      <button class="film-play" type="button" data-film-play ${attr('aria-label', ui.filmPlay)}>${ico('play')}</button>
      <div class="film-bar">
        <button class="film-btn" type="button" data-film-toggle ${attr('aria-label', ui.filmToggle)}>${ico('play', 'i-play')}${ico('pause', 'i-pause')}</button>
        <div class="film-progress" data-film-progress role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="${film.duration}" aria-valuenow="0" ${attr('aria-label', ui.filmSeek)}><i></i></div>
        <span class="film-time" dir="ltr">0:00 / 0:${film.duration}</span>
        <button class="film-btn" type="button" data-film-mute ${attr('aria-label', ui.filmMute)}>${ico('mute', 'i-mute')}${ico('vol', 'i-vol')}</button>
        <button class="film-btn" type="button" data-film-full ${attr('aria-label', ui.filmFull)}>${ico('full')}</button>
      </div>
    </div>
    <div class="film-chapters"><h3 class="film-h">${t(ui.filmChapters)}</h3><ol>${chapters}</ol></div>
  </div>
</section>`;
}

function pioSection() {
  return `<section class="sec sec--paper pio" id="how">
  <div class="wrap">
    ${shead({ badge: ui.pioEyebrow, title: ui.pioTitle, sub: ui.pioSub })}
    <div class="pio-grid">
      ${pio
        .map(
          (c) => `<article class="pio-col" data-reveal>
        <div class="pio-img">${img(c.img, c.name, { sizes: '(min-width:900px) 30vw, 100vw' })}<span class="pio-n">${c.n}</span></div>
        <h3>${t(c.name)}</h3>
        <p class="pio-line">${t(c.line)}</p>
        <p>${t(c.text)}</p>
        <ul class="chips chips--flat">${c.chips.map((x) => `<li>${t(x)}</li>`).join('')}</ul>
        <a class="link-arrow" href="${u(c.href)}">${t(ui.explore)}${arrow()}</a>
      </article>`
        )
        .join('')}
    </div>
  </div>
</section>`;
}

function lensSection() {
  const tabs = lenses
    .map(
      (l, i) => `<button class="lens-tab" role="tab" id="lt-${l.k}" aria-selected="${i === 0}" aria-controls="lp-${l.k}" tabindex="${i === 0 ? 0 : -1}"><span class="lens-n">0${i + 1}</span><span class="lens-lab">${t(l.label)}</span></button>`
    )
    .join('');
  const panels = lenses
    .map((l, i) => {
      const c = l.case ? caseBySlug[l.case] : null;
      const proof = c
        ? `<a class="proof" href="${u('case-studies/' + c.slug + '/')}"><span class="proof-img">${img(c.img, c.name, { sizes: '(min-width:900px) 22vw, 60vw' })}</span><span class="proof-tx"><small>${t(ui.proof)} · ${t(kinds[c.kind])}</small><b>${t(c.name)}</b><em>${t(c.headline)}</em></span><span class="proof-go">${arrow()}</span></a>`
        : `<a class="proof proof--cap" href="${u('solutions/traffic-intelligence/')}"><span class="proof-ico">${ico('radar')}</span><span class="proof-tx"><small>${t(ui.proof)}</small><b>${t(solBy['traffic-intelligence'].name)}</b><em>${t(solBy['traffic-intelligence'].line)}</em></span><span class="proof-go">${arrow()}</span></a>`;
      return `<div class="lens-panel" role="tabpanel" id="lp-${l.k}" aria-labelledby="lt-${l.k}" ${i === 0 ? '' : 'hidden'}>
        <p class="lens-role">${t(l.role)}</p>
        <h3 class="lens-goal">${t(l.goal)}</h3>
        <div class="lens-cols">
          <div><h4>${t(ui.theProblem)}</h4><p>${t(l.problem)}</p></div>
          <div><h4>${t(ui.howWeHelp)}</h4><ul class="ticks">${l.answers.map((a) => `<li>${ico('check')}<span>${t(a)}</span></li>`).join('')}</ul></div>
        </div>
        <div class="lens-foot">${proof}${stackChips(l.links)}</div>
      </div>`;
    })
    .join('');
  return `<section class="sec sec--dark lens" data-lens id="lens">
  <div class="grain" aria-hidden="true"></div>
  <div class="wrap">
    ${shead({ badge: ui.lensEyebrow, title: ui.lensTitle, sub: ui.lensSub, cls: 'shead--dark' })}
    <div class="lens-body">
      <div class="lens-tabs" role="tablist" aria-orientation="vertical">${tabs}</div>
      <div class="lens-panels">${panels}</div>
    </div>
  </div>
</section>`;
}

function journeySection() {
  const stops = journey
    .map((j, i) => `<button class="jr-stop" role="tab" id="jt-${i}" aria-selected="${i === 0}" aria-controls="jp-${i}" tabindex="${i === 0 ? 0 : -1}"><span class="jr-dot">${j.n}</span><span class="jr-name">${t(j.name)}</span></button>`)
    .join('');
  const panels = journey
    .map(
      (j, i) => `<div class="jr-panel" role="tabpanel" id="jp-${i}" aria-labelledby="jt-${i}" ${i === 0 ? '' : 'hidden'}>
        <div class="jr-out"><span class="jr-ico">${ico(j.icon)}</span><h3>${t(j.out)}</h3></div>
        <div class="jr-tech"><h4>${t(ui.behind)}</h4><ul class="chips">${j.tech.map((x) => `<li>${t(x)}</li>`).join('')}</ul><a class="link-arrow" href="${u(j.to)}">${t(ui.learnMore)}${arrow()}</a></div>
      </div>`
    )
    .join('');
  return `<section class="sec sec--paper2 jr" data-journey id="journey">
  <div class="wrap">
    ${shead({ badge: ui.journeyEyebrow, title: ui.journeyTitle, sub: ui.journeySub })}
    <div class="jr-road" role="tablist" aria-label="${esc(plain(ui.journeyEyebrow))}" data-aria-label-ar="${esc(ui.journeyEyebrow.ar)}"><div class="jr-line" aria-hidden="true"><i class="jr-car"></i></div>${stops}</div>
    <div class="jr-panels">${panels}</div>
  </div>
</section>`;
}

function casesSection() {
  const feat = cases.filter((c) => c.feature);
  return `<section class="sec sec--paper cases" id="cases">
  <div class="wrap">
    <div class="shead-row">${shead({ badge: ui.casesEyebrow, title: ui.casesTitle, sub: ui.casesSub })}<a class="btn btn--ink" href="${u('case-studies/')}"><span>${t(ui.seeAllCases)}</span>${arrow()}</a></div>
    <div class="cases-grid cases-grid--home">${feat.map((c, i) => caseCard(c, i === 0 ? 'l' : 'm')).join('')}</div>
  </div>
</section>`;
}

function numbersSection() {
  return `<section class="sec sec--dark nums" id="numbers">
  <div class="grain" aria-hidden="true"></div>
  <div class="wrap">
    ${shead({ badge: ui.numbersEyebrow, title: ui.numbersTitle, sub: ui.numbersSub, cls: 'shead--dark' })}
    <div class="nums-grid">${numbers
      .map(
        (n) => `<a class="num" href="${u((n.kind === 'cases' ? 'case-studies/' : 'services/') + n.to + '/')}" data-reveal>${led(n.led, n.suffix, 'led--lg')}<p class="num-l">${t(n.label)}</p><p class="num-f">${t(n.from)}${arrow()}</p></a>`
      )
      .join('')}</div>
  </div>
</section>`;
}

function industriesSection() {
  return `<section class="sec sec--paper inds" id="industries">
  <div class="wrap">
    <div class="shead-row">${shead({ badge: ui.indEyebrow, title: ui.indTitle, sub: ui.indSub })}<a class="btn btn--ink" href="${u('industries/')}"><span>${t(ui.seeAllIndustries)}</span>${arrow()}</a></div>
    <div class="ind-grid">${industries.map(indCard).join('')}</div>
  </div>
</section>`;
}

function peopleSection() {
  const shots = [
    ['gem-crew-1', b('Grand Egyptian Museum', 'المتحف المصري الكبير')],
    ['citadel-1', b('Salah Eldeen Citadel', 'قلعة صلاح الدين')],
    ['eiec-sign', b('Egyptian International Exhibition Center', 'مركز مصر للمعارض الدولية')],
    ['marrasi-crew-1', b('Marrasi North Coast', 'مراسي الساحل الشمالي')],
    ['polaris-crew', b('Polaris Mall', 'بولاريس مول')],
    ['north-square-crew-1', b('North Square Mall', 'نورث سكوير مول')],
    ['opera-1', b('Cairo Opera House', 'دار الأوبرا المصرية')],
    ['crew-frame', b('The City Parking team', 'فريق سيتي باركينج')],
  ];
  return `<section class="sec sec--paper2 people" id="people">
  <div class="wrap">
    ${shead({ badge: ui.peopleEyebrow, title: ui.peopleTitle, sub: ui.peopleSub })}
    <div class="mosaic">${shots
      .map(([id, cap], i) => `<figure class="mo mo--${i}" data-reveal>${img(id, b(plain(cap) + ' — City Parking team', cap.ar + ' — فريق سيتي باركينج'), { sizes: '(min-width:900px) 25vw, 50vw' })}<figcaption>${t(cap)}</figcaption></figure>`)
      .join('')}</div>
  </div>
</section>`;
}

function voicesMapSection() {
  const q = voices
    .map(
      (v, i) => `<figure class="voice" ${i ? 'hidden' : ''} data-voice="${i}"><blockquote>${t(v.q)}</blockquote><figcaption><b>${t(v.who)}</b><span>${t(v.role)}</span></figcaption></figure>`
    )
    .join('');
  const pinHtml = pins.map((p) => `<div class="pin pin--${p.k}" style="left:${p.x}%;top:${p.y}%"><b>${p.count}</b></div>`).join('');
  const legend = `<ul class="map-legend">${pins.map((p) => `<li><i class="lg-c lg-c--${p.k}">${p.count}</i><span>${t(ui.projectsWord)} · ${t(p.label)}</span></li>`).join('')}</ul>`;
  return `<section class="sec sec--dark vm" id="where">
  <div class="grain" aria-hidden="true"></div>
  <div class="wrap vm-in">
    <div class="vm-voices">
      ${pbadge(ui.voicesEyebrow)}
      <h2 class="h2">${t(ui.voicesTitle)}</h2>
      <div class="voices" data-voices>${q}</div>
      <div class="voice-nav" role="group" aria-label="Testimonials"><button type="button" data-voice-prev aria-label="Previous">${ico('arrow', 'flip')}</button><span data-voice-count dir="ltr">1 / ${voices.length}</span><button type="button" data-voice-next aria-label="Next">${ico('arrow')}</button></div>
    </div>
    <div class="vm-map">
      ${pbadge(ui.mapEyebrow)}
      <h2 class="h2">${t(ui.mapTitle)}</h2>
      <p class="lead">${t(ui.mapSub)}</p>
      <div class="map" role="img" aria-label="${esc('Map: Egypt and Saudi Arabia')}" data-aria-label-ar="${esc('خريطة: مصر والمملكة العربية السعودية')}">
        <div class="map-land"></div>
        <div class="map-hl"></div>
        <span class="map-cn map-cn--eg">${t(ui.egypt)}</span><span class="map-cn map-cn--ksa">${t(ui.ksa)}</span>
        ${pinHtml}
      </div>
      ${legend}
    </div>
  </div>
</section>`;
}

function insightsSection() {
  return `<section class="sec sec--paper ins" id="insights">
  <div class="wrap">
    <div class="shead-row">${shead({ badge: ui.insEyebrow, title: ui.insTitle, sub: ui.insSub })}<a class="btn btn--ink" href="${u('insights/')}"><span>${t(ui.seeAllInsights)}</span>${arrow()}</a></div>
    <div class="ins-grid">${insights.slice(0, 3).map((a, i) => insCard(a, i === 0 ? 'l' : 'm')).join('')}</div>
  </div>
</section>`;
}

function faqSection() {
  return `<section class="sec sec--paper2 faqs" id="faq">
  <div class="wrap faqs-in">
    <div>${shead({ badge: ui.faqEyebrow, title: ui.faqTitle })}<a class="link-arrow" href="${u('faq/')}">${t(ui.seeAll)}${arrow()}</a></div>
    ${faqList(homeFaq)}
  </div>
</section>`;
}

const jsonld = `<script type="application/ld+json">${JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'City Parking Integrated Solutions',
  url: SITE.originalSite,
  logo: `${SITE.origin}/assets/img/logo.png`,
  telephone: SITE.tel,
  email: SITE.email,
  address: { '@type': 'PostalAddress', streetAddress: '21 Nagaty Serag, Makram Ebid', addressLocality: 'Nasr City', addressRegion: 'Cairo', addressCountry: 'EG' },
  sameAs: SITE.social.map((s) => s.href),
})}</script>`;

export function home() {
  return shell({
    title: b('Smart parking, told as a business story', 'المواقف الذكية، كقصة أعمال'),
    desc: b(
      'City Parking plans, equips and runs parking for landmark destinations in Egypt and Saudi Arabia — smart systems, valet, traffic and event operations, and consultancy under one accountable partner.',
      'تخطّط سيتي باركينج وتجهّز وتدير المواقف في أبرز الوجهات في مصر والمملكة — أنظمة ذكية وفاليه وحركة وفعاليات واستشارات تحت شريك واحد مسؤول.'
    ),
    path: '',
    active: null,
    jsonld,
    cls: 'page-home',
    body: [hero(), filmSection(), pioSection(), lensSection(), journeySection(), casesSection(), numbersSection(), industriesSection(), peopleSection(), voicesMapSection(), insightsSection(), faqSection(), ctaBand()].join('\n'),
  });
}
