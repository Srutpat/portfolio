"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Digital Tutor App",
    description:
      "An accessibility-focused learning app for elderly and children with offline content, guided UI and reminders.",
    tech: ["Flutter", "Firebase", "UX Design"],
    live: "https://example.com",
    github: "https://github.com/yourrepo",
    accent: "blue",
  },
  {
    title: "Budget Tracker",
    description:
      "A student-friendly expense tracker with alerts, spending insights and smart budgeting habits.",
    tech: ["Node.js", "MySQL", "Flutter"],
    live: "https://example.com",
    github: "https://github.com/yourrepo",
    accent: "violet",
  },
  {
    title: "AI/ML Workshop Platform",
    description:
      "An interactive platform introducing ML & data science concepts with hands-on tasks.",
    tech: ["React", "Python", "ML"],
    live: "https://example.com",
    github: "https://github.com/yourrepo",
    accent: "teal",
  },
]

const accentStyles: any = {
  blue: "from-blue-500/15 to-blue-400/5 border-blue-300/40",
  violet: "from-violet-500/15 to-violet-400/5 border-violet-300/40",
  teal: "from-teal-500/15 to-teal-400/5 border-teal-300/40",
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <h2 className="font-[var(--font-poppins)] text-4xl font-bold text-slate-900">
          Projects
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          A selection of real projects that reflect how I design and build systems.
        </p>

        {/* Project Cards */}
        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`rounded-3xl border bg-gradient-to-br ${
                accentStyles[project.accent]
              } p-8 shadow-xl backdrop-blur-xl`}
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-slate-900">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-slate-700">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-8 flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
                >
                  <ExternalLink size={16} /> Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
