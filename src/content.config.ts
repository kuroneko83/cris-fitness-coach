import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    lang: z.enum(['en', 'ja']),
    quote: z.string(),
    result: z.string().optional(),
    order: z.number().default(99),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    lang: z.enum(['en', 'ja']),
    description: z.string(),
    pubDate: z.coerce.date(),
  }),
});

export const collections = { testimonials, blog };
