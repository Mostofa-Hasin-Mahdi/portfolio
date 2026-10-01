'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}
import { useIsMobile } from '@/hooks/useIsMobile';
import { TopographicMap } from '@/components/ui/TopographicMap';

const journeyMilestones = [
  { year: "2022", title: "Started CSE", desc: "Began BSc in Computer Science. Discovered a passion for algorithms and systems." },
  { year: "2023", title: "Foundations & Contests", desc: "Data Structures, OOP, and databases. Participated in ICPC and IUPC prelims." },
  { year: "2024", title: "Web & Backend", desc: "Built full-stack platforms and learned FastAPI, React, and PostgreSQL." },
  { year: "2025", title: "AI & ML Integration", desc: "Shifted focus to intelligent systems, Deepfake Detection, and NAB Preg AI." },
  { year: "2026", title: "Software Engineering", desc: "Thesis completion and preparing for graduation. Ready for production roles." },
];

export function DesktopJourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const bgTrackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!trackRef.current || !containerRef.current || !bgTrackRef.current) return;
    
    // We want the track to scroll exactly enough to show the last item.
    const totalScroll = trackRef.current.scrollWidth - window.innerWidth;
    
    // Calculate exact background scroll needed to sync first and last items perfectly
    const bgTotalScroll = bgTrackRef.current.scrollWidth - window.innerWidth;
    
    // 1. Main Horizontal Scroll
    const scrollTween = gsap.to(trackRef.current, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        pin: true,
        scrub: 1,
        end: () => "+=" + totalScroll * 1.5, // 1.5x for smoother/longer scroll
      }
    });

    // 2. Background Parallax (Perfect Sync)
    gsap.to(bgTrackRef.current, {
      x: -bgTotalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        scrub: 1,
        end: () => "+=" + totalScroll * 1.5,
      }
    });

    // 3. 3D Card Fan Effect (Unified Timeline)
    cardRefs.current.forEach((card) => {
      if (!card) return;
      
      // Initial state: tilted away to the right, scaled down
      gsap.set(card, { 
        rotationY: -45, 
        scale: 0.5, 
        opacity: 0.1, 
        transformPerspective: 1200 
      });

      // Unified timeline to prevent fighting ScrollTriggers
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          containerAnimation: scrollTween,
          start: "left 100%", // Starts when left edge enters screen
          end: "right 0%",    // Ends when right edge leaves screen
          scrub: true,
        }
      });

      // First half: Enter and Center
      tl.to(card, {
        rotationY: 0,
        scale: 1,
        opacity: 1,
        ease: "power1.inOut"
      })
      // Second half: Exit and Fade
      .to(card, {
        rotationY: 45,
        scale: 0.5,
        opacity: 0.1,
        ease: "power1.inOut"
      });
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="journey" className="relative h-screen bg-bg hidden md:block border-t border-border overflow-hidden">
      
      {/* Fixed Header */}
      <div className="absolute top-24 left-6 md:left-24 w-full z-30 pointer-events-none">
        <div className="font-mono text-sm text-accent mb-2">(02) JOURNEY</div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">How I Got Here</h2>
      </div>

      {/* TOPOGRAPHIC BACKGROUND MAP */}
      <TopographicMap />

      {/* BACKGROUND LAYER (Parallax Years) */}
      <div ref={bgTrackRef} className="absolute top-0 left-0 h-full flex items-center justify-between pl-[50vw] pr-[50vw] z-0 opacity-10 pointer-events-none w-max gap-[30vw]">
        {journeyMilestones.map((item, index) => (
          <div 
            key={`bg-${index}`} 
            className="text-[250px] md:text-[350px] font-black text-transparent tracking-tighter shrink-0"
            style={{ WebkitTextStroke: "2px var(--color-text)" }}
          >
            {item.year}
          </div>
        ))}
      </div>

      {/* FOREGROUND LAYER (Timeline Cards) */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center z-20 overflow-visible">
        <div ref={trackRef} className="flex gap-[10vw] pl-[50vw] pr-[50vw] items-center h-full w-max">
          {journeyMilestones.map((item, index) => (
            <div 
              key={`card-${index}`} 
              ref={el => { cardRefs.current[index] = el; }}
              className="flex-shrink-0 w-[400px] flex flex-col items-center justify-center text-center p-8 relative bg-surface/40 backdrop-blur-sm border border-border/50 rounded-3xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="w-4 h-4 bg-accent rotate-45 mb-6 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
              <div className="text-xl font-mono text-accent mb-2">{item.year}</div>
              <h3 className="text-2xl font-bold text-text mb-4">{item.title}</h3>
              <p className="text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export function MobileJourneyTimeline() {
  return (
    <section id="journey" className="py-24 px-6 md:hidden bg-bg border-t border-border">
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

export function JourneyTimeline() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);
  
  if (!mounted) return <section id="journey" className="h-[100vh] bg-bg border-t border-border" />; // Placeholder
  
  return isMobile ? <MobileJourneyTimeline /> : <DesktopJourneyTimeline />;
}
