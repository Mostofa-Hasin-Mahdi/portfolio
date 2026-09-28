'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/lib/types';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.89c.15-.38.65-1.84-.15-3.84 0 0-1.2-.38-3.9 1.45a13.3 13.3 0 0 0-7 0c-2.7-1.83-3.9-1.45-3.9-1.45a5.4 5.4 0 0 0-.15 3.84 5.5 5.5 0 0 0-1.5 3.89c0 5.23 3 6.42 6 6.76A4.8 4.8 0 0 0 3 18.24V22" />
  </svg>
);

function ThematicBackground({ projectId }: { projectId: string }) {
  if (projectId === 'nab-preg-ai') {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-15 dark:opacity-20">
        <svg viewBox="0 0 100 100" className="absolute top-0 right-10 w-[400px] h-[400px] text-accent fill-none stroke-current" strokeWidth="0.5">
          {/* Neural Network Nodes & Links */}
          <motion.circle cx="20" cy="50" r="2" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
          <circle cx="50" cy="30" r="2" />
          <motion.circle cx="50" cy="70" r="2" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} />
          <motion.circle cx="80" cy="50" r="2" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, delay: 1, repeat: Infinity }} />
          <motion.path d="M22 50 L48 30 M22 50 L48 70 M52 30 L78 50 M52 70 L78 50" strokeDasharray="2 2" animate={{ strokeDashoffset: [0, -10] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
          <path d="M10 50 Q 50 10, 90 50 T 10 50" />
        </svg>
      </div>
    );
  }
  if (projectId === 'pdf-to-markdown') {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-15 dark:opacity-20">
        <svg viewBox="0 0 100 100" className="absolute -top-10 right-20 w-[300px] h-[300px] text-accent fill-none stroke-current" strokeWidth="0.5">
          {/* Grid Layout Detection */}
          <rect x="20" y="20" width="60" height="60" />
          <line x1="20" y1="40" x2="80" y2="40" />
          <line x1="20" y1="60" x2="80" y2="60" />
          <line x1="50" y1="20" x2="50" y2="80" />
          <motion.rect x="25" y="25" width="20" height="10" strokeDasharray="1 1" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity }} />
          <motion.rect x="55" y="45" width="20" height="10" strokeDasharray="1 1" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, delay: 1.5, repeat: Infinity }} />
          {/* Scanning line */}
          <motion.line x1="20" x2="80" stroke="currentColor" strokeWidth="1" animate={{ y1: [20, 80, 20], y2: [20, 80, 20], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
        </svg>
      </div>
    );
  }
  if (projectId === 'bizit') {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-15 dark:opacity-20">
        <svg viewBox="0 0 100 100" className="absolute top-5 right-0 w-[450px] h-[450px] text-accent fill-none stroke-current" strokeWidth="0.2">
          {/* Multi-tenant Database / Server Nodes */}
          <motion.circle cx="50" cy="50" r="40" strokeDasharray="4 4" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "50px 50px" }} />
          <circle cx="50" cy="50" r="30" />
          <rect x="42" y="42" width="16" height="16" />
          <motion.line x1="50" y1="10" x2="50" y2="20" animate={{ strokeWidth: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity }} />
          <motion.line x1="50" y1="80" x2="50" y2="90" animate={{ strokeWidth: [0.2, 1, 0.2] }} transition={{ duration: 2, delay: 1, repeat: Infinity }} />
          <motion.line x1="10" y1="50" x2="20" y2="50" animate={{ strokeWidth: [0.2, 1, 0.2] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} />
          <motion.line x1="80" y1="50" x2="90" y2="50" animate={{ strokeWidth: [0.2, 1, 0.2] }} transition={{ duration: 2, delay: 1.5, repeat: Infinity }} />
        </svg>
      </div>
    );
  }
  if (projectId === 'porapao') {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-15 dark:opacity-20">
        <svg viewBox="0 0 100 100" className="absolute top-10 right-20 w-[250px] h-[250px] text-accent fill-none stroke-current" strokeWidth="0.5">
          {/* Student/Tutor Connectivity */}
          <motion.circle cx="30" cy="30" r="10" animate={{ r: [10, 12, 10] }} transition={{ duration: 2, repeat: Infinity }} />
          <motion.circle cx="70" cy="70" r="10" animate={{ r: [10, 12, 10] }} transition={{ duration: 2, delay: 1, repeat: Infinity }} />
          <motion.path d="M37 37 Q 50 30, 63 63" strokeDasharray="2 2" animate={{ strokeDashoffset: [0, -10] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
          <path d="M25 40 L35 40 M65 80 L75 80" />
        </svg>
      </div>
    );
  }
  return null;
}

export function ProjectCaseStudy({ project, index }: { project: Project, index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const num = (index + 1).toString().padStart(2, '0');

  useEffect(() => {
    if (!isOpen || !project.imageUrls || project.imageUrls.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.imageUrls!.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isOpen, project.imageUrls]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="p-[1px] mb-8 rounded-2xl bg-border hover:bg-gradient-to-r hover:from-accent hover:via-purple-500 hover:to-emerald-400 transition-all duration-300 group relative"
    >
      <div className="bg-surface relative z-10 w-full h-full overflow-hidden rounded-2xl">
      <ThematicBackground projectId={project.id} />

      {/* Header / collapsed state */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="px-8 py-12 md:px-12 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10"
      >
        <div className="flex items-start gap-8">
          <span className="font-mono text-xl md:text-2xl text-muted group-hover:text-accent transition-colors">
            {num}
          </span>
          <div>
            <h3 className="text-3xl md:text-5xl font-bold text-text mb-4 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-lg text-muted max-w-2xl">{project.tagline}</p>
            <div className="flex flex-wrap gap-3 mt-6">
              {project.stack.map(tech => (
                <span key={tech} className="font-mono text-xs text-text bg-surface px-3 py-1 border border-border">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
            <ArrowRight className="w-8 h-8 text-muted group-hover:text-accent transition-colors" />
          </motion.div>
        </div>
      </div>

      {/* Expanded State */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden relative z-10"
          >
            <div className="px-8 pb-12 pt-4 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-8">
                {project.imageUrls && project.imageUrls.length > 0 && (
                  <div className="relative w-full aspect-video border border-border mb-8 bg-surface overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute inset-0"
                      >
                        <Image 
                          src={project.imageUrls[currentImageIndex]} 
                          alt={project.title} 
                          fill 
                          className="object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}
                <div className="space-y-8 text-muted">
                  <div>
                    <h4 className="text-text font-bold mb-2">THE PROBLEM</h4>
                    <p className="leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-text font-bold mb-2">THE SOLUTION</h4>
                    <p className="leading-relaxed">{project.solution}</p>
                  </div>
                  {project.challengesAndLessons && (
                    <div>
                      <h4 className="text-text font-bold mb-2">CHALLENGES & LESSONS</h4>
                      <p className="leading-relaxed">{project.challengesAndLessons}</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="md:col-span-4 space-y-8 font-mono text-sm">
                <div>
                  <h4 className="text-text font-bold mb-4 font-sans tracking-wider text-xs">METRICS</h4>
                  <ul className="space-y-4">
                    {project.metrics?.map((m, i) => (
                      <li key={i} className="border-b border-border pb-2">
                        <span className="block text-muted text-xs mb-1">{m.label}</span>
                        <span className="text-accent text-lg">{m.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-text font-bold mb-4 font-sans tracking-wider text-xs">LINKS</h4>
                  <div className="flex gap-4">
                    {project.links?.githubUrl && (
                      <a href={project.links.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                        <GithubIcon className="w-4 h-4" /> Code
                      </a>
                    )}
                    {project.links?.liveUrl && (
                      <a href={project.links.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                        <ExternalLink className="w-4 h-4" /> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            </motion.div>
        )}
      </AnimatePresence>
      </div>
    </motion.div>
  );
}
