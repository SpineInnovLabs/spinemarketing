export function WorkbenchShellRecording() {
  return (
    <section id="workbench-recording" aria-labelledby="workbench-recording-title" className="scroll-mt-20 bg-[#F0F8FF] py-16 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#006FE8]">Live Workbench Views</p>
        <h2 id="workbench-recording-title" className="mt-4 text-[length:min(clamp(2rem,4vw,3.3rem),var(--marketing-heading-size))] font-semibold leading-tight tracking-[-.04em] text-[#082B5E]">Inside the Workbench shell.</h2>
        <p className="mt-4 max-w-[870px] text-base leading-8 text-[#4E607A]">Watch the shared navigation, operating view and work-view search respond in a recording of the actual Workbench application.</p>
        <div className="mt-8 overflow-hidden rounded-3xl border border-[#CBE5FA] bg-white shadow-[0_18px_60px_rgba(15,70,130,.09)]">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D8E7F4] px-5 py-3 text-xs font-semibold text-[#082B5E]">
            <span>Workbench shell · FounderOps</span>
            <span className="rounded-full border border-[#CBE5FA] bg-[#E8F4FF] px-3 py-1 text-[#006FE8]">Live Workbench Views</span>
          </div>
          <video controls playsInline preload="none" width={1440} height={900} poster="/images/workbench/founderops/cockpit-20261014.webp" aria-label="Recorded Workbench shell walkthrough" aria-describedby="workbench-recording-provenance" className="aspect-[16/10] h-auto w-full bg-white">
            <source src="/videos/workbench/workbench-shell-20261014.mp4" type="video/mp4" />
            <track kind="captions" src="/videos/workbench/workbench-shell-20261014.vtt" srcLang="en" label="English scene descriptions" default />
            <a href="/videos/workbench/workbench-shell-20261014.mp4">Download the Workbench shell recording</a>
          </video>
        </div>
        <p id="workbench-recording-provenance" className="mt-4 max-w-[1080px] text-xs leading-6 text-[#5E738B]">Recorded October 14 from the actual local Workbench using existing QA fixtures. The recording shows real interface interactions. Figures, workflow states and the host-status badge are fixture content; they do not establish live customer telemetry, verified host access or completed provider execution.</p>
        <details className="mt-3 text-xs leading-6 text-[#4E607A]">
          <summary className="w-fit cursor-pointer rounded-sm font-semibold text-[#006FE8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">Read the walkthrough transcript</summary>
          <p className="mt-3 max-w-[950px]">The FounderOps view sits inside the shared Workbench navigation. Sales &amp; Pipeline collapses and expands to show fixture opportunities and contacts. Marketing &amp; Campaigns opens its fixture rows. Operations opens workflow and task rows. Work-view search opens and is dismissed. No consequential action or external provider operation is performed.</p>
        </details>
      </div>
    </section>
  );
}
