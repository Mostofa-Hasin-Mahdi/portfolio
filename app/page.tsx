import { NewHero } from "@/components/sections/NewHero";
import { WorkSection } from "@/components/sections/WorkSection";
import { InteractiveSkills } from "@/components/sections/InteractiveSkills";
import { EngineeringPrinciples } from "@/components/sections/EngineeringPrinciples";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { JourneyTimeline } from "@/components/sections/JourneyTimeline";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="w-full">
      <NewHero />
      <AboutSection />
      <WorkSection />
      <InteractiveSkills />
      <JourneyTimeline />
      <EngineeringPrinciples />
      <AchievementsSection />
      <CertificatesSection />
      <ContactSection />
    </div>
  );
}
