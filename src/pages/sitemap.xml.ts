import type { APIRoute } from 'astro';
import { type Lang, type Page, routes } from '../i18n';

// Every page in both languages, each pointing at its translation (hreflang).
const langs: Lang[] = ['tr', 'en'];
const pages: Page[] = ['home', 'hire'];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://www.metinsut.com');
  const url = (lang: Lang, page: Page) => new URL(routes[lang][page], base).href;

  const entries = pages.flatMap((page) =>
    langs.map((lang) => {
      const alternates = [
        ...langs.map(
          (alt) => `    <xhtml:link rel="alternate" hreflang="${alt}" href="${url(alt, page)}"/>`
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${url('tr', page)}"/>`
      ].join('\n');
      return `  <url>\n    <loc>${url(lang, page)}</loc>\n${alternates}\n  </url>`;
    })
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
