import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FlowDiagram } from "@/components/projects/FlowDiagram";
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

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="section">
      <div className="page-wrap">
        <p className="text-xs font-medium tracking-[0.14em] text-secondary uppercase">
          {project.categories.map((category) => categoryLabels[category]).join(" · ")}
        </p>
        <h1 className="mt-3 max-w-[18ch] font-serif text-[clamp(2.4rem,4.5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em] text-balance text-text">
          {project.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-secondary sm:text-lg sm:leading-8">
          {project.summary}
        </p>
        <p className="mt-3 text-sm text-secondary">
          {project.role} · {project.period}
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {project.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <figure className="mt-12 rounded-2xl border border-border bg-surface-secondary p-4 sm:p-8">
          <FlowDiagram nodes={project.flow} />
          <figcaption className="mt-5 max-w-2xl text-sm leading-6 text-secondary">
            {project.diagramCaption}
          </figcaption>
        </figure>

        <div className="mt-16 max-w-[68ch] space-y-12">
          {project.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-medium tracking-[-0.02em] text-text">
                {section.heading}
              </h2>
              {section.paragraphs.length > 0 ? (
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-7 text-secondary">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : null}
              {section.decisions ? (
                <dl className="mt-5 space-y-5">
                  {section.decisions.map((decision) => (
                    <div key={decision.title}>
                      <dt className="text-base font-medium text-text">
                        {decision.title}
                      </dt>
                      <dd className="mt-1 text-base leading-7 text-secondary">
                        {decision.body}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : null}
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-medium tracking-[-0.02em] text-text">
              Technology
            </h2>
            <div className="mt-4">
              <TechnologyList items={project.technologies} />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium tracking-[-0.02em] text-text">
              Links
            </h2>
            <ul className="mt-4 space-y-2">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base text-accent"
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
    </article>
  );
}
