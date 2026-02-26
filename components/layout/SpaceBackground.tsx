// Server component — no "use client" needed
// Stars are generated with a deterministic LCG so SSR output
// matches client hydration (never use Math.random() here).

function generateStars(count: number, size: number, spread: number): string {
  const shadows: string[] = [];
  // Linear Congruential Generator — deterministic, reproducible
  let seed = count * size * 7 + spread * 3 + 42;
  function lcg(): number {
    seed = (seed * 1664525 + 1013904223) & 0x7fffffff;
    return seed / 0x7fffffff;
  }

  for (let i = 0; i < count; i++) {
    const x = Math.floor(lcg() * spread);
    const y = Math.floor(lcg() * 2000);
    const opacity = (0.35 + lcg() * 0.65).toFixed(2);
    const blur = size > 2 ? ` ${size - 1}px` : "";
    const shadow = `${x}px ${y}px${blur} ${size - 1}px rgba(232,240,255,${opacity})`;
    // Duplicate shifted 2000px down for seamless loop
    const shadow2 = `${x}px ${y + 2000}px${blur} ${size - 1}px rgba(232,240,255,${opacity})`;
    shadows.push(shadow, shadow2);
  }

  return shadows.join(", ");
}

const starsSmall = generateStars(220, 1, 1800);
const starsMedium = generateStars(110, 2, 1800);
const starsLarge = generateStars(50, 3, 1800);

export default function SpaceBackground() {
  return (
    <div className="space-bg" aria-hidden="true">
      {/* Nebula atmospheric blobs */}
      <div className="nebula-blob nebula-teal" />
      <div className="nebula-blob nebula-navy" />
      <div className="nebula-blob nebula-teal-2" />

      {/* Decorative planets */}
      <div className="planet planet-teal" />
      <div className="planet planet-navy" />

      {/* Animated star layers */}
      <div className="stars-layer stars-sm" style={{ boxShadow: starsSmall }} />
      <div className="stars-layer stars-md" style={{ boxShadow: starsMedium }} />
      <div className="stars-layer stars-lg" style={{ boxShadow: starsLarge }} />
    </div>
  );
}
