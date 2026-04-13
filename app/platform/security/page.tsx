import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PlatformSecurityContent } from "./content"

export const metadata: Metadata = {
  title: "Security | IntegrateWise Platform",
  description:
    "The Truth Boundary — hard-coded architectural constraint. Mandatory human-in-the-loop, immutable audit trail, field-level encryption, SOC 2 Type II alignment.",
}

export default function PlatformSecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <PlatformSecurityContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
