import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PersonalOpsContent } from "./content"

export const metadata: Metadata = {
  title: "Personal Ops — Your Morning, Auto-Organized | IntegrateWise",
  description:
    "Replace 45 minutes of app-hopping with a single morning brief. A calm workspace above all your apps — connect, surface insights, approve what happens.",
  alternates: { canonical: "/personal-ops" },
  openGraph: {
    title: "Personal Ops — Your Morning, Auto-Organized | IntegrateWise",
    description: "Replace 45 minutes of app-hopping with a single morning brief. A calm workspace above all your apps.",
    images: [{ url: "/images/campaign/Banner-PersonalOps-A.jpg", width: 1584, height: 396, alt: "IntegrateWise Personal Ops" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Ops — Your Morning, Auto-Organized | IntegrateWise",
    description: "Replace 45 minutes of app-hopping with a single morning brief.",
    images: ["/images/campaign/Banner-PersonalOps-A.jpg"],
  },
}

export default function PersonalOpsPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <PersonalOpsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
