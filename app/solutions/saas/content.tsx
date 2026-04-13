"use client";

import { motion } from "framer-motion";
import { TrendingDown, UserMinus, Rocket, BarChart3, RefreshCw, Zap } from "lucide-react";
import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

const signals = [
  {
    icon: TrendingDown,
    title: "Usage dropped 40% last month",
    desc: "Product data shows a sharp drop. Support has 3 unresolved tickets. CRM shows the champion left 6 weeks ago. The Spine connects all three into one early warning.",
  },
  {
    icon: UserMinus,
    title: "Champion left, renewal in 60 days",
    desc: "The contact who owned the relationship resigned. The new stakeholder has never engaged. The Twin flags the risk and drafts an outreach plan — you approve before it sends.",
  },
  {
    icon: Rocket,
    title: "Expansion signal in a healthy account",
    desc: "Usage is up 70%, the team size doubled, and the account just opened 3 new support tickets about features in the next tier. The Twin surfaces the expansion moment. You act on it.",
  },
];

const whatMatters = [
  { title: "Renewals", desc: "Track every renewal date, health score, and risk signal in one place — not across CRM, spreadsheets, and email." },
  { title: "Expansion", desc: "Surface accounts ready to grow before your AMs think to ask. Usage, engagement, and team size all feed the signal." },
  { title: "Product adoption", desc: "Connect product analytics to account health. Know which features are being used, which aren't, and what that means for retention." },
  { title: "Churn prevention", desc: "Combine support volume, usage trends, champion changes, and billing status into a single early warning system for every account." },
];

export function SaasContent() {
  return (
    <IndustrySolutionLayout
      category="SaaS"
      headline="Renewals, expansion, and adoption — in one workspace."
      subheadline="SaaS teams manage revenue and relationships across CRM, support, billing, and product tools. The Spine connects them all. The Twin reads every signal. You stay in control."
      whatMatters={whatMatters}
      signals={signals}
      l1Title="Account workspace for SaaS teams"
      l1Desc="Open any customer account and see the complete picture: MRR, product usage, support health, billing status, stakeholder map, and renewal timeline — live, from all connected apps. Run playbooks, track tasks, and manage renewals from one workspace."
      l2Title="Intelligence Layer for SaaS signals"
      l2Desc="The Twin reads usage, support, CRM, and billing through the Spine. It surfaces churn risk, expansion readiness, and adoption gaps — with evidence. Every recommended action waits for your approval before it executes."
    />
  );
}
