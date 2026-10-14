import Link from "next/link";
import { ArrowRight, Bot, Cable, CheckCircle2, Database, GitBranch, LockKeyhole, Network, ShieldCheck } from "lucide-react";

const hostStages = [
  { label: "Host identity", detail: "One Auth session, actor, tenant and workspace", icon: LockKeyhole },
  { label: "Capability discovery", detail: "Host-exposed tools or independently authorized Spine bindings", icon: Cable },
  { label: "Authority to use", detail: "One Access permissions, scopes and capability policy", icon: ShieldCheck },
  { label: "Capability invoked", detail: "Safe authorized operation, result and correlation trace", icon: CheckCircle2 },
  { label: "Execution reconciled", detail: "Provider receipt, outcome and timestamp; canonical destination when ingestion is requested", icon: Database },
] as const;

export function SpineNetworkContinuity() {
  return (
    <section id="spine-network" aria-labelledby="spine-network-title" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">SPINE NETWORK</p>
        <h2 id="spine-network-title" className="mt-4 max-w-[1000px] text-[length:min(clamp(2rem,4vw,3.4rem),var(--marketing-heading-size))] font-semibold leading-tight tracking-[-.04em] text-[#082B5E]">
          Change AI hosts without rebuilding the business story.
        </h2>
        <p className="mt-5 max-w-[890px] text-base leading-8 text-[#4E607A]">
          Spine Network is designed to carry authorized business context, work and continuity between compatible AI hosts. Each host connects through its own identity and permissions; one host never inherits another host&apos;s private connectors or credentials.
        </p>
        <div className="mt-9 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1.15fr_auto_1fr]">
          <div className="rounded-2xl border border-[#C9E0F2] bg-[#F2F9FF] p-6">
            <div className="flex items-center gap-3"><Bot className="h-6 w-6 text-[#006FE8]" aria-hidden /><span className="text-sm font-semibold text-[#082B5E]">AI Host A</span></div>
            <p className="mt-5 text-sm font-semibold text-[#082B5E]">Start the work</p>
            <p className="mt-2 text-sm leading-6 text-[#536C86]">Retrieve permitted context, investigate evidence and prepare a work item.</p>
            <p className="mt-5 border-t border-[#D0E4F5] pt-3 text-xs text-[#426A8F]">Independent authorized host binding</p>
          </div>
          <div className="flex items-center justify-center text-[#006FE8]"><ArrowRight className="h-6 w-6 rotate-90 lg:rotate-0" aria-hidden /></div>
          <div className="rounded-2xl border border-[#9FCBF0] bg-[#E5F3FF] p-6">
            <div className="flex items-center gap-3"><Network className="h-6 w-6 text-[#006FE8]" aria-hidden /><span className="text-sm font-semibold text-[#082B5E]">Spine Network + Fabric</span></div>
            <p className="mt-5 text-sm font-semibold text-[#082B5E]">Preserve governed context</p>
            <p className="mt-2 text-sm leading-6 text-[#395C7B]">Keep canonical entity references, evidence, versioned work state, permissions and continuity together.</p>
            <p className="mt-5 border-t border-[#B8DCF5] pt-3 text-xs text-[#32638F]">Context reference · Work item · Provenance</p>
          </div>
          <div className="flex items-center justify-center text-[#006FE8]"><ArrowRight className="h-6 w-6 rotate-90 lg:rotate-0" aria-hidden /></div>
          <div className="rounded-2xl border border-[#C9E0F2] bg-[#F2F9FF] p-6">
            <div className="flex items-center gap-3"><GitBranch className="h-6 w-6 text-[#006FE8]" aria-hidden /><span className="text-sm font-semibold text-[#082B5E]">AI Host B</span></div>
            <p className="mt-5 text-sm font-semibold text-[#082B5E]">Resume with permission</p>
            <p className="mt-2 text-sm leading-6 text-[#536C86]">Re-authorize, retrieve the same governed work context and continue without transferring credentials.</p>
            <p className="mt-5 border-t border-[#D0E4F5] pt-3 text-xs text-[#426A8F]">Separate identity and capability checks</p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3">
          <div><p className="text-xs font-semibold uppercase tracking-[.15em] text-[#006FE8]">CONNECTION EVIDENCE</p><h3 className="mt-2 text-[length:min(clamp(1.6rem,3vw,2.5rem),var(--marketing-heading-size))] font-semibold text-[#082B5E]">Know what is connected, permitted and actually working.</h3></div>
          <Link href="/host-connected-environment" className="inline-flex items-center gap-2 text-sm font-semibold text-[#006FE8] hover:underline">Explore host environments <ArrowRight className="h-4 w-4" aria-hidden /></Link>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {hostStages.map(({label,detail,icon: Icon},i)=>(
            <article key={label} className="rounded-2xl border border-[#D0E3F4] bg-[#FBFDFF] p-5">
              <div className="flex justify-between"><Icon className="h-5 w-5 text-[#006FE8]" aria-hidden /><span className="font-mono text-xs text-[#7A9EBB]">{String(i+1).padStart(2,"0")}</span></div>
              <h4 className="mt-5 text-sm font-semibold text-[#082B5E]">{label}</h4>
              <p className="mt-3 text-xs leading-6 text-[#526C84]">{detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs leading-6 text-[#55738D]">These cards describe required evidence, not verified connection statuses. Host connection does not prove source access; a queue acknowledgement does not prove canonical materialization or authorized retrieval.</p>
        <p className="mt-3 text-xs leading-6 text-[#55738D]">A cross-host continuation must retain the same canonical entity, context version, work item and checkpoint, with source references and a new retrieval trace. Each destination re-evaluates tenant, workspace, subject and capability policy. Private host memory, credentials and privileges do not transfer.</p>
      </div>
    </section>
  );
}
