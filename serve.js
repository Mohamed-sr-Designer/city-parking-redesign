// Minimal static dev server for the City Parking redesign (dev only).
const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || process.argv[2] || 4820;
const ROOT = __dirname;
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.json': 'application/json', '.ico': 'image/x-icon', '.txt': 'text/plain', '.xml': 'application/xml' };
http
  .createServer((req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0]);
    // mirror the GitHub Pages sub-path so absolute links (404 page) behave the same locally
    p = p.replace(/^\/city-parking-redesign/, '') || '/';
    if (p.endsWith('/')) p += 'index.html';
    let file = path.join(ROOT, p);
    if (!file.startsWith(ROOT) || /[\\/](_raw|src|tools|node_modules)[\\/]/.test(file)) { res.writeHead(403); return res.end(); }
    fs.stat(file, (err, st) => {
      if (!err && st.isDirectory()) { file = path.join(file, 'index.html'); }
      fs.stat(file, (e2, st2) => {
        if (e2 || !st2.isFile()) {
          res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
          return fs.createReadStream(path.join(ROOT, '404.html')).on('error', () => res.end('not found')).pipe(res);
        }
        res.writeHead(200, { 'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Content-Length': st2.size, 'Cache-Control': 'no-cache' });
        fs.createReadStream(file).pipe(res);
      });
    });
  })
  .listen(PORT, () => console.log('City Parking dev server on http://localhost:' + PORT));
