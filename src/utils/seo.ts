import { site } from '../data/site';

/** Absolute URL for a path that already includes `base` (e.g. Astro.url.pathname or an image src). */
export function absoluteUrl(path: string, siteUrl: URL | undefined): string {
  return siteUrl ? new URL(path, siteUrl).href : path;
}

/** Stable id so other pages (e.g. blog posts) can reference the same person. */
export function personId(homeUrl: string): string {
  return `${homeUrl}#person`;
}

/** schema.org Person: tells search engines who this site is about and which profiles are theirs. */
export function personSchema(homeUrl: string, imageUrl: string) {
  return {
    '@type': 'Person',
    '@id': personId(homeUrl),
    name: site.name,
    alternateName: site.handle,
    url: homeUrl,
    image: imageUrl,
    description: site.description,
    affiliation: { '@type': 'CollegeOrUniversity', name: site.affiliation },
    knowsAbout: site.knowsAbout,
    sameAs: Object.values(site.socials).map((social) => social.href),
  };
}
