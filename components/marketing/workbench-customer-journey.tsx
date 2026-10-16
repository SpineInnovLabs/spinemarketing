"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stages = [
  { title: "Enter your workspace", action: "Start from the website or an AI host.", detail: "One Auth resolves the person, organization and workspace membership. Both entry paths converge on the same authorized workspace.", continuity: "Your identity, workspace and role.", evidence: "E2E-01–05, E2E-17" },
  { title: "Connect permitted context", action: "Find the capability the work needs.", detail: "The journey resolves a host connection and a Google Workspace capability. Discovery and permission checks determine what the participant may use.", continuity: "The permitted source and capability binding.", evidence: "E2E-06–07" },
  { title: "Turn a request into work", action: "Understand the renewal follow-up.", detail: "An inbound request for enterprise renewal and SLA confirmation becomes an Inbox item and a persistent work item, linked to its source message and business objective.", continuity: "The source reference, goal and work item.", evidence: "E2E-08–10" },
  { title: "Review the proposed action", action: "Keep human authority beside the proposal.", detail: "The Twin prepares a bounded follow-up plan. The responsible person reviews the proposed action and the applicable approval requirement before execution.", continuity: "The plan, decision and approval record.", evidence: "E2E-11–12" },
  { title: "Check the outcome", action: "Follow execution with reconciliation.", detail: "The governed execution path produces an audit record and a verifiable receipt. The journey checks the receipt rather than treating a dispatch acknowledgement as the whole result.", continuity: "The execution reference, receipt and audit trail.", evidence: "E2E-13–14" },
  { title: "Continue across hosts", action: "Recover the same work with permission.", detail: "A second host retrieves the persisted work through Spine Network. Tenant isolation and entry-path checks accompany the continuation, without transferring private credentials.", continuity: "The same work item and its authorized context.", evidence: "E2E-15–18" },
] as const;

export function WorkbenchCustomerJourney() {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  return (
    <div id="workbench-customer-journey" className="mt-8 scroll-mt-24">
      <h3 className="text-xl font-semibold sm:text-2xl">From a customer request to continuing work.</h3>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-[#4E607A]">Follow the renewal and SLA follow-up journey implemented in the application: enter, assemble context, prepare a proposal, review authority, check the outcome and resume the work.</p>
      <div className="mt-6 grid gap-4 lg:grid-cols-[280px_minmax(0,1fr)]">
        <ol className="space-y-2" aria-label="Customer journey stages">
          {stages.map((item, index) => (
            <li key={item.title}><button type="button" aria-current={index === active ? "step" : undefined} onClick={() => setActive(index)} className={`flex min-h-12 w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8] ${index === active ? "border-[#006FE8] bg-[#006FE8] text-white" : "border-[#CCE3F5] bg-white text-[#082B5E] hover:bg-[#EAF4FF]"}`}><span aria-hidden>{String(index + 1).padStart(2, "0")}</span>{item.title}</button></li>
          ))}
        </ol>
        <article className="rounded-2xl border border-[#D7E4F3] bg-white p-6 sm:p-7" aria-live="polite" aria-atomic="true">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#006FE8]">{stage.title}</p>
          <h4 className="mt-4 text-[length:var(--marketing-card-size)] font-semibold leading-snug">{stage.action}</h4>
          <p className="mt-4 text-sm leading-7 text-[#4E607A]">{stage.detail}</p>
          <p className="mt-6 border-t border-[#E2EEF8] pt-4 text-sm leading-7 text-[#4E607A]"><strong className="font-semibold text-[#082B5E]">What carries forward:</strong> {stage.continuity}</p>
          <Link href="/host-connected-environment" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#006FE8] hover:underline">Explore governed continuity <ArrowRight className="h-4 w-4" aria-hidden /></Link>
        </article>
      </div>
      <p className="mt-4 text-xs leading-6 text-[#596F89]">Based on the October 15 repository journey report, which records 18 passing steps. The verification script combines deployed-service checks with a constructed email and controlled provider adapter. This walkthrough describes that recorded test scope; it does not establish live customer results or independent provider delivery.</p>
    </div>
  );
}
