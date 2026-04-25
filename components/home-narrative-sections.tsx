"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Eye,
  Layers3,
  LockKeyhole,
  PlugZap,
  ShieldCheck,
  Sparkles,
  UserCheck,
  WalletCards,
  Workflow,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const visionCards = [
  {
    icon: Eye,
    title: "Omniscient Visibility",
    body: "Every interaction is indexed. You see the email, ticket history, Slack context, and usage data in one glance.",
  },
  {
    icon: Zap,
    title: "Predictive Performance",
    body: "Signals become timely suggestions, not lucky guesses. Risks surface before the customer, project, or workflow breaks.",
  },
  {
    icon: Workflow,
    title: "Zero-Friction Execution",
    body: "Actions flow from context. Approve the plan, schedule the next step, and update records without leaving the narrative thread.",
  },
];

const featureCards = [
  {
    icon: PlugZap,
    title: "100+ Tool Connectors",
    body: "Plug in the apps you already use. CRM, billing, support, chat, docs, and project data become one living memory.",
  },
  {
    icon: Layers3,
    title: "Unified Entity 360 View",
    body: "See everything about any account, client, deal, or project in one place with source-backed context.",
  },
  {
    icon: Brain,
    title: "Proactive Twin Insights",
    body: "Your Twin watches the Spine, explains what changed, and proposes evidence-backed next steps.",
  },
  {
    icon: UserCheck,
    title: "Approval-Gated Action",
    body: "Nothing executes, and no memory is written, without explicit human approval through the Approval Gate.",
  },
];

const solutionCards = [
  {
    title: "Account Success",
    body: "Never miss a renewal signal. Unify usage, support, billing, and relationship notes into one customer 360 view.",
    href: "/account-success",
  },
  {
    title: "Business Ops",
    body: "For founders and operators. Connect CRM, finance, support, and project systems into one operating picture.",
    href: "/business-ops",
  },
  {
    title: "Personal Space",
    body: "Your private OS. Index emails, notes, docs, and follow-ups into a second brain that works with you.",
    href: "/personal-ops",
    beta: true,
  },
];

const pricingCards = [
  {
    name: "Starter",
    description: "For individuals building memory.",
    features: ["Daily sync frequency", "5 connectors", "Basic TruthLayer"],
  },
  {
    name: "Growth",
    description: "For teams needing real-time context.",
    features: ["Hourly sync frequency", "20 connectors", "Team Workspaces"],
    highlighted: true,
  },
  {
    name: "Command",
    description: "Enterprise-grade governance.",
    features: ["Real-time sync", "Unlimited connectors", "Custom approval policies"],
  },
];

const confidenceItems = [
  {
    question: "Does the AI act without me?",
    answer:
      "No. The Twin can suggest, draft, and explain, but every write-back passes through the Approval Gate first.",
  },
  {
    question: "What does the Adaptive Spine remember?",
    answer:
      "It links records, relationships, signals, decisions, and approved AI session summaries into persistent Digital Memory.",
  },
  {
    question: "Do I need to replace my current tools?",
    answer:
      "No. IntegrateWise sits beneath your stack. Your CRM, support desk, billing tool, and project systems keep working.",
  },
  {
    question: "Can we start with just a few apps?",
    answer:
      "Yes. Start with the systems that create the most context switching, then add more connectors as the Spine becomes useful.",
  },
];

export function HomeVisionSection() {
  return (
    <section id="what-if-section" className="relative overflow-hidden border-t border-white/[0.05] py-24 md:py-32" style={{ background: "#111111" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full opacity-[0.05] blur-[130px]" style={{ background: "radial-gradient(circle, #FFE1CC, transparent 70%)" }} />
      </div>
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-0 hidden h-16 origin-top border-l border-dashed border-white/10 md:block"
      />
      <div className="relative mx-auto max-w-[1120px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 20, stiffness: 70 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFE1CC]/15 bg-[#FFE1CC]/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#FFE1CC]">
            <Sparkles className="h-3.5 w-3.5" />
            The Vision
          </div>
          <h2 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-[52px] lg:text-[56px]">
            Imagine a world where <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE1CC] to-white">your tools actually talk.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] font-medium leading-[1.7] text-white/50">
            What if your email knew the support ticket, your project board understood the meeting, and your CRM remembered the billing signal before you had to ask?
          </p>
        </motion.div>

        <div className="relative mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-3">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-8 hidden origin-center border-t border-dashed border-white/10 md:block"
          />
          {visionCards.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", damping: 20, stiffness: 70, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#1d1d1d] p-7 transition-colors hover:border-[#FFE1CC]/20 hover:bg-[#222222]"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", damping: 15, stiffness: 180, delay: 0.22 + i * 0.08 }}
                className="absolute left-1/2 top-8 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#111111] md:block"
              >
                <motion.span
                  animate={{ scale: [1, 1.8, 1], opacity: [0.75, 0.18, 0.75] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.3 }}
                  className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFE1CC]/70"
                />
              </motion.div>
              <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FFE1CC]/15 bg-[#FFE1CC]/10">
                <Icon className="h-5 w-5 text-[#FFE1CC]" />
              </div>
              <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-white">{title}</h3>
              <p className="mt-3 text-[14px] font-medium leading-[1.75] text-white/45">{body}</p>
              <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-[#FFE1CC]/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeFeaturesSection() {
  return (
    <section id="features-section" className="relative overflow-hidden border-t border-white/[0.05] py-24 md:py-32" style={{ background: "#111111" }}>
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-0 hidden h-16 origin-top border-l border-dashed border-white/10 md:block"
      />
      <div className="relative mx-auto max-w-[1120px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 20, stiffness: 70 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFE1CC]/15 bg-[#FFE1CC]/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#FFE1CC]">
            <ShieldCheck className="h-3.5 w-3.5" />
            Core Features
          </div>
          <h2 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-[52px] lg:text-[56px]">
            The features <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE1CC] to-white">you get.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featureCards.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", damping: 20, stiffness: 70, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#1d1d1d] p-6 transition-colors hover:border-[#FFE1CC]/20 hover:bg-[#222222]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FFE1CC]/15 bg-[#FFE1CC]/10 transition-transform group-hover:scale-105">
                <Icon className="h-5 w-5 text-[#FFE1CC]" />
              </div>
              <h3 className="text-[18px] font-semibold tracking-[-0.03em] text-white">{title}</h3>
              <p className="mt-3 text-[14px] font-medium leading-[1.7] text-white/45">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeUseCasesSection() {
  return (
    <section id="solutions-section" className="relative overflow-hidden border-t border-white/[0.05] py-24 md:py-32" style={{ background: "#111111" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[6%] top-[12%] h-[420px] w-[520px] rounded-full opacity-[0.05] blur-[130px]" style={{ background: "radial-gradient(circle, #FFE1CC, transparent 70%)" }} />
      </div>
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-0 hidden h-16 origin-top border-l border-dashed border-white/10 md:block"
      />
      <div className="relative mx-auto max-w-[1120px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 20, stiffness: 70 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFE1CC]/15 bg-[#FFE1CC]/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#FFE1CC]">
            <Workflow className="h-3.5 w-3.5" />
            Applied Solutions
          </div>
          <h2 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-[52px] lg:text-[56px]">
            One platform. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE1CC] to-white">Infinite possibilities.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] font-medium leading-[1.7] text-white/50">
            See how the memory layer transforms specific roles and operating rhythms.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {solutionCards.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", damping: 20, stiffness: 70, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#1d1d1d] p-7 transition-colors hover:border-[#FFE1CC]/20 hover:bg-[#222222]"
            >
              {item.beta && (
                <span className="absolute right-5 top-5 rounded-full border border-[#FFE1CC]/20 bg-[#FFE1CC]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#FFE1CC]">
                  Beta
                </span>
              )}
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FFE1CC]/15 bg-[#FFE1CC]/10">
                <WalletCards className="h-5 w-5 text-[#FFE1CC]" />
              </div>
              <h3 className="text-[24px] font-semibold tracking-[-0.04em] text-white">{item.title}</h3>
              <p className="mt-4 text-[14px] font-medium leading-[1.75] text-white/45">{item.body}</p>
              <Link href={item.href} className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-[#FFE1CC] transition-opacity hover:opacity-80">
                See how it works
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePricingPreviewSection() {
  return (
    <section id="pricing-section" className="relative overflow-hidden border-t border-white/[0.05] py-24 md:py-32" style={{ background: "#111111" }}>
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-0 hidden h-16 origin-top border-l border-dashed border-white/10 md:block"
      />
      <div className="relative mx-auto max-w-[1120px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 20, stiffness: 70 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFE1CC]/15 bg-[#FFE1CC]/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#FFE1CC]">
            <WalletCards className="h-3.5 w-3.5" />
            Pricing
          </div>
          <h2 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-[52px] lg:text-[56px]">
            Invest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE1CC] to-white">your memory.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] font-medium leading-[1.7] text-white/50">
            From personal organization to enterprise-grade governance, start building Digital Memory where the pain is highest.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-3">
          {pricingCards.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", damping: 20, stiffness: 70, delay: i * 0.08 }}
              whileHover={{ y: plan.highlighted ? -8 : -5 }}
              className={`relative rounded-[24px] border p-7 ${plan.highlighted ? "border-[#FFE1CC]/35 bg-[#FFE1CC]/10" : "border-white/10 bg-[#1d1d1d]"}`}
            >
              {plan.highlighted && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFE1CC]/20 bg-[#FFE1CC] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#111111]">
                  Most popular
                </div>
              )}
              <h3 className="text-[22px] font-semibold tracking-[-0.04em] text-white">{plan.name}</h3>
              <p className="mt-2 text-[14px] font-medium text-white/45">{plan.description}</p>
              <div className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-[14px] font-medium text-white/55">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFE1CC]/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FFE1CC]" />
                    </span>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 20, stiffness: 70, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link href="/pricing" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#1d1d1d] px-6 py-3 text-[14px] font-semibold text-white/70 transition-colors hover:border-[#FFE1CC]/20 hover:text-white">
            Explore full pricing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export function HomeConfidenceSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.05] py-24 md:py-32" style={{ background: "#111111" }}>
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-0 hidden h-16 origin-top border-l border-dashed border-white/10 md:block"
      />
      <div className="relative mx-auto grid max-w-[1120px] gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 20, stiffness: 70 }}
          className="rounded-[24px] border border-white/10 bg-[#1d1d1d] p-7 md:p-8"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFE1CC]/15 bg-[#FFE1CC]/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#FFE1CC]">
            <LockKeyhole className="h-3.5 w-3.5" />
            Confidence Layer
          </div>
          <h2 className="text-[36px] font-semibold leading-[1.12] tracking-[-0.05em] text-white md:text-[48px]">
            AI helps you see clearly, but control stays human.
          </h2>
          <p className="mt-6 text-[16px] font-medium leading-[1.8] text-white/50">
            The export narrative ends with trust for a reason: Digital Memory only works when the system earns permission to act. IntegrateWise keeps evidence, approvals, and write-backs visible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 20, stiffness: 70, delay: 0.08 }}
          className="rounded-[24px] border border-white/10 bg-[#1d1d1d] px-6 py-2 md:px-7"
        >
          <Accordion type="single" collapsible className="w-full">
            {confidenceItems.map((item, i) => (
              <AccordionItem key={item.question} value={`confidence-${i}`} className="border-white/[0.07]">
                <AccordionTrigger className="text-left text-[15px] font-semibold text-white/80 hover:text-[#FFE1CC] hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] font-medium leading-[1.75] text-white/45">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
