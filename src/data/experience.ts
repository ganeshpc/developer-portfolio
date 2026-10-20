import type { Role } from "@/types/content";

/**
 * Taken from Ganesh Chincholkar's résumé (October 2026).
 * Citi's résumé line prints June 2025 and no end month. The next role
 * starts January 2026, so the end month here is December 2025.
 * xAI ended September 2026. It is not a current role.
 */
export const experience: Role[] = [
  {
    company: "xAI",
    title: "Fullstack Engineering Specialist",
    start: "January 2026",
    end: "September 2026",
    location: "Remote",
    summary:
      "Full-stack engineering work used as coding data for AI model training.",
    contributions: [
      "Created coding tasks and edge cases used to test problem solving, correctness, and whether an answer met the technical requirements.",
      "Solved programming problems that needed analytical reasoning and attention to edge cases.",
      "Reviewed technical solutions for gaps in correctness, implementation quality, and reasoning.",
    ],
  },
  {
    company: "Citi",
    title: "Java Fullstack Developer",
    start: "June 2025",
    end: "December 2025",
    location: "Pune, India",
    summary:
      "Java services for batch processing, notifications, and a legacy codebase.",
    contributions: [
      "Led migration of enterprise batch workloads from a licensed AIS Modeler tool to Spring Batch, including scheduling, retries, and monitoring.",
      "Designed a fault-tolerant email notification system with retries and batch reprocessing. The résumé reports an 80% reduction in notification failures.",
      "Built Excel export with localization so users could download region-specific data.",
      "Wrote unit tests around a large legacy Java codebase without a broad refactor.",
    ],
  },
  {
    company: "Siemens Industry Software",
    title: "Software Engineer (Full Stack)",
    start: "July 2021",
    end: "June 2025",
    location: "Pune, India",
    summary:
      "Full-stack product work on 3D viewing, file services, and delivery. Figures below are the ones printed on the résumé.",
    contributions: [
      "Started AI-driven automation for service plan creation.",
      "Built a React 3D file viewer. The résumé reports 50% lower infrastructure cost and 40% faster loads.",
      "Developed a Spring Boot microservice for PLMX file generation, used for offline 3D visualization.",
      "Shortened 3D animation load times from minutes to seconds through the REST APIs and data handling.",
      "Built reusable 3D web components used across applications.",
      "Engineered a Node.js and Express cache file server for large uploads, downloads, and metadata.",
      "Raised unit test coverage with Jest to 93%.",
      "Dockerized services and added CI/CD on Linux. The résumé reports a 70% reduction in deployment time.",
    ],
  },
  {
    company: "Inkoop",
    title: "Fullstack Developer (Intern)",
    start: "January 2021",
    end: "June 2021",
    location: "Bangalore, India",
    summary:
      "A Vue and Node product with payments, query snapshots, and REST APIs.",
    contributions: [
      "Developed Draxler's Vue.js interface for data visualization.",
      "Built query snapshots that refresh through BullMQ jobs in a microservices setup.",
      "Integrated Stripe, and query support for PostgreSQL and MongoDB.",
      "Designed backend REST APIs with Node.js and Express.",
    ],
  },
];
