"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LeadForm, type LeadIntent } from "@/components/lead-form"
import { Mail, MapPin, MessageSquare } from "lucide-react"

export function ContactContent({ defaultIntent = "contact" }: { defaultIntent?: LeadIntent }) {
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
              <span className="text-[14px] font-semibold tracking-[-0.03em] text-[#0a0b10]">Company</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.4 }}
              className="text-[48px] font-semibold leading-[1em] tracking-[-0.05em] text-white sm:text-[54px] lg:text-[64px]"
            >
              Let&apos;s{" "}
              <span className="text-primary">talk.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.6 }}
              className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
            >
              Whether you want a demo, have questions about the platform, or need a custom connector — we&apos;d love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
            {[
              {
                icon: MessageSquare,
                title: "Book a demo",
                desc: "See IntegrateWise in action with a live walkthrough tailored to your use case.",
                cta: "Book a demo",
                href: "/contact?intent=demo",
                external: false,
              },
              {
                icon: Mail,
                title: "Email us",
                desc: "General questions, partnership inquiries, or anything else — we respond within 24 hours.",
                cta: "Use the form",
                href: "#contact-form",
                external: false,
              },
              {
                icon: MapPin,
                title: "Visit us",
                desc: "Based in India, serving teams globally. Available for in-person meetings by appointment.",
                cta: "Get directions",
                href: "mailto:connect@integratewise.ai?subject=Meeting%20Request",
                external: true,
              },
            ].map(({ icon: Icon, title, desc, cta, href, external }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.1 }}
                className="arvio-card flex flex-col items-center p-8 text-center"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.03em]">{title}</h3>
                <p className="mt-3 flex-1 text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">{desc}</p>
                <Button
                  className="mt-6 h-[42px] rounded-xl px-4 text-[15px] font-semibold tracking-[-0.3px]"
                  style={{ background: "var(--gradient-primary)", border: "2px solid rgba(248,248,250,0.12)", boxShadow: "var(--shadow-button)" }}
                  asChild
                >
                  {external ? (
                    <a href={href}>{cta}</a>
                  ) : href.startsWith("#") ? (
                    <a href={href}>{cta}</a>
                  ) : (
                    <Link href={href}>{cta}</Link>
                  )}
                </Button>
              </motion.div>
            ))}
          </div>

          <div id="contact-form" className="mx-auto mt-16 max-w-lg scroll-mt-28">
            <LeadForm defaultIntent={defaultIntent} />
          </div>
        </div>
      </section>

      {/* FAQ-style section */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              Common{" "}
              <span className="text-primary">questions</span>
            </h2>
          </motion.div>

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {[
              { q: "How long does setup take?", a: "Most teams are live within a week. Connect your tools and your complete account views start building immediately." },
              { q: "Do I need a data engineering team?", a: "No. Our connectors clean and organize your data automatically. If it has an API, we can connect it without any engineering work." },
              { q: "Is there a free trial?", a: "We offer guided proof-of-concept deployments. Book a demo and we'll set up a trial tailored to your stack." },
              { q: "What if my tool isn't in the catalog?", a: "We support custom API connectors, webhooks, and database connections. Request a connector and we'll scope it." },
              { q: "How does billing work?", a: "Platform fee + usage-based scaling. See our pricing page for details, or contact us for enterprise terms." },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.06 }}
                className="arvio-card p-6"
              >
                <h3 className="text-[16px] font-semibold tracking-[-0.03em]">{faq.q}</h3>
                <p className="mt-2 text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
