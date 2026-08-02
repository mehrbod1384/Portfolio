import SkillChip from "./SkillChip";

interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="rounded-xl border border-(--line) bg-(--surface) p-6">
      <h3 className="mb-5 font-mono text-(--teal)">{title}</h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillChip key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}
