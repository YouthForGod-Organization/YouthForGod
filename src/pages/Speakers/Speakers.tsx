import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Speakers.scss";

const speakers = [
  {
    name: "Dr. Naomi Sanchez",
    title: "Founding Pastor",
    organization: "Revival House",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Micah Landon",
    title: "NextGen Pastor",
    organization: "Grace City Church",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Evangeline Porter",
    title: "Founder",
    organization: "The Flourish Collective",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Pastor Harold Kim",
    title: "Teaching Pastor",
    organization: "Imago Dei Church",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kara Reed",
    title: "Leadership Coach",
    organization: "Elevate Ministries",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dr. Theo Williams",
    title: "Professor of Theology",
    organization: "Veritas Seminary",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  },
];

export function SpeakersPage() {
  return (
    <>
      <Header />
      <main className="speakers">
        <section className="speakers__hero">
          <p className="speakers__eyebrow">Meet the voices</p>
          <h1>Speakers & Guides</h1>
          <p className="speakers__lead">
            Pastors, practitioners, and creatives committed to equipping the
            next generation with gospel clarity and Spirit-led boldness.
          </p>
        </section>

        <section className="speakers__grid">
          {speakers.map((speaker) => (
            <article key={speaker.name} className="speakers__card">
              <div className="speakers__image-wrap">
                <img src={speaker.image} alt={speaker.name} />
              </div>
              <div className="speakers__card-body">
                <h3>{speaker.name}</h3>
                <p className="speakers__title">{speaker.title}</p>
                <p className="speakers__org">{speaker.organization}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
