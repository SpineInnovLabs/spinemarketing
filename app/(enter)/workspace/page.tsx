"use client";

import Link from "next/link";
import { AppShell } from "@/components/workspace/app-shell";
import { useDraft } from "@/components/workspace/draft-store";
import { EvidencePanel, KpiBlock } from "@/components/marketing/enterprise";
import { getPublicSolutionBySlug } from "@/lib/solution-taxonomy";

export default function WorkspacePage() {
  const { draft, hydrated } = useDraft();

  if (!hydrated) {
    return <AppShell title="Workspace"><p className="text-[14px] text-[#444]">Loading local draft…</p></AppShell>;
  }

  if (!draft.email || !draft.launched) {
    return (
      <AppShell title="Workspace" subtitle="No launched draft in this browser.">
        <div className="max-w-lg rounded-md border border-[#E5E5E5] bg-white p-5">
          <p className="text-[14px] leading-[1.6] text-[#444]">
            There is no first workspace view yet. Finish setup, or sign in to start a local draft. Nothing here is provisioned.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/onboarding" className="inline-flex h-10 items-center rounded-md bg-[#0176D3] px-4 text-[14px] font-semibold text-white">
              Continue setup
            </Link>
            <Link href="/login" className="inline-flex h-10 items-center rounded-md border border-[#C9C9C9] px-4 text-[14px] font-semibold text-[#032D60]">
              Sign in
            </Link>
          </div>
        </div>
      </AppShell>
    );
  }

  const solution = getPublicSolutionBySlug(draft.solutionSlug);
  const connectionLabel =
    draft.connection === "waiting" ? "Waiting" : draft.connection === "not_connected" ? "Not connected" : "Unavailable";

  return (
    <AppShell
      title={draft.organization || "Untitled organization"}
      subtitle={`${solution?.name ?? "Operating area not set"} · local draft, provisioning pending`}
    >
      <div className="mb-4 rounded-md border border-[#E5E5E5] bg-white px-4 py-3 text-[13px] leading-[1.55] text-[#444]">
        This overview is the first structured view of your setup draft. Context, work, and the Twin stay unavailable until a real workspace is provisioned.
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiBlock label="Source" value={connectionLabel} detail="No tool that keeps the record is linked." />
        <KpiBlock label="Provisioning" value="Pending" detail="No workspace service has accepted this draft." />
        <KpiBlock label="Authority" value="Human" detail="Approvals stay with people. The Twin is not active." />
        <KpiBlock label="Objective" value={draft.objective ? "Set" : "Missing"} detail={draft.objective || "No launch objective captured."} />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_300px]">
        <section className="rounded-md border border-[#E5E5E5] bg-white p-5">
          <h2 className="text-[16px] font-semibold text-[#032D60]">Setup still open</h2>
          <ul className="mt-4 divide-y divide-[#E5E5E5] text-[14px]">
            <Item done label="Draft email stored locally" />
            <Item done={Boolean(draft.solutionSlug)} label="Operating area selected" />
            <Item done={Boolean(draft.objective.trim())} label="Launch objective captured" />
            <Item done={draft.collaborationAcknowledged} label="Approval boundary acknowledged" />
            <Item done={false} label="Source connected" />
            <Item done={false} label="Workspace provisioned" />
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/onboarding" className="inline-flex h-10 items-center rounded-md bg-[#0176D3] px-4 text-[14px] font-semibold text-white">
              Update setup
            </Link>
            <Link href="/contact?intent=demo" className="inline-flex h-10 items-center rounded-md border border-[#C9C9C9] px-4 text-[14px] font-semibold text-[#032D60]">
              Talk to Spine InnovLabs
            </Link>
          </div>
        </section>
        <EvidencePanel
          title="Context"
          items={[
            { label: "Organization", value: draft.organization || "Not set" },
            { label: "Area", value: solution?.name ?? "Not set" },
            { label: "Evidence", value: "None linked" },
            { label: "Twin", value: "Not available" },
          ]}
        />
      </div>
    </AppShell>
  );
}

function Item({ done, label }: { done: boolean; label: string }) {
  return (
    <li className="flex items-center justify-between py-2.5">
      <span>{label}</span>
      <span className={done ? "text-[12px] font-semibold text-[#0176D3]" : "text-[12px] font-semibold text-[#706E6B]"}>
        {done ? "Done" : "Open"}
      </span>
    </li>
  );
}
