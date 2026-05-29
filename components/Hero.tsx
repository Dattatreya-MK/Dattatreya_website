"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Rocket, Brain, Code, Cpu } from "lucide-react";

interface Props { onScrollTo: (id: string) => void; }

const STARS = Array.from({ length: 20 }, (_, i) => ({
  w: (i % 3) + 2, l: (i * 7.3) % 100, t: (i * 11.7) % 100, d: (i % 3) + 2
}));

export default function Hero({ onScrollTo }: Props) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0a122d]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-radial-gradient(circle,rgba(21,101,192,0.2) 0%,transparent 70%)" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-radial-gradient(circle,rgba(79,195,247,0.1) 0%,transparent 70%)" />
        
        {STARS.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ duration: s.d, repeat: Infinity, repeatType: "alternate" }}
            className="absolute rounded-full bg-[#4fc3f7]/80"
            style={{ width: s.w, height: s.w, left: `${s.l}%`, top: `${s.t}%` }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4fc3f7]/15 border border-[#4fc3f7]/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#4fc3f7] animate-pulse" />
            <span className="text-[#4fc3f7] text-xs font-semibold tracking-wider">Available for Opportunities</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-4 tracking-tighter">
            Dattatreya<br />
            <span className="bg-gradient-to-r from-[#4fc3f7] via-[#81d4fa] to-[#b3e5fc] bg-clip-text text-transparent">M K</span>
          </h1>
          
          <p className="text-xl lg:text-2xl font-semibold text-[#90caf9] mb-4 tracking-tight">
            Data Science & Machine Learning Specialist
          </p>
          
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg font-medium">
            Architecting intelligent systems through advanced Machine Learning, NLP, and Generative AI to solve complex real-world challenges.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button className="btn-primary flex items-center gap-2">
              <Download size={18} /> Download Resume
            </button>
            <button onClick={() => onScrollTo("projects")} className="btn-outline flex items-center gap-2">
              <Rocket size={18} /> Projects
            </button>
            <button onClick={() => onScrollTo("contact")} className="btn-outline flex items-center gap-2">
              <Mail size={18} /> Contact
            </button>
          </div>

          <div className="flex gap-10">
            {[{n:"5+",s:"Projects"},{n:"1+",s:"Internship"},{n:"3+",s:"Certifications"}].map(x => (
              <div key={x.s}>
                <div className="text-3xl font-black text-[#4fc3f7]">{x.n}</div>
                <div className="text-xs text-white/40 font-bold uppercase tracking-widest mt-1">{x.s}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-br from-[#1565c0] via-[#0288d1] to-[#4fc3f7] p-1 shadow-2xl shadow-[#1565c0]/30">
              <div className="w-full h-full rounded-full bg-[#1a2a5e] flex items-center justify-center overflow-hidden">
                <div className="text-9xl lg:text-[160px]">👨‍💻</div>
              </div>
            </div>
            
            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-gradient-to-br from-[#1565c0] to-[#0288d1] text-white p-4 rounded-2xl shadow-xl flex items-center gap-2"
            >
              <Brain size={20} className="text-[#4fc3f7]" />
              <span className="text-xs font-bold tracking-tight">Machine Learning</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-8 -left-8 bg-gradient-to-br from-[#1565c0] to-[#0288d1] text-white p-4 rounded-2xl shadow-xl flex items-center gap-2"
            >
              <Cpu size={20} className="text-[#4fc3f7]" />
              <span className="text-xs font-bold tracking-tight">AI & NLP</span>
            </motion.div>

            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -right-12 bg-gradient-to-br from-[#1565c0] to-[#0288d1] text-white p-4 rounded-2xl shadow-xl flex items-center gap-2"
            >
              <Code size={20} className="text-[#4fc3f7]" />
              <span className="text-xs font-bold tracking-tight">Generative AI</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] font-black tracking-[4px] text-white">SCROLL</span>
        <motion.div
          animate={{ height: [0, 40, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] bg-gradient-to-b from-[#4fc3f7] to-transparent"
        />
      </div>
    </section>
  );
}
