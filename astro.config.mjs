import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL || 'https://amirrezaheydariardakani.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
