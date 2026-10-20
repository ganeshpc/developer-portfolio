import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Public projects by Ganesh Chincholkar: a workflow engine, a deployment pipeline, and smaller full-stack tools.",
  ...(siteUrl ? { alternates: { canonical: "/projects" } } : {}),
};

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="page-wrap">
        <p className="text-xs font-medium tracking-[0.14em] text-secondary uppercase">
          Projects
        </p>
        <h1 className="mt-3 max-w-[18ch] font-serif text-[clamp(2.4rem,4.5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em] text-balance text-text">
          Work I can show in public.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-secondary sm:text-lg">
          Five repositories. The descriptions stay inside what the code and the
          project notes actually say. Company work that is not public is not
          listed here.
        </p>
        <div className="mt-12">
          <ProjectGrid />
        </div>
      </div>
    </section>
  );
}
