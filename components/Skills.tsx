import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const SKILLS: Record<string, { name: string; icon: string }[]> = {
  "Programming Languages": [{ name: "Python", icon: "🐍" }, { name: "SQL", icon: "🗄️" }],
  "Libraries & Frameworks": [{ name: "Pandas", icon: "🐼" }, { name: "NumPy", icon: "🔢" }, { name: "Scikit-learn", icon: "🤖" }, { name: "Streamlit", icon: "⚡" }, { name: "LangChain", icon: "🔗" }],
  "Data Visualization": [{ name: "Power BI", icon: "📊" }, { name: "Plotly", icon: "📈" }, { name: "Matplotlib", icon: "🎨" }, { name: "Seaborn", icon: "🌊" }],
  "Machine Learning": [{ name: "Regression", icon: "📉" }, { name: "Classification", icon: "🏷️" }, { name: "NLP", icon: "💬" }, { name: "Predictive Analytics", icon: "🔮" }],
  "Tools": [{ name: "GitHub", icon: "🐙" }, { name: "VS Code", icon: "💻" }, { name: "Jupyter Notebook", icon: "📓" }, { name: "Google Colab", icon: "☁️" }, { name: "Excel", icon: "📋" }, { name: "Power BI", icon: "📊" }],
};

const ACCENT_COLORS = ["#1565c0","#0288d1","#1976d2","#0277bd","#01579b"];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 24px", background: "linear-gradient(180deg,#f8fbff,#f0f7ff)" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <FadeIn><SectionHeader tag="02" title="Technical Skills" sub="My Expertise" /></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24, marginTop: 64 }}>
          {Object.entries(SKILLS).map(([cat, skills], ci) => (
            <FadeIn key={cat} delay={ci * 0.08}>
              <div className="card-hover" style={{ background: "#fff", borderRadius: 20, padding: 28, border: "1px solid #e8f0fe", boxShadow: "0 4px 24px rgba(21,101,192,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <div style={{ width: 6, height: 24, borderRadius: 4, background: ACCENT_COLORS[ci] }} />
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1e293b", margin: 0 }}>{cat}</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {skills.map(s => <span key={s.name} className="skill-tag"><span style={{ fontSize: 14 }}>{s.icon}</span>{s.name}</span>)}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
