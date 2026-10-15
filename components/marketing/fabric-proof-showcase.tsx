import { ArrowRight, Cable, CheckCircle2, Database, LockKeyhole, Network, ShieldCheck } from "lucide-react";

const views = [
  { domain: "Account Success", signal: "Renewal review", evidence: "Support incident + renewal date", action: "Review account health" },
  { domain: "Finance", signal: "Payment exception", evidence: "Invoice + contract commitment", action: "Check commercial exposure" },
  { domain: "Engineering", signal: "Customer-impacting incident", evidence: "Incident + affected feature", action: "Prepare incident update" },
] as const;

const connectionStages = [
  { icon: LockKeyhole, title: "Host authorized", proof: "Host identity, principal and workspace binding" },
  { icon: Cable, title: "Tools discovered", proof: "Host capability list, resource types and scopes" },
  { icon: ShieldCheck, title: "Source permission verified", proof: "Connection binding and current grant status" },
  { icon: CheckCircle2, title: "Capability invoked", proof: "Authorized read, provider reference and invocation trace" },
  { icon: Database, title: "Execution reconciled", proof: "Outcome and timestamp; canonical lineage and retrieval receipt when ingestion is requested" },
] as const;

export function FabricProofShowcase() {
  return (
    <section id="fabric-proof" aria-labelledby="fabric-proof-title" className="bg-[#F0F8FF] py-16 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">ONE CONTEXT · MULTIPLE WORKSPACES</p>
        <h2 id="fabric-proof-title" className="mt-4 max-w-[950px] text-[length:min(clamp(2rem,4vw,3.3rem),var(--marketing-heading-size))] font-semibold leading-tight tracking-tight text-[#082B5E]">
          One customer situation, visible where the work happens.
        </h2>
        <p className="mt-4 max-w-[870px] text-base leading-8 text-[#4E607A]">
          Example: a fictional customer has an upcoming renewal, an unpaid invoice and an active engineering incident. Each authorized team gets a role-specific view of related business context, rather than rebuilding the account story in a separate silo.
        </p>
        <div className="mt-7 rounded-3xl border border-[#CBE5FA] bg-white p-5 shadow-sm sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E0EEF9] pb-4">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#082B5E]"><Network className="h-5 w-5 text-[#006FE8]" aria-hidden /> Shared account anchor · Northstar Logistics</div>
            <span className="rounded-full bg-[#EBF7FF] px-3 py-1 text-xs font-semibold text-[#245EA9]">Shared business context</span>
          </div>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {views.map((v, i) => (
              <article key={v.domain} className="rounded-2xl border border-[#D3E5F4] bg-[#FAFDFF] p-5">
                <div className="flex justify-between"><p className="text-xs font-semibold uppercase tracking-[.13em] text-[#006FE8]">{v.domain}</p><span className="font-mono text-xs text-[#87A7C4]">0{i + 1}</span></div>
                <h3 className="mt-5 text-xl font-semibold text-[#082B5E]">{v.signal}</h3>
                <p className="mt-3 text-sm leading-6 text-[#4E607A]">{v.evidence}</p>
                <p className="mt-5 flex items-center gap-2 border-t border-[#E2EEF9] pt-4 text-sm font-semibold text-[#23609B]"><ArrowRight className="h-4 w-4" aria-hidden /> {v.action}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-14">
          <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">HOST CONNECTION PROOF</p>
          <h3 className="mt-3 max-w-[850px] text-[length:min(clamp(1.6rem,3vw,2.5rem),var(--marketing-heading-size))] font-semibold text-[#082B5E]">A green connection badge is not enough.</h3>
          <p className="mt-3 max-w-[830px] text-sm leading-7 text-[#4E607A]">The intended Workbench connection experience separates an authorized AI host from discovered provider tools and actual canonical data readiness. The following cards describe the evidence we expect the runtime to show.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {connectionStages.map(({ icon: Icon, title, proof }, i) => (
              <article key={title} className="rounded-2xl border border-[#CBE5FA] bg-white p-5">
                <div className="flex items-center justify-between"><Icon className="h-5 w-5 text-[#006FE8]" aria-hidden /><span className="font-mono text-xs text-[#87A7C4]">0{i + 1}</span></div>
                <h4 className="mt-5 text-base font-semibold text-[#082B5E]">{title}</h4>
                <p className="mt-3 text-xs leading-6 text-[#4E607A]">{proof}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs leading-6 text-[#5F7692]">Host-connection verification requires real grants, activated capabilities, ingestion lineage and authorized retrieval. These stages describe the intended evidence contract, not verified connections.</p>
        </div>
      </div>
    </section>
  );
}
