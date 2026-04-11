import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { IntegrationsContent } from "./content"

export const metadata: Metadata = {
  title: "Integrations | IntegrateWise",
  description:
    "Connect 70+ tools across 13 categories including Salesforce, HubSpot, Slack, Jira, Stripe, Zendesk, and more. See the full integration catalog.",
}

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <IntegrationsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
