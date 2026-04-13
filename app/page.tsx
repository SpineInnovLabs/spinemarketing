import { Header } from "@/components/header-client"
import { HeroSection } from "@/components/hero-section"
import { SolutionSection } from "@/components/solution-section-client"
import { SolutionsDoorsSection } from "@/components/solutions-doors-section-client"
import { HowItWorksSection } from "@/components/how-it-works-section-client"
import { HomeSections, HomeBottomSections } from "@/components/home-sections-client"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[rgb(8,7,14)]">
      <Header initiallyHidden />
      <main id="main">
        <HeroSection />
        <HomeSections />
        <SolutionSection />
        <HowItWorksSection />
        <SolutionsDoorsSection />
        <HomeBottomSections />
      </main>
      <Footer />
    </div>
  )
}
