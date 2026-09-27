# Hema Sankar Reddy — Portfolio

A dark, technical portfolio for an AI & Data Science student, built with React, TypeScript, Vite, Tailwind CSS and Framer Motion.

## Project structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── data/
    │   └── projects.ts        # all 5 projects: content, tech, status
    └── components/
        ├── Navbar.tsx
        ├── Hero.tsx            # canvas neural-network background
        ├── About.tsx
        ├── AIToolkit.tsx       # AI workflow pipeline
        ├── Projects.tsx        # interactive project cards
        ├── ProjectDetail.tsx   # expandable project modal
        ├── TechStack.tsx
        ├── Journey.tsx         # animated timeline
        ├── GitHubSection.tsx
        ├── Contact.tsx
        ├── Footer.tsx
        ├── ScrollProgress.tsx
        └── CursorGlow.tsx
```

## Install dependencies

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This runs a TypeScript check and outputs a static build to `dist/`.

```bash
npm run preview
```

Serves the production build locally so you can sanity-check it before deploying.

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
vercel
```
Follow the prompts; Vercel auto-detects Vite. Accept the defaults (`npm run build`, output directory `dist`).

**Option B — Vercel dashboard**
1. Push this folder to a GitHub repository.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

## Before you publish — fill these in

- `src/data/projects.ts` — replace the `github` placeholder links with your real repo URLs, and add a `demo` URL for any project with a live deployment.
- `src/components/Contact.tsx` — replace the placeholder email with your real one, and the GitHub/LinkedIn links with your real profile URLs.
- `src/components/Navbar.tsx` and `Hero.tsx` — the GitHub link there too.

## Notes on scope

- No skill percentages — the tech stack uses honest, non-numeric labels (Learning / Working knowledge / Building with).
- No fabricated GitHub stats — the GitHub section links out instead of showing invented numbers.
- `prefers-reduced-motion` is respected globally (see `src/index.css` and the canvas/cursor effects).
- Project detail opens as an in-page modal (per the brief's "expandable panel" option) rather than separate routes, to keep the site a single fast page — this is easy to convert into routed pages later with React Router if you want shareable project URLs.
