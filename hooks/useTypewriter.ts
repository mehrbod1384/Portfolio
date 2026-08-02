"use client";

import { useEffect, useState } from "react";

interface UseTypewriterProps {
  text: string;
  speed?: number;
}

export default function useTypewriter({
  text,
  speed = 70,
}: UseTypewriterProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index + 1));

      index++;

      if (index >= text.length) {
        index = 0;
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}
