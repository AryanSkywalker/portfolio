// @ts-check
import { defineConfig } from 'astro/config';

// Hosted on GitHub Pages as a project site, so everything lives under /portfolio/.
// All internal links go through `withBase()`, so changing `base` here is enough
// if the site ever moves (e.g. to a custom domain, where base would be '/').
export default defineConfig({
  site: 'https://aryanskywalker.github.io',
  base: '/portfolio',
});
