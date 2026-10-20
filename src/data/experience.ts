import type { Role } from "@/types/content";

/**
 * Taken from Ganesh Chincholkar's résumé (October 2026).
 * Citi's résumé line prints June 2025 and no end month. The next role
 * starts January 2026, so the end month here is December 2025.
 * xAI ended September 2026. It is not a current role.
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
      "Coding data for AI model training, built from full-stack engineering work and hard programming problems.",
    contributions: [
      "Created high-quality coding data to support AI model training, using full-stack software engineering work and practical development experience.",
      "Challenged models with complex programming tasks and edge cases to test problem solving, code correctness, and whether an answer met the technical requirements.",
      "Developed and solved programming problems that needed analytical reasoning, robust implementations, and attention to edge cases.",
      "Reviewed technical solutions for gaps in correctness, implementation quality, and reasoning.",
    ],
  },
  {
    logo: "/logos/citi.svg",
    company: "Citi",
    title: "Java Fullstack Developer",
    start: "June 2025",
    end: "December 2025",
    location: "Pune, India",
    summary:
      "Enterprise Java batch work, a fault-tolerant notification system, and tests around a legacy codebase.",
    contributions: [
      "Led the migration of enterprise batch workloads from a licensed AIS Modeler tool to Spring Batch. That included a modular batch framework and supporting services for scheduling, retries, and monitoring, which reduced vendor dependency.",
      "Designed and implemented a fault-tolerant email notification system with retries and batch reprocessing. The résumé reports an 80% reduction in notification failures, and more reliable workflow-based messages to users.",
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
      "Full-stack work on 3D viewing, PLMX file generation, file services, and delivery. The percentages below are the ones printed on the résumé.",
    contributions: [
      "Started AI-driven automation for service plan creation, which cut manual effort in that workflow.",
      "Built a React-based 3D file viewer. The résumé reports 50% lower infrastructure cost and 40% faster load times.",
      "Developed a Spring Boot microservice for PLMX file generation, for scalable offline 3D visualization.",
      "Optimized 3D animation pipelines. Load times fell from minutes to seconds through the REST APIs and the data handling behind them.",
      "Created reusable 3D web components so the same viewing pieces could be used in more than one application.",
      "Engineered a Node.js and Express cache file server for large uploads and downloads, plus metadata management.",
      "Reached 93% unit test coverage with Jest. The résumé reports a 60% reduction in production issues.",
      "Dockerized services and added CI/CD pipelines on Linux. The résumé reports a 70% reduction in deployment time.",
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
