import { Header } from "@/components/header-client"
import { HeroSection } from "@/components/hero-section"
import { SpineSection } from "@/components/spine-section-client"
import { SolutionSection } from "@/components/solution-section-client"
import { HowItWorksSection } from "@/components/how-it-works-section-client"
import { HomeSections, HomeBottomSections } from "@/components/home-sections-client"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header initiallyHidden />
      <main id="main">
        <HeroSection />
        <HomeSections />
        <SpineSection />
        <SolutionSection />
        <HowItWorksSection />
        <HomeBottomSections />
      </main>
      <Footer />
    </div>
  )
}
