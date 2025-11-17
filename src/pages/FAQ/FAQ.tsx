import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./FAQ.scss";

const faqs = [
  {
    question: "Who is Youth for God Conference for?",
    answer:
      "Students (grades 7–12), college leaders, and youth pastors who want to be equipped to live on mission. Parents and volunteer teams are welcome.",
  },
  {
    question: "What should we bring?",
    answer:
      "Bible, journal, refillable water bottle, and a posture to engage. We provide notebooks, pens, and all teaching resources on site.",
  },
  {
    question: "Are meals included?",
    answer:
      "Friday lunch/snacks and Saturday breakfast/lunch are covered. Dinner on Friday is on your own—we’ll provide local restaurant partners with group discounts.",
  },
  {
    question: "Do you offer scholarships?",
    answer:
      "Yes. Partial scholarships are available for student groups and church plants. Email hello@youthforgod.org with a short description of your need.",
  },
  {
    question: "Can we volunteer?",
    answer:
      "Absolutely. Serve teams help with hospitality, prayer, and production. Let us know during registration or reach out to the team to learn more.",
  },
  {
    question: "How do we prepare our group?",
    answer:
      "We’ll send a group leader toolkit two weeks prior that includes devotionals, packing lists, and conversation guides for before and after the conference.",
  },
];

const helpLinks = [
  { label: "Email Support", href: "mailto:hello@youthforgod.org" },
  // { label: "Event Guide", href: "/guide.pdf" },
  // { label: "Volunteer Form", href: "https://forms.gle/example" },
];

export function FAQPage() {
  return (
    <>
      <Header />
      <main className="faq">
        <section className="faq__hero">
          <p className="faq__eyebrow">Ask anything</p>
          <h1>Frequently Asked Questions</h1>
          <p className="faq__lead">
            We want you to arrive confident and prepared. Browse the top
            questions or reach out to our team directly.
          </p>
        </section>

        <section className="faq__list">
          {faqs.map((item) => (
            <article key={item.question} className="faq__item">
              <details>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            </article>
          ))}
        </section>

        <section className="faq__help">
          <h2>Need more help?</h2>
          <p>
            Our team replies within 24 hours. For urgent needs during the event
            weekend, call the onsite hotline listed in your confirmation email.
          </p>
          <div className="faq__help-links">
            {helpLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
