"use client";

import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

function SignalBeacon() {
  return (
    <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-30 dark:opacity-40">
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-accent shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{ width: "200vw", height: "200vw", opacity: 0 }}
          transition={{ duration: 12, repeat: Infinity, delay: i * 3, ease: "linear" }}
        />
      ))}
    </div>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-bg border-t border-border/50 relative overflow-hidden">
      <SignalBeacon />
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-surface border border-accent/20 text-accent text-sm font-medium mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            Available for full-time roles
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 tracking-tight">
            Let's build something great.
          </h2>
          
          <p className="text-lg text-muted mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, 
            my inbox is always open. I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:hasinmahdi.hmr@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-medium text-lg hover:bg-accentHover transition-all hover:-translate-y-1 hover:shadow-lg focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
            >
              <Mail size={20} />
              Say Hello
            </a>

            <a
              href="/assets/Mostofa_Hasin_Mahdi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-surface border border-border text-text font-medium text-lg hover:border-accent hover:text-accent transition-all hover:-translate-y-1 focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
            >
              <Download size={20} />
              Resume
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/Mostofa-Hasin-Mahdi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-surface border border-border text-muted hover:text-accent hover:border-accent hover:scale-110 transition-all shadow-sm"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mhmrmahdi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-surface border border-border text-muted hover:text-accent hover:border-accent hover:scale-110 transition-all shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
