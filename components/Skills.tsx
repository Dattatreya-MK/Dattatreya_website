"use client";
import { motion } from "framer-motion";
import { Terminal, Layout, BarChart3, Brain, Settings } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const SKILLS = {
  "Programming": {
    icon: <Terminal size={18} />,
    color: "#1565c0",
    items: ["Python", "SQL", "C++", "JavaScript"]
  },
  "Data Science": {
    icon: <Brain size={18} />,
    color: "#0288d1",
    items: ["Pandas", "NumPy", "Scikit-learn", "NLP", "LLMs", "LangChain"]
  },
  "Visualization": {
    icon: <BarChart3 size={18} />,
    color: "#00b894",
    items: ["Power BI", "Plotly", "Matplotlib", "Seaborn", "Tableau"]
  },
  "Frameworks": {
    icon: <Layout size={18} />,
    color: "#6c5ce7",
    items: ["Streamlit", "Flask", "Next.js", "Tailwind CSS"]
  },
  "Tools & Platforms": {
    icon: <Settings size={18} />,
    color: "#e84393",
    items: ["Git/GitHub", "Docker", "VS Code", "Jupyter", "AWS", "Excel"]
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-[#f8fbff] to-[#f0f7ff]">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader tag="02" title="Technical Arsenal" sub="Expertise & Tools" />
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {Object.entries(SKILLS).map(([cat, data], ci) => (
            <FadeIn key={cat} delay={ci * 0.1}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl border border-[#e8f0fe] shadow-sm hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg"
                    style={{ background: data.color }}
                  >
                    {data.icon}
                  </div>
                  <h3 className="text-base font-black text-[#1e293b] uppercase tracking-tight">{cat}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {data.items.map(item => (
                    <span 
                      key={item} 
                      className="px-4 py-2 rounded-xl bg-[#f8fbff] border border-[#e8f0fe] text-xs font-bold text-[#475569] hover:bg-[#1565c0] hover:text-white hover:border-[#1565c0] transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
