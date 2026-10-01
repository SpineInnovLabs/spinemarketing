export type CtaLink = { label: string; href: string };

export type PageHeroCopy = {
  badge?: string;
  headline: string;
  subhead?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
};

export type ContentSectionCopy = {
  label?: string;
  headline: string;
  body?: string;
  items?: string[];
  cards?: { title: string; description: string; href?: string }[];
  comparison?: { left: { title: string; items: string[] }; right: { title: string; items: string[] } };
};

export type ProofCardCopy = { title: string; description: string; metric?: string };

export type HubCardCopy = { title: string; description: string; href: string };

export type NarrativePageCopy = {
  meta: { title: string; description: string; path: string };
  hero: PageHeroCopy;
  sections: ContentSectionCopy[];
  crossLinks?: { prev?: CtaLink; next?: CtaLink; related?: CtaLink[] };
  scenario?: { headline: string; body: string; steps?: string[] };
  finalCta?: { headline: string; primaryCta: CtaLink; secondaryCta?: CtaLink };
};

export type UseCasePageCopy = NarrativePageCopy & {
  topics: { title: string; description: string }[];
};

export const pages = {
  spineworkspace: {
    meta: {
      title: "SpineWorkspace — The adaptive business-context workspace",
      description:
        "SpineWorkspace is the adaptive business-context workspace where humans and AI work together on shared goals, work, memory, and evidence.",
      path: "/spineworkspace",
    },
    hero: {
      badge: "Product",
      headline: "The adaptive business-context workspace where humans and AI work together.",
      subhead:
        "One workspace around the business—not another disconnected app. SpineWorkspace connects your tools, governs AI assistance, and preserves continuity across every host you use.",
      primaryCta: { label: "See how SpineWorkspace works", href: "/adaptive-workspace" },
      secondaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
    },
    sections: [
      {
        headline: "A workspace for the business, not another tool in the stack.",
        body:
          "SpineWorkspace sits above your existing systems. It doesn't replace your CRM, email, or project tools—it connects them into shared business context that humans and AI both work from.",
      },
      {
        headline: "Everything that matters to how work gets done.",
        items: ["Goals", "KPIs", "Customers", "Relationships", "Work", "Decisions", "Memory", "Evidence", "Outcomes"],
      },
      {
        headline: "Understand. Coordinate. Preserve. Reconcile.",
        cards: [
          { title: "Understand work", description: "See goals, status, and risk in one place" },
          { title: "Coordinate action", description: "Humans and AI work from the same context" },
          { title: "Preserve continuity", description: "Memory and evidence survive every handoff" },
          { title: "Reconcile results", description: "Observe outcomes; don't blindly trust model output" },
        ],
      },
      {
        headline: "Built from adaptive primitives.",
        cards: [
          { title: "Workbench", description: "Role-aware views of goals, KPIs, work, and context", href: "/adaptive-workspace" },
          { title: "Twin", description: "A context-aware coworker that gathers business context before helping", href: "/twin" },
          { title: "Spine Fabric", description: "Connects systems without claiming source authority", href: "/platform/spine-fabric" },
          { title: "Marketplace", description: "Capabilities, plugins, and integrations for your host environment", href: "/platform" },
          { title: "Runtime", description: "Execution layer with governance boundaries built in", href: "/platform" },
        ],
      },
    ],
    crossLinks: {
      next: { label: "Meet the Twin", href: "/twin" },
      related: [
        { label: "Business Context", href: "/business-context" },
        { label: "Adaptive Workspace", href: "/adaptive-workspace" },
      ],
    },
  },

  twin: {
    meta: {
      title: "The Twin — A coworker that starts with context",
      description: "The Twin gathers relevant business context before helping—not just your latest prompt.",
      path: "/twin",
    },
    hero: {
      badge: "Twin",
      headline: "A coworker that starts with context.",
      subhead: "The Twin gathers relevant business context before helping—not just your latest prompt.",
      primaryCta: { label: "Meet the Twin", href: "/contact?intent=demo" },
    },
    sections: [
      {
        headline: "Context first. Capability second.",
        body:
          "Before the Twin responds, it pulls from shared business context: goals, active work, customer history, prior decisions, and evidence. You get help grounded in how your business actually works.",
      },
      {
        headline: "Not a chat agent. A coworker.",
        comparison: {
          left: {
            title: "Generic chat agents",
            items: ["Answer prompts", "Start cold every session", "Expose model catalogs", "No business memory"],
          },
          right: {
            title: "The Twin",
            items: [
              "Starts from business context",
              "Knows goals, KPIs, work state",
              "Selects the right capability silently",
              "Respects permissions and evidence",
            ],
          },
        },
      },
      {
        headline: "The right model, tool, or workflow—for the task.",
        body:
          "The Twin resolves capability dynamically. It chooses the right model, MCP server, plugin, skill, or automation based on what the task needs. You don't pick from a catalog.",
      },
      {
        headline: "AI helps. You decide.",
        body:
          "The Twin proposes. Humans keep judgment, approvals, and accountability. Consequential actions require explicit authority.",
      },
    ],
    crossLinks: {
      prev: { label: "SpineWorkspace", href: "/spineworkspace" },
      next: { label: "Business Context", href: "/business-context" },
    },
  },

  businessContext: {
    meta: {
      title: "Business Context — The organizing center of SpineWorkspace",
      description: "Goals, KPIs, customers, relationships, work, decisions, evidence, history, and outcomes—in one governed layer.",
      path: "/business-context",
    },
    hero: {
      badge: "Business Context",
      headline: "Shared business context changes how work gets done.",
      subhead: "Goals, KPIs, customers, relationships, work, decisions, evidence, history, and outcomes—in one governed layer.",
      primaryCta: { label: "See context in action", href: "/adaptive-workspace" },
    },
    sections: [
      {
        headline: "What business context includes.",
        items: ["Goals", "KPIs", "Customers", "Relationships", "Work", "Decisions", "Evidence", "History", "Outcomes"],
      },
      {
        headline: "Without shared context, everyone rebuilds the story.",
        body:
          "Every tool handoff, every AI session, every new team member starts from zero. Business context is what lets humans and AI work toward the same goals without re-explaining everything.",
      },
      {
        headline: "Connect context across systems—without claiming source authority.",
        body:
          "Spine connects to your existing tools and normalizes what matters. It doesn't replace your CRM or ERP as the system of record. It governs the context layer that sits above them.",
      },
      {
        headline: "Spine owns governed context. Proposals don't become truth.",
        body:
          "Model output, agent suggestions, and workflow results are proposals until a human with authority reconciles them. Spine maintains canonical truth; everything else is evidence to be observed and verified.",
      },
    ],
    crossLinks: {
      prev: { label: "The Twin", href: "/twin" },
      next: { label: "Adaptive Workspace", href: "/adaptive-workspace" },
    },
  },

  adaptiveWorkspace: {
    meta: {
      title: "Adaptive Workspace — A workspace that adapts to the work",
      description: "The workspace changes around the person, task, role, and available capability ecosystem.",
      path: "/adaptive-workspace",
    },
    hero: {
      badge: "Adaptive Workspace",
      headline: "A workspace that adapts to the work.",
      subhead: "The workspace changes around the person, task, role, and available capability ecosystem.",
      primaryCta: { label: "Explore adaptive work", href: "/host-connected-environment" },
    },
    sections: [
      {
        headline: "Adaptive Spine",
        body: "Business context evolves—memory, signals, evidence, and continuity update as work progresses.",
      },
      {
        headline: "Adaptive Workbench",
        body: "Role-aware views surface goals, KPIs, work queues, and context relevant to how you operate today.",
      },
      {
        headline: "Adaptive Twin",
        body: "Dynamic model and capability routing based on task need—not manual agent wiring.",
      },
      {
        headline: "You shouldn't have to wire agents or pick models.",
        body: "The workspace adapts. You focus on the work.",
      },
    ],
    crossLinks: {
      next: { label: "Host Connected Environment", href: "/host-connected-environment" },
    },
  },

  hostConnectedEnvironment: {
    meta: {
      title: "Host Connected Environment — Independent hosts, shared business context",
      description:
        "Each host is independent. Spine connects into each host's environment without creating a host-to-host mesh.",
      path: "/host-connected-environment",
    },
    hero: {
      badge: "Host Connected Environment",
      headline: "Independent hosts. Shared business context.",
      subhead:
        "Each host—ChatGPT, Claude, Cursor, Devin, or your own—is independent. Spine connects into each host's environment without creating a host-to-host mesh.",
      primaryCta: { label: "See host continuity", href: "/continuity" },
    },
    sections: [
      {
        headline: "What a Host Connected Environment includes.",
        body:
          "A host's native models, tools, MCP servers, plugins, skills, apps, workflows, and connections—plus Spine tools and Spine Fabric when connected.",
      },
      {
        headline: "Spine discovers what's actually present and healthy.",
        body:
          "No assumed integrations. SpineWorkspace inventories the host estate—what models, tools, and connections are available right now.",
      },
      {
        headline: "Host-first capability resolution.",
        body: "Use the current host's capabilities first. Fall back to Spine or managed services only when needed.",
      },
      {
        headline: "Work continues across hosts.",
        body:
          "Because Spine carries context, Work, evidence, and checkpoints, an objective started in one host can resume in another without losing the business story.",
      },
    ],
    crossLinks: {
      next: { label: "Continuity", href: "/continuity" },
    },
  },

  governance: {
    meta: {
      title: "Governance — AI can help. Humans stay in control.",
      description: "Humans govern the business. AI helps the business work. Availability does not mean authority.",
      path: "/governance",
    },
    hero: {
      badge: "Governance",
      headline: "AI can help. Humans stay in control.",
      primaryCta: { label: "Read our trust model", href: "/security" },
    },
    sections: [
      {
        headline: "Humans govern the business. AI helps the business work.",
        body: "SpineWorkspace is built so consequential decisions stay with people who have authority—not with models that sound confident.",
      },
      {
        headline: "Boundaries that hold.",
        body: "Authority scopes, approvals, scoped execution, and evidence linkage ensure AI assistance stays within what your organization allows.",
        items: ["Authority scopes", "Approvals", "Scoped execution", "Evidence linkage"],
      },
      {
        headline: "Proposals do not become truth on their own.",
        body: "Model output and agent suggestions remain proposals until a human with authority reconciles them into canonical truth.",
      },
      {
        headline: "Results are observed and verified—not blindly trusted.",
        body: "Spine links outcomes back to evidence. Reconciliation is part of the workflow, not an afterthought.",
      },
    ],
    crossLinks: {
      next: { label: "Continuity", href: "/continuity" },
      related: [{ label: "Security", href: "/security" }],
    },
  },

  continuity: {
    meta: {
      title: "Continuity — Work should continue without rebuilding the story",
      description: "Business memory, work state, checkpoints, evidence, and outcomes stay connected across sessions and hosts.",
      path: "/continuity",
    },
    hero: {
      badge: "Continuity",
      headline: "Work should continue without rebuilding the story.",
      primaryCta: { label: "See continuity proof", href: "/proof" },
    },
    sections: [
      {
        headline: "Every tool handoff loses context.",
        body: "Switching between CRM, email, chat, and project tools forces people and AI to reconstruct what happened, why it matters, and what comes next.",
      },
      {
        headline: "Business memory that persists.",
        body: "Business memory, work state, checkpoints, evidence, and outcomes stay connected—so the story survives every session and every host.",
      },
      {
        headline: "Memory layers.",
        items: ["Personal memory", "AI cognitive memory", "Business memory"],
      },
    ],
    scenario: {
      headline: "One objective. Two hosts. Continuous context.",
      body: "A renewal risk signal surfaces in one host. The team opens another host to draft outreach. Spine carries the full business story—goals, evidence, prior decisions—so work resumes without rebuilding context.",
      steps: [
        "Renewal risk detected in Host A",
        "Context carries to Host B with goals and evidence",
        "Human approves the recommended action",
        "Outcome reconciled in Workbench",
      ],
    },
    crossLinks: {
      next: { label: "See the proof", href: "/proof" },
    },
  },

  proof: {
    meta: {
      title: "Proof — Proven primitives. One continuous product.",
      description: "Host discovery, capability resolution, governance boundaries, and continuity across independent environments.",
      path: "/proof",
    },
    hero: {
      badge: "Proof",
      headline: "Proven primitives. One continuous product.",
      primaryCta: { label: "Talk to us", href: "/contact?intent=demo" },
    },
    sections: [],
    scenario: {
      headline: "One business objective. Multiple hosts. Continuous context.",
      body:
        "Renewal risk detected in Host A → context carries to Host B → human approves action → outcome reconciled in Workbench. The business story never breaks.",
      steps: [
        "Risk signal surfaces with linked evidence",
        "Twin proposes next actions within governance bounds",
        "Work continues in a different host with full context",
        "Results observed and reconciled against canonical truth",
      ],
    },
    finalCta: {
      headline: "Ready to see it in your environment?",
      primaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
      secondaryCta: { label: "Explore SpineWorkspace", href: "/spineworkspace" },
    },
  },

  company: {
    meta: {
      title: "Company — Spine InnovLabs builds SpineWorkspace",
      description: "Adaptive work environments for human–AI collaboration on shared business context.",
      path: "/company",
    },
    hero: {
      badge: "Spine InnovLabs",
      headline: "Spine InnovLabs builds SpineWorkspace.",
      subhead: "Adaptive work environments for human–AI collaboration on shared business context.",
      primaryCta: { label: "Contact us", href: "/contact" },
    },
    sections: [
      {
        headline: "Building around shared business reality.",
        body:
          "Spine InnovLabs exists because modern work is fragmented across software and AI interfaces. We build the workspace layer where humans and AI operate on the same governed context.",
      },
      {
        headline: "Product family.",
        cards: [
          {
            title: "SpineWorkspace",
            description: "The flagship adaptive business-context workspace for teams and operators.",
            href: "/spineworkspace",
          },
        ],
      },
      {
        headline: "Principles we build by.",
        items: ["Context", "Accountability", "Continuity", "Adaptive capability"],
      },
    ],
    crossLinks: {
      related: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
  },

  developers: {
    meta: {
      title: "Developers — Build with SpineWorkspace",
      description: "Integrate your tools, MCP servers, and capabilities into Spine Fabric ecosystem.",
      path: "/developers",
    },
    hero: {
      badge: "Developers",
      headline: "Build with SpineWorkspace.",
      subhead: "Integrate your tools, MCP servers, and capabilities into Spine Fabric ecosystem.",
      primaryCta: { label: "Read the docs", href: "https://docs.spineworkspace.com/" },
    },
    sections: [
      {
        headline: "Integration paths.",
        cards: [
          { title: "Integrations", description: "Connect SaaS apps and data sources into Spine Fabric.", href: "/platform/integrations" },
          { title: "MCP and plugins", description: "Extend host environments with MCP servers and plugins.", href: "https://docs.spineworkspace.com/" },
          { title: "Capability resolution", description: "How Spine selects models, tools, and workflows for a task.", href: "/twin" },
          { title: "APIs and auth", description: "Authentication, scopes, and API access patterns.", href: "https://docs.spineworkspace.com/" },
          { title: "Reference docs", description: "Full platform and product documentation.", href: "https://docs.spineworkspace.com/" },
        ],
      },
    ],
  },

  platformHub: {
    meta: {
      title: "Platform — The platform behind SpineWorkspace",
      description: "Architecture for adaptive business-context workspaces.",
      path: "/platform",
    },
    hero: {
      badge: "Platform",
      headline: "The platform behind SpineWorkspace.",
      subhead: "Architecture for adaptive business-context workspaces.",
      primaryCta: { label: "Spine Fabric", href: "/platform/spine-fabric" },
    },
    sections: [
      {
        headline: "Platform components.",
        cards: [
          { title: "Spine Fabric", description: "Context layer connecting systems without claiming source authority.", href: "/platform/spine-fabric" },
          { title: "Runtime", description: "Governed execution with scoped authority.", href: "/platform/how-it-works" },
          { title: "Marketplace", description: "Capabilities, plugins, and integrations.", href: "/platform/integrations" },
          { title: "Host Connected Environment", description: "Independent hosts with shared business context.", href: "/host-connected-environment" },
          { title: "Observation and reconciliation", description: "Results observed, not blindly trusted.", href: "/governance" },
          { title: "Security and governance", description: "Access, auditability, and execution controls.", href: "/security" },
        ],
      },
    ],
  },

  securityPage: {
    meta: {
      title: "Security — Governance, data handling, and bounded execution",
      description: "Access controls, evidence, auditability, and execution boundaries for SpineWorkspace.",
      path: "/security",
    },
    hero: {
      badge: "Security",
      headline: "Governance, data handling, and bounded execution.",
      subhead: "Confidence for teams operating AI inside real business workflows.",
      primaryCta: { label: "Contact security team", href: "/contact?intent=security" },
    },
    sections: [
      {
        headline: "Governance model.",
        body: "Humans govern the business. AI assists within authority boundaries. Availability of a capability does not grant authority to use it.",
      },
      {
        headline: "Access and authorization.",
        body: "Role-based access, scoped permissions, and host-aware capability resolution keep actions within organizational policy.",
      },
      {
        headline: "Evidence and auditability.",
        body: "Actions link to evidence. Audit trails support reconciliation and review—not just model confidence.",
      },
      {
        headline: "Execution controls.",
        body: "Consequential actions require explicit approval. Scoped execution prevents AI from operating outside authorized boundaries.",
      },
      {
        headline: "Data boundaries.",
        body: "Spine connects context across systems without replacing source-of-record systems. Data handling aligns with your governance requirements.",
      },
    ],
  },

  useCasesHub: {
    meta: {
      title: "Use Cases — Business work, connected",
      description: "See how SpineWorkspace applies to your role and operating model.",
      path: "/use-cases",
    },
    hero: {
      badge: "Use Cases",
      headline: "Business work, connected.",
      subhead: "See how SpineWorkspace applies to your role.",
      primaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
    },
    sections: [],
  },
} satisfies Record<string, NarrativePageCopy | { meta: NarrativePageCopy["meta"]; hero: PageHeroCopy; sections: ContentSectionCopy[] }>;

export const proofCards: ProofCardCopy[] = [
  {
    title: "Host Connected Environment",
    description: "Independent hosts share business context through Spine—not a host-to-host mesh.",
  },
  {
    title: "Estate discovery and normalization",
    description: "Spine inventories what's present and healthy in each host environment.",
  },
  {
    title: "Host-first capability resolution",
    description: "Current host capabilities are used before Spine or managed fallback.",
  },
  {
    title: "Governance boundary",
    description: "Availability ≠ authority. Humans approve consequential actions.",
  },
  {
    title: "Observation and reconciliation",
    description: "Results are observed and verified—not blindly trusted.",
  },
  {
    title: "Continuity across hosts",
    description: "Objectives resume across hosts with full business context.",
  },
];

export const useCaseHubCards: HubCardCopy[] = [
  { title: "Sales", description: "Keep revenue work connected.", href: "/use-cases/sales" },
  { title: "Customer Success", description: "Carry customer context across every interaction.", href: "/use-cases/customer-success" },
  { title: "Operations", description: "Coordinate work across fragmented systems.", href: "/use-cases/operations" },
  { title: "Founders and Leaders", description: "See goals, KPIs, decisions, and execution in one context.", href: "/use-cases/founders-and-leaders" },
  { title: "Teams", description: "One workspace for shared work and shared memory.", href: "/use-cases/teams" },
];

export const useCasePages: Record<string, UseCasePageCopy> = {
  sales: {
    meta: {
      title: "Sales — Keep revenue work connected",
      description: "Accounts, pipeline, commitments, and deal memory in one governed workspace.",
      path: "/use-cases/sales",
    },
    hero: {
      badge: "Sales",
      headline: "Keep revenue work connected.",
      subhead: "Pipeline, commitments, and customer context—without rebuilding the story every Monday.",
      primaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
    },
    sections: [],
    topics: [
      { title: "Accounts", description: "Full account context across CRM, email, and support—not scattered tabs." },
      { title: "Pipeline", description: "Deals linked to evidence, activity, and risk signals." },
      { title: "Commitments", description: "What was promised, to whom, and whether it's on track." },
      { title: "Follow-ups", description: "Next actions grounded in business context, not guesswork." },
      { title: "Deal memory", description: "History and decisions preserved across handoffs." },
      { title: "Next actions", description: "Twin surfaces what matters; you approve what executes." },
      { title: "KPI risk", description: "Revenue and pipeline KPIs connected to live work state." },
    ],
  },
  "customer-success": {
    meta: {
      title: "Customer Success — Carry customer context across every interaction",
      description: "Health, risk, renewal context, and relationship memory in one workspace.",
      path: "/use-cases/customer-success",
    },
    hero: {
      badge: "Customer Success",
      headline: "Carry customer context across every interaction.",
      primaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
    },
    sections: [],
    topics: [
      { title: "Health", description: "Usage, engagement, and support signals in one view." },
      { title: "Risk", description: "Early warning with evidence—not renewal-day surprises." },
      { title: "Renewal context", description: "Contract terms, history, and commitments linked to the account." },
      { title: "Support history", description: "Tickets and resolutions inform every customer conversation." },
      { title: "Relationship memory", description: "Champions, stakeholders, and prior decisions preserved." },
      { title: "Commitments", description: "What the team owes—and what's been delivered." },
    ],
  },
  operations: {
    meta: {
      title: "Operations — Coordinate work across fragmented systems",
      description: "Cross-functional processes, handoffs, execution, and reconciliation.",
      path: "/use-cases/operations",
    },
    hero: {
      badge: "Operations",
      headline: "Coordinate work across fragmented systems.",
      primaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
    },
    sections: [],
    topics: [
      { title: "Cross-functional processes", description: "Work flows across teams with shared context." },
      { title: "Handoffs", description: "Context survives every transition—not lost in Slack threads." },
      { title: "Execution", description: "Governed actions with approval boundaries." },
      { title: "Evidence", description: "Every step linked to source data and decisions." },
      { title: "Reconciliation", description: "Outcomes verified against canonical truth." },
    ],
  },
  "founders-and-leaders": {
    meta: {
      title: "Founders and Leaders — Goals, KPIs, and execution in one context",
      description: "Strategic visibility, decision traceability, and organizational memory.",
      path: "/use-cases/founders-and-leaders",
    },
    hero: {
      badge: "Founders and Leaders",
      headline: "See goals, KPIs, decisions, and execution in one context.",
      primaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
    },
    sections: [],
    topics: [
      { title: "Strategic visibility", description: "Goals and KPIs connected to live execution—not stale dashboards." },
      { title: "Decision traceability", description: "What was decided, why, and with what evidence." },
      { title: "Organizational memory", description: "Institutional knowledge that compounds over time." },
      { title: "Continuity", description: "Leadership context survives team changes and tool switches." },
    ],
  },
  teams: {
    meta: {
      title: "Teams — One workspace for shared work and shared memory",
      description: "Collaboration between humans and AI with approvals and visibility.",
      path: "/use-cases/teams",
    },
    hero: {
      badge: "Teams",
      headline: "One workspace for shared work and shared memory.",
      primaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
    },
    sections: [],
    topics: [
      { title: "Human–AI collaboration", description: "Twin assists from shared context; team members stay aligned." },
      { title: "Work queues", description: "Prioritized work linked to goals and evidence." },
      { title: "Approvals", description: "Governed execution—nothing consequential runs without authority." },
      { title: "Visibility", description: "Everyone sees the same business story." },
      { title: "Continuity", description: "Handoffs and host switches don't reset the narrative." },
    ],
  },
};

export const ecosystemChips = [
  "SaaS apps",
  "MCP servers",
  "Plugins",
  "Tools",
  "Skills",
  "Workflows",
  "Automations",
  "Memory",
];

export const homeCopy = {
  meta: {
    title: "SpineWorkspace — Bring people, AI, and business context into the same workspace",
    description:
      "SpineWorkspace gives humans and AI the same governed understanding of goals, KPIs, work, memory, evidence, and continuity.",
    path: "/",
  },
  hero: {
    badge: "SpineWorkspace by Spine InnovLabs",
    headline: "Bring people, AI, and business context into the same workspace.",
    subhead:
      "SpineWorkspace gives humans and AI the same governed understanding of goals, KPIs, work, memory, evidence, and continuity—so business work moves forward across the tools you already use.",
    primaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
    secondaryCta: { label: "Explore SpineWorkspace", href: "/spineworkspace" },
  },
  problem: {
    label: "The problem",
    headline: "Business work is fragmented. AI became one more disconnected interface.",
    body:
      "Teams jump between CRM, email, docs, tickets, and chat. Every handoff loses context. AI assistants answer prompts without knowing your goals, your customers, or what happened last week. Work gets rebuilt from scratch—again and again.",
    cards: [
      { title: "Fragmented tools", description: "Context lives in silos. Nobody sees the full picture." },
      { title: "Disconnected AI", description: "Chat agents don't know your business. Every session starts cold." },
      { title: "Lost continuity", description: "Handoffs break the story. Decisions lack evidence." },
    ],
  },
  product: {
    label: "SpineWorkspace",
    headline: "One workspace around the business—not another app.",
    body: "SpineWorkspace connects your existing tools and gives humans and AI the same governed business context.",
    cards: [
      { title: "Workbench", description: "Role-aware views of goals, KPIs, work, and context", href: "/adaptive-workspace" },
      { title: "Twin", description: "A context-aware coworker that gathers business context before helping", href: "/twin" },
      { title: "Spine Fabric", description: "Connects systems without claiming source authority", href: "/platform/spine-fabric" },
      { title: "Governance", description: "Humans approve. AI proposes. Nothing executes without authority.", href: "/governance" },
      { title: "Continuity", description: "Work, memory, and evidence persist across sessions and hosts", href: "/continuity" },
    ],
  },
  ecosystem: {
    label: "Your environment",
    headline: "Connect what you already use. Discover what's available.",
    body:
      "SpineWorkspace works inside your Host Connected Environment—your models, MCP servers, plugins, skills, apps, and workflows. Spine discovers what's present, resolves the right capability, and carries context forward.",
    cta: { label: "See how hosts connect", href: "/host-connected-environment" },
  },
  proofTeaser: {
    label: "Proof",
    headline: "Independent hosts. Shared business context. Governed work.",
    body:
      "SpineWorkspace is built from proven primitives—host discovery, capability resolution, governance boundaries, and continuity across independent environments.",
    cta: { label: "See the proof", href: "/proof" },
  },
  finalCta: {
    headline: "Ready to bring context into one workspace?",
    primaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
    secondaryCta: { label: "Explore SpineWorkspace", href: "/spineworkspace" },
  },
};

export const blogCategories = [
  "Product",
  "Business context",
  "Human–AI work",
  "Governance and trust",
  "Host-connected environments",
  "Company updates",
];
