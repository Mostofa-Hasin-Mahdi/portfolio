"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-surface/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[1fr_auto] gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 tracking-tight">
              About Me
            </h2>
            <div className="space-y-4 text-muted text-lg leading-relaxed mb-8">
              <p>
                I am a Software Engineer specializing in AI and Full Stack development. 
                My passion lies in bridging the gap between complex machine learning models and 
                intuitive, user-facing applications. 
              </p>
              <p>
                Whether it's optimizing OCR pipelines for medical records or building 
                scalable SaaS architectures with PostgreSQL row-level security, I focus on writing 
                clean, maintainable code that delivers real-world impact.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-bg border border-border">
              <h3 className="text-xl font-bold text-text mb-2">Education</h3>
              <p className="text-accent font-medium mb-1">
                Shanto-Mariam University of Creative Technology
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-muted text-sm gap-2">
                <span>BSc in Computer Science and Engineering</span>
                <span className="font-mono bg-surface px-2 py-1 rounded border border-border whitespace-nowrap">
                  Nov 2026
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-surface shadow-xl">
              <Image
                src="/assets/PXL_20260816_09094153.jpg"
                alt="Mostofa Hasin Mahdi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, 256px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
