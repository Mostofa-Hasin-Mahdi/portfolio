"use client";

import { motion } from "framer-motion";
import { achievementsData } from "@/lib/achievements";

export function AchievementsList() {
  return (
    <section id="achievements" className="py-24 bg-bg">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 tracking-tight">
            Proof of Execution
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Hackathons, academics, and competitive programming.
          </p>
        </motion.div>

        <div className="space-y-6">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-surface border border-border hover:border-accent transition-colors group"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-2xl bg-bg rounded-full border border-border group-hover:scale-110 transition-transform">
                {achievement.icon}
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-2">
                <div>
                  <h3 className="text-lg font-bold text-text group-hover:text-accent transition-colors">
                    {achievement.title}
                  </h3>
                  {achievement.description && (
                    <p className="text-muted mt-1">{achievement.description}</p>
                  )}
                </div>
                <div className="text-sm font-mono text-muted bg-bg px-3 py-1 rounded-full border border-border self-start md:self-auto whitespace-nowrap">
                  {achievement.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
