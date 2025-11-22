import { Link } from "react-router-dom";
import logo from "../../assets/updatedLogo2.png";
import "./Footer.scss";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Speakers", to: "/speakers" },
  { label: "Schedule", to: "/schedule" },
  { label: "Register", to: "/register" },
];

const contactDetails = [
  {
    label: "Email",
    value: "contact@youth4god.org",
    href: "mailto:contact@youth4god.org",
  },
  { label: "Location", value: "Sacramento, CA" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" aria-label="Youth for God home">
            <img className="footer__logo" src={logo} alt="Youth for God" />
          </Link>
          <p>
            Youth for God Conference exists to elevate Christ alone and equip
            the next generation of disciple-makers through gospel-saturated
            teaching, worship, and community.
          </p>
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
          © 2025 Youth for God Conference. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
