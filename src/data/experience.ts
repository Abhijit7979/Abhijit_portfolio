import { Experience } from '@/types/portfolio';

export const experiences: Experience[] = [
  {
    id: "prodigal-ai",
    company: "Prodigal AI",
    role: "Agentic AI Intern",
    duration: {
      start: "Feb 2025",
      end: "June 2025"
    },
    location: "Remote, India",
    description: "Worked on Dhanur AI, a cutting-edge video editing automation platform that transforms raw user video into polished YouTube/Shorts-ready content using the Langchain framework.",
    responsibilities: [
      "Implemented Retrieval-Augmented Generation (RAG) pipelines integrated with vector databases for intelligent context retrieval",
      "Developed automated b-roll selection, filter application, and transition segmentation systems using ChromaDB",
      "Reduced manual editing time significantly through intelligent automation, enhancing creator productivity",
      "Collaborated with cross-functional teams to deliver production-ready AI features"
    ],
    achievements: [
      "Awarded Intern of the Month in April 2025 for exceptional performance and innovation",
      "Successfully reduced manual video editing effort through automated RAG workflows",
      "Implemented production-grade RAG pipelines with vector database integration"
    ],
    technologies: ["Python", "LangChain", "ChromaDB", "RAG", "Vector Databases", "FastAPI"]
  }
];
