"use client";

import useTypewriter from "@/hooks/useTypewriter";

export default function TypingText() {
  const text = useTypewriter({
    text: "Frontend Developer",
    speed: 70,
  });

  return (
    <p className="font-mono text-green-400">
      <span className="animate-pulse text-(--amber)">▍</span>
      {text}
    </p>
  );
}
