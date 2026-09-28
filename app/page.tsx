import { NewHero } from "@/components/sections/NewHero";
import { WorkSection } from "@/components/sections/WorkSection";
import { InteractiveSkills } from "@/components/sections/InteractiveSkills";
import { EngineeringPrinciples } from "@/components/sections/EngineeringPrinciples";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { JourneyTimeline, JourneyTimelineMobile } from "@/components/sections/JourneyTimeline";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <NewHero />
      <AboutSection />
      <JourneyTimeline />
      <JourneyTimelineMobile />
      <WorkSection />
      <InteractiveSkills />
      <EngineeringPrinciples />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
}
