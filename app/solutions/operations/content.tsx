"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function OperationsContent() {
  return (
    <RoleSolutionLayout
      role="Operations & Delivery"
      headline="The Delivery Control Room"
      subheadline="Project status, resource utilization, and client communication unified. AI flags exceptions — you approve the fix."
      ctaLabel="Explore the workspace →"
      focus={[
        {
          title: "Project Health 360",
          desc: "Timeline, budget, utilization, and client sentiment in one view per engagement — live from project tools, time tracking, and CRM.",
        },
        {
          title: "Exception Management",
          desc: "Auto-escalate projects at risk of missing milestones or margins. Surface the cascade of dependencies before the client knows there's a problem.",
        },
        {
          title: "Resource Optimization",
          desc: "AI suggests rebalancing based on skills, availability, and project priority. You approve reallocation — no surprise team moves without PM sign-off.",
        },
        {
          title: "Client Communication Governance",
          desc: "Draft project updates with full context — timeline, budget, risk — and approve before sending. No client-facing communication without Operations lead review.",
        },
      ]}
      governanceNote="Project status changes, resource reassignments, and client communications queue for PM and Operations lead approval. No surprise scope changes or team moves execute without explicit sign-off. Full audit trail of every delivery decision."
      connects={[
        "Asana", "Monday.com", "Jira", "Harvest",
        "Toggl", "Salesforce", "QuickBooks", "Slack", "Gmail",
      ]}
      metrics={[
        "Project Margin", "Utilization Rate",
        "On-Time Delivery %", "Client Satisfaction",
      ]}
    />
  );
}
