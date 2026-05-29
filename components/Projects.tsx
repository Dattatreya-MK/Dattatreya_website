import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const PROJECTS = [
  { title: "Twitter Sentiment Analysis", emoji: "🐦", desc: "NLP-based sentiment classification system that predicts Positive, Negative, and Neutral sentiment from Twitter data with high accuracy.", tags: ["Python","NLP","Streamlit","NLTK"], color: "#1DA1F2", bg: "linear-gradient(135deg,#e8f4fd,#f0f8ff)" },
  { title: "Insurance Price Prediction", emoji: "🏥", desc: "Regression-based ML model to predict insurance charges based on demographic and lifestyle factors with real-time Streamlit interface.", tags: ["Python","Scikit-learn","Streamlit","Pandas"], color: "#00b894", bg: "linear-gradient(135deg,#e8f8f5,#f0fdf9)" },
  { title: "Heart Attack Risk Classification", emoji: "❤️", desc: "Healthcare analytics application using Support Vector Machine (SVM) to classify heart attack risk from clinical parameters.", tags: ["Python","SVM","Scikit-learn","Healthcare"], color: "#e84393", bg: "linear-gradient(135deg,#fce4ec,#fff0f5)" },
  { title: "AI Data Analyst Bot", emoji: "🤖", desc: "Upload CSV datasets and ask questions in natural language. Automatically generates and executes Python code using LangChain + Groq LLM.", tags: ["LangChain","Groq LLM","Python","Streamlit"], color: "#6c5ce7", bg: "linear-gradient(135deg,#ede7f6,#f3e5f5)" },
  { title: "Chatbot with Memory", emoji: "💬", desc: "Context-aware AI chatbot with persistent conversation memory, enabling multi-turn dialogue using LangChain memory module and Groq LLM.", tags: ["LangChain","Groq LLM","Memory","Python"], color: "#fd7e14", bg: "linear-gradient(135deg,#fff3e0,#fffaf0)" },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 24px", background: "linear-gradient(180deg,#f8fbff,#f0f7ff)" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <FadeIn><SectionHeader tag="04" title="Projects" sub="What I've Built" /></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 24, marginTop: 64 }}>
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.07}>
              <div className="card-hover" style={{ background: "#fff", borderRadius: 24, overflow: "hidden", border: "1px solid #e8f0fe", boxShadow: "0 4px 24px rgba(21,101,192,0.06)", display: "flex", flexDirection: "column" }}>
                <div style={{ height: 180, background: p.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64, position: "relative" }}>
                  {p.emoji}
                  <div style={{ position: "absolute", top: 14, right: 14, width: 10, height: 10, borderRadius: "50%", background: p.color }} />
                </div>
                <div style={{ padding: "24px 24px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1e293b", margin: "0 0 10px" }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.65, flex: 1, margin: "0 0 16px" }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                    {p.tags.map(t => <span key={t} style={{ fontSize: 12, fontWeight: 600, color: p.color, background: `${p.color}1a`, padding: "4px 10px", borderRadius: 12 }}>{t}</span>)}
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <button style={{ flex: 1, padding: "10px 0", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Sora',sans-serif", background: "linear-gradient(135deg,#1565c0,#0288d1)", color: "#fff", border: "none" }}>GitHub ↗</button>
                    <button style={{ flex: 1, padding: "10px 0", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Sora',sans-serif", background: "transparent", color: "#1565c0", border: "1.5px solid rgba(21,101,192,0.3)" }}>Live Demo ⚡</button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
