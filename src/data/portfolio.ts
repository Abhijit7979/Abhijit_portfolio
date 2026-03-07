import { PersonalInfo, SocialLink } from '@/types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "S. Abhijit Rao",
  role: "Data Engineer | B.Tech AI",
  tagline: "Scalable data pipelines, ETL/ELT workflows, and distributed data systems using Python, PySpark, and SQL. Building production-grade data infrastructure on cloud platforms.",
  bio: "Data Engineer with hands-on experience designing and deploying scalable data pipelines, ETL/ELT workflows, and distributed data systems using Python, PySpark, and SQL. Proven ability to build production-grade data infrastructure integrating cloud platforms (AWS), databases, and automated ingestion frameworks. Delivered end-to-end data solutions on time across multiple organizations, including enterprise analytics platforms with PostgreSQL, API integrations, and workflow orchestration using Airflow. Strong foundation in data quality, performance optimization, and cross-functional stakeholder collaboration. B.Tech in AI with coursework in distributed computing, database systems, and cloud computing.",
  email: "sar.abhijit2003@gmail.com",
  phone: "+91 9985727779",
  location: "India",
  profileImage: "/images/profile/abhijit-rao.jpg",
  resumeUrl: "/resume/Abhijit_rao_Data_Engineer.pdf"
};

/** Used for GitHub contribution/activity graph embeds */
export const githubUsername = 'Abhijit7979';

export const socialLinks: SocialLink[] = [
  {
    platform: "github",
    url: "https://github.com/Abhijit7979",
    icon: "Github"
  },
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/abhijit79",
    icon: "Linkedin"
  },
  {
    platform: "website",
    url: "https://ibm.abhijit-rao.me",
    icon: "Globe"
  },
  {
    platform: "email",
    url: "mailto:sar.abhijit2003@gmail.com",
    icon: "Mail"
  }
];
