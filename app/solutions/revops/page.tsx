import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { RevOpsContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "RevOps & Business Operations | SpineWorkspace",
  description:
    "Pipelines, headcount, projects, exceptions — connected and actionable.",
  alternates: { canonical: "/solutions/revops" },
  openGraph: {
    title: "RevOps & Business Operations | SpineWorkspace",
    description: "Pipelines, headcount, projects, exceptions — connected and actionable.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function RevOpsPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Solutions", url: "https://integratewise.ai/solutions" },
        { name: "RevOps", url: "https://integratewise.ai/solutions/revops" },
      ]} />
      <Header />
      <main id="main">
        <RevOpsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
