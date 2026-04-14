import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { ManufacturingContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Manufacturing & Trade | IntegrateWise Solutions",
  description:
    "Orders, shipments, payments — live across ERP, CRM, and logistics.",
  alternates: { canonical: "/solutions/manufacturing" },
  openGraph: {
    title: "Manufacturing & Trade | IntegrateWise Solutions",
    description: "Orders, shipments, payments — live across ERP, CRM, and logistics.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "IntegrateWise" }],
  },
}

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Solutions", url: "https://integratewise.ai/solutions" },
        { name: "Manufacturing", url: "https://integratewise.ai/solutions/manufacturing" },
      ]} />
      <Header />
      <main id="main">
        <ManufacturingContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
