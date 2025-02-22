export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  skills: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  email: string;
  github: string;
  linkedin?: string;
}
