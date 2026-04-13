import { Header } from "@/components/header-client"
import { HeroSection } from "@/components/hero-section"
import { SolutionSection } from "@/components/solution-section-client"
import { SolutionsDoorsSection } from "@/components/solutions-doors-section-client"
import { HowItWorksSection } from "@/components/how-it-works-section-client"
import { HomeSections } from "@/components/home-sections-client"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header initiallyHidden />
      <main id="main">
        <HeroSection />
        <HomeSections />
        <SolutionSection />
        <SolutionsDoorsSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  )
}
