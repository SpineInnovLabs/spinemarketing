"use client";

import { useEffect } from "react";

export function RedirectPage({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-[#706E6B]">
      <p className="text-sm font-medium">Redirecting…</p>
    </div>
  );
}
