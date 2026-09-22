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
      liveUrl: "https://nab-preg-ai-ai-powered-maternal-ris.vercel.app",
      githubUrl: "https://github.com/Rayied991/NAB-Preg-AI--AI-Powered-Maternal-Risk-Intelligence-Platform"
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
      "RAG Clinical Assistant "
    ],
    challengesAndLessons: "Balancing the OCR accuracy with speed required significant tuning of the image preprocessing pipeline before feeding into the text extraction model. Also fine tuning ML model on nutrition, anemia, Bangladesh Maternal Registry to provide accurate prediction results as per region data.",
    problem: "68% of maternal deaths in Bangladesh occur in rural areas with limited healthcare access. Late detection of complications like pre-eclampsia, anemia, and gestational diabetes. Manual monitoring is time-consuming (3-5 days for paper processing) and error-prone. Model blindness in existing AI systems fails to flag critical cases due to biased training data",
    solution: "We built an AI-Powered Platform that Predicts maternal risk in near real-time. Extracts medical data from uploaded prescriptions using a hybrid OCR pipeline with AI-assisted structured extraction. Provides clinical decision support via RAG-powered assistant (WHO/UNICEF guidelines). Generates automated village interventions using LangGraph multi-agent orchestration. Visualizes geographic risk patterns with interactive knowledge graphs. Operates autonomously via APScheduler (startup + periodic refresh) with zero manual intervention"
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
      githubUrl: "https://github.com/Mostofa-Hasin-Mahdi/pdf2markdown"
    },
    imageUrls: [
      "/assets/pdf2md/Screenshot 2026-09-13 221836.png",
      "/assets/pdf2md/Screenshot 2026-09-13 221926.png",
      "/assets/pdf2md/Screenshot 2026-09-13 221947.png"
    ],
    features: [
      "Advanced layout boundary detection",
      "Table extraction to Markdown grids",
      "Easy dumping of md files after extraction"
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
      liveUrl: "https://bizit-business-suite.vercel.app",
      githubUrl: "https://github.com/Mostofa-Hasin-Mahdi/Bizit"
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
  {
    id: "porapao",
    title: "Pora Pao",
    tagline: "Multi-tenant platofrm for connecting private tutors with their students.",
    description: [
      "A modern, mobile-first, completely serverless web application that connects private tutors with their students through an intuitive platform.",
      "Built with React, Vite, and Supabase"
    ],
    stack: ["React.js", " Supabase", "PostgreSQL"],
    metrics: [
      { label: "Active Users", value: "5+" },
      { label: "Reduction in Student Onboarding Time", value: "90%" }
    ],
    links: {
      liveUrl: "https://pora-pao.vercel.app",
      githubUrl: "https://github.com/Mostofa-Hasin-Mahdi/pora-pao"
    },
    imageUrls: [
      "/assets/porapao/1.png",
      "/assets/porapao/2.png",
      "/assets/porapao/3.png",
      "/assets/porapao/4.png",
      "/assets/porapao/5.png",
      "/assets/porapao/6.png"
    ],
    features: [
      "Dedicated portals for Tutors and Students",
      "Passwordless, email-free login for students using a secure 6-digit cryptographic code provided by the tutor.",
      " Auto-generated visual progress charts to track subject mastery and historical averages."
    ],
    challengesAndLessons: "Implementing a secure, passwordless authentication system using only 6-digit codes for students without relying on traditional email verification.",
    problem: "Private tutors struggle to manage their tutoring business, handle administrative tasks, and connect with students efficiently.",
    solution: "Developed a mobile-first, serverless platform using React, Vite, and Supabase to streamline tutor-student connections and simplify business management."
  },
  
];
