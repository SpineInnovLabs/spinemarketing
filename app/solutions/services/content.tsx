"use client";

import { motion } from "framer-motion";
import { Clock, AlertTriangle, Receipt } from "lucide-react";
import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

const signals = [
  {
    icon: Clock,
    title: "Team utilisation below target",
    desc: "Three projects are running light on billable hours. Two team members are under-allocated. The Spine connects project tracking, timesheets, and CRM to surface the gap before it hits the invoice.",
  },
  {
    icon: AlertTriangle,
    title: "Project at risk before the client knows",
    desc: "Milestone slipped. Client hasn't been updated. Budget is 80% consumed at 60% delivery. The Twin flags the escalation risk and drafts the client update — you approve before it sends.",
  },
  {
    icon: Receipt,
    title: "Invoice 45 days overdue",
    desc: "Finance, project delivery, and the account owner each have a piece of the picture. The Spine connects them. The Twin recommends the escalation path. You act on it.",
  },
];

const whatMatters = [
  { title: "Project health", desc: "Track every active engagement — scope, timeline, budget, and team allocation — in one workspace connected to delivery and finance." },
  { title: "Utilisation", desc: "See where your team is over or under-allocated before it affects delivery or revenue. Act on the signal before the problem compounds." },
  { title: "Invoicing", desc: "Connect project milestones to billing status. See every invoice, every overdue payment, and every billing conversation in one place." },
  { title: "Client health", desc: "Combine project status, support tickets, billing history, and relationship activity into one client view — not five separate apps." },
];

export function ServicesContent() {
  return (
    <IndustrySolutionLayout
      category="Services & Agencies"
      headline="Projects, people, and billing — one workspace."
      subheadline="Services and agency teams live across project tools, timesheets, CRM, and billing systems. The Spine connects them all. You get one live view of every engagement."
      whatMatters={whatMatters}
      signals={signals}
      l1Title="Engagement workspace for services teams"
      l1Desc="Open any client engagement and see the full picture: project status, team allocation, billable hours, invoice status, open support issues, and relationship activity — live from every connected app. Manage delivery, track milestones, and flag escalations from one workspace."
      l2Title="Intelligence Layer for services signals"
      l2Desc="The Twin reads project data, utilisation, billing, and client sentiment through the Spine. It surfaces delivery risk, billing delays, and scope creep — with evidence. Every recommended action waits for your approval."
    />
  );
}
