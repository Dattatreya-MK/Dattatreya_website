import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const CERTS = [
  { name: "Machine Learning & Data Science", org: "Coursera / NPTEL", icon: "🎯" },
  { name: "Power BI & Data Analytics Training", org: "Microsoft / TakeIt Smart", icon: "📊" },
  { name: "Business Analytics with Excel", org: "Corporate Training", icon: "📋" },
];

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "100px 24px", background: "linear-gradient(180deg,#f8fbff,#f0f7ff)" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <FadeIn><SectionHeader tag="06" title="Certifications" sub="Achievements" /></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20, marginTop: 64 }}>
          {CERTS.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.1}>
              <div className="card-hover" style={{ background: "#fff", borderRadius: 20, padding: "28px", border: "1px solid #e8f0fe", boxShadow: "0 4px 20px rgba(21,101,192,0.05)", display: "flex", gap: 18, alignItems: "flex-start" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "linear-gradient(135deg,#e3f2fd,#e8f4fd)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#1e293b", margin: "0 0 6px" }}>{c.name}</h4>
                  <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>{c.org}</p>
                  <span style={{ display: "inline-block", marginTop: 10, fontSize: 11, fontWeight: 700, color: "#1565c0", background: "#e3f2fd", padding: "3px 10px", borderRadius: 8 }}>CERTIFIED ✓</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
