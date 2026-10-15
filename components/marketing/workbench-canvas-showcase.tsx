"use client";

import { useState } from "react";
import { BookOpen, Database, FileText, Network } from "lucide-react";

const views = [
  { id: "document", label: "Document", icon: FileText, title: "Bring narrative and business records together.", detail: "An editable document combines text, a record table, metric blocks and contextual Twin assistance. Unbound metrics remain visible as missing values." },
  { id: "database", label: "Database", icon: Database, title: "Review the same records as a searchable table.", detail: "The database mode presents the renewal contract and expansion opportunity with their status, stage and owner. Search changes the records in view." },
  { id: "graph", label: "Context graph", icon: Network, title: "Explore business context spatially.", detail: "The graph connects a renewal work item to an agreement and its related diagram. The capture uses the application’s graph-test envelope, including a separate decision node." },
  { id: "library", label: "Block library", icon: BookOpen, title: "Compose a workspace from reusable blocks.", detail: "The component library offers text, tables, metrics, governed-action blocks and Twin blocks inside the document surface." },
] as const;

export function WorkbenchCanvasShowcase() {
  const [active, setActive] = useState<(typeof views)[number]["id"]>("document");
  const view = views.find(item => item.id === active) ?? views[0];

  return (
    <div className="mt-8" id="workbench-canvas">
      <div className="overflow-hidden rounded-2xl border border-[#CCE3F5] bg-white lg:grid lg:grid-cols-[190px_minmax(0,1fr)]">
        <aside className="bg-[#032D60] p-5 text-white">
          <p className="text-sm font-semibold">SpineWorkspace</p>
          <p className="mt-1 text-xs text-[#C4DDF5]">Canvas views</p>
          <div className="mt-5 flex flex-wrap gap-2 lg:flex-col" role="group" aria-label="Canvas view selection">
            {views.map(({ id, label, icon: Icon }) => (
              <button key={id} type="button" aria-pressed={active === id} onClick={() => setActive(id)} className={`inline-flex min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${active === id ? "bg-[#006FE8] text-white" : "text-[#D6E8F8] hover:bg-white/10"}`}>
                <Icon className="h-4 w-4 shrink-0" aria-hidden />{label}
              </button>
            ))}
          </div>
        </aside>
        <figure className="min-w-0 bg-white">
          <figcaption className="border-b border-[#E2EEF8] px-5 py-4" aria-live="polite" aria-atomic="true">
            <h3 className="text-[length:var(--marketing-card-size)] font-semibold leading-snug">{view.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#4E607A]">{view.detail}</p>
          </figcaption>
          <a href={`/images/workbench/canvas/${active}-20261015.webp`} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${view.label} canvas capture`} className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006FE8]">
            <img src={`/images/workbench/canvas/${active}-20261015.webp`} alt={`Application CanvasSurface component capture: ${view.label}, using existing application QA fixtures.`} width={960} height={900} loading="lazy" className="h-auto w-full" />
          </a>
        </figure>
      </div>
      <p className="mt-4 text-xs leading-6 text-[#596F89]">Desktop captures from the application’s actual canvas component in an isolated preview using its existing QA records. Open an image to inspect it at full size. The blue frame is the marketing view selector. Sync, source and action labels belong to the component UI; these captures do not verify connected data, saved edits or provider execution.</p>
    </div>
  );
}
