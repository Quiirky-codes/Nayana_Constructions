import { Card, CardContent } from "@/components/ui/card"
import {
  Users,
  Briefcase,
  Palette,
  Award,
  Cog,
  Clock,
  DollarSign,
  Sparkles,
  Eye,
  Shield,
  Headphones,
  CheckCircle,
} from "lucide-react"
import { AnimatedSection, AnimatedText, AnimatedCardGrid } from "./animated-section"

export function WhyChooseUsSection() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "No Subcontractors",
      description: "All work is done by our in-house team of skilled professionals",
      color: "from-blue-500/20 to-blue-600/20",
      accent: "bg-blue-500",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Professional Project Management",
      description: "Systematic approach with dedicated project managers for each build",
      color: "from-green-500/20 to-green-600/20",
      accent: "bg-green-500",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Unique and Modern Designs",
      description: "Innovative architectural solutions tailored to your vision",
      color: "from-purple-500/20 to-purple-600/20",
      accent: "bg-purple-500",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality",
      description: "Uncompromising standards using premium materials and techniques",
      color: "from-yellow-500/20 to-yellow-600/20",
      accent: "bg-yellow-500",
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Process",
      description: "Well-defined workflow ensuring smooth project execution",
      color: "from-gray-500/20 to-gray-600/20",
      accent: "bg-gray-500",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Adherence to Timelines",
      description: "Projects completed on schedule without compromising quality",
      color: "from-red-500/20 to-red-600/20",
      accent: "bg-red-500",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Pricing",
      description: "Best value for money with transparent cost breakdown",
      color: "from-emerald-500/20 to-emerald-600/20",
      accent: "bg-emerald-500",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "High-Quality Design",
      description: "Aesthetic excellence combined with functional efficiency",
      color: "from-pink-500/20 to-pink-600/20",
      accent: "bg-pink-500",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Transparency",
      description: "Open communication and regular progress updates",
      color: "from-cyan-500/20 to-cyan-600/20",
      accent: "bg-cyan-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Brand/Trustworthy",
      description: "30+ years of building trust and lasting relationships",
      color: "from-indigo-500/20 to-indigo-600/20",
      accent: "bg-indigo-500",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Professional Customer Service",
      description: "Dedicated support team for all your queries and concerns",
      color: "from-teal-500/20 to-teal-600/20",
      accent: "bg-teal-500",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Hassle-free Service",
      description: "End-to-end solutions making your construction journey smooth",
      color: "from-orange-500/20 to-orange-600/20",
      accent: "bg-orange-500",
    },
  ]

  return (
    <AnimatedSection>
      <section className="py-20 bg-gradient-to-br from-background via-muted/50 to-background relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0"
               style={{
                 backgroundImage: `
                   linear-gradient(90deg, transparent 98%, rgba(var(--primary), 0.1) 100%),
                   linear-gradient(0deg, transparent 98%, rgba(var(--primary), 0.1) 100%)
                 `,
                 backgroundSize: '50px 50px',
                 animation: 'gridMove 20s linear infinite'
               }}>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-1/3 w-1 h-1 bg-primary/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-primary/30 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-primary/50 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header with Wave Effect */}
          <div className="text-center mb-16 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full h-16 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -skew-x-12 animate-pulse"></div>
            </div>
            
            <AnimatedText
              text="Why Choose Nayana Constructions?"
              className="text-4xl md:text-5xl font-bold text-primary mb-6 relative"
              type="words"
            />
            
            <AnimatedText
              text="Discover what sets us apart and makes us the preferred choice for construction projects in Bengaluru."
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              type="words"
              delay={0.3}
            />
            
            {/* Animated Counter */}
            <div className="mt-8 flex justify-center">
              <div className="bg-primary/10 rounded-full px-6 py-2 backdrop-blur-sm">
                <span className="text-primary font-bold text-lg">12 Reasons</span>
                <span className="text-primary/60 ml-2">to Trust Us</span>
              </div>
            </div>
          </div>

          {/* Features Grid with Wave Animations */}
          <AnimatedCardGrid className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" delay={0.6}>
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-background to-background/95 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-64 flex flex-col"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Top Accent Bar */}
                <div className={`absolute top-0 left-0 w-0 h-1 ${feature.accent} group-hover:w-full transition-all duration-700 delay-200`}></div>
                
                {/* Side Accent - Left */}
                <div className={`absolute left-0 top-0 w-1 h-0 ${feature.accent} group-hover:h-full transition-all duration-700 delay-100`}></div>
                
                {/* Right Accent Bar */}
                <div className={`absolute right-0 top-0 w-1 h-0 ${feature.accent} group-hover:h-full transition-all duration-700 delay-200`}></div>
                
                {/* Bottom Accent Bar */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 ${feature.accent} group-hover:w-full transition-all duration-700 delay-300`}></div>
                
                <CardContent className="p-6 flex flex-col h-full relative z-10">
                  {/* Icon Section with Ripple Effect */}
                  <div className="flex justify-center mb-4 relative">
                    <div className="relative">
                      {/* Ripple Background */}
                      <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-200 transition-transform duration-1000 delay-100"></div>
                      
                      {/* Icon Container */}
                      <div className="relative w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <div className="text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-primary/80">
                          {feature.icon}
                        </div>
                      </div>
                      
                      {/* Floating Particles */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300 animate-ping"></div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex flex-col flex-grow text-center">
                    <h3 className="font-bold text-lg mb-3 text-primary transition-all duration-300 group-hover:text-primary/80 leading-tight min-h-[3.5rem] flex items-center justify-center">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow transition-colors duration-300 group-hover:text-foreground/80">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Corner Numbers */}
                  <div className="absolute top-2 right-3 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-400">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-200"></div>
                </CardContent>
                
                {/* Card Border Glow */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300"></div>
              </Card>
            ))}
          </AnimatedCardGrid>
          
          {/* Bottom Statistics */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 bg-primary/5 rounded-2xl px-8 py-4 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">30+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px h-8 bg-primary/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">30+</div>
                <div className="text-xs text-muted-foreground">Projects Completed</div>
              </div>
              <div className="w-px h-8 bg-primary/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CSS for Custom Animations */}
        <style jsx>{`
          @keyframes gridMove {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(50px, 50px);
            }
          }
        `}</style>
      </section>
    </AnimatedSection>
  )
}