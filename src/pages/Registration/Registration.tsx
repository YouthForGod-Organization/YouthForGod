// Summarizes registration details and embeds the hosted event checkout flow.
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Registration.scss";

const eventHighlights = [
  { label: "Dates", value: "May 22 – 23, 2026" },
  { label: "Location", value: "Sacramento, California" },
];

const supportItems = [
  {
    title: "Group Registration",
    description:
      "Register your entire youth group or ministry team in one session.",
  },
  {
    title: "Payment Options",
    description:
      "Secure checkout managed by Subsplash. Single and group payments accepted.",
  },
  {
    title: "Need Help?",
    description: "Email contact@youth4god.org for support.",
  },
];

export function RegistrationPage() {
  return (
    <>
      <Header />
      <main className="registration">
        <section className="registration__hero">
          <p className="registration__eyebrow">Youth for God Conference 2026</p>
          <h1>Secure Your Spot</h1>
          <div className="registration__highlights">
            {eventHighlights.map((item) => (
              <div key={item.label} className="registration__highlight">
                <span className="registration__highlight-label">
                  {item.label}
                </span>
                <span className="registration__highlight-value">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="registration__form">
          <div className="container">
            <div className="registration__pricing">
              <p className="registration__pricing-title">Registration Cost</p>
              <div className="registration__pricing-items">
                <p className="registration__pricing-item">
                  <span className="registration__pricing-dot" aria-hidden="true" />
                  <span className="registration__pricing-label">
                    Early Bird (until January 1)
                  </span>
                  <strong>$40</strong>
                </p>
                <p className="registration__pricing-item">
                  <span className="registration__pricing-dot" aria-hidden="true" />
                  <span className="registration__pricing-label">
                    Regular (until March 31)
                  </span>
                  <strong>$60</strong>
                </p>
              </div>
            </div>
            <div className="registration__frame-wrapper">
              <iframe
                title="Youth for God Conference Registration"
                src="https://subsplash.com/bbc-ca/lb/ev/+pn3qtnr/register"
                loading="lazy"
                allow="payment"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="registration__fallback">
              <p className="registration__fallback-text">
                Having technical issues with registration?
              </p>
              <a
                className="registration__fallback-button"
                href="https://subsplash.com/bbc-ca/lb/ev/+pn3qtnr/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to register in a new tab
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default RegistrationPage;
