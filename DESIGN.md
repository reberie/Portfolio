# Design System Specification: Technical Luminance

## 1. Overview & Creative North Star
**The Creative North Star: "The Synthetic Architect"**

This design system is built for the high-end software developer who treats code as a medium for digital sculpture. We are moving away from the "standard dashboard" aesthetic and toward a high-contrast, editorial experience that feels like a premium IDE met a luxury fashion magazine.

To achieve this, we leverage **Intentional Asymmetry** and **Tonal Depth**. Instead of centering everything, we use heavy left-aligned typography contrasted with floating, neon-accented elements that break the grid. This system rejects the "boxed-in" look of traditional portfolios, favoring a layout where content feels like it is floating in a deep, infinite void.

---

## 2. Colors: The Neon Void
The palette is built on a foundation of absolute darkness (`#0e0e0e`), punctuated by high-frequency accents that mimic light emissions rather than ink.

### Core Tokens
- **Background (`#0e0e0e`):** The canvas. This is not a "grey"; it is a deep, absorbent charcoal that allows neon accents to vibrate.
- **Primary (`#cf96ff`):** An electric, desaturated purple. Used for technical highlights and high-importance interaction.
- **Secondary (`#00f1fe`):** A piercing cyan. Used for precision elements, data visualizations, and secondary CTAs.
- **Surface Tiers:** Use `surface-container-low` (`#131313`) for large sections and `surface-container-highest` (`#262626`) for nested interactive elements.

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** Boundaries must be defined solely through background color shifts. To separate a hero from a project grid, shift from `surface` to `surface-container-low`. The transition should feel like a change in physical depth, not a line drawn on a page.

### The Glass & Gradient Rule
For high-end appeal, use **Glassmorphism** on floating navigation and project cards.
- **Recipe:** `surface-variant` (`#262626`) at 40% opacity + `backdrop-filter: blur(12px)`.
- **Signature Gradient:** Use a linear gradient from `primary` (`#cf96ff`) to `secondary` (`#00f1fe`) at a 135-degree angle for primary call-to-actions. This creates a "digital silk" effect.

---

## 3. Typography: Technical Precision
We utilize a pairing of **Space Grotesk** for display and **Inter** for utility. This combination balances "Brutalist Tech" with "Optimal Readability."

- **Display (Space Grotesk):** Set with tight letter-spacing (-0.04em). Headlines should feel massive and architectural.
- **Body (Inter):** Set with generous line-height (1.6) to provide breathing room against the high-contrast background.
- **Hierarchy as Identity:** Use `label-md` in all-caps with increased tracking (+0.1em) for metadata (e.g., "TECH STACK") to mimic the look of terminal outputs or blueprints.

---

## 4. Elevation & Depth: Tonal Layering
In this system, depth is not simulated with shadows alone; it is simulated with **light emission**.

- **The Layering Principle:** Place a `surface-container-lowest` (#000000) card on a `surface-container-low` (#131313) section. This "inverted lift" creates a sophisticated, recessed look that feels more modern than traditional drop shadows.
- **Ambient Glows:** For floating elements, use an **Ambient Glow** instead of a shadow. 
    - *Shadow Token:* `0px 8px 32px rgba(207, 150, 255, 0.08)`. This uses the `primary` color at a very low opacity to mimic light reflecting off a dark surface.
- **The "Ghost Border":** If a container requires a boundary, use the `outline-variant` (`#484847`) at 15% opacity. It should be barely perceptible—a "whisper" of a line.

---

## 5. Components

### Buttons: Kinetic Energy
- **Primary:** Gradient fill (`primary` to `primary-dim`). No border. `0.25rem` (sm) corner radius for a sharp, technical feel.
- **Secondary:** Transparent fill with a `secondary` "Ghost Border." On hover, add a subtle outer glow using the `secondary` token.
- **Tertiary:** Text-only in `primary`, but with a `0.125rem` (sm) bottom border that expands on hover.

### Cards: The "Monolith"
Cards must not use dividers. Separate the title, description, and tags using vertical white space (use the `1.5rem` step in your spacing scale). 
- **Header:** Use `headline-sm`.
- **Background:** `surface-container-high`.
- **Accent:** A top-left "Neon Notch"—a 2px thick, 24px wide horizontal line using the `secondary` color to denote activity.

### Interactive Chips
- **Selection Chips:** Use `surface-container-highest` with a `primary` text color. When selected, the chip should gain a subtle `primary` outer glow (`box-shadow`).
- **Input Fields:** Use `surface-container-low` with a bottom-only `outline-variant` border. On focus, the border animates to `secondary` and glows.

### Specialized Component: The "Code Fragment"
For a developer portfolio, treat code snippets as art. Use a `surface-container-lowest` background with a `secondary` glow on the left edge. No scrollbars visible—use custom thin-profile scrolls in `primary`.

---

## 6. Do's and Don'ts

### Do
- **Use High-Contrast Spacing:** Give headlines massive top-margin to create an editorial, "un-crowded" feel.
- **Embrace Asymmetry:** Align text to the left but place supporting imagery or code fragments slightly off-grid to the right.
- **Use Motion:** Animate neons to "flicker" slightly on load or use a slow pulse on primary buttons.

### Don't
- **Don't use 100% white text for long body copy:** Use `on_surface_variant` (`#adaaaa`) to prevent eye strain against the black background.
- **Don't use rounded corners over 0.75rem:** This system is about "Precision." Large rounded corners (`full` or `xl`) feel too "bubbly" and consumer-grade for this aesthetic.
- **Don't use standard grey shadows:** If it’s floating, the shadow must be tinted with `primary` or `secondary` to maintain the "Neon" atmosphere.