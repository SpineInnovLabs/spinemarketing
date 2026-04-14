import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CampaignGalleryContent } from "./content"

export const metadata: Metadata = {
  title: "Campaign Gallery — LinkedIn & WhatsApp Creatives | IntegrateWise",
  description:
    "Browse 36 campaign designs across LinkedIn ads, posts, banners, carousels, and WhatsApp creatives — crafted for Account Success, Business Ops, and Personal Ops professionals.",
  alternates: { canonical: "/resources/campaign" },
  openGraph: {
    title: "Campaign Gallery — LinkedIn & WhatsApp Creatives | IntegrateWise",
    description:
      "36 campaign designs across LinkedIn and WhatsApp for Account Success, Business Ops, and Personal Ops.",
    images: [
      { url: "/images/campaign/Banner-Tagline.jpg", width: 1584, height: 396, alt: "IntegrateWise Campaign Gallery" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaign Gallery | IntegrateWise",
    description: "36 campaign designs across LinkedIn and WhatsApp.",
    images: ["/images/campaign/Banner-Tagline.jpg"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "IntegrateWise Campaign Gallery",
  description:
    "36 campaign designs across LinkedIn and WhatsApp — crafted for Account Success, Business Ops, and Personal Ops professionals.",
  url: "https://integratewise.ai/resources/campaign",
  publisher: {
    "@type": "Organization",
    name: "IntegrateWise",
    url: "https://integratewise.ai",
  },
  mainEntity: {
    "@type": "ImageGallery",
    name: "IntegrateWise Marketing Campaign Designs",
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
