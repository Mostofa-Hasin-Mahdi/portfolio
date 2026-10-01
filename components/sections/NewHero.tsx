'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { IDCard } from '@/components/ui/IDCard';

function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-20 dark:opacity-30">
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full border-2 border-accent/30 border-dashed"
      />
      <motion.div 
        animate={{ rotate: -360 }} 
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full border-[3px] border-accent/20 border-dotted"
      />
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[100vw] h-[100vw] max-w-[1000px] max-h-[1000px] rounded-full border border-accent/10"
      >
        <div className="w-4 h-4 bg-accent/50 rounded-full absolute top-[-8px] left-1/2 -translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
        <div className="w-4 h-4 bg-accent/50 rounded-full absolute bottom-[-8px] left-1/2 -translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
        <div className="w-4 h-4 bg-accent/50 rounded-full absolute left-[-8px] top-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
        <div className="w-4 h-4 bg-accent/50 rounded-full absolute right-[-8px] top-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
      </motion.div>
    </div>
  );
}

export function NewHero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
      <HeroBackground />
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center z-10">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="md:col-span-7 flex flex-col items-start"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="font-mono text-xs text-muted tracking-widest uppercase">
              CSE · Software Engineering · AI
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            MOSTOFA<br />HASIN<br /><span className="text-transparent font-black tracking-normal text-6xl md:text-8xl ml-2" style={{ WebkitTextStroke: "2px var(--color-accent)" }}>MAHDI</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-muted text-lg md:text-xl max-w-md mb-8">
            I build backend systems, APIs, and intelligent software. 
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 font-mono text-xs">
            <Link href="#work" className="px-6 py-3 bg-text text-bg hover:opacity-80 transition-opacity rounded-sm">
              [ VIEW MY WORK ]
            </Link>
            <Link href="#contact" className="px-6 py-3 border border-border hover:bg-surface transition-colors rounded-sm text-text">
              [ GET IN TOUCH ]
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 font-mono text-[10px] text-muted flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Based in Bangladesh · CSE Student · Open to AI, ML, and Software Engineering opportunities
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="md:col-span-5 flex justify-center md:justify-end mt-12 md:mt-0"
        >
          <IDCard />
        </motion.div>
      </div>
    </section>
  );
}
