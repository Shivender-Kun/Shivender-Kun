import { projects } from "@/data/projects";
import ProjectCard from "../ProjectCard";
import { Section } from "../layout";

const Projects = () => {
  return (
    <Section title="Projects">
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
