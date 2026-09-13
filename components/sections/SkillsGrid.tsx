"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/skills";

export function SkillsGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-muted text-lg max-w-2xl">
            A categorized look at the technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillsData.map((group) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                variants={cardVariants}
                className="group p-8 rounded-2xl bg-bg border border-border hover:border-accent transition-colors shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-surface rounded-xl text-accent group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-text">{group.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-surface border border-border rounded-lg text-sm font-medium text-muted hover:text-accent hover:border-accent/50 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
