export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  profileImage: string;
  resumeUrl: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email';
  url: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'AI/ML' | 'Web' | 'Data' | 'Other';
  technologies: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: {
    start: string;
    end: string;
  };
  location: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  image?: string;
  credentialUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  readTime: number;
  published: boolean;
}
