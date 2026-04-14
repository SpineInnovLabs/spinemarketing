import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { ProductConnectorsContent } from "./content"

export const metadata: Metadata = {
  title: "Connectors | IntegrateWise Product",
  description:
    "70+ pre-built connectors. MCP support. Auto-upgrade. Contextual firewalling.",
}

export default function ProductConnectorsPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <ProductConnectorsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
