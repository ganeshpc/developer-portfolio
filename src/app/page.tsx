import { AboutPreview } from "@/components/home/AboutPreview";
import { Capabilities } from "@/components/home/Capabilities";
import { ContactSection } from "@/components/home/ContactSection";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HeroCopy, HeroPhoto } from "@/components/home/Hero";
import { ImpactBanner } from "@/components/home/ImpactBanner";
import { ProjectSpotlight } from "@/components/home/ProjectSpotlight";

export default function HomePage() {
  return (
    <>
      <div className="page-wrap py-8 sm:py-10 lg:py-12">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5 lg:pt-6">
            <HeroCopy />
          </div>
          <div className="lg:col-span-3">
            <HeroPhoto />
          </div>
          <div className="lg:col-span-4">
            <AboutPreview />
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8 lg:mt-12">
          <Capabilities />
        </div>

        <div className="mt-12 grid items-start gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-6">
          <div className="space-y-8 lg:col-span-7">
            <FeaturedProjects />
            <ImpactBanner />
          </div>
          <div className="space-y-6 lg:col-span-5">
            <ProjectSpotlight />
            <ExperiencePreview />
          </div>
        </div>
      </div>
      <ContactSection />
    </>
  );
}
