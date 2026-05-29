"use client";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socials = [
    { icon: <Github size={20} />, href: "https://github.com/Dattatreya-MK", title: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com", title: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:dattatreyamk@email.com", title: "Email" },
  ];

  return (
    <footer className="bg-[#0a122d] text-white/50 py-16 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto max-w-6xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-black text-white mb-8 tracking-tighter"
        >
          <span className="text-[#4fc3f7]">D</span>MK
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          {socials.map((s, idx) => (
            <motion.a 
              key={idx}
              href={s.href} 
              title={s.title} 
              target="_blank" 
              rel="noreferrer" 
              whileHover={{ y: -5, scale: 1.1 }}
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#4fc3f7] hover:bg-[#4fc3f7]/10 hover:border-[#4fc3f7]/30 transition-all duration-300"
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-sm font-medium flex items-center justify-center gap-2"
        >
          Built with <Heart size={14} className="text-[#4fc3f7]" fill="currentColor" /> by <span className="text-white font-bold">Dattatreya M K</span> · {new Date().getFullYear()}
        </motion.p>
      </div>
    </footer>
  );
}
