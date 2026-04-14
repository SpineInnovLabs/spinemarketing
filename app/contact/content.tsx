"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LeadForm, type LeadIntent } from "@/components/lead-form";
import { FAQSection } from "@/components/faq-section";
import { Mail, MapPin, MessageSquare } from "lucide-react";

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
    answer: "Yes. We run a guided POC where you connect your real apps and see your real data in the workspace — including L1 (your Daily Workbench), L2 (the Intelligence Layer), and the Twin working with your actual context.",
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
    answer: "Yes. AES-256 encryption at rest, TLS 1.3 in transit, SOC 2 aligned practices, full audit trails, and non-bypassable human approval on every AI action.",
  },
];

export function ContactContent({
  defaultIntent = "contact",
}: {
  defaultIntent?: LeadIntent;
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-dark-section">
        <div className="mx-auto max-w-[1200px] px-6 pt-40 pb-24 md:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.2 }}
            >
              <Badge variant="outline" className="mb-6 rounded-full border-primary/30 px-4 py-1.5 text-sm font-semibold text-primary">
                Company
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.4 }}
              className="text-5xl font-semibold leading-none tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Let&apos;s <span className="text-primary">talk.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.6 }}
              className="mx-auto mt-8 max-w-2xl text-base font-medium leading-relaxed text-white/55"
            >
              Whether you want a demo, have a question, or want to explore how
              IntegrateWise fits your apps — we&apos;re here.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="bg-dark-section py-16 px-6 md:px-16">
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
              >
                <Card className="flex h-full flex-col items-center border-border bg-card p-8 text-center">
                  <CardContent className="flex flex-col items-center p-0">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ background: "var(--gradient-primary-icon)" }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold tracking-tight">
                      {title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-muted-foreground">
                      {desc}
                    </p>
                    <Button
                      className="mt-6 h-11 rounded-xl px-4 text-sm font-semibold"
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
                  </CardContent>
                </Card>
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
