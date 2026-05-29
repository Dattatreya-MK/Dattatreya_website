import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const RESP = ["Data preprocessing and cleaning","Exploratory Data Analysis (EDA)","Machine Learning model development","Predictive Analytics","Data Visualization","Business reporting and insights"];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <FadeIn><SectionHeader tag="03" title="Experience" sub="Work History" /></FadeIn>
        <div style={{ marginTop: 64, position: "relative", maxWidth: 860 }}>
          <div style={{ position: "absolute", left: 19, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom,#1565c0,#4fc3f7)", borderRadius: 2 }} />
          <div style={{ paddingLeft: 60 }}>
            <FadeIn delay={0.1}>
              <div style={{ position: "relative", background: "#fff", border: "1px solid #e8f0fe", borderRadius: 20, padding: "32px 36px", boxShadow: "0 4px 32px rgba(21,101,192,0.07)" }}>
                <div style={{ position: "absolute", left: -41, top: 34, width: 20, height: 20, borderRadius: "50%", background: "linear-gradient(135deg,#1565c0,#0288d1)", border: "3px solid #fff", boxShadow: "0 0 0 3px rgba(21,101,192,0.2)" }} />
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1e293b", margin: "0 0 4px" }}>Data Science Intern</h3>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#1565c0", margin: 0 }}>TakeIt Smart (OPC) Pvt. Ltd.</p>
                  </div>
                  <span style={{ background: "linear-gradient(135deg,#e3f2fd,#e8f4fd)", color: "#1565c0", fontSize: 13, fontWeight: 600, padding: "8px 18px", borderRadius: 24, border: "1px solid rgba(21,101,192,0.15)", height: "fit-content" }}>
                    Feb 2026 – May 2026
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 10 }}>
                  {RESP.map(r => (
                    <div key={r} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1565c0", marginTop: 7, flexShrink: 0 }} />
                      <span style={{ fontSize: 14, color: "#475569" }}>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
