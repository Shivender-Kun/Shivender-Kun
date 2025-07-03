import { Hero, Experience, Skills, Projects, CTA } from "@/components/sections";
import { Footer } from "@/components/layout";

export default function HomePage() {
  return (
    <main
      id="home"
      className="
      sm:snap-y sm:snap-mandatory 
      h-screen overflow-y-scroll space-y-20
      px-4 sm:px-8 text-black dark:text-white 
      bg-gradient-to-b from-white via-gray-100 to-white 
      dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 dark:to-gray-950
      transition-colors duration-300"
    >
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <CTA />
      <Footer />
    </main>
  );
}
