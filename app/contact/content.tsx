"use client";

import React, { Suspense, useMemo } from "react";
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
    question: "What can I contact Spine InnovTech about?",
    answer: "Company partnerships, enterprise integrations, business-context architecture, responsible AI design and questions about our flagship product, Spine Workspace.",
  },
  {
    question: "Do we need to replace our existing tools?",
    answer: "Our architecture is designed to work around existing systems of record. Whether an integration is possible depends on each provider's supported interfaces, permissions and your organisation's requirements.",
  },
  {
    question: "Does discovering an AI capability authorize its use?",
    answer: "No. Discovery shows what is available; use of a capability requires the appropriate permissions, policy and approval before consequential execution.",
  },
  {
    question: "Can you guarantee a project timeline?",
    answer: "Not before understanding the project. Scope and timing depend on the connected systems, data availability, security constraints, review process and acceptance criteria.",
  },
  {
    question: "Where can I review your approach to security?",
    answer: (
      <span>
        We describe our architecture and principles on the{" "}
        <Link href="/security" className="text-[#225FAB] underline underline-offset-2">security page</Link>.
        Specific controls and contractual commitments should be validated for each deployment.
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

function ContactIntentForm({ defaultIntent }: { defaultIntent: LeadIntent }) {
  const searchParams = useSearchParams();
  const intentFromUrl = searchParams.get("intent");
  const resolvedIntent = useMemo(() => {
    if (intentFromUrl && VALID_INTENTS.includes(intentFromUrl as LeadIntent)) {
      return intentFromUrl as LeadIntent;
    }
    return defaultIntent;
  }, [intentFromUrl, defaultIntent]);

  return <LeadForm defaultIntent={resolvedIntent} />;
}

export function ContactContent({
  defaultIntent = "contact",
}: {
  defaultIntent?: LeadIntent;
}) {
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
            Talk to <span className="text-[#0176D3]">Spine InnovTech.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.35 }}
            className="mx-auto mt-5 max-w-2xl text-[17px] leading-[1.6] text-[#444]"
          >
            Whether you want a demo, have a question, or want to explore how
            Spine Workspace fits your existing environment — we&apos;re here.
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
                desc: "Discuss Spine Workspace and arrange a relevant product walkthrough.",
                cta: "Book a demo",
                href: "/contact?intent=demo",
                external: false,
              },
              {
                icon: Mail,
                title: "Email us",
                desc: "General questions, architecture discussions, partnership inquiries or project scoping.",
                cta: "Use the form",
                href: "#contact-form",
                external: false,
              },
              {
                icon: MapPin,
                title: "Visit us",
                desc: "Based in India. Please contact us to discuss meeting options.",
                cta: "Request a meeting",
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
            <Suspense fallback={<LeadForm defaultIntent={defaultIntent} />}>
              <ContactIntentForm defaultIntent={defaultIntent} />
            </Suspense>
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
