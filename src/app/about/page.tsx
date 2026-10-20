import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { coursework, education, profile, skillGroups } from "@/data/profile";
import { publicPath, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ganesh Chincholkar is a software engineer in Pune. He has worked at xAI, Citi, Siemens Industry Software, and Inkoop.",
  ...(siteUrl ? { alternates: { canonical: "/about" } } : {}),
};

export default function AboutPage() {
  return (
    <article className="section">
      <div className="page-wrap">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
          <div>
            <p className="eyebrow">About</p>
            <h1 className="page-title mt-3 max-w-[16ch] text-balance text-text">
              I like software that stays understandable when it fails.
            </h1>
            <div className="mt-6 max-w-xl space-y-4 text-[15px] leading-7 text-secondary sm:text-base sm:leading-7">
              <p>
                Most of my work is the server side of a product: batch jobs,
                file services, REST APIs, and the data those APIs have to keep
                straight. The interface matters, and it is not the whole job.
              </p>
              <p>
                Since January 2021 that has meant a Vue product at Inkoop, four
                years of full-stack product work at Siemens, Java batch systems
                at Citi, and coding data for model training at xAI. Public
                repositories are where a design can be read without a company
                boundary.
              </p>
            </div>
            <div className="mt-7">
              <Button href="/experience" variant="secondary" icon="arrow">
                Read the experience
              </Button>
            </div>
          </div>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
              <Image
                src={publicPath("/images/workspace.jpg")}
                alt="A wooden desk by a window, with a laptop, notebook, cup, and plant."
                fill
                sizes="(min-width: 1024px) 460px, 100vw"
                className="object-cover object-[68%_45%]"
              />
            </div>
            <figcaption className="mt-3 text-sm text-secondary">{profile.location}</figcaption>
          </figure>
        </div>

        <section className="mt-20 max-w-3xl lg:mt-28">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-text">
            How I work
          </h2>
          <div className="mt-4 space-y-4 text-base leading-7 text-secondary">
            <p>
              At Citi the batch migration was a framework problem: scheduling,
              retries, and monitoring had to move off a licensed modeler and
              onto Spring Batch without dropping the jobs that already ran.
              The notification system was the same kind of problem at a smaller
              scale. A failed send had to be retried, and a batch of failures
              had to be reprocessed, or the message never reached the user.
            </p>
            <p>
              At Siemens the 3D viewer and the PLMX file service had to agree
              on what a file was and how fast it could be shown. A cache file
              server sat beside that, because large uploads are not the same
              traffic as a page of metadata. Docker and the Linux pipelines
              were how those services actually shipped.
            </p>
            <p>
              The public projects follow the same habit. The workflow engine
              keeps PostgreSQL as the record of a saga and uses Kafka only when
              a worker has to take the next step. Deployer does not build
              inside the request that started the build.
            </p>
          </div>
        </section>

        <section className="mt-16 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-text">
            Career
          </h2>
          <div className="mt-4 space-y-4 text-base leading-7 text-secondary">
            <p>
              Most recently I was a fullstack engineering specialist at xAI, from
              January to September 2026. Before that I was a Java fullstack
              developer at Citi, a software engineer at Siemens Industry
              Software from July 2021 to June 2025, and a fullstack intern at
              Inkoop in the first half of 2021.
            </p>
            <p>
              {education.credential} at {education.school}, {education.period},
              in {profile.location}. Coursework included{" "}
              {coursework.slice(0, -1).join(", ")}, and {coursework.at(-1)}.
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
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-text">
            Technical skills
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-secondary">
            The groups below are the ones on the résumé. The last group is
            tools named in the role descriptions rather than in that list.
          </p>
          <ul className="mt-6 grid gap-8 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <li key={group.title} className="border-t border-border pt-4">
                <h3 className="text-base font-medium text-text">{group.title}</h3>
                <p className="mt-2 text-sm leading-6 text-secondary">
                  {group.items.join(", ")}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-text">
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
