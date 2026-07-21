import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="w-full md:p-24">
      <Hero />
      <Projects/>
      <Skills/>
      <Education/>
      <Contact/>
    </main>
  );
}
