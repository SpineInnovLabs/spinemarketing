"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function OperationsContent() {
  return (
    <RoleSolutionLayout
      role="Operations & Delivery"
      headline="Catch delivery risks. Before they reach the client."
      subheadline="Project status, resource utilization, and client communication unified — AI flags exceptions, you approve the fix."
      ctaLabel="Explore the workspace →"
      focus={[
        {
          title: "Project Health 360",
          desc: "Timeline, budget, utilization, and client sentiment in one live view per engagement.",
        },
        {
          title: "Exception Management",
          desc: "Surface cascading delivery risks and missed milestones before the client knows there's a problem.",
        },
        {
          title: "Resource Optimization",
          desc: "AI suggests rebalancing based on skills and project priority — you approve reallocation.",
        },
        {
          title: "Client Communication Governance",
          desc: "Draft project updates with full context — timeline, budget, risk — and approve before sending.",
        },
      ]}
      governanceNote="Status changes, resource reassignments, and client communications queue for PM approval. No scope changes or team moves execute without explicit sign-off."
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
