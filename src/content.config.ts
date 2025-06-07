import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});

const projects = defineCollection({
  // Load Markdown and MDX files in the `src/content/projects/` directory.
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      shortDescription: z.string(),
      description: z.string(),
      pubDate: z.date(),
      heroImage: image().optional(),
      gallery: z
        .array(
          z.object({
            path: image(),
            description: z.string(),
            slug: z.string(),
          })
        )
        .optional(),
      niceName: z.string(),
      links: z
        .array(
          z.object({
            url: z.string(),
            text: z.string(),
          })
        )
        .optional(),
      // add other fields as needed
    }),
});

export const collections = {
  blog,
  projects,
};
