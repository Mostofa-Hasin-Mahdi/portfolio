'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { certificatesData } from '@/lib/certificates';

// Register the GSAP plugin for React
gsap.registerPlugin(useGSAP);

export function CertificatesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {
    if (!trackRef.current) return;
    
    // We animate the track to -50% because it contains two identical sets (each 50% of total width)
    tweenRef.current = gsap.to(trackRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 35, // Adjust this value to make the carousel slower or faster
      repeat: -1,
    });
  }, { scope: containerRef });

  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.play();
  };

  const renderCard = (cert: typeof certificatesData[0], keyIndex: number) => (
    <div 
      key={`${cert.id}-${keyIndex}`} 
      className="flex-shrink-0 w-[300px] md:w-[500px] p-2 bg-surface rounded-2xl border border-border shadow-sm group hover:border-accent hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500"
    >
      <div className="w-full aspect-[1.414/1] relative rounded-xl overflow-hidden bg-bg">
        {/* The aspect ratio above roughly matches an A4 certificate landscape format (1.414:1) */}
        <img 
          src={cert.image} 
          alt={cert.title}
          className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700" 
        />
        {/* Subtle overlay so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <h3 className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">{cert.title}</h3>
          <p className="text-accent text-sm md:text-base font-mono mt-2 drop-shadow-md">{cert.issuer}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="certificates" className="py-24 border-t border-border bg-bg overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 mb-16 flex flex-col items-center text-center">
        <div className="font-mono text-sm text-accent mb-2">(06) CREDENTIALS</div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text">Awards & Certificates</h2>
        <p className="text-muted mt-4 text-sm font-mono max-w-lg">
          Hover over the gallery to explore my competitive programming and hackathon milestones.
        </p>
      </div>

      <div ref={containerRef} className="w-full overflow-hidden flex cursor-grab active:cursor-grabbing">
        <div 
          ref={trackRef} 
          className="flex w-max gap-6 md:gap-8 px-3 md:px-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
        >
          {/* We map the array twice to create a seamless infinite loop */}
          {certificatesData.map((cert) => renderCard(cert, 1))}
          {certificatesData.map((cert) => renderCard(cert, 2))}
        </div>
      </div>
    </section>
  );
}
