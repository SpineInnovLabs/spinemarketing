"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LeadForm, type LeadIntent } from "@/components/lead-form";
import { Mail, MapPin, MessageSquare } from "lucide-react";

export function ContactContent({
  defaultIntent = "contact",
}: {
  defaultIntent?: LeadIntent;
}) {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
      >
        <div className="mx-auto max-w-[1200px] px-6 pt-[160px] pb-[100px] md:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 16,
                mass: 1,
                stiffness: 52,
                delay: 0.2,
              }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-[40px] bg-white px-4 py-1.5"
              style={{ boxShadow: "0px 0px 0px 3px rgb(248 248 250)" }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: "var(--gradient-primary-icon)" }}
              />
              <span className="text-[14px] font-semibold tracking-[-0.03em] text-[#0a0b10]">
                Company
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 16,
                mass: 1,
                stiffness: 52,
                delay: 0.4,
              }}
              className="text-[48px] font-semibold leading-[1em] tracking-[-0.05em] text-white sm:text-[54px] lg:text-[64px]"
            >
              Let&apos;s <span className="text-primary">talk.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 16,
                mass: 1,
                stiffness: 52,
                delay: 0.6,
              }}
              className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
            >
              Whether you want a demo, have a question, or want to explore how
              IntegrateWise fits your apps — we&apos;re here.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="arvio-section dark-section">
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
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                  delay: i * 0.1,
                }}
                className="arvio-card flex flex-col items-center p-8 text-center"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.03em]">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
                  {desc}
                </p>
                <Button
                  className="mt-6 h-[42px] rounded-xl px-4 text-[15px] font-semibold tracking-[-0.3px]"
                  style={{
                    background: "var(--gradient-primary)",
                    border: "2px solid rgba(248,248,250,0.12)",
                    boxShadow: "var(--shadow-button)",
                  }}
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

          <div
            id="contact-form"
            className="mx-auto mt-16 max-w-lg scroll-mt-28"
          >
            <LeadForm defaultIntent={defaultIntent} />
          </div>
        </div>
      </section>

      {/* FAQ-style section */}
      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              Common <span className="text-primary">questions</span>
            </h2>
          </motion.div>

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {[
              {
                q: "How long does setup take?",
                a: <span>Most teams connect their first apps and see Entity 360 within a day. Full workspace setup with all integrations typically takes 1–2 weeks with our guided onboarding.</span>,
              },
              {
                q: "Do I need an engineering team?",
                a: <span>No. Every integration uses one-time OAuth setup. No code, no data migration, no engineering resources required.</span>,
              },
              {
                q: "Can I try it before committing?",
                a: <span>Yes. We run a guided POC where you connect your real apps and see your real data in the workspace — including L1 (your Daily Workbench), L2 (the Intelligence Layer), and the Twin working with your actual context.</span>,
              },
              {
                q: "What if I need a connector you don't have?",
                a: <span>We build custom connectors. Our Spine architecture supports REST API, GraphQL, webhooks, and direct database connections. Request a connector and we&apos;ll scope it.</span>,
              },
              {
                q: "How does billing work?",
                a: <span>Monthly or annual billing. No hidden costs. You can upgrade or downgrade anytime. Implementation services are billed separately as one-time packages.</span>,
              },
              {
                q: "Is my data secure?",
                a: <span>Yes. AES-256 encryption at rest, TLS 1.3 in transit, SOC 2 aligned practices, full audit trails, and non-bypassable human approval on every AI action.{" "}<Link href="/security" className="text-primary underline underline-offset-2">See our Security page</Link> for details.</span>,
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                  delay: i * 0.06,
                }}
                className="arvio-card p-6"
              >
                <h3 className="text-[16px] font-semibold tracking-[-0.03em]">
                  {faq.q}
                </h3>
                <p className="mt-2 text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
