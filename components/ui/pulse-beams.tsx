"use client";

interface PulseBeamsProps {
  className?: string;
  color?: string;
}

const NODES = [
  { x: 12, y: 18 },
  { x: 38, y: 8  },
  { x: 68, y: 14 },
  { x: 88, y: 38 },
  { x: 80, y: 68 },
  { x: 55, y: 82 },
  { x: 28, y: 75 },
  { x: 8,  y: 52 },
  { x: 50, y: 42 },
  { x: 35, y: 35 },
];

const CONNECTIONS = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0],
  [0, 9], [1, 9], [2, 8], [3, 8], [4, 8], [5, 9], [8, 9],
];

export function PulseBeams({ className = "", color = "#0EA5E9" }: PulseBeamsProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {CONNECTIONS.map((conn, i) => (
            <linearGradient
              key={`grad-${i}`}
              id={`beam-grad-${i}`}
              gradientUnits="userSpaceOnUse"
              x1={NODES[conn[0]].x}
              y1={NODES[conn[0]].y}
              x2={NODES[conn[1]].x}
              y2={NODES[conn[1]].y}
            >
              <stop offset="0%"   stopColor={color} stopOpacity="0" />
              <stop offset="50%"  stopColor={color} stopOpacity="0.60" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>

        {/* Static faint connection lines */}
        {CONNECTIONS.map(([a, b], i) => (
          <line
            key={`static-${i}`}
            x1={NODES[a].x} y1={NODES[a].y}
            x2={NODES[b].x} y2={NODES[b].y}
            stroke={`${color}18`}
            strokeWidth="0.18"
          />
        ))}

        {/* Animated pulse beams */}
        {CONNECTIONS.map(([a, b], i) => {
          const dx = NODES[b].x - NODES[a].x;
          const dy = NODES[b].y - NODES[a].y;
          const len = Math.sqrt(dx * dx + dy * dy);
          return (
            <line
              key={`pulse-${i}`}
              x1={NODES[a].x} y1={NODES[a].y}
              x2={NODES[b].x} y2={NODES[b].y}
              stroke={`url(#beam-grad-${i})`}
              strokeWidth="0.28"
              strokeDasharray={`${len * 0.35} ${len}`}
              style={{
                animation: `beamFlow ${3.5 + i * 0.4}s linear infinite`,
                animationDelay: `${i * 0.22}s`,
              }}
            />
          );
        })}

        {/* Nodes */}
        {NODES.map((node, i) => (
          <g key={`node-${i}`}>
            <circle
              cx={node.x} cy={node.y} r="1.1"
              fill="none"
              stroke={`${color}28`}
              strokeWidth="0.15"
              style={{
                animation: `nodePulse ${2.5 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.18}s`,
              }}
            />
            <circle
              cx={node.x} cy={node.y} r="0.40"
              fill={color}
              style={{
                animation: `nodePulse ${2.5 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.18}s`,
                opacity: 0.45,
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
