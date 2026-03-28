import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Cursor } from "@/components/Cursor";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Journey } from "@/sections/Journey";
import { Certifications } from "@/sections/Certifications";
import { Achievements } from "@/sections/Achievements";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <NoiseOverlay />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      
      <main className="relative z-10 bg-background selection:bg-primary/30 selection:text-primary">
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Certifications />
        <Achievements />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
