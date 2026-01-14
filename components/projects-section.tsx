"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Square, Eye, ArrowRight, X } from "lucide-react"
import { IMAGES } from "@/constants/images"
import { AnimatedSection, AnimatedText, AnimatedCardGrid } from "./animated-section"

// Generate stable transform values for cards (deterministic)
const generateCardTransforms = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    rotateX: ((i * 37 + 23) % 200 - 100) / 100, // Range: -1 to 1
    rotateY: ((i * 47 + 31) % 200 - 100) / 100  // Range: -1 to 1
  }))
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential")
  const [expandedImage, setExpandedImage] = useState<string | null>(null)

  const projects = {
    residential: [
      { 
        id: 1,
        title: "Residential Space",
        location: "Mahalakshmi Layout, Bengaluru",
        year: "2025",
        area: "3,600 sq ft",
        image: IMAGES.projects.residential[0],
        description: "A modern home designed for comfort and style.",
      },
      {
        id: 2,
        title: "Residential Space",
        location: "Kengeri, Bengaluru",
        year: "2025",
        area: "2,969 sq ft",
        image: IMAGES.projects.residential[1],
        description: "A warm and welcoming space crafted for peaceful living",
      },
      {
        id: 3,
        title: "Residential Space",
        location: "Gowdanapalya, Bengaluru",
        year: "2024",
        area: "3,600 sq ft",
        image: IMAGES.projects.residential[2],
        description: "Functional, fresh, and designed for easy living.",
      },
      {
        id: 4,
        title: "Residential Space",
        location: "Gowdanapalya, Bengaluru",
        year: "2023",
        area: "4,800 sq ft",
        image: IMAGES.projects.residential[3],
        description: "Crafted with care to suit today's lifestyle needs.",
      },
      {
        id: 5,
        title: "Residential Space",
        location: "Nelamangala, Bengaluru",
        year: "2021",
        area: "4,320 sq ft",
        image: IMAGES.projects.residential[4],
        description: "A home that blends modern design with homely charm.",
      },
      {
        id: 6,
        title: "Residential Space",
        location: "PP Nagar, Bengaluru",
        year: "2020",
        area: "2,610.75 sq ft",
        image: IMAGES.projects.residential[5],
        description: "A compact yet inviting house for comfortable urban life.",
      },
      {
        id: 7,
        title: "Rental Space",
        location: "Gowdanapalya, Bengaluru",
        year: "2019",
        area: "5,100 sq ft",
        image: IMAGES.projects.residential[6],
        description: "A thoughtfully designed 5,100 sq ft rental space built to meet contemporary needs.",
      },
      {
        id: 8,
        title: "Rental Space",
        location: "Gowdanapalya, Bengaluru",
        year: "2018",
        area: "8,000 sq ft",
        image: IMAGES.projects.residential[7],
        description: "A spacious rental property designed for comfort and modern living.",
      },
      {
        id: 9,
        title: "Residential Space",
        location: "Vajarahalli, Bengaluru",
        year: "2016",
        area: "3,000 sq ft",
        image: IMAGES.projects.residential[8],
        description: "A simple, elegant home made for lasting memories.",
      },
      {
        id: 10,
        title: "Residential Space",
        location: "Puttenahalli, Bengaluru",
        year: "2015",
        area: "2,400 sq ft",
        image: IMAGES.projects.residential[9],
        description: "Designed with thoughtful layouts for hassle-free living.",
      },
      
      {
        id: 11,
        title: "Residential Space",
        location: "Marthahalli, Bengaluru",
        year: "2014",
        area: "3,600 sq ft",
        image: IMAGES.projects.residential[10],
        description: "Built with simplicity and practicality at heart for everyday comfort.",
      },
      
      {
        id: 12,
        title: "Residential Space",
        location: "Noba Nagar, Bengaluru",
        year: "2013",
        area: "4,800 sq ft",
        image: IMAGES.projects.residential[11],
        description: "Spacious interiors designed to bring families together.",
      },
      {
        id: 13,
        title: "Residential Space",
        location: "Noba Nagar, Bengaluru",
        year: "2013",
        area: "2,400 sq ft",
        image: IMAGES.projects.residential[12],
        description: "A homely abode with a touch of traditional warmth.",
      },
      {
        id: 14,
        title: "Residential Space",
        location: "Noba Nagar, Bengaluru",
        year: "2013",
        area: "2,400 sq ft",
        image: IMAGES.projects.residential[13],
        description: "Spacious and airy, built to celebrate togetherness.",
      },
      
    ],

    commercial: [
      {
        id: 14,
        title: "Commercial Complex",
        location: "Raja Rajeshwari Nagar, Bengaluru",
        year: "2012",
        area: "6,400 sq ft",
        image: IMAGES.projects.commercial[0],
        description: "A modern commercial hub crafted to maximize space efficiency and business potential.",
      },
    ],
  }

  // Generate stable transforms for the maximum number of cards we might show
  const cardTransforms = generateCardTransforms(8)

  return (
    <AnimatedSection>
      <section id="projects" className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-muted/30">
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-primary/15 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header with Morphing Effect */}
          <div className="text-center mb-12 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
            
            <AnimatedText 
              text="Our Projects" 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-4 relative" 
              type="words" 
            />
            
            {/* Floating particles around title */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-16 pointer-events-none">
              <div className="absolute top-2 left-1/4 w-2 h-2 bg-primary/60 rounded-full animate-ping"></div>
              <div className="absolute top-8 right-1/4 w-1 h-1 bg-primary/80 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-4 left-3/4 w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
            
            <AnimatedText
              text="Explore our portfolio of exceptional residential and commercial projects that showcase our commitment to quality and innovation."
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              type="words"
              delay={0.3}
            />
          </div>

          {/* Enhanced Toggle Buttons with Morphing Effect */}
          <AnimatedSection type="slide" direction="up" delay={0.6}>
            <div className="flex justify-center mb-12">
              <div className="relative bg-gradient-to-r from-muted/80 via-muted to-muted/80 rounded-2xl p-1 shadow-xl backdrop-blur-sm border border-primary/20">
                {/* Sliding indicator */}
                <div 
                  className={`absolute top-1 bottom-1 rounded-xl bg-gradient-to-r from-primary via-primary to-primary/90 shadow-lg transition-all duration-500 ease-out ${
                    activeTab === 'residential' 
                      ? 'left-1 w-[calc(50%-2px)]' 
                      : 'left-[calc(50%+1px)] w-[calc(50%-2px)]'
                  }`}
                />
                
                <div className="relative flex">
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={() => setActiveTab("residential")}
                    className={`rounded-xl px-6 py-3 z-10 transition-all duration-300 font-medium ${
                      activeTab === "residential" 
                        ? "text-primary-foreground hover:text-primary-foreground/90 shadow-none" 
                        : "text-foreground/70 hover:text-primary hover:bg-transparent"
                    }`}
                  >
                    <span className="flex items-center gap-2 whitespace-nowrap">
                      Residential Projects
                      {activeTab === "residential" && <ArrowRight className="w-4 h-4 animate-pulse" />}
                    </span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={() => setActiveTab("commercial")}
                    className={`rounded-xl px-6 py-3 z-10 transition-all duration-300 font-medium ${
                      activeTab === "commercial" 
                        ? "text-primary-foreground hover:text-primary-foreground/90 shadow-none" 
                        : "text-foreground/70 hover:text-primary hover:bg-transparent"
                    }`}
                  >
                    <span className="flex items-center gap-2 whitespace-nowrap">
                      Commercial Projects
                      {activeTab === "commercial" && <ArrowRight className="w-4 h-4 animate-pulse" />}
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Projects Grid with Staggered Card Reveal */}
          <div className="relative">
            <AnimatedCardGrid className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" delay={0.8}>
              {projects[activeTab].map((project, index) => (
                <Card 
                  key={project.id} 
                  className="group relative overflow-hidden bg-gradient-to-b from-background to-background/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 cursor-pointer h-full flex flex-col"
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    transform: `perspective(1000px) rotateX(${cardTransforms[index]?.rotateX || 0}deg) rotateY(${cardTransforms[index]?.rotateY || 0}deg)`
                  }}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Image Container with Reveal Animation */}
                  <div className="relative overflow-hidden rounded-t-lg h-56">
                    {/* Image overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-contain transition-all duration-700 bg-muted/30"
                    />
                    
                    {/* Animated Badge */}
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 z-20">
                      {project.year}
                    </Badge>
                    
                    {/* View Icon that appears on hover */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setExpandedImage(project.image)
                      }}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-20 hover:bg-white hover:scale-110"
                    >
                      <Eye className="w-5 h-5 text-primary" />
                    </button>
                    
                    {/* Scan line effect */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-1000 delay-200"></div>
                  </div>
                  
                  {/* Content with Slide-up Animation */}
                  <CardContent className="p-6 relative flex-1 flex flex-col">
                    <h3 className="font-bold text-xl mb-3 text-primary transition-colors duration-300 group-hover:text-primary/80">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed transition-colors duration-300 group-hover:text-foreground flex-1">
                      {project.description}
                    </p>

                    {/* Project Details with Individual Animations */}
                    <div className="space-y-3 mt-auto">
                      {[
                        { icon: MapPin, text: project.location, delay: '100ms' },
                        { icon: Square, text: project.area, delay: '200ms' },
                        { icon: Calendar, text: `Completed in ${project.year}`, delay: '300ms' }
                      ].map((item, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center space-x-3 text-sm group/item transition-all duration-300 hover:translate-x-2"
                          style={{transitionDelay: item.delay}}
                        >
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group/item:scale-110">
                            <item.icon className="w-4 h-4 text-primary transition-colors duration-300 group/item:text-primary/80" />
                          </div>
                          <span className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground group/item:font-medium">
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Bottom border animation */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 transition-all duration-700 group-hover:w-full"></div>
                    
                    {/* Corner decoration */}
                    <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-primary/20 transform rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></div>
                  </CardContent>
                  
                  {/* Card number indicator */}
                  <div className="absolute bottom-3 left-3 w-8 h-8 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 border-2 border-white/20 z-20">
                    {index + 1}
                  </div>
                </Card>
              ))}
            </AnimatedCardGrid>
          </div>
          
          {/* Bottom decorative element */}
          <div className="flex justify-center mt-16">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
          </div>
        </div>
        
        {/* Animated bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse"></div>

        {/* Expanded Image Modal */}
        {expandedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setExpandedImage(null)}
          >
            <div className="relative max-w-7xl max-h-[90vh] w-full h-full p-4 flex items-center justify-center">
              <Image
                src={expandedImage}
                alt="Expanded project view"
                width={1920}
                height={1080}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in duration-500"
              />
              <button
                onClick={() => setExpandedImage(null)}
                className="absolute top-8 right-8 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>
            </div>
          </div>
        )}
      </section>
    </AnimatedSection>
  )
}