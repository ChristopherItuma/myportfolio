import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Proficiency from "@/components/Proficiency";
import Projects from "@/components/Projects";
import Header from "@/components/Header";

export default function Home() {
  return (
   <div>
  <main className="flex flex-col relative">
    <Header />
     <Hero />
     <Skills />
     <Education />
     <Experience />
     <Proficiency />
     <Projects />
  </main>
   </div>
  );
}
