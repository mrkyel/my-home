export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Project {
  title: string;
  period: string;
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
  linkedin: string;
  phone: string;
}

export interface Education {
  school: string;
  period: string;
  major: string;
  minor: string;
  gpa: string;
  details: string[];
}

export interface Certificate {
  name: string;
  date: string;
  description?: string;
}

export interface Skills {
  frontend: {
    basic: string[];
    framework: string[];
    state: string[];
    styling: string[];
    bundler: string[];
  };
  collaboration: string[];
  devops: string[];
  etc: string[];
}
