import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <FadeIn><SectionHeader tag="01" title="About Me" sub="My Story" /></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "center", marginTop: 64 }}>
          <FadeIn dir="left">
            <div style={{ position: "relative" }}>
              <div style={{ width: "100%", paddingBottom: "100%", borderRadius: 24, background: "linear-gradient(160deg,#e3f2fd,#e1f5fe)", position: "relative", overflow: "hidden", border: "2px solid #e3f2fd" }}>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 90 }}>👨‍💻</div>
              </div>
              <div style={{ position: "absolute", bottom: -16, right: -16, background: "linear-gradient(135deg,#1565c0,#0288d1)", color: "#fff", padding: "14px 20px", borderRadius: 16, boxShadow: "0 8px 32px rgba(2,136,209,0.4)" }}>
                <div style={{ fontSize: 22, fontWeight: 800 }}>2026</div>
                <div style={{ fontSize: 11, opacity: 0.85 }}>Graduating</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn dir="right" delay={0.1}>
            <div>
              <p style={{ fontSize: 18, lineHeight: 1.9, color: "#374151", marginBottom: 24 }}>
                Passionate and motivated Data Science and Machine Learning enthusiast with hands-on experience in building real-world AI and ML applications using Python, Streamlit, NLP, and Generative AI tools.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.9, color: "#6b7280", marginBottom: 36 }}>
                Skilled in Machine Learning, Data Analytics, Data Visualization, and AI Chatbot development. Interested in solving real-world problems through intelligent systems and predictive analytics.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {[
                  { icon: "📍", label: "Location", val: "Bangalore, India" },
                  { icon: "🎓", label: "Degree", val: "B.E. Computer Science" },
                  { icon: "🏢", label: "College", val: "AMC Engineering College" },
                  { icon: "📅", label: "Grad Year", val: "2026" },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 22 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: 12, color: "#9ca3af", fontWeight: 500 }}>{item.label}</div>
                      <div style={{ fontSize: 14, color: "#1e293b", fontWeight: 600 }}>{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
