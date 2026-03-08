import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  srcDir: './astro_src',
  publicDir: './public',
  base: '/',
  outDir: './dist',
  markdown: {
    smartypants: false,
  },
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: ['@mui/material', '@mui/system', '@mui/icons-material', '@mui/utils', '@emotion/react', '@emotion/styled'],
    },
  },
});
