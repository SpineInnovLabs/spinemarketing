"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"

const catalog: { category: string; connectors: string[] }[] = [
  { category: "CRM", connectors: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM", "Freshsales", "Close"] },
  { category: "Support", connectors: ["Zendesk", "Freshdesk", "Intercom", "Front", "Help Scout", "Kustomer", "Freshworks CRM", "WhatsApp Business", "Twilio"] },
  { category: "Billing", connectors: ["Stripe", "Chargebee", "Paddle", "QuickBooks", "Xero", "FreshBooks"] },
  { category: "Marketing", connectors: ["HubSpot Marketing", "Mailchimp", "Marketo", "Braze", "Segment", "SendGrid", "Customer.io", "ActiveCampaign"] },
  { category: "Analytics", connectors: ["Google Analytics", "Mixpanel", "Amplitude", "Heap", "Tableau", "Metabase"] },
  { category: "Communication", connectors: ["Gmail", "Outlook", "Slack", "Microsoft Teams", "Discord", "Zoom", "Google Calendar"] },
  { category: "Productivity", connectors: ["Notion", "Google Drive", "Dropbox", "OneDrive", "Airtable", "Calendly", "Confluence"] },
  { category: "Project Management", connectors: ["Jira", "Asana", "Linear", "Monday.com", "ClickUp", "Trello"] },
  { category: "Engineering", connectors: ["GitHub", "GitLab", "Bitbucket"] },
  { category: "Commerce", connectors: ["Shopify", "WooCommerce", "BigCommerce"] },
  { category: "AI", connectors: ["OpenAI", "MCP", "AI Chat"] },
  { category: "HR", connectors: ["BambooHR"] },
]

const totalConnectors = catalog.reduce((sum, c) => sum + c.connectors.length, 0)

const marqueeLogos = [
  { name: "Salesforce", src: "/logos/salesforce.svg" },
  { name: "HubSpot", src: "/logos/hubspot.svg" },
  { name: "Stripe", src: "/logos/stripe.svg" },
  { name: "Slack", src: "/logos/slack.svg" },
  { name: "Jira", src: "/logos/jira.svg" },
  { name: "Zendesk", src: "/logos/zendesk.svg" },
  { name: "Gmail", src: "/logos/gmail.svg" },
  { name: "Notion", src: "/logos/notion.svg" },
  { name: "Shopify", src: "/logos/shopify.svg" },
  { name: "GitHub", src: "/logos/github.svg" },
  { name: "Asana", src: "/logos/asana.svg" },
  { name: "Intercom", src: "/logos/intercom.svg" },
]

export function IntegrationsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
        <div className="mx-auto max-w-[1200px] px-6 pt-[160px] pb-[100px] md:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.2 }} className="mb-6 inline-flex items-center gap-2.5 rounded-[40px] bg-white px-4 py-1.5" style={{ boxShadow: "0px 0px 0px 3px rgb(248 248 250)" }}>
              <span className="h-2 w-2 rounded-full" style={{ background: "var(--gradient-primary-icon)" }} />
              <span className="text-[14px] font-semibold tracking-[-0.03em] text-[#0a0b10]">Integrations</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.4 }} className="text-[48px] font-semibold leading-[1em] tracking-[-0.05em] text-white sm:text-[54px] lg:text-[64px]">
              70+ integrations.{" "}<span className="text-primary">13 categories.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.6 }} className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55">
              Connect via OAuth in minutes. No data migration. No engineering team. Your tools keep working as they do today.
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="mt-16">
            <Marquee pauseOnHover className="[--duration:35s] [--gap:1.5rem]">
              {marqueeLogos.map((item) => (
                <div key={item.name} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                  <Image src={item.src} alt={item.name} width={24} height={24} />
                  <span className="whitespace-nowrap text-[15px] font-semibold tracking-[-0.02em] text-white/70">{item.name}</span>
                </div>
              ))}
            </Marquee>
          </motion.div>
        </div>
      </section>

      {/* Catalog */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">Full{" "}<span className="text-primary">catalog</span></h2>
            <p className="mt-4 text-[15px] font-medium text-muted-foreground">{totalConnectors} connectors across {catalog.length} categories. If it has an API, we can connect it.</p>
          </motion.div>

          <div className="mt-12 space-y-8">
            {catalog.map(({ category, connectors }) => (
              <motion.div key={category} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.1em] text-primary">{category}</h3>
                  <span className="text-[12px] font-semibold text-muted-foreground">{connectors.length}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {connectors.map((name) => (
                    <span key={name} className="rounded-lg border border-border/50 bg-white px-3 py-1.5 text-[13px] font-semibold tracking-[-0.02em] text-foreground/70 shadow-sm">
                      {name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* India/UAE planned */}
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} className="mt-12 rounded-xl border border-border/50 bg-muted/50 p-6">
            <h3 className="text-[14px] font-bold uppercase tracking-[0.1em] text-primary">India & UAE connectors — coming soon</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Tally", "Razorpay", "PhonePe", "Vyapar", "Khatabook", "Shiprocket", "Zoho Books", "PayTabs", "Network International", "Noon Seller", "Aramex"].map((name) => (
                <span key={name} className="rounded-lg border border-border/30 bg-white/50 px-3 py-1.5 text-[13px] font-medium text-muted-foreground">
                  {name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Custom CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} className="mt-12 text-center">
            <div className="arvio-card mx-auto max-w-2xl p-8">
              <h3 className="text-[18px] font-semibold tracking-[-0.03em]">Don&apos;t see your tool?</h3>
              <p className="mt-2 text-[15px] font-medium leading-[1.5] text-muted-foreground">
                Custom API connectors, webhooks, and database connections. If it has an API, we can connect it.
              </p>
              <Button className="mt-6 h-[42px] rounded-xl px-4 text-[15px] font-semibold" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-button)" }} asChild>
                <Link href="/contact">Request a connector</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
