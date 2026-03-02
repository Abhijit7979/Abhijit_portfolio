import { Project } from '@/types/portfolio';

export const projects: Project[] = [
  {
    id: "multi-agent-financial-chatbot",
    title: "Multi-Agent Financial Chatbot System",
    description: "Modular multi-agent system using open-source LLMs with Phidata framework for real-time financial analytics.",
    longDescription: "Developed a sophisticated multi-agent system using LLaMA 3.1 and DeepSeek models, orchestrated via Groq inference APIs. The system integrates specialized agents (Finance Agent, Web Agent) for real-time stock data retrieval, web summarization, and comprehensive financial analytics using tools like YFinance and DuckDuckGo.",
    category: "AI/ML",
    technologies: ["Python", "LangChain", "LangGraph", "Phidata", "LLaMA 3.1", "DeepSeek", "Groq API", "YFinance", "DuckDuckGo"],
    image: "/images/projects/financial-chatbot.png",
    githubUrl: "https://github.com/Abhijit7979/Agentic-Ai",
    featured: true,
    highlights: [
      "Multi-agent architecture with specialized roles for finance and web research",
      "High-performance response times using Groq inference APIs",
      "Real-time stock data retrieval and analytics capabilities"
    ]
  },
  {
    id: "natural-language-sql-agent",
    title: "Natural Language → SQL Agent",
    description: "Conversational agent using LangGraph to generate and execute SQL queries from plain English questions.",
    longDescription: "Built a natural-language to SQL conversational agent using LangGraph and an LLM to generate syntactically-correct SQL from plain-English questions. The system executes queries against a local SQLite database and features a 3-node graph architecture (write query → execute query → generate answer) with a Streamlit UI that displays generated SQL and results.",
    category: "AI/ML",
    technologies: ["Python", "LangChain", "LangGraph", "SQLite", "Streamlit", "OpenAI APIs"],
    image: "/images/projects/nl-sql-agent.png",
    githubUrl: "https://github.com/Abhijit7979/HR_Agent",
    featured: true,
    highlights: [
      "3-node graph architecture for query generation and execution",
      "Interactive Streamlit UI with SQL preview and results",
      "Syntactically-correct SQL generation from natural language"
    ]
  },
  {
    id: "nasa-turbofan-ml",
    title: "NASA Turbofan Jet Engine RUL Prediction",
    description: "Machine learning model to predict Remaining Useful Life (RUL) of turbofan engines using NASA's dataset.",
    longDescription: "Developed a predictive maintenance solution using NASA's open-source turbofan engine dataset. Implemented comprehensive data preprocessing, feature engineering, and model training with Random Forest algorithms to achieve accurate RUL predictions. Collaborated with a team during a college hackathon, applying data science methodologies to solve real-world engineering problems.",
    category: "Data",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Random Forest", "Feature Engineering"],
    image: "/images/projects/turbofan-ml.png",
    githubUrl: "https://github.com/Abhijit7979/NASA-Turbofan-Jet-Engine",
    featured: false,
    highlights: [
      "Data preprocessing and feature engineering for time-series sensor data",
      "Random Forest model optimization for accurate RUL predictions",
      "Team collaboration in hackathon environment"
    ]
  }
];
