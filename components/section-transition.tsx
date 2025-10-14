"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface SectionTransitionProps {
  children: React.ReactNode
  fromColor?: string
  toColor?: string
}

export function SectionTransition({
  children,
  fromColor = "rgb(59 130 246)", // primary blue
  toColor = "rgb(248 250 252)", // muted background
}: SectionTransitionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const morphProgress = useTransform(scrollYProgress, [0.05, 0.15], [0, 1])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [0, 0.6, 0.6, 0])

  return (
    <div ref={ref} className="relative">
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `linear-gradient(135deg, ${fromColor} 0%, ${toColor} 100%)`,
          opacity: overlayOpacity,
          clipPath: useTransform(
            morphProgress,
            [0, 1],
            ["polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"],
          ),
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden z-10"
        style={{ opacity: useTransform(overlayOpacity, [0, 0.6], [0, 0.3]) }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full"
            initial={{
              x: `${20 + i * 12}%`,
              y: "100%",
              opacity: 0,
              scale: 0,
            }}
            animate={{
              y: [null, "-20%", "-40%", "-60%", "-100%"],
              x: [null, `${20 + (i * 12) + Math.sin(i) * 10}%`],
              opacity: [0, 0.6, 0.4, 0.2, 0],
              scale: [0, 1, 0.8, 0.4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 0.5,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to top, ${toColor}20, transparent)`,
          opacity: useTransform(overlayOpacity, [0, 0.6], [0, 0.4]),
          clipPath: useTransform(
            scrollYProgress,
            [0.05, 0.15],
            ["polygon(0% 100%, 100% 100%, 100% 95%, 0% 98%)", "polygon(0% 100%, 100% 100%, 100% 80%, 0% 85%)"],
          ),
        }}
      />

      {children}
    </div>
  )
}
