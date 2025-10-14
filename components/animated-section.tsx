"use client"

import React from "react"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerChildren?: boolean
  slideDirection?: "up" | "down" | "left" | "right"
  animationType?: "fade" | "slide" | "scale" | "rotate"
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  staggerChildren = false,
  slideDirection = "up",
  animationType = "slide",
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getAnimationVariants = () => {
    const slideVariants = {
      up: { y: 50 },
      down: { y: -50 },
      left: { x: 50 },
      right: { x: -50 },
    }

    switch (animationType) {
      case "fade":
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
        }
      case "scale":
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
        }
      case "rotate":
        return {
          initial: { opacity: 0, rotateY: 90 },
          animate: { opacity: 1, rotateY: 0 },
        }
      default: // slide
        return {
          initial: { opacity: 0, ...slideVariants[slideDirection] },
          animate: { opacity: 1, y: 0, x: 0 },
        }
    }
  }

  const variants = getAnimationVariants()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  }

  const childVariants = {
    hidden: variants.initial,
    visible: {
      ...variants.animate,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  if (staggerChildren) {
    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={className}
      >
        {React.Children.map(children, (child, index) => (
          <motion.div key={index} variants={childVariants}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={variants.initial}
      animate={isInView ? variants.animate : variants.initial}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.05,
}: {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const words = text.split(" ")

  return (
    <motion.div ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 20, rotateX: 90 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }
              : {
                  opacity: 0,
                  y: 20,
                  rotateX: 90,
                }
          }
          transition={{
            duration: 0.6,
            delay: delay + index * staggerDelay,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function AnimatedCardGrid({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: delay,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
      rotateY: 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{
            y: -10,
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
