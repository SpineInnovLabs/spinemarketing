"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
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
        <Link href="/security" className="text-[#0176D3] underline underline-offset-2 hover:text-[#0B5CAB]">Security page</Link>.
      </span>
    ),
  },
];

const VALID_INTENTS: LeadIntent[] = [
  "contact",
  "demo",
  "pricing",
  "design-partner",
  "partnership",
  "media",
  "careers",
  "security",
];

export function ContactContent({
  defaultIntent = "contact",
}: {
  defaultIntent?: LeadIntent;
}) {
  const searchParams = useSearchParams();
  const intentFromUrl = searchParams.get("intent");
  const resolvedIntent = useMemo(() => {
    if (intentFromUrl && VALID_INTENTS.includes(intentFromUrl as LeadIntent)) {
      return intentFromUrl as LeadIntent;
    }
    return defaultIntent;
  }, [intentFromUrl, defaultIntent]);

  return (
    <>
      <section className="border-b border-[#E5E5E5] bg-white pt-[120px] pb-16">
        <div className="relative mx-auto max-w-[900px] px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] bg-[#F3F6F9] px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#032D60]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#0176D3]" />
            Contact
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.2 }}
            className="text-[40px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#032D60] sm:text-[48px]"
          >
            Talk to <span className="text-[#0176D3]">Spine InnovLabs.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.35 }}
            className="mx-auto mt-5 max-w-2xl text-[17px] leading-[1.6] text-[#444]"
          >
            Whether you want a demo, have a question, or want to explore how
            SpineWorkspace fits your apps — we&apos;re here.
          </motion.p>
        </div>
      </section>

      <section className="border-t border-[#E5E5E5] bg-[#F3F6F9] py-20 px-6 md:px-16">
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
                href: "mailto:connect@spineworkspace.com?subject=Meeting%20Request",
                external: true,
              },
            ].map(({ icon: Icon, title, desc, cta, href, external }, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.1)}
                className="group flex h-full flex-col items-center rounded-md border border-[#E5E5E5] bg-white p-8 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#F3F6F9]">
                  <Icon className="h-5 w-5 text-[#0176D3]" />
                </div>
                <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.03em] text-[#032D60]">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-[14px] leading-[1.6] text-[#444]">
                  {desc}
                </p>
                {external ? (
                  <a
                    href={href}
                    className="mt-6 inline-flex h-10 items-center gap-2 rounded-md bg-[#0176D3] px-5 text-[13px] font-semibold text-white hover:bg-[#0B5CAB]"
                  >
                    {cta} <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                ) : href.startsWith("#") ? (
                  <a
                    href={href}
                    className="mt-6 inline-flex h-10 items-center gap-2 rounded-md bg-[#0176D3] px-5 text-[13px] font-semibold text-white hover:bg-[#0B5CAB]"
                  >
                    {cta} <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <Link
                    href={href}
                    className="mt-6 inline-flex h-10 items-center gap-2 rounded-md bg-[#0176D3] px-5 text-[13px] font-semibold text-white hover:bg-[#0B5CAB]"
                  >
                    {cta} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          <div id="contact-form" className="mx-auto mt-16 max-w-lg scroll-mt-28">
            <LeadForm defaultIntent={resolvedIntent} />
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
