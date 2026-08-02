function Footer() {
  return (
    <footer className="mt-20 py-8 border-t-[0.01px] border-(--line)">
      <p className="font-mono text-xs text-center text-(--muted)">
        © {new Date().getFullYear()} mehrbod.dev — built with Next.js & Tailwind
      </p>
    </footer>
  );
}

export default Footer;
