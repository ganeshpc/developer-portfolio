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
        <p className="text-xs font-medium tracking-[0.14em] text-secondary uppercase">
          Experience
        </p>
        <h1 className="mt-3 font-serif text-[clamp(2.4rem,4.5vw,3.75rem)] leading-[1.05] font-medium tracking-[-0.03em] text-text">
          My journey.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-secondary sm:text-lg">
          Four roles, newest first. The notes follow the résumé. Where a
          percentage appears, it is the figure printed there.
        </p>
        <div className="mt-8">
          <Button href={profile.resumeUrl} external icon="download">
            Download résumé
          </Button>
        </div>
        <div className="mt-12">
          <ExperienceList roles={experience} detailed />
        </div>
        <p className="mt-10 max-w-2xl text-sm leading-6 text-secondary">
          {education.credential}, {education.school}, {education.period}.
        </p>
        <div className="mt-8">
          <Button href={profile.resumeUrl} variant="secondary" external icon="download">
            Download résumé
          </Button>
        </div>
      </div>
    </section>
  );
}
