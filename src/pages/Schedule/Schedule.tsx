import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Schedule.scss";

const conferenceSchedule = {
  friday: {
    label: "Friday",
    date: "May 22",
    slots: [
      { time: "7:30 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Session 1" },
      { time: "1:00 PM", activity: "Lunch" },
      { time: "3:00 PM", activity: "Session 2" },
      { time: "4:30 PM", activity: "Q&A" },
    ],
  },
  saturday: {
    label: "Saturday",
    date: "May 23",
    slots: [
      { time: "7:30 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Session 1" },
      { time: "1:00 PM", activity: "Lunch" },
      { time: "5:00 PM", activity: "Youth Park/Fellowship" },
    ],
  },
};

export function SchedulePage() {
  return (
    <>
      <Header />
      <main className="schedule">
        <section className="schedule__hero">
          <p className="schedule__eyebrow">May 22 – 23 · Sacramento</p>
          <h1>Schedule</h1>
          <p className="schedule__lead">
            The schedule is crafted so that all participants can have a balanced
            experience of Teaching, Worship, and Fellowship.
          </p>
        </section>

        <section className="schedule__cards">
          {[conferenceSchedule.friday, conferenceSchedule.saturday].map(
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
                      <span className="schedule__slot-activity">
                        {slot.activity}
                      </span>
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
