"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "@/lib/types";
import { GithubIcon } from "@/components/ui/Icons";
import { ImageCarousel } from "@/components/ui/ImageCarousel";

interface ProjectCaseStudyProps {
  project: Project;
  nextProject?: Project;
}

export function ProjectCaseStudy({ project, nextProject }: ProjectCaseStudyProps) {
  return (
    <article className="min-h-screen bg-bg pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 border-b border-border bg-surface/30">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6 tracking-tight">
              {project.title}
            </h1>
            <p className="text-xl text-muted mb-8 max-w-2xl leading-relaxed">
              {project.tagline}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-surface border border-border rounded-md text-sm font-medium text-text"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {project.links.liveUrl && (
                <a
                  href={project.links.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accentHover transition-colors focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
              {project.links.githubUrl && (
                <a
                  href={project.links.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface border border-border text-text font-medium hover:border-accent hover:text-accent transition-colors focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
                >
                  <GithubIcon size={18} />
                  Source Code
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 mt-16 space-y-20">
        {/* Main Image Carousel */}
        {project.imageUrls && project.imageUrls.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-surface shadow-lg"
          >
            <ImageCarousel
              images={project.imageUrls}
              alt={`${project.title} screenshot`}
              className="w-full h-full"
              interval={4000}
            />
          </motion.div>
        )}

        {/* Problem & Solution */}
        <section className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-text mb-4">The Problem</h2>
            <p className="text-muted leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-text mb-4">The Solution</h2>
            <p className="text-muted leading-relaxed">{project.solution}</p>
          </div>
        </section>

        {/* Deep Dive Description */}
        <section>
          <h2 className="text-2xl font-bold text-text mb-6">Overview</h2>
          <div className="space-y-4 text-muted leading-relaxed">
            {project.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Key Features & Metrics */}
        <section className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-text mb-6">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-muted">
                  <span className="text-accent mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-text mb-6">Impact & Metrics</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.metrics.map((metric, index) => (
                  <div key={index} className="p-6 bg-surface border border-border rounded-xl">
                    <div className="text-3xl font-bold text-text mb-1">{metric.value}</div>
                    <div className="text-sm font-medium text-muted uppercase tracking-wider">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Challenges & Lessons */}
        <section className="p-8 bg-surface border border-border rounded-2xl">
          <h2 className="text-2xl font-bold text-text mb-4">Challenges & Lessons Learned</h2>
          <p className="text-muted leading-relaxed">{project.challengesAndLessons}</p>
        </section>

        {/* Next Project Navigation */}
        {nextProject && (
          <section className="pt-12 border-t border-border flex justify-end">
            <Link
              href={`/projects/${nextProject.id}`}
              className="group flex flex-col items-end text-right"
            >
              <span className="text-sm font-medium text-muted mb-2">Next Project</span>
              <span className="text-2xl font-bold text-text group-hover:text-accent transition-colors flex items-center gap-2">
                {nextProject.title}
                <ArrowLeft size={24} className="rotate-180 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          </section>
        )}
      </div>
    </article>
  );
}
