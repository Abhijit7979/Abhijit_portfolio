import { SkillCategory } from '@/types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "Python", "SQL", "Java", "C++"].map(name => ({ name }))
  },
  {
    category: "Frontend / UI",
    skills: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Streamlit"].map(name => ({ name }))
  },
  {
    category: "Backend / Databases",
    skills: ["FastAPI", "Node.js", "Express.js", "PostgreSQL", "SQLite", "Supabase"].map(name => ({ name }))
  },
  {
    category: "Deployment / Tools",
    skills: ["Git", "Docker", "Vercel", "Render", "AWS Lambda", "AWS Amplify"].map(name => ({ name }))
  },
  {
    category: "AI Integration",
    skills: ["LangChain", "LangGraph", "OpenAI API", "ChromaDB", "RAG"].map(name => ({ name }))
  },
  {
    category: "Concepts",
    skills: ["API Development", "Version Control", "Software Testing", "SDLC", "Multi-Agent Workflows"].map(name => ({ name }))
  }
];
