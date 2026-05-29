"use client";

interface Props { onScrollTo: (id: string) => void; }

const STARS = Array.from({ length: 14 }, (_, i) => ({
  w: (i % 3) + 2, l: (i * 7.3) % 100, t: (i * 11.7) % 100, d: (i % 3) + 2
}));

export default function Hero({ onScrollTo }: Props) {
  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      background: "linear-gradient(160deg,#0a122d 0%,#0d2150 40%,#0f3460 70%,#1565c0 100%)",
      position: "relative", overflow: "hidden", paddingTop: 80,
    }}>
      {/* Stars */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {STARS.map((s, i) => (
          <div key={i} style={{
            position: "absolute", width: s.w, height: s.w, background: "rgba(79,195,247,0.8)",
            borderRadius: "50%", left: `${s.l}%`, top: `${s.t}%`,
            animation: `twinkle ${s.d}s ease-in-out infinite alternate`,
          }} />
        ))}
        <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(21,101,192,0.22) 0%,transparent 70%)", top: -200, right: -200 }} />
        <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(79,195,247,0.1) 0%,transparent 70%)", bottom: -100, left: -100 }} />
      </div>

      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "60px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", position: "relative", zIndex: 2, width: "100%" }}>
        {/* Text */}
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(79,195,247,0.15)", border: "1px solid rgba(79,195,247,0.3)", borderRadius: 24, padding: "6px 16px", marginBottom: 24 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4fc3f7" }} className="anim-pulse" />
            <span style={{ color: "#4fc3f7", fontSize: 13, fontWeight: 500, letterSpacing: "0.5px" }}>Available for Opportunities</span>
          </div>

          <h1 style={{ fontSize: "clamp(36px,5vw,62px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 12, letterSpacing: "-2px" }}>
            Dattatreya<br />
            <span style={{ background: "linear-gradient(90deg,#4fc3f7,#81d4fa,#b3e5fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>M K</span>
          </h1>
          <p style={{ fontSize: "clamp(16px,2vw,21px)", fontWeight: 600, color: "#90caf9", marginBottom: 16, letterSpacing: "-0.3px" }}>
            Data Science & Machine Learning Enthusiast
          </p>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: 40, maxWidth: 480 }}>
            Building AI-powered solutions using Machine Learning, Data Analytics, NLP, and Generative AI.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button className="btn-primary">⬇ Download Resume</button>
            <button className="btn-outline" onClick={() => onScrollTo("projects")}>🚀 View Projects</button>
            <button className="btn-outline" onClick={() => onScrollTo("contact")}>✉️ Contact Me</button>
          </div>

          <div style={{ display: "flex", gap: 32, marginTop: 44 }}>
            {[{n:"5+",s:"Projects"},{n:"1+",s:"Internship"},{n:"3+",s:"Certifications"}].map(x => (
              <div key={x.s} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#4fc3f7", lineHeight: 1 }}>{x.n}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>{x.s}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative" }}>
            <div style={{ width: 300, height: 300, borderRadius: "50%", background: "linear-gradient(135deg,#1565c0,#0288d1,#4fc3f7)", padding: 4 }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "linear-gradient(160deg,#1a2a5e,#1e3a7a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 100 }}>👨‍💻</div>
            </div>
            {[{pos:{top:16,right:-20},text:"ML",cls:"anim-float"},{pos:{bottom:24,left:-30},text:"AI",cls:"anim-float-2"},{pos:{top:"42%",right:-44},text:"NLP",cls:"anim-float-3"}].map((b,i) => (
              <div key={i} className={b.cls} style={{ position: "absolute", ...b.pos as React.CSSProperties, background: "linear-gradient(135deg,#1565c0,#0288d1)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "6px 14px", borderRadius: 20, boxShadow: "0 4px 16px rgba(2,136,209,0.5)" }}>{b.text}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", textAlign: "center" }}>
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, letterSpacing: "2px", marginBottom: 8 }}>SCROLL</div>
        <div className="anim-scroll" style={{ width: 1, height: 40, background: "linear-gradient(to bottom,rgba(79,195,247,0.7),transparent)", margin: "0 auto" }} />
      </div>
    </section>
  );
}
