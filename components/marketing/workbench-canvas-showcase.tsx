"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Maximize2, X } from "lucide-react";
import mediaStyles from "./responsive-media.module.css";

const views = [
  { id: "document", label: "Document", title: "Documents with working context.", detail: "Combine editable text, record tables, metric blocks and Twin assistance in Canvas." },
  { id: "database", label: "Database", title: "The same records, as a table.", detail: "Review a renewal contract and expansion opportunity with status, stage and owner." },
  { id: "graph", label: "Context graph", title: "See how the work connects.", detail: "Explore a renewal work item, decision, agreement and related diagram." },
  { id: "blocks", label: "Block library", title: "Build with reusable blocks.", detail: "Add text, tables, metrics, actions and Twin blocks from the Canvas UI Library." },
  { id: "library", label: "Workbench library", title: "Start from a template.", detail: "Browse domain templates, Canvas presets and UI components in the same shell." },
  { id: "sidebar", label: "Sidebar structure", title: "The application’s complete navigation structure.", detail: "Home, My Work, Communications, Personal, Work, Platform and Administration keep their native order and nesting. The Work menu reflects the Account Success QA profile." },
] as const;

const sidebarSections = [
  { id: "overview", label: "Overview", detail: "All seven main groups and the account menu are visible in the application’s blue sidebar." },
  { id: "my-work", label: "My Work", detail: "Inbox, Tasks, My Queue, Approvals, Notifications, Recent Work and Favorites." },
  { id: "communications", label: "Communications", detail: "Activity Feed, Email, Calendar, Meetings, Chat, Calls and Shared Documents." },
  { id: "personal", label: "Personal", detail: "Notes, Knowledge Base, Brainstorming Sessions and Activity." },
  { id: "work", label: "Work", detail: "All Work followed by the native Account Success package: CS Today, account and health views, contacts, meetings, success plans, risks and business context. Planned entries keep their inactive state." },
  { id: "platform", label: "Platform", detail: "The native Ecosystem, Spine and Runtime subsections, including integrations, knowledge, memory continuity, automation, governance and observability." },
  { id: "administration", label: "Administration", detail: "The native Organization and Controls subsections for the QA administrator profile. Access in the application depends on the signed-in user’s permissions." },
] as const;

const choiceStyle = "min-h-11 rounded-lg px-3 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]";

export function WorkbenchCanvasShowcase() {
  const [active, setActive] = useState<(typeof views)[number]["id"]>("document");
  const [sidebar, setSidebar] = useState<(typeof sidebarSections)[number]["id"]>("work");
  const [expanded, setExpanded] = useState(false);
  const [actualSize, setActualSize] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const view = views.find(item => item.id === active) ?? views[0];
  const sidebarSection = sidebarSections.find(item => item.id === sidebar) ?? sidebarSections[0];
  const imageKey = active === "sidebar" ? (sidebar === "overview" ? "document" : `navigation-${sidebar}`) : active;
  const imagePath = `/images/workbench/native-shell/${imageKey}-20261015.webp`;
  const imageHeight = imageKey === "navigation-work" ? 1680 : 1100;
  const imageLabel = active === "sidebar" ? `${sidebarSection.label} sidebar structure` : view.label;

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

  return (
    <div className="mt-8" id="workbench-canvas">
      <div className="overflow-hidden rounded-2xl border border-[#CCE3F5] bg-white">
        <div className="border-b border-[#E2EEF8] bg-[#F7FAFD] p-4 sm:p-5">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Workbench view selection">
            {views.map(({ id, label }) => (
              <button key={id} type="button" aria-pressed={active === id} onClick={() => setActive(id)} className={`${choiceStyle} ${active === id ? "bg-[#006FE8] text-white" : "text-[#315775] hover:bg-[#E2EEF8]"}`}>
                {label}
              </button>
            ))}
          </div>
          {active === "sidebar" && (
            <div className="mt-4 border-t border-[#D9E8F4] pt-4">
              <p className="mb-2 text-xs font-semibold text-[#4E607A]">Explore a sidebar section</p>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Sidebar section selection">
                {sidebarSections.map(({ id, label }) => (
                  <button key={id} type="button" aria-pressed={sidebar === id} onClick={() => setSidebar(id)} className={`${choiceStyle} border ${sidebar === id ? "border-[#006FE8] bg-[#EBF5FF] text-[#005CBF]" : "border-[#D9E8F4] bg-white text-[#315775] hover:bg-[#E2EEF8]"}`}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <figure>
          <figcaption className="flex flex-wrap items-start justify-between gap-4 border-b border-[#E2EEF8] px-5 py-4">
            <div className="min-w-0 flex-1 basis-64" aria-live="polite" aria-atomic="true">
              <h3 className="text-[length:var(--marketing-card-size)] font-semibold leading-snug">{view.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#4E607A]">{view.detail}</p>
              {active === "sidebar" && <p className="mt-2 text-sm leading-6 text-[#315775]"><strong>{sidebarSection.label}:</strong> {sidebarSection.detail}</p>}
            </div>
            <button type="button" onClick={() => { setActualSize(false); setExpanded(true); }} className={`${choiceStyle} inline-flex items-center gap-2 border border-[#CCE3F5] text-[#005CBF] hover:bg-[#EBF5FF]`}>
              <Maximize2 className="h-4 w-4" aria-hidden />Enlarge view
            </button>
          </figcaption>
          <button type="button" onClick={() => { setActualSize(false); setExpanded(true); }} aria-label={`Enlarge ${imageLabel} application capture`} className={`${mediaStyles.frame} w-full cursor-zoom-in bg-[#F7FAFD] text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#006FE8]`}>
            <img src={imagePath} alt={`Captured SpineWorkspace frontend: ${imageLabel}, including the native blue sidebar, top bar, workspace controls and QA account menu.`} width={1600} height={imageHeight} loading="lazy" className={mediaStyles.media} />
          </button>
        </figure>
      </div>
      <details className="mt-4 text-xs leading-6 text-[#596F89]">
        <summary className="w-fit cursor-pointer rounded-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]">About these captures</summary>
        <p className="mt-2 max-w-3xl">Native application components composed locally with existing QA fixture records. Populated Canvas captures use the component’s record input; the routed page does not yet supply them. Canvas composition edits are local to the view; saved layouts are not demonstrated. Sync and host badges do not verify connections or completed actions.</p>
      </details>
      {expanded && (
        <dialog ref={dialogRef} onClose={() => setExpanded(false)} aria-labelledby={titleId} onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close(); }} className="fixed inset-0 z-50 m-0 h-dvh max-h-none w-screen max-w-none bg-[#082B5E]/85 p-2 backdrop-blur-sm sm:p-5">
          <div className="mx-auto flex h-full max-w-[1700px] flex-col overflow-hidden rounded-xl bg-white">
            <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-[#D9E8F4] px-3 py-2 sm:px-5">
              <h3 id={titleId} className="text-sm font-semibold text-[#082B5E]">Live Workbench Views · {imageLabel}</h3>
              <div className="flex items-center gap-2">
                <button type="button" aria-pressed={actualSize} onClick={() => setActualSize(size => !size)} className={`${choiceStyle} border border-[#CCE3F5] text-[#005CBF]`}>{actualSize ? "Fit to screen" : "Actual size"}</button>
                <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close enlarged application view" className={`${choiceStyle} inline-flex min-w-11 items-center justify-center text-[#315775] hover:bg-[#EBF5FF]`}><X className="h-5 w-5" aria-hidden /></button>
              </div>
            </div>
            <div tabIndex={0} role="region" aria-label="Scrollable application capture" className={`${actualSize ? "" : mediaStyles.fitRegion} min-h-0 flex-1 overflow-auto bg-[#F0F8FF] p-2 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#006FE8]`}>
              <img src={imagePath} alt={`Full ${imageLabel} capture from the application components with QA fixture data.`} width={1600} height={imageHeight} className={actualSize ? "h-auto w-[1600px] max-w-none" : mediaStyles.fitImage} />
            </div>
            <p className="shrink-0 border-t border-[#D9E8F4] px-3 py-2 text-xs leading-5 text-[#596F89]">QA fixture capture. Choose Actual size and scroll to read the full sidebar and view.</p>
          </div>
        </dialog>
      )}
    </div>
  );
}
