export interface ProjectMetrics {
  label: string;
  value: string;
}

export interface Project {
  id: string; // Used for the URL slug (e.g. "nab-preg-ai")
  title: string;
  tagline: string;
  description: string[]; // Array of paragraphs for the case study
  stack: string[]; // e.g. ["Next.js", "Python", "XGBoost"]
  metrics: ProjectMetrics[]; 
  links: {
    liveUrl?: string;
    githubUrl?: string;
  };
  imageUrl: string;
  features: string[];
  challengesAndLessons: string;
  
  // Case Study specific fields
  problem: string;
  solution: string;
  architectureDiagram?: string;
  screenshots?: string[];
}
