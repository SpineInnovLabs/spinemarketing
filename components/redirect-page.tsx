"use client";

import { useEffect } from "react";

export function RedirectPage({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <main id="main" className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-[28px] font-semibold tracking-[-0.03em] text-[#032D60]">This page has moved</h1>
      <p className="mt-3 text-sm text-[#706E6B]">Redirecting…</p>
      <a href={to} className="mt-6 text-[15px] font-semibold text-[#0176D3] underline underline-offset-2">
        Continue
      </a>
    </main>
  );
}
