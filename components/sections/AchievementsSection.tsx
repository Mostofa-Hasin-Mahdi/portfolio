'use client';

import { useRef, useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import { achievementsData } from '@/lib/achievements';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

function HaloBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-10 dark:opacity-20">
      <div className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] border border-accent rounded-full flex items-center justify-center animate-spin-slow">
        <div className="w-[140%] h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent absolute" />
        <div className="w-[1px] h-[140%] bg-gradient-to-b from-transparent via-accent to-transparent absolute" />
      </div>
      <div className="absolute w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] border border-accent/30 rounded-full flex items-center justify-center border-dashed animate-reverse-spin" />
    </div>
  );
}

export function DesktopAchievementsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const cards = cardRefs.current.filter(Boolean);
    
    // Initial State: All cards pushed offscreen to the bottom
    gsap.set(cards, { 
      y: window.innerHeight, 
      scale: 1,
      opacity: 1,
      rotationX: 15,
      transformPerspective: 1000
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => "+=" + (window.innerHeight * cards.length * 0.8),
        scrub: 1,
        pin: true,
      }
    });

    cards.forEach((card, i) => {
      // Base stacking position
      const stackedY = -150 + (i * 20); 

      // 1. Current card slides up and snaps flat
      tl.to(card, {
        y: stackedY,
        rotationX: 0,
        ease: "power2.out",
        duration: 1
      });

      // 2. Previously stacked cards push back, scale down, and dim (Focus Glow effect)
      if (i > 0) {
        for (let j = 0; j < i; j++) {
           tl.to(cards[j], {
             scale: 1 - 0.05 * (i - j), // shrink 5% per layer back
             opacity: Math.max(0.2, 1 - 0.3 * (i - j)), // dim but don't disappear fully
             y: -150 + (j * 20) - ((i - j) * 10), // push up slightly more
             ease: "power2.out",
             duration: 1
           }, "<"); // sync perfectly with the current card sliding up
        }
      }
    });
    
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="achievements" className="relative h-screen bg-bg border-t border-border overflow-hidden hidden md:block">
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center">
        <HaloBackground />
        
        <div className="absolute top-24 left-0 w-full px-6 max-w-6xl mx-auto flex flex-col items-center justify-center z-10 pointer-events-none">
          <div className="font-mono text-sm text-accent mb-2">(05) MILESTONES</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">Honors & Achievements</h2>
          <p className="text-muted font-mono text-xs uppercase tracking-widest mt-4 animate-pulse">
            &darr; Keep scrolling to stack &darr;
          </p>
        </div>

        <div className="relative w-full h-full flex items-center justify-center mt-32">
          {achievementsData.map((item, index) => (
            <div
              key={item.id}
              ref={el => { cardRefs.current[index] = el; }}
              className="absolute w-[80vw] max-w-[600px] p-[1px] rounded-2xl bg-border shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              style={{ zIndex: index }}
            >
              <div className="bg-surface rounded-2xl h-full relative overflow-hidden group border border-border/50">
                
                {/* Media Background */}
                {item.mediaUrl ? (
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent z-10" />
                    <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-surface to-transparent z-10" />
                    {item.mediaType === 'video' ? (
                      <video 
                        src={item.mediaUrl} autoPlay loop muted playsInline
                        className="w-full h-full object-cover object-center opacity-80 mix-blend-screen"
                      />
                    ) : (
                      <img 
                        src={item.mediaUrl} alt={item.title}
                        className="w-full h-full object-cover object-center opacity-80 mix-blend-screen"
                      />
                    )}
                  </div>
                ) : (
                  <div className="absolute -bottom-10 -right-10 text-[180px] opacity-[0.03] grayscale transition-all duration-700 -rotate-12 z-0">
                    {item.icon}
                  </div>
                )}
                
                {/* Card Content */}
                <div className={`relative z-10 p-10 h-full flex flex-col min-h-[350px] ${item.mediaUrl ? 'justify-end pt-32' : 'justify-between'}`}>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-accent mb-4 border border-accent/20 bg-accent/10 px-3 py-1.5 rounded inline-block">
                      {item.year}
                    </div>
                    
                    <div className="mb-3">
                      {item.title.includes('•') ? (
                        <>
                          <h3 className="text-3xl font-black text-text mb-1 tracking-tight">
                            {item.title.split('•')[0].trim()}
                          </h3>
                          <p className="text-xl font-medium text-muted">
                            {item.title.split('•')[1].trim()}
                          </p>
                        </>
                      ) : (
                        <h3 className="text-3xl font-black text-text tracking-tight">
                          {item.title}
                        </h3>
                      )}
                    </div>
                    
                    {item.description && (
                      <p className="text-muted/80 leading-relaxed mt-4 text-sm font-light max-w-[90%]">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
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
