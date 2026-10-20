import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section id="work" className="scroll-mt-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Featured projects</p>
          <h2 className="mt-3 text-[clamp(1.85rem,2.4vw,2.25rem)] leading-tight font-semibold tracking-[-0.04em] text-text">
            Some things I&apos;ve built
          </h2>
        </div>
        <Link
          href="/projects"
          className="mb-1 inline-flex shrink-0 items-center gap-1 text-sm font-medium text-accent"
        >
          View all projects
          <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden />
        </Link>
      </div>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
