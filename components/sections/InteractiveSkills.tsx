'use client';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const skills = [
  // Backend & Databases
  'Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'Supabase', 'Docker',
  // AI & ML
  'PyTorch', 'Scikit-learn', 'XGBoost', 'spaCy', 'RAG', 'Mistral AI', 'Computer Vision',
  // Frontend
  'React.js', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion',
  // Tools & Systems
  'Git', 'Vercel', 'Linux', 'Microservices'
];

export function InteractiveSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills" className="py-24 px-6 border-t border-border bg-bg overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-sm text-accent mb-2">(04) TOOLKIT</div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">Engineering Arsenal</h2>
          </div>
          <p className="text-muted text-sm font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Interactive: Drag pills to organize
          </p>
        </div>
        
        {mounted && (
          <div 
            ref={containerRef}
            className="relative w-full min-h-[400px] border border-border bg-surface rounded-3xl overflow-hidden flex flex-wrap content-center justify-center p-8 gap-4"
          >
            {/* Sonar Radar Background */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent/20 rounded-full border border-accent/50 z-0 pointer-events-none -translate-x-1/2 -translate-y-1/2 shadow-[0_0_50px_rgba(59,130,246,0.3)]"
              animate={{ scale: [1, 4], opacity: [0.8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent/20 rounded-full border border-accent/50 z-0 pointer-events-none -translate-x-1/2 -translate-y-1/2 shadow-[0_0_50px_rgba(59,130,246,0.3)]"
              animate={{ scale: [1, 4], opacity: [0.8, 0] }}
              transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: "easeOut" }}
            />

            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                drag
                dragConstraints={containerRef}
                dragElastic={0.1}
                whileDrag={{ scale: 1.1, zIndex: 50, cursor: 'grabbing' }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: i * 0.03, 
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 20 
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="p-[1px] rounded-full bg-border hover:bg-gradient-to-r hover:from-accent hover:via-purple-500 hover:to-emerald-400 transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.1)] cursor-grab active:cursor-grabbing group"
              >
                <div className="px-6 py-3 rounded-full bg-bg text-text font-mono text-sm select-none h-full w-full flex items-center justify-center">
                  {skill}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
