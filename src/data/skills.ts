import { SkillCategory } from '@/types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", proficiency: "expert" },
      { name: "PySpark", proficiency: "advanced" },
      { name: "SQL", proficiency: "expert" },
      { name: "Java", proficiency: "intermediate" },
      { name: "C++", proficiency: "intermediate" },
      { name: "Node.js", proficiency: "advanced" }
    ]
  },
  {
    category: "Big Data & Processing",
    skills: [
      { name: "Apache Spark (PySpark)", proficiency: "advanced" },
      { name: "Distributed Computing", proficiency: "advanced" },
      { name: "ETL/ELT Pipelines", proficiency: "expert" },
      { name: "Pandas", proficiency: "expert" },
      { name: "NumPy", proficiency: "advanced" },
      { name: "Data Preprocessing", proficiency: "advanced" }
    ]
  },
  {
    category: "Databases & Storage",
    skills: [
      { name: "PostgreSQL", proficiency: "advanced" },
      { name: "MySQL", proficiency: "advanced" },
      { name: "SQLite", proficiency: "advanced" },
      { name: "ChromaDB", proficiency: "advanced" },
      { name: "AWS S3", proficiency: "advanced" },
      { name: "AWS Redshift", proficiency: "intermediate" },
      { name: "Data Warehousing/Data Mart (Star/Snowflake Schema)", proficiency: "intermediate" }
    ]
  },
  {
    category: "Cloud Platforms",
    skills: [
      { name: "AWS (S3, EMR, Glue, Lambda, Redshift, Amplify)", proficiency: "advanced" },
      { name: "Supabase", proficiency: "advanced" },
      { name: "GCP (BigQuery)", proficiency: "intermediate" }
    ]
  },
  {
    category: "Orchestration & Streaming",
    skills: [
      { name: "Apache Airflow", proficiency: "advanced" },
      { name: "Apache Kafka", proficiency: "intermediate" },
      { name: "Prefect", proficiency: "intermediate" }
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "CI/CD Pipelines", proficiency: "advanced" },
      { name: "Git", proficiency: "expert" },
      { name: "Docker", proficiency: "advanced" },
      { name: "FastAPI", proficiency: "advanced" },
      { name: "Streamlit", proficiency: "advanced" },
      { name: "REST APIs", proficiency: "advanced" }
    ]
  },
  {
    category: "Concepts & Expertise",
    skills: [
      { name: "Data Pipeline Architecture", proficiency: "expert" },
      { name: "Data Quality & Governance", proficiency: "advanced" },
      { name: "Data Monitoring & Compliance", proficiency: "advanced" },
      { name: "Performance Optimization", proficiency: "advanced" },
      { name: "Cost-Effectiveness Analysis", proficiency: "advanced" },
      { name: "API/System Integration", proficiency: "advanced" },
      { name: "Stakeholder Management", proficiency: "advanced" },
      { name: "Agile/Scrum", proficiency: "advanced" },
      { name: "SDLC", proficiency: "advanced" }
    ]
  },
  {
    category: "BI & Visualization",
    skills: [
      { name: "Power BI", proficiency: "intermediate" },
      { name: "Tableau", proficiency: "intermediate" },
      { name: "Matplotlib", proficiency: "advanced" },
      { name: "Seaborn", proficiency: "advanced" }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Collaborative Teamwork", proficiency: "expert" },
      { name: "Stakeholder Communication", proficiency: "expert" },
      { name: "Adaptability", proficiency: "expert" },
      { name: "Problem Solving", proficiency: "expert" }
    ]
  }
];
