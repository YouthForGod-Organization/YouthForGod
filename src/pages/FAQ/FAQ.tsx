// Organizes attendee logistics, policy answers, and support contact links.
import { ReactNode } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./FAQ.scss";

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "Where will the Y4G conference be held?",
    answer: "Bible Baptist Church, Citrus Heights, CA",
  },
  {
    question: "What are the dates for Y4G conference?",
    answer: "Friday, May 28 and Saturday, May 29, 2027. Registration begins at 5:00 PM on Friday and 7:00 AM on Saturday.",
  },
  {
    question: "What is the conference theme?",
    answer: "Living as the Light. The teaching theme, ‘You – a lit’L Christian?’, asks what it means to be light in the Lord and walk as children of light (Ephesians 5:8).",
  },
  {
    question: "Who will be speaking?",
    answer: "Roman Balatskiy, Daniel Clark, Ivan Dzyuba and Andrey Sentsov, with one additional speaker to be announced. Daniel Clark will teach Session I. The remaining session assignments are to be announced.",
  },
  {
    question: "How do I register, and what does it cost?",
    answer: <>Visit the <a href="/register">registration page</a> for the current 2027 registration form and pricing.</>,
  },
  {
    question: "What are the registration and refund deadlines?",
    answer: "Please check the current registration form for deadlines and refund terms, or email contact@youth4god.org for help.",
  },
  {
    question: "What should I bring with me?",
    answer: "Bring your Bible, a notebook for taking notes, and a water bottle.",
  },
  {
    question: "Will food be provided?",
    answer: "The schedule includes Friday tea from 8:30 to 10:00 PM, Saturday lunch at 12:30 PM and supper at 6:00 PM. Contact the team for meal arrangements and dietary questions.",
  },
  {
    question: "Are hotels provided?",
    answer: "Please contact the team for 2027 lodging information.",
  },
  {
    question: "Who do I contact for additional questions?",
    answer: "Email contact@youth4god.org for conference questions and registration support.",
  },
];

const helpLinks = [
  { label: "Email Support", href: "mailto:contact@youth4god.org" },
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
            Contact our team for conference details, registration questions,
            meal arrangements and lodging information.
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
