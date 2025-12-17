"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import MobileMenu from "./MobileMenu"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("Home")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-6 left-1/2 z-40 w-[92%] max-w-6xl 
          -translate-x-1/2 rounded-3xl px-6 py-3 transition-all
          ${
            scrolled
              ? "bg-amber-200/30 text-white backdrop-blur-xl shadow-lg border border-slate-200"
              : "bg-blue-300/40 backdrop-blur-md"
          }`}
      >
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <span className="font-[var(--font-poppins)] text-lg font-semibold text-slate-900">
            Shraddha<span className="text-blue-600">.developer</span>
          </span>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setActive(item.name)}
                  className="group relative text-sm font-medium text-slate-700 transition hover:text-slate-900"
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-blue-500 transition-transform duration-300 group-hover:scale-x-100 ${
                      active === item.name ? "scale-x-100" : ""
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
  onClick={() => setMenuOpen(true)}
  className="md:hidden rounded-xl p-2 hover:bg-white/30 transition"
  aria-label="Open menu"
>
  <Menu size={22} />
</button>

        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
