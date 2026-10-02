"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { readAppearance, storeAppearance, type Appearance } from "@/lib/appearance";

const options: { id: Appearance; label: string; hint: string; icon: typeof Sun }[] = [
  { id: "auto", label: "Auto", hint: "Match system setting", icon: Monitor },
  { id: "light", label: "Light", hint: "Always light", icon: Sun },
  { id: "dark", label: "Dark", hint: "Always dark", icon: Moon },
];

export function AppearanceMenu() {
  const [appearance, setAppearance] = useState<Appearance>("auto");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const current = options.find((option) => option.id === appearance) ?? options[0];
  const Icon = current.icon;

  useEffect(() => {
    setAppearance(readAppearance());
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function choose(next: Appearance) {
    setAppearance(next);
    storeAppearance(next);
    setOpen(false);
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="inline-flex h-10 items-center gap-2 rounded-[10px] px-2.5 text-[14px] font-semibold text-[#032D60] hover:bg-[#F3F6F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0176D3] focus-visible:ring-offset-2"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`Appearance, ${current.label}`}
        onClick={() => setOpen((value) => !value)}
      >
        <Icon className="h-4 w-4" aria-hidden />
      </button>
      {open && (
        <div
          id={menuId}
          role="menu"
          aria-label="Appearance"
          className="absolute right-0 z-50 mt-2 w-56 rounded-xl border border-[#D9E4EF] bg-white p-1.5 shadow-[0_8px_24px_rgba(3,45,96,0.12)]"
        >
          {options.map((option) => {
            const OptionIcon = option.icon;
            const selected = option.id === appearance;
            return (
              <button
                key={option.id}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                className={`flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0176D3] ${
                  selected ? "bg-[#EAF5FC]" : "hover:bg-[#F3F6F9]"
                }`}
                onClick={() => choose(option.id)}
              >
                <OptionIcon className="h-4 w-4 shrink-0 text-[#0176D3]" aria-hidden />
                <span className="min-w-0">
                  <span className="block text-[14px] font-semibold text-[#032D60]">{option.label}</span>
                  <span className="block text-[12px] text-[#526479]">{option.hint}</span>
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
