import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://bodynation.in',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    react(),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
