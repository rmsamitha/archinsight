# ArchInsight

A minimal, responsive website sharing architectural knowledge, design ideas, industry trends, and selected projects. Built with React, TypeScript, Vite, and plain CSS. Visuals use CSS and fonts use the system font stack.

## Prerequisites

- Node.js 22.13 or later (Node.js 22 LTS recommended)
- npm, included with Node.js

## Local installation and development

From the project directory:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite, usually http://localhost:5173.

## Validation and production build

```sh
npm run lint
npm run build
```

The production build type-checks the source and writes the static website to `dist`.

To preview the production build locally:

```sh
npm run preview
```

## AWS Amplify Hosting

Connect the repository to AWS Amplify Hosting and use the repository root as the application root. Configure Node.js 22.13 or later in the build environment.

- Dependency installation: `npm ci`
- Build command: `npm run build`
- Build output directory: `dist`

The included `amplify.yml` defines these build settings. No backend or environment variables are required.

## Source

- `src/App.tsx`: the single-page website, including the current-year footer.
- `src/style.css`: responsive styling and keyboard focus styles.
- `src/main.tsx`: React entry point.

This initial version has informational Articles, Projects, and About the Architect sections, with no routing, authentication, or API calls.
