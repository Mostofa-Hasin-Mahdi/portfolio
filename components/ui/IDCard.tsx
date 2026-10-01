'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export function IDCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const lanyardRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useGSAP(() => {
    // Pendulum swing for the whole assembly (lanyard + card)
    const pendulum = gsap.to(containerRef.current, {
      rotation: 3,
      transformOrigin: '50% -100px', // Pivot from the top of the shortened thread
      ease: 'sine.inOut',
      duration: 2.5,
      yoyo: true,
      repeat: -1,
    });

    const el = containerRef.current;
    if (!el) return;

    const handleMouseEnter = () => pendulum.pause();
    const handleMouseLeave = () => pendulum.play();

    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, { scope: containerRef });

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    gsap.to(cardRef.current, {
      rotationY: isFlipped ? 0 : 180,
      duration: 0.8,
      ease: 'back.out(1.2)'
    });
  };

  return (
    <div ref={containerRef} className="relative flex flex-col items-center group w-64 md:w-80 h-[500px]" style={{ perspective: '1200px' }}>
      
      {/* Lanyard/Thread */}
      <div ref={lanyardRef} className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-5 h-[120px] bg-slate-200 border-l border-r border-slate-300 z-0 flex flex-col items-center shadow-xl">
         {/* Lanyard text pattern */}
         <div className="text-[10px] text-blue-500 font-mono -rotate-90 whitespace-nowrap mt-12 tracking-widest font-bold">
           MHM · MHM
         </div>
      </div>
      
      {/* Lanyard Clip */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-slate-300 rounded-t-full shadow-inner z-20 flex justify-center">
        <div className="w-6 h-2 bg-slate-400 mt-[2px] rounded-sm" />
      </div>

      {/* Card 3D Wrapper */}
      <div 
        ref={cardRef} 
        className="w-full h-[400px] md:h-[450px] relative top-6 z-10 shadow-2xl rounded-xl transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] cursor-pointer" 
        style={{ transformStyle: 'preserve-3d' }}
        onClick={handleFlip}
      >
        {/* FRONT FACE */}
        <div 
          className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-900/40 to-surface border border-border rounded-xl overflow-hidden flex flex-col"
          style={{ backfaceVisibility: 'hidden', transform: 'translateZ(1px)' }}
        >
          {/* Top Pills */}
          <div className="absolute top-4 left-4 z-20">
            <span className="px-2 py-1 bg-accent/20 border border-accent/50 rounded-sm text-[10px] font-mono text-accent font-bold">MHM</span>
          </div>
          <div className="absolute top-4 right-4 z-20">
            <span className="px-2 py-1 bg-green-500/20 border border-green-500/50 rounded-sm text-[10px] font-mono text-green-400 font-bold tracking-widest uppercase">PASS</span>
          </div>

          {/* Image Area */}
          <div className="relative flex-grow w-full mt-10 p-4 pb-0 z-10">
             <div className="w-full h-full relative rounded-t-xl overflow-hidden border border-border shadow-inner bg-bg">
               <Image 
                 src="/assets/PXL_20260816_09094153.png" 
                 alt="Mostofa Hasin Mahdi"
                 fill
                 className="object-cover object-top"
                 sizes="(max-width: 768px) 100vw, 320px"
                 priority
               />
               {/* Cyberpunk Scanner Line Overlay */}
               <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
             </div>
          </div>

          {/* Bottom Wide Border Info Block */}
          <div className="w-full h-[150px] md:h-[160px] bg-surface border-t border-border p-5 flex justify-between relative z-20">
            <div className="flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold tracking-widest text-text uppercase leading-none mb-1">Mostofa Hasin<br/>Mahdi</h3>
              <p className="text-xs text-accent font-mono mb-4 font-bold">Software / AI Engineer</p>
              <p className="text-[9px] md:text-[10px] text-muted font-mono tracking-widest uppercase">SMUCT &middot; CSE &middot; 2022-26</p>
              <p className="text-[9px] md:text-[10px] text-muted font-mono tracking-widest uppercase">Dhaka, Bangladesh</p>
            </div>

            {/* Bottom Right Decoration (Barcode/Chip) */}
            <div className="flex flex-col items-end justify-between">
              {/* Microchip Contact Pad Mock */}
              <div className="w-8 h-10 border border-yellow-500/30 rounded-md grid grid-cols-2 grid-rows-3 gap-[1px] p-[2px] bg-yellow-500/10 shadow-[0_0_10px_rgba(234,179,8,0.2)]">
                <div className="border border-yellow-500/30 rounded-sm bg-yellow-500/5"></div>
                <div className="border border-yellow-500/30 rounded-sm bg-yellow-500/5"></div>
                <div className="border border-yellow-500/30 rounded-sm bg-yellow-500/5"></div>
                <div className="border border-yellow-500/30 rounded-sm bg-yellow-500/5"></div>
                <div className="border border-yellow-500/30 rounded-sm bg-yellow-500/5"></div>
                <div className="border border-yellow-500/30 rounded-sm bg-yellow-500/5"></div>
              </div>
              {/* Barcode Mock */}
              <div className="mt-2 text-right">
                <div className="flex gap-[1px] h-6 w-16 opacity-50 justify-end">
                  <div className="w-1 bg-text h-full" />
                  <div className="w-[2px] bg-text h-full" />
                  <div className="w-2 bg-text h-full" />
                  <div className="w-[1px] bg-text h-full" />
                  <div className="w-[3px] bg-text h-full" />
                  <div className="w-1 bg-text h-full" />
                  <div className="w-[2px] bg-text h-full" />
                </div>
                <p className="text-[7px] font-mono mt-1 text-muted tracking-widest font-bold">ID:0816-MHM</p>
              </div>
            </div>
          </div>
        </div>

        {/* BACK FACE */}
        <div 
          className="absolute inset-0 w-full h-full bg-surface border border-border rounded-xl p-6 md:p-8 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg) translateZ(1px)' }}
        >
          {/* Top row */}
          <div className="flex justify-between items-start">
            <h2 className="text-6xl font-black text-text/30 font-mono tracking-tighter -ml-2 select-none drop-shadow-sm">MHM</h2>
            
            {/* Matrix Dots */}
            <div className="grid grid-cols-4 grid-rows-4 gap-1.5 opacity-30 mt-2">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-accent/80 rounded-full" />
              ))}
            </div>
          </div>

          {/* Middle Content */}
          <div className="flex flex-col gap-1 mt-6 relative z-50 cursor-default" onClick={(e) => e.stopPropagation()}>
            <p className="text-[10px] text-muted font-mono tracking-widest uppercase">Currently</p>
            <h3 className="text-xl md:text-2xl font-bold text-text">CSE student @ SMUCT</h3>
            
            <div className="w-full h-[1px] bg-border my-4" />
            
            <p className="text-[10px] text-muted font-mono tracking-widest uppercase mb-2">Find me</p>
            <a href="https://github.com/Mostofa-Hasin-Mahdi" target="_blank" rel="noreferrer" className="text-[11px] md:text-xs font-mono text-accent hover:underline block mb-2 break-words relative z-50 py-1">github.com/Mostofa-Hasin-Mahdi</a>
            <a href="https://linkedin.com/in/mhmrmahdi/" target="_blank" rel="noreferrer" className="text-[11px] md:text-xs font-mono text-accent hover:underline block mb-2 break-words relative z-50 py-1">linkedin.com/in/mhmrmahdi/</a>
            <a href="mailto:hasinmahdi.hmr@gmail.com" className="text-[11px] md:text-xs font-mono text-accent hover:underline block break-words relative z-50 py-1">hasinmahdi.hmr@gmail.com</a>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-6 flex justify-between items-end">
            <p className="text-[10px] md:text-xs text-muted font-mono uppercase tracking-widest animate-pulse hover:text-text transition-colors">
              &larr; tap to flip back
            </p>
            {/* Fake magnetic stripe or barcode */}
            <div className="w-16 h-8 bg-black/40 rounded-sm border border-white/5" />
          </div>
        </div>

      </div>
    </div>
  );
}
