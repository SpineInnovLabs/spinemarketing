"use client"

import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"
import { motion } from "framer-motion"

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
    <div className="group flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-5 py-3 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.04]">
      <Image src={src} alt={name} width={22} height={22} className="opacity-50 transition-opacity group-hover:opacity-80" />
      <span className="whitespace-nowrap text-[14px] font-medium tracking-[-0.02em] text-white/30 transition-colors group-hover:text-white/60">
        {name}
      </span>
    </div>
  )
}

export function LogosSection() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden" style={{ background: "#05070A" }}>
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 20, stiffness: 60 }}
          className="text-center text-[15px] font-medium tracking-[-0.02em] text-white/25"
        >
          Connect the apps you already use
        </motion.p>
      </div>
      <div className="relative mt-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-[#05070A] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l from-[#05070A] to-transparent" />
        <Marquee pauseOnHover className="[--duration:45s] [--gap:1rem]">
          {logos.map((logo) => (
            <LogoCard key={logo.name} name={logo.name} src={logo.src} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}
