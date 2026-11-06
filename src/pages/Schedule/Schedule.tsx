// Displays the current two-day conference schedule as grouped session cards.
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { conference, conferenceSchedule } from "../../data/conference";
import "./Schedule.scss";

export function SchedulePage() {
  return (
    <>
      <Header />
      <main className="schedule">
        <section className="schedule__hero">
          <p className="schedule__eyebrow">{conference.dates} · Citrus Heights</p>
          <h1>Schedule</h1>
          <p className="schedule__lead">
            The schedule is crafted so that all participants can have a balanced
            experience of Teaching, Worship, and Fellowship.
          </p>
        </section>

        <section className="schedule__cards">
          {conferenceSchedule.map(
            (day) => (
              <article key={day.label} className="schedule__card">
                <header className="schedule__card-header">
                  <p className="schedule__card-eyebrow">{day.date}</p>
                  <h2>{day.label}</h2>
                </header>
                <ul className="schedule__slots">
                  {day.slots.map((slot) => (
                    <li
                      key={`${day.label}-${slot.time}`}
                      className="schedule__slot"
                    >
                      <span className="schedule__slot-time">{slot.time}</span>
                      <div className="schedule__slot-content">
                        <p className="schedule__slot-activity">{slot.activity}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            )
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
