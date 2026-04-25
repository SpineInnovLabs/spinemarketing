import { Metadata } from "next"
import { ProductSecurityContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Security — IntegrateWise Product",
  description: "Security controls built into the product — approval gates, audit logs, and governance by design.",
  alternates: { canonical: "/product/security" },
  openGraph: {
    title: "Security — IntegrateWise Product",
    description: "Security controls built into the product — approval gates, audit logs, and governance by design.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "IntegrateWise" }],
  },
}

export default function ProductSecurityPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Product", url: "https://integratewise.ai/product" },
        { name: "Security", url: "https://integratewise.ai/product/security" },
      ]} />
      <ProductSecurityContent />
    </>
  )
}
