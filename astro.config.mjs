import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.metinsut.com',
  // Build pages as files (hire-me.html) and link without a trailing slash,
  // so Firebase serves /hire-me directly instead of redirecting to /hire-me/.
  trailingSlash: 'never',
  build: { format: 'file' },
  vite: {
    plugins: [tailwindcss()]
  }
});
