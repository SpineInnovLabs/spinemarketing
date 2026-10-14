import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { FirebaseAnalytics } from "@/components/firebase-analytics"
import { absoluteUrl, publicSiteUrl } from "@/lib/site-url"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  metadataBase: new URL(publicSiteUrl),
  alternates: {
    types: { "application/rss+xml": "/rss.xml" },
  },
  title: {
    default: "Spine Workspace | One Business Context, Every Domain, Ready for Work",
    template: "%s",
  },
  description:
    "Spine Workspace brings governed business context to 13 domain workspaces with ready-built views for humans and AI. Source systems remain authoritative.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Spine InnovTech | Intelligence for Connected Business",
    description:
      "Technology and AI innovation for shared business context, governed action, and connected work. Meet the company behind SpineWorkspace.",
    siteName: "Spine InnovTech",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine InnovTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spine InnovTech | Intelligence for Connected Business",
    description:
      "Technology and AI innovation for shared business context, governed action, and connected work.",
    images: ["/og.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" data-theme="light" data-appearance="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Spine InnovTech",
              legalName: "Spine InnovTech Private Limited",
              description: "Technology and AI innovation company behind SpineWorkspace",
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
        {children}
        <FirebaseAnalytics />
      </body>
    </html>
  )
}
