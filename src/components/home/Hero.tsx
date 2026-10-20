import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { experienceSummary, getYearsOfExperience } from "@/lib/experience-years";
import { publicPath } from "@/lib/site";
import Image from "next/image";

export async function HeroCopy() {
  const years = await getYearsOfExperience();

  return (
    <div className="lg:pt-8">
      <p className="eyebrow">{profile.eyebrow}</p>
      <h1 className="mt-4 text-[2.35rem] leading-[1.02] font-semibold tracking-[-0.045em] text-text sm:text-[2.6rem] lg:text-[3rem] xl:text-[3.25rem]">
        <span className="lg:block">Building</span>{" "}
        <span className="lg:block">scalable systems</span>{" "}
        <span className="hero-kicker lg:text-headline-muted">and useful products.</span>
      </h1>
      <p className="mt-5 max-w-md text-[15px] leading-7 text-secondary">
        {experienceSummary(years)}
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button href="/#work" icon="arrow" className="w-full sm:w-auto">
          View my work
        </Button>
        <Button
          href={profile.resumeUrl}
          variant="secondary"
          external
          icon="download"
          className="w-full sm:w-auto"
        >
          Download résumé
        </Button>
      </div>
    </div>
  );
}

export function HeroPhoto() {
  return (
    <figure className="relative">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] sm:aspect-[5/4] lg:mr-32 lg:aspect-square lg:rounded-[28px]">
        <Image
          src={publicPath("/images/ridge.jpg")}
          alt="A person with a backpack sits on a ridge above a lake and forest at sunrise."
          fill
          priority
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover object-[center_72%] lg:object-[68%_66%]"
        />
      </div>
      <figcaption className="pointer-events-none absolute top-1 right-0 hidden w-[7.75rem] text-right lg:block">
        <p className="font-script text-[1.35rem] leading-[1.15] text-secondary">
          curious about
          <br />
          systems, people
          <br />
          and ideas
        </p>
        <svg
          viewBox="0 0 56 64"
          className="mt-1 ml-auto h-14 w-12 text-secondary"
          fill="none"
          aria-hidden
        >
          <path
            d="M44 4c8 18 2 30-16 44"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M22 40l6 12 10-8"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </figcaption>
    </figure>
  );
}
