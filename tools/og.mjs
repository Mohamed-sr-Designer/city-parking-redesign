// Open Graph image (1200×630): landmark photo + navy gradient + reversed logo + headline.
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire('C:/Users/tarek/OneDrive/Desktop/New folder (7)/portfolio/');
const sharp = require('sharp');

const W = 1200, H = 630;
const photo = await sharp(path.join(ROOT, 'assets/img/gem.webp')).resize(W, H, { fit: 'cover', position: 'right' }).toBuffer();
const logo = await sharp(path.join(ROOT, 'assets/img/logo-light.png')).resize({ width: 230 }).toBuffer();
const overlay = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#0A1226" stop-opacity=".96"/><stop offset=".55" stop-color="#0A1226" stop-opacity=".78"/><stop offset="1" stop-color="#0A1226" stop-opacity=".2"/></linearGradient>
    <linearGradient id="t" x1="0" x2="1"><stop offset="0" stop-color="#D3DC27"/><stop offset=".5" stop-color="#2FA9DC"/><stop offset="1" stop-color="#466BB4"/></linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect x="70" y="238" width="44" height="44" rx="10" fill="#466BB4"/>
  <text x="92" y="271" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="30" fill="#fff">P</text>
  <text x="130" y="268" font-family="Arial, Helvetica, sans-serif" font-size="19" letter-spacing="3" fill="#C6E03A">INTEGRATED PARKING SOLUTIONS</text>
  <text x="70" y="352" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="62" fill="#fff">The first thing your</text>
  <text x="70" y="418" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="62" fill="#fff">guests meet.</text>
  <text x="70" y="494" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="62" fill="url(#t)">The last they remember.</text>
  <text x="70" y="574" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#ffffffb0">Redesign concept · Egypt &amp; Saudi Arabia</text>
</svg>`);
await sharp(photo)
  .composite([{ input: overlay }, { input: logo, left: 70, top: 62 }])
  .jpeg({ quality: 84 })
  .toFile(path.join(ROOT, 'assets/img/og.jpg'));
console.log('og ok');
