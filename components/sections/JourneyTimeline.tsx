'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const journeyMilestones = [
  { year: "2022", title: "Started CSE", desc: "Began BSc in Computer Science. Discovered a passion for algorithms and systems." },
  { year: "2023", title: "Foundations & Contests", desc: "Data Structures, OOP, and databases. Participated in ICPC and IUPC prelims." },
  { year: "2024", title: "Web & Backend", desc: "Built full-stack platforms and learned FastAPI, React, and PostgreSQL." },
  { year: "2025", title: "AI & ML Integration", desc: "Shifted focus to intelligent systems, Deepfake Detection, and NAB Preg AI." },
  { year: "2026", title: "Software Engineering", desc: "Thesis completion and preparing for graduation. Ready for production roles." },
];

function TimelineNode({ item, index, progress, total }: { item: typeof journeyMilestones[0], index: number, progress: MotionValue<number>, total: number }) {
  // Calculate the exact point in the scroll where this item is centered
  const center = index / (total - 1);
  const range = 1 / (total - 1); // 0.25 since there are 5 items
  
  const inPoints = [center - range, center, center + range];
  const outScale = [0.1, 1, 0.1];
  const outOpacity = [0.4, 1, 0.4];

  const safeIn: number[] = [];
  const safeScale: number[] = [];
  const safeOpacity: number[] = [];

  for (let i = 0; i < 3; i++) {
    if (inPoints[i] >= 0 && inPoints[i] <= 1) {
      safeIn.push(inPoints[i]);
      safeScale.push(outScale[i]);
      safeOpacity.push(outOpacity[i]);
    }
  }

  const scale = useTransform(progress, safeIn, safeScale);
  const opacity = useTransform(progress, safeIn, safeOpacity);

  return (
    <motion.div 
      style={{ scale, opacity }}
      className="flex-shrink-0 w-[500px] flex flex-col items-center justify-center text-center px-8 relative z-10 origin-center"
    >
      {/* The Tech Diamond Node */}
      <div className="w-6 h-6 bg-accent rotate-45 mb-6 shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
      
      {/* Hollow Outline Year Text - cinematic and perfectly legible on all backgrounds */}
      <div 
        className="text-[120px] md:text-[180px] leading-none font-black text-transparent mb-8 tracking-tighter"
        style={{ WebkitTextStroke: "2px var(--color-text)" }}
      >
        {item.year}
      </div>
      
      <h3 className="text-2xl md:text-3xl font-bold text-text mb-4">{item.title}</h3>
      <p className="text-muted text-lg leading-relaxed max-w-sm mx-auto">{item.desc}</p>
    </motion.div>
  );
}

export function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map 0 -> first item centered, 1 -> last item centered
  // 50vw - 250px centers the first 500px item perfectly on the screen
  // 50vw - 2250px centers the last item (2500px total width - 250px offset)
  const x = useTransform(scrollYProgress, [0, 1], ["calc(50vw - 250px)", "calc(50vw - 2250px)"]);

  return (
    <section ref={containerRef} id="journey" className="relative h-[400vh] bg-bg hidden md:block border-t border-border">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Fixed Header */}
        <div className="absolute top-24 left-6 md:left-24 w-full z-20 pointer-events-none">
          <div className="font-mono text-sm text-accent mb-2">(02) JOURNEY</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">How I Got Here</h2>
        </div>

        {/* Scroll-driven animated wavy timeline rail */}
        <div className="absolute top-1/2 left-0 w-full h-[100px] z-0 -translate-y-1/2 pointer-events-none opacity-40 overflow-hidden">
          <motion.svg 
            style={{ x: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }} 
            className="w-[200vw] h-full drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]" 
            viewBox="0 0 2000 100" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,50 Q125,0 250,50 T500,50 T750,50 T1000,50 T1250,50 T1500,50 T1750,50 T2000,50 T2250,50 T2500,50 T2750,50 T3000,50 T3250,50 T3500,50 T3750,50 T4000,50" 
              fill="none" 
              stroke="var(--color-accent)" 
              strokeWidth="2" 
            />
          </motion.svg>
        </div>

        {/* The moving track */}
        <motion.div style={{ x }} className="flex gap-0 w-max items-center h-full">
          {journeyMilestones.map((item, index) => (
            <TimelineNode 
              key={index} 
              item={item} 
              index={index} 
              progress={scrollYProgress} 
              total={journeyMilestones.length} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function JourneyTimelineMobile() {
  return (
    <section id="journey-mobile" className="py-24 px-6 md:hidden bg-bg border-t border-border">
      <div className="font-mono text-sm text-accent mb-2">(02) JOURNEY</div>
      <h2 className="text-3xl font-bold tracking-tight mb-16 text-text">How I Got Here</h2>

      <div className="space-y-12 border-l border-border pl-6 relative">
        {journeyMilestones.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[30px] top-1.5 w-3 h-3 bg-accent rounded-full ring-4 ring-bg shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
            <div 
              className="text-6xl font-black text-transparent mb-4"
              style={{ WebkitTextStroke: "1px var(--color-text)" }}
            >
              {item.year}
            </div>
            <h3 className="text-xl font-bold text-accent mb-2">{item.title}</h3>
            <p className="text-muted text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
