"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { CONTACT_INFO } from "@/constants/images"
import { AnimatedSection, AnimatedText } from "./animated-section"
import emailjs from "emailjs-com"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        "service_2vcpmzv",
        "template_egx4pd1",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          message: formData.message,
          to_email: "nayanaconstruction1@gmail.com",
        },
        "PfIeVhtjGe8nimxul"
      )

      alert("✅ Thank you for your inquiry! We'll get back to you within 24 hours.")
      setFormData({ name: "", email: "", phone: "", projectType: "", message: "" })
    } catch (error) {
      console.error("❌ Email send error:", error)
      alert("❌ Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactItems = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      content: CONTACT_INFO.address,
      delay: "0s"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: CONTACT_INFO.phone,
      delay: "0.1s"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: CONTACT_INFO.email,
      delay: "0.2s"
    },
  ]

  return (
    <AnimatedSection>
      <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <AnimatedText 
              text="Get In Touch" 
              className="text-4xl md:text-5xl font-bold text-primary mb-6" 
              type="words" 
            />
            <AnimatedText
              text="Ready to start your construction project? Contact us today for a free consultation and quote."
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              type="words"
              delay={0.3}
            />
            
            {/* Subtle decoration */}
            <div className="mt-8 flex justify-center">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto lg:items-stretch">
            {/* Contact Information */}
            <AnimatedSection type="slide" direction="left" delay={0.6}>
              <div className="h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-8 relative">
                    Contact Information
                    <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary animate-pulse"></div>
                  </h3>
                  
                  <div className="space-y-6 mb-8">
                    {contactItems.map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-start space-x-4 group cursor-pointer transition-all duration-300 hover:translate-x-2 p-3 rounded-lg hover:bg-primary/5"
                        style={{animationDelay: item.delay}}
                      >
                        <div className="text-secondary mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:text-primary">
                          {item.icon}
                        </div>
                        <div className="transition-all duration-300">
                          <h4 className="font-semibold text-primary mb-1 group-hover:text-primary/80">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed group-hover:text-foreground whitespace-pre-line">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Google Map */}
                <div className="relative group mt-auto">
                  <Card className="overflow-hidden transition-all duration-500 hover:shadow-xl group-hover:-translate-y-1">
                    <CardContent className="p-0 relative">
                      {/* Map overlay for better interaction */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                      
                      <iframe
                        src="https://www.google.com/maps?q=12.908386589361355,77.55469335142551&hl=en&z=16&output=embed"
                        width="100%"
                        height="300"
                        className="rounded-lg transition-all duration-500 group-hover:brightness-110"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                      
                      {/* Map label */}
                      <div className="absolute bottom-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        Visit Our Office
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection type="slide" direction="right" delay={0.8}>
              <Card className="relative overflow-hidden transition-all duration-500 hover:shadow-xl border-0 bg-gradient-to-br from-background to-background/95 h-full flex flex-col">
                {/* Subtle card glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
                
                <CardHeader className="relative">
                  <CardTitle className="text-primary flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Send us a Message
                  </CardTitle>
                  <div className="w-full h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 mt-4"></div>
                </CardHeader>
                
                <CardContent className="relative flex-1 flex flex-col">
                  <form onSubmit={handleSubmit} className="space-y-8 flex-1 flex flex-col">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="relative">
                        <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                        <div className="relative mt-2">
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary h-12"
                          />
                          <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${focusedField === 'name' ? 'w-full' : 'w-0'}`}></div>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                        <div className="relative mt-2">
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary h-12"
                          />
                          <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${focusedField === 'phone' ? 'w-full' : 'w-0'}`}></div>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                      <div className="relative mt-2">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary h-12"
                        />
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${focusedField === 'email' ? 'w-full' : 'w-0'}`}></div>
                      </div>
                    </div>

                    <div className="relative">
                      <Label htmlFor="projectType" className="text-sm font-medium">Project Type</Label>
                      <div className="relative mt-2">
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('projectType')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-3 py-3 h-12 border border-input rounded-md bg-background transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        >
                          <option value="">Select Project Type</option>
                          <option value="residential">Residential Construction</option>
                          <option value="commercial">Commercial Construction</option>
                          <option value="renovation">Renovation</option>
                          <option value="consultation">Consultation</option>
                        </select>
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${focusedField === 'projectType' ? 'w-full' : 'w-0'}`}></div>
                      </div>
                    </div>

                    <div className="relative flex-1 flex flex-col">
                      <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                      <div className="relative mt-2 flex-1 flex flex-col">
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          required
                          rows={6}
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none flex-1 min-h-[120px]"
                          placeholder="Tell us about your project requirements..."
                        />
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${focusedField === 'message' ? 'w-full' : 'w-0'}`}></div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full h-12 relative overflow-hidden transition-all duration-300 hover:scale-105 group" 
                        disabled={isSubmitting}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </>
                          )}
                        </span>
                        
                        {/* Button shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
          
          {/* Bottom decoration */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-primary/5 rounded-full px-6 py-2">
              <span className="text-primary/80 text-sm font-medium">We will respond at the earliest.</span>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}