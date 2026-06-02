'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Replicates the legacy IntersectionObserver reveal: adds `.visible` to any
 * `.fade-in` / `.stagger` element as it scrolls into view. Re-scans on every
 * route change. Honors prefers-reduced-motion by revealing everything at once.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.fade-in, .stagger');
    if (els.length === 0) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
