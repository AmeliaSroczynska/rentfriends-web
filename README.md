# RentFriends Web

The official landing page for the RentFriends mobile application. This project is built using Astro, Tailwind CSS, and TypeScript. It features a fully responsive design, internationalization (Polish and English), and robust support for both light and dark modes.

## Tech Stack

* **Framework:** [Astro](https://astro.build/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)


## Project Structure

The repository follows standard Astro architecture:

```text
rentfriends-web/
├── public/                 # Static assets (favicons, SVGs, robots.txt, Open Graph images)
├── src/
│   ├── assets/             # Optimized images imported into components (PNGs)
│   ├── components/         # Reusable Astro components (Hero, Features, Navbar, FAQ, etc.)
│   ├── i18n/               # Translation dictionaries and utility functions (ui.ts, utils.ts)
│   ├── layouts/            # Global page wrappers (Layout.astro)
│   ├── pages/              # File-based routing
│   │   ├── en/             # English localized pages
│   │   ├── 404.astro       # Custom error page
│   │   ├── index.astro     # Polish (default) homepage
│   │   ├── privacy-policy.astro
│   │   └── terms-of-service.astro
│   └── styles/             # Global CSS files (global.css)
├── astro.config.mjs        # Astro configuration
├── package.json            # Project dependencies and scripts
├── tailwind.config.mjs     # Tailwind CSS configuration (inferred)
└── tsconfig.json           # TypeScript configuration
```

## Getting Started

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) installed.

### Installation

1. Clone the repository and navigate into the project directory.
2. Install the dependencies:

```bash
npm install
```

### Development Server

To start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```
The application will be available at `http://localhost:4321/`.

### Build for Production

To generate a static production build:

```bash
npm run build
```
The compiled files will be output to the `dist/` directory, ready to be deployed to your hosting provider.

To preview the production build locally:

```bash
npm run preview
```

## Localization (i18n)

Translations are managed in `src/i18n/ui.ts`.
* The default language is Polish (`/`).
* The English language routes are placed in the `src/pages/en/` directory.

To add new strings, update the `ui` object in `ui.ts` and fetch them using the `useTranslations` utility in your `.astro` components.