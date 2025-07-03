import { skills } from "@/data/skills";
import SkillGroup from "../SkillGroup";
import { Section } from "../layout";

const Skills = () => {
  return (
    <Section title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {Object.entries(skills).map(([category, stack]) => (
          <SkillGroup key={category} category={category} skills={stack} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
