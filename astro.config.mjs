import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// TODO: replace with the final production domain
const SITE_URL = 'https://cris-fitness-coach.vercel.app';

export default defineConfig({
  site: SITE_URL,
  vite: {
    plugins: [tailwindcss()],
  },
});
