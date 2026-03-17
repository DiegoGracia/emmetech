"use client";

import { useEffect, useState, useId } from "react";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  size: number;
  delay: number;
  duration: number;
}

function randomSparkle(): Sparkle {
  return {
    id: Math.random().toString(36).slice(2),
    x: `${Math.random() * 110 - 5}%`,
    y: `${Math.random() * 110 - 5}%`,
    size: Math.random() * 8 + 6,
    delay: Math.random() * 1.5,
    duration: Math.random() * 0.8 + 0.5,
  };
}

interface SparklesProps {
  children: React.ReactNode;
  className?: string;
  count?: number;
  color?: string;
}

export function Sparkles({
  children,
  className = "",
  count = 7,
  color = "#0EA5E9",
}: SparklesProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const prefix = useId();

  useEffect(() => {
    setSparkles(Array.from({ length: count }, randomSparkle));
    const id = setInterval(() => {
      setSparkles((prev) => {
        const next = [...prev];
        const idx = Math.floor(Math.random() * next.length);
        next[idx] = randomSparkle();
        return next;
      });
    }, 900);
    return () => clearInterval(id);
  }, [count]);

  return (
    <span className={`relative inline-block ${className}`}>
      {sparkles.map((s) => (
        <span
          key={`${prefix}-${s.id}`}
          className="absolute pointer-events-none select-none"
          style={{
            left: s.x,
            top: s.y,
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        >
          <svg
            width={s.size}
            height={s.size}
            viewBox="0 0 160 160"
            fill="none"
            aria-hidden="true"
            style={{
              animation: `sparkle-spin ${s.duration}s ease-in-out both`,
              animationDelay: `${s.delay}s`,
            }}
          >
            <path
              d="M80 0C80 0 84.285 41.293 101.496 58.504C118.707 75.715 160 80 160 80C160 80 118.707 84.285 101.496 101.496C84.285 118.707 80 160 80 160C80 160 75.715 118.707 58.504 101.496C41.293 84.285 0 80 0 80C0 80 41.293 75.715 58.504 58.504C75.715 41.293 80 0 80 0Z"
              fill={color}
            />
          </svg>
        </span>
      ))}
      <span className="relative" style={{ zIndex: 2 }}>
        {children}
      </span>
    </span>
  );
}
