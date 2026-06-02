# Portfolio — buiantosodnomov.com

Cinematic 3D developer portfolio. A statically exported Next.js site with a
WebGL hero (React Three Fiber), deployed to GitHub Pages on a custom domain.

## Stack

- **Next.js 16** (App Router) · **TypeScript** (strict) · **Tailwind v4**
- **React Three Fiber v9** + `@react-three/drei` + `@react-three/postprocessing`
- **GSAP** + **Lenis** (smooth scroll)
- Class-based "Technical Luminance" design system (`src/app/globals.css`)
- Static HTML export (`output: 'export'` → `./out`)

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Quality gates

```bash
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run build      # production build → static export in ./out
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
static export and publishes it to GitHub Pages. The custom domain is preserved
via `public/CNAME`; `public/.nojekyll` lets Pages serve the `_next/` assets.

> One-time setup: in the repo's **Settings → Pages**, set the build source to
> **GitHub Actions** (it was previously "Deploy from a branch").

## Structure

```
src/
  app/                 # routes, layout, globals.css, sitemap.ts, robots.ts
  components/          # Nav, Footer, SmoothScroll, ScrollReveal, HeroCanvas, icons
  three/HeroScene.tsx # the R3F hero (particles + wireframe core + bloom)
public/               # static assets, CNAME, .nojekyll, redirect stubs
```
