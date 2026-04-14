import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PlatformContent } from "./content"
import { PlatformFAQ } from "./faq"

export const metadata: Metadata = {
  title: "Platform | IntegrateWise",
  description:
    "The Adaptive Spine. Connects every app. Governs every AI action. Nothing happens without your approval.",
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
