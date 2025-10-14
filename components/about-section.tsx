"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Clock } from "lucide-react"
import { IMAGES } from "@/constants/images"
import { AnimatedSection, AnimatedText, AnimatedCardGrid } from "./animated-section"

export function AboutSection() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Skilled professionals with decades of experience",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Uncompromising standards in every project",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely Delivery",
      description: "Projects completed on schedule, every time",
    },
  ]

  return (
    <AnimatedSection>
      <section id="about" className="py-20 bg-muted relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image with Enhanced Animations */}
            <AnimatedSection type="slide" direction="left">
              <div className="relative group">
                {/* Floating backdrop */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg transform rotate-3 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                
                {/* Main image container with hover effects */}
                <div className="relative transform transition-all duration-700 ease-out hover:scale-105 hover:rotate-1">
                  <Image
                    src={IMAGES.aboutUs || "/placeholder.svg"}
                    alt="About Nayana Constructions"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl transition-all duration-700 hover:shadow-2xl"
                  />
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Animated stats badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6 rounded-lg shadow-lg transform transition-all duration-700 hover:scale-110 hover:rotate-3 group-hover:shadow-2xl">
                  <div className="relative">
                    <p className="text-3xl font-bold animate-pulse">30+</p>
                    <p className="text-sm">Years of Excellence</p>
                    {/* Sparkle effect */}
                    <div className="absolute -top-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-primary rounded-full opacity-60 animate-spin" style={{animationDuration: '3s'}}></div>
                <div className="absolute top-1/4 -right-2 w-4 h-4 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              </div>
            </AnimatedSection>

            {/* Content with enhanced animations */}
            <div className="space-y-8">
              <div>
                <AnimatedText
                  text="About Nayana Constructions"
                  className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4"
                  type="words"
                />
                <AnimatedText
                  text="Since 1994, Nayana Constructions has been at the forefront of Bengaluru's construction industry. With over three decades of experience and 30+ successful projects, we have established ourselves as a trusted name in both residential and commercial construction."
                  className="text-lg text-muted-foreground leading-relaxed"
                  type="words"
                  delay={0.5}
                />
              </div>

              <AnimatedSection type="fade" stagger={0.2}>
                <div className="space-y-4">
                  {[
                    "Committed to delivering exceptional quality and innovative designs that exceed client expectations",
                    "Utilizing cutting-edge technology and sustainable construction practices",
                    "Building lasting relationships with clients through transparency and professionalism"
                  ].map((text, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 group cursor-pointer transition-all duration-300 hover:translate-x-2 hover:bg-background/50 rounded-lg p-2 -ml-2"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:text-primary/80" />
                      <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Enhanced Features Grid */}
              <AnimatedCardGrid className="grid sm:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <Card 
                    key={index} 
                    className="text-center group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl border-0 bg-gradient-to-b from-background to-background/80 backdrop-blur-sm"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <CardContent className="p-6 relative overflow-hidden">
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Icon with animation */}
                      <div className="text-primary mb-3 flex justify-center transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                        <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                          {feature.icon}
                        </div>
                      </div>
                      
                      {/* Content with stagger animation */}
                      <h3 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground transition-all duration-300 group-hover:text-foreground">
                        {feature.description}
                      </p>
                      
                      {/* Decorative corner element */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-primary/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-200"></div>
                    </CardContent>
                  </Card>
                ))}
              </AnimatedCardGrid>
            </div>
          </div>
        </div>
        
        {/* Section transition wave */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 transform skew-y-1 origin-bottom-left"></div>
      </section>
    </AnimatedSection>
  )
}