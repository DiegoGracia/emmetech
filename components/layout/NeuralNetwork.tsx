"use client";

import { useEffect, useRef } from "react";

interface NodeData {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glowColor: string;
}

interface Pulse {
  from: NodeData;
  to: NodeData;
  progress: number;
  speed: number;
  color: string;
}

// Palette: teal-cyan + purple-magenta, matches brand teal
const PALETTE = [
  { fill: "#3DE8FA", glow: "#3DE8FA" }, // teal
  { fill: "#3DE8FA", glow: "#3DE8FA" }, // teal (weighted higher)
  { fill: "#3DE8FA", glow: "#3DE8FA" }, // teal
  { fill: "#C084FC", glow: "#D946EF" }, // purple
  { fill: "#818CF8", glow: "#6366F1" }, // indigo (bridge)
];

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const nodes: NodeData[] = [];
    const pulses: Pulse[] = [];

    const NODE_COUNT = 38;
    const MAX_DIST = 200;
    const PULSE_INTERVAL_MS = 320;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resize);
    resize();

    // Initialise nodes with deterministic-ish spread
    for (let i = 0; i < NODE_COUNT; i++) {
      const p = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: 1.8 + Math.random() * 2.8,
        color: p.fill,
        glowColor: p.glow,
      });
    }

    function spawnPulse() {
      // Pick a random existing connection and fire a pulse along it
      for (let attempt = 0; attempt < 15; attempt++) {
        const a = nodes[Math.floor(Math.random() * nodes.length)];
        const b = nodes[Math.floor(Math.random() * nodes.length)];
        if (a === b) continue;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        if (Math.sqrt(dx * dx + dy * dy) < MAX_DIST) {
          // Pulse color inherits from the source node occasionally
          const useColor = Math.random() > 0.4 ? a.color : "#C084FC";
          pulses.push({ from: a, to: b, progress: 0, speed: 0.006 + Math.random() * 0.009, color: useColor });
          return;
        }
      }
    }

    let lastPulseMs = 0;

    function draw(ts: number) {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move nodes + bounce off edges
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.22;
            // Blend color: mostly teal, hint of node color
            ctx.beginPath();
            ctx.strokeStyle = `rgba(61, 232, 250, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Update + draw pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;
        if (p.progress >= 1) {
          pulses.splice(i, 1);
          continue;
        }
        const dx = p.to.x - p.from.x;
        const dy = p.to.y - p.from.y;
        if (Math.sqrt(dx * dx + dy * dy) > MAX_DIST) {
          pulses.splice(i, 1);
          continue;
        }
        const px = p.from.x + dx * p.progress;
        const py = p.from.y + dy * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw nodes
      for (const n of nodes) {
        // Outer glow ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius + 3, 0, Math.PI * 2);
        ctx.fillStyle = `${n.glowColor}18`;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.shadowBlur = 14;
        ctx.shadowColor = n.glowColor;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Spawn a new pulse on interval
      if (ts - lastPulseMs > PULSE_INTERVAL_MS) {
        spawnPulse();
        lastPulseMs = ts;
      }

      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1, opacity: 0.78 }}
      aria-hidden="true"
    />
  );
}
