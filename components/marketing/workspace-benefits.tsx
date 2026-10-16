import Link from "next/link";
import { ArrowRight, Database, Layers3, PanelsTopLeft } from "lucide-react";

const benefits = [
  {
    icon: Database,
    title: "Governed business context",
    body: "Connect authorized records and retrieve the evidence for the task. Keep source permissions and lineage with the context. Your existing tools remain the systems of record.",
    href: "/business-context",
    link: "Explore business context",
  },
  {
    icon: Layers3,
    title: "One Fabric across 13 domains",
    body: "Give Sales, Finance, Account Success and other teams their own views of shared business context, with access appropriate to each role.",
    href: "/product#workbench-views",
    link: "See the domain views",
  },
  {
    icon: PanelsTopLeft,
    title: "Editable dashboards and Canvas",
    body: "Edit record drafts from operational dashboards with KPIs and actions. Compose Canvas documents, tables and graphs from reusable UI Library blocks.",
    href: "/product#workbench-views",
    link: "Explore Workbench views",
  },
];

const solutions = [
  ["Customer Success", "Prepare renewals with account health, commitments and service history.", "/solutions/customer-success"],
  ["Sales & Revenue Operations", "Review pipeline, conversations and next steps in one account context.", "/solutions/revops"],
  ["Finance", "Review financial records with the decisions and work behind them.", "/solutions/finance"],
  ["Operations", "Keep dependencies, approvals and handoffs visible across teams.", "/solutions/operations"],
  ["Product & Engineering", "Connect customer feedback, incidents and delivery work.", "/solutions/product-engineering"],
  ["Leadership", "Review goals, progress and decisions with source evidence.", "/solutions/founders"],
] as const;

export function WorkspaceBenefits({ detailed = false }: { detailed?: boolean }) {
  return (
    <section
      id={detailed ? "benefits" : "what-we-build"}
      aria-labelledby="workspace-benefits-title"
      className="scroll-mt-24 bg-white py-16 text-[#082B5E] sm:py-20"
    >
      <div id={detailed ? "features" : "why-spineworkspace"} className="mx-auto max-w-[1320px] scroll-mt-24 px-5 sm:px-8 lg:px-12">
        <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">What you get</p>
        <h2 id="workspace-benefits-title" className="mt-5 max-w-[760px] text-[length:var(--marketing-heading-size)] font-semibold leading-[1.2] tracking-[-.03em]">
          Shared context. Views built for your role.
        </h2>
        <p className="mt-5 max-w-[760px] text-[length:var(--marketing-body-size)] leading-[1.85] text-[#4E607A]">
          Bring the information behind the work into a workspace your team can use.
        </p>
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, body, href, link }) => (
            <article key={title} className="rounded-2xl border border-[#D7E4F3] bg-[#F0F8FF] p-6 sm:p-7">
              <Icon className="h-6 w-6 text-[#006FE8]" aria-hidden />
              <h3 className="mt-5 text-[length:var(--marketing-card-size)] font-semibold leading-[1.4] tracking-[-.025em]">{title}</h3>
              <p className="mt-4 text-[14px] leading-7 text-[#4E607A]">{body}</p>
              <Link href={href} className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">
                {link} <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs leading-6 text-[#596F89]">Available views depend on connected sources, your role and authorized capabilities.</p>
      </div>
    </section>
  );
}

export function WorkspaceSolutions() {
  return (
    <section id="solutions" aria-labelledby="workspace-solutions-title" className="scroll-mt-24 bg-[#EBF7FF] py-16 text-[#082B5E] sm:py-20">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">Solutions for your team</p>
        <h2 id="workspace-solutions-title" className="mt-5 max-w-[850px] text-[length:var(--marketing-heading-size)] font-semibold leading-[1.2] tracking-[-.03em]">Built for the work your team repeats.</h2>
        <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map(([title, description, href]) => (
            <Link key={title} href={href} className="rounded-2xl border border-[#CBE5FA] bg-white p-6 hover:border-[#006FE8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">
              <h3 className="text-[length:var(--marketing-card-size)] font-semibold leading-[1.4]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#4E607A]">{description}</p>
              <ArrowRight className="mt-5 h-4 w-4 text-[#006FE8]" aria-hidden />
            </Link>
          ))}
        </div>
        <Link href="/solutions" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">Explore all solutions <ArrowRight className="h-4 w-4" aria-hidden /></Link>
      </div>
    </section>
  );
}
