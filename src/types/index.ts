export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  gallery?: string[]
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "devops" | "tools";
}

export interface NavLink {
  label: string;
  target: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}