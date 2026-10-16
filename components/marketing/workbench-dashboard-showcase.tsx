"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Maximize2, X } from "lucide-react";
import mediaStyles from "./responsive-media.module.css";

const dashboardViews = [
  {
    id: "overview",
    label: "Operational dashboard",
    title: "Daily work, in one dashboard.",
    detail: "Review Customer Service & Support records, KPIs and items needing attention. Search, filter and inspect without leaving the Workbench.",
  },
  {
    id: "editing",
    label: "Edit a local draft",
    title: "Edit the draft. Keep the context.",
    detail: "Update a local draft’s title and notes beside its owner, date and status. Connected source records stay under the authorized workflow.",
  },
  {
    id: "draft",
    label: "Create a draft",
    title: "Capture the next item.",
    detail: "Create a local draft with a title, owner and date. Update working status; approvals and execution follow the governed action path.",
  },
  {
    id: "filter",
    label: "Search and filter",
    title: "Find the work that needs attention.",
    detail: "Search records and filter by status while the dashboard stays in place.",
  },
  {
    id: "workbench",
    label: "Workbench shell",
    title: "The role-based operating shell.",
    detail: "The Account Success shell keeps records, Inspect and Ask Twin together. Metrics without a source binding remain unbound.",
  },
] as const;

const choiceStyle = "min-h-11 rounded-lg px-3 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]";

export function WorkbenchDashboardShowcase() {
  const [active, setActive] = useState<(typeof dashboardViews)[number]["id"]>("overview");
  const [expanded, setExpanded] = useState(false);
  const [actualSize, setActualSize] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const view = dashboardViews.find((item) => item.id === active) ?? dashboardViews[0];
  const isNativeShell = view.id === "workbench";
  const imagePath = isNativeShell
    ? "/images/workbench/native-shell/workbench-20261015.webp"
    : `/images/workbench/editable-dashboard/${view.id}-20261015.webp`;
  const imageAlt = isNativeShell
    ? "Captured native SpineWorkspace Account Success Workbench shell with unbound KPI values, two QA records, Inspect and Ask Twin controls, and the complete blue sidebar."
    : `Captured SpineWorkspace Customer Service & Support dashboard: ${view.label}, with the real operational dashboard controls and native blue sidebar.`;

  useEffect(() => {
    if (!expanded) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [expanded]);

  const openCapture = () => {
    setActualSize(false);
    setExpanded(true);
  };

  return (
    <div className="mt-8 scroll-mt-24" id="workbench-dashboards">
      <div className="overflow-hidden rounded-2xl border border-[#CCE3F5] bg-white">
        <div className="border-b border-[#E2EEF8] bg-[#F7FAFD] p-4 sm:p-5">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Dashboard view selection">
            {dashboardViews.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                aria-pressed={active === id}
                onClick={() => setActive(id)}
                className={`${choiceStyle} ${active === id ? "bg-[#006FE8] text-white" : "text-[#315775] hover:bg-[#E2EEF8]"}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <figure>
          <figcaption className="flex flex-wrap items-start justify-between gap-4 border-b border-[#E2EEF8] px-5 py-4">
            <div className="min-w-0 flex-1 basis-64" aria-live="polite" aria-atomic="true">
              <h3 className="text-[length:var(--marketing-card-size)] font-semibold leading-snug">{view.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#4E607A]">{view.detail}</p>
            </div>
            <button type="button" onClick={openCapture} className={`${choiceStyle} inline-flex items-center gap-2 border border-[#CCE3F5] text-[#005CBF] hover:bg-[#EBF5FF]`}>
              <Maximize2 className="h-4 w-4" aria-hidden />Enlarge dashboard
            </button>
          </figcaption>
          <button
            type="button"
            onClick={openCapture}
            aria-label={`Enlarge ${view.label} dashboard capture`}
            className={`${mediaStyles.frame} w-full cursor-zoom-in bg-[#F7FAFD] text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#006FE8]`}
          >
            <img
              src={imagePath}
              alt={imageAlt}
              width={1600}
              height={1100}
              loading="lazy"
              className={mediaStyles.media}
            />
          </button>
        </figure>
      </div>
      <details className="mt-4 text-xs leading-6 text-[#596F89]">
        <summary className="w-fit cursor-pointer rounded-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]">About this capture</summary>
        <p className="mt-2 max-w-3xl">{isNativeShell
          ? "Native application components composed locally with two existing QA fixture records; the routed Workbench page does not yet supply them. Sync and host badges do not verify connections or completed actions."
          : "Captured from the running application dashboard with existing QA fixtures and a reviewed local draft/status repair that is pending application integration. Edits remain in the scoped local outbox. Connected-source changes require the authorized workflow. This capture does not demonstrate a freeform dashboard layout editor."}</p>
      </details>
      {expanded && (
        <dialog
          ref={dialogRef}
          onClose={() => setExpanded(false)}
          aria-labelledby={titleId}
          onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}
          className="fixed inset-0 z-50 m-0 h-dvh max-h-none w-screen max-w-none bg-[#082B5E]/85 p-2 backdrop-blur-sm sm:p-5"
        >
          <div className="mx-auto flex h-full max-w-[1700px] flex-col overflow-hidden rounded-xl bg-white">
            <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-[#D9E8F4] px-3 py-2 sm:px-5">
              <h3 id={titleId} className="text-sm font-semibold text-[#082B5E]">Live Workbench Views · {view.label}</h3>
              <div className="flex items-center gap-2">
                <button type="button" aria-pressed={actualSize} onClick={() => setActualSize((size) => !size)} className={`${choiceStyle} border border-[#CCE3F5] text-[#005CBF]`}>
                  {actualSize ? "Fit to screen" : "Actual size"}
                </button>
                <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close enlarged dashboard view" className={`${choiceStyle} inline-flex min-w-11 items-center justify-center text-[#315775] hover:bg-[#EBF5FF]`}>
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>
            </div>
            <div tabIndex={0} role="region" aria-label="Scrollable dashboard capture" className={`${actualSize ? "" : mediaStyles.fitRegion} min-h-0 flex-1 overflow-auto bg-[#F0F8FF] p-2 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#006FE8]`}>
              <img
                src={imagePath}
                alt={imageAlt}
                width={1600}
                height={1100}
                className={actualSize ? "h-auto w-[1600px] max-w-none" : mediaStyles.fitImage}
              />
            </div>
            <p className="shrink-0 border-t border-[#D9E8F4] px-3 py-2 text-xs leading-5 text-[#596F89]">{isNativeShell ? "Native shell composition with QA fixture records." : "QA fixture capture."} Choose Actual size and scroll to inspect the dashboard controls.</p>
          </div>
        </dialog>
      )}
    </div>
  );
}
