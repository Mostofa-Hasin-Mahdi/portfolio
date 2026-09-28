'use client';
import { motion } from 'framer-motion';

const principles = [
  {
    num: "01",
    title: "Systems Thinking",
    desc: "I don't just write code; I architect scalable systems. From database schemas to CI/CD pipelines, every component is designed to be resilient, maintainable, and highly cohesive."
  },
  {
    num: "02",
    title: "AI Integration",
    desc: "Seamlessly bridging the gap between raw machine learning models and production-ready applications. I focus on optimizing inference speed, managing context, and delivering real value."
  },
  {
    num: "03",
    title: "Performance First",
    desc: "Whether it's optimizing complex database queries or reducing render cycles in React, I engineer for speed. A slow application is a broken application."
  }
];

export function EngineeringPrinciples() {
  return (
    <section id="principles" className="py-24 px-6 border-t border-border bg-bg relative overflow-hidden">
      
      {/* Animated Matrix/Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-5 dark:opacity-[0.05]">
        <motion.div 
          className="w-[200%] h-[200%] absolute -top-[50%] -left-[50%]"
          style={{ 
            backgroundImage: 'linear-gradient(var(--color-text) 2px, transparent 2px), linear-gradient(90deg, var(--color-text) 2px, transparent 2px)', 
            backgroundSize: '60px 60px' 
          }}
          animate={{ y: [0, 60], x: [0, -60] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <div className="font-mono text-sm text-accent mb-2">(05) PRINCIPLES</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">How I Build</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((p, i) => (
            <motion.div 
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-[1px] rounded-2xl bg-border hover:bg-gradient-to-r hover:from-accent hover:via-purple-500 hover:to-emerald-400 transition-all duration-300 group"
            >
              <div className="h-full w-full bg-surface p-8 rounded-2xl">
                <div className="font-mono text-5xl font-black text-transparent mb-6 transition-colors duration-300 group-hover:text-accent" style={{ WebkitTextStroke: "1px var(--color-text)" }}>
                  {p.num}
                </div>
                <h3 className="text-2xl font-bold text-text mb-4">{p.title}</h3>
                <p className="text-muted leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
