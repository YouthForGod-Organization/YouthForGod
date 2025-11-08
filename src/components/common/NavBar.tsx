import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo2.png";
import "./NavBar.scss";

const navLinks = [
  { label: "Home", to: "/", end: true },
  { label: "Speakers", to: "/speakers" },
  { label: "Schedule", to: "/schedule" },
  { label: "FAQ", to: "/faq" },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="nav">
      <div className="nav__inner">
        <div className="nav__brand">
          <Link to="/" className="nav__logo" onClick={closeMenu}>
            <img src={logo} alt="Youth for God" />
          </Link>
          <button
            className="nav__toggle"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className={`nav__menu ${isOpen ? "nav__menu--open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "nav__menu-link nav__menu-link--active" : "nav__menu-link"
              }
              onClick={closeMenu}
              end={link.end}
            >
              {link.label}
            </NavLink>
          ))}
          <a className="nav__cta" href="mailto:hello@youthforgod.org" onClick={closeMenu}>
            Register
          </a>
        </nav>
      </div>
    </header>
  );
}
