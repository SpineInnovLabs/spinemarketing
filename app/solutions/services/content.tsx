"use client";

import { WorkflowTransformLayout } from "../_shared/WorkflowTransformLayout";

export function ServicesContent() {
  return (
    <WorkflowTransformLayout
      category="Services & Agencies"
      headline="Know which projects are bleeding before the client review."
      subheadline="Margin, utilization, and billing risk — all connected. Stop finding out about problems when the invoice gets disputed."
      ctaLabel="See it with your data →"
      accentColor="rgba(139,92,246,0.5)"
      beforeAfter={[
        {
          before: "Hours logged in Harvest, billing in QuickBooks, client comms in Slack — nobody sees the full picture until month-end.",
          after: "Hours, budgets, scope changes, and client sentiment — all in one live project view.",
        },
        {
          before: "Scope creep happens task by task. By the time you notice, you've delivered work you'll never bill for.",
          after: "AI flags when logged time diverges from the original scope. You get a heads-up while you can still have the conversation.",
        },
        {
          before: "Utilization reports come weekly. A project can go underwater between reviews.",
          after: "Real-time utilization signals. AI suggests reallocation when team members are misbooked.",
        },
      ]}
      workflow={[
        { title: "Connect your project & billing tools", desc: "Jira, Asana, Harvest, Toggl, QuickBooks — linked in minutes, not weeks." },
        { title: "See every project's real margin", desc: "Hours burned vs. billed vs. scope — updated in real time, per project, per client." },
        { title: "AI catches scope creep early", desc: "When tasks outside the SOW start piling up, you see the warning before margin erodes." },
        { title: "Unbilled work surfaces automatically", desc: "Time logged but not invoiced? It surfaces as a signal — no more revenue left on the table." },
        { title: "You review and approve", desc: "AI drafts the scope conversation or billing adjustment. You decide what happens." },
      ]}
      capabilities={[
        { title: "See margin in real time, not at month-end", desc: "Hours logged, budgets burned, and scope changes — all connected. Know which projects need attention now." },
        { title: "Catch scope creep before it costs you", desc: "AI flags when logged time is diverging from the original scope while you can still act." },
        { title: "Spot unbilled work automatically", desc: "Time logged but not invoiced surfaces as a signal. No more revenue left on the table." },
        { title: "Client health beyond the project", desc: "See the full relationship — support tickets, payment patterns, and engagement — not just project status." },
      ]}
      governance="Rate changes and scope adjustments require your approval. AI identifies the risk — you decide what to do about it."
      connectors={["Asana", "Monday.com", "Jira", "Harvest", "Toggl", "QuickBooks", "Xero", "Slack", "Gmail"]}
      metrics={["Project Margin", "Utilization Rate", "Scope Variance", "Unbilled Revenue", "Client Retention"]}
      outcomes={[
        { stat: "8%", label: "Higher Utilization" },
        { stat: "15%", label: "Faster Invoicing" },
        { stat: "$0", label: "Surprise Write-offs" },
      ]}
    />
  );
}
