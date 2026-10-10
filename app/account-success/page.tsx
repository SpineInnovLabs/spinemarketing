import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { AccountSuccessContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

const title = "Account Success — One Customer, One Record | Spine InnovTech"
const description =
  "Detect churn signals across 4+ tools before it's too late. Cross-tool entity matching, confidence scoring, and human-approved merges. One customer. One record."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/account-success" },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/account-success"),
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
}

export default function AccountSuccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Account Success", url: absoluteUrl("/account-success") },
      ]} />
      <Header />
      <main id="main">
        <AccountSuccessContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
