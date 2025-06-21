"use client";

import { motion } from "framer-motion";

export default function Section({
  children,
  title,
  fullHeight = false, // ✅ default is full-height
}: {
  children: React.ReactNode;
  title?: string;
  fullHeight?: boolean;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        fullHeight ? "min-h-screen" : "py-16"
      } px-6 sm:px-8 flex flex-col items-center justify-center scroll-mt-20`}
    >
      {title && (
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  );
}
