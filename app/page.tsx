import { Hero } from "../components/sections/Hero";
import { Portfolio } from "../components/sections/Portfolio";
import { FavoriteTools } from "@/components/sections/FavoriteTools";
import { Education } from "../components/sections/Education";
import { ContactTeaser } from "../components/sections/ContactTeaser";
import { Contact } from "@/components/sections/Contact";
import { DigitalGravy } from "@/components/sections/DigitalGravy";
import { SLAExpo } from "@/components/sections/SLAExpo";
import { ChowPow } from "@/components/sections/ChowPow";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <ContactTeaser />
      <DigitalGravy />
      <SLAExpo />
      <ChowPow />
      <FavoriteTools />
      <Education />
      <Contact />
    </>
  );
}
