import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Project } from "@/lib/types";
import { GithubIcon } from "@/components/ui/Icons";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <SpotlightCard className="group flex flex-col h-full hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-accent/10">
      {/* Thumbnail Container */}
      <div className="relative h-64 w-full bg-[#111113] overflow-hidden flex items-end justify-center px-6 pt-6">
        
        {/* Mock Screen (Browser / OS Window) */}
        <div className="w-full h-full relative rounded-t-lg bg-bg border border-border border-b-0 shadow-2xl overflow-hidden flex flex-col group-hover:-translate-y-2 transition-transform duration-500">
          
          {/* Screen Header (Traffic Lights) */}
          <div className="h-5 w-full bg-surface border-b border-border flex items-center px-2.5 gap-1.5 shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-red-500/80 transition-colors duration-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-yellow-500/80 transition-colors duration-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-green-500/80 transition-colors duration-500" />
          </div>
          
          {/* Screen Content */}
          <div className="relative flex-grow w-full overflow-hidden">
            {project.imageUrls && project.imageUrls.length > 0 ? (
              <ImageCarousel
                images={project.imageUrls}
                alt={project.title}
                className="w-full h-full"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-muted text-xs font-mono">
                [ No visual data ]
              </div>
            )}
          </div>
        </div>
        
        {/* Metric Highlight Overlay */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="absolute top-4 right-4 bg-bg/90 backdrop-blur-sm border border-border px-3 py-1.5 rounded-full text-xs font-mono font-medium text-text shadow-lg">
            <span className="text-accent mr-1">{project.metrics[0].label}:</span>
            {project.metrics[0].value}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
          {project.tagline}
        </p>

        {/* Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-bg border border-border rounded-md text-xs font-medium text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-text hover:text-accent transition-colors"
          >
            View Case Study
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="flex items-center gap-3">
            {project.links.githubUrl && (
              <a
                href={project.links.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="GitHub Repository"
              >
                <GithubIcon size={18} />
              </a>
            )}
            {project.links.liveUrl && (
              <a
                href={project.links.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
