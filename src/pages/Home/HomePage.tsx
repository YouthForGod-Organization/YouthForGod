import { Link } from "react-router-dom";
import "./HomePage.scss";

const VIDEO_POSTER =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80";
const VIDEO_SRC = "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4";

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
          <h2 className="home__section-title">Promo Video</h2>
          <video className="home__promo-video" controls poster={VIDEO_POSTER}>
            <source src={VIDEO_SRC} type="video/mp4" />
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
            <a className="btn btn--full" href="mailto:hello@youthforgod.org">
              Contact the Team
            </a>
          </article>
        </div>
      </section>

      <section className="home__details" id="schedule">
        <div className="home__detail-card">
          <p className="home__detail-label">Dates</p>
          <p className="home__detail-value">May 29 – 30, 2026</p>
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
