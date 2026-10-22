import { Project } from '@/types/portfolio';

export const projects: Project[] = [
  {
    id: "sketch-to-form",
    title: "Sketch-to-Form — AI Survey Builder",
    description: "A field-survey app that turns uploaded sketches into reviewable forms and collects structured responses.",
    longDescription: "Built a Next.js application for uploading sketches, reviewing generated forms, publishing links, and collecting responses. A LangGraph pipeline extracts question types, labels, and options into JSON and flags ambiguous fields for human review. Langfuse tracing and LLM-as-a-Judge evaluation help inspect pipeline steps, response quality, latency, and cost.",
    category: "Web",
    technologies: ["Next.js", "LangGraph", "Langfuse"],
    image: "/images/projects/nl-sql-agent.png",
    githubUrl: "https://github.com/Abhijit7979/FDE-Quest-2",
    featured: true,
    highlights: [
      "Upload sketches, review generated forms, publish links, and collect responses",
      "Extract question types, labels, and options with human review for ambiguous fields",
      "Trace and evaluate pipeline quality, latency, and cost"
    ]
  },
  {
    id: "natural-language-sql-agent",
    title: "Natural Language to SQL Agent",
    description: "A conversational application that converts plain-English questions into SQL, runs queries, and generates answers.",
    longDescription: "Built a Python and LangGraph application with a three-step query-generation, execution, and answer workflow against SQLite. Its Streamlit interface displays generated SQL and raw query results.",
    category: "AI/ML",
    technologies: ["Python", "LangGraph", "SQLite", "Streamlit"],
    image: "/images/projects/nl-sql-agent.png",
    githubUrl: "https://github.com/Abhijit7979/HR_Agent",
    featured: true,
    highlights: [
      "Generate and execute SQL from plain-English questions",
      "Show generated SQL and raw results in Streamlit",
      "Use a three-step LangGraph workflow"
    ]
  },
  {
    id: "multi-agent-financial-chatbot",
    title: "Multi-Agent Financial Chatbot System",
    description: "A modular chatbot with specialized finance and web agents for stock data and web research.",
    longDescription: "Developed a Python chatbot using Phidata and Groq APIs with open-source language models. Finance and web agents use YFinance and DuckDuckGo for stock-data retrieval, web summarization, and financial queries.",
    category: "AI/ML",
    technologies: ["Python", "Phidata", "Groq API", "YFinance", "DuckDuckGo"],
    image: "/images/projects/financial-chatbot.png",
    githubUrl: "https://github.com/Abhijit7979/Agentic-Ai",
    featured: true,
    highlights: [
      "Specialized finance and web agents",
      "Stock-data retrieval with YFinance",
      "Web summarization with DuckDuckGo"
    ]
  }
];
