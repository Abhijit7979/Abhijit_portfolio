import { Experience } from '@/types/portfolio';

export const experiences: Experience[] = [
  {
    id: "must-company",
    company: "MUST Company",
    role: "Forward Deployed Engineer",
    duration: { start: "Jul 2026", end: "Present" },
    location: "Remote",
    description: "Co-developed MatchHire, a recruitment platform delivered in two months and used to manage approximately 200 applications per week.",
    responsibilities: [
      "Worked with recruiters on lead auto-assignment, candidate pipeline tracking, and monthly sourcing and conversion reports.",
      "Improved Must Flow navigation and dark-mode consistency using Claude Code and Codex for implementation, debugging, and review, with automated tests and browser checks."
    ],
    achievements: [],
    technologies: ["React", "UI Development", "Automated Testing"]
  },
  {
    id: "axension-ai",
    company: "Axension AI",
    role: "AI / ML Intern",
    duration: { start: "Apr 2026", end: "May 2026" },
    location: "Remote",
    description: "Contributed to an AI-powered RFQ agent for pharmaceutical procurement, covering supplier discovery, quotation processing, and human-reviewed workflows.",
    responsibilities: [
      "Worked across an Electron and React desktop interface and a Python / FastAPI backend using TypeScript, Tailwind CSS, and PostgreSQL.",
      "Translated procurement requirements into workflows and designs for AI-assisted document parsing, supplier comparison, and approvals."
    ],
    achievements: [],
    technologies: ["Electron", "React", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL"]
  },
  {
    id: "astraveda",
    company: "AstraVeda AI",
    role: "Generative AI Engineer — Freelance",
    duration: { start: "Jan 2026", end: "Mar 2026" },
    location: "Remote",
    description: "Built and deployed an enterprise petroleum analytics website and web application, owning development, infrastructure, and hosting.",
    responsibilities: [
      "Connected Next.js, Tailwind CSS, and shadcn/ui interfaces with FastAPI and PostgreSQL services.",
      "Delivered Ask Astra, a multi-agent conversational chatbot, and Click Astra, an OCR solution for automated document processing, using LangChain and LangGraph."
    ],
    achievements: [],
    productionLinks: { website: "https://petro-astra.in", app: "https://app.petro-astra.in" },
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "FastAPI", "PostgreSQL", "LangChain", "LangGraph"]
  },
  {
    id: "nuevosol-energy",
    company: "Nuevosol Energy Pvt Ltd",
    role: "AI Intern",
    duration: { start: "Nov 2025", end: "Dec 2025" },
    location: "Madhapur, Hyderabad, India",
    description: "Built an enterprise documentation chatbot for a 15-person team to query internal documents in natural language.",
    responsibilities: [
      "Connected a Next.js frontend with a FastAPI backend, integrating LangGraph, OpenAI, and ChromaDB for retrieval and conversational responses.",
      "Deployed and maintained the frontend on Vercel and backend on Render for internal users."
    ],
    achievements: [],
    technologies: ["Next.js", "FastAPI", "LangGraph", "OpenAI", "ChromaDB", "Vercel", "Render"]
  },
  {
    id: "prodigal-ai",
    company: "Prodigal AI",
    role: "Agentic AI Intern",
    duration: { start: "Mar 2025", end: "Jul 2025" },
    location: "Remote, India",
    description: "Built retrieval pipelines for Dhanur AI, a video-editing automation platform, using LangChain and ChromaDB to find reference clips from video metadata.",
    responsibilities: ["Integrated retrieval through a FastAPI backend into the editor workflow to support automated video-editing tasks."],
    achievements: ["Intern of the Month, April 2025"],
    technologies: ["Python", "LangChain", "ChromaDB", "FastAPI"]
  }
];
