"use client"

import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"

const logos = [
  { name: "Salesforce", src: "/logos/salesforce.svg" },
  { name: "HubSpot", src: "/logos/hubspot.svg" },
  { name: "Stripe", src: "/logos/stripe.svg" },
  { name: "Jira", src: "/logos/jira.svg" },
  { name: "Notion", src: "/logos/notion.svg" },
  { name: "Slack", src: "/logos/slack.svg" },
  { name: "Zendesk", src: "/logos/zendesk.svg" },
  { name: "Gmail", src: "/logos/gmail.svg" },
  { name: "Shopify", src: "/logos/shopify.svg" },
  { name: "QuickBooks", src: "/logos/quickbooks.svg" },
  { name: "Intercom", src: "/logos/intercom.svg" },
  { name: "GitHub", src: "/logos/github.svg" },
  { name: "Airtable", src: "/logos/airtable.svg" },
  { name: "Asana", src: "/logos/asana.svg" },
  { name: "Google Drive", src: "/logos/googledrive.svg" },
]

function LogoCard({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-white px-5 py-3 shadow-sm">
      <Image src={src} alt={name} width={24} height={24} />
      <span className="whitespace-nowrap text-[15px] font-semibold tracking-[-0.02em] text-foreground/70">
        {name}
      </span>
    </div>
  )
}

export function LogosSection() {
  return (
    <section className="py-16 md:pt-16 md:pb-8">
      <div className="mx-auto max-w-[1200px] px-6 md:px-16">
        <p className="text-center text-[18px] font-semibold tracking-[-0.03em] leading-[1.3] text-foreground">
          Connect the apps you already use
        </p>
        <p className="mt-3 text-center text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
          All your key apps plug into the Spine and show up in one Knowledge Workspace — no migration, no engineering team needed.
        </p>
      </div>
      {/* Magic UI Marquee with fade edges */}
      <div className="relative mt-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <Marquee pauseOnHover className="[--duration:45s] [--gap:1rem]">
          {logos.map((logo) => (
            <LogoCard key={logo.name} name={logo.name} src={logo.src} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}
