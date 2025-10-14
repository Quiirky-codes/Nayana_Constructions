import Image from "next/image"
import { IMAGES } from "@/constants/images"
import { AnimatedSection, AnimatedText } from "./animated-section"

export function BrandsSection() {
  const brands = [
    { name: "Zuari Cement", logo: IMAGES.brands.zuariCement },
    { name: "Bharathi Cement", logo: IMAGES.brands.bharathiCement },
    { name: "Birla White Cement", logo: IMAGES.brands.birlaWhite },
    { name: "Supreme Pipes", logo: IMAGES.brands.supremePipes },
    { name: "Ashirwad Pipes", logo: IMAGES.brands.ashirwadPipes },
    { name: "Hindware", logo: IMAGES.brands.hindware },
    { name: "Parryware", logo: IMAGES.brands.parryware },
    { name: "Kohler", logo: IMAGES.brands.kohler },
    { name: "Jaquar", logo: IMAGES.brands.jaquar },
    { name: "Asian Paints", logo: IMAGES.brands.asianPaints },
    { name: "Kamdhenu Steels", logo: IMAGES.brands.kamdhenSteels },
    { name: "FosGuard", logo: IMAGES.brands.fosGuard },
  ]

  return (
    <AnimatedSection>
      <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-40">
          {/* Gentle floating shapes */}
          <div className="absolute top-20 right-10 w-32 h-32 border border-primary/10 rounded-full animate-gentle-float"></div>
          <div className="absolute bottom-32 left-16 w-24 h-24 border border-primary/8 rotate-45 animate-gentle-pulse"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5" 
               style={{
                 backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                 backgroundSize: '60px 60px'
               }}>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-16 relative">
            <div className="relative inline-block">
              <AnimatedText 
                text="We use Trusted Brands" 
                className="text-3xl md:text-4xl font-bold text-primary mb-6 relative" 
                type="words" 
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full scale-150 opacity-0 animate-gentle-glow"></div>
            </div>
            
            <AnimatedText
              text="We partner with industry-leading brands to ensure the highest quality materials and components in every project."
              className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              type="words"
              delay={0.3}
            />
            
            {/* Decorative elements */}
            <div className="mt-6 flex justify-center">
              <div className="flex space-x-2">
                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-gentle-bounce"></div>
                <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-gentle-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-1.5 h-1.5 bg-primary/80 rounded-full animate-gentle-bounce" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>

          {/* Enhanced Infinite Carousel */}
          <AnimatedSection type="slide" direction="up" delay={0.6}>
            <div className="relative overflow-hidden rounded-2xl">
              {/* Subtle gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
              
              {/* Main carousel container */}
              <div className="py-8 px-4">
                <div className="flex animate-infinite-scroll">
                  {/* First set of brands */}
                  {brands.map((brand, index) => (
                    <div 
                      key={index} 
                      className="flex-shrink-0 mx-6 group"
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      <div className="w-48 h-28 flex items-center justify-center p-4 relative">
                        {/* Subtle background card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background rounded-xl border border-muted/30 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
                        
                        {/* Brand logo */}
                        <div className="relative z-10 transform transition-all duration-500 group-hover:scale-110 filter group-hover:brightness-110">
                          <Image
                            src={brand.logo || "/placeholder.svg"}
                            alt={brand.name}
                            width={180}
                            height={90}
                            className="w-full h-full object-contain transition-all duration-500 opacity-70 group-hover:opacity-100"
                          />
                        </div>
                        
                        {/* Hover tooltip */}
                        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                          <div className="bg-primary text-primary-foreground px-3 py-1 rounded-lg text-xs font-medium shadow-lg whitespace-nowrap">
                            {brand.name}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-primary rotate-45"></div>
                          </div>
                        </div>
                        
                        {/* Subtle shine effect */}
                        <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-shine"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {brands.map((brand, index) => (
                    <div 
                      key={`duplicate-${index}`} 
                      className="flex-shrink-0 mx-6 group"
                      style={{
                        animationDelay: `${(index + brands.length) * 0.1}s`
                      }}
                    >
                      <div className="w-48 h-28 flex items-center justify-center p-4 relative">
                        {/* Subtle background card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background rounded-xl border border-muted/30 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
                        
                        {/* Brand logo */}
                        <div className="relative z-10 transform transition-all duration-500 group-hover:scale-110 filter group-hover:brightness-110">
                          <Image
                            src={brand.logo || "/placeholder.svg"}
                            alt={brand.name}
                            width={180}
                            height={90}
                            className="w-full h-full object-contain transition-all duration-500 opacity-70 group-hover:opacity-100"
                          />
                        </div>
                        
                        {/* Hover tooltip */}
                        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                          <div className="bg-primary text-primary-foreground px-3 py-1 rounded-lg text-xs font-medium shadow-lg whitespace-nowrap">
                            {brand.name}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-primary rotate-45"></div>
                          </div>
                        </div>
                        
                        {/* Subtle shine effect */}
                        <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-shine"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Trust indicators */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-gentle-pulse"></div>
                <span>Premium Quality</span>
              </div>
              <div className="w-px h-4 bg-muted-foreground/30"></div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-gentle-pulse" style={{animationDelay: '0.5s'}}></div>
                <span>Trusted Partners</span>
              </div>
              <div className="w-px h-4 bg-muted-foreground/30"></div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-gentle-pulse" style={{animationDelay: '1s'}}></div>
                <span>Guaranteed Excellence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CSS for professional animations */}
        <style jsx>{`
          @keyframes infinite-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes gentle-float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(2deg);
            }
          }

          @keyframes gentle-pulse {
            0%, 100% {
              opacity: 0.6;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.1);
            }
          }

          @keyframes gentle-bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-4px);
            }
          }

          @keyframes gentle-glow {
            0%, 100% {
              opacity: 0;
            }
            50% {
              opacity: 0.3;
            }
          }

          @keyframes shine {
            0% {
              transform: translateX(-100%) skewX(-12deg);
            }
            100% {
              transform: translateX(200%) skewX(-12deg);
            }
          }

          .animate-infinite-scroll {
            animation: infinite-scroll 50s linear infinite;
            width: fit-content;
          }

          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }

          .animate-gentle-float {
            animation: gentle-float 8s ease-in-out infinite;
          }

          .animate-gentle-pulse {
            animation: gentle-pulse 3s ease-in-out infinite;
          }

          .animate-gentle-bounce {
            animation: gentle-bounce 2s ease-in-out infinite;
          }

          .animate-gentle-glow {
            animation: gentle-glow 4s ease-in-out infinite;
          }

          .animate-shine {
            animation: shine 2s ease-out;
          }

          /* Ensure smooth performance */
          .animate-infinite-scroll,
          .animate-gentle-float,
          .animate-gentle-pulse,
          .animate-gentle-bounce,
          .animate-gentle-glow {
            will-change: transform;
          }
        `}</style>
      </section>
    </AnimatedSection>
  )
}