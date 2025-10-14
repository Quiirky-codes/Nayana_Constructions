"use client"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Download, FileText, Sparkles, Eye, BookOpen } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

export function BrochuresSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Smooth parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Spring animations for smooth motion
  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 })
  const springY2 = useSpring(y2, { stiffness: 100, damping: 30 })
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 })

  return (
    <section 
      ref={sectionRef}
      id="brochure" 
      className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden"
    >
      {/* Enhanced Animated Grid Background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y: springY1 }}
      >
        <div className="absolute inset-0"
             style={{
               backgroundImage: `
                 linear-gradient(90deg, transparent 98%, rgba(var(--primary), 0.15) 100%),
                 linear-gradient(0deg, transparent 98%, rgba(var(--primary), 0.15) 100%)
               `,
               backgroundSize: '80px 80px',
               animation: 'gridMove 30s linear infinite, gridPulse 4s ease-in-out infinite alternate'
             }}>
        </div>
      </motion.div>

      {/* Dynamic Floating Elements with Physics */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-16 left-1/5 w-4 h-4 bg-primary/40 rounded-full"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-24 right-1/4 w-3 h-3 bg-primary/50 rounded-full"
          animate={{
            x: [0, 15, 0],
            y: [0, -10, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/6 w-2 h-2 bg-primary/60 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-5 h-5 bg-primary/30 rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }}
        />
      </div>

      {/* Radial Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-radial-gradient from-transparent via-primary/5 to-transparent"
        style={{ 
          y: springY2,
          scale: springScale,
          opacity 
        }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Enhanced Header with Multi-layer Wave Effect */}
        <div className="relative mb-20">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-full h-20 overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/15 to-transparent transform -skew-x-12"
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform skew-x-12"
              animate={{
                x: ['100%', '-100%'],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ 
              duration: 1,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="text-5xl md:text-6xl font-bold text-primary mb-6 relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="inline-block">Company</span>{" "}
            <motion.span 
              className="inline-block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Brochure
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed"
          >
            Discover our comprehensive portfolio, innovative projects, and unwavering commitment to excellence through our professionally crafted company brochure.
          </motion.p>

          {/* Enhanced Accent Line with Gradient Animation */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "6rem", opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-primary via-primary/80 to-primary/60 mx-auto rounded-full relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>

        {/* Enhanced Download Card with 3D Effects */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateY: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mb-16"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="group relative">
            {/* Multi-layer Ripple Effects */}
            <motion.div 
              className="absolute inset-0 bg-primary/10 rounded-3xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute inset-0 bg-primary/5 rounded-3xl"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.05, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            
            <Link
              href="/brochures/Construction Excellence.pdf"
              target="_blank"
              className="relative inline-flex items-center gap-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-10 py-6 rounded-3xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-700 group border-0 overflow-hidden transform-gpu hover:scale-105"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Enhanced Animated Background Shine */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ['-200%', '200%'],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 3
                }}
              />
              
              {/* Icon with Enhanced Animation */}
              <motion.div 
                className="relative"
                whileHover={{
                  rotateY: 180,
                  scale: 1.1
                }}
                transition={{ duration: 0.6 }}
              >
                <FileText 
                  size={28} 
                  className="transition-all duration-300" 
                />
                <motion.div 
                  className="absolute -top-2 -right-2 w-4 h-4 bg-white/40 rounded-full"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              
              <span className="text-xl font-bold relative z-10 tracking-wide">
                Download Brochure
              </span>
              
              <motion.div
                whileHover={{
                  y: 2,
                  rotate: [0, -10, 10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                <Download 
                  size={24} 
                  className="transition-all duration-300" 
                />
              </motion.div>
              
              {/* Enhanced Corner Accents */}
              <motion.div 
                className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-white/40 rounded-tr-lg"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              />
              <motion.div 
                className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-white/40 rounded-bl-lg"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              />
            </Link>
          </div>
        </motion.div>

        {/* Enhanced Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
        >
          {[
            { icon: Sparkles, text: "Comprehensive Project Portfolio", delay: 0 },
            { icon: Eye, text: "Professional Visual Design", delay: 0.2 },
            { icon: BookOpen, text: "Detailed Services Guide", delay: 0.4 }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: item.delay }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(var(--primary), 0.15)"
              }}
              animate={{
                y: [0, -2, 0],
              }}
              className="inline-flex items-center gap-3 bg-primary/8 rounded-2xl px-6 py-4 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 cursor-pointer"
              style={{
                transformStyle: "preserve-3d"
              }}
            >
              <motion.div
                whileHover={{ 
                  rotate: 720,
                  scale: 1.2,
                  filter: "brightness(1.3)"
                }}
                animate={{
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  hover: { duration: 1.2 },
                  animate: { 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.8
                  }
                }}
              >
                <item.icon size={20} className="text-primary filter drop-shadow-sm" />
              </motion.div>
              <motion.span 
                className="text-sm font-medium text-foreground"
                whileHover={{
                  scale: 1.02,
                  textShadow: "0 0 8px rgba(var(--primary), 0.3)"
                }}
              >
                {item.text}
              </motion.span>
              
              {/* Subtle glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-primary/5 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Statistics with 3D Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl px-10 py-6 backdrop-blur-sm border border-primary/20 shadow-lg">
            {[
              { value: "20+", label: "Pages", delay: 0 },
              { value: "30+", label: "Projects Featured", delay: 0.2 },
              { value: "HD", label: "Quality PDF", delay: 0.4 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: stat.delay }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-center group cursor-pointer"
              >
                <motion.div 
                  className="text-2xl font-bold text-primary mb-1"
                  whileHover={{ 
                    textShadow: "0 0 8px rgba(var(--primary), 0.6)" 
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {stat.label}
                </div>
                {index < 2 && <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-8 bg-primary/20"></div>}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced CSS for Custom Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(80px, 80px);
          }
        }
        
        @keyframes gridPulse {
          0% {
            opacity: 0.1;
          }
          100% {
            opacity: 0.3;
          }
        }
        
        .bg-radial-gradient {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
        
        .transform-gpu {
          transform: translateZ(0);
        }
      `}</style>
    </section>
  )
}