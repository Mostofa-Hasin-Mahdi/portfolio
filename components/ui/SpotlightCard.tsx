'use client';
import React, { useRef, useState } from 'react';

export function SpotlightCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl bg-surface border border-border shadow-sm group transition-colors duration-300 ${className}`}
    >
      {/* The glowing spotlight border/background effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(6,182,212,0.15), transparent 40%)`,
        }}
      />
      {/* The spotlight border reflection */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 z-0"
        style={{
          opacity,
          boxShadow: `inset 0 0 0 1px rgba(6,182,212,0.3)`
        }}
      />
      
      {/* The content wrapped inside */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
