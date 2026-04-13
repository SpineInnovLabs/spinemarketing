import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { IntegrationsContent } from "./content"

export const metadata: Metadata = {
  title: "Integrations | IntegrateWise",
  description:
    "Connect 70+ apps across 13 categories into one Spine. Salesforce, HubSpot, Slack, Jira, Stripe, Zendesk, and more — all feeding a single Knowledge Workspace.",
}

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-[rgb(8,7,14)]">
      <Header />
      <main id="main">
        <IntegrationsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
