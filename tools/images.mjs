// Image pipeline — _raw/* -> assets/img/<id>.webp (+ -sm) and src/data/img-manifest.json
// Also builds the reversed (light) logo, the map masks, the OG image and the icons.
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire('C:/Users/tarek/OneDrive/Desktop/New folder (7)/portfolio/');
const sharp = require('sharp');
const RAW = path.join(ROOT, '_raw');
const OUT = path.join(ROOT, 'assets', 'img');
fs.mkdirSync(OUT, { recursive: true });

const WA = (t) => `WhatsApp-Image-2025-08-21-at-${t}.jpeg`;
// id -> [source file, max width]
const MAP = {
  // case studies
  gem: ['Grand-Egyptian-Museum.webp', 1800],
  'gem-crew-1': [WA('10.30.07-PM'), 1200],
  'gem-crew-2': [WA('10.30.07-PM-1'), 1200],
  'gem-crew-3': [WA('10.30.07-PM-2'), 1200],
  mivida: ['Mivida-scaled.png', 2200],
  zia: ['04-76-scaled-1.jpg', 1800],
  alamein: ['3-01-1-e1755793235924.jpg', 1200],
  'event-aerial': ['Event-Parking.jpg', 1400],
  eiec: ['469779198_3325872934220382_4384113878470976102_n-1.jpg', 1800],
  'eiec-flags': ['HAL37924-scaled.webp', 1600],
  'eiec-crew': [WA('8.05.52-PM-1'), 1200],
  'eiec-sign': [WA('8.07.00-PM'), 1200],
  'north-square': ['file_552.jpg', 1600],
  'north-square-crew-1': [WA('7.34.25-PM-1'), 1200],
  'north-square-crew-2': [WA('7.34.25-PM-2'), 1200],
  'north-square-crew-3': [WA('7.34.25-PM-3'), 1200],
  marrasi: ['xxl_153068971.jpg', 1400],
  'marrasi-crew-1': [WA('7.31.41-PM-1'), 1200],
  'marrasi-crew-2': [WA('7.32.39-PM'), 1200],
  'marrasi-crew-3': [WA('7.33.13-PM'), 1200],
  'ulter-night': [WA('6.38.23-PM-1'), 1400],
  'polaris-1': ['120175330_743883069502572_3739283418674845359_n.jpg', 1400],
  'polaris-2': ['120106072_743883002835912_7146470226032196882_n.jpg', 1400],
  'polaris-3': ['120090795_743882962835916_1627950694576947489_n.jpg', 1400],
  'polaris-crew': [WA('6.40.06-PM'), 1200],
  citadel: ['9b855afa-9bf4-43af-8d26-ae76d71c6d05_half-day-tour-to-citadel-salah-eldeen-and-mohamed-ali-mosque-xlarge.jpg', 1800],
  'citadel-1': [WA('6.31.16-PM'), 1400],
  'citadel-2': [WA('6.31.17-PM'), 1400],
  'citadel-3': [WA('6.31.18-PM'), 1400],
  opera: ['Cairo-Opera-House.jpg', 1200],
  'opera-1': [WA('10.33.32-PM'), 1200],
  'opera-2': [WA('10.33.32-PM-1'), 1200],
  lelac: ['Le-Lac-du-Caire.png', 1600],
  'lelac-1': [WA('10.36.09-PM'), 1200],
  'lelac-2': [WA('10.36.09-PM-1'), 1200],
  'lelac-3': [WA('10.35.01-PM'), 1200],
  masr: ['23b451a4-0396-414e-917f-6387493b5803_visit-mall-misr-mall-of-egypt-shopping-tour-xlarge.webp', 1600],
  // solutions
  'sol-smart': ['Smart-Parking-Management.webp', 1600],
  'sol-pgs': ['Parking-Guidance-System-scaled.jpg', 1800],
  'sol-ev': ['EV-Charging-Solutions.jpg', 1600],
  'sol-onstreet': ['On-Street-Parking-System-scaled.jpg', 1600],
  'sol-toll': ['Toll-Gate-Weigh-in-Motion.jpg', 1800],
  'sol-traffic': ['Parking-and-Traffic-Consultancy.jpg', 1500],
  // services
  'sv-parking': ['Parking-Management.jpg', 1200],
  'sv-valet': ['Seamless-Parking-and-Valet-Solutions.webp', 1200],
  'sv-traffic': ['Traffic-Management.jpg', 1000],
  'sv-golf': ['Golf-Cart-Services.jpg', 1600],
  'sv-consult': ['Parking-Design-and-Layout-Optimization.jpg', 1000],
  'sv-wash': ['Waterless-Car-Wash.png', 1600],
  'sv-meet': ['Meet-and-Greet-Services.jpg', 1200],
  // industries
  'ind-airports': ['Cairo_Airport_Terminal_3-scaled.jpg', 1800],
  'ind-hospitals': ['Humania2-1.jpg', 1800],
  'ind-stadium': ['cairo_top1.jpg', 1200],
  'ind-onstreet': ['Woman-Parallel-Parking.001.jpeg', 1600],
  'ind-office': ['medhat-khalil-office-building-egypt1.jpg', 1800],
  'ind-events': ['egypt1-1024x747-1.jpg', 1200],
  'ind-edu': ['the-international-american-university-in-new-cairo-sasaki-associates-04.jpg', 1800],
  'ind-tourist': ['places_to_visit_in_egypt_2_46151d1196.png', 1600],
  // insights + misc
  'in-ops': ['Revolutionizing-Parking-Operations.jpeg', 1000],
  'in-ai': ['Future-of-Parking-Management.webp', 1400],
  'crew-frame': ['Frame-2-6.png', 1200],
  guest: ['woman-car-window-810x580-1.jpg', 900],
  'led-bars': ['flex-bar-illuminated-810x580-1.jpg', 900],
};

const manifest = {};
const enc = { quality: 76, effort: 5 };
for (const [id, [file, max]] of Object.entries(MAP)) {
  const src = path.join(RAW, file);
  if (!fs.existsSync(src)) { console.warn('MISSING', id, file); continue; }
  const meta = await sharp(src).metadata();
  const big = await sharp(src).rotate().resize({ width: max, withoutEnlargement: true }).webp(enc).toBuffer({ resolveWithObject: true });
  fs.writeFileSync(path.join(OUT, `${id}.webp`), big.data);
  const smW = Math.min(640, big.info.width);
  const sm = await sharp(src).rotate().resize({ width: smW, withoutEnlargement: true }).webp({ quality: 70, effort: 5 }).toBuffer({ resolveWithObject: true });
  fs.writeFileSync(path.join(OUT, `${id}-sm.webp`), sm.data);
  manifest[id] = { w: big.info.width, h: big.info.height, sw: sm.info.width, sh: sm.info.height };
}
fs.writeFileSync(path.join(ROOT, 'src/data/img-manifest.json'), JSON.stringify(manifest, null, 1));
console.log('images', Object.keys(manifest).length);

/* ---------- logos ---------- */
const logoSrc = path.join(RAW, 'logo-original.png');
const { data, info } = await sharp(logoSrc).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const W = info.width, H = info.height, C = info.channels;
const light = Buffer.from(data);
const hue = (r, g, b) => {
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn;
  if (!d) return -1;
  let h = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
  h *= 60; return h < 0 ? h + 360 : h;
};
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const i = (y * W + x) * C;
    const [r, g, b, a] = [data[i], data[i + 1], data[i + 2], data[i + 3]];
    if (!a || x < 188) continue; // keep the pin as is
    const h = hue(r, g, b);
    const sat = (Math.max(r, g, b) - Math.min(r, g, b)) / 255;
    if (h >= 200 && h <= 240 && sat > 0.25 && y < 165) { light[i] = 255; light[i + 1] = 255; light[i + 2] = 255; }        // CITY PARKING blue -> white
    else if (sat < 0.18 && r < 150) { light[i] = 190; light[i + 1] = 198; light[i + 2] = 214; }                               // INTEGRATED SOLUTIONS grey -> soft grey
  }
}
await sharp(light, { raw: { width: W, height: H, channels: C } }).png().toFile(path.join(OUT, 'logo-light.png'));
fs.copyFileSync(logoSrc, path.join(OUT, 'logo.png'));
// mark only (pin) for favicons / loaders
await sharp(logoSrc).extract({ left: 0, top: 0, width: 190, height: 216 }).png().toFile(path.join(OUT, 'logo-mark.png'));
for (const n of ['192x192', '180x180', '32x32']) fs.copyFileSync(path.join(RAW, `icon-${n}.png`), path.join(OUT, `icon-${n}.png`));
console.log('logos ok');

/* ---------- map masks (alpha-only PNGs, tinted in CSS) ---------- */
const m = await sharp(path.join(RAW, 'map.png')).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const mw = m.info.width, mh = m.info.height, mc = m.info.channels;
const hl = Buffer.alloc(mw * mh * 4), land = Buffer.alloc(mw * mh * 4);
for (let p = 0; p < mw * mh; p++) {
  const r = m.data[p * mc], g = m.data[p * mc + 1], b = m.data[p * mc + 2];
  const isGreen = g > r + 18 && g > b + 30;
  const isLand = !isGreen && r > 205 && r < 244 && Math.abs(r - g) < 8 && Math.abs(g - b) < 8; // land is light grey, sea is white
  hl.fill(255, p * 4, p * 4 + 3); land.fill(255, p * 4, p * 4 + 3);
  hl[p * 4 + 3] = isGreen ? 255 : 0;
  land[p * 4 + 3] = isLand || isGreen ? 255 : 0;
}
// crop to Egypt + Saudi Arabia so the countries fill the frame (pin coordinates in site.mjs assume this box)
const crop = { left: 225, top: 95, width: 625, height: 380 };
await sharp(hl, { raw: { width: mw, height: mh, channels: 4 } }).extract(crop).resize({ width: 1000 }).png({ compressionLevel: 9 }).toFile(path.join(OUT, 'map-hl.png'));
await sharp(land, { raw: { width: mw, height: mh, channels: 4 } }).extract(crop).resize({ width: 1000 }).png({ compressionLevel: 9 }).toFile(path.join(OUT, 'map-land.png'));
console.log('map ok', mw, mh);
