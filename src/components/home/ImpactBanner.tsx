import Image from "next/image";
import Link from "next/link";
import { getYearsOfExperience } from "@/lib/experience-years";

export async function ImpactBanner() {
  const years = await getYearsOfExperience();

  return (
    <section className="relative overflow-hidden rounded-[28px] text-white">
      <Image
        src="/images/ridge.jpg"
        alt=""
        fill
        sizes="(min-width: 1024px) 720px, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0B1220]/72" />
      <div className="relative px-6 py-8 sm:px-8 sm:py-10">
        <p className="text-[11px] font-medium tracking-[0.16em] text-white/70 uppercase">
          About me
        </p>
        <h2 className="mt-3 max-w-[12ch] font-serif text-[clamp(1.8rem,3vw,2.5rem)] leading-tight font-medium tracking-[-0.03em]">
          Developer focused on real-world impact.
        </h2>
        <p className="mt-3 max-w-md text-sm leading-6 text-white/75">
          I like problems that stay understandable when something fails: the
          API, the data, and the step that has to happen next.
        </p>
        <div className="mt-8 flex flex-wrap gap-10">
          <div>
            <p className="font-serif text-4xl leading-none">{years}+</p>
            <p className="mt-2 text-xs text-white/70">Years of experience</p>
          </div>
          <div>
            <p className="font-serif text-4xl leading-none">∞</p>
            <p className="mt-2 text-xs text-white/70">Still learning the craft</p>
          </div>
        </div>
        <Link href="/about" className="mt-6 inline-flex text-sm text-white/90 underline-offset-4 hover:underline">
          More about me
        </Link>
      </div>
    </section>
  );
}
