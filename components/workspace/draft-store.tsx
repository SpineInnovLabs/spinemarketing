"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { DRAFT_STORAGE_KEY, EMPTY_DRAFT, type WorkspaceDraft } from "@/lib/workspace-draft";

type DraftStore = {
  draft: WorkspaceDraft;
  hydrated: boolean;
  save: (next: WorkspaceDraft) => void;
  clear: () => void;
};

const DraftContext = createContext<DraftStore | null>(null);

export function DraftProvider({ children }: { children: React.ReactNode }) {
  const [draft, setDraft] = useState<WorkspaceDraft>(EMPTY_DRAFT);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_STORAGE_KEY);
      if (raw) setDraft({ ...EMPTY_DRAFT, ...JSON.parse(raw) });
    } catch {
      /* keep empty draft */
    }
    setHydrated(true);
  }, []);

  function save(next: WorkspaceDraft) {
    const stored = { ...next, updatedAt: new Date().toISOString() };
    setDraft(stored);
    localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(stored));
  }

  function clear() {
    setDraft(EMPTY_DRAFT);
    localStorage.removeItem(DRAFT_STORAGE_KEY);
  }

  return <DraftContext.Provider value={{ draft, hydrated, save, clear }}>{children}</DraftContext.Provider>;
}

export function useDraft() {
  const ctx = useContext(DraftContext);
  if (!ctx) throw new Error("useDraft must be used inside DraftProvider");
  return ctx;
}
