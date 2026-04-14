import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SolutionsContent } from "./content"

export const metadata: Metadata = {
  title: "Solutions | IntegrateWise",
  description:
    "One Spine. One workspace. L1 for daily work, L2 for AI intelligence. Built for every function, industry, and role.",
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <SolutionsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
