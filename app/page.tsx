import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Summary } from "@/components/sections/summary";
import { CoreExpertise } from "@/components/sections/core-expertise";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Capabilities } from "@/components/sections/capabilities";
import { Education } from "@/components/sections/education";
import { ContactCta } from "@/components/sections/contact-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Summary />
        <CoreExpertise />
        <Experience />
        <Skills />
        <Capabilities />
        <Education />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
