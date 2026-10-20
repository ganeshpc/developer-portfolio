import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CaseStudyNav } from "@/components/projects/CaseStudyNav";
import { FlowDiagram } from "@/components/projects/FlowDiagram";
import { ProjectArt } from "@/components/projects/ProjectArt";
import { TechnologyList } from "@/components/ui/TechnologyList";
import { categoryLabels, getProject, projects } from "@/data/projects";
import { siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };

  return {
    title: project.title,
    description: project.summary,
    ...(siteUrl ? { alternates: { canonical: `/projects/${project.slug}` } } : {}),
  };
}

function sectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const nav = [
    ...project.sections.map((section) => ({
      id: sectionId(section.heading),
      label: section.heading,
    })),
    { id: "technology", label: "Technology" },
    { id: "links", label: "Links" },
  ];

  return (
    <article className="page-wrap py-8 sm:py-10 lg:py-12">
      <div className="overflow-hidden rounded-[28px] bg-[#121820] text-white shadow-[0_24px_60px_rgba(16,24,32,0.12)] ring-1 ring-white/10">
        <header className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:p-10">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-white/65">
              <Link href="/projects" className="inline-flex items-center gap-1.5 hover:text-white">
                <ArrowLeft className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                Projects
              </Link>
              <ul className="flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-8 text-[11px] font-semibold tracking-[0.16em] text-white/50 uppercase">
              {project.categories.map((category) => categoryLabels[category]).join(" · ")}
            </p>
            <h1 className="mt-3 max-w-[16ch] text-[clamp(2rem,3.4vw,2.75rem)] leading-[1.08] font-semibold tracking-[-0.045em]">
              {project.title}
            </h1>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/70 sm:text-[15px]">
              {project.summary}
            </p>
            <p className="mt-2 text-[13px] text-white/50">
              {project.role} · {project.period}
            </p>
            <div className="mt-5">
              <TechnologyList items={project.technologies.slice(0, 4)} tone="onDark" />
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#F4F6F8]">
            <ProjectArt slug={project.slug} />
          </div>
        </header>

        <div className="grid gap-8 border-t border-white/10 px-6 py-8 sm:px-8 lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:px-10 lg:py-10">
          <CaseStudyNav items={nav} />
          <div className="min-w-0 space-y-12">
            {project.sections.map((section, index) => (
              <section key={section.heading} id={sectionId(section.heading)} className="scroll-mt-28">
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-white">
                  {section.heading}
                </h2>
                {section.paragraphs.length > 0 ? (
                  <div className="mt-4 max-w-[68ch] space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-[15px] leading-7 text-white/70">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : null}
                {section.decisions ? (
                  <dl className="mt-5 max-w-[68ch] space-y-5">
                    {section.decisions.map((decision) => (
                      <div key={decision.title}>
                        <dt className="text-[15px] font-medium text-white">{decision.title}</dt>
                        <dd className="mt-1 text-[15px] leading-7 text-white/70">
                          {decision.body}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
                {index === 0 ? (
                  <figure className="mt-8">
                    <FlowDiagram nodes={project.flow} tone="onDark" />
                    <figcaption className="mt-4 max-w-[68ch] text-sm leading-6 text-white/55">
                      {project.diagramCaption}
                    </figcaption>
                  </figure>
                ) : null}
              </section>
            ))}

            <section id="technology" className="scroll-mt-28">
              <h2 className="text-xl font-semibold tracking-[-0.03em] text-white">
                Technology
              </h2>
              <div className="mt-4">
                <TechnologyList items={project.technologies} tone="onDark" />
              </div>
            </section>

            <section id="links" className="scroll-mt-28">
              <h2 className="text-xl font-semibold tracking-[-0.03em] text-white">Links</h2>
              <ul className="mt-4 space-y-2">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[15px] text-[#9EBEFF] hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
