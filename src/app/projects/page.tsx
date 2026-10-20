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
        <p className="eyebrow">Projects</p>
        <h1 className="page-title mt-3 max-w-[16ch] text-balance text-text">
          Work I can show in public.
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-secondary sm:text-base">
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
