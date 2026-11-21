/**
 * Draws the link-preview images that WhatsApp, LinkedIn, X and search results
 * show when someone shares a page: public/og-<lang>.png for the home page and
 * public/og-hire-<lang>.png for the hire page.
 * Run again after changing the headline or role: bun scripts/og-image.ts
 */
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { copy, type Lang } from '../src/i18n';
import { buildContours } from '../src/lib/contours';

// The renderer can't read the site's web font (woff2), so it uses Helvetica Neue.
const confDir = mkdtempSync(join(tmpdir(), 'og-fonts-'));
writeFileSync(
  join(confDir, 'fonts.conf'),
  `<?xml version="1.0"?><!DOCTYPE fontconfig SYSTEM "fonts.dtd"><fontconfig><dir>/System/Library/Fonts</dir><dir>/Library/Fonts</dir><cachedir>${confDir}</cachedir></fontconfig>`
);
process.env.FONTCONFIG_FILE = join(confDir, 'fonts.conf');
const { default: sharp } = await import('sharp');

const W = 1200;
const H = 630;
const color = {
  paper: '#0e1a22',
  ink: '#dde6e1',
  inkSoft: '#97a8a5',
  contour: '#1f313a',
  contourIndex: '#2f4852',
  water: '#82b6ea'
};

const xml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function wrap(text: string, max: number) {
  const lines: string[] = [];
  let line = '';
  for (const word of text.split(' ')) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > max && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

const contours = buildContours({
  width: W,
  height: H,
  peaks: [
    { x: 0.82, y: 0.3, height: 1, spread: 0.2 },
    { x: 1.0, y: 0.95, height: 0.5, spread: 0.16 },
    { x: 0.5, y: -0.05, height: 0.35, spread: 0.18 }
  ],
  seed: 7
})
  .map(
    (line) =>
      `<path d="${line.d}" fill="none" stroke="${line.index ? color.contourIndex : color.contour}" stroke-width="${line.index ? 2 : 1.3}"/>`
  )
  .join('');

type Card = { file: string; headline: string; sub?: string };

for (const lang of ['tr', 'en'] as Lang[]) {
  const t = copy[lang];
  const cards: Card[] = [
    { file: `og-${lang}`, headline: t.home.headline },
    { file: `og-hire-${lang}`, headline: t.hire.headline, sub: t.hire.ctaTitle }
  ];
  for (const card of cards) await draw(lang, card);
}

async function draw(lang: Lang, card: Card) {
  const t = copy[lang];
  // Long headlines get a smaller size so they stay within three lines.
  const fits = wrap(card.headline, 24).length <= 3;
  const size = fits ? 68 : 58;
  const lines = wrap(card.headline, fits ? 24 : 30);
  const headline = lines
    .map((line, i) => `<tspan x="72" dy="${i === 0 ? 0 : size * 1.15}">${xml(line)}</tspan>`)
    .join('');
  const subY = 260 + (lines.length - 1) * size * 1.15 + 64;
  const sub = card.sub
    ? `<text x="72" y="${subY}" font-family="Helvetica Neue" font-size="38" fill="${color.inkSoft}">${xml(card.sub)}</text>`
    : '';
  const role = `${t.home.work[0].role} · ${t.footer}`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${color.paper}"/>
  ${contours}
  <g transform="translate(72 64) scale(1.5)">
    <rect width="32" height="32" rx="7" fill="${color.ink}"/>
    <path d="M5.5 23.5 11.2 10 16 18.2 20.8 8.5 26.5 23.5" fill="none" stroke="${color.paper}" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="20.8" cy="8.5" r="2.1" fill="${color.water}"/>
  </g>
  <text x="136" y="99" font-family="Helvetica Neue" font-weight="700" font-size="28" letter-spacing="1" fill="${color.ink}">Metin Süt</text>
  <text x="72" y="260" font-family="Helvetica Neue" font-weight="600" font-size="${size}" letter-spacing="-1" fill="${color.ink}">${headline}</text>
  ${sub}
  <text x="72" y="566" font-family="Helvetica Neue" font-size="30" fill="${color.inkSoft}">${xml(role)}</text>
  <text x="${W - 72}" y="566" text-anchor="end" font-family="Helvetica Neue" font-weight="500" font-size="30" fill="${color.water}">metinsut.com</text>
</svg>`;

  const out = resolve(import.meta.dir, `../public/${card.file}.png`);
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: true }).toFile(out);
  console.log(`wrote ${out}`);
}
