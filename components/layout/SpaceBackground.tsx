// Deep void background — matches emme-technologies.vercel.app brand
// Subtle cyan radial glow + faint hex pattern overlay

export default function SpaceBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        backgroundColor: "#04060F",
        backgroundImage: [
          // Cyan radial glow — top center
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(2,132,199,0.12) 0%, transparent 65%)",
          // Subtle dot grid
          "radial-gradient(circle, rgba(14,165,233,0.025) 1px, transparent 1px)",
        ].join(", "),
        backgroundSize: "auto, 44px 44px",
        pointerEvents: "none",
      }}
    />
  );
}
