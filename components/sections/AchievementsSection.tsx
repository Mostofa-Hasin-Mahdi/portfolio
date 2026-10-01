'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile';
import { achievementsData } from '@/lib/achievements';

const POSITIONS = [
  { x: '-30vw', y: '-25vh', rotate: -12 },
  { x: '30vw', y: '-20vh', rotate: 15 },
  { x: '-35vw', y: '25vh', rotate: -8 },
  { x: '35vw', y: '30vh', rotate: 12 },
  { x: '0vw', y: '35vh', rotate: -5 },
];

function HaloBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-10 dark:opacity-30">
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] border border-accent rounded-full flex items-center justify-center"
      >
        <div className="w-[140%] h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent absolute" />
        <div className="w-[1px] h-[140%] bg-gradient-to-b from-transparent via-accent to-transparent absolute" />
      </motion.div>
      <motion.div 
        animate={{ rotate: -360 }} 
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] border border-accent/30 rounded-full flex items-center justify-center border-dashed"
      />
    </div>
  );
}

function ScatteredCard({ item, index, total, progress }: any) {
  const range = 1 / total;
  const center = (index + 0.5) * range;
  const t = range * 0.45; // Total transition window
  const hold = range * 0.15; // Duration it stays perfectly centered
  
  const pos = POSITIONS[index % POSITIONS.length];

  const input = [center - t, center - hold, center + hold, center + t];

  const x = useTransform(progress, input, [pos.x, '0vw', '0vw', pos.x]);
  const y = useTransform(progress, input, [pos.y, '0vh', '0vh', pos.y]);
  const scale = useTransform(progress, input, [0.5, 1.1, 1.1, 0.5]);
  const opacity = useTransform(progress, input, [0.15, 1, 1, 0.15]);
  const rotate = useTransform(progress, input, [pos.rotate, 0, 0, pos.rotate]);
  const zIndex = useTransform(progress, input, [0, 50, 50, 0]);
  const roundedZ = useTransform(zIndex, v => Math.round(v));

  return (
    <motion.div
      style={{ x, y, scale, opacity, rotate, zIndex: roundedZ }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[450px] p-[1px] rounded-2xl bg-border shadow-[0_0_40px_rgba(0,0,0,0.1)]"
    >
      <div className="bg-bg rounded-2xl h-full relative overflow-hidden group">
        
        {/* Media Background */}
        {item.mediaUrl ? (
          <div className="absolute inset-0 z-0">
            {/* Opacity fade pulled down (less aggressive) */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-bg to-transparent z-10" />
            {item.mediaType === 'video' ? (
              <video 
                src={item.mediaUrl} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover object-center opacity-70 mix-blend-screen"
              />
            ) : (
              <img 
                src={item.mediaUrl} 
                alt={item.title}
                className="w-full h-full object-cover object-center opacity-70 mix-blend-screen"
              />
            )}
          </div>
        ) : (
          <div className="absolute -bottom-10 -right-10 text-[150px] opacity-5 grayscale transition-all duration-700 -rotate-12 z-0">
            {item.icon}
          </div>
        )}
        
        {/* Card Content */}
        <div className={`relative z-10 p-8 md:p-10 h-full flex flex-col min-h-[320px] ${item.mediaUrl ? 'justify-end pt-32' : 'justify-between'}`}>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-text mb-4 border border-border bg-surface/80 backdrop-blur-md px-3 py-1.5 rounded-sm inline-block shadow-sm">
              {item.year}
            </div>
            
            <div className="mb-2">
              {item.title.includes('•') ? (
                <>
                  <h3 style={{ fontFamily: 'var(--font-cursive)' }} className="text-5xl md:text-6xl text-text font-normal mb-1">
                    {item.title.split('•')[0].trim()}
                  </h3>
                  <p className="text-xl md:text-2xl font-bold text-text drop-shadow-sm">
                    {item.title.split('•')[1].trim()}
                  </p>
                </>
              ) : (
                <h3 className="text-3xl md:text-4xl font-bold text-text drop-shadow-sm">
                  {item.title}
                </h3>
              )}
            </div>
            
            {item.description && (
              <p className={`text-muted leading-relaxed mt-2 ${item.mediaUrl ? 'text-xs md:text-sm max-w-full font-light' : 'text-sm md:text-base max-w-[85%]'}`}>
                {item.description}
              </p>
            )}
          </div>
          
          {!item.mediaUrl && (
            <div className="mt-8">
              <span className="text-4xl md:text-5xl drop-shadow-lg block">
                {item.icon}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function DesktopAchievementsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} id="achievements" className="relative h-[400vh] bg-surface/30">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden border-t border-border">
        <HaloBackground />
        
        <div className="absolute top-24 left-0 w-full px-6 max-w-6xl mx-auto flex flex-col items-center justify-center z-10 pointer-events-none">
          <div className="font-mono text-sm text-accent mb-2">(05) MILESTONES</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">Honors & Achievements</h2>
          <p className="text-muted font-mono text-xs uppercase tracking-widest mt-4 animate-pulse">
            &darr; Keep scrolling &darr;
          </p>
        </div>

        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {achievementsData.map((item, index) => (
            <ScatteredCard 
              key={item.id} 
              item={item} 
              index={index} 
              total={achievementsData.length} 
              progress={smoothProgress} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function MobileAchievementsSection() {
  return (
    <section id="achievements-mobile" className="py-24 px-6 md:hidden bg-bg border-t border-border">
      <div className="font-mono text-sm text-accent mb-2">(05) MILESTONES</div>
      <h2 className="text-3xl font-bold tracking-tight mb-16 text-text">Honors & Achievements</h2>

      <div className="space-y-8 relative">
        {achievementsData.map((item, index) => (
          <div key={item.id} className="relative p-6 bg-surface border border-border rounded-2xl shadow-sm">
            <div className="font-mono text-xs uppercase tracking-widest text-muted mb-2">
              {item.year}
            </div>
            
            <h3 className="text-xl font-bold text-text mb-2">
              {item.title.replace(' • ', ' - ')}
            </h3>
            
            {item.description && (
              <p className="text-muted text-sm leading-relaxed mb-4">
                {item.description}
              </p>
            )}
            
            {item.mediaUrl && item.mediaType === 'image' && (
              <img src={item.mediaUrl} alt={item.title} className="w-full h-auto rounded-lg mt-4 opacity-80" />
            )}
            
            {item.mediaUrl && item.mediaType === 'video' && (
              <video src={item.mediaUrl} autoPlay loop muted playsInline className="w-full h-auto rounded-lg mt-4 opacity-80" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export function AchievementsSection() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);
  
  if (!mounted) return <section id="achievements" className="h-[100vh] bg-bg border-t border-border" />;
  
  return isMobile ? <MobileAchievementsSection /> : <DesktopAchievementsSection />;
}
