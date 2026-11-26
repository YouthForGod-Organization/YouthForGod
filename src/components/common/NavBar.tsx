// Renders the primary site navigation and a collapsible mobile menu.
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/updatedLogo2.png";
import { showConferencePages } from "../../config/featureFlags";
import "./NavBar.scss";

const navLinks = [
  { label: "Home", to: "/", end: true },
  ...(showConferencePages
    ? [
        { label: "Schedule", to: "/schedule" },
      ]
    : []),
  { label: "Media", to: "/media" },
  ...(showConferencePages ? [{ label: "FAQ", to: "/faq" }] : []),
];

function NavigationLinks({ closeMenu }: { closeMenu: () => void }) {
  return (
    <>
      {navLinks.map((link) => (
        <NavLink
          key={link.label}
          to={link.to}
          className={({ isActive }) => isActive ? "nav__menu-link nav__menu-link--active" : "nav__menu-link"}
          onClick={closeMenu}
          end={link.end}
        >
          {link.label}
        </NavLink>
      ))}
      {showConferencePages && (
        <Link className="nav__cta" to="/register" onClick={closeMenu}>
          Register <span className="nav__cta-arrow" aria-hidden="true">↗</span>
        </Link>
      )}
    </>
  );
}

export function NavBar() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [isOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    function updateLayout() {
      if (desktop.matches) setIsOpen(false);
    }
    desktop.addEventListener("change", updateLayout);
    return () => desktop.removeEventListener("change", updateLayout);
  }, []);

  return (
    <header className="nav">
      <div className="nav__inner">
        <div className="nav__brand">
          <Link to="/" className="nav__logo" onClick={closeMenu}>
            <img src={logo} alt="Youth for God" />
          </Link>
          <button
            type="button"
            className="nav__toggle"
            aria-label="Toggle menu"
            aria-controls="primary-navigation"
            aria-expanded={isOpen}
            onClick={(event) => {
              event.currentTarget.focus();
              setIsOpen(true);
            }}
          >
            <span className="nav__toggle-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
        <nav className="nav__menu" aria-label="Primary navigation">
          <NavigationLinks closeMenu={closeMenu} />
        </nav>
      </div>
      <dialog ref={dialogRef} className="nav__mobile-panel" aria-label="Site navigation" onClose={closeMenu}>
        <div className="nav__mobile-content">
          <div className="nav__mobile-top">
            <button type="button" className="nav__close" aria-label="Close menu" onClick={closeMenu}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="m5 5 14 14M19 5 5 19" />
              </svg>
            </button>
          </div>
          <nav id="primary-navigation" className="nav__mobile-links" aria-label="Primary navigation">
            <NavigationLinks closeMenu={closeMenu} />
          </nav>
        </div>
      </dialog>
    </header>
  );
}
