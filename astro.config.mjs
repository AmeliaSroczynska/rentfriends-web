// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

/**
 * Serves the app-association files from functions so they carry an explicit
 * `application/json` header. They live under src/ (not public/) because the
 * Vercel adapter emits a Build Output API bundle, which ignores vercel.json.
 */
function wellKnownRoutes() {
  return {
    name: 'rentfriends-well-known',
    hooks: {
      'astro:config:setup': ({ injectRoute }) => {
        injectRoute({
          pattern: '/.well-known/apple-app-site-association',
          entrypoint: './src/well-known/aasa-route.ts',
        });
        injectRoute({
          pattern: '/.well-known/assetlinks.json',
          entrypoint: './src/well-known/assetlinks-route.ts',
        });
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://rentfriends.app',
  redirects: {
    '/contact': '/',
    '/en/contact': '/en/'
  },
  // Everything is still prerendered by default; only the share pages
  // (/o/[id], /w/[id]) opt out via `export const prerender = false`, because
  // they read live listing data from the API on every request.
  adapter: vercel(),
  integrations: [
    wellKnownRoutes(),
    sitemap({
      // Exclude deep-link landing + per-user share/invite pages (noindex).
      filter: (page) => !/\/(dl|o|w|invite)(\/|$)/.test(new URL(page).pathname),
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
  build: {
    inlineStylesheets: 'always'
  },
  image: {
    layout: 'constrained',
    responsiveStyles: true
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-plus-jakarta',
      weights: ['400 800'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      display: 'swap',
      fallbacks: ['system-ui', 'sans-serif'],
      optimizedFallbacks: true
    }
  ],
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
