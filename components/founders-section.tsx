import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { IMAGES } from "@/constants/images"
import { AnimatedSection, AnimatedText, AnimatedCardGrid } from "./animated-section"
import { Star, Award, Users, Briefcase, Quote } from "lucide-react"

export function FoundersSection() {
  const founders = [
    {
      name: "R. Muniraju Reddy",
      title: "Business Owner and Founder",
      image: IMAGES.founders.founder2,
      description:
        "With over 30 years of experience in construction and project management, Mr. R. Muniraju Reddy has led Nayana Constructions to become one of Bengaluru's most trusted construction companies. His vision for quality and innovation drives every project.",
      expertise: ["Project Management", "Structural Engineering", "Quality Control"],
      experience: "30+ Years",
      projects: "30+ Projects",
    },
    {
      name: "Vinay M Reddy",
      title: "Business Owner",
      image: IMAGES.founders.founder1,
      description:
        "Carrying forward his father’s legacy, Mr. Vinay M Reddy brings a fresh outlook, creativity, and keen attention to detail. With his commerce background, he combines smart management with a passion for crafting construction projects that are efficient, elegant, and enduring.",
      expertise: ["Architectural Design", "Interior Planning", "Client Relations"],
    },
  ]

  return (
    <AnimatedSection>
      <section className="py-20 bg-gradient-to-br from-muted via-muted/80 to-background relative overflow-hidden">
        {/* Elegant Background Elements */}
        <div className="absolute inset-0">
          {/* Geometric Patterns */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 border-2 border-primary/10 rotate-45 animate-pulse"></div>
          
          {/* Floating Orbs */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary/30 rounded-full animate-float"></div>
          <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-primary/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-5" 
               style={{
                 backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                 backgroundSize: '40px 40px'
               }}>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-16 relative">            
            <AnimatedText 
              text="Meet Our Founders" 
              className="text-4xl md:text-5xl font-bold text-primary mb-6 relative" 
              type="words" 
            />
            
            <AnimatedText
              text="The visionary leaders behind Nayana Constructions, bringing decades of experience and passion for excellence."
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              type="words"
              delay={0.3}
            />
            
            {/* Bottom Decorative Element */}
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-primary/80 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>

          {/* Founders Cards with Professional Animations */}
          <AnimatedCardGrid className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto" delay={0.6}>
            {founders.map((founder, index) => (
              <div key={index} className="relative group">
                {/* Card Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                
                <Card className="relative overflow-hidden bg-gradient-to-br from-background/95 via-background to-background/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 hover:rotate-1">
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent"></div>
                  
                  {/* Image Section with Sophisticated Effects */}
                  <div className="relative h-80 overflow-hidden">
                    {/* Image Overlay Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <Image 
                      src={founder.image || "/placeholder.svg"} 
                      alt={founder.name} 
                      fill 
                      className="object-cover transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110 group-hover:contrast-105" 
                    />
                    
                    {/* Floating Stats */}
                    <div className="absolute top-4 left-4 space-y-2 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg">
                        <span className="text-xs font-semibold text-primary">{founder.experience}</span>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg">
                        <span className="text-xs font-semibold text-primary">{founder.projects}</span>
                      </div>
                    </div>
                    
                    {/* Quote Icon */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 z-30">
                      <Quote className="w-6 h-6 text-primary-foreground" />
                    </div>
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-20"></div>
                  </div>
                  
                  <CardContent className="p-8 relative">
                    {/* Name and Title with Underline Animation */}
                    <div className="text-center mb-6 relative">
                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 transition-colors duration-300 group-hover:text-primary/80">
                        {founder.name}
                      </h3>
                      <p className="text-secondary font-semibold text-lg">{founder.title}</p>
                      
                      {/* Animated Underline */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 group-hover:w-24 transition-all duration-500"></div>
                    </div>

                    {/* Description with Typewriter Effect */}
                    <p className="text-muted-foreground mb-8 leading-relaxed text-center transition-colors duration-300 group-hover:text-foreground/80">
                      {founder.description}
                    </p>

                    {/* Expertise Section */}
                    <div className="relative">
                      <h4 className="font-semibold text-primary mb-4 flex items-center justify-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Areas of Expertise
                      </h4>
                      
                      {/* Expertise Tags with Stagger Animation */}
                      <div className="flex flex-wrap justify-center gap-3">
                        {founder.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-gradient-to-r from-secondary/20 to-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium border border-secondary/20 transition-all duration-300 hover:scale-105 hover:bg-secondary/30 hover:shadow-lg cursor-pointer"
                            style={{
                              animationDelay: `${skillIndex * 0.1}s`,
                              transform: `translateY(${skillIndex * 2}px)`
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Achievement Stars - Only visible on hover, blue color */}
                    <div className="absolute top-4 right-4 flex space-x-1 opacity-0 group-hover:opacity-100 transition-all duration-700">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 text-blue-600 fill-blue-600 animate-pulse" 
                          style={{animationDelay: `${i * 0.1}s`}}
                        />
                      ))}
                    </div>
                    
                    {/* Bottom Glow Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60 group-hover:w-full transition-all duration-700"></div>
                  </CardContent>
                  
                  {/* Side Number Indicator - Fixed positioning to show fully on hover */}
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-12 group-hover:translate-x-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {index + 1}
                  </div>
                </Card>
              </div>
            ))}
          </AnimatedCardGrid>
          
          {/* Bottom Section Decoration */}
          <div className="mt-16 flex justify-center">
            <div className="text-center">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-4 mx-auto"></div>
              <p className="text-sm text-muted-foreground italic">Leadership • Vision • Excellence</p>
            </div>
          </div>
        </div>
        
        {/* CSS for Custom Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>
    </AnimatedSection>
  )
}