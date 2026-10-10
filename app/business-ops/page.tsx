import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { BusinessOpsContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

const title = "Business Ops — 12 Tabs → One Workspace | Spine InnovTech"
const description =
  "Stop toggling between 12 tabs to find context. Cross-system visibility with AI that handles the busywork — with your approval. Zero context lost."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/business-ops" },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/business-ops"),
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
}

export default function BusinessOpsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Business Ops", url: absoluteUrl("/business-ops") },
      ]} />
      <Header />
      <main id="main">
        <BusinessOpsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
