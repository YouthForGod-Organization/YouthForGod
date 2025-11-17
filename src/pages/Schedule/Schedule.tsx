import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Schedule.scss";

const conferenceSchedule = [
  {
    day: "Friday",
    slots: [
      { time: "8:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Session" },
      { time: "1:00 PM", activity: "Lunch Break" },
      { time: "3:00 PM", activity: "Session" },
    ],
  },
  {
    day: "Saturday",
    slots: [
      { time: "10:00 AM", activity: "Session" },
      { time: "1:00 PM", activity: "Lunch Break" },
    ],
  },
];

export function SchedulePage() {
  return (
    <>
      <Header />
      <main className="schedule">
        <section className="schedule__hero">
          <p className="schedule__eyebrow">May 29 – 30 · Sacramento</p>
          <h1>Schedule</h1>
          <p className="schedule__lead">
            The schedule is crafted so that all participants can have a balanced
            experience of Teaching, Worship, and Fellowship.
          </p>
        </section>

        <section className="schedule__table">
          <div className="schedule__table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Time</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                {conferenceSchedule.map((day) =>
                  day.slots.map((slot) => (
                    <tr key={`${day.day}-${slot.time}`}>
                      <td className="schedule__table-day" data-label="Day">
                        {day.day}
                      </td>
                      <td data-label="Time">{slot.time}</td>
                      <td data-label="Activity">{slot.activity}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
