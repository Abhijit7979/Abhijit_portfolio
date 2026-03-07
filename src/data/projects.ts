import { Project } from '@/types/portfolio';

export const projects: Project[] = [
  {
    id: "multi-agent-financial-chatbot",
    title: "Multi-Agent Financial Chatbot System",
    description: "Modular multi-agent system using open-source LLMs with Phidata framework for real-time financial data retrieval and analytics.",
    longDescription: "Developed a modular multi-agent system using LLaMA 3.1 and DeepSeek models, orchestrated via Groq inference APIs for high-performance response times. Engineered a finance-focused chatbot capable of real-time stock data retrieval, web summarization, and analytics by integrating specialized agents (Finance Agent, Web Agent) using tools like YFinance, DuckDuckGo, and custom utilities.",
    category: "Data",
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
    description: "Conversational agent using LangGraph to generate and execute SQL queries from plain English questions against a local database.",
    longDescription: "Built a natural-language to SQL conversational agent using LangGraph and an LLM to generate syntactically-correct SQL from plain-English questions. The system executes queries against a local SQLite database and features a 3-node graph architecture (write query → execute query → generate answer) with a Streamlit UI that displays generated SQL and results.",
    category: "Data",
    technologies: ["Python", "LangGraph", "SQLite", "Streamlit", "SQL", "OpenAI APIs"],
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
    description: "Data pipeline and ML model to predict Remaining Useful Life (RUL) of turbofan engines using NASA's dataset.",
    longDescription: "Developed a predictive maintenance data pipeline using NASA's open-source turbofan engine dataset. Implemented comprehensive data preprocessing, feature engineering, and model training with Random Forest algorithms to achieve accurate RUL predictions. Built end-to-end data workflows including ingestion, transformation, and model evaluation using Python and Scikit-Learn.",
    category: "Data",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Random Forest", "Feature Engineering", "Data Preprocessing"],
    image: "/images/projects/turbofan-ml.png",
    githubUrl: "https://github.com/Abhijit7979/NASA-Turbofan-Jet-Engine",
    featured: false,
    highlights: [
      "End-to-end data pipeline for time-series sensor data",
      "Feature engineering and data preprocessing workflows",
      "Random Forest model optimization for accurate RUL predictions"
    ]
  }
];
