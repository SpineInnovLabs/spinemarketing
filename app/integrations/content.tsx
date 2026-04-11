"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Marquee } from "@/components/ui/marquee"

const integrations = [
  { name: "Salesforce", src: "/logos/salesforce.svg", category: "CRM", desc: "Sync accounts, contacts, opportunities, and activities." },
  { name: "HubSpot", src: "/logos/hubspot.svg", category: "CRM", desc: "Pull deals, contacts, tickets, and marketing engagement." },
  { name: "Stripe", src: "/logos/stripe.svg", category: "Billing", desc: "Connect subscriptions, invoices, payments, and revenue data." },
  { name: "QuickBooks", src: "/logos/quickbooks.svg", category: "Billing", desc: "Sync invoices, expenses, and financial records." },
  { name: "Zendesk", src: "/logos/zendesk.svg", category: "Support", desc: "Pull tickets, satisfaction scores, and agent interactions." },
  { name: "Intercom", src: "/logos/intercom.svg", category: "Support", desc: "Connect conversations, user data, and product tours." },
  { name: "Slack", src: "/logos/slack.svg", category: "Communication", desc: "Index channels, threads, and DMs for full context." },
  { name: "Gmail", src: "/logos/gmail.svg", category: "Communication", desc: "Connect email threads and calendar events." },
  { name: "Jira", src: "/logos/jira.svg", category: "Project Management", desc: "Sync issues, sprints, and development activity." },
  { name: "Asana", src: "/logos/asana.svg", category: "Project Management", desc: "Pull tasks, projects, and team workloads." },
  { name: "Notion", src: "/logos/notion.svg", category: "Knowledge", desc: "Index pages, databases, and team wikis." },
  { name: "Google Drive", src: "/logos/googledrive.svg", category: "Knowledge", desc: "Connect docs, sheets, and shared drives." },
  { name: "Dropbox", src: "/logos/dropbox.svg", category: "Knowledge", desc: "Index files and shared folders." },
  { name: "Airtable", src: "/logos/airtable.svg", category: "Database", desc: "Sync bases, tables, and custom workflows." },
  { name: "PostgreSQL", src: "/logos/postgres.svg", category: "Database", desc: "Direct database connections for custom data." },
  { name: "GitHub", src: "/logos/github.svg", category: "Development", desc: "Pull repos, issues, PRs, and deployment events." },
  { name: "Shopify", src: "/logos/shopify.svg", category: "E-commerce", desc: "Connect orders, customers, and inventory data." },
  { name: "Twilio", src: "/logos/twilio.svg", category: "Communication", desc: "Sync call logs, SMS, and communication history." },
  { name: "Microsoft 365", src: "/logos/microsoft.svg", category: "Productivity", desc: "Connect Outlook, Teams, OneDrive, and SharePoint." },
  { name: "ChatGPT", src: "/logos/chatgpt.svg", category: "AI", desc: "Bridge AI conversations back into your connected workspace." },
  { name: "Claude", src: "/logos/claude.svg", category: "AI", desc: "Connect Claude conversations to your complete picture." },
  { name: "Zapier", src: "/logos/zapier.svg", category: "Automation", desc: "Bridge 5,000+ apps through Zapier into your workspace." },
  { name: "Grok", src: "/logos/grok.svg", category: "AI", desc: "Integrate Grok insights into your connected workspace." },
]

const categories = [...new Set(integrations.map((i) => i.category))]

export function IntegrationsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
        <div className="mx-auto max-w-[1200px] px-6 pt-[160px] pb-[100px] md:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-[40px] bg-white px-4 py-1.5"
              style={{ boxShadow: "0px 0px 0px 3px rgb(248 248 250)" }}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: "var(--gradient-primary-icon)" }} />
              <span className="text-[14px] font-semibold tracking-[-0.03em] text-[#0a0b10]">Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.4 }}
              className="text-[48px] font-semibold leading-[1em] tracking-[-0.05em] text-white sm:text-[54px] lg:text-[64px]"
            >
              Connect everything.{" "}
              <span className="text-primary">Fragment nothing.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.6 }}
              className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
            >
              20+ pre-built connectors that bring your data together in one place. No migration, no ETL pipelines,
              no data engineering team required.
            </motion.p>
          </div>

          {/* Marquee of logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16"
          >
            <Marquee pauseOnHover className="[--duration:35s] [--gap:1.5rem]">
              {integrations.slice(0, 12).map((item) => (
                <div key={item.name} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                  <Image src={item.src} alt={item.name} width={24} height={24} />
                  <span className="whitespace-nowrap text-[15px] font-semibold tracking-[-0.02em] text-white/70">{item.name}</span>
                </div>
              ))}
            </Marquee>
          </motion.div>
        </div>
      </section>

      {/* Integration Catalog */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              Full integration{" "}
              <span className="text-primary">catalog</span>
            </h2>
            <p className="mt-4 text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
              Every connector brings your data together and keeps it in sync. No data engineering required.
            </p>
          </motion.div>

          {categories.map((category) => (
            <div key={category} className="mt-12">
              <h3 className="mb-4 text-[14px] font-semibold uppercase tracking-[0.05em] text-muted-foreground">{category}</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {integrations
                  .filter((i) => i.category === category)
                  .map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: idx * 0.05 }}
                      className="arvio-card flex items-start gap-4 p-6"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-muted">
                        <Image src={item.src} alt={item.name} width={24} height={24} />
                      </div>
                      <div>
                        <h4 className="text-[15px] font-semibold tracking-[-0.03em]">{item.name}</h4>
                        <p className="mt-1 text-[14px] font-medium leading-[1.5] text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}

          {/* Custom connector CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="arvio-card mx-auto max-w-2xl p-8">
              <h3 className="text-[18px] font-semibold tracking-[-0.03em]">Don&apos;t see your tool?</h3>
              <p className="mt-2 text-[15px] font-medium leading-[1.5] text-muted-foreground">
                We support custom API connectors, webhooks, and database connections. If it has an API, we can connect it.
              </p>
              <Button
                className="mt-6 h-[42px] rounded-xl px-4 text-[15px] font-semibold tracking-[-0.3px]"
                style={{ background: "var(--gradient-primary)", border: "2px solid rgba(248,248,250,0.12)", boxShadow: "var(--shadow-button)" }}
                asChild
              >
                <Link href="/contact">Request a connector</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
