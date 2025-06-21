import ExperienceSection from "@/components/ExperienceSection";
import ProjectCard from "@/components/ProjectCard";
import SkillGroup from "@/components/SkillGroup";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main className="min-h-screen h-screen overflow-y-scroll snap-y snap-mandatory px-4 sm:px-8 bg-gradient-to-b from-white via-gray-100 to-white text-black dark:text-white dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* Hero */}
        <Hero />

        {/* Skills */}
        <Section title="Skills">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {Object.entries(skills).map(([category, stack]) => (
              <SkillGroup key={category} category={category} skills={stack} />
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </Section>

        {/* Experience */}
        <ExperienceSection />

        {/* CTA */}
        <Section fullHeight={false}>
          <div className="text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold">
              Let’s build something amazing together
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              I’m open to full-time, freelance, or remote collaboration.
            </p>
            <Button variant="outline" asChild>
              <a href="mailto:shivenderkumar761@gmail.com">
                Start a conversation
              </a>
            </Button>
          </div>
        </Section>
      </div>
    </main>
  );
}
