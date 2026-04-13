import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PlatformConnectorsContent } from "./content"

export const metadata: Metadata = {
  title: "Connectors | IntegrateWise Platform",
  description:
    "The universal integration layer — SaaS tools, AI services, MCP protocol, and webhooks. Every input is a connector feeding the Spine.",
}

export default function PlatformConnectorsPage() {
  return (
    <div className="min-h-screen bg-[rgb(8,7,14)]">
      <Header />
      <main id="main">
        <PlatformConnectorsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
