import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { AboutContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Our Origins | Spine InnovLabs",
  description:
    "Why Spine InnovLabs builds Spine Workspace, the business-context workspace.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Our Origins | Spine InnovLabs",
    description: "Why Spine InnovLabs builds Spine Workspace, the business-context workspace.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine InnovLabs" }],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "About", url: absoluteUrl("/about") },
      ]} />
      <Header />
      <main id="main">
        <AboutContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
