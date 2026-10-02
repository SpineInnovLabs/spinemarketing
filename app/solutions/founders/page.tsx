import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SolutionWorkspaceFooter } from "@/components/marketing/solution-workspace-footer"
import { FoundersContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Founders & CXOs | SpineWorkspace",
  description:
    "Monday brief. Revenue movement. Board pack — available in seconds.",
  alternates: { canonical: "/solutions/founders" },
  openGraph: {
    title: "Founders & CXOs | SpineWorkspace",
    description: "Monday brief. Revenue movement. Board pack — available in seconds.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://spineinnovlabs.com" },
        { name: "Solutions", url: "https://spineinnovlabs.com/solutions" },
        { name: "Founders & CXOs", url: "https://spineinnovlabs.com/solutions/founders" },
      ]} />
      <Header />
      <main id="main">
        <FoundersContent />
        <SolutionWorkspaceFooter slug="founders" />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
