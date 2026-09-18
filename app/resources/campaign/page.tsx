import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CampaignGalleryContent } from "./content"

export const metadata: Metadata = {
  title: "Campaign Gallery — Architecture & Creatives | SpineWorkspace",
  description:
    "Architecture blueprints showing the Spine Fabric at the center of every tool, plus 36 campaign designs across LinkedIn and WhatsApp — for Account Success, Business Ops, and Personal Ops.",
  alternates: { canonical: "/resources/campaign" },
  openGraph: {
    title: "Campaign Gallery — Architecture & Creatives | SpineWorkspace",
    description:
      "The Spine Fabric connects every tool into one source of truth. Architecture blueprints and 36 campaign designs.",
    images: [
      { url: "/images/architecture/spine-architecture.png", width: 1200, height: 1200, alt: "SpineWorkspace — The Spine Fabric Architecture" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaign Gallery — Architecture & Creatives | SpineWorkspace",
    description: "The Spine Fabric connects every tool into one source of truth.",
    images: ["/images/architecture/spine-architecture.png"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "SpineWorkspace Campaign Gallery",
  description:
    "36 campaign designs across LinkedIn and WhatsApp — crafted for Account Success, Business Ops, and Personal Ops professionals.",
  url: "https://integratewise.ai/resources/campaign",
  publisher: {
    "@type": "Organization",
    name: "SpineWorkspace",
    url: "https://integratewise.ai",
  },
  mainEntity: {
    "@type": "ImageGallery",
    name: "SpineWorkspace Marketing Campaign Designs",
    numberOfItems: 36,
    about: [
      { "@type": "Thing", name: "Account Success" },
      { "@type": "Thing", name: "Business Operations" },
      { "@type": "Thing", name: "Personal Operations" },
    ],
  },
}

export default function CampaignGalleryPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main">
        <CampaignGalleryContent />
      </main>
      <Footer />
    </div>
  )
}
