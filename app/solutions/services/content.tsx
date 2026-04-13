"use client";

import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

export function ServicesContent() {
  return (
    <IndustrySolutionLayout
      category="Services & Agencies"
      headline="Protect margin. Deliver certainty."
      subheadline="Project health, team utilization, and billing risk in one view — AI flags scope creep before it erodes your margin."
      ctaLabel="Explore the workspace →"
      problem={{
        bullets: [
          "Scope creep is invisible until month-end when you compare actual hours to the SOW.",
          "Team utilization gaps hide because project tools and time-tracking don't share data.",
          "Delivery risk surfaces via client complaint rather than internal signal.",
        ],
      }}
      capabilities={[
        {
          title: "Margin Protection",
          desc: "Real-time project P&L showing billed vs. burned vs. scope — before the invoice goes out.",
        },
        {
          title: "Utilization Balancing",
          desc: "AI suggests resource reallocation when team members are under- or over-booked across projects.",
        },
        {
          title: "Client Health Scoring",
          desc: "Support volume, payment history, and stakeholder sentiment combined into one engagement health view.",
        },
        {
          title: "Scope Creep Detection",
          desc: "AI flags tasks outside the original SOW before they erode margin.",
        },
      ]}
      governance="Billing adjustments and client communications route through approval gates. Project managers control what reaches the client — full audit trail."
      connectors={[
        "Asana", "Monday.com", "Jira", "Harvest",
        "Toggl", "QuickBooks", "Xero", "Slack", "Gmail",
      ]}
      metrics={[
        "Project Margin", "Utilization Rate",
        "Days Sales Outstanding (DSO)", "Client Satisfaction",
      ]}
    />
  );
}
