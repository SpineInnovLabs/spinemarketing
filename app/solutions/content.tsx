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
    desc: "Every account's revenue, usage, support, and health — connected in one workspace.",
  },
  {
    icon: BarChart3,
    name: "Business Ops",
    href: "/business-ops",
    desc: "Revenue, pipeline, cash, and exceptions — one live picture for founders and leaders.",
  },
  {
    icon: Sparkles,
    name: "Personal Ops",
    href: "/personal-ops",
    desc: "Your meetings, tasks, and threads in one place — with memory that carries context forward.",
  },
];

const byIndustry = [
  {
    icon: Cloud,
    name: "SaaS",
    href: "/solutions/saas",
    desc: "Protect NRR by connecting CRM, product usage, and billing into one renewal-ready account view.",
  },
  {
    icon: Wrench,
    name: "Services & Agencies",
    href: "/solutions/services",
    desc: "See project margin, utilization, and billing risk before they become client problems.",
  },
  {
    icon: Package,
    name: "Manufacturing & Trade",
    href: "/solutions/manufacturing",
    desc: "Flag delayed orders and payment exceptions before customers call to complain.",
  },
  {
    icon: ShoppingCart,
    name: "Retail & Ecommerce",
    href: "/solutions/retail",
    desc: "Connect stock, returns, and support so teams act on signals — not complaints.",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    href: "/solutions/professional-services",
    desc: "Surface unbilled time, scope creep, and disengaged clients before revenue leaks.",
  },
  {
    icon: TrendingUp,
    name: "Finance",
    href: "/solutions/finance",
    desc: "Prioritize collections by customer health, not just invoice aging.",
  },
];

const byRole = [
  {
    icon: UserCheck,
    name: "Customer Success & Account Managers",
    href: "/solutions/customer-success",
    desc: "AI-surfaced risk and expansion signals — save accounts before the conversation starts.",
  },
  {
    icon: Telescope,
    name: "Founders & CXOs",
    href: "/solutions/founders",
    desc: "Monday brief, board pack, and top-account oversight — built in seconds, not hours.",
  },
  {
    icon: Settings2,
    name: "RevOps & Business Operations",
    href: "/solutions/revops",
    desc: "Pipeline, forecasts, and process hygiene — governed and traceable across every tool.",
  },
  {
    icon: Truck,
    name: "Operations & Delivery Leaders",
    href: "/solutions/operations",
    desc: "Catch delivery exceptions and utilization gaps before they reach the client.",
  },
  {
    icon: DollarSign,
    name: "Finance Leaders",
    href: "/solutions/finance-leaders",
    desc: "Collections and cash flow connected to customer health — not just invoice dates.",
  },
  {
    icon: User,
    name: "Individual Professionals",
    href: "/solutions/individual",
    desc: "Morning briefing, session memory, and task queue — your day, already organised.",
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
        className="relative overflow-hidden pb-24 pt-40 bg-dark-section"
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
            One Spine. One Workbench. One Intelligence layer — shaped to your
            function, your industry, and your role.
          </motion.p>
        </div>
      </section>

      {/* Model strip */}
      <section className="dark-section border-b py-6" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="mx-auto max-w-[1100px] px-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8"
          >
            <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-primary shrink-0">
              The model
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { label: "Spine", note: "Connects every app into unified truth." },
                { label: "Daily Workbench", note: "Shaped to your function or role." },
                { label: "Intelligence Layer", note: "Surfaces signals. Proposes actions. Waits for your approval." },
              ].map(({ label, note }) => (
                <span key={label} className="text-[13px] font-medium text-muted-foreground">
                  <span className="font-semibold text-foreground">{label}</span> — {note}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* By Function */}
      <section className="arvio-section dark-section">
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
      <section className="arvio-section dark-section">
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
      <section className="arvio-section dark-section">
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
