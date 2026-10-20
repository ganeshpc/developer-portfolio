import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { experienceSummary, getYearsOfExperience } from "@/lib/experience-years";
import { publicPath } from "@/lib/site";
import Image from "next/image";

export async function HeroCopy() {
  const years = await getYearsOfExperience();

  return (
    <div>
      <p className="text-[11px] font-medium tracking-[0.16em] text-secondary uppercase">
        {profile.eyebrow}
      </p>
      <h1 className="mt-4 font-serif text-[clamp(2.8rem,4.8vw,4.6rem)] leading-[0.98] font-medium tracking-[-0.035em] text-text">
        Building scalable systems and useful products.
      </h1>
      <p className="mt-5 max-w-md text-[15px] leading-7 text-secondary sm:text-base">
        {experienceSummary(years)}
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button href="/#work" icon="arrow">
          View my work
        </Button>
        <Button href={profile.resumeUrl} variant="secondary" external icon="download">
          Download résumé
        </Button>
      </div>
    </div>
  );
}

export function HeroPhoto() {
  return (
    <figure className="h-full">
      <div className="relative h-full min-h-[280px] overflow-hidden rounded-[28px] shadow-[0_18px_40px_rgba(15,23,42,0.1)] lg:min-h-[420px]">
        <Image
          src={publicPath("/images/ridge.jpg")}
          alt="A person with a backpack sits on a ridge above a lake and forest at sunrise."
          fill
          priority
          sizes="(min-width: 1024px) 420px, 100vw"
          className="object-cover object-[center_30%]"
        />
      </div>
      <figcaption className="font-script mt-3 text-right text-xl leading-5 text-secondary">
        curious about systems, people and ideas
      </figcaption>
    </figure>
  );
}
