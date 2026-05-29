"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = ["About","Skills","Experience","Projects","Education","Certifications","Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(10,18,45,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(18px)" : "none",
      transition: "all 0.4s",
      padding: scrolled ? "14px 0" : "22px 0",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
    }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontWeight: 800, fontSize: 20, color: "#fff", letterSpacing: "-0.5px", cursor:"pointer" }} onClick={() => scrollTo("hero")}>
          <span style={{ color: "#4fc3f7" }}>D</span>MK
        </span>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="hidden md:flex">
          {NAV_LINKS.map(n => (
            <button key={n} onClick={() => scrollTo(n)} style={{
              background: "none", border: "none", color: "rgba(255,255,255,0.8)", cursor: "pointer",
              fontSize: 14, fontWeight: 500, fontFamily: "'Sora',sans-serif", padding: "4px 0",
              transition: "color 0.2s", letterSpacing: "0.3px",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#4fc3f7")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
            >{n}</button>
          ))}
          <button onClick={() => scrollTo("contact")} className="btn-primary" style={{ borderRadius: 24, padding: "10px 22px", fontSize: 13 }}>
            Hire Me
          </button>
        </div>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#fff", fontSize: 26, cursor: "pointer" }}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: "rgba(10,18,45,0.98)", padding: "16px 24px 24px" }}>
          {NAV_LINKS.map(n => (
            <div key={n} onClick={() => scrollTo(n)} style={{
              padding: "12px 0", color: "rgba(255,255,255,0.85)", cursor: "pointer",
              fontSize: 15, fontWeight: 500, borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>{n}</div>
          ))}
          <button onClick={() => scrollTo("contact")} className="btn-primary" style={{ marginTop: 16, width: "100%" }}>
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
}
