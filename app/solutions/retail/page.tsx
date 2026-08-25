import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { RetailContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Retail & Ecommerce | SpineWorkspace Solutions",
  description:
    "Stock, orders, returns, support — every signal connected so teams act before problems become complaints.",
  alternates: { canonical: "/solutions/retail" },
  openGraph: {
    title: "Retail & Ecommerce | SpineWorkspace Solutions",
    description: "Stock, orders, returns, support — every signal connected so teams act before problems become complaints.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function RetailPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Solutions", url: "https://integratewise.ai/solutions" },
        { name: "Retail", url: "https://integratewise.ai/solutions/retail" },
      ]} />
      <Header />
      <main id="main">
        <RetailContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
