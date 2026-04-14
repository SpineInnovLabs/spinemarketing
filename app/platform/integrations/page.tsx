import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PlatformIntegrationsContent } from "./content"

export const metadata: Metadata = {
  title: "Integrations | IntegrateWise Platform",
  description:
    "SaaS APIs, MCP, webhooks, and file drops — all through one normalization pipeline into the Spine.",
}

export default function PlatformIntegrationsPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <PlatformIntegrationsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
