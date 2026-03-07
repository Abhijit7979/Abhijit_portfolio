import { Experience } from '@/types/portfolio';

export const experiences: Experience[] = [
  {
    id: "astraveda",
    company: "Astraveda",
    role: "AI Engineer (Freelance)",
    duration: {
      start: "Jan 2026",
      end: "Present"
    },
    location: "Remote",
    description: "Architected and deployed production data infrastructure for enterprise petroleum analytics platform, owning end-to-end database design, ETL pipelines, cloud operations, and data monitoring serving live business users.",
    responsibilities: [
      "Engineered scalable data pipelines using Python, FastAPI, and PostgreSQL with AWS services (Lambda, S3, Amplify) for automated data ingestion, transformation, and delivery across multiple data sources",
      "Built automated document processing pipeline (\"Click Astra\" OCR) extracting structured data from unstructured documents, implementing data validation, quality controls, and compliance checks with error handling workflows",
      "Developed multi-source data retrieval and aggregation system (\"Ask Astra\") enabling real-time analytics queries across enterprise datasets using LangChain and LangGraph orchestration"
    ],
    achievements: [],
    productionLinks: {
      website: "https://www.petro-astra.in",
      app: "https://app.petro-astra.in"
    },
    technologies: ["Python", "FastAPI", "PostgreSQL", "AWS Lambda", "AWS S3", "AWS Amplify", "LangChain", "LangGraph", "Supabase", "Next.js"]
  },
  {
    id: "nuevosol-energy",
    company: "Nuevosol Energy Pvt Ltd",
    role: "AI Intern",
    duration: {
      start: "Nov 2025",
      end: "Dec 2025"
    },
    location: "Head office Madhapur, Hyderabad, India",
    description: "Designed and built data ingestion and retrieval pipelines enabling enterprise-wide access to internal documentation through automated data extraction, transformation, and indexing workflows, delivering the solution on time to stakeholders.",
    responsibilities: [
      "Implemented scalable data processing workflows using Python and SQL, integrating multiple data sources into a unified searchable knowledge base with vector database (ChromaDB) for semantic indexing",
      "Deployed end-to-end data solution with FastAPI backend and Next.js frontend on cloud infrastructure (Vercel, Render), ensuring reliable data delivery and real-time query capabilities"
    ],
    achievements: [],
    technologies: ["Python", "SQL", "ChromaDB", "FastAPI", "Next.js", "Vercel", "Render"]
  },
  {
    id: "prodigal-ai",
    company: "Prodigal AI",
    role: "Agentic AI Intern",
    duration: {
      start: "Feb 2025",
      end: "June 2025"
    },
    location: "Remote, India",
    description: "Developed automated ETL pipelines for Dhanur AI video processing platform, transforming raw media data into structured, production-ready outputs using Python and distributed processing techniques.",
    responsibilities: [
      "Built data pipelines integrated with vector databases for intelligent data retrieval, content segmentation, and metadata extraction using ChromaDB, processing large-scale unstructured data",
      "Reduced manual data processing time significantly through pipeline automation and performance tuning for cost-effectiveness, improving throughput and operational efficiency across the content production workflow"
    ],
    achievements: [
      "Awarded Intern of the Month in April 2025 for exceptional performance and innovation in data pipeline development"
    ],
    technologies: ["Python", "ChromaDB", "ETL Pipelines", "Vector Databases", "FastAPI", "Data Processing"]
  }
];
