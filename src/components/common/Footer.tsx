// Renders shared event branding, route shortcuts, and support contact details.
import { Link } from "react-router-dom";
import logo from "../../assets/updatedLogo2.png";
import { showConferencePages } from "../../config/featureFlags";
import "./Footer.scss";

const quickLinks = [
  { label: "Home", to: "/" },
  ...(showConferencePages
    ? [
        { label: "Speakers", to: "/speakers" },
        { label: "Schedule", to: "/schedule" },
      ]
    : []),
  { label: "Media", to: "/media" },
  ...(showConferencePages ? [{ label: "Register", to: "/register" }] : []),
];

const contactDetails = [
  {
    label: "Email",
    value: "contact@youth4god.org",
    href: "mailto:contact@youth4god.org",
  },
  { label: "Location", value: "Sacramento, CA" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/youth4godcon/",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" aria-label="Youth for God home">
            <img className="footer__logo" src={logo} alt="Youth for God" />
          </Link>
          <p>
            Youth for God conference exists to elevate Christ and equip the next
            generation through gospel centered preaching, worship and community.
          </p>
          <div className="footer__social" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Contact</h4>
          <ul>
            {contactDetails.map((item) => (
              <li key={item.label}>
                <span>{item.label}:</span>{" "}
                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  <span>{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
          © {currentYear} Youth for God Conference. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
