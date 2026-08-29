interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-(--line) bg-(--surface) p-6">
      <h3 className="mb-3 text-xl font-bold">{title}</h3>

      <p className="mb-5 text-sm leading-7 text-(--muted)">{description}</p>

      <div className="mb-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-(--surface-2) px-3 py-1 text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-(--teal) hover:underline"
        >
          GitHub
        </a>

        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-(--amber) hover:underline"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}
