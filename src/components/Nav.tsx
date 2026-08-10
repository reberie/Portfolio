'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Transparent over the hero; a frosted background fades in once scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = pathname === '/';
  const isAbout = pathname.startsWith('/about');

  const close = () => setOpen(false);

  return (
    <nav className={`nav${scrolled || open ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Link href="/" className="nav__logo" onClick={close}>
          Buianto (Ben) Sodnomov
        </Link>

        <div className={`nav__links${open ? ' open' : ''}`}>
          <Link
            href="/"
            className={`nav__link${isHome ? ' nav__link--active' : ''}`}
            onClick={close}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`nav__link${isAbout ? ' nav__link--active' : ''}`}
            onClick={close}
          >
            About
          </Link>
          <a
            href="mailto:bsodnomovv@gmail.com"
            className="btn btn--secondary"
            style={{ padding: '0.5rem 1.25rem' }}
          >
            Get in touch
          </a>
        </div>

        <button
          className={`nav__toggle${open ? ' active' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
