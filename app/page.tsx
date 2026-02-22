import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { DigitalGravy } from "@/components/sections/DigitalGravy";
import { SLAExpo } from "@/components/sections/SLAExpo";
import { Skills } from "@/components/sections/Skills";
import { ProjectHub } from "@/components/sections/ProjectHub";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <DigitalGravy />
      <SLAExpo />
      <Skills />
      <ProjectHub />
      <Contact />
    </>
  );
}
