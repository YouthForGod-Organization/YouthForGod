// Legacy alternate homepage experiment retained for reference but not wired into routing.
import { Link } from "react-router-dom";
import promoVideoMp4 from "../../assets/y4g-2027-promo.mp4";
import "./HomePage.scss";

const VIDEO_POSTER = "/living-as-the-light-hero.jpg";

export function HomePage() {
  return (
    <div className="home" id="home">
      <section className="home__hero">
        <div className="home__hero-inner container">
          {/* <div className="home__hero-content">
            <p className="home__badge">
              Youth for God Conference 2024 · Monterey Bay
            </p>
            <h1>Solus Christus</h1>
            <p className="home__lead">
              A three-day gathering equipping students to center their lives on
              the finished work of Christ and boldly share the hope of the gospel.
            </p>
            <p className="home__date">May 29 – 30, 2026 · Sacramento, California</p>
            <div className="home__hero-actions">
              <Link className="btn btn--primary" to="/register">
                Register Now
              </Link>
            </div>
          </div> */}
        </div>
      </section>

      <section className="home__promo" id="video">
        <div className="container">
          <h2 className="home__section-title">2027 Promo Video</h2>
          <video
            className="home__promo-video"
            controls
            playsInline
            preload="metadata"
            poster={VIDEO_POSTER}
            aria-label="Youth for God promo video"
          >
            <source src={promoVideoMp4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="home__about" id="speakers">
        <div className="home__section-header">
          <p className="home__eyebrow">About the Conference</p>
          <h2>Anchored teaching, gospel worship, and discipleship labs.</h2>
        </div>
        <div className="home__about-grid">
          <article>
            <h3>Speakers</h3>
            <p>
              Pastors and youth leaders unpack the five solas through expository
              preaching and Q&A moments designed for students.
            </p>
          </article>
          <article>
            <h3>Schedule</h3>
            <p>
              Sunrise devotionals, breakout labs, late-night worship, and time
              to build friendships that last long after the weekend.
            </p>
          </article>
          <article id="register">
            <h3>Register</h3>
            <p>
              Limited seats remain. Early bird rate closes March 1. Scholarships
              available for group registrations.
            </p>
            <Link className="btn btn--full" to="/register">
              Register Now
            </Link>
            <a className="btn btn--full" href="mailto:contact@youth4god.org">
              Contact the Team
            </a>
          </article>
        </div>
      </section>

      <section className="home__details" id="schedule">
        <div className="home__detail-card">
          <p className="home__detail-label">Dates</p>
          <p className="home__detail-value">May 22-23, 2026</p>
        </div>
        <div className="home__detail-card">
          <p className="home__detail-label">Location</p>
          <p className="home__detail-value">Sacramento, California</p>
        </div>
        <div className="home__detail-card">
          <p className="home__detail-label">Focus</p>
          <p className="home__detail-value">Christ Alone · Faith Alone</p>
        </div>
      </section>
    </div>
  );
}
