"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

interface Props {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          />

          {/* Menu */}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-6 left-1/2 z-50 w-[90%] max-w-sm -translate-x-1/2 rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl border border-slate-200 p-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-semibold text-slate-900">
                Menu
              </span>
              <button
                onClick={onClose}
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                <X size={18} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl px-4 py-3 text-slate-700 font-medium hover:bg-slate-100"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
