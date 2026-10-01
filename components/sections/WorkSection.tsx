'use client';
import { projects } from '@/lib/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { motion } from 'framer-motion';

function WorkBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.03] dark:opacity-[0.07] flex flex-wrap">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div 
          key={i} 
          className="w-[10%] h-[120px] border border-text"
          animate={{ backgroundColor: ["transparent", "var(--color-text)", "transparent"] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            delay: (i * 17) % 7, 
            repeatDelay: (i * 13) % 10 + 2
          }}
        />
      ))}
    </div>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="py-24 px-6 border-t border-border bg-bg relative">
      <WorkBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <div className="font-mono text-sm text-accent mb-2">(03) SELECTED WORK</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">Engineering Case Studies</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-border pt-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
