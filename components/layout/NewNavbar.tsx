'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function NewNavbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-bg/80 backdrop-blur-md py-3 border-border' 
          : 'bg-transparent py-5 border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between font-mono text-sm tracking-wider">
        <Link href="/" className="font-bold text-lg text-text hover:text-accent hover:scale-105 transition-all">
          MHM
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-xs text-muted">
          <Link href="#work" className="hover:text-text transition-colors">WORK</Link>
          <Link href="#about" className="hover:text-text transition-colors">ABOUT</Link>
          <Link href="#journey" className="hover:text-text transition-colors">JOURNEY</Link>
          <Link href="#contact" className="hover:text-text transition-colors">CONTACT</Link>
          
          {mounted && (
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-1.5 hover:bg-surface rounded-full transition-colors text-text"
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 hidden dark:block" />
              <Moon className="h-4 w-4 block dark:hidden" />
            </button>
          )}
        </nav>

        {/* Mobile Nav Toggle & Theme */}
        <div className="flex md:hidden items-center gap-4">
          {mounted && (
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-1.5 hover:bg-surface rounded-full transition-colors text-text"
            >
              <Sun className="h-4 w-4 hidden dark:block" />
              <Moon className="h-4 w-4 block dark:hidden" />
            </button>
          )}
          <button className="text-xs text-muted hover:text-text transition-colors">
            MENU
          </button>
        </div>
      </div>
    </motion.header>
  );
}
