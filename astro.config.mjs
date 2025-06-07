// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nicovece.github.io/cf-portfolio-astro',
  base: '/cf-portfolio-astro/',
  trailingSlash: 'never',
  integrations: [mdx(), sitemap()],
});