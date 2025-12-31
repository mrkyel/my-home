export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  achievements?: string[];
  skills: string[];
  reasonForLeaving?: string;
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
  headline?: string;
  bio: Array<{
    text: string;
    highlight?: boolean;
  }>;
  email: string;
  github: string;
  linkedin: string;
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
  ai?: {
    llm: string[];
    tools: string[];
  };
  backend?: string[];
  collaboration: string[];
  devops: string[];
  etc: string[];
}

export interface ValueProposition {
  title: string;
  description: string;
  icon: string;
}
