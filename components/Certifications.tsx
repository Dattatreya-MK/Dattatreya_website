"use client";
import { Award, CheckCircle } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const CERTS = [
  { name: "Machine Learning & Data Science", org: "Coursera / NPTEL", icon: "🎯", color: "#1565c0" },
  { name: "Power BI & Data Analytics Training", org: "Microsoft / TakeIt Smart", icon: "📊", color: "#0288d1" },
  { name: "Business Analytics with Excel", org: "Corporate Training", icon: "📋", color: "#00b894" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-gradient-to-b from-[#f8fbff] to-[#f0f7ff]">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader tag="06" title="Certifications" sub="Achievements" />
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {CERTS.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.1}>
              <div className="group bg-white p-8 rounded-3xl border border-[#e8f0fe] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${c.color}10` }}
                >
                  {c.icon}
                </div>
                
                <h4 className="text-lg font-bold text-[#1e293b] mb-2 leading-snug">{c.name}</h4>
                <p className="text-sm text-[#6b7280] mb-8 font-medium">{c.org}</p>
                
                <div className="mt-auto flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e3f2fd] text-[#1565c0] text-[10px] font-black uppercase tracking-widest">
                  <Award size={14} /> Certified
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
