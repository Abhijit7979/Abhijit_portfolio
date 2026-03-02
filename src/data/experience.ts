import { Experience } from '@/types/portfolio';

export const experiences: Experience[] = [
  {
    id: "astraveda",
    company: "Astraveda",
    role: "Freelance AI Engineer",
    duration: {
      start: "Jan 2026",
      end: "Present"
    },
    location: "Remote",
    description: "Architected and deployed production-ready website and web application, maintaining full ownership of development, infrastructure, and hosting operations for enterprise petroleum analytics platform.",
    responsibilities: [
      "Engineered full-stack solution leveraging Next.js, Tailwind CSS, Shadcn UI, FastAPI, PostgreSQL, LangChain, and LangGraph to deliver scalable AI-powered features across client-facing and internal systems",
      "Accelerated development velocity using Claude Code, Google Gemini, Google Flow alongside AWS Amplify, AWS Lambda, Supabase, Groq, and Mistral AI for robust cloud infrastructure and LLM orchestration",
      "Delivered two core AI capabilities: \"Ask Astra\" multi-agent conversational chatbot and \"Click Astra\" OCR solution for automated document processing"
    ],
    achievements: [],
    productionLinks: {
      website: "https://www.petro-astra.in",
      app: "https://app.petro-astra.in"
    },
    technologies: ["Next.js", "Tailwind CSS", "Shadcn UI", "FastAPI", "PostgreSQL", "LangChain", "LangGraph", "AWS Amplify", "AWS Lambda", "Supabase", "Groq", "Mistral AI"]
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
    description: "Engineered enterprise Agentic RAG chatbot enabling team members to query internal documentation through natural language, dramatically reducing information retrieval time and improving operational efficiency.",
    responsibilities: [
      "Architected multi-agent retrieval system using LangGraph orchestration, OpenAI LLMs, and ChromaDB vector database, implementing semantic search across company knowledge base",
      "Deployed full-stack solution with Next.js frontend (Vercel) and FastAPI backend (Render), delivering production-ready chat interface with real-time response capabilities"
    ],
    achievements: [],
    technologies: ["LangGraph", "OpenAI", "ChromaDB", "Next.js", "FastAPI", "Vercel", "Render"]
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
    description: "Worked on Dhanur AI, a cutting-edge video editing automation platform by Prodigal AI that transforms raw user video into polished YouTube/Shorts-ready content using Langchain framework.",
    responsibilities: [
      "Implemented Retrieval-Augmented Generation (RAG) pipelines integrated with vector databases for intelligent context retrieval of b-roll, filters and transition segmentation using ChromaDB",
      "Reduced manual editing time significantly through intelligent automation, enhancing creator productivity"
    ],
    achievements: [
      "Awarded Intern of the Month in April 2025 for exceptional performance and innovation"
    ],
    technologies: ["Python", "LangChain", "ChromaDB", "RAG", "Vector Databases", "FastAPI"]
  }
];
