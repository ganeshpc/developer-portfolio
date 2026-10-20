import Image from "next/image";
import { getYearsOfExperience } from "@/lib/experience-years";
import { projects } from "@/data/projects";
import { publicPath } from "@/lib/site";

export async function ImpactBanner() {
  const years = await getYearsOfExperience();
  const stats = [
    { value: `${years}+`, label: "Years of experience" },
    { value: String(projects.length), label: "Public projects" },
    { value: "∞", label: "Still learning" },
  ];

  return (
    <section className="relative overflow-hidden rounded-[28px] text-white">
      <Image
        src={publicPath("/images/ridge.jpg")}
        alt=""
        fill
        sizes="(min-width: 1024px) 1120px, 100vw"
        className="object-cover object-[center_38%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1016]/90 via-[#0b1016]/78 to-[#0b1016]/58" />
      <div className="relative grid gap-10 px-6 py-9 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:px-12">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.16em] text-white/70 uppercase">
            About me
          </p>
          <h2 className="mt-3 text-[clamp(1.85rem,2.5vw,2.45rem)] leading-[1.12] font-semibold tracking-[-0.04em]">
            Developer focused
            <br />
            on real-world impact.
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/75">
            I like problems that stay understandable when something fails: the
            API, the data, and the step that has to happen next.
          </p>
        </div>
        <dl className="grid grid-cols-3 gap-3 sm:gap-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-[clamp(1.85rem,3vw,2.75rem)] leading-none font-semibold tracking-[-0.04em]">
                {stat.value}
              </dt>
              <dd className="mt-2 text-xs leading-4 text-white/70">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
