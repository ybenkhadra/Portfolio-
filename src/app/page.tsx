/**
 * Page d'accueil du portfolio
 * Assemble toutes les sections dans l'ordre d'affichage
 */
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Section d'accueil avec nom et titre */}
      <Hero />

      {/* Section "À propos de moi" */}
      <About />

      {/* Section "Formation / Éducation" */}
      <Education />

      {/* Section "Expérience professionnelle" */}
      <Experience />

      {/* Section "Projets" */}
      <Projects />

      {/* Section "Compétences techniques" */}
      <Skills />

      {/* Section "Contact" */}
      <Contact />
    </>
  );
}
