import { ReactNode } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./FAQ.scss";

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "Where will the Y4G conference be held?",
    answer: (
      <>
        We're excited to welcome you to Bryte Church, conveniently located at{" "}
        <a href="https://goo.gl/maps/fVaEyTs1riJMEuBk6">
          1000 Sacramento Ave., West Sacramento, CA
        </a>
        . We can't wait to see you there!
      </>
    ),
  },
  {
    question: "What are the dates for Y4G conference?",
    answer:
      "Mark your calendars! The conference kicks off on Friday, May 22 and wraps up on Sunday, May 23. We recommend checking the website regularly for any schedule updates and plan to arrive early so you can check in smoothly and grab a great seat!",
  },
  {
    question: "Who can attend the conference?",
    answer:
      "The conference is open to all youth who has registered and purchased a ticket. We'd love to have you join us!",
  },
  {
    question: "Do I need to register ahead of time?",
    answer: (
      <>
        We highly recommend that all attendees register ahead of time. Early
        registration greatly helps us with preparation and planning, so please
        sign up in advance to secure your spot. However, we will still be able
        to accept <strong>same-day registrations</strong> for those who may have
        missed the opportunity to register online.
      </>
    ),
  },
  {
    question:
      "Will registration prices change as we get closer to the conference?",
    answer: (
      <>
        Yes, prices will increase the closer we get to the event. We encourage
        you to register early to get the best deal. We will offer{" "}
        <strong>early-bird pricing</strong>,{" "}
        <strong>regular registration</strong>,{" "}
        <strong>late registration</strong>, and <strong>walk-up pricing</strong>
        .
      </>
    ),
  },
  {
    question: "Can I get a refund if I cancel my registration?",
    answer:
      "We understand that plans can change! Refunds are available if you cancel up to 30 days before the conference start date. Please reach out to this email to get a refund issued.",
  },
  {
    question: "What should I bring with me?",
    answer:
      "Here's what we recommend: your Bible, a notebook for taking notes, a water bottle to stay hydrated, and most importantly, an open heart ready to receive God's word!",
  },
  {
    question: "Will food be provided?",
    answer:
      "Yes! We'll be providing lunch and dinner throughout the conference. However, if you have specific dietary restrictions or allergies, please plan to bring your own accommodations to ensure your needs are met.",
  },
  {
    question: "Are hotels provided?",
    answer:
      "Lodging is not included in your registration, but we're happy to provide a list of nearby hotel options if you need one. We also encourage you to connect with fellow youth members who may be able to host you, it's a great way to build fellowship!",
  },
  {
    question: "Who do I contact for additional questions?",
    answer:
      "We're here to help! Please reach out via email if you have any questions or need more information. We'll get back to you as soon as possible!",
  },
  {
    question: "When is the deadline for registering for the conference?",
    answer:
      "Registration closes 90 days before the conference starts, so be sure to sign up early to reserve your spot!",
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
