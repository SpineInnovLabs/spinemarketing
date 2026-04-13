"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function IndividualContent() {
  return (
    <RoleSolutionLayout
      role="Individual Professionals"
      headline="Your Personal Command Center"
      subheadline="All your work, one calm view — AI remembers context across sessions, you approve every action."
      ctaLabel="Try Personal Ops →"
      ctaHref="/personal-ops"
      focus={[
        {
          title: "Cross-Tool Task Aggregation",
          desc: "Today's priorities from Jira, Asana, email, and Slack — ranked by deadline and business impact.",
        },
        {
          title: "Session Memory",
          desc: "AI recalls what you were working on and suggests where to pick up — no reassembling context each morning.",
        },
        {
          title: "Smart Drafting",
          desc: "Emails and updates drafted with full cross-tool context — your edit and approval required before anything sends.",
        },
        {
          title: "Focus Protection",
          desc: "AI filters noise and surfaces only what matches your role — your morning briefing in 2 minutes.",
        },
      ]}
      governanceNote="AI cannot send or update anything without your explicit approval. Your context stays private — organizational data respects RBAC at the Spine level."
      connects={[
        "Gmail", "Outlook", "Slack", "Salesforce",
        "HubSpot", "Notion", "Asana", "Jira",
        "Google Calendar", "Zoom",
      ]}
      metrics={[
        "Response Time", "Task Completion Velocity",
        "Meeting Preparation Quality", "Context-Switching Reduction",
      ]}
    />
  );
}
