import { defineConfig } from 'astro/config';

export default defineConfig({
  srcDir: './astro_src',
  publicDir: './astro_src/public',
  base: '/diary',
  outDir: './public/diary',
  build: {
    format: 'file',
  },
});
