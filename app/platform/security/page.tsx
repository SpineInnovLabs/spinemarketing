import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { PlatformSecurityContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Security — SpineWorkspace Platform",
  description: "Enterprise-grade security architecture for the SpineWorkspace — encryption, access control, and audit trails.",
  alternates: { canonical: "/platform/security" },
  openGraph: {
    title: "Security — SpineWorkspace Platform",
    description: "Enterprise-grade security architecture for the SpineWorkspace — encryption, access control, and audit trails.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function PlatformSecurityPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Platform", url: absoluteUrl("/platform") },
        { name: "Security", url: absoluteUrl("/platform/security") },
      ]} />
      <PlatformSecurityContent />
    </>
  )
}
