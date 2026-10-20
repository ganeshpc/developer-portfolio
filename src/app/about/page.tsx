import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { education, profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Ganesh Chincholkar approaches backend services, full-stack products, and the public projects on this site.",
  ...(siteUrl ? { alternates: { canonical: "/about" } } : {}),
};

const interests = [
  {
    title: "APIs and data",
    body: "The shape of a request, what gets stored, and what a caller can rely on the next day.",
  },
  {
    title: "Failure between services",
    body: "Queues, durable state, and a record of which step actually finished.",
  },
  {
    title: "Shipping the result",
    body: "Containers, builds, and the unglamorous path from a repository to a running page.",
  },
];

export default function AboutPage() {
  return (
    <article className="section">
      <div className="page-wrap">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-secondary uppercase">
              About
            </p>
            <h1 className="mt-3 max-w-[16ch] font-serif text-[clamp(2.4rem,4.5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em] text-balance text-text">
              I like software that stays understandable when it fails.
            </h1>
            <div className="mt-6 max-w-xl space-y-4 text-base leading-7 text-secondary sm:text-lg sm:leading-8">
              <p>
                Most of my work is the server side of a product: the API, the
                database, and the steps that have to agree with each other. The
                interface matters, and it is not the whole job.
              </p>
              <p>
                I have been doing that in industry since July 2021, and I keep a few
                public projects where the design can be read directly. If a piece
                is unfinished, the repository says so.
              </p>
            </div>
          </div>
          <figure className="lg:pt-10">
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
              <Image
                src="/images/workspace.jpg"
                alt="A sunlit oak desk with a closed laptop, a notebook, a cup, and a small plant."
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-secondary">
              {profile.location}
            </figcaption>
          </figure>
        </div>

        <section className="mt-20 max-w-3xl lg:mt-28">
          <h2 className="text-2xl font-medium tracking-[-0.02em] text-text">
            How I work
          </h2>
          <div className="mt-4 space-y-4 text-base leading-7 text-secondary">
            <p>
              I would rather make the state model obvious than add another
              service. The workflow engine started as one process and Postgres
              for that reason. Kafka showed up when there was a real handoff to
              a worker, not before.
            </p>
            <p>
              The same preference shows up in Deployer. The request that starts
              a build is not the process that runs it. Logs have their own store
              because they are not the same data as an account.
            </p>
          </div>
        </section>

        <section className="mt-16 max-w-3xl">
          <h2 className="text-2xl font-medium tracking-[-0.02em] text-text">
            Career
          </h2>
          <div className="mt-4 space-y-4 text-base leading-7 text-secondary">
            <p>
              Since July 2021 I have been an associate software engineer at
              Siemens Industry Software, working on full-stack web applications
              with Java, Spring Boot, Node.js, and React. Before that, from
              January to June 2021, I interned at Inkoop on a Node.js, Vue, and
              MongoDB application, including Stripe.
            </p>
            <p>
              {education.credential} at {education.school}, {education.period}.
            </p>
          </div>
          <Link
            href="/experience"
            className="mt-5 inline-flex h-11 items-center text-sm font-medium text-accent"
          >
            Read the experience
          </Link>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-medium tracking-[-0.02em] text-text">
            Interests
          </h2>
          <ul className="mt-6 grid gap-8 sm:grid-cols-3">
            {interests.map((item) => (
              <li key={item.title} className="border-t border-border pt-4">
                <h3 className="text-base font-medium text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-secondary">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 max-w-3xl">
          <h2 className="text-2xl font-medium tracking-[-0.02em] text-text">
            Learning in public
          </h2>
          <p className="mt-4 text-base leading-7 text-secondary">
            The repositories are the record: a workflow engine, a deployment
            pipeline, a key-value store, a price tracker, and a planning-poker
            app a team can open in a browser.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <li>
              <Link href="/projects" className="text-accent">
                Projects
              </Link>
            </li>
            <li>
              <a
                href={profile.github}
                className="text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                className="text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.x}
                className="text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
