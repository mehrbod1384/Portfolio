import Container from "@/components/common/Container";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-(--line) bg-[#0b0e11]/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <h2 className="font-mono text-lg font-bold text-(--amber)">
          mehrbod
          <span className="text-(--muted)">.dev</span>
        </h2>

        <ul className="hidden items-center gap-8 text-sm text-(--muted) md:flex">
          <a href="#skills" className="transition hover:text-(--teal)">
            مهارت‌ها
          </a>

          <a href="#projects" className="transition hover:text-(--teal)">
            پروژه‌ها
          </a>

          <a href="#contact" className="transition hover:text-(--teal)">
            تماس
          </a>
        </ul>
      </Container>
    </nav>
  );
}
