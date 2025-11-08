import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import hero from "../assets/backgroundV1.png";
import promoVideo from "../assets/yfg_promo_placeholder.mp4";
import "./Landing.scss";

export function Landing() {
  return (
    <>
      <Header />

      <main>
        <section
          id="home"
          className="yfg-hero"
          role="region"
          aria-label="Solus Christus banner"
          style={{
            backgroundImage: `
              url(${hero})`,
          }}
        >
          <div className="yfg-container yfg-hero__inner">
            <Link className="yfg-btn yfg-btn--primary" to="/register">
              Register Now
            </Link>
          </div>
        </section>

        <section
          id="promo"
          className="yfg-video-section"
          aria-label="Promo video"
        >
          <div className="yfg-container">
            <div className="yfg-video-card">
              <video
                className="yfg-video-card__media"
                controls
                poster={hero}
                aria-label="Youth for God promo video"
              >
                <source src={promoVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        <section id="info" className="yfg-section">
          <div className="yfg-container">
            <h2 className="yfg-h2">Mission Statement</h2>
            <p className="yfg-lead">
              Youth for God Conference exists to call students, leaders, and
              families to the glory of Christ alone—lifting high the gospel,
              equipping the church, and inviting the next generation to live as
              ambassadors of reconciliation.
            </p>
            <figure className="yfg-scripture">
              <blockquote>
                “God made him who had no sin to be sin for us, so that in him we
                might become the righteousness of God.”
              </blockquote>
              <figcaption>2 Corinthians 5:21</figcaption>
            </figure>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Landing;
