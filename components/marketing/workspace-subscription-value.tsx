import Link from "next/link";
import { ArrowRight } from "lucide-react";

const comparisons = [
  ["Your CRM, support, finance and conversation tools", "Relationships and business context across authorized systems, while each source remains authoritative."],
  ["Your existing AI tools and hosts", "Shared business context and continuity that can carry forward across work and sessions."],
  ["Your task and project tools", "Priorities, ownership, related evidence and the history behind the next step."],
  ["AI-generated summaries", "Preparation from relevant context, with proposals available for people to review."],
  ["Application permissions", "Authority, approvals and execution evidence beside the connected work."],
];
const measures = [
  ["Context-assembly time", "How long it takes to gather the records and evidence for a review."],
  ["Application switching", "How many tool changes are needed to understand and prepare the same task."],
  ["Time to a useful next action", "How long it takes to reach a next step the responsible person can review."],
  ["Continuity when returning to work", "How much history a person needs to reconstruct after resuming or receiving a task."],
  ["Acceptance of Twin recommendations", "Which proposals people accept, revise or reject, and the reasons for those decisions."],
];

export function WorkspaceSubscriptionValue() {
  return (
    <>
      <section id="why" aria-labelledby="workspace-subscription-title" className="bg-white py-16 text-[#082B5E] sm:py-20">
        <div className="mx-auto max-w-[1220px] px-5 sm:px-8 lg:px-12">
          <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">Why subscribe?</p>
          <div className="mt-5"><h2 id="workspace-subscription-title" className="max-w-[760px] text-[length:var(--marketing-heading-size)] font-semibold leading-[1.2] tracking-[-.03em]">Keep shared understanding working as your business evolves.</h2></div>
          <p className="mt-5 max-w-[760px] text-[length:var(--marketing-body-size)] leading-[1.85] text-[#4E607A]">The subscription proposition is shared business understanding, continuity and governed coordination. Connect the meaning around existing work, prepare the next step with AI, and carry the decision and its outcome into the next review.</p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#D7E4F3]">
            <table className="w-full border-collapse text-left text-sm leading-7">
              <caption className="sr-only">How SpineWorkspace complements your existing applications and AI tools</caption>
              <thead className="bg-[#F0F8FF] text-[#082B5E]"><tr><th scope="col" className="w-2/5 px-4 py-4 font-semibold sm:px-6">What you already use</th><th scope="col" className="px-4 py-4 font-semibold sm:px-6">What SpineWorkspace adds</th></tr></thead>
              <tbody>
                {comparisons.map(([existing, value]) => <tr key={existing} className="border-t border-[#D7E4F3]"><th scope="row" className="px-4 py-4 align-top font-medium text-[#082B5E] sm:px-6">{existing}</th><td className="px-4 py-4 align-top text-[#4E607A] sm:px-6">{value}</td></tr>)}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-[#4E607A]">Your existing application subscriptions remain separate. Confirm supported connections, AI-provider costs and included capabilities for your use case.</p>
          <Link href="/pricing" className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#006FE8] px-5 text-sm font-semibold text-white hover:bg-[#0055B8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">Discuss subscriptions and pricing <ArrowRight className="h-4 w-4" aria-hidden /></Link>
        </div>
      </section>
      <section id="evaluate" aria-labelledby="workspace-evaluation-title" className="bg-[#F0F8FF] py-16 text-[#082B5E] sm:py-20">
        <div className="mx-auto max-w-[1220px] px-5 sm:px-8 lg:px-12">
          <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">Measure the value in your work</p>
          <div className="mt-5"><h2 id="workspace-evaluation-title" className="max-w-[760px] text-[length:var(--marketing-heading-size)] font-semibold leading-[1.2] tracking-[-.03em]">What changes when your work has context?</h2></div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-[#D7E4F3] bg-white p-6">
              <h3 className="text-[length:var(--marketing-card-size)] font-semibold leading-[1.4]">Your current process</h3>
              <p className="mt-4 text-sm leading-7 text-[#4E607A]">Find the relevant information, compare records, reconstruct history, then determine the next action.</p>
            </article>
            <article className="rounded-2xl border border-[#B7D6F8] bg-white p-6">
              <h3 className="text-[length:var(--marketing-card-size)] font-semibold leading-[1.4]">The intended SpineWorkspace workflow</h3>
              <p className="mt-4 text-sm leading-7 text-[#4E607A]">Start from an assembled, evidence-linked view, review proposed next steps, and preserve the outcome for future work.</p>
            </article>
          </div>
          <p className="mt-6 max-w-[760px] text-[length:var(--marketing-body-size)] leading-[1.85] text-[#4E607A]">Evaluate one real workflow with your team. Record a baseline for the same task and source systems, then compare these measures during the evaluation. Use the results to judge the value against subscription and setup costs.</p>
          <dl className="mt-8 grid gap-5 md:grid-cols-2">
            {measures.map(([metric, description]) => <div key={metric} className="rounded-2xl border border-[#D7E4F3] bg-white p-6"><dt className="text-sm font-semibold leading-7">{metric}</dt><dd className="mt-2 text-sm leading-7 text-[#4E607A]">{description}</dd></div>)}
          </dl>
          <p className="mt-5 text-sm leading-7 text-[#4E607A]">These are evaluation measures, not published customer results or guaranteed savings.</p>
          <Link href="/contact?intent=demo" className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#006FE8] bg-white px-5 text-sm font-semibold hover:bg-[#EBF7FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">Review a workflow with us <ArrowRight className="h-4 w-4" aria-hidden /></Link>
        </div>
      </section>
    </>
  );
}
