"use client"
import { motion } from "framer-motion"

const groups = [
  { title: "Frontend", color: "blue", skills: ["HTML", "CSS", "JS", "React", "Next.js"] },
  { title: "Backend", color: "violet", skills: ["Node.js", "MySQL", "Firebase"] },
  { title: "Core CS", color: "teal", skills: ["DSA", "OOP", "Debugging"] },
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 flex items-center gap-4">
          <span className="text-sm font-semibold text-slate-400">02</span>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent" />
        </div>

        <h2 className="font-[var(--font-poppins)] text-4xl font-bold text-slate-900">
          Skills
        </h2>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className={`rounded-3xl bg-gradient-to-br from-${g.color}-500/20 to-${g.color}-400/10 p-8 shadow-xl`}
            >
              <h3 className="text-xl font-semibold text-slate-900">{g.title}</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {g.skills.map(s => (
                  <motion.span
                    key={s}
                    whileHover={{ y: -4 }}
                    className="rounded-full bg-white/70 px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
