import { SkillCategory } from '@/types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", proficiency: "expert" },
      { name: "SQL", proficiency: "advanced" },
      { name: "Java", proficiency: "intermediate" },
      { name: "C++", proficiency: "intermediate" },
      { name: "Node.js", proficiency: "advanced" }
    ]
  },
  {
    category: "Technologies & Frameworks",
    skills: [
      { name: "LangChain", proficiency: "expert" },
      { name: "LangGraph", proficiency: "expert" },
      { name: "Langsmith", proficiency: "advanced" },
      { name: "Phidata", proficiency: "advanced" },
      { name: "FastAPI", proficiency: "advanced" },
      { name: "Streamlit", proficiency: "advanced" },
      { name: "Scikit-Learn", proficiency: "advanced" },
      { name: "React", proficiency: "advanced" },
      { name: "Express.js", proficiency: "advanced" },
      { name: "TensorFlow", proficiency: "intermediate" },
      { name: "OpenAI APIs", proficiency: "expert" },
      { name: "ChromaDB", proficiency: "advanced" },
      { name: "Hugging Face", proficiency: "intermediate" }
    ]
  },
  {
    category: "Concepts & Expertise",
    skills: [
      { name: "Retrieval-Augmented Generation (RAG)", proficiency: "expert" },
      { name: "Multi-Agent Workflows", proficiency: "expert" },
      { name: "API Development", proficiency: "advanced" },
      { name: "Model Evaluation", proficiency: "advanced" },
      { name: "Version Control (Git)", proficiency: "advanced" },
      { name: "Data Preprocessing", proficiency: "advanced" },
      { name: "Debugging with Langsmith", proficiency: "advanced" },
      { name: "Vector Databases", proficiency: "advanced" },
      { name: "Software Testing", proficiency: "advanced" },
      { name: "SDLC", proficiency: "advanced" }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Collaborative Teamwork", proficiency: "expert" },
      { name: "Adaptability", proficiency: "expert" },
      { name: "Creativity", proficiency: "advanced" },
      { name: "Problem Solving", proficiency: "expert" }
    ]
  }
];
