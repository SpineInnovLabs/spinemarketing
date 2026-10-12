import { Section, SectionHeader } from "./section";
import { getSolutionDomain } from "@/lib/solution-domains";
import { WorkspaceAuthActions } from "./workspace-auth-actions";

export function SolutionDomainFeatures({ slug }: { slug: string }) {
  const domain = getSolutionDomain(slug);
  return (
    <>
      <Section id="domain-features" variant="muted" className="scroll-mt-24">
        <SectionHeader align="left" label={`${domain.name} / Features`} headline={`Features for ${domain.name}.`} body={domain.summary} />
        <WorkspaceAuthActions pathname={`/solutions/${slug}`} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {domain.features.map(([title, detail]) => (
            <article key={title} className="rounded-2xl border border-[#D6E8F8] bg-white p-6 sm:p-7">
              <h3 className="text-[length:min(1.25rem,var(--marketing-card-size))]/[var(--tw-leading,1.4)] font-semibold text-[#082B5E]">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#4E607A]">{detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 border-t border-[#D6E8F8] pt-6">
          <h3 className="text-sm font-semibold text-[#082B5E]">Relevant source context</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {domain.sources.map(source => <li key={source} className="rounded-lg border border-[#D6E8F8] bg-white px-3 py-2 text-sm text-[#4E607A]">{source}</li>)}
          </ul>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#4E607A]">These feature patterns use connected, permitted information. Supported systems and authorized actions are confirmed for your deployment.</p>
        </div>
      </Section>
      <Section id="domain-workflow" className="scroll-mt-24">
        <SectionHeader align="left" label="Example workflow" headline={`${domain.name}: a decision with its context.`} />
        <ol className="mt-10 grid gap-5 lg:grid-cols-3">
          {domain.workflow.map((step, index) => (
            <li key={step} className="rounded-2xl border border-[#D6E8F8] bg-[#F0F8FF] p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0055B8]">0{index + 1} / {['Situation', 'Twin prepares', 'Authorized next step'][index]}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#4E607A]">{step}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
