import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ResponsiveWorkbenchScreenshot } from "./responsive-workbench-screenshot";
import { WorkspaceBenefits } from "./workspace-benefits";
import { WorkbenchViewExplorer } from "./workbench-view-explorer";

const approach = [
  [
    "Connect the environment.",
    "Discover authorized applications, data, tools, and capabilities while keeping source systems in control of their records.",
  ],
  [
    "Understand the business.",
    "Relate goals, customers, people, decisions, events, work, evidence, and outcomes into usable business context.",
  ],
  [
    "Support human and AI work.",
    "Give each participant the relevant context for their role, responsibilities, and authority.",
  ],
  [
    "Govern consequential actions.",
    "Separate what an AI can propose from what a person or policy has authorized it to do.",
  ],
  [
    "Verify and continue.",
    "Observe execution, reconcile outcomes with source evidence, and carry the verified state forward.",
  ],
];
const technology = [
  {
    name: "Spine Fabric",
    label: "Shared business context",
    body: "A governed context layer relating evidence, entities, goals, signals, decisions, and work across tools.",
    href: "/platform/spine-fabric",
  },
  {
    name: "Spine Workbench",
    label: "The human work surface",
    body: "A workspace that brings the right view and capabilities to the person doing the work.",
    href: "/product/the-adaptive-workspace",
  },
  {
    name: "Spine Twin",
    label: "Context-aware AI",
    body: "An AI counterpart that helps assemble context, interpret signals, prepare work, and propose actions within defined boundaries.",
    href: "/twin",
  },
  {
    name: "Spine Runtime",
    label: "Governed execution",
    body: "The controls for routing authorized actions, observing effects, reconciling results, and preserving an audit trail.",
    href: "/governance",
  },
  {
    name: "Spine Marketplace",
    label: "Connected capabilities",
    body: "A path to approved connectors, MCP servers, tools, and reusable capabilities.",
    href: "/integrations",
  },
  {
    name: "Spine Network",
    label: "Continuity across AI hosts",
    body: "Designed to continue work across compatible AI hosts using the same governed context and work state. Each host independently verifies identity, discovers capabilities, checks authority, invokes permitted tools and reconciles results.",
    href: "/host-connected-environment",
  },
];
const roles = [
  [
    "Customer Success",
    "Understand account health, renewal signals, commitments, stakeholders, and next steps in context.",
    "/solutions/customer-success",
  ],
  [
    "Sales & Revenue Operations",
    "Connect pipeline, customer conversations, commercial commitments, and delivery evidence.",
    "/solutions/revops",
  ],
  [
    "Finance",
    "See how financial events relate to work, ownership, dependencies, and business decisions.",
    "/solutions/finance",
  ],
  [
    "Operations",
    "Coordinate dependencies, approvals, and handoffs across the systems teams already use.",
    "/solutions/operations",
  ],
  [
    "Product & Engineering",
    "Connect customer needs, incidents, roadmap work, and technical evidence.",
    "/solutions/product-engineering",
  ],
  [
    "Leadership",
    "Examine progress toward goals with the underlying decisions and evidence alongside the metrics.",
    "/solutions/founders",
  ],
];
const principles = [
  [
    "Context over fragments.",
    "Relationships between facts matter as much as the facts themselves.",
  ],
  [
    "Evidence over assertion.",
    "Know the source of a conclusion and whether the evidence is current.",
  ],
  [
    "Authority before action.",
    "Available technology does not equal permission to use it.",
  ],
  [
    "People and AI together.",
    "Humans and AI should operate on shared goals and governed context.",
  ],
  [
    "Continuity by design.",
    "Work should remain understandable as people, tools, and AI models change.",
  ],
];
const container = "mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12";
const heading =
  "text-[length:min(clamp(2rem,4vw,3.8rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.045em]";
const body = "text-[length:min(17px,var(--marketing-body-size))] leading-[1.85] text-[#4E607A]";
const button =
  "inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#006FE8] px-6 text-[14px] font-semibold text-white transition-colors hover:bg-[#0055B8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]";
const secondary =
  "inline-flex min-h-12 items-center gap-3 rounded-xl border border-[#006FE8] bg-white px-6 text-[14px] font-semibold text-[#082B5E] transition-colors hover:bg-[#EBF7FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]";
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
      {children}
    </p>
  );
}
function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="mt-7 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]"
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}

export function InnovLabsHome() {
  return (
    <div className="bg-white text-[#082B5E]">
      <section aria-labelledby="company-title" className="relative overflow-hidden border-b border-[#D6E8F8] bg-gradient-to-b from-[#EBF5FE] via-[#F4FAFF] to-white">
        <div
          className={`${container} grid items-center gap-12 py-16 sm:py-24 lg:min-h-[760px] lg:grid-cols-[1.04fr_.96fr] lg:gap-12`}
        >
          <div className="min-w-0">
            <SectionLabel>
              SPINE INNOVTECH · TECHNOLOGY & AI INNOVATION
            </SectionLabel>
            <h1
              id="company-title"
              className="mt-6 max-w-[700px] text-[length:min(clamp(2.75rem,5.2vw,4.85rem),var(--marketing-title-size))] font-bold leading-[1.06] tracking-[-.05em] text-[#032D60]"
            >
              Building the intelligence behind{" "}
              <span className="text-[#006FE8]">connected business.</span>
            </h1>
            <p className={`${body} mt-7 max-w-[590px]`}>
              Business already runs across people, applications, decisions, and
              AI. The challenge is not a lack of tools. It is the missing
              context between them.
            </p>
            <p className={`${body} mt-4 max-w-[590px]`}>
              Spine InnovTech builds the technology that connects those
              pieces—so people and AI can understand what matters, coordinate
              work, and act with clarity and accountability.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/product" className={`${button} shadow-[0_4px_14px_rgba(0,111,232,0.25)] hover:shadow-[0_6px_20px_rgba(0,111,232,0.35)]`}>
                Discover SpineWorkspace{" "}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/platform" className={secondary}>
                Explore our technology
              </Link>
            </div>
            <p className="mt-8 border-t border-[#CBE5FA] pt-5 text-[13px] font-medium text-[#4E607A]">
              Connected systems. Shared context. Governed intelligence.
            </p>
          </div>
          <figure className="mx-auto min-w-0 w-full max-w-[680px]">
            <div className="overflow-hidden rounded-2xl border border-[#CCE3F5] bg-white shadow-[0_22px_70px_rgba(15,70,130,.14)]">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2EEF8] bg-[#F7FAFD] px-4 py-2.5 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                  <span className="ml-2 hidden font-mono text-[11px] font-semibold text-[#5A7391] sm:inline">
                    /workspace/work/founderops/founder-ops
                  </span>
                </div>
                <span className="rounded-full border border-[#CCE3F5] bg-[#EBF5FF] px-2 py-0.5 text-[10px] font-semibold text-[#006FE8]">
                  Live Workbench Views
                </span>
              </div>
              <ResponsiveWorkbenchScreenshot
                src="/images/workbench/founderops/cockpit-20261014.webp"
                alt="Authentic Workbench shell and FounderOps cockpit showing captured QA revenue, deals and customer summaries."
                priority
              />
            </div>
            <figcaption className="mt-3 text-[12px] leading-6 text-[#4E607A]">
              Workbench shell and FounderOps cockpit. Captured QA records; figures are not live customer telemetry.
            </figcaption>
          </figure>
        </div>
      </section>

      <WorkspaceBenefits />

      <WorkbenchViewExplorer initialDomain="founderops" />

      <section
        id="why-we-exist"
        className={`${container} grid gap-10 py-20 lg:grid-cols-[.6fr_1.4fr] lg:gap-20 lg:py-28`}
      >
        <div>
          <SectionLabel>WHY WE EXIST</SectionLabel>
          <TextLink href="/about">Read our story</TextLink>
        </div>
        <div>
          <h2 className={heading}>
            Businesses have more software than shared understanding.
          </h2>
          <p className={`${body} mt-7`}>
            A customer relationship lives in CRM. A problem appears in support.
            A financial change sits in billing. The decision is buried in a
            meeting, a message, or someone's memory.
          </p>
          <p className={`${body} mt-4`}>
            Each system may be accurate on its own. Yet people still spend time
            reconstructing the whole picture, and AI often starts with an
            incomplete one.
          </p>
          <p className={`${body} mt-4`}>
            We believe the next generation of business software should solve
            that problem—not by replacing every application, but by making
            business context usable wherever work happens.
          </p>
        </div>
      </section>

      <section id="how-it-works" className="bg-[#EBF7FF] py-20 lg:py-28">
        <div className={container}>
          <SectionLabel>OUR APPROACH</SectionLabel>
          <h2 className={`${heading} mt-5 max-w-[820px]`}>
            From disconnected information to coordinated work.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {approach.map(([title, description], index) => (
              <article
                key={title}
                className="rounded-2xl border border-[#CBE5FA] bg-white p-6"
              >
                <p className="text-xs font-medium text-[#006FE8]">
                  0{index + 1}
                </p>
                <h3 className="mt-6 text-[length:min(1.25rem,var(--marketing-card-size))]/[var(--tw-leading,1.4)] font-semibold leading-snug tracking-[-.025em]">
                  {title}
                </h3>
                <p className="mt-4 text-[14px] leading-7 text-[#4E607A]">
                  {description}
                </p>
              </article>
            ))}
          </div>
          <TextLink href="/platform/how-it-works">
            See how our technology works
          </TextLink>
        </div>
      </section>

      <section
        id="spine-workspace"
        className={`${container} grid items-start gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28`}
      >
        <div>
          <SectionLabel>INTRODUCING SPINEWORKSPACE</SectionLabel>
          <h2 className={`${heading} mt-5`}>
            One workspace for humans and AI to understand the business and share
            the work.
          </h2>
          <p className={`${body} mt-7`}>
            SpineWorkspace brings goals, priorities, tasks, relationships,
            knowledge, signals, connected applications, and AI assistance into
            one business-context workspace.
          </p>
          <p className={`${body} mt-4`}>
            People see the work they need to do. The AI counterpart gathers and
            assembles relevant context, prepares useful next steps, and works
            within the boundaries they control. Shared work can continue across
            teams, tools, and sessions without requiring everyone to reconstruct
            the same story.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/product" className={button}>
              Explore SpineWorkspace{" "}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/product/how-it-works" className={secondary}>
              View a product walkthrough
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-[#CBE5FA] bg-[#F0F8FF] p-6 sm:p-9">
          <p className="text-[12px] font-semibold uppercase tracking-[.15em] text-[#006FE8]">
            WHAT IT BRINGS TOGETHER
          </p>
          <div className="mt-6 divide-y divide-[#CBE5FA]">
            {[
              ["My Work", "Priorities, tasks, approvals, and next steps."],
              [
                "Business Context",
                "Connected records, relationships, signals, decisions, and evidence.",
              ],
              [
                "Spine Twin",
                "A context-aware AI counterpart for investigation, preparation, and governed assistance.",
              ],
              [
                "Connected Capabilities",
                "Access to authorized applications, connectors, MCP tools, and workflows.",
              ],
              [
                "Continuity",
                "The history and outcomes needed to resume meaningful work.",
              ],
            ].map(([title, description]) => (
              <div key={title} className="py-5 first:pt-0 last:pb-0">
                <h3 className="text-[length:min(1.25rem,var(--marketing-card-size))]/[var(--tw-leading,1.4)] font-semibold">{title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-[#4E607A]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="what-we-build" className="bg-[#F0F8FF] py-20 lg:py-28">
        <div className={container}>
          <SectionLabel>CORE TECHNOLOGY</SectionLabel>
          <h2 className={`${heading} mt-5 max-w-[860px]`}>
            A connected architecture, not another disconnected application.
          </h2>
          <figure className="mt-10">
            <Image
              src="/images/corporate-architecture.png"
              alt="Original architecture illustration connecting the Spine Fabric foundation, human Workbench, Twin assistance, Runtime authorization, and existing source systems through connected capabilities."
              width={1774}
              height={887}
              className="h-auto w-full rounded-2xl"
            />
            <figcaption className="mt-3 text-[12px] leading-6 text-[#4E607A]">
              Conceptual architecture: complementary parts of one governed
              workspace, connected to the systems a business already uses.
            </figcaption>
          </figure>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {technology.map((part) => (
              <Link
                key={part.name}
                href={part.href}
                className="group rounded-2xl border border-[#CBE5FA] bg-white p-7 hover:border-[#006FE8] focus-visible:outline-2 focus-visible:outline-[#006FE8]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#006FE8]">
                      {part.label}
                    </p>
                    <h3 className="mt-3 text-[length:min(1.5rem,var(--marketing-card-size))]/[var(--tw-leading,1.3333333333)] font-semibold tracking-[-.03em]">
                      {part.name}
                    </h3>
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-[#006FE8]"
                    aria-hidden
                  />
                </div>
                <p className="mt-4 max-w-[720px] text-[15px] leading-7 text-[#4E607A]">
                  {part.body}
                </p>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-[13px] leading-6 text-[#4E607A]">
            These are complementary layers of the SpineWorkspace architecture,
            not separate products or independent availability commitments.
          </p>
          <TextLink href="/platform">Explore the architecture</TextLink>
        </div>
      </section>

      <section
        id="human-ai-work"
        className={`${container} grid gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28`}
      >
        <div>
          <SectionLabel>THE HUMAN–AI RELATIONSHIP</SectionLabel>
          <h2 className={`${heading} mt-5`}>
            Intelligence should support judgment, not replace accountability.
          </h2>
        </div>
        <div>
          <p className={body}>
            AI can investigate and prepare. People set goals, make judgments,
            and retain authority over consequential work. Authorized automation
            can execute within policy. The result must be checked against what
            actually happened.
          </p>
          <ol
            aria-label="From understanding to verified work"
            className="mt-7 flex flex-wrap gap-2"
          >
            {[
              "Understand",
              "Prepare",
              "Decide",
              "Authorize",
              "Execute",
              "Verify",
              "Continue",
            ].map((step, i) => (
              <li
                key={step}
                className="rounded-lg border border-[#CBE5FA] bg-[#EBF7FF] px-3 py-2 text-[13px] font-semibold"
              >
                <span className="mr-2 text-[#006FE8]">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
          <p className={`${body} mt-5`}>
            This is how shared business context becomes useful work rather than
            another generated answer.
          </p>
          <TextLink href="/governance">Explore governance and runtime</TextLink>
        </div>
      </section>

      <section id="solutions" className="bg-[#EBF7FF] py-20 lg:py-28">
        <div className={container}>
          <SectionLabel>WHERE THE THINKING APPLIES</SectionLabel>
          <h2 className={`${heading} mt-5 max-w-[850px]`}>
            Built for the reality of cross-functional business work.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {roles.map(([title, description, href]) => (
              <Link
                key={title}
                href={href}
                className="rounded-2xl border border-[#CBE5FA] bg-white p-7 hover:border-[#006FE8] focus-visible:outline-2 focus-visible:outline-[#006FE8]"
              >
                <h3 className="text-[length:min(1.25rem,var(--marketing-card-size))]/[var(--tw-leading,1.4)] font-semibold">{title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#4E607A]">
                  {description}
                </p>
                <ArrowRight
                  className="mt-5 h-4 w-4 text-[#006FE8]"
                  aria-hidden
                />
              </Link>
            ))}
          </div>
          <p className="mt-6 text-[13px] leading-6 text-[#4E607A]">
            These are work domains supported by a shared context model—not
            disconnected software products.
          </p>
          <div className="flex flex-wrap gap-x-8">
            <TextLink href="/solutions">Explore all solutions</TextLink>
            <TextLink href="/use-cases">Explore business use cases</TextLink>
          </div>
        </div>
      </section>

      <section id="principles" className={`${container} py-20 lg:py-28`}>
        <SectionLabel>OUR PRINCIPLES</SectionLabel>
        <h2 className={`${heading} mt-5`}>What guides our engineering.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {principles.map(([title, description], index) => (
            <article
              key={title}
              className="rounded-2xl border border-[#CBE5FA] bg-[#F0F8FF] p-7"
            >
              <p className="text-xs text-[#006FE8]">0{index + 1}</p>
              <h3 className="mt-5 text-[length:min(1.25rem,var(--marketing-card-size))]/[var(--tw-leading,1.4)] font-semibold">{title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-[#4E607A]">
                {description}
              </p>
            </article>
          ))}
        </div>
        <TextLink href="/company">
          Meet the company behind the technology
        </TextLink>
      </section>

      <section id="company" className="bg-[#F0F8FF] py-20 lg:py-28">
        <div className={`${container} grid gap-10 lg:grid-cols-2 lg:gap-20`}>
          <div>
            <SectionLabel>SPINE INNOVTECH</SectionLabel>
            <h2 className={`${heading} mt-5`}>
              Building from India for connected teams everywhere.
            </h2>
          </div>
          <div>
            <p className={body}>
              Spine InnovTech brings enterprise integration experience, AI
              engineering, and a practical understanding of how work crosses
              organizational boundaries. Our starting point is simple: valuable
              information already exists throughout the business. The missing
              piece is a reliable way to bring its meaning into the work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/company" className={button}>
                Meet Spine InnovTech{" "}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/contact" className={secondary}>
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="domain-preview-heading" className="border-y border-[#D6E8F8] bg-[#F0F8FF] py-16">
        <div className={container}>
          <SectionLabel>THE WORKBENCH FOR YOUR ROLE</SectionLabel>
          <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 id="domain-preview-heading" className={heading}>
                The same workspace, with different work in focus.
              </h2>
              <p className={`${body} mt-5`}>
                Sales works with pipeline and deals. Marketing works with campaigns and attribution.
                FounderOps works with strategic decisions. Explore the view definitions drawn from
                the actual Spine Workspace codebase, then choose the domain that fits your work.
              </p>
            </div>
            <Link href="/product#workbench-views" className={button}>
              Explore Workbench views <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section id="insights" className={`${container} py-20 lg:py-28`}>
        <SectionLabel>EXPLORE THE COMPANY AND OUR WORK</SectionLabel>
        <h2 className={`${heading} mt-5`}>
          Ideas, engineering, and work you can inspect.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            [
              "Insights & research",
              "Perspectives on business context, enterprise systems, and governed AI.",
              "/resources",
            ],
            [
              "Portfolio & demonstrations",
              "Illustrative workflows and the architecture behind them.",
              "/portfolio",
            ],
            [
              "For developers",
              "Technical concepts, connected capabilities, and documentation.",
              "/developers",
            ],
          ].map(([title, description, href]) => (
            <Link
              key={title}
              href={href}
              className="rounded-2xl border border-[#CBE5FA] p-7 hover:bg-[#F0F8FF]"
            >
              <h3 className="text-[length:min(1.25rem,var(--marketing-card-size))]/[var(--tw-leading,1.4)] font-semibold">{title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-[#4E607A]">
                {description}
              </p>
              <ArrowRight className="mt-5 h-4 w-4 text-[#006FE8]" aria-hidden />
            </Link>
          ))}
        </div>
        <TextLink href="/site-map">Browse every public website page</TextLink>
      </section>

      <section className="bg-[#EBF7FF] py-20 lg:py-28">
        <div
          className={`${container} flex flex-wrap items-end justify-between gap-10`}
        >
          <div>
            <SectionLabel>BUILDING WHAT COMES NEXT</SectionLabel>
            <h2 className={`${heading} mt-5 max-w-[830px]`}>
              The next generation of work needs a shared understanding of the
              business.
            </h2>
            <p className={`${body} mt-6`}>
              Discover the workspace we're building around that idea.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/product" className={button}>
              Explore SpineWorkspace{" "}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/contact" className={secondary}>
              Contact Spine InnovTech
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
