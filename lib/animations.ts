import type { Variants } from "framer-motion"

export const sectionContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
}

export const fadeUpItem: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1], // ✅ proper cubic-bezier
    },
  },
}
