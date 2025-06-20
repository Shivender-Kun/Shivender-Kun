"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Section({
  children,
  title,
  fullHeight = false, // ✅ default is full-height
}: {
  children: React.ReactNode;
  title?: string;
  fullHeight?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
