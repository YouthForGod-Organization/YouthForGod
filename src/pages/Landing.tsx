import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import hero from "../assets/backgroundImage2.png";
import promoVideo from "../assets/Conferencepromo2.webm";
import updatedLogo2 from "../assets/updatedLogo2.png";
import "./Landing.scss";

export function Landing() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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
            backgroundImage: `url(${hero})`,
          }}
        >
          <div className="yfg-container yfg-hero__inner">
            <div className="yfg-hero__copy">
              <h1 className="yfg-hero__title">Solus Christus</h1>
              <p className="yfg-hero__season">In Christ Alone</p>
            </div>
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
              <div
                className={`yfg-video-card__overlay ${
                  isVideoPlaying ? "yfg-video-card__overlay--hidden" : ""
                }`}
              >
                <img
                  className="yfg-video-card__overlay-logo"
                  src={updatedLogo2}
                  alt="Youth for God"
                />
                <p className="yfg-video-card__overlay-text">SOLUS CHRISTUS</p>
              </div>
              <video
                className="yfg-video-card__media"
                controls
                //poster={hero}
                aria-label="Youth for God promo video"
                onPlay={() => setIsVideoPlaying(true)}
              >
                <source src={promoVideo} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        <section id="info" className="yfg-section">
          <div className="yfg-container">
            <h2 className="yfg-h2">Mission Statement</h2>
            <p className="yfg-lead">
              Youth for God Conference exists to equip and exhort the next
              generation to live as ambassadors of Jesus Christ, so that God may
              ultimately be glorified.
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
