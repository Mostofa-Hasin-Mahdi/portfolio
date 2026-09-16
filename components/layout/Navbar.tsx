"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If we are on the homepage and clicking a hash link
    if (href.startsWith("#")) {
      e.preventDefault();
      setIsOpen(false);
      
      const targetId = href.replace("#", "");
      
      // Use a slight timeout to let the mobile menu close before scrolling
      setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        } else {
          // If not on homepage, navigate to homepage hash
          window.location.href = "/" + href;
        }
      }, 50);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl font-mono font-bold tracking-tighter text-text hover:text-accent transition-colors"
        >
          MHM.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium text-muted hover:text-accent transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-text hover:text-accent transition-colors p-2 -mr-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-b border-border bg-surface overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-base font-medium text-muted hover:text-accent transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
