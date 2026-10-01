'use client';
import { motion } from "framer-motion";

export function TopographicMap() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.06]">
      <motion.svg 
        viewBox="0 0 1000 1000" 
        className="absolute w-[200vw] h-[200vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-accent fill-none stroke-current"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ 
          rotate: { duration: 250, repeat: Infinity, ease: "linear" },
          scale: { duration: 30, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <g strokeWidth="1.5">
          {/* Main Topographical Node */}
          {Array.from({ length: 40 }).map((_, i) => {
            const r = 20 + i * 25; // Spacing between contour lines
            
            // Introduce pseudo-randomness using sine/cosine waves based on index
            // This creates the organic "warped" look of real topography
            const offset1 = Math.sin(i * 0.5) * 40;
            const offset2 = Math.cos(i * 0.3) * 60;
            const offset3 = Math.sin(i * 0.8) * 50;
            const offset4 = Math.cos(i * 0.4) * 30;

            const d = `
              M 500, ${500 - r}
              C ${500 + r + offset1}, ${500 - r} ${500 + r}, ${500 - r * 0.2 + offset2} ${500 + r}, 500
              C ${500 + r}, ${500 + r - offset3} ${500 + r * 0.2 - offset1}, ${500 + r} 500, ${500 + r}
              C ${500 - r + offset4}, ${500 + r} ${500 - r}, ${500 + r * 0.5 + offset3} ${500 - r}, 500
              C ${500 - r}, ${500 - r * 0.3 - offset2} ${500 - r * 0.5 - offset4}, ${500 - r} 500, ${500 - r}
            `;
            return <path key={i} d={d} className="opacity-80 transition-all duration-1000" />;
          })}
        </g>

        {/* Secondary Topographical Node (Creates a 'valley' or saddle point between them) */}
        <g strokeWidth="1" transform="translate(250, 750) scale(0.6)">
          {Array.from({ length: 25 }).map((_, i) => {
            const r = 20 + i * 25;
            const o1 = Math.cos(i * 0.6) * 30;
            const o2 = Math.sin(i * 0.4) * 40;
            
            const d = `
              M 0, ${-r}
              C ${r + o1}, ${-r} ${r}, ${-r*0.3 + o2} ${r}, 0
              C ${r}, ${r - o1} ${r*0.3 - o2}, ${r} 0, ${r}
              C ${-r + o2}, ${r} ${-r}, ${r*0.5 + o1} ${-r}, 0
              C ${-r}, ${-r*0.5 - o2} ${-r*0.5 - o1}, ${-r} 0, ${-r}
            `;
            return <path key={`node2-${i}`} d={d} className="opacity-60 transition-all duration-1000" />;
          })}
        </g>
      </motion.svg>
    </div>
  );
}
