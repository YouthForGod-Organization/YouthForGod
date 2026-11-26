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

export function NavBar() {
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    function handlePointer(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setIsOpen(false);
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointer);
      document.removeEventListener("keydown", handleKey);
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
    <header className="nav" ref={headerRef}>
      <div className="nav__inner">
        <div className="nav__brand">
          <Link to="/" className="nav__logo" onClick={closeMenu}>
            <img src={logo} alt="Youth for God" />
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="nav__toggle"
            aria-label="Toggle menu"
            aria-controls="primary-navigation"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className="nav__toggle-label">{isOpen ? "Close" : "Menu"}</span>
            <span className="nav__toggle-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>

        <nav id="primary-navigation" aria-label="Primary navigation" className={`nav__menu ${isOpen ? "nav__menu--open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "nav__menu-link nav__menu-link--active"
                  : "nav__menu-link"
              }
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
        </nav>
      </div>
    </header>
  );
}
