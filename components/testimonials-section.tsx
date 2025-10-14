"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Aruna S",
      project: "Bengaluru",
      rating: 5,
      content:
        "Being known to the builders for many years, it was a no-brainer to choose them for constructing our duplex house on a 30*40 site, and they were very resourceful and cooperative. From demolition of the old building to the housewarming of the new one, they took complete responsibility, delivered as promised, and we are very happy and content with the work done.",
    },
    {
      name: "Chandhan",
      project: "Bengaluru",
      rating: 5,
      content:
        "Nayana Constructions turned our dream home into reality with care, quality, and professionalism. With Mr. Muniraj and Mr. Vinay's personal involvement, every detail was handled perfectly. We're truly grateful and very happy with our new home.",
    },
    {
      name: "Roopa",
      project: "Bengaluru",
      rating: 4,
      content:
        "We are extremely happy with Mr. Muniraju, Vinay, and their team for turning our dream home into reality with care and professionalism. They managed everything smoothly, delivered on time, and continue to support us even after completion. Their dedication, transparency, and trustworthiness make them truly commendable.",
    },
    {
      name: "Sreenath",
      project: "Bengaluru",
      rating: 5,
      content:
        "We are grateful to Mr. Muniraju, Vinay, and their team for turning our dream home into reality with care and responsibility. They understood our needs, guided us with valuable suggestions, and delivered the project on time just as we wanted. Even after moving in, their support and friendly nature make them feel more like family than just builders.",
    },
    {
      name: "Priya",
      project: "Bengaluru",
      rating: 4,
      content:
        "We've known Nayana Constructions for decades, and they built our 3-storey house in 2023 within 15 months with impressive accuracy and quality. Open to ideas and offering valuable inputs, Mr. Muniraju and his son Vinay showed dedication, patience, and a collaborative attitude—truly reliable and highly recommended.",
    },
    {
      name: "Shreeram",
      project: "Bengaluru",
      rating: 5,
      content:
        "I was introduced to Nayana Constructions, Mr. Muniraju and Vinay 4 years ago and since then haven't needed another contractor. From grills to plumbing, carpentry, and painting, they managed everything efficiently, even finishing remote-site work in a week without supervision. Truly trustworthy, reliable, and deserving recognition.",
    },
    {
      name: "Shankar Narayan",
      project: "Bengaluru",
      rating: 5,
      content:
        "On an auspicious day, in the presence of family members, the foundation work was initiated by a priest. Despite challenges like water seepage, Muniraju, the contractor, carried on undeterred. Step by step, the building took shape and was completed in 2023. Throughout, Muniraju patiently addressed our queries and frustrations. Today, we reside in a modern home, and he continues to respond promptly to any maintenance needs with the same cordiality. Nayana Constructions stands for trust and reliability.",
    },
  ]

  return (
    <AnimatedSection>
      <style>{`
        /* Keyframe Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes starGlow {
          0%, 100% {
            transform: scale(1);
            filter: brightness(1) drop-shadow(0 0 3px rgba(59, 130, 246, 0.3));
          }
          50% {
            transform: scale(1.1);
            filter: brightness(1.3) drop-shadow(0 0 8px rgba(59, 130, 246, 0.6));
          }
        }

        @keyframes textShine {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes pulseSubtle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes rainbowText {
          0% {
            filter: hue-rotate(0deg) saturate(1);
          }
          50% {
            filter: hue-rotate(180deg) saturate(1.3);
          }
          100% {
            filter: hue-rotate(360deg) saturate(1);
          }
        }

        @keyframes floatingOrb {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(15px, -15px) scale(1.2);
            opacity: 0.5;
          }
          50% {
            transform: translate(-10px, -25px) scale(0.8);
            opacity: 0.2;
          }
          75% {
            transform: translate(-15px, 8px) scale(1.1);
            opacity: 0.4;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes pulseDot {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.4;
          }
        }

        @keyframes rotateSubtle {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.95);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes textReveal {
          0% {
            clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }

        @keyframes colorWave {
          0%, 100% {
            color: #3b82f6;
          }
          25% {
            color: #8b5cf6;
          }
          50% {
            color: #ec4899;
          }
          75% {
            color: #10b981;
          }
        }

        @keyframes slideUpDelayed {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6);
          }
        }

        @keyframes cornerGlow {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          100% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
          }
        }

        @keyframes cardEntrance {
          0% {
            transform: translateY(50px) rotateX(15deg);
            opacity: 0;
          }
          100% {
            transform: translateY(0) rotateX(0deg);
            opacity: 1;
          }
        }

        @keyframes testimonialScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Animation Classes */
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }

        .animate-fade-in-up-delayed {
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        .animate-slide-down {
          animation: slideDown 0.6s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-star-glow {
          animation: starGlow 2s ease-in-out infinite;
        }

        .animate-text-shine {
          background: linear-gradient(90deg, #333 0%, #666 45%, #999 50%, #666 55%, #333 100%);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textShine 3s linear infinite;
        }

        .animate-pulse-subtle {
          animation: pulseSubtle 2s ease-in-out infinite;
        }

        .animate-gradient-shift {
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
          background-size: 400% 400%;
          animation: gradientShift 6s ease-in-out infinite;
        }

        .animate-rainbow-text {
          animation: rainbowText 4s linear infinite;
        }

        .animate-floating-orb {
          animation: floatingOrb 6s ease-in-out infinite;
        }

        .animate-floating-orb-delayed {
          animation: floatingOrb 6s ease-in-out infinite 3s;
        }

        .animate-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shimmer 3s linear infinite;
        }

        .animate-gradient-flow {
          background: linear-gradient(-45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
          background-size: 400% 400%;
          animation: gradientFlow 4s ease-in-out infinite;
        }

        .animate-pulse-dot {
          animation: pulseDot 1.5s ease-in-out infinite;
        }

        .animate-rotate-subtle {
          animation: rotateSubtle 20s linear infinite;
        }

        .animate-bounce-in {
          animation: bounceIn 0.8s ease-out;
        }

        .animate-spin-slow:hover {
          animation: spinSlow 1s linear;
        }

        .animate-text-reveal {
          animation: textReveal 1s ease-out 0.5s both;
        }

        .animate-color-wave:hover {
          animation: colorWave 2s ease-in-out infinite;
        }

        .animate-slide-up-delayed {
          animation: slideUpDelayed 0.8s ease-out 0.4s both;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-corner-glow {
          animation: cornerGlow 0.6s ease-out;
        }

        .animate-card-entrance {
          animation: cardEntrance 0.8s ease-out;
        }

        /* Carousel Styles */
        .testimonials-carousel {
          animation: testimonialScroll 50s linear infinite;
          width: max-content;
        }

        /* Hover Effects */
        .group:hover .animate-star-glow {
          animation-duration: 0.5s;
        }

        .group:hover .animate-float {
          animation-duration: 1s;
        }

        /* Staggered Animations */
        .testimonials-carousel > *:nth-child(1) {
          animation-delay: 0.1s;
        }
        .testimonials-carousel > *:nth-child(2) {
          animation-delay: 0.2s;
        }
        .testimonials-carousel > *:nth-child(3) {
          animation-delay: 0.3s;
        }
        .testimonials-carousel > *:nth-child(4) {
          animation-delay: 0.4s;
        }
        .testimonials-carousel > *:nth-child(5) {
          animation-delay: 0.5s;
        }
        .testimonials-carousel > *:nth-child(6) {
          animation-delay: 0.6s;
        }

        /* Pause on hover */
        .testimonials-carousel:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up relative">
            <h2 className="text-4xl font-bold text-primary mb-4 animate-slide-down animate-rainbow-text relative z-10">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-delayed relative z-10">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience with
              Nayana Constructions.
            </p>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full animate-floating-orb"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500 rounded-full animate-floating-orb-delayed"></div>
          </div>

          {/* Infinite Carousel */}
          <div className="relative overflow-hidden animate-fade-in-up-delayed py-8">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white to-transparent z-10 animate-shimmer"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white to-transparent z-10"></div>
            
            <div className="flex testimonials-carousel gap-6 py-4">
              {/* First set of testimonials */}
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="flex-shrink-0 w-80 hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-2 group relative overflow-hidden animate-card-entrance border-2 border-transparent hover:border-blue-200"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 animate-gradient-flow"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                  
                  <CardContent className="p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse-dot opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex items-center mb-4 relative z-10">
                      <Quote className="w-8 h-8 text-secondary mr-2 animate-float animate-rotate-subtle group-hover:text-blue-600 transition-colors duration-500" />
                      <div className="flex animate-bounce-in">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 fill-blue-600 text-blue-600 animate-star-glow animate-spin-slow transform hover:scale-125 transition-all duration-300" 
                            style={{animationDelay: `${i * 0.1}s`}} 
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed relative z-10 group-hover:text-gray-700 transition-colors duration-500 animate-text-reveal">
                      "{testimonial.content}"
                    </p>

                    <div className="relative z-10 animate-slide-up-delayed">
                      <h4 className="font-semibold text-primary animate-text-shine animate-color-wave">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-secondary animate-pulse-subtle animate-glow">{testimonial.project}</p>
                    </div>

                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-200 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-700 animate-corner-glow"></div>
                  </CardContent>
                </Card>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={`duplicate-${index}`} 
                  className="flex-shrink-0 w-80 hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-2 group relative overflow-hidden animate-card-entrance border-2 border-transparent hover:border-blue-200"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 animate-gradient-flow"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                  
                  <CardContent className="p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse-dot opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex items-center mb-4 relative z-10">
                      <Quote className="w-8 h-8 text-secondary mr-2 animate-float animate-rotate-subtle group-hover:text-blue-600 transition-colors duration-500" />
                      <div className="flex animate-bounce-in">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 fill-blue-600 text-blue-600 animate-star-glow animate-spin-slow transform hover:scale-125 transition-all duration-300" 
                            style={{animationDelay: `${i * 0.1}s`}} 
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed relative z-10 group-hover:text-gray-700 transition-colors duration-500 animate-text-reveal">
                      "{testimonial.content}"
                    </p>

                    <div className="relative z-10 animate-slide-up-delayed">
                      <h4 className="font-semibold text-primary animate-text-shine animate-color-wave">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-secondary animate-pulse-subtle animate-glow">{testimonial.project}</p>
                    </div>

                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-200 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-700 animate-corner-glow"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}