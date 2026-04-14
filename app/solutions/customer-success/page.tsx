import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { CustomerSuccessRoleContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Customer Success & Account Managers | IntegrateWise",
  description:
    "Save at-risk accounts. Accelerate renewals. Surface expansion signals.",
  alternates: { canonical: "/solutions/customer-success" },
  openGraph: {
    title: "Customer Success & Account Managers | IntegrateWise",
    description: "Save at-risk accounts. Accelerate renewals. Surface expansion signals.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "IntegrateWise" }],
  },
}

export default function CustomerSuccessRolePage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Solutions", url: "https://integratewise.ai/solutions" },
        { name: "Customer Success", url: "https://integratewise.ai/solutions/customer-success" },
      ]} />
      <Header />
      <main id="main">
        <CustomerSuccessRoleContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
