"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  AlertTriangle, TrendingUp, Clock, Users, DollarSign, Shield,
  BarChart3, Mail, RefreshCw, Eye, Zap, Database,
  type LucideIcon
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

type UseCase = {
  icon: LucideIcon;
  category: string;
  title: string;
  trigger: string;
  action: string;
  impact: string;
  color: string;
};

const useCases: UseCase[] = [
  {
    icon: AlertTriangle, category: "Churn Prevention",
    title: "Usage dropped 40% + champion left + ticket spike",
    trigger: "Twin score: 87 — Critical",
    action: "Proposed Action: Escalate to VP with QBR deck draft",
    impact: "90-day early warning vs. renewal-day surprise",
    color: "text-red-400",
  },
  {
    icon: TrendingUp, category: "Expansion Revenue",
    title: "Invoice paid early + usage at 92% capacity + new stakeholders",
    trigger: "Twin score: 74 — Watch",
    action: "Proposed Action: Draft upgrade conversation with usage data",
    impact: "12% lift in expansion ARR from proactive outreach",
    color: "text-emerald-400",
  },
  {
    icon: Clock, category: "Renewal Forecasting",
    title: "Health score declining + competitive mentions in support tickets",
    trigger: "Twin score: 68 — Watch",
    action: "Proposed Action: Flag renewal risk, prepare retention offer",
    impact: "Forecast accuracy improves from 72% to 91%",
    color: "text-amber-400",
  },
  {
    icon: DollarSign, category: "Cash Flow Protection",
    title: "Payment 15 days overdue + support tickets increasing + sponsor unresponsive",
    trigger: "Twin score: 79 — Critical",
    action: "Proposed Action: Escalate collections with customer context",
    impact: "DSO reduced by 18 days with context-aware collections",
    color: "text-blue-400",
  },
  {
    icon: Users, category: "Stakeholder Intelligence",
    title: "Decision-maker changed roles + new exec joined + org restructure detected",
    trigger: "Twin score: 62 — Watch",
    action: "Proposed Action: Update relationship map, draft introduction email",
    impact: "Champion continuity maintained through org changes",
    color: "text-violet-400",
  },
  {
    icon: Mail, category: "Communication Audit",
    title: "Client mentioned competitor 3x this month + response time increasing",
    trigger: "Twin score: 71 — Critical",
    action: "Proposed Action: Schedule executive check-in with competitive analysis",
    impact: "Competitive displacement prevented with proactive engagement",
    color: "text-cyan-400",
  },
  {
    icon: BarChart3, category: "Pipeline Integrity",
    title: "Deal stage unchanged 21 days + no recent activity + budget quarter ending",
    trigger: "Twin score: 55 — Watch",
    action: "Proposed Action: Verify deal status, update forecast",
    impact: "Pipeline accuracy improved by removing stale deals",
    color: "text-purple-400",
  },
  {
    icon: Shield, category: "Compliance Monitoring",
    title: "Data residency policy updated + 3 connectors routing through non-compliant region",
    trigger: "Twin score: 91 — Critical",
    action: "Proposed Action: Pause affected connectors, route through compliant edge",
    impact: "Regulatory exposure eliminated same-day",
    color: "text-orange-400",
  },
  {
    icon: RefreshCw, category: "Onboarding Acceleration",
    title: "New customer 14 days in + only 2 of 8 integrations connected + no logins this week",
    trigger: "Twin score: 66 — Watch",
    action: "Proposed Action: Send onboarding checklist, schedule setup call",
    impact: "Time-to-value reduced from 45 to 18 days",
    color: "text-pink-400",
  },
  {
    icon: Eye, category: "Executive Briefing",
    title: "Monday morning — 12 accounts changed health status + 3 renewals this week",
    trigger: "Automated Morning Brief generation",
    action: "Proposed Action: Prioritized action list with evidence links",
    impact: "Executives prepared in 2 minutes vs. 45-minute spreadsheet review",
    color: "text-teal-400",
  },
  {
    icon: Zap, category: "Cross-Sell Detection",
    title: "Customer using Module A heavily + similar customers adopted Module B at this stage",
    trigger: "Twin score: 58 — Watch",
    action: "Proposed Action: Draft Module B introduction with adoption data",
    impact: "Cross-sell conversion rate increased 34% with data-backed timing",
    color: "text-lime-400",
  },
  {
    icon: Database, category: "Data Quality Governance",
    title: "15 duplicate contacts detected + 3 orphaned accounts + schema drift on HubSpot connector",
    trigger: "Twin score: 45 — Informational",
    action: "Proposed Action: Queue dedup review, flag schema drift for admin",
    impact: "Entity 360 accuracy maintained at 99.2% with automated hygiene",
    color: "text-sky-400",
  },
];

export function UseCasesSection({
  tag = "Use Cases",
  heading,
}: {
  tag?: string;
  heading?: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0px", "-80px"]);

  const [visibleCount, setVisibleCount] = useState(4);
  const visible = useCases.slice(0, visibleCount);

  return (
    <section ref={containerRef} className="relative arvio-section dark-section overflow-hidden">
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-[30%] right-[20%] w-[600px] h-[600px] rounded-full blur-[220px]" style={{ background: "rgba(27,167,132,0.04)" }} />
        <div className="absolute bottom-[10%] left-[15%] w-[400px] h-[400px] rounded-full blur-[160px]" style={{ background: "rgba(139,92,246,0.03)" }} />
      </motion.div>

      <div className="relative mx-auto max-w-[1100px]">
        <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">{tag}</p>
          <h2 className="section-heading">
            {heading || <>Real signals. <span className="text-primary">Real actions.</span></>}
          </h2>
          <p className="mt-5 text-[16px] font-medium leading-[1.55] text-white/50 max-w-xl mx-auto">
            The Twin detects cross-system patterns and proposes actions. You approve.
          </p>
        </motion.div>

        <div className="space-y-4">
          {visible.map((uc, i) => (
            <motion.div
              key={uc.title}
              {...fade(i * 0.04)}
              className="group rounded-2xl border border-white/[0.08] bg-gradient-to-r from-white/[0.04] to-white/[0.02] overflow-hidden hover:border-white/[0.14] transition-all"
            >
              <div className="p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                  <div className="flex items-center gap-3 sm:w-[200px] shrink-0">
                    <uc.icon className={`h-5 w-5 ${uc.color} shrink-0`} />
                    <span className={`text-[12px] font-bold uppercase tracking-[0.08em] ${uc.color}`}>
                      {uc.category}
                    </span>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-white leading-[1.4]">
                      {uc.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-[11px] font-semibold text-white/50">
                        {uc.trigger}
                      </span>
                    </div>
                    <div className="rounded-lg border border-primary/10 bg-primary/[0.04] px-3 py-2">
                      <p className="text-[12px] font-semibold text-primary/80">{uc.action}</p>
                    </div>
                    <p className="text-[12px] font-medium text-white/35">
                      {uc.impact}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < useCases.length && (
          <motion.div {...fade(0.1)} className="mt-8 text-center">
            <button
              onClick={() => setVisibleCount((c) => Math.min(c + 4, useCases.length))}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-[13px] font-semibold text-white/60 hover:border-white/20 hover:text-white transition-all"
            >
              Show more use cases
              <span className="text-primary">{useCases.length - visibleCount} remaining</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
