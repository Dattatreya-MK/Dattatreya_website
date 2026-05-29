"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <Hero onScrollTo={scrollTo} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}
