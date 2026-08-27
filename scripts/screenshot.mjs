import { chromium } from 'playwright-core';
import { createServer } from 'http';
import { readFileSync, existsSync, statSync } from 'fs';
import { join, extname } from 'path';

const DIST = './dist';
const MIME = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2',
};

const server = createServer((req, res) => {
  let p = join(DIST, req.url.split('?')[0]);
  try {
    if (existsSync(p) && statSync(p).isDirectory()) p = join(p, 'index.html');
    if (!existsSync(p)) p = join(DIST, 'index.html');
    res.setHeader('Content-Type', MIME[extname(p)] || 'application/octet-stream');
    res.end(readFileSync(p));
  } catch {
    res.statusCode = 404; res.end('nf');
  }
});

await new Promise((r) => server.listen(4173, r));

const browser = await chromium.launch({
  executablePath: process.env.HOME + '/Library/Caches/ms-playwright/chromium-1234/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing',
});

const shots = [
  { url: 'http://localhost:4173/en', name: 'home-full', fullPage: true },
  { url: 'http://localhost:4173/en', name: 'home-fold' },
];
for (const s of shots) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(s.url, { waitUntil: 'networkidle' });
  await page.evaluate(() => {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: `/tmp/opencode/${s.name}.png`, fullPage: s.fullPage ?? false });
  await page.close();
  console.log('shot:', s.name);
}
await browser.close();
server.close();
