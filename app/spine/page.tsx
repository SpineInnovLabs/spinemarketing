import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SpineContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

const title = "Spine & Intelligence | Spine InnovTech"
const description =
  "Spine Fabric keeps shared business context under Spine Workspace. Source systems stay authoritative. People and AI work from that context, and consequential action stays governed."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/spine" },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/spine"),
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
}

export default function SpinePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Spine & Intelligence", url: absoluteUrl("/spine") },
      ]} />
      <Header />
      <main id="main">
        <SpineContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
