"use client"
import { Mail, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">

        <div className="mb-12 flex items-center gap-4">
          <span className="text-sm font-semibold text-slate-400">04</span>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent" />
        </div>

        <h2 className="font-[var(--font-poppins)] text-4xl font-bold text-slate-900">
          Contact
        </h2>

        <div className="mt-16 flex flex-wrap gap-6">
          <a href="shraddhautpat6@email.com" className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white">
            <Mail size={18} /> Email
          </a>

          <a href="https://www.linkedin.com/in/shraddha-utpat-226448283" className="flex items-center gap-2 rounded-xl border px-6 py-3">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>

      </div>
    </section>
  )
}
