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
    <div className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-5 py-3 backdrop-blur-sm transition-all duration-300 hover:border-primary/25 hover:bg-white/[0.06] hover:shadow-[0_0_20px_rgba(52,211,153,0.06)]">
      <Image src={src} alt={name} width={24} height={24} className="opacity-70 transition-opacity group-hover:opacity-100" />
      <span className="whitespace-nowrap text-[15px] font-semibold tracking-[-0.02em] text-white/40 transition-colors group-hover:text-white/70">
        {name}
      </span>
    </div>
  )
}

export function LogosSection() {
  return (
    <section className="relative py-24 md:py-28 bg-dark-section overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[120px]" style={{ background: "radial-gradient(circle, rgba(52,211,153,0.20), transparent 70%)" }} />
      </div>
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="text-center text-[18px] font-semibold tracking-[-0.03em] leading-[1.3] text-white"
        >
          Connect the apps you already use
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.08 }}
          className="mt-3 text-center text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-white/40"
        >
          All your key apps plug into the Spine and show up in one Knowledge Workspace — no migration, no engineering team needed.
        </motion.p>
      </div>
      <div className="relative mt-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[rgb(8,7,14)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[rgb(8,7,14)] to-transparent" />
        <Marquee pauseOnHover className="[--duration:45s] [--gap:1rem]">
          {logos.map((logo) => (
            <LogoCard key={logo.name} name={logo.name} src={logo.src} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}
