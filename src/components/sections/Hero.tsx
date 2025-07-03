"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Hero() {
  const words = [
    "H",
    "i",
    " ",
    "I",
    "'",
    "m",
    " ",
    "S",
    "h",
    "i",
    "v",
    "e",
    "n",
    "d",
    "e",
    "r",
  ];

  return (
    <section
      className="min-h-screen w-full flex flex-col items-center justify-center text-center px-4 space-y-6 overflow-hidden sm:snap-start"
      id="hero"
    >
      {/* Title */}
      <div className="text-center mt-20 text-3xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 1 }}
          >
            {word === " " ? "\u00A0" : word}{" "}
            {/* Non-breaking space for empty string */}
          </motion.span>
        ))}
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
      >
        Full-stack developer with 3+ years of experience building scalable,
        high-performance apps using{" "}
        <span className="font-semibold text-foreground">React.js</span>,{" "}
        <span className="font-semibold text-foreground">Next.js</span>,{" "}
        <span className="font-semibold text-foreground">Node.js</span> and{" "}
        <span className="font-semibold text-foreground">AWS</span>. I craft
        clean, fast, and impactful web experiences.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4 mt-4"
      >
        <Button variant="outline" asChild>
          <a
            href="mailto:shivenderkumar761@gmail.com"
            className="flex items-center gap-2"
          >
            <HiOutlineMail className="w-4 h-4" />
            Contact
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a
            href="https://github.com/Shivender-kun"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a
            href="https://linkedin.com/in/shivender-kun"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaLinkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
