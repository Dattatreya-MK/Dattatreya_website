"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px", borderRadius: 12,
    border: "1.5px solid #e2e8f0", fontSize: 14, fontFamily: "'Sora',sans-serif",
    background: "#fff", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <FadeIn><SectionHeader tag="07" title="Get In Touch" sub="Contact Me" /></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 56, marginTop: 64 }}>
          <FadeIn dir="left">
            <div>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: "#1e293b", marginBottom: 14 }}>Let's Work Together</h3>
              <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.75, marginBottom: 40 }}>
                Open to Data Science, ML, and AI internship or full-time opportunities. Feel free to reach out!
              </p>
              {[
                { icon: "✉️", label: "Email", val: "dattatreyamk@email.com", href: "mailto:dattatreyamk@email.com" },
                { icon: "📞", label: "Phone", val: "+91 XXXXXXXXXX", href: "tel:+91XXXXXXXXXX" },
                { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/dattatreyamk", href: "https://linkedin.com" },
                { icon: "🐙", label: "GitHub", val: "github.com/Dattatreya-MK", href: "https://github.com/Dattatreya-MK" },
              ].map(item => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" style={{ display: "flex", gap: 16, marginBottom: 20, alignItems: "center", textDecoration: "none", transition: "opacity 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  <div style={{ width: 46, height: 46, borderRadius: 14, background: "linear-gradient(135deg,#e3f2fd,#e8f4fd)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, color: "#9ca3af", fontWeight: 500 }}>{item.label}</div>
                    <div style={{ fontSize: 14, color: "#1565c0", fontWeight: 600 }}>{item.val}</div>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn dir="right" delay={0.1}>
            <form onSubmit={handleSubmit} style={{ background: "linear-gradient(160deg,#f8fbff,#f0f7ff)", borderRadius: 24, padding: 36, border: "1px solid #e8f0fe" }}>
              {[
                { id: "name" as const, label: "Your Name", type: "text", placeholder: "John Doe" },
                { id: "email" as const, label: "Email Address", type: "email", placeholder: "john@email.com" },
              ].map(f => (
                <div key={f.id} style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 8 }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} value={form[f.id]}
                    onChange={e => setForm({ ...form, [f.id]: e.target.value })} required style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "#1565c0")}
                    onBlur={e => (e.target.style.borderColor = "#e2e8f0")}
                  />
                </div>
              ))}
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 8 }}>Message</label>
                <textarea placeholder="Your message..." rows={5} value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })} required
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={e => (e.target.style.borderColor = "#1565c0")}
                  onBlur={e => (e.target.style.borderColor = "#e2e8f0")}
                />
              </div>
              <button type="submit" style={{
                width: "100%", padding: "14px 0", borderRadius: 14, fontSize: 15, fontWeight: 700,
                cursor: "pointer", fontFamily: "'Sora',sans-serif", border: "none",
                background: sent ? "linear-gradient(135deg,#00b894,#00cec9)" : "linear-gradient(135deg,#1565c0,#0288d1)",
                color: "#fff", transition: "all 0.3s", boxShadow: "0 6px 24px rgba(21,101,192,0.35)",
              }}>
                {sent ? "✓ Message Sent!" : "Send Message →"}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
