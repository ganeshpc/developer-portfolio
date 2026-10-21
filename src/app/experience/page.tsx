import type { Metadata } from "next";
import { ExperienceList } from "@/components/experience/ExperienceList";
import { Button } from "@/components/ui/Button";
import { education, profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Ganesh Chincholkar's roles at xAI, Citi, Siemens Industry Software, and Inkoop.",
  ...(siteUrl ? { alternates: { canonical: "/experience" } } : {}),
};

export default function ExperiencePage() {
  return (
    <section className="section">
      <div className="page-wrap">
        <div className="rounded-[28px] border border-border bg-surface px-5 py-7 sm:px-8 sm:py-9 lg:px-10">
          <p className="eyebrow">Experience</p>
          <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <h1 className="text-[clamp(1.85rem,2.6vw,2.5rem)] leading-tight font-semibold tracking-[-0.04em] text-text">
              My journey
            </h1>
            <Button href={profile.resumeUrl} variant="secondary" external icon="download">
              Download résumé
            </Button>
          </div>
          <div className="mt-10">
            <ExperienceList roles={experience} detailed />
          </div>
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-6 text-secondary">
          {education.credential}, {education.school}, {education.period}.
        </p>
      </div>
    </section>
  );
}
