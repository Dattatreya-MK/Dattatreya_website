interface Props { tag: string; title: string; sub: string; }

export default function SectionHeader({ tag, title, sub }: Props) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <span style={{ fontSize: 12, fontFamily: "'Space Mono',monospace", color: "#1565c0", fontWeight: 700, letterSpacing: "1px" }}>{tag} /</span>
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "2.5px", color: "#9ca3af", textTransform: "uppercase" as const }}>{sub}</span>
      </div>
      <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "#0f1729", margin: 0, letterSpacing: "-1.5px" }}>{title}</h2>
      <div className="section-divider" />
    </div>
  );
}
