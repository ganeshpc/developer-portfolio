import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ExperienceList } from "@/components/experience/ExperienceList";
import { experience } from "@/data/experience";

export function ExperiencePreview() {
  return (
    <section className="rounded-[28px] border border-border bg-surface px-5 py-7 sm:px-8 sm:py-9">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Experience</p>
          <h2 className="mt-3 text-[clamp(1.75rem,2.4vw,2.15rem)] leading-tight font-semibold tracking-[-0.04em] text-text">
            My journey
          </h2>
        </div>
        <Link
          href="/experience"
          className="mb-1 inline-flex shrink-0 items-center gap-1 text-sm font-medium text-accent"
        >
          Full experience
          <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden />
        </Link>
      </div>
      <div className="mt-8">
        <ExperienceList roles={experience} />
      </div>
    </section>
  );
}
