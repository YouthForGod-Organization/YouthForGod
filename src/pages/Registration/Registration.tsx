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
            <div className="registration__frame-wrapper">
              <iframe
                title="Youth for God Conference Registration"
                src="https://subsplash.com/bbc-ca/lb/ev/+pn3qtnr/register"
                loading="lazy"
                allow="payment"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default RegistrationPage;
