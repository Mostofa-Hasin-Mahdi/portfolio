import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { ProjectCaseStudy } from "@/components/sections/ProjectCaseStudy";

// Pre-render all project pages at build time
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const projectIndex = projects.findIndex((p) => p.id === slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  // Get next project for navigation (loop back to first if it's the last one)
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main>
      <ProjectCaseStudy project={project} nextProject={nextProject} />
    </main>
  );
}
