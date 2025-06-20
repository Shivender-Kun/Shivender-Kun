"use client";

import { Project } from "@/types";
import { motion } from "framer-motion";

export default function ProjectCard(project: Project) {
  return (
    <motion.a
      key={project.title}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      className="block rounded-lg border p-6 shadow-md transition-all border-gray-200 hover:border-purple-400 dark:border-gray-800 dark:hover:border-purple-500 card-style"
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {project.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-3">
        {project.description}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 italic">
        Tech stack: {project.stack.join(", ")}
      </p>
    </motion.a>
  );
}
