import { hero } from "@/data/hero";

export default function HeroContent() {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <span className="animate-pulse h-2 w-2 rounded-full bg-(--teal) shadow-[0_0_15px_#5FD4C4]" />

        <p className="font-mono text-sm tracking-wider text-(--teal)">
          {hero.badge}
        </p>
      </div>

      <h1 className="mb-6 text-5xl font-extrabold leading-tight lg:text-7xl">
        {hero.name}
        <br />
        توسعه‌دهنده
        <span className="text-(--amber)"> {hero.role}</span>
      </h1>

      <p className="mb-10 max-w-xl leading-8 text-(--muted)">
        {hero.description}
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-(--amber) px-6 py-3 font-semibold text-black transition hover:-translate-y-1 hover:brightness-110"
        >
          {hero.buttons.projects}
        </a>
      </div>
    </div>
  );
}
