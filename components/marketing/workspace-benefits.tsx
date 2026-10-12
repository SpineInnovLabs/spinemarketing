import Link from "next/link";
import { ArrowRight, Database, FileSearch, History, ShieldCheck, Sparkles, Users } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "One place to see relevant work",
    body: "Bring priorities, tasks, approvals and related context into a workspace for your role. Spend less effort checking separate applications to understand the work you own.",
    href: "/product/the-adaptive-workspace",
    link: "Explore your work surface",
  },
  {
    icon: Database,
    title: "Connected business context",
    body: "Understand how customers, conversations, tasks and decisions relate across authorized systems. Your existing tools remain the systems of record, with the relevant business picture brought together for review.",
    href: "/integrations",
    link: "Explore connected tools",
  },
  {
    icon: Sparkles,
    title: "A context-aware AI Twin",
    body: "Prepare summaries, investigate issues and propose useful next steps with relevant business context. Review the Twin’s work with the people responsible for the decision.",
    href: "/twin",
    link: "Meet your Twin",
  },
  {
    icon: History,
    title: "Work continuity",
    body: "Keep the history, decisions and outcomes needed to resume a task or hand it over. Give the next person a clearer starting point without repeatedly reconstructing the same story.",
    href: "/continuity",
    link: "Explore work continuity",
  },
  {
    icon: FileSearch,
    title: "Evidence-backed decisions",
    body: "Inspect the sources behind a recommendation and keep missing or stale context visible. Review the evidence alongside the decision you need to make.",
    href: "/business-context",
    link: "Explore business context",
  },
  {
    icon: ShieldCheck,
    title: "Controlled execution",
    body: "Use your Twin to gather context and prepare proposals. Check the evidence and the authority to act, then verify what happened. People retain judgment and accountability for consequential decisions.",
    href: "/governance",
    link: "Explore governed decisions",
  },
];

export function WorkspaceBenefits({ detailed = false }: { detailed?: boolean }) {
  const visibleBenefits = detailed ? benefits : [benefits[0], benefits[2], benefits[5]];
  return (
    <section
      id={detailed ? "benefits" : "why-spineworkspace"}
      aria-labelledby="workspace-benefits-title"
      className="bg-white py-16 text-[#082B5E] sm:py-20"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">
          Why choose SpineWorkspace
        </p>
        <div className="mt-5"><h2
          id="workspace-benefits-title"
          className="max-w-[760px] text-[length:var(--marketing-heading-size)] font-semibold leading-[1.2] tracking-[-.03em]"
        >
          Less time piecing work together. More context for moving it forward.
        </h2></div>
        <p className="mt-5 max-w-[760px] text-[length:var(--marketing-body-size)] leading-[1.85] text-[#4E607A]">
          When work crosses CRM, support, finance, and team conversations,
          SpineWorkspace is designed to connect the context around it. You get a place to
          understand the situation, prepare the next step with AI, and review it
          with the people responsible.
        </p>
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {visibleBenefits.map(({ icon: Icon, title, body, href, link }) => (
            <article key={title} className="rounded-2xl border border-[#D7E4F3] bg-[#F0F8FF] p-6 sm:p-7">
              <Icon className="h-6 w-6 text-[#006FE8]" aria-hidden />
              <div className="mt-5"><h3 className="text-[length:var(--marketing-card-size)] font-semibold leading-[1.4] tracking-[-.025em]">
                {title}
              </h3></div>
              <p className="mt-4 text-[14px] leading-7 text-[#4E607A]">{body}</p>
              <Link
                href={href}
                className="mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]"
              >
                {link} <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3"><Link
          href="/pricing"
          className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#006FE8] px-5 text-sm font-semibold text-[#082B5E] transition-colors hover:bg-[#EBF7FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]"
        >
          Explore subscriptions and pricing <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
        </Link>
        {detailed ? <Link href="#features" className="inline-flex min-h-12 items-center gap-2 rounded-sm px-3 text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">Explore the features <ArrowRight className="h-4 w-4 shrink-0" aria-hidden /></Link> : <Link href="/product#benefits" className="inline-flex min-h-12 items-center gap-2 rounded-sm px-3 text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">See all six product benefits <ArrowRight className="h-4 w-4 shrink-0" aria-hidden /></Link>}
        </div>
      </div>
    </section>
  );
}
