import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { SkillsGrid } from "@/components/sections/SkillsGrid";
import { AchievementsList } from "@/components/sections/AchievementsList";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Projects />
      <SkillsGrid />
      <AchievementsList />
      {/* 
        Future Sections:
        <About />
        <Contact /> 
      */}
    </div>
  );
}
