interface SkillChipProps {
  skill: string;
}

export default function SkillChip({ skill }: SkillChipProps) {
  return (
    <span className="rounded-md border border-(--line) bg-(--surface-2) px-3 py-1.5 font-mono text-sm transition-colors hover:border-(--amber)">
      {skill}
    </span>
  );
}
