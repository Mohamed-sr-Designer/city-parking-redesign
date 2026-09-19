// Link + asset checker for the built site. Usage: node tools/check-links.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SKIP = new Set(['_raw', 'src', 'tools', 'node_modules', '.claude', '.git']);
const pages = [];
(function walk(d) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    if (SKIP.has(f.name)) continue;
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p);
    else if (f.name.endsWith('.html')) pages.push(p);
  }
})(ROOT);

let bad = 0, checked = 0;
const exists = (target) => {
  if (fs.existsSync(target)) {
    const st = fs.statSync(target);
    return st.isFile() || fs.existsSync(path.join(target, 'index.html'));
  }
  return false;
};
for (const file of pages) {
  const html = fs.readFileSync(file, 'utf8');
  const dir = path.dirname(file);
  const refs = [...html.matchAll(/(?:href|src|srcset)="([^"]+)"/g)].flatMap((m) => (m[0].startsWith('srcset') ? m[1].split(',').map((s) => s.trim().split(' ')[0]) : [m[1]]));
  for (let r of refs) {
    if (/^(https?:|mailto:|tel:|#|data:|\/\/)/.test(r)) continue;
    r = r.split('#')[0].split('?')[0];
    if (!r) continue;
    checked++;
    const target = r.startsWith('/city-parking-redesign/') ? path.join(ROOT, r.replace('/city-parking-redesign/', '')) : path.resolve(dir, r);
    if (!exists(target)) { bad++; console.log('BROKEN', path.relative(ROOT, file), '->', r); }
  }
  // id anchors used by same-page hash links
  for (const m of html.matchAll(/href="#([^"]+)"/g)) {
    if (!html.includes(`id="${m[1]}"`)) { bad++; console.log('MISSING ANCHOR', path.relative(ROOT, file), '#' + m[1]); }
  }
}
console.log(`${pages.length} pages, ${checked} local refs checked, ${bad} problems`);
process.exit(bad ? 1 : 0);
