export default function Footer() {
  const socials = [
    { label: "GH", href: "https://github.com/Dattatreya-MK", title: "GitHub" },
    { label: "LI", href: "https://linkedin.com", title: "LinkedIn" },
    { label: "✉", href: "mailto:dattatreyamk@email.com", title: "Email" },
  ];
  return (
    <footer style={{ background: "linear-gradient(160deg,#0a122d,#0d2150)", color: "rgba(255,255,255,0.7)", padding: "48px 24px 36px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 28, fontWeight: 800, color: "#fff", marginBottom: 20, letterSpacing: "-1px" }}>
          <span style={{ color: "#4fc3f7" }}>D</span>MK
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 28 }}>
          {socials.map(s => (
            <a key={s.label} href={s.href} title={s.title} target="_blank" rel="noreferrer" style={{
              width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center",
              justifyContent: "center", color: "rgba(255,255,255,0.7)", textDecoration: "none",
              fontSize: 13, fontWeight: 700, transition: "all 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(79,195,247,0.2)"; (e.currentTarget as HTMLElement).style.color = "#4fc3f7"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"; }}
            >{s.label}</a>
          ))}
        </div>
        <p style={{ fontSize: 13, margin: 0 }}>
          Designed and Developed by <span style={{ color: "#4fc3f7", fontWeight: 700 }}>Dattatreya M K</span> · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
