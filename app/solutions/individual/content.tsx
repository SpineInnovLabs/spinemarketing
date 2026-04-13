"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function IndividualContent() {
  return (
    <RoleSolutionLayout
      role="Individual Professionals"
      headline="Your personal workspace. Context that carries."
      subheadline="You work across email, calendar, tasks, projects, and notes — and lose context every time you switch. IntegrateWise connects everything over the Spine and gives you one workspace that remembers."
      whatYouSee={[
        "Today's meetings with context — who's attending, what was discussed last time",
        "Open emails and threads grouped by project and person",
        "Tasks and commitments from every connected app in one list",
        "Session Summaries from every AI-assisted work session, logged and searchable",
        "Promises and follow-ups you've made — tracked automatically",
        "Projects and their current status across all connected tools",
        "Weekly view of what's due, what's overdue, what's coming",
        "Twin-drafted responses, plans, and summaries — waiting for your approval",
      ]}
      benefits={[
        {
          title: "Never lose the thread",
          desc: "Session Summaries capture the context from every work session — what you discussed, what you decided, what you committed to. Pick up exactly where you left off.",
        },
        {
          title: "Start the day with full context",
          desc: "Your morning briefing is assembled from every connected app: meetings, emails, tasks, open items, and signals from the people you work with — in two minutes.",
        },
        {
          title: "AI that drafts, you decide",
          desc: "The Twin drafts emails, plans, and summaries from the full context in the Spine. Nothing sends until you approve. Every output is logged as a Session Summary.",
        },
      ]}
      useCases={[
        {
          title: "Morning briefing",
          desc: "You open IntegrateWise at 8am. Your workspace shows today's meetings with context from the last session, open email threads ranked by urgency, tasks due today, and three signals the Twin flagged overnight. You're oriented in 2 minutes.",
        },
        {
          title: "Promise and follow-up tracker",
          desc: "You told a client you'd send something by Thursday. You told your team you'd review a doc by end of week. The Spine tracks both. The Twin reminds you before the deadline. You never drop a commitment again.",
        },
      ]}
    />
  );
}
