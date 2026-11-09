import type { APIRoute } from 'astro';

// Crawlers only read robots.txt at the domain root, so this takes effect once the
// site moves to its own domain. Until then, submit the sitemap in Search Console.
export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}/sitemap-index.xml`, site);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl.href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
