import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.metinsut.com',
  vite: {
    plugins: [tailwindcss()]
  }
});
