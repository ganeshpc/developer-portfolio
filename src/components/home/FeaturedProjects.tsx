import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";
import Link from "next/link";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section id="work" className="scroll-mt-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium tracking-[0.16em] text-secondary uppercase">
            Featured projects
          </p>
          <h2 className="mt-2 font-serif text-[clamp(1.8rem,3vw,2.4rem)] leading-tight font-medium tracking-[-0.03em] text-text">
            Some things I&apos;ve built
          </h2>
        </div>
        <Link
          href="/projects"
          className="shrink-0 text-sm font-medium text-accent"
        >
          View all projects
        </Link>
      </div>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
