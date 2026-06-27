// import { motion, useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import { projects } from "../data/projects";
// import ProjectModal from "./ProjectModal";
// import type { Project } from "../types";

// function Projects() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);

//   return (
//     <section id="projects" className="section-padding">
//       <motion.div
//         ref={ref}
//         initial={{ opacity: 0, y: 30 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//         transition={{ duration: 0.6 }}
//       >
//         {/* Section Heading */}
//         <div className="flex items-center gap-4 mb-12">
//           <h2 className="heading">Projects</h2>
//           <div className="flex-1 h-px bg-textDim/20 ml-4" />
//         </div>

//         {/* Horizontal Scrollable Row */}
//         <div className="overflow-x-auto pb-6 -mx-6 px-6 md:-mx-16 md:px-16 lg:-mx-32 lg:px-32">
//           <div className="flex gap-6 w-max">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, x: 30 }}
//                 animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 onClick={() => setSelectedProject(project)}
//                 className="w-[600px] bg-secondary border border-textDim/10 rounded-lg overflow-hidden flex flex-col hover:border-accent/30 hover:translate-y-[-4px] transition-all duration-300 group flex-shrink-0 cursor-pointer"
//               >
//                 {/* Project Image */}
//                 <div className="w-full h-48 overflow-hidden bg-primary">
//                   {project.image ? (
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center text-textDim/30 font-mono text-sm">
//                       No Image
//                     </div>
//                   )}
//                 </div>

//                 {/* Card Content */}
//                 <div className="p-6 flex flex-col flex-1">
//                   {/* Links Row */}
//                   <div className="flex items-center justify-end gap-4 mb-4">
                    
//                     <a href={project.githubUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       onClick={(e) => e.stopPropagation()}
//                       className="flex items-center gap-1.5 text-textDim hover:text-accent transition-colors duration-200"
//                       aria-label="GitHub Link"
//                     >
//                       <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
//                       </svg>
//                       <span className="font-mono text-xs">GitHub</span>
//                     </a>
//                     {project.liveUrl && (
                      
//                       <a href={project.liveUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         onClick={(e) => e.stopPropagation()}
//                         className="flex items-center gap-1.5 text-textDim hover:text-accent transition-colors duration-200"
//                         aria-label="Live Link"
//                       >
//                         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                         </svg>
//                         <span className="font-mono text-xs">Live</span>
//                       </a>
//                     )}
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-textMain font-bold text-lg mb-2 group-hover:text-accent transition-colors duration-200">
//                     {project.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-textDim text-sm leading-relaxed mb-6 flex-1">
//                     {project.description}
//                   </p>

//                   {/* Tech Stack */}
//                   <div className="flex flex-wrap gap-2 mt-auto">
//                     {project.techStack.map((tech) => (
//                       <span
//                         key={tech}
//                         className="font-mono text-xs text-textDim bg-primary px-2 py-1 rounded"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* GitHub CTA */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="flex justify-center mt-16"
//         >
          
//           <a href="https://github.com/uchewisdom"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="border border-accent text-accent px-8 py-4 rounded font-mono text-sm hover:bg-accent/10 transition-colors duration-200"
//           >
//             See More on GitHub
//           </a>
//         </motion.div>
//       </motion.div>

//       {/* Modal — outside the map, once at the bottom */}
//       <ProjectModal
//         project={selectedProject}
//         onClose={() => setSelectedProject(null)}
//       />
//     </section>
//   );
// }

// export default Projects;


import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";
import type { Project } from "../types";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [windowWidth] = useState(window.innerWidth);
  const visibleCount = windowWidth < 768 ? 1 : 2;
  const maxIndex = Math.max(projects.length - visibleCount, 0);
  

  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  const visibleProjects = projects.slice(currentIndex, currentIndex + visibleCount);

  return (
    <section id="projects" className="py-20 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Heading */}
        {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl font-bold text-accent mb-3">
           Featured Projects
        </h2>
      <div className="w-16 h-0.5 bg-accent mx-auto mb-4 rounded" />
        <p className="text-textDim text-sm">
          A curated collection of recent projects demonstrating technical expertise and a passion for building impactful digital solutions.
        </p>
      </div>

        {/* Projects + Arrows */}
        <div className="flex items-stretch gap-2">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex-shrink-0 w-8 h-8 self-center flex items-center justify-center border border-textDim/30 rounded-full text-textDim hover:border-accent hover:text-accent transition-colors duration-200 disabled:opacity-20 disabled:cursor-not-allowed text-lg"
          >
            ‹
          </button>

          {/* Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="bg-secondary border border-textDim/10 rounded-xl overflow-hidden flex flex-col hover:border-accent/30 hover:translate-y-[-4px] transition-all duration-300 group cursor-pointer"
              >
                {/* Image */}
                <div className="w-full h-64 overflow-hidden bg-primary">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-textDim/30 font-mono text-sm">
                      No Image
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Links */}
                  <div className="flex items-center justify-end gap-4 mb-4">
                    
                    <a href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-textDim hover:text-accent transition-colors duration-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span className="font-mono text-xs">GitHub</span>
                    </a>
                    {project.liveUrl && (
                      
                      <a href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-textDim hover:text-accent transition-colors duration-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="font-mono text-xs">Live</span>
                      </a>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-textMain font-bold text-xl mb-3 group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-textDim text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-textDim bg-primary px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="flex-shrink-0 w-8 h-8 self-center flex items-center justify-center border border-textDim/30 rounded-full text-textDim hover:border-accent hover:text-accent transition-colors duration-200 disabled:opacity-20 disabled:cursor-not-allowed text-lg"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                i === currentIndex ? "bg-accent" : "bg-textDim/30"
              }`}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          
          <a href="https://github.com/uchewisdom"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent text-accent px-8 py-4 rounded font-mono text-sm hover:bg-accent/10 transition-colors duration-200"
          >
            See More on GitHub
          </a>
        </motion.div>
      </motion.div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;