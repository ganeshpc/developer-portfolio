import type { Project, ProjectCategory } from "@/types/content";

export const categoryLabels: Record<ProjectCategory, string> = {
  backend: "Backend",
  "full-stack": "Full stack",
  systems: "Systems",
};

export const projects: Project[] = [
  {
    slug: "distributed-workflow-engine",
    title: "Distributed Workflow Engine",
    summary:
      "A Java workflow engine that keeps a multi-step order saga durable across process restarts.",
    description:
      "Orchestrates a linear order saga with PostgreSQL as the source of truth, a worker process, and Kafka as transport.",
    period: "2026",
    role: "Personal project",
    categories: ["systems", "backend"],
    featured: true,
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Docker"],
    links: [
      {
        label: "Source",
        href: "https://github.com/ganeshpc/distributed-workflow-engine",
      },
    ],
    flow: [
      {
        title: "Engine",
        detail: "Admits a workflow, commits each transition, and answers status queries.",
      },
      {
        title: "PostgreSQL",
        detail: "Stores the instance, the steps, and an append-only history of events.",
      },
      {
        title: "Kafka",
        detail: "Carries work to the worker. It is transport, not the workflow record.",
      },
      {
        title: "Worker",
        detail: "Runs each activity. In this revision the activities are still canned stubs.",
      },
    ],
    diagramCaption:
      "The shape in the current revision: engine, Postgres, Kafka, and one worker. Replay and task-queue matching are not in this picture because they are not in this code.",
    sections: [
      {
        heading: "Problem and context",
        paragraphs: [
          "Multi-step business processes fail in the gaps between services. A payment can succeed and the next step never starts. After a restart, nobody can say where that process stopped without reading several logs.",
          "I wanted a durable record of what has happened and what is next, with the business work kept outside the engine.",
        ],
      },
      {
        heading: "My contribution",
        paragraphs: [
          "This is a personal project. I designed the orchestration model and implemented the engine, the worker, and the tests described in the repository.",
        ],
      },
      {
        heading: "System architecture",
        paragraphs: [
          "The current system runs an engine process and a worker process. PostgreSQL stores the workflow instance, its steps, and a history table named workflow_event. The worker has its own database. Kafka sits between the two processes.",
          "The first workflow is a linear ORDER saga: create order, reserve inventory, process payment, create shipment, send notification. The activity implementations are canned stubs. They do not check stock or talk to a card network.",
        ],
      },
      {
        heading: "Key engineering decisions",
        paragraphs: [],
        decisions: [
          {
            title: "Postgres holds the truth",
            body: "Kafka moves messages. The workflow record lives in PostgreSQL, where a transition can commit and a later query can read it.",
          },
          {
            title: "Commit before the next step",
            body: "Each transition commits before the next activity runs, in the same transaction as the history event.",
          },
          {
            title: "A required idempotency key",
            body: "Starting a workflow requires a key, so a retried POST does not create a second instance.",
          },
          {
            title: "Compensation is a walk backward",
            body: "A failure after completed steps walks those steps backward and ends as COMPENSATED. A failure with nothing to undo stays FAILED.",
          },
        ],
      },
      {
        heading: "Challenges and trade-offs",
        paragraphs: [
          "The product aim written in the repository is a Temporal-style system: deterministic replay of workflow code, task-queue matching, and worker SDKs. Those pieces are not in this revision. The history log is written. Current state is still stored on the instance and step rows, and GET reads those rows.",
          "I would rather describe that boundary clearly than call the current core a finished workflow product.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "I am not publishing performance numbers. Nothing in the repository measures throughput, latency, or a production workload.",
          "What the code currently demonstrates is admission of a workflow, persisted steps, a history log, and compensation of completed steps.",
        ],
      },
    ],
  },
  {
    slug: "deployer",
    title: "Deployer",
    summary:
      "A pipeline that builds a React repository from its GitHub URL and serves the result.",
    description:
      "Sign in, submit a repository URL, and a separate build service clones, builds, and stores the static output.",
    period: "2024",
    role: "Personal project",
    categories: ["systems", "full-stack"],
    featured: true,
    technologies: ["Node.js", "React", "Kafka", "PostgreSQL", "MongoDB", "AWS"],
    links: [
      {
        label: "Source",
        href: "https://github.com/ganeshpc/deployer",
      },
    ],
    flow: [
      {
        title: "Web app",
        detail: "The place a person signs in and submits a GitHub repository URL.",
      },
      {
        title: "API server",
        detail: "Accounts, projects, and deploy requests. Application data sits in PostgreSQL.",
      },
      {
        title: "Build server",
        detail: "Clones the repo, builds the React app, and uploads the output to S3.",
      },
      {
        title: "Logs and files",
        detail: "Build logs go to MongoDB. A reverse proxy serves the files back out of S3.",
      },
    ],
    diagramCaption:
      "The pipeline described in the repository. Kafka connects the API to the build. There is no public hosted URL for this project.",
    sections: [
      {
        heading: "Problem and context",
        paragraphs: [
          "Shipping a small React app still means clone, install, build, upload, and then find the logs. I wanted that path to start from a repository URL.",
        ],
      },
      {
        heading: "My contribution",
        paragraphs: [
          "I built Deployer as a personal project: the web app, the API, the build service, and the proxy that serves the finished files.",
        ],
      },
      {
        heading: "System architecture",
        paragraphs: [
          "A person signs in and submits a GitHub URL. The API server, written in Node.js, stores the account and the project in PostgreSQL and hands the build off. A build server receives that work over Kafka, clones the repository, builds the React app, and uploads the output to S3.",
          "Build logs go to MongoDB, also through Kafka, and the API shows them. A reverse proxy reads the static files back out of S3. The project description also names AWS ECS as the place those containers run.",
        ],
      },
      {
        heading: "Key engineering decisions",
        paragraphs: [],
        decisions: [
          {
            title: "The build is not inside the request",
            body: "Authentication and project records stay on the API. A long build runs in another process, so the request that started it can return.",
          },
          {
            title: "Two stores, on purpose",
            body: "PostgreSQL holds application data. MongoDB holds build logs. They change for different reasons.",
          },
          {
            title: "Kafka is the handoff",
            body: "The API publishes a build request. The build server consumes it. The same path carries logs back toward the API.",
          },
        ],
      },
      {
        heading: "Challenges and trade-offs",
        paragraphs: [
          "The documented scope is React applications. Support for other frameworks is written down as future work, not as something the pipeline does today.",
          "This is a repository, not a hosted product with customers. I am not describing uptime or a public deploy URL, because there isn't one.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "No usage or performance figures are published.",
          "The outcome I can state is the pipeline itself: a repository URL goes in, and a build, an S3 upload, and a log stream are what the design produces.",
        ],
      },
    ],
  },
  {
    slug: "planning-with-poker",
    title: "Planning with Poker",
    summary:
      "A planning-poker room where a team votes on story points without seeing each other's cards until the reveal.",
    description:
      "An open-source React app for estimation meetings. Votes stay hidden, then the room sees them together.",
    period: "Dec 2023 – Mar 2024",
    role: "Personal project",
    categories: ["full-stack"],
    featured: true,
    technologies: ["React", "Firebase", "JavaScript"],
    links: [
      {
        label: "Live",
        href: "https://planning-with-poker.web.app",
      },
      {
        label: "Source",
        href: "https://github.com/ganeshpc/planningwithpoker",
      },
    ],
    flow: [
      {
        title: "Room",
        detail: "A team opens one session for the story they are estimating.",
      },
      {
        title: "Hidden votes",
        detail: "Each person picks a card. The numbers stay private until reveal.",
      },
      {
        title: "Reveal",
        detail: "The room sees the votes together, which is the point of planning poker.",
      },
    ],
    diagramCaption:
      "Firebase is the realtime store, so a vote written by one person shows up for the rest of the room.",
    sections: [
      {
        heading: "Problem and context",
        paragraphs: [
          "Estimation meetings go badly when people see each other's numbers before they have chosen. The first number anchors the room.",
          "Planning poker exists to stop that. Everyone picks, and the cards turn over together.",
        ],
      },
      {
        heading: "My contribution",
        paragraphs: [
          "I built an open-source web app for that meeting. A team joins a room, votes, and sees the cards at the same time.",
        ],
      },
      {
        heading: "System architecture",
        paragraphs: [
          "The interface is a React application. Firebase is the realtime store, so a vote written by one person shows up for the room without a separate socket server that I would have had to host.",
          "Votes stay hidden until the reveal. The live site is the same app, hosted on Firebase Hosting.",
        ],
      },
      {
        heading: "Key engineering decisions",
        paragraphs: [],
        decisions: [
          {
            title: "Hide the numbers until reveal",
            body: "Anonymous votes and a simultaneous reveal are the product. Everything else is there to support that moment.",
          },
          {
            title: "Firebase for presence",
            body: "A hosted realtime store kept the project small. I did not need to operate a presence server to get a shared room.",
          },
          {
            title: "A link is the invitation",
            body: "The app is public on the web, so a team can open a room without installing anything.",
          },
        ],
      },
      {
        heading: "Challenges and trade-offs",
        paragraphs: [
          "It is a meeting tool, not an agile suite. It does not manage a backlog, and I am not going to pretend a card vote is a project-management platform.",
          "Firebase is a real dependency. Leaving it later would mean replacing both the data and the hosting.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "I do not have public usage numbers, and I am not going to invent them.",
          "The app is on the web at the live link, and the source is on GitHub.",
        ],
      },
    ],
  },
  {
    slug: "price-tracker",
    title: "Price Tracker",
    summary:
      "A small full-stack app that follows cryptocurrency prices and pushes updates to the page.",
    description:
      "React on the front, Express and MongoDB behind it, with Socket.IO carrying price updates from Coinwatch.",
    period: "2024",
    role: "Personal project",
    categories: ["full-stack"],
    featured: false,
    technologies: ["TypeScript", "React", "Express", "MongoDB", "Socket.IO"],
    links: [
      {
        label: "Source",
        href: "https://github.com/ganeshpc/price-tracker",
      },
    ],
    flow: [
      {
        title: "Coinwatch",
        detail: "The external price feed. The backend reads it with an API key.",
      },
      {
        title: "API",
        detail: "Express and Mongoose store what the tracker needs in MongoDB.",
      },
      {
        title: "Page",
        detail: "A React and Redux interface. Socket.IO pushes updates to the open page.",
      },
    ],
    diagramCaption:
      "Docker Compose runs the frontend, the API, and MongoDB together. There is no public deployment.",
    sections: [
      {
        heading: "Problem and context",
        paragraphs: [
          "I wanted a small product with a real external feed, a database, and a page that updates without a refresh.",
        ],
      },
      {
        heading: "My contribution",
        paragraphs: [
          "I built both sides: a TypeScript React app and an Express API, plus the Compose file that runs them with MongoDB.",
        ],
      },
      {
        heading: "System architecture",
        paragraphs: [
          "The backend talks to the Coinwatch API, stores data with Mongoose, and emits updates over Socket.IO. The frontend is React with Redux, built with Vite. Docker Compose is the way the repository expects you to run it.",
        ],
      },
      {
        heading: "Key engineering decisions",
        paragraphs: [],
        decisions: [
          {
            title: "Push, don't poll the page",
            body: "Socket.IO carries updates to an open browser so the page is not on a timer of its own.",
          },
          {
            title: "One Compose file",
            body: "The frontend, API, and database start together, which is the whole operations story this project needs.",
          },
        ],
      },
      {
        heading: "Challenges and trade-offs",
        paragraphs: [
          "The feed is a third party. The tracker is only as current as that API, and the repository expects a Coinwatch key.",
          "There is no public site for it. The screenshots in the repository are the UI record.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "No accuracy or latency numbers are published.",
          "What exists is a working local stack: a price feed, a store, and a page that receives updates over a socket.",
        ],
      },
    ],
  },
  {
    slug: "key-value-store",
    title: "Key-Value Store",
    summary:
      "A small key-value service with TTL expiry, a SQLite write-ahead log, and a command-line client.",
    description:
      "An in-memory map in front of SQLite, with a REST API and a CLI for put and get.",
    period: "2026",
    role: "Personal project",
    categories: ["backend"],
    featured: false,
    technologies: ["Java", "Spring Boot", "SQLite"],
    links: [
      {
        label: "Source",
        href: "https://github.com/ganeshpc/KeyValueStore",
      },
    ],
    flow: [
      {
        title: "CLI or HTTP",
        detail: "A small command-line tool and a REST API both talk to the same server.",
      },
      {
        title: "Memory",
        detail: "Reads hit an in-memory map guarded for concurrent access.",
      },
      {
        title: "SQLite",
        detail: "A write-ahead log keeps the data so a restart can recover it. Keys can expire.",
      },
    ],
    diagramCaption:
      "The repository describes TTL expiry, SQLite with WAL, and a CLI. I am not adding benchmark numbers the code does not publish.",
    sections: [
      {
        heading: "Problem and context",
        paragraphs: [
          "A useful key-value service has to answer concurrent reads, forget expired keys, and come back after the process dies.",
        ],
      },
      {
        heading: "My contribution",
        paragraphs: [
          "I built the server and the CLI in Java. The server is a Spring Boot process. The CLI is a separate tool that calls it.",
        ],
      },
      {
        heading: "System architecture",
        paragraphs: [
          "Reads are served from an in-memory map, with the database as the durable copy. SQLite runs with a write-ahead log so a crash can recover state. Keys carry a TTL and are evicted when they expire. The HTTP API and the CLI are two ways into the same server.",
        ],
      },
      {
        heading: "Key engineering decisions",
        paragraphs: [],
        decisions: [
          {
            title: "Memory in front, SQLite behind",
            body: "The hot path stays in memory. Durability is the database, not a second cache process.",
          },
          {
            title: "WAL for restart",
            body: "The write-ahead log is how the project recovers after the process stops. There is no separate replication story.",
          },
        ],
      },
      {
        heading: "Challenges and trade-offs",
        paragraphs: [
          "SQLite is the right size for one process. It is not a distributed store, and the project does not pretend otherwise.",
          "The README describes the features above. It does not include a measured latency or a crash-recovery test result I can quote.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "No latency or throughput figures are published.",
          "The repository is a single-process store with expiry, a durable log, an HTTP API, and a CLI.",
        ],
      },
    ],
  },
];

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "backend", label: "Backend" },
  { id: "full-stack", label: "Full stack" },
  { id: "systems", label: "Systems" },
] as const;

export type ProjectFilter = (typeof projectFilters)[number]["id"];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function filterProjects(filter: ProjectFilter) {
  if (filter === "all") return projects;
  return projects.filter((project) =>
    project.categories.includes(filter as ProjectCategory),
  );
}
