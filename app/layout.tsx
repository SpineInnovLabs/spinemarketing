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
  title: "SpineWorkspace — Stop being the human API between your apps.",
  description:
    "One workspace. Every customer. Every tool. AI proposes, you approve. Built by IntegrateWise.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
  },
  openGraph: {
    title: "SpineWorkspace — Stop being the human API between your apps.",
    description:
      "One workspace. Every customer. Every tool. AI proposes, you approve. Built by IntegrateWise.",
    siteName: "SpineWorkspace",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpineWorkspace — Stop being the human API between your apps.",
    description:
      "One workspace. Every customer. Every tool. AI proposes, you approve. Built by IntegrateWise.",
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
              name: "SpineWorkspace",
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
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
        <FirebaseAnalytics />
      </body>
    </html>
  )
}
