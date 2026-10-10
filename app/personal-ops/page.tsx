import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PersonalOpsContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

const title = "Personal Ops — Your Morning, Auto-Organized | Spine InnovTech"
const description =
  "Replace 45 minutes of app-hopping with a single morning brief. A calm workspace above all your apps — connect, surface insights, approve what happens."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/personal-ops" },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/personal-ops"),
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
}

export default function PersonalOpsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Personal Ops", url: absoluteUrl("/personal-ops") },
      ]} />
      <Header />
      <main id="main">
        <PersonalOpsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
