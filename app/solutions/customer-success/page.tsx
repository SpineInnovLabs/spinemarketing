import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CustomerSuccessRoleContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Customer Success & Account Managers | Spine InnovTech",
  description:
    "Save at-risk accounts. Accelerate renewals. Surface expansion signals.",
  alternates: { canonical: "/solutions/customer-success" },
  openGraph: {
    title: "Customer Success & Account Managers | Spine InnovTech",
    description: "Save at-risk accounts. Accelerate renewals. Surface expansion signals.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine Workspace" }],
  },
}

export default function CustomerSuccessRolePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Solutions", url: absoluteUrl("/solutions") },
        { name: "Customer Success", url: absoluteUrl("/solutions/customer-success") },
      ]} />
      <Header />
      <main id="main">
        <CustomerSuccessRoleContent />
      </main>
      <Footer />
    </div>
  )
}
