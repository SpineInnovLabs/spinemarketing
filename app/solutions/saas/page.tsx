import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SaasContent } from "./content"

export const metadata: Metadata = {
  title: "SaaS | IntegrateWise Solutions",
  description:
    "Renewals, expansion, product adoption — connected across CRM, support, and product usage in one account view built over the Spine.",
}

export default function SaasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <SaasContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
