import { DOCS_URL } from "@/lib/navigation";

export type CtaLink = { label: string; href: string };

export type PageHeroCopy = {
  badge?: string;
  headline: string;
  subhead?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
};

export type ContentSectionCopy = {
  id?: string;
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
      title: "SpineWorkspace — Truth and context in one governed workspace",
      description:
        "SpineWorkspace brings authoritative truth and the context for the current task together. Source systems stay authoritative.",
      path: "/spineworkspace",
    },
    hero: {
      badge: "Governed AI workspace",
      headline: "Work from the full business story — not fragments.",
      subhead:
        "SpineWorkspace brings authorized truth and the context for this task into one governed workspace. People and AI prepare, review, and move work forward. Your systems remain authoritative. Your people remain accountable.",
      primaryCta: { label: "See a workflow", href: "/#renewal-workflow" },
      secondaryCta: { label: "Book a tailored demo", href: "/contact?intent=demo" },
    },
    sections: [
      {
        headline: "A workspace for the business, not another tool in the stack.",
        body:
          "SpineWorkspace sits above your existing systems. It does not replace your CRM, email, or project tools. It brings their truth together with the context for the current task. Spine Workspace and Spine Workbench are the same offering.",
      },
      {
        headline: "Everything that matters to how work gets done.",
        items: ["Goals", "KPIs", "Customers", "Relationships", "Work", "Decisions", "Memory", "Evidence", "Outcomes"],
      },
      {
        headline: "Understand. Coordinate. Preserve. Reconcile.",
        cards: [
          { title: "Understand work", description: "See goals, status, and risk in one place" },
          { title: "Coordinate action", description: "Humans and AI work from the same truth and context" },
          { title: "Preserve continuity", description: "Memory and evidence survive every handoff" },
          { title: "Reconcile results", description: "Observe outcomes; don't blindly trust model output" },
        ],
      },
      {
        headline: "What you work with.",
        cards: [
          { title: "Workbench", description: "The workspace: the view this role needs of the record, the evidence, and the work" },
          { title: "Twin", description: "Opens when someone asks. Prepares a proposal from the record and the evidence. The proposal is not the record.", href: "/twin" },
          { title: "One connection", description: "Connects the tools you already use. Does not become a new home for the record.", href: "/platform/spine-fabric" },
          { title: "Your tools", description: "Connectors bring truth and context in. Source systems stay authoritative.", href: "/integrations" },
          { title: "Review", description: "A person accepts consequential steps. Proposals stay proposals until then.", href: "/governance" },
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
      title: "The Twin — A proposal from truth and context",
      description: "Coworker gathers the truth and context this person may use. Twin prepares a proposal. A person reviews it.",
      path: "/twin",
    },
    hero: {
      badge: "Spine Twin",
      headline: "Your Twin starts from the work, not a blank chat.",
      subhead: "Twin opens when someone asks. It prepares a proposal from the record and the evidence for this task. A person reviews it.",
      primaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
      secondaryCta: { label: "See governance", href: "/governance" },
    },
    sections: [
      {
        id: "coworker",
        label: "Spine Coworker",
        headline: "Coworker gathers truth and context. Twin prepares the proposal.",
        body:
          "Spine Coworker gathers the record and the evidence this person is allowed to use for this task. Twin prepares a proposal from that, and only when someone asks. A person reviews it. The proposal is not the record. There is no model catalogue and no second chat product.",
      },
      {
        headline: "The record and the evidence first. Then a proposal.",
        body:
          "Before Twin responds, it uses authoritative records and the context assembled for this task: goals, active work, customer history, prior decisions, and evidence. The proposal stays a proposal until a person reviews it.",
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
              "Starts from truth and governed context",
              "Knows goals, KPIs, work state",
              "Selects the right capability silently",
              "Respects permissions and evidence",
            ],
          },
        },
      },
      {
        headline: "One counterpart. No model catalogue.",
        body:
          "Twin is the user-facing AI counterpart. It uses the capability the task needs. There is no second chat product and no model picker.",
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
      headline: "One governed picture of the work.",
      subhead:
        "Business Context is where context for the current task is assembled. Source systems keep the record.",
      primaryCta: { label: "See how work is shown", href: "/adaptive-workspace" },
    },
    sections: [
      {
        id: "data-fabric",
        label: "The record",
        headline: "Keep the record, the evidence, and the person apart.",
        body:
          "The tools you already use keep the record. Personal notes stay with the person. What happened in this sitting stays with this sitting. What the organization has already decided is shared. Those stay apart. SpineWorkspace does not become a new home for the record.",
      },
      {
        headline: "What business context includes.",
        items: ["Goals", "KPIs", "Customers", "Relationships", "Work", "Decisions", "Evidence", "History", "Outcomes"],
      },
      {
        headline: "Without truth and context together, everyone rebuilds the story.",
        body:
          "Every tool handoff, every AI session, every new team member starts from zero. Bringing the record and the context for this task together lets people and AI work toward the same goals without re-explaining everything.",
      },
      {
        headline: "Connect truth and context—without claiming source authority.",
        body:
          "SpineWorkspace connects to the tools you already use and gathers what this task needs. The CRM, the desk, and the billing tool keep the record. Business Context is where the evidence for this task is brought together.",
      },
      {
        headline: "Proposals do not become business truth.",
        body:
          "Source systems stay authoritative. A proposal does not become truth until a person with authority accepts it.",
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
      headline: "One Work. A view that fits the role.",
      subhead: "Sales, operations, and leadership open the same work and see what they need to decide.",
      primaryCta: { label: "Explore adaptive work", href: "/host-connected-environment" },
    },
    sections: [
      {
        id: "adaptive-autotuner",
        label: "The view for this role",
        headline: "Adapt the environment around the work.",
        body:
          "The workspace changes around the person, the task, and the role. One piece of Work stays the same. The view follows who is looking at it.",
      },
      {
        headline: "One piece of Work.",
        body: "Customer onboarding is the work. The goal, the evidence, and the status stay attached to it.",
      },
      {
        headline: "The view follows the role.",
        body: "A seller sees the next customer step. Operations sees the handoff. Leadership sees the decision that is still waiting.",
      },
      {
        headline: "Twin uses the same Work.",
        body: "Coworker gathers authorized truth and context. Twin prepares a proposal. There is no model catalogue and no second chat.",
      },
      {
        headline: "A person still decides.",
        body: "The status stays Awaiting review until someone with authority accepts the step.",
      },
    ],
    crossLinks: {
      next: { label: "The tools you already use", href: "/host-connected-environment" },
    },
  },

  hostConnectedEnvironment: {
    meta: {
      title: "The tools you already use — Each tool stays itself",
      description:
        "Each tool stays itself. SpineWorkspace shares the record and the evidence for the work. The tools do not have to talk to each other directly.",
      path: "/host-connected-environment",
    },
    hero: {
      badge: "The tools you already use",
      headline: "Your tools stay themselves. The work still moves.",
      subhead:
        "Each tool stays itself. SpineWorkspace shares the record and the evidence for the work. The tools do not have to do each other's jobs.",
      primaryCta: { label: "See how work continues", href: "/continuity" },
    },
    sections: [
      {
        headline: "What stays with the tools you already use.",
        body:
          "The tools, files, conversations, and workflows already open for that person. SpineWorkspace connects to them. It does not replace them.",
      },
      {
        headline: "SpineWorkspace sees what is actually connected.",
        body:
          "It does not assume a connection that is not there. It sees which tools are available and working right now.",
      },
      {
        headline: "Use what is already open.",
        body: "The work uses the tools already open for that person before it reaches for anything else.",
      },
      {
        headline: "Work continues across the tools you already use.",
        body:
          "The record, the evidence, and earlier decisions travel with the work. Something started in one tool can continue in another without rebuilding the story.",
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
      headline: "Humans govern the business. AI helps the business work.",
      subhead: "A review surface for proposals, evidence, and the person who decides.",
      primaryCta: { label: "Read the security overview", href: "/security" },
    },
    sections: [
      {
        headline: "Authority is a person, not a model.",
        body: "Availability is not authority. Twin can propose. A person with the right scope accepts or rejects the proposal. The source system stays the record.",
      },
      {
        headline: "Three memory scopes.",
        body: "Personal memory stays with the person. Session memory stays with that sitting. Organizational memory is shared context for the organization. None of them replaces the record. They are not blended.",
        items: ["Personal memory", "Session memory", "Organizational memory"],
      },
      {
        headline: "Pending review is the default.",
        body: "A proposal stays pending until someone with authority accepts it. Evidence stays linked to the source system.",
      },
      {
        headline: "Controls live on the security page.",
        body: "Encryption, access control, and execution limits are described on Security. This page is about who may decide, and which memory a decision may use.",
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
        headline: "Every tool handoff splits truth from context.",
        body: "Switching between CRM, email, chat, and project tools forces people and AI to reconstruct what happened, why it matters, and what comes next.",
      },
      {
        headline: "Business memory that persists.",
        body: "Business memory, work state, checkpoints, evidence, and outcomes stay connected—so the story survives every session and every host.",
      },
      {
        headline: "Three memory scopes.",
        body: "Personal memory, session memory, and organizational memory are different scopes. A resumed checkpoint carries the work, not a blend of all three.",
        items: ["Personal memory", "Session memory", "Organizational memory"],
      },
    ],
    scenario: {
      headline: "One objective. Two tools. The story continues.",
      body: "A renewal risk shows up in one tool. The team opens another tool to draft the note. SpineWorkspace carries the record and the evidence for that work, so the story does not have to be rebuilt.",
      steps: [
        "Renewal risk shows up in the tool that holds the account",
        "The record and the evidence travel with the work to the tool used for the note",
        "A person accepts, edits, or rejects the proposal",
        "Outcome reconciled in Workbench",
      ],
    },
    crossLinks: {
      next: { label: "See the proof", href: "/proof" },
    },
  },

  proof: {
    meta: {
      title: "Proof — What the product is built to do",
      description: "Illustrative scenarios for host context, governance, and continuity. Not measured customer outcomes.",
      path: "/proof",
    },
    hero: {
      badge: "Proof",
      headline: "What the product actually does.",
      subhead: "Demonstrations show how the product operates. They are not claims of customer outcomes or certifications.",
      primaryCta: { label: "See a workflow", href: "/#renewal-workflow" },
      secondaryCta: { label: "Book a tailored demo", href: "/contact?intent=demo" },
    },
    sections: [],
    scenario: {
      headline: "One piece of work. More than one tool. The story continues.",
      body:
        "Renewal risk shows up in one tool. The record and the evidence travel with the work. A person decides. The original tool is updated. The story does not have to be rebuilt.",
      steps: [
        "Risk signal surfaces with linked evidence",
        "Twin prepares a proposal within governance bounds",
        "Work continues in another tool with the same record and the same evidence",
        "Results observed and reconciled against the source record",
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
      description:
        "Spine InnovLabs is the company. SpineWorkspace is the product — a governed AI workspace where people and AI work from the same truth and context.",
      path: "/company",
    },
    hero: {
      badge: "Spine InnovLabs",
      headline: "We build for the work that gets lost between systems.",
      subhead:
        "Spine InnovLabs is the company. SpineWorkspace is the product: a governed environment where people and AI work from the same truth and context, while the systems teams already depend on remain authoritative.",
      primaryCta: { label: "Speak with the team", href: "/contact" },
      secondaryCta: { label: "See a workflow", href: "/#renewal-workflow" },
    },
    sections: [
      {
        headline: "Why this company exists.",
        body:
          "Truth sits in CRM, billing, and tickets. Context sits in mail, documents, and the people who remember what happened. Spine InnovLabs exists to bring those together — without replacing source systems or removing human authority from consequential work.",
      },
      {
        headline: "What we ship.",
        cards: [
          {
            title: "SpineWorkspace",
            description: "The flagship governed AI workspace — truth, context, proposals, and decisions in one product.",
            href: "/spineworkspace",
          },
          {
            title: "How we work with teams",
            description: "Workflow-led evaluations, design partners, and implementations where your team keeps authority over approvals and source systems.",
            href: "/pricing",
          },
        ],
      },
      {
        headline: "Principles we build by.",
        items: [
          "Truth stays in source systems. Context is assembled for the work and linked to evidence",
          "Accountability — people accept consequential steps; proposals stay proposals until then",
          "Continuity — work resumes across sessions and handoffs without rebuilding the story",
          "Adaptive capability — the workspace follows the goal, role, and evidence in front of the work",
        ],
      },
      {
        headline: "Built in Bengaluru.",
        body:
          "Spine InnovLabs is headquartered in Bengaluru, India. We build for global teams operating across fragmented systems — with security, documentation, and contact paths on this site.",
      },
    ],
    crossLinks: {
      related: [
        { label: "About the founder story", href: "/about" },
        { label: "Security", href: "/security" },
        { label: "Contact", href: "/contact" },
      ],
    },
  },

  developers: {
    meta: {
      title: "Developers — Build with SpineWorkspace",
      description: "Connect the tools, files, and conversations your team already uses.",
      path: "/developers",
    },
    hero: {
      badge: "Developers",
      headline: "Build with SpineWorkspace.",
      subhead: "Connect the tools, files, and conversations your team already uses. The tools keep the record.",
      primaryCta: { label: "Read the docs", href: DOCS_URL },
    },
    sections: [
      {
        headline: "Integration paths.",
        cards: [
          { title: "Integrations", description: "Connect the apps your team already opens.", href: "/platform/integrations" },
          { title: "Tools already open", description: "Use the tools, files, and conversations already in front of that person.", href: DOCS_URL },
          { title: "Use what is already open", description: "The work uses what is already open before it reaches for anything else.", href: "/twin" },
          { title: "Sign-in and permission", description: "Who may sign in, and what that person is allowed to see.", href: DOCS_URL },
          { title: "Reference docs", description: "Full platform and product documentation.", href: DOCS_URL },
        ],
      },
    ],
  },

  platformHub: {
    meta: {
      title: "Platform — The platform behind SpineWorkspace",
      description: "Architecture for workspaces that keep truth in source systems and assemble context for the task.",
      path: "/platform",
    },
    hero: {
      badge: "Platform",
      headline: "The platform behind SpineWorkspace.",
      subhead: "Architecture that keeps truth in source systems and assembles context for the task.",
      primaryCta: { label: "One connection", href: "/platform/spine-fabric" },
    },
    sections: [
      {
        headline: "What the platform is for.",
        cards: [
          { title: "One connection", description: "Connects the tools you already use. The tools keep the record.", href: "/platform/spine-fabric" },
          { title: "How it works", description: "The tools keep the record. The workspace shows the work. A person decides, and an accepted change goes back.", href: "/platform/how-it-works" },
          { title: "Integrations", description: "The apps, files, and conversations already in use.", href: "/platform/integrations" },
          { title: "The tools you already use", description: "Each tool stays itself. They do not have to talk to each other directly.", href: "/host-connected-environment" },
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
      headline: "Controls and limits for the workspace.",
      subhead: "Access, encryption, and what Twin is not allowed to do. Authority and memory scopes live on Governance.",
      primaryCta: { label: "Contact security team", href: "/contact?intent=security" },
    },
    sections: [
      {
        headline: "Governance model.",
        body: "Humans govern the business. AI assists within authority boundaries. Availability of a capability does not grant authority to use it.",
      },
      {
        headline: "Access and authorization.",
        body: "Role-based access, scoped permissions, and the person's permission keep actions within organizational policy.",
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
        body: "Spine assembles context from connected systems without replacing the tools that keep the record. Data handling aligns with your governance requirements.",
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
    title: "The tools you already use",
    description: "Each tool stays itself. SpineWorkspace shares the record and the evidence for the work. The tools do not have to talk to each other directly.",
  },
  {
    title: "What is actually connected",
    description: "SpineWorkspace sees which tools are available and working. It does not assume a connection that is not there.",
  },
  {
    title: "Use what is already there",
    description: "The work uses the tools already open for that person before it reaches for anything else.",
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
    description: "Objectives resume across hosts with the same truth and context.",
  },
];

export const useCaseHubCards: HubCardCopy[] = [
  { title: "Sales", description: "Keep revenue work connected.", href: "/use-cases/sales" },
  { title: "Customer Success", description: "Carry the customer record and the context for each interaction.", href: "/use-cases/customer-success" },
  { title: "Operations", description: "Coordinate work across fragmented systems.", href: "/use-cases/operations" },
  { title: "Founders and Leaders", description: "See goals, KPIs, decisions, and execution together.", href: "/use-cases/founders-and-leaders" },
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
      subhead: "Pipeline and commitments from the record, with the context for this deal—without rebuilding the story every Monday.",
      primaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
    },
    sections: [],
    topics: [
      { title: "Accounts", description: "The account record and the context around it—CRM, email, and support—not scattered tabs." },
      { title: "Pipeline", description: "Deals linked to evidence, activity, and risk signals." },
      { title: "Commitments", description: "What was promised, to whom, and whether it's on track." },
      { title: "Follow-ups", description: "Next actions grounded in the record and the context for this deal, not guesswork." },
      { title: "Deal memory", description: "History and decisions preserved across handoffs." },
      { title: "Next actions", description: "Twin surfaces what matters; you approve what executes." },
      { title: "KPI risk", description: "Revenue and pipeline KPIs connected to live work state." },
    ],
  },
  "customer-success": {
    meta: {
      title: "Customer Success — Carry the customer record and the context for each interaction",
      description: "Health, risk, renewal records, and relationship memory in one workspace.",
      path: "/use-cases/customer-success",
    },
    hero: {
      badge: "Customer Success",
      headline: "Carry the customer record and the context for each interaction.",
      primaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
    },
    sections: [],
    topics: [
      { title: "Health", description: "Usage, engagement, and support signals in one view." },
      { title: "Risk", description: "Early warning with evidence—not renewal-day surprises." },
      { title: "Renewal", description: "Contract terms, history, and commitments linked to the account." },
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
      { title: "Cross-functional processes", description: "Work flows across teams from the same truth and context." },
      { title: "Handoffs", description: "Truth and context survive every transition—not lost in Slack threads." },
      { title: "Execution", description: "Governed actions with approval boundaries." },
      { title: "Evidence", description: "Every step linked to source data and decisions." },
      { title: "Reconciliation", description: "Outcomes checked against the source record." },
    ],
  },
  "founders-and-leaders": {
    meta: {
      title: "Founders and Leaders — Goals, KPIs, and execution together",
      description: "Strategic visibility, decision traceability, and organizational memory.",
      path: "/use-cases/founders-and-leaders",
    },
    hero: {
      badge: "Founders and Leaders",
      headline: "See goals, KPIs, decisions, and execution together.",
      primaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
    },
    sections: [],
    topics: [
      { title: "Strategic visibility", description: "Goals and KPIs connected to live execution—not stale dashboards." },
      { title: "Decision traceability", description: "What was decided, why, and with what evidence." },
      { title: "Organizational memory", description: "Institutional knowledge that compounds over time." },
      { title: "Continuity", description: "The leadership picture survives team changes and tool switches." },
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
      { title: "Human–AI collaboration", description: "Twin prepares proposals from shared truth and context; team members stay aligned." },
      { title: "Work queues", description: "Prioritized work linked to goals and evidence." },
      { title: "Approvals", description: "Governed execution—nothing consequential runs without authority." },
      { title: "Visibility", description: "Everyone sees the same business story." },
      { title: "Continuity", description: "Handoffs and host switches don't reset the narrative." },
    ],
  },
};

export const ecosystemChips = [
  "SaaS apps",
  "tools already open",
  "Plugins",
  "Tools",
  "Skills",
  "Workflows",
  "Automations",
  "Memory",
];

export const homeCopy = {
  meta: {
    title: "SpineWorkspace — Governed AI workspace for operational work",
    description:
      "Connect authorized business signals from the systems you already use. People and AI work from the same evidence. People stay in charge.",
    path: "/",
  },
  hero: {
    badge: "Governed AI workspace for operational work",
    headline: "Your tools hold the records. Bring the context together. Decide the next step.",
    subhead:
      "SpineWorkspace brings authorized records, messages, documents, and recent decisions into one workspace. People and AI work from the same evidence, review proposals, and approve changes to the systems that own the record.",
    primaryCta: { label: "See the renewal workflow", href: "#renewal-workflow" },
    secondaryCta: { label: "Book a tailored demo", href: "/contact?intent=demo" },
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
    body: "SpineWorkspace connects your existing tools so people and AI work from the same truth and the context for this task.",
    cards: [
      { title: "Workbench", description: "Role-aware views of goals, truth, context, and work", href: "/adaptive-workspace" },
      { title: "Twin", description: "Prepares a proposal from governed truth and context, then waits for review", href: "/twin" },
      { title: "SpineWorkspace", description: "Connects systems without claiming source authority", href: "/platform/spine-fabric" },
      { title: "Governance", description: "Humans approve. AI proposes. Nothing executes without authority.", href: "/governance" },
      { title: "Continuity", description: "Work, memory, and evidence persist across sessions and hosts", href: "/continuity" },
    ],
  },
  ecosystem: {
    label: "Your environment",
    headline: "Connect what you already use. Discover what's available.",
    body:
      "SpineWorkspace connects the tools, files, and conversations you already use. It sees what is actually open, and it carries the record and the evidence forward.",
    cta: { label: "See how hosts connect", href: "/host-connected-environment" },
  },
  proofTeaser: {
    label: "Proof",
    headline: "Independent hosts. Shared truth and context. Governed work.",
    body:
      "SpineWorkspace sees which tools are open, keeps the record and the evidence apart, and waits for a person to decide.",
    cta: { label: "See the proof", href: "/proof" },
  },
  finalCta: {
    headline: "Ready to bring truth and context into one workspace?",
    primaryCta: { label: "Book a demo", href: "/contact?intent=demo" },
    secondaryCta: { label: "Explore SpineWorkspace", href: "/spineworkspace" },
  },
};

export const blogCategories = [
  "Product",
  "Business context",
  "Human–AI work",
  "Governance and trust",
  "The tools you already use",
  "Company updates",
];
