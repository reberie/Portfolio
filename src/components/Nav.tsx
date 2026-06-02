'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isHome = pathname === '/';
  const isAbout = pathname.startsWith('/about');

  const close = () => setOpen(false);

  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link href="/" className="nav__logo" onClick={close}>
          Buianto Sodnomov
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
