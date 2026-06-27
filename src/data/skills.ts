import type { Skill } from "../types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "react", category: "frontend" },
  { name: "TypeScript", icon: "typescript", category: "frontend" },
  { name: "JavaScript", icon: "javascript", category: "frontend" },
  { name: "HTML5", icon: "html5", category: "frontend" },
  { name: "CSS3", icon: "css3", category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwind", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "nodejs", category: "backend" },
  { name: "Python", icon: "python", category: "backend" },
  { name: "Django", icon: "django", category: "backend" },
  { name: "Express", icon: "express", category: "backend" },
  { name: "PostgreSQL", icon: "postgresql", category: "backend" },
  { name: "MongoDB", icon: "mongodb", category: "backend" },

  // DevOps
  { name: "Docker", icon: "docker", category: "devops" },
  { name: "Git", icon: "git", category: "devops" },
  { name: "GitHub Actions", icon: "github", category: "devops" },

  // Tools
  { name: "VS Code", icon: "vscode", category: "tools" },
  { name: "Postman", icon: "postman", category: "tools" },
  { name: "Linux", icon: "linux", category: "tools" },
];