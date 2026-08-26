"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LeadForm, type LeadIntent } from "@/components/lead-form";
import { FAQSection } from "@/components/faq-section";
import { Mail, MapPin, MessageSquare, ArrowRight } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

const contactFAQs = [
  {
    question: "How long does setup take?",
    answer: "Most teams connect their first apps and see Entity 360 within a day. Full workspace setup with all integrations typically takes 1–2 weeks with our guided onboarding.",
  },
  {
    question: "Do I need an engineering team?",
    answer: "No. Every integration uses one-time OAuth setup. No code, no data migration, no engineering resources required.",
  },
  {
    question: "Can I try it before committing?",
    answer: "Yes. We run a guided POC where you connect your real apps and see your real data — including the Workspace, Twin, and the Twin working with your actual context.",
  },
  {
    question: "What if I need a connector you don't have?",
    answer: "We build custom connectors. Our Spine architecture supports REST API, GraphQL, webhooks, and direct database connections. Request a connector and we'll scope it.",
  },
  {
    question: "How does billing work?",
    answer: "Monthly or annual billing. No hidden costs. You can upgrade or downgrade anytime. Implementation services are billed separately as one-time packages.",
  },
  {
    question: "Is my data secure?",
    answer: (
      <span>
        Yes. AES-256 encryption at rest, TLS 1.3 in transit, SOC 2 aligned practices, full audit trails, and non-bypassable human approval on every AI action. Learn more on our{" "}
        <Link href="/security" className="text-primary underline underline-offset-2 hover:text-primary/80">Security page</Link>.
      </span>
    ),
  },
];

export function ContactContent({
  defaultIntent = "contact",
}: {
  defaultIntent?: LeadIntent;
}) {
  return (
    <>
      <section className="relative overflow-hidden pt-[160px] pb-28" style={{ background: "#05070A" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[25%] h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-[0.07] blur-[140px]" style={{ background: "radial-gradient(circle, rgba(52,211,153,0.4), transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-[900px] px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-1.5 text-[13px] font-semibold text-white/50"
            style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Contact
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.4 }}
            className="text-[48px] font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-[64px] lg:text-[72px]"
          >
            Let&apos;s <span className="text-primary">talk.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.6 }}
            className="mx-auto mt-7 max-w-2xl text-[17px] font-medium leading-[1.6] text-white/45"
          >
            Whether you want a demo, have a question, or want to explore how
            SpineWorkspace fits your apps — we&apos;re here.
          </motion.p>
        </div>
      </section>

      <section className="py-28 px-6 md:px-16" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
            {[
              {
                icon: MessageSquare,
                title: "Book a demo",
                desc: "See SpineWorkspace in action with a live walkthrough tailored to your use case.",
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
                {...fade(i * 0.1)}
                className="group flex h-full flex-col items-center overflow-hidden rounded-2xl border border-white/[0.06] p-8 text-center transition-all hover:border-primary/20 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/[0.10]"
                  style={{ boxShadow: "0 0 25px rgba(52,211,153,0.12)" }}
                >
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.03em] text-white">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-[14px] font-medium leading-[1.6] text-white/40">
                  {desc}
                </p>
                {external ? (
                  <a
                    href={href}
                    className="mt-6 inline-flex h-11 items-center gap-2 rounded-full px-6 text-[13px] font-semibold text-white transition-all hover:opacity-90"
                    style={{ background: "var(--gradient-primary)", boxShadow: "0 0 20px rgba(27,167,132,0.12)" }}
                  >
                    {cta} <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                ) : href.startsWith("#") ? (
                  <a
                    href={href}
                    className="mt-6 inline-flex h-11 items-center gap-2 rounded-full px-6 text-[13px] font-semibold text-white transition-all hover:opacity-90"
                    style={{ background: "var(--gradient-primary)", boxShadow: "0 0 20px rgba(27,167,132,0.12)" }}
                  >
                    {cta} <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <Link
                    href={href}
                    className="mt-6 inline-flex h-11 items-center gap-2 rounded-full px-6 text-[13px] font-semibold text-white transition-all hover:opacity-90"
                    style={{ background: "var(--gradient-primary)", boxShadow: "0 0 20px rgba(27,167,132,0.12)" }}
                  >
                    {cta} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          <div id="contact-form" className="mx-auto mt-16 max-w-lg scroll-mt-28">
            <LeadForm defaultIntent={defaultIntent} />
          </div>
        </div>
      </section>

      <FAQSection
        heading="Common questions"
        items={contactFAQs}
      />
    </>
  );
}
