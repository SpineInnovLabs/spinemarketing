"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users,
  BarChart3,
  Sparkles,
  Cloud,
  Wrench,
  Package,
  ShoppingCart,
  Briefcase,
  TrendingUp,
  UserCheck,
  Telescope,
  Settings2,
  Truck,
  DollarSign,
  User,
} from "lucide-react";

const byFunction = [
  {
    icon: Users,
    name: "Account Success",
    href: "/account-success",
    desc: "L1 workspace for customer-facing teams. Account 360: revenue, usage, support, invoices, people, health — all connected.",
  },
  {
    icon: BarChart3,
    name: "Business Ops",
    href: "/business-ops",
    desc: "L1 operating workspace for founders and leaders. Revenue, pipeline, churn, cash, projects — one live picture of the business.",
  },
  {
    icon: Sparkles,
    name: "Personal Ops",
    href: "/personal-ops",
    desc: "L1 workspace for individuals. Today's meetings, emails, tasks, threads — and a memory that carries context between sessions.",
  },
];

const byIndustry = [
  {
    icon: Cloud,
    name: "SaaS",
    href: "/solutions/saas",
    desc: "Renewals, expansion, product adoption — connected across CRM, support, and product usage in one account view.",
  },
  {
    icon: Wrench,
    name: "Services & Agencies",
    href: "/solutions/services",
    desc: "Projects, utilisation, invoices, client health — the full picture of every engagement, not just the billing system.",
  },
  {
    icon: Package,
    name: "Manufacturing & Trade",
    href: "/solutions/manufacturing",
    desc: "Orders, shipments, payments, exceptions — live across ERP, CRM, and logistics in one operating workspace.",
  },
  {
    icon: ShoppingCart,
    name: "Retail & Ecommerce",
    href: "/solutions/retail",
    desc: "Stock, orders, returns, support — every signal connected so teams act before problems become complaints.",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    href: "/solutions/professional-services",
    desc: "Engagements, deliverables, billing, relationships — the full account view that professional service teams need.",
  },
  {
    icon: TrendingUp,
    name: "Finance",
    href: "/solutions/finance",
    desc: "Revenue, risk, collections, cash — the financial picture that finance leaders actually need to run the business.",
  },
];

const byRole = [
  {
    icon: UserCheck,
    name: "Customer Success & Account Managers",
    href: "/solutions/customer-success",
    desc: "Save at-risk accounts. Accelerate renewals. Surface expansion. All from one workspace that reads every signal.",
  },
  {
    icon: Telescope,
    name: "Founders & CXOs",
    href: "/solutions/founders",
    desc: "Your Monday brief. Revenue movement. Board pack. The business view that takes 30 minutes to build — in seconds.",
  },
  {
    icon: Settings2,
    name: "RevOps & Business Operations",
    href: "/solutions/revops",
    desc: "One workspace for the operating layer. Pipelines, headcount, projects, exceptions — connected and actionable.",
  },
  {
    icon: Truck,
    name: "Operations & Delivery Leaders",
    href: "/solutions/operations",
    desc: "Utilisation, delivery, exceptions, escalations — the live view that keeps projects on track and clients happy.",
  },
  {
    icon: DollarSign,
    name: "Finance Leaders",
    href: "/solutions/finance-leaders",
    desc: "Cash, collections, runway, burn — the financial workspace that connects accounting, billing, and CRM into one picture.",
  },
  {
    icon: User,
    name: "Individual Professionals",
    href: "/solutions/individual",
    desc: "Your personal workspace. Morning briefing, session memory, promise tracker, weekly planning — all in one place.",
  },
];

function GroupCard({
  icon: Icon,
  name,
  href,
  desc,
  delay,
}: {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  href: string;
  desc: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay }}
    >
      <Link
        href={href}
        className="group arvio-card flex h-full flex-col p-6 transition-all hover:border-primary/30"
      >
        <div
          className="flex h-10 w-10 items-center justify-center rounded-lg transition-all group-hover:scale-105"
          style={{ background: "var(--gradient-primary-icon)" }}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.03em]">
          {name}
        </h3>
        <p className="mt-2 flex-1 text-[14px] font-medium leading-[1.6] text-muted-foreground">
          {desc}
        </p>
        <span className="mt-4 text-[13px] font-semibold text-primary">
          Learn more →
        </span>
      </Link>
    </motion.div>
  );
}

export function SolutionsContent() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pb-24 pt-40"
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
      >
        <div className="mx-auto max-w-[800px] px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 80 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Solutions
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.15 }}
            className="text-[48px] font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-[64px]"
          >
            Same Spine.{" "}
            <span className="text-primary">Your context.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.35 }}
            className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
          >
            IntegrateWise runs on one Spine, one Workbench, and one
            Intelligence layer. But the workspace is shaped to your function,
            your industry, and your role. Every view starts from the same
            unified truth.
          </motion.p>
        </div>
      </section>

      {/* The model explainer */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[900px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          >
            <h2 className="section-heading">
              The model behind{" "}
              <span className="text-primary">every solution</span>
            </h2>
            <p className="section-subheading mx-auto mt-4 max-w-2xl">
              Every IntegrateWise solution — regardless of function, industry,
              or role — runs on the same architecture. Connect your apps to the
              Spine. Work in L1. Let L2 surface signals. Approve before anything
              changes.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "Spine",
                desc: "Connects every app. Unifies Truth, Context, and Session Summaries into one entity-level intelligence layer.",
                color: "bg-primary/10 border-primary/20",
              },
              {
                label: "L1 — Daily Workbench",
                desc: "Your workspace. Shaped to your function or role. This is where you work, act, and manage every day.",
                color: "bg-muted border-border",
              },
              {
                label: "L2 — Intelligence Layer",
                desc: "The Twin reads the Spine. Surfaces signals. Proposes actions with evidence. Waits for your approval.",
                color: "bg-muted border-border",
              },
            ].map(({ label, desc, color }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.1 }}
                className={`rounded-xl border p-6 text-left ${color}`}
              >
                <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-primary">
                  {label}
                </div>
                <p className="mt-2 text-[14px] font-medium leading-[1.6] text-muted-foreground">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* By Function */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mb-10"
          >
            <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-primary mb-2">
              By Function
            </div>
            <h2 className="text-[28px] font-semibold tracking-[-0.04em]">
              Choose your workspace
            </h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-3">
            {byFunction.map((item, i) => (
              <GroupCard key={item.name} {...item} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* By Industry */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mb-10"
          >
            <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-primary mb-2">
              By Industry
            </div>
            <h2 className="text-[28px] font-semibold tracking-[-0.04em]">
              Tuned to your reality
            </h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {byIndustry.map((item, i) => (
              <GroupCard key={item.name} {...item} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      {/* By Role */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mb-10"
          >
            <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-primary mb-2">
              By Role
            </div>
            <h2 className="text-[28px] font-semibold tracking-[-0.04em]">
              Your workspace, your lens
            </h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {byRole.map((item, i) => (
              <GroupCard key={item.name} {...item} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
