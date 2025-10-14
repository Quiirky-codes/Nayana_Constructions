import Image from "next/image"
import Link from "next/link"
import { Youtube, Instagram, Linkedin, Facebook, Phone, Mail, MapPin } from "lucide-react"
import { IMAGES, SOCIAL_LINKS, CONTACT_INFO } from "@/constants/images"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-secondary/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full -translate-x-48 -translate-y-48 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full translate-x-40 translate-y-40 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info with fade-in animation */}
          <div className="md:col-span-2 animate-fadeInLeft">
            <div className="flex items-center space-x-3 mb-4 group">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={IMAGES.logo || "/placeholder.svg"}
                  alt="Nayana Constructions"
                  width={50}
                  height={50}
                  className="rounded-lg transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <h3 className="text-xl font-bold group-hover:text-secondary transition-colors duration-300">
                  Nayana Constructions
                </h3>
                <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  Building Dreams Since 1994
                </p>
              </div>
            </div>
            
            <p className="text-sm opacity-90 leading-relaxed mb-6 max-w-md hover:opacity-100 transition-opacity duration-300">
              With over 30 years of experience in construction, we have established ourselves as Bengaluru's most
              trusted construction company, delivering quality projects with uncompromising standards.
            </p>

            {/* Social Links with stagger animation */}
            <div className="flex space-x-4">
              {[
                { icon: Youtube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
                { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
                { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
                { icon: Facebook, href: SOCIAL_LINKS.facebook || "#", label: "Facebook" }
              ].map(({ icon: Icon, href, label }, index) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group p-2 rounded-full transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                  aria-label={label}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Background circle */}
                  <div className="absolute inset-0 bg-secondary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                  
                  {/* Icon */}
                  <Icon className="w-5 h-5 relative z-10 group-hover:text-secondary transition-colors duration-300" />
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 bg-secondary/30 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 ease-out opacity-0 group-hover:opacity-50"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links with slide-in animation */}
          <div className="animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <h4 className="font-semibold text-lg mb-4 relative group">
              Quick Links
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-500 ease-out"></span>
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About Us" },
                { href: "#projects", label: "Our Projects" },
                { href: "#contact", label: "Contact Us" }
              ].map(({ href, label }, index) => (
                <li key={href} style={{ animationDelay: `${300 + index * 100}ms` }}>
                  <Link 
                    href={href} 
                    className="relative group inline-flex items-center transition-all duration-300 hover:translate-x-2 hover:text-secondary py-1"
                  >
                    {/* Slide indicator */}
                    <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-0 group-hover:w-2 h-0.5 bg-secondary transition-all duration-300"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info with slide-in animation */}
          <div className="animate-fadeInUp" style={{ animationDelay: '400ms' }}>
            <h4 className="font-semibold text-lg mb-4 relative group">
              Contact Info
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-500 ease-out"></span>
            </h4>
            <div className="space-y-3 text-sm">
              {[
                { icon: Phone, text: CONTACT_INFO.phone },
                { icon: Mail, text: CONTACT_INFO.email },
                { icon: MapPin, text: CONTACT_INFO.address }
              ].map(({ icon: Icon, text }, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-2 group hover:translate-x-1 transition-transform duration-300"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <Icon className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-secondary transition-colors duration-300" />
                  <span className="group-hover:text-secondary transition-colors duration-300">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar with fade-in animation */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center animate-fadeInUp" style={{ animationDelay: '800ms' }}>
          <p className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-300">
            © {currentYear} Nayana Constructions. All rights reserved. |
            <span className="ml-1 relative group">
              Designed with 
              <span className="inline-block mx-1 text-red-400 animate-pulse-heart">❤️</span>
              for excellence in construction
            </span>
          </p>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.1;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-heart {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out both;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-heart {
          animation: pulse-heart 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}