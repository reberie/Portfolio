# Buianto (Ben) Sodnomov — Portfolio (CLAUDE.md)

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
- `src/components/` — Nav, Footer, SmoothScroll, ScrollReveal, Background, CanvasErrorBoundary, Timeline, icons
- `src/three/` — R3F scenes (`SceneBackground.tsx`, the persistent page-wide WebGL background). NEVER import three/R3F from a server component.
- `src/lib/` — shared content/data (`content.ts`: `EXPERIENCE`, `SKILLS`)
- `public/` — static assets, `CNAME` (custom domain), `.nojekyll`, og-image, old-URL redirect stubs

## Conventions
- The Canvas is mounted ONLY via `dynamic(() => import('@/three/SceneBackground'), { ssr: false })`
  inside a client component (`Background.tsx`); three.js touches `window`. It is ONE fixed,
  page-wide canvas behind all content (z-index:0), mounted once in `layout.tsx`.
- All motion respects `prefers-reduced-motion`: `SmoothScroll` and `Background` no-op under it,
  and `globals.css` reveals all `.fade-in`/`.stagger` content immediately.
- The design system is class-based — the ported "Technical Luminance" CSS lives in `globals.css`.
  Reuse the existing classes/tokens; fonts come from `next/font` (Space Grotesk + Inter) via CSS vars.
- Brand colors: `--primary` #cf96ff (purple), `--secondary` #00f1fe (cyan), `--bg` #0e0e0e.
- In R3F, memoize geometry/attributes with `useMemo` and prefer a single draw call (points/instances).
- Static export caveats: use plain `<img>` (next/image needs a server); metadata routes
  (`sitemap.ts`, `robots.ts`) need `export const dynamic = 'force-static'`.

## Definition of done (every change)
1. `npm run typecheck && npm run lint && npm run build` passes
2. Verified visually at desktop AND mobile (see loop below)
3. No new console errors in the browser

## Visual verification loop (Claude Preview MCP)
Screenshots can lie (stale CSS, races) — assert the DOM, not just pixels.
1. Make the change.
2. Warm the route (`curl -s localhost:3000/<path>`) so the dev server compiles; reload the preview.
3. `preview_screenshot` at desktop (~1265) AND mobile (`preview_resize` → 375).
4. `preview_eval` to assert specifics: computed styles match intent, the new CSS rule is
   actually present in `document.styleSheets`, and the console has zero errors.
5. If it "should" be visible but isn't: stop the preview, `rm -rf .next`, restart, re-warm —
   Turbopack can serve stale CSS/JS after large edits. Don't trust a screenshot that contradicts the code.
6. Then run the gate in step 1.
Taste, motion, easing, and "does it feel cinematic" are NOT observable from a screenshot —
surface those to the user instead of guessing.

@AGENTS.md
