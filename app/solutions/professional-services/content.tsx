"use client";

import { motion } from "framer-motion";
import { FileText, Users2, TrendingDown } from "lucide-react";
import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

const signals = [
  {
    icon: TrendingDown,
    title: "Engagement scope creep going untracked",
    desc: "A client project is 30% over the original scope estimate. Billing hasn't been updated. The relationship owner doesn't know. The Spine connects project, billing, and CRM — the signal surfaces before the conversation becomes a dispute.",
  },
  {
    icon: Users2,
    title: "Key relationship at risk",
    desc: "The senior contact at a $400K account has gone quiet for 6 weeks. Emails unread. No meeting booked. Usage of the deliverable portal is down. The Twin flags the risk and recommends reengagement — you approve the outreach.",
  },
  {
    icon: FileText,
    title: "Deliverable overdue, client unaware",
    desc: "A milestone deliverable slipped by 2 weeks. The client hasn't been informed. The billing milestone is linked to the deliverable. The Spine surfaces the chain of consequences. You act before the client escalates.",
  },
];

const whatMatters = [
  { title: "Engagements", desc: "Track every active client engagement — scope, timeline, team, deliverables — connected to billing and relationship history." },
  { title: "Deliverables", desc: "Know what's been delivered, what's overdue, and what's at risk — before it becomes a client conversation." },
  { title: "Billing", desc: "Connect engagement milestones to invoicing. See billing status alongside project health and relationship activity." },
  { title: "Relationships", desc: "Track stakeholder engagement, communication cadence, and relationship health across every active account." },
];

export function ProfessionalServicesContent() {
  return (
    <IndustrySolutionLayout
      category="Professional Services"
      headline="Engagements, billing, relationships — one workspace."
      subheadline="Professional services teams manage client work across project tools, CRM, billing, and communication platforms. The Spine connects them all into one account view."
      whatMatters={whatMatters}
      signals={signals}
      l1Title="Client workspace for professional services teams"
      l1Desc="Open any client engagement and see the full picture: project status, deliverables, billing, stakeholder activity, and relationship history — live from every connected app. Manage work, track billing, and protect relationships from one workspace."
      l2Title="Intelligence Layer for professional services"
      l2Desc="The Twin reads project data, billing, CRM, and communication through the Spine. It surfaces scope drift, billing risk, and relationship health drops — with evidence. Every recommended action waits for your approval."
    />
  );
}
