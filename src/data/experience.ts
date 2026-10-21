import type { Role } from "@/types/content";

/**
 * Dates, titles, and metrics follow Ganesh Chincholkar's résumé.
 * Citi is printed as June 2025 with no end month, so none is shown here.
 * xAI ended September 2026.
 */
export const experience: Role[] = [
  {
    logo: "/logos/xai.svg",
    company: "xAI",
    title: "Fullstack Engineering Specialist",
    start: "January 2026",
    end: "September 2026",
    location: "Remote",
    summary:
      "Coding data for AI model training, from full-stack engineering work and hard programming problems.",
    contributions: [
      "Created high-quality coding data for AI model training, using full-stack engineering work and practical development experience.",
      "Challenged LLMs with complex programming tasks and edge cases to test problem solving, code correctness, and whether an answer met the technical requirements.",
      "Developed and solved programming problems that needed analytical reasoning, robust implementations, and attention to edge cases.",
      "Reviewed technical solutions for gaps in correctness, implementation quality, and reasoning.",
    ],
  },
  {
    logo: "/logos/citi.svg",
    company: "Citi",
    title: "Java Fullstack Developer",
    start: "June 2025",
    location: "Pune, India",
    summary:
      "Enterprise Java batch work, a fault-tolerant notification system, and tests around a legacy codebase.",
    contributions: [
      "Led the migration of enterprise batch workloads from a licensed AIS Modeler tool to Spring Batch, including a modular framework for scheduling, retries, and monitoring, reducing vendor dependency and driving long-term cost savings.",
      "Designed and implemented a fault-tolerant email notification system with retries and batch reprocessing, cutting notification failures by 80% and making workflow-based messages to users more reliable.",
      "Built Excel export with localization, so users in different regions could download data in the form they needed.",
      "Developed and maintained unit tests for a large legacy Java codebase. The tests covered tightly coupled classes without a broad refactor, so features could ship more safely.",
    ],
  },
  {
    logo: "/logos/siemens.svg",
    company: "Siemens Industry Software",
    title: "Software Engineer (Full Stack)",
    start: "July 2021",
    end: "June 2025",
    location: "Pune, India",
    summary:
      "Full-stack work on 3D viewing, PLMX file generation, file services, and delivery.",
    contributions: [
      "Started AI-driven automation for service plan creation, which cut manual effort in that workflow.",
      "Built a React-based 3D file viewer, cutting infrastructure cost by 50% and load times by 40%.",
      "Developed a Spring Boot microservice for PLMX file generation, for scalable offline 3D visualization.",
      "Optimized 3D animation pipelines. Load times fell from minutes to seconds through the REST APIs and the data handling behind them.",
      "Created reusable 3D web components so the same viewing pieces could be used in more than one application.",
      "Engineered a Node.js and Express cache file server for large uploads and downloads, plus metadata management.",
      "Reached 93% unit test coverage with Jest, and cut production issues by 60%.",
      "Dockerized services and added CI/CD pipelines on Linux, cutting deployment time by 70%.",
    ],
  },
  {
    logo: "/logos/inkoop.png",
    company: "Inkoop",
    title: "Fullstack Developer (Intern)",
    start: "January 2021",
    end: "June 2021",
    location: "Bangalore, India",
    summary:
      "Draxlr's Vue interface, query snapshots, payments, and the REST APIs behind them.",
    contributions: [
      "Developed Draxlr's Vue.js interface for responsive data visualization.",
      "Built query snapshots that refresh on a schedule through BullMQ jobs, in a microservices architecture.",
      "Integrated Stripe payments, and raw query support for PostgreSQL and MongoDB.",
      "Designed and maintained backend REST APIs with Node.js and Express.",
    ],
  },
];
