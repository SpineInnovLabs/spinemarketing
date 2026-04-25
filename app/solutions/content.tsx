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
  ArrowRight,
} from "lucide-react";

const byFunction = [
  {
    icon: Users,
    name: "Account Success",
    href: "/account-success",
    desc: "Know which customers need attention before they tell you. Health, usage, support — one view.",
  },
  {
    icon: BarChart3,
    name: "Business Ops",
    href: "/business-ops",
    desc: "Stop asking five people for the same number. Revenue, pipeline, cash — always current.",
  },
  {
    icon: Sparkles,
    name: "Personal Ops",
    href: "/personal-ops",
    desc: "Your meetings, tasks, and threads in one place. The Twin remembers what you discussed.",
  },
];

const byIndustry = [
  {
    icon: Cloud,
    name: "SaaS",
    href: "/solutions/saas",
    desc: "See who's actually using your product and who's about to churn — before renewal.",
  },
  {
    icon: Wrench,
    name: "Services & Agencies",
    href: "/solutions/services",
    desc: "Know which projects are bleeding margin before the client review.",
  },
  {
    icon: Package,
    name: "Manufacturing & Trade",
    href: "/solutions/manufacturing",
    desc: "Catch shipment delays and payment exceptions before they snowball.",
  },
  {
    icon: ShoppingCart,
    name: "Retail & Ecommerce",
    href: "/solutions/retail",
    desc: "Connect inventory, returns, and support so you act on signals, not complaints.",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    href: "/solutions/professional-services",
    desc: "Spot unbilled time and scope creep before revenue walks out the door.",
  },
  {
    icon: TrendingUp,
    name: "Finance",
    href: "/solutions/finance",
    desc: "Prioritize collections by who's likely to pay, not just who owes the most.",
  },
];

const byRole = [
  {
    icon: UserCheck,
    name: "Customer Success Managers",
    href: "/solutions/customer-success",
    desc: "Walk into every customer call already knowing what changed, what's at risk, and what to say.",
  },
  {
    icon: Telescope,
    name: "Founders & CXOs",
    href: "/solutions/founders",
    desc: "Your Monday brief and board pack — built from live data, ready in seconds.",
  },
  {
    icon: Settings2,
    name: "RevOps & Business Ops",
    href: "/solutions/revops",
    desc: "One source of truth for pipeline, forecast, and handoff — no more spreadsheet wars.",
  },
  {
    icon: Truck,
    name: "Operations & Delivery",
    href: "/solutions/operations",
    desc: "Catch delivery exceptions before the client notices. Utilization and risk in one place.",
  },
  {
    icon: DollarSign,
    name: "Finance Leaders",
    href: "/solutions/finance-leaders",
    desc: "See cash flow connected to customer health. Collections that make sense.",
  },
  {
    icon: User,
    name: "Individual Professionals",
    href: "/solutions/individual",
    desc: "Morning brief, session memory, task queue — your personal command center.",
  },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

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
      transition={{ type: "spring", damping: 18, stiffness: 70, delay }}
    >
      <Link
        href={href}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] p-6 transition-all hover:border-primary/20 hover:-translate-y-0.5"
        style={{
          background: "rgba(255,255,255,0.02)",
          backdropFilter: "blur(12px)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-105"
          style={{ background: "rgba(52,211,153,0.10)", boxShadow: "0 0 25px rgba(255,178,44,0.12)" }}
        >
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.03em] text-white">
          {name}
        </h3>
        <p className="mt-2 flex-1 text-[14px] font-medium leading-[1.6] text-white/40">
          {desc}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-primary">
          Learn more <ArrowRight className="h-3 w-3" />
        </span>
      </Link>
    </motion.div>
  );
}

export function SolutionsContent() {
  return (
    <>
      <section className="relative overflow-hidden pb-28 pt-[160px]" style={{ background: "#05070A" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[20%] h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-[0.08] blur-[140px]" style={{ background: "radial-gradient(circle, rgba(255,178,44,0.5), transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-[900px] px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 80 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-1.5 text-[13px] font-semibold text-white/50"
            style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Solutions
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.15 }}
            className="text-[48px] font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-[64px] lg:text-[72px]"
          >
            Built for how{" "}
            <span className="text-primary">you actually work.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.35 }}
            className="mx-auto mt-7 max-w-2xl text-[17px] font-medium leading-[1.6] tracking-[-0.02em] text-white/45"
          >
            Every team has different tools, different metrics, and different daily priorities. IntegrateWise connects them all and shows each person exactly what they need to see.
          </motion.p>
        </div>
      </section>

      <section className="border-y border-white/[0.04] py-6" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[1100px] px-6">
          <motion.div
            {...fade(0)}
            className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8"
          >
            <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary shrink-0">
              How it works
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { label: "Connect", note: "Link the apps your team already uses." },
                { label: "Unify", note: "Everything becomes one live picture." },
                { label: "Surface", note: "AI finds what needs your attention." },
                { label: "Approve", note: "Nothing happens without your say-so." },
              ].map(({ label, note }) => (
                <span key={label} className="text-[13px] font-medium text-white/35">
                  <span className="font-semibold text-white/70">{label}</span> — {note}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-28 md:py-36" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[1100px] px-6">
          <motion.div {...fade(0)} className="mb-14">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
              By Function
            </p>
            <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[48px]">
              Pick what matches your team
            </h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-3">
            {byFunction.map((item, i) => (
              <GroupCard key={item.name} {...item} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 border-t border-white/[0.04]" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[1100px] px-6">
          <motion.div {...fade(0)} className="mb-14">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
              By Industry
            </p>
            <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[48px]">
              Shaped for your industry
            </h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {byIndustry.map((item, i) => (
              <GroupCard key={item.name} {...item} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 border-t border-white/[0.04]" style={{ background: "#05070A" }}>
        <div className="mx-auto max-w-[1100px] px-6">
          <motion.div {...fade(0)} className="mb-14">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
              By Role
            </p>
            <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[48px]">
              Your role, your view
            </h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {byRole.map((item, i) => (
              <GroupCard key={item.name} {...item} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
