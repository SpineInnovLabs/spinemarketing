import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SaasContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "SaaS | IntegrateWise Solutions",
  description:
    "Renewals, expansion, adoption — connected in one account view.",
  alternates: { canonical: "/solutions/saas" },
  openGraph: {
    title: "SaaS | IntegrateWise Solutions",
    description: "Renewals, expansion, adoption — connected in one account view.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "IntegrateWise" }],
  },
}

export default function SaasPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Solutions", url: "https://integratewise.ai/solutions" },
        { name: "SaaS", url: "https://integratewise.ai/solutions/saas" },
      ]} />
      <Header />
      <main id="main">
        <SaasContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
