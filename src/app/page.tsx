import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { ValueProposition } from "@/components/sections/ValueProposition";

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProposition />
      <Experience />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
