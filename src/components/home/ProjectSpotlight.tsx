import Link from "next/link";
import { ProjectArt } from "@/components/projects/ProjectArt";
import { getProject } from "@/data/projects";

export function ProjectSpotlight() {
  const project = getProject("distributed-workflow-engine");
  if (!project) return null;

  return (
    <section className="overflow-hidden rounded-[28px] bg-[#0E1422] p-6 text-[#F8FAFC] sm:p-7">
      <div className="flex items-center justify-between gap-3 text-xs text-[#94A3B8]">
        <Link href="/projects" className="hover:text-white">
          Projects
        </Link>
        <div className="flex gap-4">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <h2 className="mt-8 font-serif text-[1.85rem] leading-tight font-medium tracking-[-0.03em]">
        <Link href={`/projects/${project.slug}`}>{project.title}</Link>
      </h2>
      <p className="mt-3 max-w-md text-sm leading-6 text-[#A7B3C5]">
        {project.summary}
      </p>
      <div className="mt-4">
        <ul className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((item) => (
            <li
              key={item}
              className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-[#E2E8F0]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 overflow-hidden rounded-2xl">
        <div className="aspect-[16/8]">
          <ProjectArt slug={project.slug} />
        </div>
      </div>
    </section>
  );
}
