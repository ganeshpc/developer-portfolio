import { Capabilities } from "@/components/home/Capabilities";
import { ContactSection } from "@/components/home/ContactSection";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HeroCopy, HeroPhoto } from "@/components/home/Hero";
import { ImpactBanner } from "@/components/home/ImpactBanner";

export default function HomePage() {
  return (
    <>
      <div className="page-wrap pt-8 pb-4 sm:pt-10 lg:pt-12">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-8">
          <HeroCopy />
          <HeroPhoto />
        </div>
        <div className="mt-10 lg:mt-12">
          <Capabilities />
        </div>
        <div className="mt-16 lg:mt-20">
          <FeaturedProjects />
        </div>
        <div className="mt-12 lg:mt-16">
          <ImpactBanner />
        </div>
        <div className="mt-6 lg:mt-8">
          <ExperiencePreview />
        </div>
      </div>
      <ContactSection />
    </>
  );
}
