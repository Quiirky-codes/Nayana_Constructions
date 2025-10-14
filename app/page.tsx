"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { TimelineSection } from "@/components/timeline-section"
import { BrochuresSection } from "@/components/brochures-section"
import { BrandsSection } from "@/components/brands-section"
import { FoundersSection } from "@/components/founders-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"
import { SectionTransition } from "@/components/section-transition"

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <SectionTransition fromColor="rgb(59 130 246)" toColor="rgb(248 250 252)">
          <AboutSection />
        </SectionTransition>
        <ProjectsSection />
        <TimelineSection />
        <BrandsSection />
        <FoundersSection />
        <TestimonialsSection />
        <WhyChooseUsSection />
        <BrochuresSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
