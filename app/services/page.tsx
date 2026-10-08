import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { ServicesContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Capabilities & Services | Spine InnovLabs",
  description:
    "Integration architecture, business-context design and governed AI workflow capabilities.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Capabilities & Services | Spine InnovLabs",
    description: "Integration architecture, business-context design and governed AI workflow capabilities.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine InnovLabs" }],
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Services", url: absoluteUrl("/services") },
      ]} />
      <Header />
      <main id="main">
        <ServicesContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
