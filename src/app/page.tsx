
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ExperienceSection from "@/components/sections/Experience";
import SkillsSection from "@/components/sections/Skills";
import ProjectsSection from "@/components/sections/Projects";
import EducationSection from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <Contact />
    </main>
  );
}
