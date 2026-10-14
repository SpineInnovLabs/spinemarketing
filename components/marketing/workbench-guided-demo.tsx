"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const frames = [
  { id: "my-work", title: "Start with your work", domain: "Personal workspace", route: "/workspace/my-work", src: "/images/workbench/common/my-work.webp", detail: "See tasks, priorities and next steps in one Workbench shell." },
  { id: "account", title: "Bring customer context together", domain: "Account Success", route: "/workspace/accounts/acme-corp", src: "/images/workbench/account-success/account-health.webp", detail: "A customer view brings relationship, account signals and relevant evidence into context." },
  { id: "sales", title: "Project the same Fabric into sales", domain: "Sales", route: "/workspace/work/salesops/pipeline", src: "/images/workbench/sales/pipeline.webp", detail: "A role-specific pipeline view presents the information sellers need, without inventing a separate organizational truth." },
  { id: "finance", title: "See financial work in its own context", domain: "Finance", route: "/workspace/work/finance/invoices", src: "/images/workbench/finance/invoices.webp", detail: "Finance can inspect its operational records and attention areas through its own governed projection." },
  { id: "engineering", title: "Connect delivery to shared priorities", domain: "Product & Engineering", route: "/workspace/work/product-engineering/roadmap", src: "/images/workbench/product-engineering/roadmap.webp", detail: "Product teams see roadmap and delivery work while preserving the same cross-functional context model." },
  { id: "twin", title: "Prepare a governed next step", domain: "Spine Twin", route: "/workspace/accounts/acme-corp", src: "/images/workbench/account-success/twin-action.webp", detail: "The Twin can prepare work for human review. This demonstration does not claim a real provider action was executed." },
] as const;

export function WorkbenchGuidedDemo() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const frame = frames[active];

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPlaying(false);
    }
  }, []);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setActive((i) => (i + 1) % frames.length), 5500);
    return () => window.clearInterval(timer);
  }, [playing]);
  const move = (increment: number) => setActive((i) => (i + frames.length + increment) % frames.length);

  return (
    <section id="workbench-demo" aria-labelledby="workbench-demo-title" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-[840px]">
            <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">GUIDED WORKBENCH UI DEMO</p>
            <h2 id="workbench-demo-title" className="mt-4 text-[length:min(clamp(2rem,4vw,3.4rem),var(--marketing-heading-size))] font-semibold leading-tight tracking-[-.045em] text-[#082B5E]">See one Fabric across real Workbench screens.</h2>
            <p className="mt-4 text-base leading-8 text-[#4E607A]">A guided walkthrough using screenshots captured from the actual Workbench React application. Pause, play or select a frame to explore how the same business context is projected across roles.</p>
          </div>
          <Link href="/product#workbench-views" className="inline-flex items-center gap-2 text-sm font-semibold text-[#006FE8] hover:underline">Browse the full screenshot gallery <ArrowRight className="h-4 w-4" aria-hidden /></Link>
        </div>
        <div className="mt-9 overflow-hidden rounded-3xl border border-[#CBE5FA] bg-[#F4FAFF] shadow-[0_18px_60px_rgba(15,70,130,.09)]">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D8E7F4] bg-white px-4 py-3 sm:px-6">
            <span className="text-xs font-semibold text-[#082B5E]">{frame.domain} <span className="ml-2 font-normal text-[#68809B]">{String(active + 1).padStart(2, "0")}/{String(frames.length).padStart(2, "0")}</span></span>
            <span className="rounded-full border border-[#E0EAF3] bg-[#F4F8FB] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#5D7188]">Real UI capture · Demo fixtures</span>
          </div>
          <div className="grid items-center gap-0 lg:grid-cols-[1.45fr_.55fr]">
            <div className="bg-white p-3 sm:p-5">
              <img key={frame.id} src={frame.src} alt={"Workbench screenshot: " + frame.title + ". Captured from the application with deterministic demonstration data."} width={1440} height={900} loading={active === 0 ? "eager" : "lazy"} className="h-auto w-full rounded-xl border border-[#D7E6F3] object-contain" />
            </div>
            <div className="p-6 sm:p-8" aria-live="polite" aria-atomic="true">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#006FE8]">Scene {String(active + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#082B5E]">{frame.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#4E607A]">{frame.detail}</p>
              <p className="mt-5 break-all font-mono text-[11px] text-[#66809A]">{frame.route}</p>
              <div className="mt-7 flex items-center gap-3">
                <button type="button" aria-label="Previous screenshot" onClick={() => move(-1)} className="rounded-full border border-[#BAD5EC] bg-white p-3 text-[#0B4C87] hover:bg-[#E8F4FF]"><ChevronLeft className="h-4 w-4" /></button>
                <button type="button" aria-label={playing ? "Pause guided demo" : "Play guided demo"} aria-pressed={playing} onClick={() => setPlaying(p => !p)} className="inline-flex items-center gap-2 rounded-xl bg-[#006FE8] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0055B8]">{playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}{playing ? "Pause" : "Play demo"}</button>
                <button type="button" aria-label="Next screenshot" onClick={() => move(1)} className="rounded-full border border-[#BAD5EC] bg-white p-3 text-[#0B4C87] hover:bg-[#E8F4FF]"><ChevronRight className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-1 border-t border-[#D8E7F4] bg-[#E8F4FF] p-2 sm:p-3" aria-label="Demo scenes">
            {frames.map((item, i) => (
              <button key={item.id} type="button" aria-label={"Show scene " + (i + 1) + ": " + item.title} aria-current={i === active ? "step" : undefined} onClick={() => setActive(i)} className={"h-2 rounded-full transition-colors " + (i === active ? "bg-[#006FE8]" : "bg-[#B3D0E9] hover:bg-[#78A9D8]")} />
            ))}
          </div>
        </div>
        <p className="mt-4 text-xs leading-6 text-[#5E738B]">This is an interactive screenshot walkthrough, not a live screen recording or proof of completed business execution. The screenshots use deterministic demonstration fixtures and reflect an October 13 Workbench build. A separately captured video can be published after verification.</p>
      </div>
    </section>
  );
}
