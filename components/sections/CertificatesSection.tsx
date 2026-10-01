'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificatesData } from '@/lib/certificates';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

export function CertificatesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const velocityRef = useRef(1); // Auto-scroll speed
  const isHoveredRef = useRef(false);

  // Infinite Auto-Scroll Loop
  useEffect(() => {
    let animationFrameId: number;
    const container = scrollRef.current;
    
    const play = () => {
      if (container && !isDragging && !isHoveredRef.current) {
        container.scrollLeft += velocityRef.current;
        
        // Seamless wrap around when reaching the middle (since items are duplicated)
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 1; // Snap back to start seamlessly
        } else if (container.scrollLeft <= 0 && velocityRef.current < 0) {
          container.scrollLeft = container.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(play);
    };
    
    play();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    if (!scrollRef.current) return;
    const pageX = 'touches' in e ? e.touches[0].pageX : (e as React.MouseEvent).pageX;
    setStartX(pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const container = scrollRef.current;
    const pageX = 'touches' in e ? e.touches[0].pageX : (e as React.MouseEvent).pageX;
    const x = pageX - container.offsetLeft;
    const walk = (x - startX) * 2.5; // Scroll-fast multiplier
    
    let newScrollLeft = scrollLeft - walk;
    
    // Wrap around logic while dragging manually
    if (newScrollLeft >= container.scrollWidth / 2) {
      newScrollLeft -= container.scrollWidth / 2;
      setStartX(pageX - container.offsetLeft);
      setScrollLeft(newScrollLeft);
    } else if (newScrollLeft <= 0) {
      newScrollLeft += container.scrollWidth / 2;
      setStartX(pageX - container.offsetLeft);
      setScrollLeft(newScrollLeft);
    }
    
    container.scrollLeft = newScrollLeft;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    setIsDragging(false); // also cancel drag if mouse leaves container
  };



  const renderCard = (cert: typeof certificatesData[0], keyIndex: number) => (
    <div key={`${cert.id}-${keyIndex}`} className="flex-shrink-0 w-[300px] md:w-[500px]">
      <SpotlightCard className="w-full p-2">
        <div 
          className="w-full aspect-[1.414/1] relative rounded-xl overflow-hidden bg-bg group cursor-zoom-in"
          onClick={(e) => {
             // Only open if we are not actively dragging
             if (!isDragging) {
               setSelectedImage(cert.image);
             }
          }}
        >
          {/* The aspect ratio above roughly matches an A4 certificate landscape format (1.414:1) */}
          <img 
            src={cert.image} 
            alt={cert.title}
            className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700" 
          />
          {/* Subtle overlay so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h3 className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">{cert.title}</h3>
            <p className="text-accent text-sm md:text-base font-mono mt-2 drop-shadow-md">{cert.issuer}</p>
            {cert.description && (
              <p className="text-white/80 text-sm mt-3 line-clamp-3 leading-relaxed border-t border-white/20 pt-3">
                {cert.description}
              </p>
            )}
          </div>
        </div>
      </SpotlightCard>
    </div>
  );

  return (
    <section id="certificates" className="py-24 border-t border-border bg-bg overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 mb-16 flex flex-col items-center text-center">
        <div className="font-mono text-sm text-accent mb-2">(06) CREDENTIALS</div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text">Honors & Certificates</h2>
        <p className="text-muted mt-4 text-sm font-mono max-w-lg">
          Hover over the gallery to explore my competitive programming and hackathon milestones.
        </p>
      </div>

      <div 
        ref={scrollRef}
        className={`w-full overflow-x-hidden flex pb-8 scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onTouchStart={(e) => { handleMouseEnter(); handleDragStart(e); }}
        onTouchMove={handleDragMove}
        onTouchEnd={(e) => { handleMouseLeave(); handleDragEnd(); }}
      >
        <div className="flex w-max gap-6 md:gap-8 px-6 md:px-12">
          {certificatesData.map((cert, index) => renderCard(cert, index))}
          {/* Duplicate set for infinite loop illusion */}
          {certificatesData.map((cert, index) => renderCard(cert, index + certificatesData.length))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-12 cursor-zoom-out backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              src={selectedImage}
              className="max-w-full max-h-full object-contain rounded-xl border border-white/10 shadow-2xl"
              alt="Enlarged Certificate"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
