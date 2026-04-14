"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

type Region = "india" | "international" | "enterprise";

const regions: { key: Region; label: string }[] = [
  { key: "india", label: "India" },
  { key: "international", label: "International" },
  { key: "enterprise", label: "Enterprise" },
];

const plans = [
  {
    name: "Starter",
    tier: "L1",
    prices: { india: "₹999", international: "$49", enterprise: "Custom" },
    period: "/mo",
    description: "Your Workbench. Connect your apps. See every account, task, and workflow in one unified view over the Spine.",
    features: [
      "Up to 5 connectors via OAuth",
      "L1 Workbench — accounts, tasks, workflows, calendar",
      "Entity 360 — complete view of every account from the Spine",
      "Truth + Context data flows (structured records + signals)",
      "Basic risk alerts and account health signals",
      "Email support",
    ],
    cta: "Book a demo",
    href: "/contact?intent=pricing",
    highlighted: false,
  },
  {
    name: "Growth",
    tier: "L1 + L2",
    prices: { india: "₹2,999", international: "$99", enterprise: "Custom" },
    period: "/mo",
    description: "Activate the Intelligence Layer. The Twin watches through the Spine, surfaces signals with evidence, and proposes actions for your approval.",
    features: [
      "Up to 15 connectors",
      "Everything in Starter",
      "L2 Intelligence Layer — Twin Chat, action proposals, draft previews",
      "AI Session Summaries linked to Entity 360s in the Spine",
      "Confidence scores and evidence chains on every insight",
      "TruthLayer governance — every AI action waits for your approval",
      "Knowledge that compounds with every approved session",
      "Priority support",
    ],
    cta: "Book a demo",
    href: "/contact?intent=pricing",
    highlighted: true,
  },
  {
    name: "Command",
    tier: "Enterprise",
    prices: { india: "₹7,999", international: "$199", enterprise: "Custom" },
    period: "/mo",
    description: "Full L1 + L2 with enterprise governance. Every AI proposal passes through the Govern Gate — non-bypassable, auditable, and traceable.",
    features: [
      "Unlimited connectors",
      "Everything in Growth",
      "Govern Gate — immutable decision log for every approved action",
      "Multi-AI verified knowledge with confidence scoring",
      "Enterprise audit trail (SOC 2 Type II, AES-256, TLS 1.3)",
      "SSO, RBAC with field-level permissions, dedicated success team",
    ],
    cta: "Contact sales",
    href: "/contact?intent=pricing",
    highlighted: false,
  },
];

export function PricingSection({ hideHeading = false }: { hideHeading?: boolean }) {
  const [region, setRegion] = useState<Region>("international");

  return (
    <section id="pricing" className="relative overflow-hidden bg-dark-section py-32 px-6 md:py-40 md:px-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[20%] h-[500px] w-[600px] -translate-x-1/2 rounded-full opacity-15 blur-[120px]" style={{ background: "radial-gradient(circle, rgba(52,211,153,0.2), transparent 70%)" }} />
      </div>
      <div className="relative mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mx-auto max-w-2xl text-center"
        >
          {!hideHeading && (
            <>
              <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Simple pricing.{" "}
                <span className="text-primary">Scale as you grow.</span>
              </h2>
              <p className="mt-4 text-base font-medium leading-relaxed text-white/45">
                Start small, add more apps and intelligence as your team needs it. No hidden costs.
              </p>
            </>
          )}

          <div className="mt-8 inline-flex items-center rounded-full border border-border bg-white/[0.04] p-1">
            {regions.map((r) => (
              <button
                key={r.key}
                onClick={() => setRegion(r.key)}
                className={`relative rounded-full px-5 py-2 text-sm font-semibold tracking-tight transition-all ${
                  region === r.key
                    ? "text-white"
                    : "text-white/40 hover:text-white/60"
                }`}
              >
                {region === r.key && (
                  <motion.div
                    layoutId="region-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{r.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mx-auto mt-16 md:mt-20 grid max-w-5xl gap-6 lg:gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                damping: 18,
                stiffness: 70,
                delay: i * 0.1,
              }}
            >
              <Card
                className={`relative flex h-full flex-col border ${
                  plan.highlighted
                    ? "border-primary/40 bg-white/[0.06] shadow-[0_0_60px_rgba(52,211,153,0.12)]"
                    : "border-border bg-white/[0.03]"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                      Most popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-lg text-white">{plan.name}</CardTitle>
                    <Badge variant="outline" className="rounded-full border-white/20 text-white/60 text-[11px]">
                      {plan.tier}
                    </Badge>
                  </div>
                  <CardDescription className="text-white/40 text-[15px] leading-relaxed">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-2">
                    <motion.span
                      key={region}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-[34px] font-semibold tracking-tight text-white"
                    >
                      {plan.prices[region]}
                    </motion.span>
                    {region !== "enterprise" && (
                      <span className="text-sm text-white/40">{plan.period}</span>
                    )}
                  </div>
                </CardHeader>
                <Separator className="bg-white/[0.08]" />
                <CardContent className="flex-1">
                  <ul className="space-y-3 pt-2">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm font-medium leading-relaxed text-white/60">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`h-11 w-full rounded-xl text-sm font-semibold ${
                      plan.highlighted
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "border border-white/15 bg-transparent text-white hover:bg-white/10"
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                    asChild
                  >
                    <Link href={plan.href}>{plan.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.3 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <Card className="border-border bg-white/[0.03]">
            <CardHeader>
              <CardTitle className="text-lg text-white">Implementation &amp; services</CardTitle>
              <CardDescription className="text-white/40">
                Optional onboarding packages to get you live faster. Available for all tiers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { name: "Workspace setup", price: "From $3K" },
                  { name: "Connector workshop", price: "From $2K" },
                  { name: "Custom add-ons", price: "Custom" },
                ].map((item, i) => (
                  <Card key={i} className="border-border bg-white/[0.04] py-4">
                    <CardContent className="py-0">
                      <div className="text-sm font-semibold text-white/70">{item.name}</div>
                      <div className="mt-1 text-sm font-semibold text-primary">{item.price}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
