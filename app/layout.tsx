import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { FirebaseAnalytics } from "@/components/firebase-analytics"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  metadataBase: new URL("https://spineworkspace.com"),
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/rss.xml" },
  },
  title: "SpineWorkspace — Bring people, AI, and business context into the same workspace",
  description:
    "SpineWorkspace gives humans and AI the same governed understanding of goals, KPIs, work, memory, evidence, and continuity. Built by Spine InnovLabs.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
  },
  openGraph: {
    title: "SpineWorkspace — Bring people, AI, and business context into the same workspace",
    description:
      "SpineWorkspace gives humans and AI the same governed understanding of goals, KPIs, work, memory, evidence, and continuity. Built by Spine InnovLabs.",
    siteName: "SpineWorkspace",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpineWorkspace — Bring people, AI, and business context into the same workspace",
    description:
      "SpineWorkspace gives humans and AI the same governed understanding of goals, KPIs, work, memory, evidence, and continuity. Built by Spine InnovLabs.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Spine InnovLabs",
              alternateName: "SpineWorkspace",
              url: "https://spineworkspace.com",
              logo: "https://spineworkspace.com/icon.svg",
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
      <body className={`${inter.className} bg-white text-[#181818] antialiased`} suppressHydrationWarning>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
        <FirebaseAnalytics />
      </body>
    </html>
  )
}
