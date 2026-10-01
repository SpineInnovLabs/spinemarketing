import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SaasContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "SaaS | SpineWorkspace Solutions",
  description:
    "Renewals, expansion, adoption — connected in one account view.",
  alternates: { canonical: "/solutions/saas" },
  openGraph: {
    title: "SaaS | SpineWorkspace Solutions",
    description: "Renewals, expansion, adoption — connected in one account view.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function SaasPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://spineworkspace.com" },
        { name: "Solutions", url: "https://spineworkspace.com/solutions" },
        { name: "SaaS", url: "https://spineworkspace.com/solutions/saas" },
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
