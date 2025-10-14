"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, User, Briefcase, Mail, ChevronRight, Sparkles } from "lucide-react"
import { IMAGES } from "@/constants/images"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About Us", icon: User },
    { href: "#projects", label: "Projects", icon: Briefcase },
    { href: "#contact", label: "Contact Us", icon: Mail },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled 
            ? "bg-primary/95 backdrop-blur-md shadow-2xl border-b border-primary-foreground/10" 
            : "bg-primary/100"
        }`}
      >
        {/* Animated top border */}
        <div className={`h-1 bg-gradient-to-r from-secondary via-primary-foreground to-secondary transition-all duration-1000 ${
          isScrolled ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`}></div>

        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo with premium animations */}
            <Link 
              href="#home" 
              className="flex items-center space-x-4 group transition-all duration-500 hover:scale-105 relative"
              onMouseEnter={() => setHoveredItem('logo')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={IMAGES.logo || "/placeholder.svg"}
                  alt="Nayana Constructions"
                  width={55}
                  height={55}
                  className="rounded-xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:brightness-110"
                />
                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1 right-1 w-1 h-1 bg-secondary rounded-full animate-pulse"></div>
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-primary-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
                {/* Premium glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary/50 to-primary-foreground/50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm -z-10"></div>
              </div>
              
              <div className="text-primary-foreground relative">
                <h1 className="font-bold text-xl group-hover:text-secondary transition-all duration-500 relative overflow-hidden">
                  <span className="inline-block transition-transform duration-500 group-hover:-translate-y-1">
                    Nayana Constructions
                  </span>
                  {/* Sliding underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-primary-foreground group-hover:w-full transition-all duration-700 ease-out"></span>
                  {/* Premium shimmer effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
                </h1>
                <p className="text-sm opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2 transform flex items-center gap-1">
                  <Sparkles size={12} className="opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  Building Dreams Since 1994
                </p>
              </div>

              {/* Floating accent */}
              <div className={`absolute -top-2 -right-2 transition-all duration-300 ${
                hoveredItem === 'logo' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}>
                <div className="w-3 h-3 bg-secondary rounded-full animate-ping"></div>
                <div className="w-3 h-3 bg-secondary rounded-full absolute top-0"></div>
              </div>
            </Link>

            {/* Premium Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-6 py-3 text-primary-foreground font-medium group overflow-hidden rounded-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1"
                    style={{ 
                      animationDelay: `${index * 150}ms`,
                      animation: `fadeInDown 0.8s ease-out ${index * 150}ms both`
                    }}
                    onMouseEnter={() => setHoveredItem(item.href)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Multi-layer background effects */}
                    <span className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-primary-foreground/10 to-secondary/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center"></span>
                    <span className="absolute inset-0 bg-secondary/10 rounded-xl scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out blur-sm"></span>
                    
                    {/* Content */}
                    <span className="relative z-10 flex items-center gap-2 transition-all duration-500 group-hover:text-secondary">
                      <IconComponent 
                        size={16} 
                        className="transition-all duration-500 group-hover:rotate-12 group-hover:scale-110" 
                      />
                      <span className="transition-all duration-500 group-hover:-translate-y-0.5">
                        {item.label}
                      </span>
                      <ChevronRight 
                        size={14} 
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" 
                      />
                    </span>
                    
                    {/* Premium underline with gradient */}
                    <span className="absolute bottom-1 left-6 w-0 h-0.5 bg-gradient-to-r from-secondary to-primary-foreground group-hover:w-[calc(100%-3rem)] transition-all duration-700 ease-out"></span>
                    
                    {/* Corner accents */}
                    <span className="absolute top-1 right-1 w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 scale-0 group-hover:scale-100"></span>
                    <span className="absolute bottom-1 left-1 w-1 h-1 bg-primary-foreground rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-500 scale-0 group-hover:scale-100"></span>

                    {/* Floating indicator */}
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 transition-all duration-300 ${
                      hoveredItem === item.href ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}>
                      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce"></div>
                    </div>
                  </Link>
                )
              })}
            </nav>

            {/* Premium Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary-foreground relative overflow-hidden group hover:scale-110 transition-all duration-500 rounded-xl shadow-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {/* Animated background layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary-foreground/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
              <div className="absolute inset-0 bg-secondary/10 rounded-xl scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out blur-sm"></div>
              
              <div className="relative z-10 transition-all duration-700 group-hover:rotate-180">
                {isMobileMenuOpen ? (
                  <X size={26} className="transition-all duration-500 group-hover:text-secondary group-hover:scale-110" />
                ) : (
                  <Menu size={26} className="transition-all duration-500 group-hover:text-secondary group-hover:scale-110" />
                )}
              </div>
              
              {/* Ripple effects */}
              <div className="absolute inset-0 rounded-xl bg-secondary/30 scale-0 group-active:scale-100 transition-transform duration-300"></div>
              <div className="absolute inset-0 rounded-xl bg-primary-foreground/20 scale-0 group-active:scale-110 transition-transform duration-500 delay-100"></div>
            </Button>
          </div>

          {/* Premium Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-6 pb-6 border-t border-primary-foreground/20 relative">
              {/* Animated gradient line */}
              <div className="absolute top-0 left-0 w-0 h-px bg-gradient-to-r from-secondary to-primary-foreground animate-expandWidth"></div>
              
              <div className="flex flex-col space-y-3 pt-6">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="relative px-6 py-4 text-primary-foreground font-medium group overflow-hidden rounded-xl transition-all duration-500 hover:translate-x-3 hover:scale-105 border border-transparent hover:border-secondary/20"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{ 
                        animation: `slideInLeft 0.6s ease-out ${index * 150}ms both`
                      }}
                    >
                      {/* Premium background slide */}
                      <span className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-primary-foreground/10 to-transparent rounded-xl -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></span>
                      <span className="absolute inset-0 bg-secondary/5 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></span>
                      
                      {/* Content with enhanced spacing */}
                      <span className="relative z-10 flex items-center gap-4 transition-all duration-500 group-hover:text-secondary">
                        <IconComponent 
                          size={20} 
                          className="transition-all duration-500 group-hover:rotate-12 group-hover:scale-125 group-hover:text-secondary" 
                        />
                        <span className="transition-all duration-500 group-hover:translate-x-1">
                          {item.label}
                        </span>
                      </span>
                      
                      {/* Animated chevron */}
                      <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0 translate-x-4 text-secondary">
                        <ChevronRight size={18} className="transition-transform duration-300 group-hover:scale-125" />
                      </span>

                      {/* Premium glow effect */}
                      <div className="absolute -inset-px bg-gradient-to-r from-secondary/30 to-primary-foreground/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
                    </Link>
                  )
                })}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Enhanced Custom CSS for premium animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .animate-expandWidth {
          animation: expandWidth 1s ease-out 0.3s both;
        }

        /* Custom hover states for premium feel */
        @media (prefers-reduced-motion: no-preference) {
          .group:hover .animate-bounce {
            animation-duration: 0.5s;
          }
          
          .group:hover .animate-pulse {
            animation-duration: 1s;
          }
        }

        /* Smooth transitions for all interactive elements */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </>
  )
}