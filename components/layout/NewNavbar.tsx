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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
          
        </nav>

        {/* Mobile Nav Toggle & Theme */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            className="text-xs text-muted hover:text-text transition-colors z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-bg/95 backdrop-blur-xl border-b border-border shadow-2xl overflow-hidden"
        >
          <nav className="flex flex-col items-center py-8 gap-6 text-sm font-mono tracking-widest text-muted">
            <Link href="#work" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-text transition-colors">WORK</Link>
            <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-text transition-colors">ABOUT</Link>
            <Link href="#journey" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-text transition-colors">JOURNEY</Link>
            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-text transition-colors">CONTACT</Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
