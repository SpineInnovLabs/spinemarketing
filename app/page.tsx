import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LogosSection } from "@/components/logos-section"
import { StatsSection } from "@/components/stats-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ModulesSection } from "@/components/modules-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { TemplatesSection } from "@/components/templates-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main" role="main">
        <HeroSection />
        <LogosSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ModulesSection />
        <ArchitectureSection />
        <TemplatesSection />
        <TestimonialsSection />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
