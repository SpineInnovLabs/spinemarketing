import { Metadata } from "next"
import { ProductSecurityContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Security — SpineWorkspace Product",
  description: "Security controls built into the product — approval gates, audit logs, and governance by design.",
  alternates: { canonical: "/product/security" },
  openGraph: {
    title: "Security — SpineWorkspace Product",
    description: "Security controls built into the product — approval gates, audit logs, and governance by design.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function ProductSecurityPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://spineinnovlabs.com" },
        { name: "Product", url: "https://spineinnovlabs.com/product" },
        { name: "Security", url: "https://spineinnovlabs.com/product/security" },
      ]} />
      <ProductSecurityContent />
    </>
  )
}
