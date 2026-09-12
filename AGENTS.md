# AGENTS.md

Guidance for AI coding agents working in this repository.
This file is the single source of truth; `CLAUDE.md` is a one-line import of it.

## Keep this file up to date

**After every change you make, check whether this file still describes the repo correctly, and
update it in the same commit if it does not.** A stale `AGENTS.md` is worse than a missing one -
the next agent trusts it and undoes your work or repeats a mistake you already fixed.

Update it when you:

- add, remove or rename a page, a component, a directory or a `src/data/*.ts` file - the tree in
  **File structure** must match reality
- change `astro.config.mjs`, `package.json` scripts, the Node version or a dependency
- add a new i18n key group, or change how i18n / theming / consent / tracking works
- introduce a new convention, or break an existing one on purpose
- fix something this file currently documents as a known issue, or discover a new one worth warning
  about - especially anything in **Do NOT do these without asking**

Do not update it for ordinary content edits (copy, styling, a new i18n key inside an existing
group) - those are already covered by the conventions below.

Keep it instructions, not history. This file says how the repo works *now*; it is not a changelog.
Do not add dated entries, "recently changed" notes or a record of what you did - that is what git
history is for. Rewrite the affected lines in place and delete anything that is no longer true.

## Project

**RentFriends Web** - the marketing landing page for the RentFriends mobile app
(flatmate/room matching + shared-flat management, formerly Dyzury.app, launching in Wroclaw).

It is a **static, content-only site**. There is no backend, no database, no API, no auth and no
user data in this repo. Everything is rendered at build time to static HTML.

- Repo: https://github.com/AmeliaSroczynska/rentfriends-web
- Production domain: https://rentfriends.app
- The site is bilingual (Polish default, English) and supports light/dark mode.

## Tech stack

| Layer | What |
|---|---|
| Framework | Astro 7 (`astro`, static output, no adapter) |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` (no `tailwind.config.js` - theme lives in CSS) |
| Language | TypeScript, `astro/tsconfigs/strict` |
| Integrations | `@astrojs/sitemap`, Astro Fonts API (Google, Plus Jakarta Sans) |
| Client JS | Plain `<script>` blocks in `.astro` files - no React/Vue/Svelte islands |
| Analytics | Google Tag Manager (`GTM-W39KGBF4`) behind Consent Mode v2 + counter.dev, both gated by cookie consent |
| Hosting | Vercel, auto-deploy from `main` |
| Node | >= 22.12.0 (see `engines` in package.json) |

**Database: none.** If a task seems to need one, stop and ask.

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server with HMR at http://localhost:4321/
npm run build        # static production build into dist/
npm run preview      # serve the built dist/ locally
```

That is the complete list of scripts in `package.json`.

**There are no tests, no linter, no formatter and no CI in this project.**
Do not invent commands like `npm test` or `npm run lint` - they do not exist. Do not add a test
runner, ESLint, Prettier or a GitHub Actions workflow unless explicitly asked.

Verification after a change = `npm run build` must pass, plus a look at the page in `npm run dev`.

## File structure

```
rentfriends-web/
├── public/                    # served as-is at the site root, referenced by URL
│   ├── favicon.ico, favicon-96.png, apple-touch-icon.png, logo.png, og-image.jpg
│   ├── facebook.svg, instagram.svg, tiktok.svg
│   ├── robots.txt, llms.txt   # llms.txt = short site description for AI crawlers
├── src/
│   ├── assets/                # PNGs imported in components and optimised by <Image>
│   │   └── press/             # media outlet logos used by Press.astro, one file per outlet
│   ├── components/            # shared/homepage sections
│   │   ├── Navbar.astro       # sticky header, lang toggle, theme toggle, mobile menu, variant prop
│   │   ├── Hero.astro         # homepage hero + SoftwareApplication JSON-LD
│   │   ├── Features.astro, Reviews.astro, Award.astro, FAQ.astro, CTA.astro, Footer.astro
│   │   ├── Press.astro      # "Mówili o nas" media wall on the homepage, renders src/data/press.ts
│   │   ├── CookieBanner.astro # consent UI, writes localStorage `rf-cookie-consent`
│   │   ├── landlords/         # sections used only by the /landlords page, all prefixed Landlords*
│   │   └── tenants/           # sections used only by the /tenants page, all prefixed Tenants*
│   ├── data/
│   │   ├── faq.ts             # homepage FAQ items, { pl: {col1, col2}, en: {...} }
│   │   ├── landlordFaq.ts     # landlords FAQ items, same shape
│   │   ├── heroImage.ts       # hero image + widths/sizes/format, shared by Hero and Layout preload
│   │   ├── press.ts           # media mentions rendered by Press.astro, { name, url, type, logo? }
│   │   └── stats.ts           # headline numbers rendered in the Features stat tiles
│   ├── i18n/
│   │   ├── ui.ts              # ALL UI strings, `ui.pl` and `ui.en` (362 keys each), `as const`
│   │   └── utils.ts           # getLangFromUrl, useTranslations, stripLocale, localizePath, getAlternateLinks
│   ├── layouts/Layout.astro   # <html> shell: meta, OG/Twitter, canonical, hreflang, JSON-LD brand
│   │                          # schema, fonts, GTM, theme bootstrap, counter.dev loader, CookieBanner
│   ├── pages/                 # file-based routing
│   │   ├── index.astro, tenants.astro, landlords.astro, privacy-policy.astro, terms-of-service.astro   # PL (default)
│   │   ├── en/                # same five pages in English
│   │   ├── 404.astro
│   │   └── dl.astro           # standalone app-store redirect page, does NOT use Layout
│   └── styles/global.css      # Tailwind import, @theme design tokens, dark variant, focus styles
├── astro.config.mjs           # site, i18n, redirects, sitemap, fonts, prefetch, image defaults
├── tsconfig.json
├── AGENTS.md                  # this file - instructions for coding agents
├── CLAUDE.md                  # just `@AGENTS.md` - Claude Code does not read AGENTS.md itself
└── README.md
```

Generated / ignored, never edit: `dist/`, `.astro/`, `node_modules/`, `.idea/`.

## Conventions

### Components

- Everything is a `.astro` component. Frontmatter (`---`) for imports and computation, markup below,
  optional `<script>` / `<style>` at the end.
- PascalCase file names, one section per file. Landlords-page sections live in
  `src/components/landlords/` and are named `Landlords<Thing>.astro`.
- Props are typed with an exported `interface Props` and destructured with defaults
  (see `Navbar.astro`, `Layout.astro`).
- Pages are thin: they import `Layout`, `Navbar`, sections and `Footer` and compose them.
  Content and logic belong in the section component.

### Indentation

Mixed on purpose-by-accident: `Layout.astro` and `src/pages/index.astro` / `src/pages/en/index.astro`
use **tabs**, everything else uses **4 spaces**. Match the file you are editing, do not reformat a
whole file just to normalise it.

### Comments

**Never write comments in code.** No `//`, no `/* */`, no `<!-- -->`, no `{/* */}`, in any file type -
`.astro` markup, frontmatter, `<script>` and `<style>` blocks, `.ts` files and `global.css` alike.
This is absolute: it also covers explaining a workaround, labelling a section, marking where a
third-party snippet starts and ends, or warning the next reader about a constraint.

Write code that does not need them instead - a named constant, a named function, a clearer variable.
Everything you would have put in a comment goes somewhere else: a constraint or a warning belongs in
this file, the reason for a change belongs in the commit message.

The only thing that may look like a comment is a directive the tooling actually reads, such as
`// @ts-check` in `astro.config.mjs`. That is configuration, not a comment - leave it alone.

When you edit a file, strip any comments you find in the parts you touch.

### i18n (this is the part that breaks most easily)

- Default locale `pl` at `/`, English at `/en/`, `prefixDefaultLocale: false`.
- **No user-facing string is ever hardcoded in a component.** Every string goes through:
  ```astro
  const lang = getLangFromUrl(Astro.url);
  const t = useTranslations(lang);
  ```
  and is rendered as `{t('section.key')}`. Strings containing HTML use `set:html={t('...')}`.
- Keys are dot-notation, grouped by section: `meta.*`, `nav.*`, `hero.*`, `features.*`, `reviews.*`,
  `faq.*`, `award.*`, `press.*`, `cta.*`, `footer.*`, `cookies.*`, `landlords.*`, `privacy.*`, `terms.*`,
  `page404.*`.
- `meta.*` holds the `<meta name="description">` copy for each page (`meta.home.description`,
  `meta.tenants.description`, `meta.landlords.description`, ...). Every indexable page passes its own
  `description={t('meta.<page>.description')}` to `Layout` - the default in `Layout.astro` is only a
  fallback, and leaving a page on it ships Polish copy to the English site.
- `useTranslations` runs every string through `bindSingleLetterWords`, which glues Polish one-letter
  words (`a i o u w z`) to the next word with a non-breaking space, so no line ever ends on one. It
  skips anything inside `<...>`, so strings carrying markup keep their attributes intact. Do not
  hand-write `&nbsp;` in `ui.ts` - it is applied automatically, including to new copy.
- **Always add a key to both `ui.pl` and `ui.en` in the same edit.** The counts must stay equal.
  A missing EN key silently falls back to Polish text on the English site.
- Longer repeating content (FAQ entries) lives in `src/data/*.ts` keyed by language, not in `ui.ts`.
- The media outlets in the "Mówili o nas" wall live in `src/data/press.ts`, not in `ui.ts` - an
  outlet name is a proper noun and stays identical in both languages. Only the section heading, the
  lead-in and the `press.type.*` labels are translated. Outlet names are run through
  `bindSingleLetterWords` by `Press.astro`, so Polish one-letter words behave there too.
- Every outlet's logo lives in `src/assets/press/`, named after the outlet, and is imported in
  `press.ts` as that entry's `logo`. `logo` is optional: an entry without one falls back to a
  typographic wordmark, so a new outlet can be added before its logo is sourced. Adding a `type`
  that `press.type.*` does not cover breaks the build, which is intended.
- An SVG logo lifted out of an outlet's page usually carries class names but no `fill`, because the
  colours live in that site's stylesheet. Standing alone it then renders as flat black shapes. Put
  the real fills on the elements before committing it, and open the file on its own to check.
- The logos are third-party marks shown in their own colours, so `Press.astro` renders them with
  `<Image layout="none">`: the global `constrained` layout sets `width: 100%` on the image, which
  collapses a logo that is taller than it is wide. Size them with `max-h-*` plus `max-w-full` and
  keep `min-w-0` on the `<li>` - a fixed `max-w-*` in pixels makes a wide logo push its tile past
  its flex basis and the wall drops from four tiles a row to two.
- Press tiles stay white in dark mode, on purpose, and so does the text inside them. It is the one
  place where colour utilities have no `dark:` counterpart: the logos are supplied as dark-ink
  artwork and several of them vanish on a dark tile.
- Numbers shown in the UI are not literals in the markup either. `src/data/stats.ts` owns the
  headline figures. Each one is a pair: the raw value (`satisfiedUsers`, `appRating`) and its
  compact form (`satisfiedUsersDisplay` via `formatCompactCount`, `appRatingDisplay`). It is deliberately
  shaped so the raw counts can later come from an API without touching the component. Change a
  number there, never in `Features.astro`, and add new figures as the same raw/display pair.
- Every new page needs a PL file in `src/pages/` **and** an EN file in `src/pages/en/`.
- Internal links are built as `isEn ? '/en/...' : '/...'` or with `localizePath()`. Do not hardcode
  a single-language path.

- The homepage `Navbar` links are `nav.home`, `nav.tenants`, `nav.landlords`. The horizontal nav
  only appears from `xl`; below that everything moves into the hamburger menu. The Polish labels are
  long, so a fourth link (or a longer label) will collide with the logo and the right-hand controls -
  measure before adding one.
- `Features.astro` ("Jak działa RentFriends?" plus the stat tiles) lives on `/tenants`, not on the
  homepage. Footer's "Funkcje" link points at that page.

### Styling

- Tailwind v4, configured in CSS. Design tokens are the `@theme` block in `src/styles/global.css`:
  `--color-black` (#0F0F0F), `--color-bg` (#F4F2EE), `--color-blue`, `--color-purple`,
  `--color-purple-ink`, `--color-purple-ink-dark`, `--color-pink`, `--color-gray`,
  `--background-image-gradient`, `--font-sans`.
- Use the token classes (`bg-bg`, `text-gray`, `text-purple-ink`,
  `bg-[image:var(--background-image-gradient)]`) instead of raw hex values.
- Dark mode is class-based via `@custom-variant dark (&:is(.dark *))`, toggled on `<html>` and
  persisted in `localStorage.theme`. **Every color utility needs a `dark:` counterpart**, and
  color-changing elements carry `transition-colors`.
- Arbitrary values (`text-[32px]`, `lg:px-[100px]`) are used freely and match the Figma design -
  that is fine, keep the existing rhythm rather than rounding to Tailwind's scale.
- There is no `tailwind.config.js` and none should be added. New tokens go in the `@theme` block.

### Images

- Images used inside components are imported from `src/assets/` and rendered with
  `<Image />` from `astro:assets` so they get optimised and responsive. Global defaults
  (`layout: 'constrained'`, `responsiveStyles: true`) come from `astro.config.mjs`.
- `public/` is only for files that must be reachable by a fixed URL: favicons, `og-image.jpg`,
  social icons, `robots.txt`, `llms.txt`.
- Decorative images get `alt=""` and `aria-hidden="true"`; meaningful ones get an i18n alt string.

### Client-side JavaScript

- Plain `<script>` inside the component that needs it. Bundled and type-checked by Astro.
- `is:inline` only for code that must run before paint or before hydration (theme bootstrap, GTM,
  the `dl.astro` redirect).
- With `prefetch` + view transitions in play, re-initialise on navigation where it matters -
  `Layout.astro` re-runs the theme setup on `astro:after-swap`.
- Cross-component signalling uses a DOM event: `CookieBanner` dispatches `rf:cookie-consent`,
  `Layout` listens for it before loading counter.dev.

### SEO

- `Layout.astro` owns `<title>`, description, canonical, hreflang alternates, OG/Twitter tags and
  the WebSite/Organization JSON-LD. Pass `title`, `description`, `image`, `noindex`, `preloadHero`
  as props - do not re-declare those tags in a page.
- Page-specific structured data (FAQPage, SoftwareApplication) is inlined in the component that owns
  the content, as `<script type="application/ld+json" set:html={JSON.stringify(schema)} />`.
- `noindex` pages must also skip hreflang - `Layout` already handles this, just pass the prop.

### Accessibility

Interactive elements have `aria-label` / `aria-expanded` / `aria-controls`, the FAQ accordion keeps
`aria-expanded` in sync, and `*:focus-visible` gets a pink outline from `global.css`. Keep this up in
new markup.

## Git and deploy

- `dev` is the working branch, `main` is production. Vercel deploys automatically from `main`.
- Commit messages: conventional-commit style, lowercase, English -
  `feat: add cookie consent banner`, `fix: update FAQ questions`, `refactor: hero image handling`.
- Do not commit or push unless asked to. Never commit straight to `main`.

## Do NOT do these without asking

- **Do not touch `src/pages/dl.astro`.** It carries the campaign-tracking logic: UTM passthrough,
  the Apple `pt`/`ct` parameters, the Google Play `referrer`, and the `ulotka` (flyer) special case.
  Breaking it silently breaks attribution for printed campaigns.
- **Do not change the analytics or consent plumbing**: the GTM id `GTM-W39KGBF4`, the counter.dev
  script id, the `rf-cookie-consent` localStorage key, or `CONSENT_VERSION` in `CookieBanner.astro`.
  Bumping the consent version re-prompts every visitor.
- **Do not remove or reorder the Consent Mode v2 block in `Layout.astro`.** It defines every consent
  signal as `denied` and must stay *above* the GTM snippet - GTM only honours a default that is
  already on the `dataLayer` when it loads, so moving or dropping it lets tags fire before the
  visitor has chosen. Its `parsed.version === 1` check must match `CONSENT_VERSION`.
- **`ad_storage`, `ad_user_data` and `ad_personalization` stay `denied` for everyone**, because the
  banner only asks about `necessary` and `analytics`. If ad or remarketing tags are ever added to
  the GTM container, `CookieBanner.astro` needs a third category first - do not simply grant the
  ad signals on "accept all".
- **Do not edit legal copy** - the `privacy.*` and `terms.*` keys in `ui.ts` and the
  privacy-policy / terms-of-service pages - except on an explicit instruction.
- **Do not add or upgrade dependencies**, and do not bump the Astro or Tailwind major version.
  No new UI library, no React/Vue islands, no icon package. Inline SVG is the existing pattern.
- **Do not add a key to only one language**, and do not rename an existing i18n key without updating
  every usage.
- **Do not hardcode user-facing text** in a component, in either language.
- **Do not write comments in code** - no `//`, `/* */`, `<!-- -->` or `{/* */}` anywhere. See
  **Conventions > Comments**; tooling directives like `// @ts-check` are the one exception.
- **Do not change `site`, `redirects` or the sitemap config in `astro.config.mjs`** - canonical URLs,
  hreflang, the sitemap, OG/Twitter image URLs and the JSON-LD `@id`s all derive from `site`, which
  is `https://rentfriends.app` (the production domain). It must stay the production domain even when
  previewing on a `*.vercel.app` deployment - pointing it at a preview URL makes every canonical and
  hreflang on production reference the preview domain.
- **Do not edit `dist/`, `.astro/`, `node_modules/`, `package-lock.json` by hand, or `.idea/`.**
- **Do not add a `tailwind.config.js`**, a linter, a formatter, tests, or CI config.
- **Do not reformat files** you are not otherwise changing (tabs vs spaces, quote style, class order).

## When in doubt

Ask. Especially about: anything touching tracking or consent, anything legal, anything that changes
the build setup or dependencies, and any copy change where the Polish and English wording is not
obviously equivalent.

## Astro reference

Full docs: https://docs.astro.build

- [Routing, dynamic routes, middleware](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Images and assets](https://docs.astro.build/en/guides/images/)
- [Styling and Tailwind](https://docs.astro.build/en/guides/styling/)
- [Internationalization](https://docs.astro.build/en/guides/internationalization/)
