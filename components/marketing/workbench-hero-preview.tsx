"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Maximize2, X } from "lucide-react";
import mediaStyles from "./responsive-media.module.css";

const previews = [
  { id: "dashboard", label: "Dashboard", src: "/images/workbench/editable-dashboard/overview-20261015.webp", title: "Review daily work.", detail: "Records, attention items and local drafts in the operational dashboard.", alt: "Actual Customer Service & Support dashboard with two QA ticket records and the native blue Workbench sidebar." },
  { id: "canvas", label: "Canvas", src: "/images/workbench/native-shell/document-20261015.webp", title: "Work in a connected document.", detail: "Text, tables and Twin assistance together in the Canvas view.", alt: "Actual Canvas components showing a QA renewal document, record table and Twin work session in the complete blue application shell." },
  { id: "recording", label: "Watch 26 seconds", src: "/images/workbench/founderops/cockpit-20261014.webp", title: "Inside the real Workbench shell.", detail: "Play the recorded navigation, operating view and search interactions.", alt: "FounderOps Workbench recording poster with QA records." },
] as const;

const control = "min-h-11 rounded-lg px-3 py-2 text-xs font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]";

export function WorkbenchHeroPreview() {
  const id = useId();
  const [active, setActive] = useState<(typeof previews)[number]["id"]>("dashboard");
  const [expanded, setExpanded] = useState(false);
  const [actualSize, setActualSize] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const view = previews.find((preview) => preview.id === active) ?? previews[0];

  useEffect(() => {
    const video = videoRef.current;
    return () => video?.pause();
  }, [active]);

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

  const enlarge = () => {
    setActualSize(false);
    setExpanded(true);
  };

  return (
    <figure data-workbench-hero-preview className="m-0 min-w-0 w-full text-[#082B5E]">
      <div className="overflow-hidden rounded-2xl border border-[#CCE3F5] bg-white shadow-[0_22px_70px_rgba(15,70,130,.14)]">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2EEF8] bg-[#F7FAFD] px-3 py-2">
          <div role="group" aria-label="Product preview selection" className="flex flex-wrap gap-1">
            {previews.map(({ id: key, label }) => (
              <button key={key} type="button" aria-pressed={active === key} onClick={() => { videoRef.current?.pause(); setActive(key); }} className={`${control} ${active === key ? "bg-[#006FE8] text-white" : "text-[#315775] hover:bg-[#E2EEF8]"}`}>{label}</button>
            ))}
          </div>
          <span className="px-2 text-[10px] font-semibold text-[#006FE8]">Live Workbench Views</span>
        </div>
        {active === "recording" ? (
          <div className={`${mediaStyles.frame} bg-[#F7FAFD]`} style={{ padding: 8 }}>
            <video ref={videoRef} controls playsInline preload="none" width={1440} height={900} poster={view.src} aria-label="Hero recorded Workbench shell walkthrough" aria-describedby={`${id}-provenance`} className={`${mediaStyles.media} bg-white`}>
              <source src="/videos/workbench/workbench-shell-20261014.mp4" type="video/mp4" />
              <track kind="captions" src="/videos/workbench/workbench-shell-20261014.vtt" srcLang="en" label="English scene descriptions" default />
              <a href="/videos/workbench/workbench-shell-20261014.mp4">Download the shell recording</a>
            </video>
          </div>
        ) : (
          <button type="button" onClick={enlarge} aria-label={`Enlarge ${view.label.toLowerCase()} product preview`} style={{ padding: 8 }} className={`${mediaStyles.frame} w-full cursor-zoom-in bg-[#F7FAFD] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#006FE8]`}>
            <img src={view.src} alt={view.alt} width={1600} height={1100} loading="eager" fetchPriority="high" className={mediaStyles.media} />
          </button>
        )}
        <div className="flex flex-wrap items-start justify-between gap-2 border-t border-[#E2EEF8] px-4 py-3">
          <div className="min-w-0 flex-1 basis-48 text-xs leading-6" aria-live="polite" aria-atomic="true"><strong className="block text-sm">{view.title}</strong>{view.detail}</div>
          {active !== "recording" && <button type="button" onClick={enlarge} className={`${control} inline-flex items-center gap-1.5 text-[#006FE8]`}><Maximize2 className="h-3.5 w-3.5" aria-hidden />Enlarge</button>}
        </div>
      </div>
      <figcaption id={`${id}-provenance`} className="mt-3 text-xs leading-6 text-[#596F89]">Actual application UI with QA fixtures. Figures and host badges are not verified live customer telemetry or connection proof.</figcaption>
      <details className="mt-1 text-xs leading-6 text-[#596F89]">
        <summary className="w-fit cursor-pointer rounded-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]">Capture notes</summary>
        <p className="mt-2">Dashboard captures include the documented local draft/status repair. Canvas uses native components composed with QA record inputs; saved layouts are not demonstrated. The recording shows real shell interactions. None establishes completed provider actions. Full source and test boundaries appear in the Workbench explorer and product evidence page.</p>
      </details>
      {expanded && (
        <dialog ref={dialogRef} aria-labelledby={`${id}-title`} onClose={() => setExpanded(false)} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }} className="fixed inset-0 z-50 m-0 h-dvh max-h-none w-screen max-w-none bg-[#082B5E]/85 p-2 backdrop-blur-sm sm:p-5">
          <div className="mx-auto flex h-full max-w-[1700px] flex-col overflow-hidden rounded-xl bg-white">
            <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-[#D9E8F4] px-3 py-2 sm:px-5">
              <h2 id={`${id}-title`} className="text-sm font-semibold">Live Workbench Views · {view.label}</h2>
              <div className="flex items-center gap-1">
                <button type="button" aria-pressed={actualSize} onClick={() => setActualSize((value) => !value)} className={`${control} border border-[#CCE3F5] text-[#005CBF]`}>{actualSize ? "Fit to screen" : "Actual size"}</button>
                <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close product preview" className={`${control} inline-flex min-w-11 items-center justify-center`}><X className="h-5 w-5" aria-hidden /></button>
              </div>
            </div>
            <div tabIndex={0} role="region" aria-label="Scrollable product preview" className={`${actualSize ? "" : mediaStyles.fitRegion} min-h-0 flex-1 overflow-auto bg-[#F0F8FF] p-2 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#006FE8]`}>
              <img src={view.src} alt={view.alt} width={1600} height={1100} className={actualSize ? "h-auto w-[1600px] max-w-none" : mediaStyles.fitImage} />
            </div>
            <p className="shrink-0 border-t border-[#D9E8F4] px-3 py-2 text-xs leading-5 text-[#596F89]">QA fixture capture. Capture-specific source and test limits are available in the Workbench view explorer.</p>
          </div>
        </dialog>
      )}
    </figure>
  );
}
