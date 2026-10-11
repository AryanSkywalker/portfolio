import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      cover: image(),
      excerpt: z.string(),
      draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number(),
      aim: z.string(),
      tech: z.array(z.string()),
      accuracy: z.string(),
      dataset: z.string().optional(),
      image: image(),
      imageAlt: z.string(),
      /** Tall screenshots get a fixed height instead of half the row width. */
      portrait: z.boolean().default(false),
    }),
});

export const collections = { blog, projects };
