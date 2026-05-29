"use client";
import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
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

  const contactInfo = [
    { icon: <Mail size={20} />, label: "Email", val: "dattatreyamk@email.com", href: "mailto:dattatreyamk@email.com" },
    { icon: <Phone size={20} />, label: "Phone", val: "+91 XXXXXXXXXX", href: "tel:+91XXXXXXXXXX" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", val: "linkedin.com/in/dattatreyamk", href: "https://linkedin.com" },
    { icon: <Github size={20} />, label: "GitHub", val: "github.com/Dattatreya-MK", href: "https://github.com/Dattatreya-MK" },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader tag="07" title="Get In Touch" sub="Contact Me" />
        </FadeIn>
        
        <div className="grid lg:grid-cols-2 gap-16 mt-20 items-start">
          <FadeIn dir="left">
            <div>
              <h3 className="text-3xl font-black text-[#1e293b] mb-6 tracking-tight">Let&apos;s Build Something Intelligent</h3>
              <p className="text-lg text-[#6b7280] leading-relaxed mb-12 font-medium">
                Whether you have a project in mind, an opportunity to discuss, or just want to say hello—I&apos;m all ears.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-5 p-4 rounded-2xl border border-transparent hover:border-[#e3f2fd] hover:bg-[#f8fbff] transition-all duration-300 group no-underline"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#e3f2fd] text-[#1565c0] flex items-center justify-center group-hover:bg-[#1565c0] group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[11px] font-black text-[#9ca3af] uppercase tracking-widest">{item.label}</div>
                      <div className="text-sm font-bold text-[#1e293b] group-hover:text-[#1565c0] transition-colors">{item.val}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn dir="right" delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-[#f8fbff] to-[#f0f7ff] rounded-[40px] p-10 border border-[#e8f0fe] shadow-inner">
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-black text-[#374151] uppercase tracking-widest mb-3 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })} 
                    required 
                    className="w-full px-6 py-4 rounded-2xl border-2 border-white bg-white/50 focus:bg-white focus:border-[#1565c0] outline-none transition-all duration-300 font-medium text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-[#374151] uppercase tracking-widest mb-3 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })} 
                    required 
                    className="w-full px-6 py-4 rounded-2xl border-2 border-white bg-white/50 focus:bg-white focus:border-[#1565c0] outline-none transition-all duration-300 font-medium text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-[#374151] uppercase tracking-widest mb-3 ml-1">Message</label>
                  <textarea 
                    placeholder="Tell me about your project..." 
                    rows={5} 
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })} 
                    required
                    className="w-full px-6 py-4 rounded-2xl border-2 border-white bg-white/50 focus:bg-white focus:border-[#1565c0] outline-none transition-all duration-300 font-medium text-sm resize-none"
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={sent}
                  className={`w-full py-5 rounded-2xl text-sm font-black uppercase tracking-[2px] flex items-center justify-center gap-3 transition-all duration-500 shadow-xl ${
                    sent 
                    ? "bg-[#00b894] text-white shadow-[#00b894]/20" 
                    : "bg-[#1565c0] text-white hover:bg-[#0288d1] shadow-[#1565c0]/20"
                  }`}
                >
                  {sent ? (
                    <><CheckCircle2 size={18} /> Sent Successfully</>
                  ) : (
                    <><Send size={18} /> Send Message</>
                  )}
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
