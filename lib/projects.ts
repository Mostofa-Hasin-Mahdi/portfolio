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
    stack: ["Mistral AI", "Python", "XGBoost", "MultiOutputClassifier"],
    metrics: [
      { label: "Inference Time", value: "<50ms" },
      { label: "Accuracy", value: "94%" }
    ],
    links: {
      githubUrl: "https://github.com/yourusername/nab-preg-ai"
    },
    imageUrls: [
      "/assets/nabpreg/Screenshot 2026-09-13 220550.png",
      "/assets/nabpreg/Screenshot 2026-09-13 220620.png",
      "/assets/nabpreg/Screenshot 2026-09-13 220716.png",
      "/assets/nabpreg/Screenshot 2026-09-13 221206.png"
    ],
    features: [
      "Real-time OCR extraction from medical forms",
      "XGBoost powered clinical predictions",
      "Secure HIPAA compliant data handling"
    ],
    challengesAndLessons: "Balancing the OCR accuracy with speed required significant tuning of the image preprocessing pipeline before feeding into the text extraction model.",
    problem: "Manual entry of clinical pregnancy data is slow, error-prone, and delays critical predictive care for expecting mothers.",
    solution: "Developed an automated pipeline that uses OCR to digitize physical forms and feeds the structured data into an XGBoost model for real-time risk prediction."
  },
  {
    id: "pdf-to-markdown",
    title: "PDF to Markdown Engine",
    tagline: "Layout detection and NLP based markdown extraction.",
    description: [
      "An engine that accurately parses PDF documents, understanding complex layouts like columns and tables.",
      "Converts the extracted data into clean, semantic Markdown."
    ],
    stack: ["Python", "spaCy", "FastAPI", "PyTesseract"],
    metrics: [
      { label: "Processing Speed", value: "2s / page" },
    ],
    links: {
      githubUrl: "https://github.com/yourusername/pdf-to-markdown"
    },
    imageUrls: [
      "/assets/pdf2md/Screenshot 2026-09-13 221836.png",
      "/assets/pdf2md/Screenshot 2026-09-13 221926.png",
      "/assets/pdf2md/Screenshot 2026-09-13 221947.png"
    ],
    features: [
      "Advanced layout boundary detection",
      "Table extraction to Markdown grids",
      "RESTful API for easy integration"
    ],
    challengesAndLessons: "Handling multi-column PDFs was a major roadblock. Implementing a specialized reading-order algorithm solved the issue of text interleaving.",
    problem: "Extracting structured text from PDFs typically breaks layouts, making it impossible to pass clean data to LLMs or Markdown editors.",
    solution: "Built a robust NLP engine using PyTesseract and spaCy that detects layout boundaries first, preserving columns and tables before text extraction."
  },
  {
    id: "bizit",
    title: "Bizit Business Suite",
    tagline: "Multi-tenant SaaS all in one solution for SMEs.",
    description: [
      "A complete business management suite supporting multiple tenants securely.",
      "Built with Supabase for robust Row Level Security and real-time features."
    ],
    stack: ["SaaS", "React.js", " FastAPI", "PostgreSQL"],
    metrics: [
      { label: "Active Tenants", value: "10+" },
      { label: "Uptime", value: "99.9%" }
    ],
    links: {
      liveUrl: "https://bizit.app",
      githubUrl: "https://github.com/yourusername/bizit"
    },
    imageUrls: [
      "/assets/Bizit/Screenshot 2026-02-21 011924.png",
      "/assets/Bizit/Screenshot 2026-02-21 012105.png",
      "/assets/Bizit/Screenshot 2026-02-21 012416.png",
      "/assets/Bizit/Screenshot 2026-02-21 012443.png",
      "/assets/Bizit/Screenshot 2026-02-21 012516.png",
      "/assets/Bizit/Screenshot 2026-02-21 012542.png",
      "/assets/Bizit/Screenshot 2026-02-21 012607.png"
    ],
    features: [
      "Multi-tenant isolation using Supabase RLS",
      "Real-time dashboard analytics",
      "Role-based access control (RBAC)"
    ],
    challengesAndLessons: "Designing the RLS policies in Supabase took meticulous planning to ensure zero data leakage across tenants while maintaining high query performance.",
    problem: "Small businesses need a unified suite for management but existing enterprise solutions are too expensive and complex.",
    solution: "Created a scalable, multi-tenant SaaS application that isolates tenant data securely at the database level using PostgreSQL Row Level Security."
  },
  
];
