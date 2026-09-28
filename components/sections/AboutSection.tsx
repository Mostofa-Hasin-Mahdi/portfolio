'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Particles } from '@/components/ui/Particles';

function CircuitBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path 
          d="M0,15 L20,15 L25,25 L75,25 L80,15 L100,15" 
          fill="none" 
          stroke="var(--color-accent)" 
          strokeWidth="0.2" 
          strokeDasharray="2 2"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: -100 }} 
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }} 
        />
        <motion.path 
          d="M0,85 L30,85 L35,75 L65,75 L70,85 L100,85" 
          fill="none" 
          stroke="var(--color-accent)" 
          strokeWidth="0.2" 
          initial={{ strokeDashoffset: 100, strokeDasharray: "20 100" }}
          animate={{ strokeDashoffset: -100 }} 
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }} 
        />
        <motion.path 
          d="M15,0 L15,30 L25,40 L25,60 L15,70 L15,100" 
          fill="none" 
          stroke="var(--color-accent)" 
          strokeWidth="0.3" 
          initial={{ strokeDashoffset: 100, strokeDasharray: "10 50" }}
          animate={{ strokeDashoffset: -100 }} 
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }} 
        />
        <motion.path 
          d="M85,0 L85,20 L75,30 L75,70 L85,80 L85,100" 
          fill="none" 
          stroke="var(--color-accent)" 
          strokeWidth="0.2" 
          initial={{ strokeDashoffset: -100, strokeDasharray: "5 20" }}
          animate={{ strokeDashoffset: 100 }} 
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }} 
        />
      </svg>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden border-t border-border bg-surface/30">
      <CircuitBackground />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:col-span-4"
        >
          <div className="font-mono text-sm text-accent mb-4">(01) ABOUT</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 flex items-baseline gap-2">
            I'm <span style={{ fontFamily: 'var(--font-cursive)' }} className="text-accent text-5xl md:text-7xl font-normal tracking-normal px-1">Mahdi</span>.
          </h2>

          <div className="bg-bg border border-border p-6 rounded-sm font-mono text-xs space-y-6">
            <div>
              <div className="text-muted mb-1">EDUCATION</div>
              <div className="text-text">BSc in Computer Science & Engineering</div>
            </div>
            <div>
              <div className="text-muted mb-1">FOCUS</div>
              <div className="text-text">Backend Engineering<br/>Applied AI / ML<br/>Systems</div>
            </div>
            <div>
              <div className="text-muted mb-1">LOCATION</div>
              <div className="text-text">Bangladesh</div>
            </div>
            <div>
              <div className="text-muted mb-1">STATUS</div>
              <div className="text-accent flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Graduating · Open to opportunities
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="md:col-span-8 prose prose-invert max-w-none text-muted"
        >
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            I'm a Computer Science student focused on backend engineering and applied AI.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            I enjoy understanding how systems work, from APIs and databases to networking, deployment, and machine learning pipelines.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            I've built web applications, backend systems, desktop/mobile projects, and AI experiments, and I'm currently working toward becoming a stronger production-oriented software engineer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
