import { publicPath } from "@/lib/site";

/** First month of professional work. Experience figures count completed years from here. */
export const careerStart = { year: 2021, month: 1 } as const;

export const profile = {
  name: "Ganesh Chincholkar",
  givenName: "Ganesh",
  role: "Software Engineer",
  location: "Pune, India",
  eyebrow: "Software Engineer",
  headline: "Building scalable systems and useful products.",
  email: "gnesh.pc@gmail.com",
  github: "https://github.com/ganeshpc",
  linkedin: "https://www.linkedin.com/in/ganeshpc8/",
  x: "https://x.com/ganesh_p_c",
  resumeUrl: publicPath("/resume.pdf"),
  availabilityNote: "Open to interesting engineering opportunities.",
} as const;

export const education = {
  school: "Pune University",
  credential: "Computer Engineering",
  period: "August 2017 – June 2021",
} as const;

export const capabilities = [
  {
    title: "Backend & APIs",
    description:
      "Java and Spring Boot services, Spring Batch, and REST APIs in Node.js.",
    icon: "server",
  },
  {
    title: "Full-stack development",
    description:
      "React and Vue interfaces on those services, including 3D viewing and data visualization.",
    icon: "layers",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Docker, CI/CD on Linux, and file services for large uploads and downloads.",
    icon: "cloud",
  },
  {
    title: "Distributed systems",
    description:
      "Batch jobs, BullMQ, retries, and notification flows that have to survive a failure.",
    icon: "workflow",
  },
] as const;

/** Skill groups follow the résumé, then tools named in the roles. */
export const skillGroups = [
  {
    title: "AI training",
    items: ["Coding-data creation", "Programming problem solving", "Technical reasoning"],
  },
  {
    title: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frameworks",
    items: ["Spring Boot", "React", "Express", "NestJS"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "In the roles",
    items: ["Spring Batch", "Docker", "Jest", "BullMQ", "Vue", "Stripe"],
  },
] as const;

export const coursework = [
  "Engineering Mathematics I–III",
  "Data Structures and Algorithms",
  "Object Oriented Programming",
  "Advanced Data Structures",
  "Database Management Systems",
  "System Design",
] as const;
