import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import hero from "../assets/backgroundImage2.png";
import promoVideoWebm from "../assets/Conferencepromo2.webm";
import promoVideoMp4 from "../assets/Conferencepromo2.mp4";
import updatedLogo2 from "../assets/updatedLogo2.png";
import "./Landing.scss";

export function Landing() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  // Simple black poster to avoid showing a white flash before playback
  const blackPoster =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='9' style='background:black'/%3E";

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
                poster={blackPoster}
                aria-label="Youth for God promo video"
                onPlay={() => setIsVideoPlaying(true)}
              >
                <source src={promoVideoMp4} type="video/mp4" />
                <source src={promoVideoWebm} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        <section id="info" className="yfg-section">
          <div className="yfg-container yfg-section__content">
            <h2 className="yfg-h2">Youth For God Conference 2026</h2>
            <p className="yfg-lead">
              There is only one way to the Father. There is only one door and
              one narrow path. There is only one King and one Redeemer. Only One
              can make sinners righteous before a holy God, and only One is
              worthy to be proclaimed, followed, and glorified. This is the
              message at the heart of <em>Solus Christus</em>: Christ alone as
              the hope, salvation, and joy of every believer.
            </p>
            <figure className="yfg-scripture">
              <blockquote>
                “Jesus said to him, “I am the way, and the truth, and the life;
                no one comes to the Father but through Me.”
              </blockquote>
              <figcaption>John 14:6</figcaption>
            </figure>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Landing;
