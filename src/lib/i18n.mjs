// Tiny bilingual + path helpers shared by every template.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const manifest = JSON.parse(fs.readFileSync(path.join(HERE, '../data/img-manifest.json'), 'utf8'));

export const esc = (s) =>
  String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const b = (en, ar) => ({ en, ar });

/* ---- current page depth: '' | '../' | '../../' ---- */
let ROOT = '';
export const setRoot = (r) => { ROOT = r; };
export const root = () => ROOT;
export const u = (p = '') => ROOT + p; // asset / page url relative to the current page

/* ---- bilingual inline: both languages in the DOM, CSS shows the active one ---- */
export const t = (o) => {
  if (typeof o === 'string') return o;
  if (!o) return '';
  return `<span data-l="en">${o.en}</span><span data-l="ar" lang="ar">${o.ar}</span>`;
};
/* attribute pair, e.g. aria-label / placeholder / title */
export const attr = (name, o) => `${name}="${esc(o.en)}" data-${name}-ar="${esc(o.ar)}"`;
export const plain = (o, lang = 'en') => (typeof o === 'string' ? o : o[lang]);
export const strip = (s) => String(s).replace(/<[^>]+>/g, '');

/* ---- images (srcset from manifest) ---- */
export function img(id, alt, o = {}) {
  const m = manifest[id];
  if (!m) throw new Error('Unknown image id: ' + id);
  const { sizes = '100vw', cls = '', eager = false, style = '', fetch = '' } = o;
  const a = alt || { en: '', ar: '' };
  const srcset = m.sw < m.w ? `${u(`assets/img/${id}-sm.webp`)} ${m.sw}w, ${u(`assets/img/${id}.webp`)} ${m.w}w` : '';
  return `<img src="${u(`assets/img/${id}.webp`)}"${srcset ? ` srcset="${srcset}" sizes="${sizes}"` : ''} alt="${esc(a.en)}" data-alt-ar="${esc(a.ar)}" width="${m.w}" height="${m.h}"${cls ? ` class="${cls}"` : ''}${style ? ` style="${style}"` : ''} ${eager ? `loading="eager" fetchpriority="high"` : 'loading="lazy"'} decoding="async"${fetch}>`;
}
export const imgUrl = (id, small = false) => u(`assets/img/${id}${small ? '-sm' : ''}.webp`);

export const fmtDate = (iso, lang) => {
  const d = new Date(iso + 'T00:00:00Z');
  return d.toLocaleDateString(lang === 'ar' ? 'ar-EG-u-nu-latn' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
};
export const dateBi = (iso) => b(fmtDate(iso, 'en'), fmtDate(iso, 'ar'));
