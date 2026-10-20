import type { Role } from "@/types/content";

/**
 * Dates and scope come from the portfolio Ganesh previously published.
 * Contributions stay inside that description. No metrics are added.
 */
export const experience: Role[] = [
  {
    company: "Siemens Industry Software",
    title: "Associate Software Engineer",
    start: "July 2021",
    end: "Present",
    summary:
      "Full-stack web applications, with Java and Spring Boot on the server and JavaScript across the product.",
    contributions: [
      "Built web application features with React, Node.js, Express, and JavaScript.",
      "Worked on Java services with Spring Boot.",
      "Used Docker as part of the development setup.",
    ],
  },
  {
    company: "Inkoop",
    title: "Full-stack Developer Intern",
    start: "January 2021",
    end: "June 2021",
    summary:
      "A full-stack application on Node.js, Vue, and MongoDB, including payments.",
    contributions: [
      "Built product features with Node.js, Vue, and MongoDB.",
      "Integrated Stripe for payments.",
      "Used Mongoose and BullMQ on the backend.",
    ],
  },
];
