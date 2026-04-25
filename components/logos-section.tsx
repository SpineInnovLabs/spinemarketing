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
    <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-[#1d1d1d] px-5 py-3 transition-all duration-300 hover:border-white/15 hover:bg-[#222222]">
      <Image src={src} alt={name} width={22} height={22} className="opacity-55 grayscale transition-opacity group-hover:opacity-85" />
      <span className="whitespace-nowrap text-[14px] font-medium tracking-[-0.02em] text-white/45 transition-colors group-hover:text-white/70">
        {name}
      </span>
    </div>
  )
}

export function LogosSection() {
  return (
    <section id="connectors-section" className="relative overflow-hidden border-t border-white/[0.05] py-16 md:py-20" style={{ background: "#111111" }}>
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-16">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/2 top-[-4rem] hidden h-16 origin-top border-l border-dashed border-white/10 md:block"
        />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 20, stiffness: 60 }}
          className="mx-auto max-w-3xl text-center text-[15px] font-medium leading-[1.7] tracking-[-0.02em] text-white/45"
        >
          Connect the apps you already use &mdash; Salesforce, HubSpot, Stripe, Jira, Notion, Slack, Zendesk, Gmail, Shopify, QuickBooks, Intercom, GitHub, Airtable, Asana, Google Drive, and more.
        </motion.p>
      </div>
      <div className="relative mt-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-[#111111] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l from-[#111111] to-transparent" />
        <Marquee pauseOnHover className="[--duration:45s] [--gap:1rem]">
          {logos.map((logo) => (
            <LogoCard key={logo.name} name={logo.name} src={logo.src} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}
