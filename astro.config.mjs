import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://fernandoplomeria.com.ar',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
