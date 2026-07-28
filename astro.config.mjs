import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.suleymanakbulut.cv',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'always',
  },
});
