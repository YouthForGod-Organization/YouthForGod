import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";
import "./Footer.scss";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Speakers", href: "#speakers" },
  { label: "Schedule", href: "#schedule" },
  { label: "Register", href: "#register" },
];

const contactDetails = [
  { label: "Email", value: "hello@youthforgod.org", href: "mailto:hello@youthforgod.org" },
  { label: "Phone", value: "(916) 555-2041", href: "tel:+19165552041" },
  { label: "Location", value: "Sacramento, CA" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Spotify", href: "https://spotify.com" },
];

export function Footer() {
  const year = new Date().getFullYear();

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
          <div className="footer__social">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
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
                <a href={link.href}>{link.label}</a>
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
        <p>
          © <span className="footer__year">{year}</span> Youth for God Conference. All rights reserved.
        </p>
        <div className="footer__legal">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
