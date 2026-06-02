# Buianto Sodnomov — Portfolio (CLAUDE.md)

A cinematic 3D developer portfolio. Statically exported Next.js, deployed to
GitHub Pages at https://buiantosodnomov.com.

## Stack (immutable)
- Next.js 16 (App Router) + TypeScript (strict) + Tailwind v4
- React 19, React Three Fiber v9 (R3F), @react-three/drei, @react-three/postprocessing
- GSAP + ScrollTrigger, Lenis (smooth scroll)
- Package manager: **npm**
- `output: 'export'` — static HTML, no server runtime at deploy time

## Commands
- dev: `npm run dev`
- build (static export → ./out): `npm run build`
- typecheck: `npm run typecheck`
- lint: `npm run lint`

## Project layout
- `src/app/` — App Router pages (`/`, `/about`, `/projects/puffzero`, `/projects/biohub`),
  `layout.tsx` (fonts + metadata + shell), `globals.css` (design system), `sitemap.ts`, `robots.ts`
- `src/components/` — Nav, Footer, SmoothScroll, ScrollReveal, HeroCanvas, CanvasErrorBoundary, icons
- `src/three/` — R3F scenes (`HeroScene.tsx`). NEVER import three/R3F from a server component.
- `public/` — static assets, `CNAME` (custom domain), `.nojekyll`, og-image, old-URL redirect stubs

## Conventions
- The Canvas is mounted ONLY via `dynamic(() => import('@/three/HeroScene'), { ssr: false })`
  inside a client component (three.js touches `window`).
- All motion respects `prefers-reduced-motion`: `SmoothScroll` and `HeroCanvas` no-op under it,
  and `globals.css` reveals all `.fade-in`/`.stagger` content immediately.
- The design system is class-based — the ported "Technical Luminance" CSS lives in `globals.css`.
  Reuse the existing classes/tokens; fonts come from `next/font` (Space Grotesk + Inter) via CSS vars.
- Brand colors: `--primary` #cf96ff (purple), `--secondary` #00f1fe (cyan), `--bg` #0e0e0e.
- In R3F, memoize geometry/attributes with `useMemo` and prefer a single draw call (points/instances).
- Static export caveats: use plain `<img>` (next/image needs a server); metadata routes
  (`sitemap.ts`, `robots.ts`) need `export const dynamic = 'force-static'`.

## Definition of done (every change)
1. `npm run typecheck && npm run lint && npm run build` passes
2. Verified visually (preview screenshot) at desktop AND mobile
3. No new console errors in the browser

@AGENTS.md
