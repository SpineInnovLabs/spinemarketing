import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { OperationsContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Operations & Delivery Leaders | SpineWorkspace",
  description:
    "Utilisation, delivery, exceptions, escalations — the live view that keeps projects on track and clients happy.",
  alternates: { canonical: "/solutions/operations" },
  openGraph: {
    title: "Operations & Delivery Leaders | SpineWorkspace",
    description: "Utilisation, delivery, exceptions, escalations — the live view that keeps projects on track and clients happy.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function OperationsPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Solutions", url: "https://integratewise.ai/solutions" },
        { name: "Operations", url: "https://integratewise.ai/solutions/operations" },
      ]} />
      <Header />
      <main id="main">
        <OperationsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
