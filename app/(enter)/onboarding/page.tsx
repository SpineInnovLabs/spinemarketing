"use client";

import { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/workspace/app-shell";
import { useDraft } from "@/components/workspace/draft-store";
import { canLaunch, readiness, type ConnectionState } from "@/lib/workspace-draft";
import { PUBLIC_SOLUTIONS } from "@/lib/solution-taxonomy";
import { EvidencePanel } from "@/components/marketing/enterprise";

export default function OnboardingPage() {
  const router = useRouter();
  const { draft, hydrated, save } = useDraft();
  const ready = readiness(draft);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!canLaunch(draft)) return;
    save({ ...draft, launched: true });
    router.push("/workspace");
  }

  if (!hydrated) {
    return <AppShell title="Setup"><p className="text-[14px] text-[#444]">Loading local draft…</p></AppShell>;
  }

  if (!draft.email) {
    return (
      <AppShell title="Setup" subtitle="Sign in is required before setup.">
        <EmptyLink href="/login" label="Go to sign in" body="No local draft email is stored in this browser." />
      </AppShell>
    );
  }

  return (
    <AppShell title="Prepare the workspace" subtitle={`${draft.email} · local setup draft`}>
      <form onSubmit={onSubmit} className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <div className="space-y-4">
          <section className="rounded-md border border-[#E5E5E5] bg-white p-5">
            <h2 className="text-[16px] font-semibold text-[#032D60]">1. Operating scope</h2>
            <p className="mt-1 text-[13px] text-[#444]">Choose the business area this workspace should open on. This does not provision that host.</p>
            <label className="mt-4 block text-[13px] font-semibold text-[#032D60]" htmlFor="org">Organization</label>
            <input
              id="org"
              value={draft.organization}
              onChange={(event) => save({ ...draft, organization: event.target.value })}
              className="mt-1 h-10 w-full rounded-md border border-[#C9C9C9] px-3 text-[14px]"
            />
            <label className="mt-4 block text-[13px] font-semibold text-[#032D60]" htmlFor="area">Business area</label>
            <select
              id="area"
              value={draft.solutionSlug}
              onChange={(event) => save({ ...draft, solutionSlug: event.target.value })}
              className="mt-1 h-10 w-full rounded-md border border-[#C9C9C9] bg-white px-3 text-[14px]"
            >
              <option value="">Select an area</option>
              {PUBLIC_SOLUTIONS.map((solution) => (
                <option key={solution.id} value={solution.slug}>{solution.name}</option>
              ))}
            </select>
          </section>

          <section className="rounded-md border border-[#E5E5E5] bg-white p-5">
            <h2 className="text-[16px] font-semibold text-[#032D60]">2. Source connection</h2>
            <p className="mt-1 text-[13px] leading-[1.55] text-[#444]">
              Connectors are unavailable. You can record that a source is still waiting, but this screen will not show a successful connection.
            </p>
            <p className="mt-3 text-[13px] font-semibold text-[#032D60]">Status: {labelFor(draft.connection)}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button type="button" onClick={() => save({ ...draft, connection: "waiting" })} className="h-9 rounded-md border border-[#C9C9C9] px-3 text-[13px] font-semibold text-[#032D60]">
                Mark waiting for connection
              </button>
              <button type="button" onClick={() => save({ ...draft, connection: "unavailable" })} className="h-9 rounded-md border border-[#C9C9C9] px-3 text-[13px] font-semibold text-[#032D60]">
                Keep unavailable
              </button>
            </div>
          </section>

          <section className="rounded-md border border-[#E5E5E5] bg-white p-5">
            <h2 className="text-[16px] font-semibold text-[#032D60]">3. Launch objective</h2>
            <p className="mt-1 text-[13px] text-[#444]">What should humans and the Twin work on first? This stays in the local draft.</p>
            <textarea
              value={draft.objective}
              onChange={(event) => save({ ...draft, objective: event.target.value })}
              className="mt-3 h-24 w-full rounded-md border border-[#C9C9C9] px-3 py-2 text-[14px]"
            />
          </section>

          <section className="rounded-md border border-[#E5E5E5] bg-white p-5">
            <h2 className="text-[16px] font-semibold text-[#032D60]">4. Human and AI boundary</h2>
            <label className="mt-3 flex items-start gap-3 text-[14px] leading-[1.5] text-[#181818]">
              <input
                type="checkbox"
                checked={draft.collaborationAcknowledged}
                onChange={(event) => save({ ...draft, collaborationAcknowledged: event.target.checked })}
                className="mt-1"
              />
              The Twin may propose from business context. People with authority approve consequential actions. Proposals do not become truth on their own.
            </label>
          </section>
        </div>

        <div className="space-y-4">
          <EvidencePanel
            title="Readiness"
            items={[
              { label: "Identity", value: ready.identity ? "Draft email stored locally" : "Missing" },
              { label: "Scope", value: ready.scope ? "Area and organization set" : "Incomplete" },
              { label: "Objective", value: ready.objective ? "Captured" : "Missing" },
              { label: "Collaboration", value: ready.collaboration ? "Acknowledged" : "Not confirmed" },
              { label: "Source", value: labelFor(draft.connection) },
              { label: "Provisioning", value: "Pending — no workspace service" },
            ]}
          />
          <button
            type="submit"
            disabled={!canLaunch(draft)}
            className="h-10 w-full rounded-md bg-[#0176D3] text-[14px] font-semibold text-white hover:bg-[#0B5CAB] disabled:cursor-not-allowed disabled:bg-[#C9C9C9]"
          >
            Open first workspace view
          </button>
          {!canLaunch(draft) && (
            <p className="text-[12px] leading-[1.5] text-[#706E6B]">
              Scope, objective, and the approval boundary are required. A connected source is not required, and will not be simulated.
            </p>
          )}
        </div>
      </form>
    </AppShell>
  );
}

function labelFor(state: ConnectionState) {
  if (state === "waiting") return "Waiting for connection";
  if (state === "not_connected") return "Not connected";
  return "Unavailable";
}

function EmptyLink({ href, label, body }: { href: string; label: string; body: string }) {
  return (
    <div className="max-w-lg rounded-md border border-[#E5E5E5] bg-white p-5">
      <p className="text-[14px] text-[#444]">{body}</p>
      <Link href={href} className="mt-4 inline-flex h-10 items-center rounded-md bg-[#0176D3] px-4 text-[14px] font-semibold text-white">
        {label}
      </Link>
    </div>
  );
}
