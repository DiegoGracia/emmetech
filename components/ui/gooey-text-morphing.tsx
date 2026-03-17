"use client";

import { useState, useEffect } from "react";

interface GooeyTextMorphingProps {
  texts: string[];
  className?: string;
  interval?: number;
}

export function GooeyTextMorphing({
  texts,
  className = "",
  interval = 2800,
}: GooeyTextMorphingProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      // Phase 1: blur out
      setVisible(false);
      setTimeout(() => {
        // Phase 2: change text
        setIndex((i) => (i + 1) % texts.length);
        // Phase 3: blur in
        setVisible(true);
      }, 420);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span
      className={`inline-block ${className}`}
      style={{
        filter: visible ? "blur(0px)" : "blur(9px)",
        opacity: visible ? 1 : 0,
        transition: "filter 0.38s ease, opacity 0.38s ease",
        willChange: "filter, opacity",
      }}
    >
      {texts[index]}
    </span>
  );
}
