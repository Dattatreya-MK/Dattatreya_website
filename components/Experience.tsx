"use client";
import { Briefcase, CheckCircle2 } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const RESP = [
  "Data preprocessing and cleaning",
  "Exploratory Data Analysis (EDA)",
  "Machine Learning model development",
  "Predictive Analytics",
  "Data Visualization",
  "Business reporting and insights"
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeader tag="03" title="Experience" sub="Professional Milestones" />
        </FadeIn>
        
        <div className="mt-20 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#1565c0] via-[#4fc3f7] to-transparent hidden md:block transform -translate-x-1/2" />
          
          <div className="relative">
            <FadeIn delay={0.2}>
              <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                <div className="md:w-1/2 md:text-right">
                  <div className="bg-[#f8fbff] p-8 rounded-[32px] border border-[#e8f0fe] shadow-sm hover:shadow-xl transition-shadow duration-500 relative group overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#1565c0]/5 rounded-bl-full transform translate-x-8 -translate-y-8" />
                    
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#1565c0]/10 text-[#1565c0] text-[11px] font-bold tracking-widest uppercase mb-4">
                      Feb 2026 – May 2026
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#1e293b] mb-2">Data Science Intern</h3>
                    <p className="text-[#1565c0] font-bold text-sm mb-6 flex items-center md:justify-end gap-2">
                      <Briefcase size={16} /> TakeIt Smart (OPC) Pvt. Ltd.
                    </p>
                    
                    <div className="grid grid-cols-1 gap-3">
                      {RESP.map(r => (
                        <div key={r} className="flex gap-3 items-start md:flex-row-reverse text-left md:text-right">
                          <CheckCircle2 size={16} className="text-[#1565c0] mt-0.5 shrink-0" />
                          <span className="text-sm text-[#475569] font-medium leading-tight">{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-[#1565c0] items-center justify-center z-10 shadow-lg">
                  <Briefcase size={20} className="text-[#1565c0]" />
                </div>
                
                <div className="md:w-1/2" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
