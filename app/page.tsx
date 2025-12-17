import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact"

export default function HomePage() {
  return (
    <>
      {/* Ambient background life */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-400/15 blur-3xl" />
        <div className="absolute right-1/4 top-2/3 h-[28rem] w-[28rem] rounded-full bg-violet-400/15 blur-3xl" />
      </div>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
