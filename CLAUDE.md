# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal portfolio website for Buianto Sodnomov — a hand-written **static site** with no build step, no framework, and no dependencies. Plain HTML, one CSS file, and one JS file. Deployed to GitHub Pages at the custom domain in `CNAME` (`buiantosodnomov.com`).

## Commands

There is no build, lint, test, or package manager. Editing a file *is* the deploy artifact.

- **Preview locally:** `python3 -m http.server 8000` then open `http://localhost:8000` (do not open files via `file://` — relative paths and the canonical-domain links break).
- **Deploy:** push to `main`. GitHub Pages serves the repository root directly; there is no CI pipeline or build output.

## Architecture & conventions

**Page set:** `index.html` (Work/home), `about.html`, and one case-study page per project under `projects/`. Each page is a complete, standalone document — the nav and footer markup are **copied into every page**, not templated. Editing the nav or footer means editing every HTML file.

**Path depth matters.** Root pages (`index.html`, `about.html`) link with bare relative paths (`css/style.css`, `assets/...`). Pages in `projects/` must prefix with `../` (`../css/style.css`, `../index.html`). When adding a project page, copy an existing one in `projects/` to inherit the correct `../` paths.

**Styling — single design system in `css/style.css`** (~1400 lines, organized by banner comments: Design System → Case Study → About → Animations → Responsive → Placeholder states). All colors, spacing, typography, radii, glows, and transitions are CSS custom properties defined in `:root` (the "Neon Void" dark theme). **Use the existing tokens** (`var(--space-lg)`, `var(--primary)`, etc.) rather than hardcoding values. Responsive overrides redefine a few spacing tokens at breakpoints. Class names follow **BEM** (`block__element--modifier`, e.g. `project-card__title`, `nav__link--active`).

**Behavior — `js/main.js`** is a single `DOMContentLoaded` handler, no libraries. It wires up: the mobile nav toggle (`.nav__toggle` ↔ `.nav__links.open`), scroll-reveal animations via `IntersectionObserver` (any element with `.fade-in` or `.stagger` gets `.visible` when scrolled into view), the active-nav-link highlight, full-card clicks (`.project-card[data-href]` navigates to its `data-href`), and smooth scroll for `#` anchors. To make new content animate in, add `fade-in`/`stagger` classes — no JS change needed.

**Case-study pages** follow a fixed editorial template: `.case-hero` (label, title, meta grid, summary) followed by `.case-section` blocks in the order Problem → My role → Key technical decisions → Challenges → What I learned → CTA. Match this structure for new projects.

## When adding or renaming a page

Three places must stay in sync, or SEO/links silently break:
1. **`sitemap.xml`** — add a `<url>` entry with `loc`/`lastmod`/`changefreq`/`priority`.
2. **Per-page SEO head** — every page sets `<title>`, `meta description`, `link canonical`, full Open Graph + Twitter card tags, and `index.html` carries Person JSON-LD. Copy and update these for new pages; keep canonical/OG URLs on the `buiantosodnomov.com` domain.
3. **Project grid** in `index.html` and any inter-page links.

## Known quirks

- **Fonts:** the design system references `'Space Grotesk'` and `'Inter'`, but no font `<link>`/`@import` is present, so the site currently renders with the `sans-serif` fallback. Add the Google Fonts (or self-hosted) links to every page's `<head>` if you intend those typefaces to load.
- `index.html`'s PuffZero card image uses `../assets/...` even though the file is at the repository root, so that thumbnail path resolves incorrectly when served from `/`. Use a root-relative/bare path there if touching it.
