"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function RequestAccessPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main id="main" tabIndex={-1} className="min-h-screen bg-[#F3F6F9] px-6 py-16">
      <div className="mx-auto max-w-[640px] rounded-md border border-[#E5E5E5] bg-white p-6">
        <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">Access</p>
        <h1 className="mt-2 text-[length:min(28px,var(--marketing-title-size))] font-semibold text-[#032D60]">Request access</h1>
        <p className="mt-3 text-[15px] leading-[1.6] text-[#444]">
          This form records interest only. It does not create an organization or open a workspace. A Spine InnovTech contact still has to follow up.
        </p>
        {sent ? (
          <p className="mt-6 rounded-md border border-[#E5E5E5] bg-[#F3F6F9] p-4 text-[14px] text-[#181818]">
            Request noted in this browser only. No access request was sent, because the intake service is not connected. Use{" "}
            <Link href="/contact?intent=demo" className="font-semibold text-[#0176D3] hover:underline">
              Talk to Spine InnovTech
            </Link>{" "}
            to continue with a person.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <Field id="name" label="Name" />
            <Field id="email" label="Work email" type="email" />
            <Field id="org" label="Organization" />
            <label htmlFor="note" className="block text-[13px] font-semibold text-[#032D60]">
              What operating area are you setting up?
            </label>
            <textarea id="note" required className="h-24 w-full rounded-md border border-[#C9C9C9] px-3 py-2 text-[14px]" />
            <button type="submit" className="h-10 rounded-md bg-[#0176D3] px-4 text-[14px] font-semibold text-white hover:bg-[#0B5CAB]">
              Record request locally
            </button>
          </form>
        )}
        <Link href="/login" className="mt-6 inline-block text-[13px] font-semibold text-[#0176D3] hover:underline">
          Back to sign in
        </Link>
      </div>
    </main>
  );
}

function Field({ id, label, type = "text" }: { id: string; label: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-[13px] font-semibold text-[#032D60]">
        {label}
      </label>
      <input id={id} type={type} required className="mt-1 h-10 w-full rounded-md border border-[#C9C9C9] px-3 text-[14px]" />
    </div>
  );
}
