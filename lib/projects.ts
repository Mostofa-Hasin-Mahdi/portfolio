import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "nab-preg-ai",
    title: "NAB Preg AI",
    tagline: "Clinical predictor and OCR pipeline for pregnancy data.",
    description: [
      "A comprehensive clinical prediction tool designed to improve maternal health outcomes.",
      "Integrates an OCR pipeline to digitize physical health records instantly."
    ],
    stack: ["Next.js", "Python", "XGBoost", "Tailwind CSS"],
    metrics: [
      { label: "Inference Time", value: "<50ms" },
      { label: "Accuracy", value: "94%" }
    ],
    links: {
      githubUrl: "https://github.com/yourusername/nab-preg-ai"
    },
    imageUrl: "/projects/nab-preg-ai/thumbnail.jpg",
    features: [
      "Real-time OCR extraction from medical forms",
      "XGBoost powered clinical predictions",
      "Secure HIPAA compliant data handling"
    ],
    challengesAndLessons: "Balancing the OCR accuracy with speed required significant tuning of the image preprocessing pipeline before feeding into the text extraction model."
  },
  {
    id: "pdf-to-markdown",
    title: "PDF to Markdown Engine",
    tagline: "Layout detection and NLP based markdown extraction.",
    description: [
      "An engine that accurately parses PDF documents, understanding complex layouts like columns and tables.",
      "Converts the extracted data into clean, semantic Markdown."
    ],
    stack: ["Python", "NLP", "FastAPI"],
    metrics: [
      { label: "Processing Speed", value: "2s / page" },
    ],
    links: {
      githubUrl: "https://github.com/yourusername/pdf-to-markdown"
    },
    imageUrl: "/projects/pdf-to-markdown/thumbnail.jpg",
    features: [
      "Advanced layout boundary detection",
      "Table extraction to Markdown grids",
      "RESTful API for easy integration"
    ],
    challengesAndLessons: "Handling multi-column PDFs was a major roadblock. Implementing a specialized reading-order algorithm solved the issue of text interleaving."
  },
  {
    id: "bizit",
    title: "Bizit Business Suite",
    tagline: "Multi-tenant architecture powered by RLS.",
    description: [
      "A complete business management suite supporting multiple tenants securely.",
      "Built with Supabase for robust Row Level Security and real-time features."
    ],
    stack: ["Next.js", "Supabase", "TypeScript"],
    metrics: [
      { label: "Active Tenants", value: "10+" },
      { label: "Uptime", value: "99.9%" }
    ],
    links: {
      liveUrl: "https://bizit.app",
      githubUrl: "https://github.com/yourusername/bizit"
    },
    imageUrl: "/projects/bizit/thumbnail.jpg",
    features: [
      "Multi-tenant isolation using Supabase RLS",
      "Real-time dashboard analytics",
      "Role-based access control (RBAC)"
    ],
    challengesAndLessons: "Designing the RLS policies in Supabase took meticulous planning to ensure zero data leakage across tenants while maintaining high query performance."
  }
];
