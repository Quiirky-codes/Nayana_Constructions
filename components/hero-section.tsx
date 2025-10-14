"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, Calendar, Trophy, ChevronDown, Sparkles } from "lucide-react"
import { IMAGES } from "@/constants/images"

function useCountUp(end: number, durationMs = 2000, start = true) {
  const [count, setCount] = useState(0)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    let rafId = 0
    let startTime: number | null = null

    // Reset state when start changes
    if (!start) {
      setCount(0)
      setFinished(false)
      return
    }

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / durationMs, 1)
      const newCount = Math.floor(progress * end)
      
      setCount(newCount)

      if (progress >= 1) {
        setCount(end) // Ensure we hit the exact end value
        setFinished(true)
      } else {
        rafId = requestAnimationFrame(step)
      }
    }

    rafId = requestAnimationFrame(step)
    
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [end, durationMs, start])

  return { count, finished }
}

/* Enhanced Motion variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.35, 
      delayChildren: 0.8 
    } 
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8,
      type: "spring",
      bounce: 0.3
    }
  },
}

const glowVariants = {
  initial: { 
    opacity: 0,
    scale: 0.8,
    filter: "blur(20px)"
  },
  animate: { 
    opacity: [0, 1, 0.7, 1],
    scale: [0.8, 1.2, 1],
    filter: ["blur(20px)", "blur(10px)", "blur(0px)"],
    transition: {
      duration: 2.5,
      times: [0, 0.3, 0.7, 1],
      ease: "easeOut"
    }
  }
}

// Generate stable particle positions (deterministic)
const generateStableParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: ((i * 37 + 23) % 100),
    top: ((i * 47 + 31) % 100),
    duration: 3 + ((i * 13) % 4),
    delay: ((i * 17) % 5)
  }))
}

/* Enhanced Stat item component */
function StatItem({
  Icon,
  value,
  label,
  suffix,
  isText,
}: {
  Icon: any
  value: number | string
  label: string
  suffix?: string
  isText?: boolean
}) {
  const [start, setStart] = useState(false)
  const numeric = typeof value === "number"
  const { count, finished } = useCountUp(numeric ? (value as number) : 0, 1400, start)

  return (
    <motion.div
      className="relative flex flex-col items-center text-white group cursor-pointer"
      variants={itemVariants}
      onAnimationComplete={() => {
        if (!start) {
          setStart(true)
        }
      }}
      whileHover={{ 
        scale: 1.08, 
        y: -8,
        transition: { type: "spring", bounce: 0.4 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={false}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Icon with pulse effect */}
      <motion.div
        className="relative mb-3"
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-12 h-12 text-secondary relative z-10" />
        <motion.div
          className="absolute inset-0 bg-secondary/30 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0, 0.3]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Value with enhanced animations */}
      <motion.p 
        className="text-4xl md:text-5xl font-extrabold leading-none mb-2"
        style={{
          background: "linear-gradient(135deg, #fff 0%, #e0e0e0 50%, #fff 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        {isText ? (
          <motion.span
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {value}
          </motion.span>
        ) : (
          <>
            <motion.span
              key={count}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {count}
            </motion.span>
            {suffix && (
              <motion.span
                initial={{ opacity: 0, scale: 0.9, rotateX: 90 }}
                animate={{ 
                  opacity: finished ? 1 : 0, 
                  scale: finished ? 1 : 0.9,
                  rotateX: finished ? 0 : 90
                }}
                transition={{ duration: 0.5, type: "spring" }}
                className="ml-1 inline-block"
              >
                {suffix}
              </motion.span>
            )}
          </>
        )}
      </motion.p>

      {/* Label with typewriter effect */}
      <motion.p
        className="text-lg opacity-80 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {label}
      </motion.p>

      {/* Sparkle effects */}
      <motion.div
        className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100"
        animate={{ 
          rotate: [0, 180, 360],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Sparkles className="w-4 h-4 text-yellow-300" />
      </motion.div>
    </motion.div>
  )
}

export function HeroSection() {
  const [startHeroCount, setStartHeroCount] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartHeroCount(true)
    }, 1200)
    
    return () => clearTimeout(timer)
  }, [])

  const { count: heroCount, finished: heroFinished } = useCountUp(30, 2000, startHeroCount)

  // Generate stable particles once
  const stableParticles = generateStableParticles(20)

  const stats = [
    { icon: Trophy, value: 30, label: "Projects Completed", suffix: "+" },
    { icon: Calendar, value: 30, label: "Years Experience", suffix: "+" },
    { icon: MapPin, value: "Bengaluru", label: "Based", isText: true },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={IMAGES.bengaluruSkyline || "/placeholder.svg"}
          alt="Bengaluru Skyline"
          fill
          className="object-cover"
          priority
        />
        
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(45deg, rgba(59, 130, 246, 0.9) 0%, rgba(59, 130, 246, 0.7) 50%, transparent 100%)"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
        
        {/* Floating particles - FIXED for hydration */}
        {stableParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Content with enhanced animations */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Enhanced Main Title with glow effect */}
          <motion.div className="relative">
            {/* Glow background */}
            <motion.div
              className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full"
              variants={glowVariants}
              initial="initial"
              animate="animate"
            />
            
            <motion.h1
              className="relative text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight z-10"
              initial={{ opacity: 0, y: 50, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 1.2,
                type: "spring",
                bounce: 0.3
              }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Building Dreams for{" "}
              </motion.span>
              
              <span className="text-secondary inline-flex items-baseline relative">
                {/* Animated background for the number */}
                <motion.div
                  className="absolute inset-0 bg-secondary/10 rounded-lg blur-sm"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Hero count with enhanced animation */}
                <motion.span 
                  className="inline-block min-w-[80px] text-left relative z-10"
                  key={heroCount}
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  {heroCount}
                </motion.span>

                {/* Enhanced + Years animation */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
                  animate={{ 
                    opacity: heroFinished ? 1 : 0, 
                    scale: heroFinished ? 1 : 0.5,
                    rotateX: heroFinished ? 0 : 90
                  }}
                  transition={{ 
                    duration: 0.8, 
                    type: "spring",
                    bounce: 0.5
                  }}
                  className="ml-2 relative"
                >
                  + Years
                  
                  {/* Sparkle effect */}
                  {heroFinished && (
                    <motion.div
                      className="absolute -top-2 -right-2"
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ 
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    >
                      <Sparkles className="w-5 h-5 text-yellow-300" />
                    </motion.div>
                  )}
                </motion.span>
              </span>
            </motion.h1>
          </motion.div>

          {/* Enhanced Subtitle with wave effect */}
          <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9 }}
          >
            <motion.p
              className="text-lg md:text-xl text-white opacity-90 relative z-10"
              style={{
                textShadow: "0 2px 10px rgba(0,0,0,0.3)"
              }}
            >
              {"Nayana Constructions – Your trusted partner in creating exceptional spaces across Bengaluru".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 1 + (i * 0.02), 
                    duration: 0.3 
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
            
            {/* Subtle glow line */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 2, duration: 1.5 }}
            />
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-16 mt-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((s, i) => (
              <StatItem
                key={i}
                Icon={s.icon}
                value={s.value as number | string}
                label={s.label}
                suffix={s.suffix}
                isText={s.isText}
              />
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
            >
              <ChevronDown className="w-8 h-8 text-white/60" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Clouds Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        {/* Animated Cloud SVG */}
        <motion.svg 
          className="relative block w-full h-24 md:h-32 lg:h-40"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <defs>
            <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
              <stop offset="100%" stopColor="rgba(255,255,255,1)" />
            </linearGradient>
          </defs>
          
          {/* Multiple cloud layers for depth with subtle animation */}
          <motion.path 
            d="M0,40 C150,80 350,0 500,40 C650,80 850,0 1000,40 C1050,50 1100,30 1200,40 L1200,120 L0,120 Z" 
            fill="rgba(255,255,255,0.8)"
            animate={{ d: [
              "M0,40 C150,80 350,0 500,40 C650,80 850,0 1000,40 C1050,50 1100,30 1200,40 L1200,120 L0,120 Z",
              "M0,45 C150,75 350,5 500,45 C650,75 850,5 1000,45 C1050,55 1100,35 1200,45 L1200,120 L0,120 Z",
              "M0,40 C150,80 350,0 500,40 C650,80 850,0 1000,40 C1050,50 1100,30 1200,40 L1200,120 L0,120 Z"
            ]}}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path 
            d="M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60 L1200,120 L0,120 Z" 
            fill="rgba(255,255,255,0.9)"
            animate={{ d: [
              "M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60 L1200,120 L0,120 Z",
              "M0,65 C200,25 400,95 600,65 C800,25 1000,95 1200,65 L1200,120 L0,120 Z",
              "M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60 L1200,120 L0,120 Z"
            ]}}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path 
            d="M0,80 C300,40 600,120 900,80 C1000,60 1100,100 1200,80 L1200,120 L0,120 Z" 
            fill="url(#cloudGradient)"
            animate={{ d: [
              "M0,80 C300,40 600,120 900,80 C1000,60 1100,100 1200,80 L1200,120 L0,120 Z",
              "M0,85 C300,45 600,115 900,85 C1000,65 1100,95 1200,85 L1200,120 L0,120 Z",
              "M0,80 C300,40 600,120 900,80 C1000,60 1100,100 1200,80 L1200,120 L0,120 Z"
            ]}}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* Enhanced floating clouds with more variety - FIXED for hydration */}
        <div className="absolute inset-0 pointer-events-none">
          {generateStableParticles(6).map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute bg-white/40 rounded-full"
              style={{
                width: `${12 + (particle.id * 3) % 16}px`,
                height: `${6 + (particle.id * 2) % 8}px`,
                top: `${(particle.top * 0.8) % 80}%`,
                left: `${particle.left}%`,
              }}
              animate={{
                x: [0, 100 + (particle.id * 20) % 200, 0],
                y: [0, -20 + (particle.id * 8) % 40, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 15 + (particle.id * 4) % 20,
                repeat: Infinity,
                ease: "linear",
                delay: particle.delay
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}