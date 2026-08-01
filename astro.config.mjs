// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rentfriends-web.vercel.app',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pl',
        locales: {
          pl: 'pl',
          en: 'en'
        }
      }
    })
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  image: {
    layout: 'constrained',
    responsiveStyles: true
  },
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});