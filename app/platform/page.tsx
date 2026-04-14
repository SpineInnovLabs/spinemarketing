import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PlatformContent } from "./content"
import { PlatformFAQ } from "./faq"

export const metadata: Metadata = {
  title: "Platform | IntegrateWise",
  description:
    "The Adaptive Spine Architecture — a vendor-neutral intelligence layer that normalizes truth across your systems, governs every AI action through non-bypassable human approval, and writes nothing back without explicit consent.",
}

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <PlatformContent />
        <PlatformFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
