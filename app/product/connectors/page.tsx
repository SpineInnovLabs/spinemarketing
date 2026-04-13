import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { ProductConnectorsContent } from "./content"

export const metadata: Metadata = {
  title: "Connectors | IntegrateWise Product",
  description:
    "The user-facing integration management layer — 70+ pre-built connectors, MCP protocol support, auto-upgrade status, and contextual firewalling controls.",
}

export default function ProductConnectorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <ProductConnectorsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
