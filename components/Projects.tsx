"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const PROJECTS = [
  { 
    title: "Twitter Sentiment Analysis", 
    desc: "NLP-based sentiment classification system that predicts Positive, Negative, and Neutral sentiment from Twitter data with high accuracy.", 
    tags: ["Python","NLP","Streamlit","NLTK"], 
    color: "#1DA1F2", 
    bg: "bg-[#1DA1F2]/5",
    icon: "🐦"
  },
  { 
    title: "Insurance Price Prediction", 
    desc: "Regression-based ML model to predict insurance charges based on demographic and lifestyle factors with real-time Streamlit interface.", 
    tags: ["Python","Scikit-learn","Streamlit","Pandas"], 
    color: "#00b894", 
    bg: "bg-[#00b894]/5",
    icon: "🏥"
  },
  { 
    title: "Heart Attack Risk Classification", 
    desc: "Healthcare analytics application using Support Vector Machine (SVM) to classify heart attack risk from clinical parameters.", 
    tags: ["Python","SVM","Scikit-learn","Healthcare"], 
    color: "#e84393", 
    bg: "bg-[#e84393]/5",
    icon: "❤️"
  },
  { 
    title: "AI Data Analyst Bot", 
    desc: "Upload CSV datasets and ask questions in natural language. Automatically generates and executes Python code using LangChain + Groq LLM.", 
    tags: ["LangChain","Groq LLM","Python","Streamlit"], 
    color: "#6c5ce7", 
    bg: "bg-[#6c5ce7]/5",
    icon: "🤖"
  },
  { 
    title: "Chatbot with Memory", 
    desc: "Context-aware AI chatbot with persistent conversation memory, enabling multi-turn dialogue using LangChain memory module and Groq LLM.", 
    tags: ["LangChain","Groq LLM","Memory","Python"], 
    color: "#fd7e14", 
    bg: "bg-[#fd7e14]/5",
    icon: "💬"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-[#f8fbff] to-[#f0f7ff]">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader tag="04" title="Projects" sub="Portfolio Highlights" />
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group h-full flex flex-col bg-white rounded-3xl overflow-hidden border border-[#e8f0fe] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-48 ${p.bg} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-7xl group-hover:scale-110 transition-transform duration-500 z-10">{p.icon}</div>
                  <Sparkles className="absolute top-4 right-4 text-white opacity-20 group-hover:opacity-100 transition-opacity" size={24} />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ backgroundColor: p.color }}
                  />
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-[#1e293b] mb-3 group-hover:text-[#1565c0] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed mb-6 flex-1">
                    {p.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tags.map(t => (
                      <span 
                        key={t} 
                        className="text-[11px] font-bold px-3 py-1 rounded-full border border-gray-100 bg-gray-50 text-gray-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-[#1565c0] text-white py-3 rounded-xl text-xs font-bold hover:bg-[#0288d1] transition-colors shadow-lg shadow-[#1565c0]/20">
                      <Github size={14} /> Code
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 border border-[#1565c0]/20 text-[#1565c0] py-3 rounded-xl text-xs font-bold hover:bg-[#1565c0]/5 transition-colors">
                      <ExternalLink size={14} /> Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
