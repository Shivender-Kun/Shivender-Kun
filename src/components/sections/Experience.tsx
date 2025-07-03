"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-20 px-4 sm:px-6 lg:px-8 sm:snap-start min-h-screen"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          Experience
        </h2>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="border border-border shadow-sm rounded-xl p-6 transition hover:shadow-md card-style"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold">
                  {exp.title}
                  <span className="text-purple-600 dark:text-purple-400 ml-2 font-medium">
                    @ {exp.company}
                  </span>
                </h3>
                <div className="text-sm text-muted-foreground mt-1 sm:mt-0 sm:text-right">
                  {exp.location} • {exp.duration}
                </div>
              </div>

              <ul className="list-disc pl-5 mt-4 space-y-1 text-muted-foreground text-sm">
                {exp.responsibilities.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-muted text-muted-foreground border border-border px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
