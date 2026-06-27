import type { Project } from "../types";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "My Portfolio",
    description:
      "A personal portfolio website built with React, TypeScript, and Tailwind CSS showcasing my projects and skills.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/uchewisdom/uchewisdom.github.io",
    liveUrl: "https://uchewisdom.github.io",
    image: project1,
    featured: true,
  },
  {
    id: 2,
    title: "School Database Management System",
    description: "A ProgreSQL relational database that manages departments, lecturers, students, courses, enrollments, results, attendance, fees, and guardians for an academic institution. Built with data integrity constraints, auto-computed grade columns, and reporting views",
    techStack: ["Postgresql",],
    githubUrl: "https://github.com/UcheWisdom/postgresql_school_db",
    liveUrl: "https://github.com/UcheWisdom/postgresql_school_db/blob/main/postgresqlfile.sql",
    image: project2,
    featured: true,
  },
  {
    id: 3,
    title: "School Database Management System",
    description: "A MySQL relational database that manages departments, lecturers, students, courses, enrollments, results, attendance, fees, and guardians for an academic institution. Built with data integrity constraints, auto-computed grade columns, and reporting views",
    techStack: ["MySQL"],
    githubUrl: "https://github.com/UcheWisdom/sql_school_db",
    liveUrl: "https://github.com/UcheWisdom/sql_school_db/blob/main/mysqlfile.sql",
    image: project3,
    featured: false,
  },
  {
    id: 4,
    title: "School Database Management System",
    description: "A T-SQL relational database that manages departments, lecturers, students, courses, enrollments, results, attendance, fees, and guardians for an academic institution. Built with data integrity constraints, auto-computed grade columns, and reporting views",
    techStack: ["T-SQL"],
    githubUrl: "https://github.com/UcheWisdom/tsql_school_db",
    liveUrl: "https://github.com/UcheWisdom/tsql_school_db/blob/main/school_t_sql.sql",
    image: project4,
    featured: false,
  },
];