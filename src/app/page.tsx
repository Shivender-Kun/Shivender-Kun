import { Hero, Experience, Skills, Projects, CTA } from "@/components/sections";
import ScrollToTop from "@/components/ui/scrollToTop";
import { Footer } from "@/components/layout";

export default function HomePage() {
  return (
    <main
      className="
      sm:snap-y sm:snap-mandatory 
      h-screen overflow-y-scroll space-y-1
      px-4 sm:px-8 text-black dark:text-white 
      bg-gradient-to-b from-white via-gray-100 to-white 
      dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 dark:to-gray-950
      transition-colors duration-300"
    >
      <div id="top" className="h-0"></div>

      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <CTA />

      <ScrollToTop />
      <Footer />
    </main>
  );
}
