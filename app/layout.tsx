import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { FirebaseAnalytics } from "@/components/firebase-analytics"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  metadataBase: new URL("https://integratewise.ai"),
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/rss.xml" },
  },
  title: "IntegrateWise — Stop being the human API between your apps.",
  description:
    "IntegrateWise connects your apps into a Knowledge Workspace over the Spine. Truth, Context, and Session Summaries in one place — the Twin proposes, you approve, nothing happens without you.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "IntegrateWise — Stop being the human API between your apps.",
    description:
      "IntegrateWise connects your apps into a Knowledge Workspace over the Spine. Truth, Context, and Session Summaries in one place — the Twin proposes, you approve, nothing happens without you.",
    siteName: "IntegrateWise",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "IntegrateWise" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IntegrateWise — Stop being the human API between your apps.",
    description:
      "IntegrateWise connects your apps into a Knowledge Workspace over the Spine. Truth, Context, and Session Summaries in one place — the Twin proposes, you approve, nothing happens without you.",
    images: ["/og.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "IntegrateWise",
              url: "https://integratewise.ai",
              logo: "https://integratewise.ai/icon.svg",
              sameAs: [],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  email: "connect@integratewise.ai",
                  contactType: "sales",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
        <FirebaseAnalytics />
      </body>
    </html>
  )
}
