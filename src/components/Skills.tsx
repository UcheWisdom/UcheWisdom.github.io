import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../data/skills";
import type { Skill } from "../types";

const categories = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "devops", label: "DevOps" },
  { key: "tools", label: "Tools" },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-secondary border border-textDim/10 rounded-lg px-4 py-3 flex items-center gap-3 hover:border-accent/50 hover:bg-secondary/80 transition-all duration-200 group"
    >
      <span className="text-accent text-lg">▹</span>
      <span className="text-textDim group-hover:text-textMain transition-colors duration-200 font-mono text-sm">
        {skill.name}
      </span>
    </motion.div>
  );
}

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="heading">Skills</h2>
          <div className="flex-1 h-px bg-textDim/20 ml-4" />
        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-10">
          {categories.map((category) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category.key
            );

            return (
              <div key={category.key}>
                <h3 className="text-textMain font-semibold text-lg mb-4 flex items-center gap-3">
                  <span className="text-accent font-mono text-sm">
                    {category.label}
                  </span>
                  <div className="flex-1 h-px bg-textDim/10" />
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {categorySkills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;