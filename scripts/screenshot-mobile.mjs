import { chromium } from 'playwright-core';
import { createServer } from 'http';
import { readFileSync, existsSync, statSync } from 'fs';
import { join, extname } from 'path';

const DIST = './dist';
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.mp4': 'video/mp4', '.woff2': 'font/woff2' };

const server = createServer((req, res) => {
  let p = join(DIST, req.url.split('?')[0]);
  try {
    if (existsSync(p) && statSync(p).isDirectory()) p = join(p, 'index.html');
    if (!existsSync(p)) p = join(DIST, 'index.html');
    res.setHeader('Content-Type', MIME[extname(p)] || 'application/octet-stream');
    res.end(readFileSync(p));
  } catch { res.statusCode = 404; res.end('nf'); }
});
await new Promise((r) => server.listen(4174, r));

const browser = await chromium.launch({
  executablePath: process.env.HOME + '/Library/Caches/ms-playwright/chromium-1234/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing',
});
const page = await browser.newPage({ viewport: { width: 375, height: 667 } }); // iPhone SE
await page.goto('http://localhost:4174/en', { waitUntil: 'networkidle' });
await page.evaluate(() => document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible')));
await page.waitForTimeout(1500);
await page.screenshot({ path: '/tmp/opencode/hero-mobile.png' });
await browser.close();
server.close();
console.log('done');
