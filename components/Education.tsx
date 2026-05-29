import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <FadeIn><SectionHeader tag="05" title="Education" sub="Academic Background" /></FadeIn>
        <div style={{ marginTop: 64, maxWidth: 720 }}>
          <FadeIn delay={0.1}>
            <div style={{ background: "linear-gradient(160deg,#0d2150,#1565c0)", borderRadius: 24, padding: "40px 44px", color: "#fff", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
                <div>
                  <span style={{ fontSize: 12, background: "rgba(79,195,247,0.2)", color: "#4fc3f7", padding: "4px 12px", borderRadius: 12, fontWeight: 600, letterSpacing: "0.5px" }}>2022 – 2026</span>
                  <h3 style={{ fontSize: 22, fontWeight: 800, margin: "14px 0 6px", letterSpacing: "-0.5px" }}>Bachelor of Engineering</h3>
                  <p style={{ fontSize: 17, color: "#90caf9", fontWeight: 600, margin: "0 0 12px" }}>Computer Science</p>
                  <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: 8 }}>🏫 AMC Engineering College, Bangalore</p>
                </div>
                <div style={{ fontSize: 64 }}>🎓</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
