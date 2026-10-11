# aryanSkywalker — portfolio

Static site built with [Astro](https://astro.build). Plain HTML/CSS output, no client-side framework.

## Develop

Requires Node 22+ (`nvm use` picks it up from `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built site
npm run check    # type-check .astro/.ts files
```

## Where things live

| To change…                   | Edit                                                                    |
| ---------------------------- | ----------------------------------------------------------------------- |
| Name, socials, email, resume | `src/data/site.ts`                                                      |
| Skill ratings                | `src/data/skills.ts`                                                    |
| Colours, fonts               | `src/styles/tokens.css`                                                 |
| Add a blog post              | new `.md` in `src/content/blog/`                                        |
| Add a project                | new `.md` in `src/content/projects/`                                    |
| Add artwork                  | image in `src/assets/images/artwork/` + entry in `src/data/artwork.ts` |
| Header / footer              | `src/components/TopBar.astro`, `src/components/ContactBar.astro`        |
| Home page copy               | `src/pages/index.astro`                                                 |

### Blog post frontmatter

```md
---
title: "My Post"
date: 2026-10-11
cover: ../../assets/images/blog/my-cover.jpg
excerpt: "One line shown on the card."
draft: true   # optional: hidden from production builds
---

Paragraphs separated by a blank line.
```

The URL is the filename: `src/content/blog/my-post.md` → `/blog/my-post/`.

### Project frontmatter

```md
---
title: Project Name
order: 5                 # position on the page
aim: What it does
tech: [Python, PyTorch]
accuracy: "95%"
dataset: Optional source
image: ../../assets/images/projects/name.png
imageAlt: Description of the screenshot
portrait: true           # optional, for tall screenshots
---
```

Images in `src/assets/` are resized, converted to WebP and stripped of EXIF/GPS metadata at build
time, so originals can go in as-is. Files in `public/` (resume, favicon, old-URL redirects) are
copied untouched.

## Deploying

Run `npm run build` and upload `dist/`. If the site lives under a sub-path
(e.g. `username.github.io/portfolio`), set `base` in `astro.config.mjs`.
