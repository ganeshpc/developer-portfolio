/** First month of professional work. Experience figures count completed years from here. */
export const careerStart = { year: 2021, month: 1 } as const;

export const profile = {
  name: "Ganesh Chincholkar",
  givenName: "Ganesh",
  role: "Software Engineer",
  location: "Pune, India",
  eyebrow: "Software Engineer",
  headline: "Building scalable systems and useful products.",
  /**
   * No public email is on file. Set this and the contact section will
   * use it. Leave it null rather than inventing an address.
   */
  email: null as string | null,
  github: "https://github.com/ganeshpc",
  linkedin: "https://www.linkedin.com/in/ganeshpc8/",
  x: "https://x.com/ganesh_p_c",
  resumeUrl:
    "https://drive.google.com/uc?export=download&id=1-4tQTWYeJHh-N4Wl4Y56ZATVY7rpp_A8",
  availabilityNote: "Open to interesting engineering opportunities.",
} as const;

export const education = {
  school: "Government College of Engineering and Research, Avasari",
  credential: "Bachelor of Engineering, Computer Engineering",
  period: "2017–2021",
} as const;

export const capabilities = [
  {
    title: "Backend & APIs",
    description: "Services, data, and the contracts between them.",
    icon: "server",
  },
  {
    title: "Full-stack development",
    description: "Interfaces and the services behind them.",
    icon: "layers",
  },
  {
    title: "Cloud & DevOps",
    description: "Containers, builds, and cloud storage.",
    icon: "cloud",
  },
  {
    title: "Distributed systems",
    description: "Queues, durable state, and recovery.",
    icon: "workflow",
  },
] as const;
