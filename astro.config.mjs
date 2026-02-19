import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';
import cloudflare from '@astrojs/cloudflare';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://mimas-iconic-astro.andreafusiondigital.workers.dev',
  output: 'static',
  adapter: cloudflare(),
  compressHTML: true,
  vite: {
    resolve: {
      alias: {
        '@data':       path.resolve(__dirname, 'src/data'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@layouts':    path.resolve(__dirname, 'src/layouts'),
      },
    },
  },
});