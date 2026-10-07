import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.string(),
  author: z.string().default('Target International'),
  category: z.enum(['emergency', 'tips', 'maintenance', 'news']),
  tags: z.array(z.string()).default([]),
  readingTime: z.string().optional(),
  featured: z.boolean().default(false),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: postSchema,
});

// Arabic translations of the blog posts (same file names / slugs as `blog`)
const blogAr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-ar' }),
  schema: postSchema,
});

export const collections = { blog, blogAr };
