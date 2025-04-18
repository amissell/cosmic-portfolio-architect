
import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ScrollTrigger } from "@/components/ScrollTrigger";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate loading time for the initial animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      <main ref={sectionsRef}>
        <section id="home">
          <Hero />
        </section>

        <ScrollTrigger>
          <section id="about" className="section-container">
            <About />
          </section>
        </ScrollTrigger>

        <ScrollTrigger>
          <section id="experience" className="section-container bg-gray-50">
            <Experience />
          </section>
        </ScrollTrigger>

        <ScrollTrigger>
          <section id="projects" className="section-container">
            <Projects />
          </section>
        </ScrollTrigger>

        <ScrollTrigger>
          <section id="education" className="section-container bg-gray-50">
            <Education />
          </section>
        </ScrollTrigger>

        <ScrollTrigger>
          <section id="skills" className="section-container">
            <Skills />
          </section>
        </ScrollTrigger>

        <ScrollTrigger>
          <section id="languages" className="section-container bg-gray-50">
            <Languages />
          </section>
        </ScrollTrigger>

        <ScrollTrigger>
          <section id="contact" className="section-container">
            <Contact />
          </section>
        </ScrollTrigger>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
