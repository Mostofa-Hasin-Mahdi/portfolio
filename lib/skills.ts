import { BrainCircuit, Server, Layout, Wrench } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";

export interface SkillGroup {
  title: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  skills: string[];
}

export const skillsData: SkillGroup[] = [
  {
    title: "AI/ML Engineering",
    icon: BrainCircuit,
    skills: ["Python", "XGBoost", "TensorFlow", "scikit-learn", "NLP (spaCy)", "Computer Vision (OCR)"],
  },
  {
    title: "Backend Engineering",
    icon: Server,
    skills: ["Node.js", "FastAPI", "PostgreSQL", "Supabase", "REST APIs", "Prisma ORM"],
  },
  {
    title: "Frontend Engineering",
    icon: Layout,
    skills: ["React.js", "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    skills: ["Git & GitHub", "Docker", "Vercel", "Linux", "CI/CD Actions", "Postman"],
  },
];
