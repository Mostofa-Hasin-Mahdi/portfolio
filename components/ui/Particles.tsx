'use client';
import { motion } from 'framer-motion';

export function Particles({ count = 20 }: { count?: number }) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => {
        // Pseudo-random deterministic generation based on index to prevent Hydration mismatches
        const top = ((i * 17) % 100) + "%";
        const left = ((i * 23) % 100) + "%";
        // Increased size drastically to make them visible (4px to 8px)
        const size = ((i * 3) % 5) + 4 + "px";
        const duration = ((i * 5) % 15) + 15;
        const delay = (i * 2) % 10;
        const moveY = (i % 2 === 0 ? -1 : 1) * (((i * 7) % 50) + 50);
        const moveX = (i % 3 === 0 ? -1 : 1) * (((i * 11) % 50) + 50);
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            style={{ top, left, width: size, height: size }}
            animate={{
              y: [0, moveY, 0],
              x: [0, moveX, 0],
              opacity: [0.1, 0.8, 0.1]
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );
      })}
    </div>
  );
}
