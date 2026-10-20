import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectArt } from "@/components/projects/ProjectArt";
import { TechnologyList } from "@/components/ui/TechnologyList";
import type { Project } from "@/types/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="h-full">
      <Link
        href={`/projects/${project.slug}`}
        className="group flex h-full flex-col rounded-[22px] transition-colors duration-200"
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface-secondary">
          <ProjectArt slug={project.slug} />
        </div>
        <div className="flex flex-1 flex-col px-1 pt-4 pb-1">
          <h3 className="text-[15px] leading-snug font-semibold tracking-[-0.02em] text-text">
            {project.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-[13px] leading-5 text-secondary">
            {project.description}
          </p>
          <div className="mt-4 flex items-end justify-between gap-3">
            <TechnologyList items={project.technologies.slice(0, 3)} />
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-secondary transition-colors duration-200 group-hover:bg-button group-hover:text-button-text">
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
              <span className="sr-only">View project</span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
