// City Parking redesign — static site builder.
//   src/data/*  +  src/lib/*  +  src/pages/*   ->   ./**/index.html
// Usage: node build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { setRoot } from './src/lib/i18n.mjs';
import { SITE } from './src/data/site.mjs';
import { solutions } from './src/data/solutions.mjs';
import { services } from './src/data/services.mjs';
import { industries } from './src/data/industries.mjs';
import { cases } from './src/data/cases.mjs';
import { insights } from './src/data/insights.mjs';
import { home } from './src/pages/home.mjs';
import { solutionsHub, solutionPage, servicesHub, servicePage, industriesHub, industryPage, casesHub, casePage, insightsHub, articlePage } from './src/pages/sections.mjs';
import { aboutPage, contactPage, careersPage, faqPageBuild, legalPage, sitemapPage, notFoundPage } from './src/pages/misc.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const urls = [];

function emit(rel, render, { noSitemap = false, absRoot = null } = {}) {
  // rel: '' | 'about/' | 'solutions/x/'  ->  file <rel>index.html
  const depth = rel.split('/').filter(Boolean).length;
  setRoot(absRoot ?? '../'.repeat(depth));
  const html = render();
  const file = path.join(ROOT, rel, rel.endsWith('.html') ? '' : 'index.html');
  const out = rel.endsWith('.html') ? path.join(ROOT, rel) : file;
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  if (!noSitemap) urls.push(rel);
}

emit('', home);
emit('solutions/', solutionsHub);
solutions.forEach((s) => emit(`solutions/${s.slug}/`, () => solutionPage(s)));
emit('services/', servicesHub);
services.forEach((s) => emit(`services/${s.slug}/`, () => servicePage(s)));
emit('industries/', industriesHub);
industries.forEach((x) => emit(`industries/${x.slug}/`, () => industryPage(x)));
emit('case-studies/', casesHub);
cases.forEach((c) => emit(`case-studies/${c.slug}/`, () => casePage(c)));
emit('insights/', insightsHub);
insights.forEach((a) => emit(`insights/${a.slug}/`, () => articlePage(a)));
emit('about/', aboutPage);
emit('contact/', contactPage);
emit('careers/', careersPage);
emit('faq/', faqPageBuild);
emit('privacy/', () => legalPage('privacy'));
emit('terms/', () => legalPage('terms'));
emit('sitemap/', sitemapPage);
emit('404.html', notFoundPage, { noSitemap: true, absRoot: '/city-parking-redesign/' });

// sitemap.xml + robots.txt + .nojekyll
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  path.join(ROOT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((r) => `  <url><loc>${SITE.origin}/${r}</loc><lastmod>${today}</lastmod></url>`)
    .join('\n')}\n</urlset>\n`
);
fs.writeFileSync(path.join(ROOT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE.origin}/sitemap.xml\n`);
fs.writeFileSync(path.join(ROOT, '.nojekyll'), '');
console.log(`built ${urls.length + 1} pages`);
