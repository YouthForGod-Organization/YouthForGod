// Optimized copies of the supplied 2026 conference photos.
import choir from "../assets/conference-photos/choir.webp";
import conductor from "../assets/conference-photos/conductor.webp";
import attendees from "../assets/conference-photos/attendees.webp";
import musician from "../assets/conference-photos/musician.webp";
import teaching from "../assets/conference-photos/teaching.webp";
import message from "../assets/conference-photos/message.webp";

export const conferencePhotos: { src: string; alt: string; position?: string }[] = [
  { src: choir, alt: "Choir and orchestra worship together at the 2026 Youth for God conference" },
  { src: conductor, alt: "A conductor leads the conference orchestra" },
  { src: attendees, alt: "Conference attendees listen and take notes during a session", position: "50% 25%" },
  { src: musician, alt: "A musician holds his instrument with the conference choir behind him" },
  { src: teaching, alt: "A speaker teaches from the pulpit during the 2026 conference" },
  { src: message, alt: "A speaker shares a message with the conference congregation" },
];
