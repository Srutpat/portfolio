"use client"

import { motion } from "framer-motion"
import { sectionContainer, fadeUpItem } from "@/lib/animations"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative px-6 pt-36 pb-24 overflow-hidden"
    >
      {/* background color wash */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-violet-50" />

      {/* floating blobs */}
      <motion.div
        className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-blue-400/25 blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-violet-400/25 blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative mx-auto max-w-7xl grid gap-16 lg:grid-cols-2"
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* LEFT */}
        <motion.div variants={fadeUpItem}>
          <h1 className="font-[var(--font-poppins)] text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            IT engineering student building{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-700">
                real-world 
              </span>
              <span className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-blue-200 to-violet-200" />
            </span>
            <br />
            web projects
          </h1>
          


          <p className="mt-6 max-w-xl text-lg text-slate-600">
            IT engineering student focused on building clean, interactive
            and reliable systems — where logic meets good design.
          </p>

          <div className="mt-10 flex gap-6">
            <a
              href="#projects"
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT – filled tiles */}
        <motion.div className="space-y-6">
          {[
            {
              title: "What I enjoy",
              text: "Turning ideas into structured, usable products.",
              bg: "from-blue-500/20 to-blue-400/5",
            },
            {
              title: "How I work",
              text: "Thinking through problems before writing code.",
              bg: "from-violet-500/20 to-violet-400/5",
            },
            {
              title: "What I value",
              text: "Clarity, usability and long-term maintainability.",
              bg: "from-blue-500/15 to-violet-500/10",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUpItem}
              className={`rounded-3xl bg-gradient-to-br ${item.bg}
              p-8 shadow-xl backdrop-blur-xl border border-slate-200`}
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-slate-600">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
