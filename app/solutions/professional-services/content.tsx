"use client";

import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

export function ProfessionalServicesContent() {
  return (
    <IndustrySolutionLayout
      category="Professional Services"
      headline="Every engagement, fully visible."
      subheadline="Law firms, consultancies, and advisory practices unified — matters, time, billing, and client relationships in one governed workspace."
      ctaLabel="Explore the workspace →"
      problem={{
        intro: "Matters live in practice management software. Time is captured separately. Client relationships are in partners' inboxes. You lose revenue to unbilled time and scope creep because the full engagement picture is fragmented.",
        bullets: [
          "Unbilled time sits in WIP for 30+ days because time entries and billing are disconnected.",
          "Matters approaching scope limits aren't flagged until the partner reviews the file.",
          "Key client stakeholders disengage and no one notices until the relationship is damaged.",
          "Realization rate drops are invisible until year-end billing analysis.",
        ],
      }}
      solution={{
        paragraph: "Engagement 360 connects practice management (Clio, LeanLaw, Actionstep), time tracking, billing, and email into one client view. AI flags \"Matters approaching scope limits,\" \"Unbilled time exceeding 30 days,\" and \"Key client stakeholder disengaged\" — all waiting for your approval before any action.",
        workspaceName: "Engagement 360",
      }}
      capabilities={[
        {
          title: "Matter Margin Tracking",
          desc: "Real-time view of billed vs. WIP vs. original estimate per matter. Know which engagements are profitable before you close them.",
        },
        {
          title: "Client Relationship Monitoring",
          desc: "Track communication frequency with key decision-makers. Alert when engagement goes silent — before the client shops elsewhere.",
        },
        {
          title: "Billing Hygiene",
          desc: "Auto-flag time entries missing narratives or matters approaching billing caps. Recover revenue before it's written off.",
        },
        {
          title: "Scope Limit Alerts",
          desc: "AI surfaces matters approaching agreed scope or fee caps — giving partners time to have the conversation before the overage becomes a dispute.",
        },
      ]}
      governance="Every billing adjustment, scope change communication, and relationship flag routes through the approval gate. Partners maintain control over client-facing actions. Full audit trail of every governance decision with source data attached."
      connectors={[
        "Clio", "LeanLaw", "Actionstep",
        "QuickBooks", "Xero", "Outlook", "Gmail",
      ]}
      metrics={[
        "Realization Rate", "Collection Rate",
        "Matter Profitability", "Client Concentration Risk",
      ]}
    />
  );
}
