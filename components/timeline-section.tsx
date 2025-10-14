"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, MessageSquare, FileText, CheckCircle, Hammer, Sparkles, Star } from "lucide-react"
import { useEffect, useState } from "react"

// AnimatedSection component placeholder
function AnimatedSection({ children }) {
  return <div>{children}</div>
}

export function TimelineSection() {
  const [animatedSteps, setAnimatedSteps] = useState<number[]>([])
  const [showSparkles, setShowSparkles] = useState<number[]>([])
  const [particles, setParticles] = useState<Array<{
    left: string;
    top: string;
    animationDelay: string;
    animationDuration: string;
  }>>([])

  const timelineSteps = [
    {
      step: 1,
      title: "Initial Meeting",
      description: "We meet with the client to understand their vision, requirements, and budget",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      step: 2,
      title: "Site Visit",
      description: "Our team conducts a thorough site inspection and feasibility analysis",
      icon: <MapPin className="w-6 h-6" />,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      step: 3,
      title: "Project Discussion",
      description: "Detailed discussion about design, materials, timeline, and specifications",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      step: 4,
      title: "Quotation Preparation",
      description: "Comprehensive estimate with detailed cost breakdown is prepared and sent",
      icon: <FileText className="w-6 h-6" />,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      step: 5,
      title: "Approval & Agreement",
      description: "Client reviews and approves the quotation and project terms",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      step: 6,
      title: "Construction Begins",
      description: "Advance payment received and construction work commences as scheduled",
      icon: <Hammer className="w-6 h-6" />,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
    },
  ]

  // Initialize particles on client side only
  useEffect(() => {
    const initialParticles = Array.from({ length: 8 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${6 + Math.random() * 4}s`
    }))
    setParticles(initialParticles)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedSteps((prev) => {
        if (prev.length < timelineSteps.length) {
          const nextStep = prev.length + 1
          
          // Add sparkle effect when step animates in
          setTimeout(() => {
            setShowSparkles((sparkles) => [...sparkles, nextStep])
            setTimeout(() => {
              setShowSparkles((sparkles) => sparkles.filter(s => s !== nextStep))
            }, 2000)
          }, 300)
          
          return [...prev, nextStep]
        }
        // Reset animation
        setShowSparkles([])
        return []
      })
    }, 1200)

    return () => clearInterval(timer)
  }, [timelineSteps.length])

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-muted/50 via-background to-muted/30 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated geometric shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-primary/10 rounded-full animate-spin opacity-30" style={{animationDuration: '15s'}}></div>
        <div className="absolute bottom-20 right-16 w-16 h-16 border-2 border-secondary/10 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-primary/5 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        
        {/* Floating particles - now using client-side generated positions */}
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={particle}
          />
        ))}
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-3" 
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
               backgroundSize: '30px 30px'
             }}>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-8 sm:mb-16 relative">
          <div className="relative inline-block">
            <h2 className="text-2xl sm:text-4xl font-bold text-primary mb-3 relative z-10">
              Our Process
            </h2>
            {/* Glow effect behind title */}
            <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full scale-150 opacity-0 animate-pulse" style={{animationDelay: '0.5s', animationDuration: '3s'}}></div>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            <p className="text-sm sm:text-lg text-muted-foreground px-4 leading-relaxed">
              From initial consultation to project completion, we follow a systematic approach to ensure excellence at every step.
            </p>
            
            {/* Decorative underline */}
            <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full opacity-60"></div>
            
            {/* Floating icons around header */}
            <div className="absolute -top-4 -left-4 opacity-20 animate-bounce" style={{animationDelay: '1s'}}>
              <Star className="w-4 h-4 text-primary" />
            </div>
            <div className="absolute -top-2 -right-6 opacity-20 animate-bounce" style={{animationDelay: '2s'}}>
              <Sparkles className="w-5 h-5 text-secondary" />
            </div>
          </div>
        </div>

        {/* Enhanced Timeline */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-4">
            {timelineSteps.map((item, index) => (
              <div key={item.step} className="flex-1 max-w-xs mx-auto lg:mx-0 group">
                {/* Icon and Timeline Connection */}
                <div className="relative flex flex-col items-center mb-4">
                  {/* Enhanced Timeline Line with gradient and pulse */}
                  {index < timelineSteps.length - 1 && (
                    <div className="absolute top-6 left-1/2 w-full h-1 transform translate-x-1/2 hidden lg:block">
                      {/* Background line */}
                      <div className="w-full h-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-full"></div>
                      {/* Animated progress line */}
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out ${
                          animatedSteps.includes(item.step + 1) ? "w-full" : "w-0"
                        }`}
                      >
                        {/* Moving sparkle effect */}
                        {animatedSteps.includes(item.step + 1) && (
                          <div className="absolute top-1/2 right-0 w-2 h-2 bg-white rounded-full transform -translate-y-1/2 animate-ping"></div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Enhanced Icon Circle with multiple effects */}
                  <div className="relative">
                    {/* Outer glow ring */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full transition-all duration-500 ${
                        animatedSteps.includes(item.step) ? "scale-125 opacity-30 animate-pulse" : "scale-100 opacity-0"
                      }`}
                    ></div>
                    
                    {/* Main icon circle with enhanced animations */}
                    <div
                      className={`bg-gradient-to-r ${item.color} text-white p-4 rounded-full shadow-lg z-10 relative transition-all duration-700 transform ${
                        animatedSteps.includes(item.step) 
                          ? "scale-100 opacity-100 rotate-0" 
                          : "scale-75 opacity-50 rotate-180"
                      } group-hover:scale-110 group-hover:shadow-2xl cursor-pointer`}
                    >
                      <div className={`transition-transform duration-300 ${animatedSteps.includes(item.step) ? "rotate-0" : "rotate-180"}`}>
                        {item.icon}
                      </div>
                      
                      {/* Inner sparkle effect */}
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-transform duration-1000 ${
                          animatedSteps.includes(item.step) ? "translate-x-full" : "-translate-x-full"
                        }`}></div>
                      </div>
                    </div>

                    {/* Sparkles around icon when animated */}
                    {showSparkles.includes(item.step) && (
                      <>
                        <div className="absolute -top-2 -right-2 animate-bounce">
                          <Sparkles className="w-4 h-4 text-yellow-400" />
                        </div>
                        <div className="absolute -bottom-2 -left-2 animate-bounce" style={{animationDelay: '0.2s'}}>
                          <Star className="w-3 h-3 text-yellow-300" />
                        </div>
                        <div className="absolute top-0 -left-3 animate-bounce" style={{animationDelay: '0.4s'}}>
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Enhanced Step Label */}
                  <div className={`bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground px-4 py-2 rounded-full text-xs font-bold mt-3 whitespace-nowrap shadow-md transition-all duration-500 transform ${
                    animatedSteps.includes(item.step) ? "translate-y-0 opacity-100 scale-100" : "translate-y-2 opacity-70 scale-90"
                  }`}>
                    <span className="flex items-center gap-1">
                      Step {item.step}
                      {animatedSteps.includes(item.step) && (
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                      )}
                    </span>
                  </div>
                </div>

                {/* Enhanced Content Card */}
                <Card
                  className={`hover:shadow-xl transition-all duration-700 h-48 sm:h-56 relative overflow-hidden group cursor-pointer ${
                    animatedSteps.includes(item.step) 
                      ? "translate-y-0 opacity-100 scale-100" 
                      : "translate-y-8 opacity-70 scale-95"
                  } ${item.bgColor} border-0 shadow-lg hover:scale-105`}
                >
                  {/* Card glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`}></div>
                  
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} transform transition-transform duration-700 ${
                    animatedSteps.includes(item.step) ? "scale-x-100" : "scale-x-0"
                  } origin-left`}></div>

                  <CardContent className="p-3 sm:p-5 h-full flex flex-col justify-center text-center relative z-10">
                    {/* Enhanced title with gradient effect */}
                    <h3 className={`text-sm sm:text-lg font-bold mb-3 leading-tight transition-all duration-500 ${
                      animatedSteps.includes(item.step) ? "text-primary" : "text-muted-foreground"
                    }`}>
                      <span className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-extrabold`}>
                        {item.title}
                      </span>
                    </h3>
                    
                    {/* Enhanced description with proper word spacing */}
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed transition-all duration-700 space-x-1">
                      {item.description.split(" ").map((word, wordIndex) => (
                        <span
                          key={wordIndex}
                          className={`inline-block transition-all duration-300 ${
                            animatedSteps.includes(item.step) ? "opacity-100 translate-y-0" : "opacity-70 translate-y-1"
                          }`}
                          style={{
                            transitionDelay: `${wordIndex * 50}ms`
                          }}
                        >
                          {word}
                        </span>
                      ))}
                    </p>

                    {/* Progress indicator dots */}
                    <div className="mt-3 flex justify-center space-x-1">
                      {[...Array(3)].map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`w-2 h-2 rounded-full transition-all duration-500 ${
                            animatedSteps.includes(item.step) 
                              ? `bg-gradient-to-r ${item.color}` 
                              : "bg-muted-foreground/30"
                          }`}
                          style={{
                            animationDelay: `${dotIndex * 0.1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </CardContent>

                  {/* Bottom number indicator */}
                  <div className={`absolute bottom-3 right-3 w-8 h-8 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 shadow-lg`}>
                    {item.step}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-12 flex justify-center">
          <div className="text-center">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-4 mx-auto"></div>
            <p className="text-xs text-muted-foreground italic flex items-center justify-center gap-2">
              <Sparkles className="w-3 h-3" />
              Systematic • Professional • Reliable
              <Sparkles className="w-3 h-3" />
            </p>
          </div>
        </div>
      </div>
      
      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(1deg);
          }
          50% {
            transform: translateY(-20px) rotate(0deg);
          }
          75% {
            transform: translateY(-10px) rotate(-1deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default TimelineSection