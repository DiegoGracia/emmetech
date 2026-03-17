"use client";

import Link from "next/link";
import { useRef, MouseEvent as ReactMouseEvent, ReactNode } from "react";

interface MagnetizeButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "ghost";
  strength?: number;
}

export function MagnetizeButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  strength = 0.28,
}: MagnetizeButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const baseClass =
    variant === "primary"
      ? "btn-gold-primary rounded-md px-6 py-3 text-sm font-semibold"
      : "btn-ghost-border rounded-md px-6 py-3 text-sm font-semibold";

  const handleMove = (e: ReactMouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    el.style.transition = "transform 0.08s linear";
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)";
    el.style.transform = "translate(0, 0)";
  };

  const combined = `${baseClass} ${className}`;

  if (href) {
    return (
      <Link
        ref={ref}
        href={href}
        className={combined}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      onClick={onClick}
      className={combined}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </button>
  );
}
