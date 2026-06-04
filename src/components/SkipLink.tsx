'use client';

/**
 * Keyboard "skip to content" link. Explicitly moves focus to <main> on
 * activation (Lenis intercepts plain #hash links, so the default
 * fragment-focus behavior can't be relied on).
 */
export default function SkipLink() {
  return (
    <a
      className="skip-link"
      href="#main-content"
      onClick={(e) => {
        const main = document.getElementById('main-content');
        if (!main) return;
        e.preventDefault();
        main.focus();
        main.scrollIntoView();
      }}
    >
      Skip to content
    </a>
  );
}
