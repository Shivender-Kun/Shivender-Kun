import IconSkillBadge from "./IconSkillBadge";

export default function SkillGroup({
  category,
  skills,
}: {
  category: string;
  skills: string[];
}) {
  return (
    <div className="rounded-lg shadow-sm p-5 transition-colors border border-gray-200 dark:border-gray-700 card-style">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3 border-b pb-1 border-gray-300 dark:border-gray-600">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <IconSkillBadge key={skill} label={skill} />
        ))}
      </div>
    </div>
  );
}
