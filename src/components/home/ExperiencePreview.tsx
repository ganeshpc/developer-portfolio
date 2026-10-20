import Link from "next/link";
import { ExperienceList } from "@/components/experience/ExperienceList";
import { experience } from "@/data/experience";

export function ExperiencePreview() {
  return (
    <section className="rounded-[28px] border border-border bg-surface p-6 sm:p-7">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium tracking-[0.16em] text-secondary uppercase">
            Experience
          </p>
          <h2 className="mt-2 font-serif text-[1.7rem] leading-tight font-medium tracking-[-0.03em] text-text">
            My journey
          </h2>
        </div>
        <Link href="/experience" className="text-sm font-medium text-accent">
          Full experience
        </Link>
      </div>
      <div className="mt-6">
        <ExperienceList roles={experience} />
      </div>
    </section>
  );
}
