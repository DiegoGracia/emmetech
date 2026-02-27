// Fixed dark base background — futuristic neural-network substrate
// Subtle dot-grid gives a "circuit board" texture without competing
// with the NeuralNetwork canvas layer above it.

export default function SpaceBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        backgroundColor: "#04060F",
        backgroundImage:
          "radial-gradient(circle, rgba(75,124,243,0.040) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
        pointerEvents: "none",
      }}
    />
  );
}
