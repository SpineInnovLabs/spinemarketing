"use client";

import { motion } from "framer-motion";
import { DollarSign, AlertCircle, TrendingDown } from "lucide-react";
import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

const signals = [
  {
    icon: AlertCircle,
    title: "Collections risk on a key account",
    desc: "Three invoices overdue. The account is still placing orders. Sales knows. Finance doesn't. CRM shows the relationship is strong. The Spine connects all four systems. The Twin recommends the collections path — you approve before the relationship is strained.",
  },
  {
    icon: TrendingDown,
    title: "Revenue recognition gap forming",
    desc: "New deals signed last month were booked before delivery was confirmed. The gap between contracted and delivered revenue is widening. The Spine surfaces the discrepancy across CRM, billing, and project tracking before the month closes.",
  },
  {
    icon: DollarSign,
    title: "Runway shorter than the board knows",
    desc: "Burn rate increased 18% last quarter. Two large customers have delayed payments. The Spine connects banking, billing, and CRM. The Twin drafts the updated runway view with evidence — you review before the board meeting.",
  },
];

const whatMatters = [
  { title: "Revenue", desc: "Connect CRM bookings to billing actuals. Track the gap between contracted, invoiced, and collected revenue in real time." },
  { title: "Risk", desc: "Surface collections risk, customer concentration, and payment delays before they become financial exposures." },
  { title: "Collections", desc: "See every overdue invoice alongside the full account context — relationship health, order history, communication — and act with confidence." },
  { title: "Cash", desc: "Connect banking, billing, and CRM to maintain a live view of cash position, burn rate, and runway." },
];

export function FinanceIndustryContent() {
  return (
    <IndustrySolutionLayout
      category="Finance"
      headline="Revenue, risk, collections, cash — one financial workspace."
      subheadline="Finance teams manage the books across accounting, billing, CRM, and banking. The Spine connects them all. One workspace to see the financial reality of the business."
      whatMatters={whatMatters}
      signals={signals}
      l1Title="Financial workspace for finance teams"
      l1Desc="See revenue actuals, invoice status, collections pipeline, and cash position in one workspace — live from accounting, billing, and CRM. Manage collections, track risk, and close the books from one place."
      l2Title="Intelligence Layer for financial signals"
      l2Desc="The Twin reads revenue, billing, banking, and CRM through the Spine. It surfaces collections risk, recognition gaps, and cash position changes — with evidence. You approve every recommended action before it executes."
    />
  );
}
