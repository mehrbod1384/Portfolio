import ContactCard from "@/components/contract/ContactCard";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import GridBackground from "@/components/layout/GridBackground";
import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <GridBackground />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <ContactCard />
      <Footer />
    </>
  );
}
