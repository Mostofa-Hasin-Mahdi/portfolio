import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Projects />
      {/* 
        Future Sections:
        <Skills />
        <Achievements />
        <About />
        <Contact /> 
      */}
    </div>
  );
}
