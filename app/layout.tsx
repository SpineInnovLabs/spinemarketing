import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { FirebaseAnalytics } from "@/components/firebase-analytics"
import { AppearanceSync } from "@/components/appearance-sync"
import { APPEARANCE_BOOT_SCRIPT } from "@/lib/appearance"
import { absoluteUrl, publicSiteUrl } from "@/lib/site-url"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  metadataBase: new URL(publicSiteUrl),
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/rss.xml" },
  },
  title: "SpineWorkspace — Renewal decisions from the full customer story",
  description:
    "For customer-success and revenue teams: assemble CRM, support, email, document, and finance context into an evidence-backed renewal proposal your team reviews, approves, and executes—with control.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
  },
  openGraph: {
    title: "SpineWorkspace — Renewal decisions from the full customer story",
    description:
      "For customer-success and revenue teams: evidence-backed renewal decision packets, human approval, and execution in your existing systems of record.",
    siteName: "SpineWorkspace",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpineWorkspace — Renewal decisions from the full customer story",
    description:
      "For customer-success and revenue teams: evidence-backed renewal decision packets, human approval, and execution in your existing systems of record.",
    images: ["/og.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: APPEARANCE_BOOT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Spine InnovLabs",
              alternateName: "SpineWorkspace",
              url: publicSiteUrl,
              logo: absoluteUrl("/icon.svg"),
              sameAs: [],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  email: "connect@spineworkspace.com",
                  contactType: "sales",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} overflow-x-clip bg-white text-[#181818] antialiased`} suppressHydrationWarning>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <AppearanceSync />
        {children}
        <FirebaseAnalytics />
      </body>
    </html>
  )
}
