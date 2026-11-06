// Presents the conference hero, promo media, and core event message on the home route.
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import promoVideoWebm from "../assets/Conferencepromo2.webm";
import promoVideoMp4 from "../assets/Conferencepromo2.mp4";
import updatedLogo2 from "../assets/updatedLogo2.png";
import { conference } from "../data/conference";
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
          aria-label="Living as the Light banner"
        >
          <picture className="yfg-hero__media">
            <source
              media="(max-width: 767px)"
              srcSet="/living-as-the-light-hero-mobile.jpg"
              width={1080}
              height={1920}
            />
            <img
              className="yfg-hero__image"
              src="/living-as-the-light-hero.jpg"
              alt="Living as the Light — Ephesians 5:8. Youth for God, May 28–29, 2027."
              width={2400}
              height={1350}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </section>

        <section
          id="promo"
          className="yfg-video-section"
          aria-label="2026 conference recap"
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
                <p className="yfg-video-card__overlay-text">2026 · SOLUS CHRISTUS</p>
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
            <h2 className="yfg-h2">Youth For God Conference {conference.year}</h2>
            <div className="yfg-lead">
              <p><strong>Living as the Light</strong> · {conference.dates}</p>
              <p>{conference.location}</p>
            </div>
            <figure className="yfg-scripture">
              <blockquote>“You are light in the Lord.” Walk as children of light.</blockquote>
              <figcaption>{conference.reference}</figcaption>
            </figure>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Landing;
