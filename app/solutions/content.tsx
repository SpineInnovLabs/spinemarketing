import Link from "next/link";
import { ArrowRight, ArrowUpRight, Layers3 } from "lucide-react";
import { PUBLIC_SOLUTIONS, marketingPathForSolution } from "@/lib/solution-taxonomy";
import { SOLUTION_DOMAINS, getSolutionDomain } from "@/lib/solution-domains";

export function SolutionsContent() {
  const functionSlugs = new Set(PUBLIC_SOLUTIONS.map(solution => solution.slug));
  const specialistSolutions = Object.entries(SOLUTION_DOMAINS).filter(([slug]) => !functionSlugs.has(slug));
  return (
    <>
      <section className="relative overflow-hidden bg-[#F0F8FF] px-5 pb-24 pt-40 text-[#052858] sm:px-8 lg:pb-32 innovtech-reference-surface">
        <div className="pointer-events-none absolute -right-20 -top-40 h-[550px] w-[550px] rounded-full bg-[#2F66C7]/25 blur-[100px]" aria-hidden />
        <div className="relative mx-auto max-w-[1220px]">
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#4C5C73]">Solutions / Spine InnovTech</p>
          <h1 className="mt-7 max-w-[1000px] text-[length:min(clamp(3.2rem,6vw,6.3rem),var(--marketing-title-size))] font-semibold leading-[1.06] tracking-[-.065em]">
            One business context. <span className="text-[#0072E5]">Different work.</span>
          </h1>
          <p className="mt-8 max-w-[790px] text-[length:min(18px,var(--marketing-body-size))] leading-[1.85] text-[#4C5C73]">
            Finance, customer success, product and leadership need different perspectives, not disconnected versions of business truth. Explore how the same contextual workspace can support different responsibilities, goals and decisions.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="/product" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#B0CEFF] px-6 text-sm font-semibold text-[#102B51] transition hover:bg-white">
              Explore SpineWorkspace <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <Link href="/contact" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#006FE8] bg-white px-6 text-sm font-semibold text-[#082B5E] transition hover:bg-[#EBF7FF]">
              Discuss your use case <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#F7F9FC] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#2461AE]">By role and function</p>
          <h2 className="mt-5 max-w-[840px] text-[length:min(clamp(2.4rem,4.6vw,4.3rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.055em] text-[#102D55]">Relevant views. Shared context. Clear authority.</h2>
          <p className="mt-6 max-w-[810px] text-[16px] leading-[1.85] text-[#536A85]">
            The categories below describe potential work lenses and solution patterns, not a promise that every connected provider or role-specific projection is deployed for every customer.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {PUBLIC_SOLUTIONS.map((solution, index) => (
              <article key={solution.id} className="flex h-full flex-col rounded-[24px] border border-[#D8E5F2] bg-white p-7 transition-colors hover:border-[#A9C6EA] sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E9F2FF] text-[#2465B8]"><Layers3 className="h-5 w-5" aria-hidden /></span>
                  <span className="font-mono text-xs text-[#7A98C4]">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-9 text-[length:min(24px,var(--marketing-card-size))] font-semibold tracking-[-.04em] text-[#14345E]">{solution.name}</h3>
                <p className="mt-4 flex-1 text-[15px] leading-[1.8] text-[#576E88]">{getSolutionDomain(solution.slug).summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-[#4E607A]">
                  {getSolutionDomain(solution.slug).features.slice(0, 2).map(([title]) => <li key={title} className="border-t border-[#D6E8F8] pt-2">{title}</li>)}
                </ul>
                <Link href={marketingPathForSolution(solution.slug)} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#2464AF] hover:underline">
                  Explore {solution.name} features <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-[#D6E8F8] bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0055B8]">By industry and operating model</p>
          <h2 className="mt-5 text-[length:min(2.25rem,var(--marketing-heading-size))]/[var(--tw-leading,1.1111111111)] font-semibold tracking-tight text-[#082B5E]">Workflows for the way your business operates.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {specialistSolutions.map(([slug, domain]) => (
              <article key={slug} className="flex flex-col rounded-2xl border border-[#D6E8F8] bg-[#F0F8FF] p-7">
                <h3 className="text-[length:min(1.5rem,var(--marketing-card-size))]/[var(--tw-leading,1.3333333333)] font-semibold text-[#082B5E]">{domain.name}</h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-[#4E607A]">{domain.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-[#4E607A]">{domain.features.slice(0, 2).map(([title]) => <li key={title} className="border-t border-[#D6E8F8] pt-2">{title}</li>)}</ul>
                <Link href={`/solutions/${slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0055B8] hover:underline">Explore {domain.name} features <ArrowRight className="h-4 w-4" aria-hidden /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-[#D8E4F1] bg-[#EAF2FD] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-[1220px] items-center gap-9 lg:grid-cols-[1.25fr_.75fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#2461AE]">One workspace</p><h2 className="mt-5 text-[length:min(clamp(2.3rem,4vw,4rem),var(--marketing-heading-size))] font-semibold leading-[1.12] tracking-[-.05em] text-[#102D55]">Different roles shouldn't need different truths.</h2><p className="mt-6 text-[16px] leading-[1.8] text-[#546C87]">Capabilities and views adapt to the work, while business context, policy and authority remain governed.</p></div>
          <Link href="/company" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#153867] px-6 text-sm font-semibold text-white transition hover:bg-[#2F61A5]">Why Spine InnovTech <ArrowRight className="h-4 w-4" aria-hidden /></Link>
        </div>
      </section>
    </>
  );
}
