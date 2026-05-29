"use client";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Building2, Calendar, User, Zap } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

export default function About() {
  const info = [
    { icon: <MapPin size={20} />, label: "Location", val: "Bangalore, India" },
    { icon: <GraduationCap size={20} />, label: "Degree", val: "B.E. Computer Science" },
    { icon: <Building2 size={20} />, label: "College", val: "AMC Engineering College" },
    { icon: <Calendar size={20} />, label: "Grad Year", val: "2026" },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader tag="01" title="About Me" sub="My Professional Journey" />
        </FadeIn>
        
        <div className="grid lg:grid-cols-12 gap-16 items-center mt-16">
          <div className="lg:col-span-5">
            <FadeIn dir="left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#1565c0] to-[#4fc3f7] rounded-[32px] opacity-20 group-hover:opacity-30 blur-2xl transition duration-500" />
                <div className="relative aspect-square rounded-3xl bg-gradient-to-tr from-[#e3f2fd] to-[#e1f5fe] border-2 border-[#e3f2fd] flex items-center justify-center overflow-hidden">
                  <User size={120} className="text-[#1565c0]/20" />
                  <motion.div 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute inset-0 flex items-center justify-center text-9xl select-none"
                  >
                    👨‍💻
                  </motion.div>
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#1565c0] to-[#0288d1] text-white p-6 rounded-2xl shadow-2xl z-10"
                >
                  <div className="text-3xl font-black leading-none">2026</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-80 mt-1">Graduating</div>
                </motion.div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn dir="right" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#1e293b] flex items-center gap-3">
                  <Zap className="text-[#1565c0]" fill="currentColor" />
                  Turning Data into Intelligence
                </h3>
                
                <p className="text-lg leading-relaxed text-[#475569] font-medium">
                  I am a highly motivated Data Science and Machine Learning enthusiast with a deep passion for building scalable, AI-driven solutions. My expertise lies in Python, NLP, and Generative AI.
                </p>
                
                <p className="text-base leading-relaxed text-[#64748b]">
                  Currently pursuing my Bachelor&apos;s in Computer Science, I focus on bridging the gap between raw data and actionable insights through advanced predictive modeling and intelligent systems.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                  {info.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="w-12 h-12 rounded-xl bg-[#e3f2fd] text-[#1565c0] flex items-center justify-center group-hover:bg-[#1565c0] group-hover:text-white transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-[#9ca3af] uppercase tracking-wider">{item.label}</div>
                        <div className="text-sm font-bold text-[#1e293b] mt-0.5">{item.val}</div>
                      </div>
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
