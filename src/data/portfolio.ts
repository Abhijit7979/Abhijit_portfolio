import { PersonalInfo, SocialLink } from '@/types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "S. Abhijit Rao",
  role: "Junior Full Stack & UI Developer",
  tagline: "Building web applications with Next.js, React, Tailwind CSS, FastAPI, and PostgreSQL.",
  bio: "Developer with hands-on experience building and deploying web applications using Next.js, React, Tailwind CSS, FastAPI, and PostgreSQL. Delivered an enterprise petroleum analytics platform and an internal documentation chatbot, connecting user interfaces with backend APIs and AI workflows. Seeking Junior Full Stack and UI Developer roles with a focus on frontend development, API integration, database-backed applications, and cloud deployment.",
  email: "sar.abhijit2003@gmail.com",
  phone: "+91 9985727779",
  location: "India",
  profileImage: "/images/profile/abhijit-rao.jpg",
  resumeUrl: "/resume/Abhijit_Rao_Resume.pdf"
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
    url: "https://www.abhijit-rao.me",
    icon: "Globe"
  },
  {
    platform: "email",
    url: "mailto:sar.abhijit2003@gmail.com",
    icon: "Mail"
  }
];
