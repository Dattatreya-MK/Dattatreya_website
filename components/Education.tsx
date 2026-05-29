"use client";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <FadeIn>
          <SectionHeader tag="05" title="Education" sub="Academic Foundation" />
        </FadeIn>
        
        <div className="mt-16">
          <FadeIn delay={0.1}>
            <div className="group relative bg-gradient-to-br from-[#0d2150] to-[#1565c0] rounded-[40px] p-8 md:p-12 text-white overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/10 transition-colors" />
              
              <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#4fc3f7] text-xs font-bold uppercase tracking-widest mb-6">
                    <Calendar size={14} /> 2022 – 2026
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black mb-2 tracking-tighter">Bachelor of Engineering</h3>
                  <p className="text-xl md:text-2xl text-[#90caf9] font-bold mb-8">Computer Science & Engineering</p>
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-white/70">
                      <div className="p-2 rounded-lg bg-white/5">
                        <GraduationCap size={20} className="text-[#4fc3f7]" />
                      </div>
                      <span className="text-base font-semibold">AMC Engineering College</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <div className="p-2 rounded-lg bg-white/5">
                        <MapPin size={20} className="text-[#4fc3f7]" />
                      </div>
                      <span className="text-base font-semibold">Bangalore, Karnataka</span>
                    </div>
                  </div>
                </div>
                
                <div className="hidden lg:block text-[180px] opacity-10 leading-none select-none">
                  🎓
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
