// Presents the conference hero, promo media, and core event message on the home route.
import { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PhotoGallery } from "../components/PhotoGallery";
import promoVideoMp4 from "../assets/y4g-2027-promo.mp4";
import { conference } from "../data/conference";
import "./Landing.scss";

export function Landing() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [playbackError, setPlaybackError] = useState(false);

  async function playVideo() {
    const video = videoRef.current;
    if (!video) return;
    setPlaybackError(false);
    try {
      await video.play();
      video.focus();
    } catch {
      setPlaybackError(true);
    }
  }
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
              alt="Youth for God Conference — Ephesians 5:8. May 28–29, 2027."
              width={2400}
              height={1349}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </section>

        <section
          id="promo"
          className="yfg-video-section"
          aria-label="2027 conference promo"
        >
          <div className="yfg-container">
            <div className="yfg-video-card">
              {!isVideoPlaying && (
                <button
                  className="yfg-video-card__play"
                  type="button"
                  aria-label="Play conference video"
                  onClick={playVideo}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                  </svg>
                </button>
              )}
              <video
                ref={videoRef}
                tabIndex={0}
                className="yfg-video-card__media"
                controls
                playsInline
                preload="metadata"
                poster={blackPoster}
                aria-label="Youth for God promo video"
                onPlay={() => {
                  setIsVideoPlaying(true);
                  setPlaybackError(false);
                }}
              >
                <source src={promoVideoMp4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {playbackError && (
              <p role="alert">Unable to start the video. Please try the video controls.</p>
            )}
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
        <PhotoGallery />
      </main>

      <Footer />
    </>
  );
}

export default Landing;
