import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PlatformContent } from "./content"

export const metadata: Metadata = {
  title: "How It Works | IntegrateWise",
  description:
    "Connect 70+ apps into a Knowledge Workspace over the Spine. Work in L1, let The Twin propose in L2, and approve what actually happens. See how IntegrateWise works.",
}

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <PlatformContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
