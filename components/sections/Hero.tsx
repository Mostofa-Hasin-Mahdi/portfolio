"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center relative overflow-hidden py-20">
      {/* Optional: subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col max-w-2xl"
        >
          <motion.div variants={itemVariants} className="mb-4 inline-flex">
            <span className="px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-accent">
              Available for full-time roles from Jan 2027
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold tracking-tight text-text mb-4"
          >
            Mostofa Hasan Mahdi
          </motion.h1>

          <motion.h2 
            variants={itemVariants}
            className="text-xl md:text-2xl text-accent font-medium mb-6"
          >
            Software Engineer - AI & Full Stack
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted leading-relaxed mb-4"
          >
            I build intelligent systems that ship from XGBoost clinical predictors to production OCR pipelines.
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-sm text-muted font-mono mb-10"
          >
            Finalist, Infinity AI BuildFest 2026
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accentHover transition-colors focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>

            <a
              href="/assets/Mostofa_Hasin_Mahdi_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface border border-border text-text font-medium hover:border-accent hover:text-accent transition-colors focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
            >
              <Download size={18} />
              Resume
            </a>

            <div className="flex items-center gap-4 ml-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface border border-border text-muted hover:text-accent hover:border-accent transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface border border-border text-muted hover:text-accent hover:border-accent transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative hidden md:block"
        >
          <div className="absolute inset-0 bg-accent rounded-3xl translate-x-4 translate-y-4 -z-10 opacity-50" />
          <div className="relative w-72 h-80 rounded-3xl overflow-hidden border border-border bg-surface">
            <Image
              src="/assets/PXL_20260816_09094153.jpg"
              alt="Mostofa Hasan Mahdi"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 288px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
