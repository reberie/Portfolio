import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__logo" onClick={close}>
          Buianto Sodnomov
        </Link>
        <div className={`nav__links${open ? " open" : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav__link${isActive ? " nav__link--active" : ""}`
            }
            onClick={close}
          >
            Work
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav__link${isActive ? " nav__link--active" : ""}`
            }
            onClick={close}
          >
            About
          </NavLink>
          <a
            href="mailto:bsodnomovv@gmail.com"
            className="btn btn--secondary"
            style={{ padding: "0.5rem 1.25rem" }}
            onClick={close}
          >
            Get in touch
          </a>
        </div>
        <button
          className={`nav__toggle${open ? " active" : ""}`}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};
