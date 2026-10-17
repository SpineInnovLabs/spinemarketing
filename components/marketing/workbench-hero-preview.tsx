"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import mediaStyles from "./responsive-media.module.css";
import { WorkbenchCapturePreview } from "./workbench-capture-preview";

const previews = [
  { id: "dashboard", step: "01", label: "Dashboard", src: "/images/workbench/editable-dashboard/overview-20261015.webp", title: "Review daily work.", detail: "Records, attention items and local drafts in the operational dashboard.", alt: "Actual Customer Service & Support dashboard with two QA ticket records and the native blue Workbench sidebar." },
  { id: "canvas", step: "02", label: "Canvas", src: "/images/workbench/native-shell/document-20261015.webp", title: "Work in a connected document.", detail: "Text, tables and Twin assistance together in the Canvas view.", alt: "Actual Canvas components showing a QA renewal document, record table and Twin work session in the complete blue application shell." },
  { id: "recording", step: "03", label: "Watch 26 seconds", src: "/images/workbench/founderops/cockpit-20261014.webp", title: "Inside the real Workbench shell.", detail: "Play the recorded navigation, operating view and search interactions.", alt: "FounderOps Workbench recording poster with QA records." },
] as const;

const control = "min-h-11 rounded-lg px-3 py-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]";

export function WorkbenchHeroPreview() {
  const id = useId();
  const [active, setActive] = useState<(typeof previews)[number]["id"]>("dashboard");
  const [expanded, setExpanded] = useState(false);
  const [actualSize, setActualSize] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const activeIndex = previews.findIndex((preview) => preview.id === active);
  const currentIndex = activeIndex >= 0 ? activeIndex : 0;
  const view = previews[currentIndex];

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

  const stepScene = (delta: number) => {
    videoRef.current?.pause();
    const nextIndex = (currentIndex + delta + previews.length) % previews.length;
    setActive(previews[nextIndex].id);
  };

  return (
    <figure data-workbench-hero-preview className="m-0 min-w-0 w-full text-[#082B5E]">
      <div className="relative overflow-hidden rounded-2xl border border-[#CBE5FA] bg-white shadow-[0_22px_70px_rgba(0,111,232,0.12)]">
        <BorderBeam size={260} duration={14} colorFrom="#006FE8" colorTo="#38BDF8" />
        {/* Storyboard Scene Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D6E8F8] bg-[#F0F8FF] px-3 py-2.5">
          <div role="group" aria-label="Product preview selection" className="flex flex-wrap gap-1.5">
            {previews.map(({ id: key, step, label }) => (
              <button
                key={key}
                type="button"
                aria-pressed={active === key}
                onClick={() => {
                  videoRef.current?.pause();
                  setActive(key);
                }}
                className={`${control} inline-flex items-center gap-1.5 ${
                  active === key
                    ? "bg-[#006FE8] text-white shadow-2xs"
                    : "border border-[#CBE5FA] bg-white text-[#082B5E] hover:bg-[#EBF7FF]"
                }`}
              >
                <span className={`font-mono text-[10px] font-bold ${active === key ? "text-[#CBE5FA]" : "text-[#006FE8]"}`}>
                  {step}
                </span>
                <span>{label}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="rounded-full border border-[#CBE5FA] bg-white px-2.5 py-1 text-[10px] font-semibold text-[#006FE8]">
              Live Workbench Views
            </span>
            <div className="inline-flex items-center rounded-lg border border-[#CBE5FA] bg-white p-0.5">
              <button
                type="button"
                onClick={() => stepScene(-1)}
                aria-label="Previous storyboard scene"
                className="inline-flex h-7 w-7 items-center justify-center rounded-md text-[#082B5E] transition-colors hover:bg-[#EBF7FF] hover:text-[#006FE8]"
              >
                <ChevronLeft className="h-3.5 w-3.5" aria-hidden />
              </button>
              <span className="px-1.5 font-mono text-[10px] font-bold text-[#006FE8]">
                {view.step}/03
              </span>
              <button
                type="button"
                onClick={() => stepScene(1)}
                aria-label="Next storyboard scene"
                className="inline-flex h-7 w-7 items-center justify-center rounded-md text-[#082B5E] transition-colors hover:bg-[#EBF7FF] hover:text-[#006FE8]"
              >
                <ChevronRight className="h-3.5 w-3.5" aria-hidden />
              </button>
            </div>
          </div>
        </div>

        {/* Authentic Workbench Frame */}
        {active === "recording" ? (
          <div className={`${mediaStyles.frame} bg-white`} style={{ padding: 8 }}>
            <video ref={videoRef} controls playsInline preload="none" width={1440} height={900} poster={view.src} aria-label="Hero recorded Workbench shell walkthrough" aria-describedby={`${id}-provenance`} className={`${mediaStyles.media} bg-white`}>
              <source src="/videos/workbench/workbench-shell-20261014.mp4" type="video/mp4" />
              <track kind="captions" src="/videos/workbench/workbench-shell-20261014.vtt" srcLang="en" label="English scene descriptions" default />
              <a href="/videos/workbench/workbench-shell-20261014.mp4">Download the shell recording</a>
            </video>
          </div>
        ) : (
          <button type="button" onClick={enlarge} aria-label={`Enlarge ${view.label.toLowerCase()} product preview`} className="block w-full cursor-zoom-in bg-white focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#006FE8]">
            <WorkbenchCapturePreview src={view.src} alt={view.alt} desktop={active === "dashboard" ? [0, 0, 1600, 820] : undefined} mobile={active === "dashboard" ? [300, 185, 720, 610] : [480, 330, 880, 735]} eager />
          </button>
        )}

        {/* Storyboard Scene Narrative Footer */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#D6E8F8] bg-[#F0F8FF] px-4 py-3">
          <div className="min-w-0 flex-1 basis-48 text-xs leading-6" aria-live="polite" aria-atomic="true">
            <span className="mr-2 inline-flex items-center rounded-md border border-[#CBE5FA] bg-white px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase text-[#006FE8]">
              Scene {view.step}
            </span>
            <strong className="text-sm text-[#082B5E]">{view.title}</strong>{" "}
            <span className="text-[#4E607A]">{view.detail}</span>
          </div>
          {active !== "recording" && (
            <button type="button" onClick={enlarge} className={`${control} inline-flex items-center gap-1.5 border border-[#CBE5FA] bg-white text-[#006FE8] hover:bg-[#EBF7FF]`}>
              <Maximize2 className="h-3.5 w-3.5" aria-hidden />Enlarge
            </button>
          )}
        </div>
      </div>
      <figcaption id={`${id}-provenance`} className="mt-3 text-xs leading-6 text-[#4E607A]">Actual application UI with QA fixtures. Figures and host badges are not verified live customer telemetry or connection proof.</figcaption>
      <details className="mt-1 text-xs leading-6 text-[#4E607A]">
        <summary className="w-fit cursor-pointer rounded-sm font-medium text-[#006FE8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]">Capture notes</summary>
        <p className="mt-2">Dashboard captures include the documented local draft/status repair. Canvas uses native components composed with QA record inputs; saved layouts are not demonstrated. The recording shows real shell interactions. None establishes completed provider actions. Full source and test boundaries appear in the Workbench explorer and product evidence page.</p>
      </details>
      {expanded && (
        <dialog ref={dialogRef} aria-labelledby={`${id}-title`} onClose={() => setExpanded(false)} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }} className="fixed inset-0 z-50 m-0 h-dvh max-h-none w-screen max-w-none bg-[#082B5E]/85 p-2 backdrop-blur-sm sm:p-5">
          <div className="mx-auto flex h-full max-w-[1700px] flex-col overflow-hidden rounded-xl bg-white">
            <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-[#D6E8F8] bg-[#F0F8FF] px-3 py-2 sm:px-5">
              <h2 id={`${id}-title`} className="text-sm font-semibold text-[#082B5E]">Live Workbench Views · {view.label}</h2>
              <div className="flex items-center gap-1">
                <button type="button" aria-pressed={actualSize} onClick={() => setActualSize((value) => !value)} className={`${control} border border-[#CBE5FA] bg-white text-[#006FE8]`}>{actualSize ? "Fit to screen" : "Actual size"}</button>
                <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close product preview" className={`${control} inline-flex min-w-11 items-center justify-center`}><X className="h-5 w-5" aria-hidden /></button>
              </div>
            </div>
            <div tabIndex={0} role="region" aria-label="Scrollable product preview" className={`${actualSize ? "" : mediaStyles.fitRegion} min-h-0 flex-1 overflow-auto bg-[#F0F8FF] p-2 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#006FE8]`}>
              <img src={view.src} alt={view.alt} width={1600} height={1100} className={actualSize ? "h-auto w-[1600px] max-w-none" : mediaStyles.fitImage} />
            </div>
            <p className="shrink-0 border-t border-[#D6E8F8] bg-white px-3 py-2 text-xs leading-5 text-[#4E607A]">QA fixture capture. Capture-specific source and test limits are available in the Workbench view explorer.</p>
          </div>
        </dialog>
      )}
    </figure>
  );
}
