"use client"

import { motion } from "framer-motion"
import { sectionContainer, fadeUpItem } from "@/lib/animations"

export default function About() {
  return (
    <section id="about" className="relative px-6 py-20">
      {/* section color identity */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/60 to-white" />

      <motion.div
        className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-2"
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* LEFT */}
        <motion.div variants={fadeUpItem}>
          <h2 className="font-[var(--font-poppins)] text-4xl font-bold tracking-tight text-slate-900">
            About Me
          </h2>

          <p className="mt-6 max-w-xl text-lg text-slate-700">
            I approach development with structure first — understanding
            the problem, the user, and the system before implementation.
          </p>

          <p className="mt-4 max-w-xl text-slate-600">
            I enjoy building things that are simple to use, easy to
            maintain, and relevant to real-world needs.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div className="grid gap-6">
          {[
            {
              title: "Clarity over complexity",
              bg: "border-blue-300/40",
            },
            {
              title: "Think before code",
              bg: "border-violet-300/40",
            },
            {
              title: "Build for real users",
              bg: "border-blue-300/40",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUpItem}
              className={`rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur
              border ${item.bg} transition hover:-translate-y-1`}
            >
              <p className="text-slate-700 font-medium">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
