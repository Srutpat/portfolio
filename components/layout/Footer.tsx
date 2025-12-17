"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative mt-24 px-6 pb-10"
    >
      <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-br from-blue-500/15 to-violet-500/10 p-10 backdrop-blur-xl border border-slate-200">

        {/* Top content */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Left */}
          <div>
            <h3 className="font-[var(--font-poppins)] text-xl font-semibold text-slate-900">
              Shraddha<span className="text-blue-600">.</span>
            </h3>
            <p className="mt-3 text-sm text-slate-600 max-w-xs">
              Building thoughtful, structured and user-focused digital
              experiences.
            </p>
          </div>

          {/* Center */}
          <div>
            <p className="text-sm font-semibold text-slate-700">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href="#home" className="hover:text-slate-900">Home</a></li>
              <li><a href="#about" className="hover:text-slate-900">About</a></li>
              <li><a href="#skills" className="hover:text-slate-900">Skills</a></li>
              <li><a href="#projects" className="hover:text-slate-900">Projects</a></li>
              <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <p className="text-sm font-semibold text-slate-700">
              Connect
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                className="rounded-xl bg-white/70 p-3 shadow hover:-translate-y-1 transition"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/your-github"
                target="_blank"
                className="rounded-xl bg-white/70 p-3 shadow hover:-translate-y-1 transition"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:your-email@gmail.com"
                className="rounded-xl bg-white/70 p-3 shadow hover:-translate-y-1 transition"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        {/* Bottom */}
        <p className="text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Shraddha. Designed & built with care.
        </p>
      </div>
    </motion.footer>
  )
}
