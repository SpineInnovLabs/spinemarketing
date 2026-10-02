"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { integrationLogoCandidates } from "@/lib/integration-logos";
import type { ConnectorNavMark, KindNavMark } from "@/lib/integration-nav";

const tileClass =
  "flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#D9E4EF] bg-white text-[#0176D3] transition-colors duration-150 hover:border-[#0176D3] hover:bg-[#EAF5FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0176D3] focus-visible:ring-offset-2 motion-reduce:transition-none";

function ConnectorMark({ name, href }: ConnectorNavMark) {
  const candidates = useMemo(() => integrationLogoCandidates(name), [name]);
  const [index, setIndex] = useState(0);
  const currentSrc = candidates[index];

  return (
    <Link href={href} aria-label={name} className={tileClass}>
      {currentSrc ? (
        <img
          src={currentSrc}
          alt=""
          width={22}
          height={22}
          className="h-5 w-5 object-contain"
          loading="lazy"
          onError={() => setIndex((prev) => prev + 1)}
        />
      ) : (
        <span className="px-0.5 text-center text-[9px] font-semibold leading-[1.15] break-words text-[#032D60]">{name}</span>
      )}
    </Link>
  );
}

export function IntegrationMarkGroups({
  connectors,
  kinds,
}: {
  connectors: ConnectorNavMark[];
  kinds?: KindNavMark[];
}) {
  return (
    <div className="min-w-0">
      <ul className="flex flex-wrap gap-2" aria-label="Connectors">
        {connectors.map((mark) => (
          <li key={mark.name}>
            <ConnectorMark {...mark} />
          </li>
        ))}
      </ul>
      {kinds && kinds.length > 0 && (
        <div className="mt-4 border-t border-[#D9E4EF] pt-4">
          <p className="sr-only">Integration kinds</p>
          <ul className="flex flex-wrap gap-2" aria-label="Integration kinds">
            {kinds.map((kind) => {
              const Icon = kind.icon;
              return (
                <li key={kind.name}>
                  <Link href={kind.href} aria-label={kind.name} className={`${tileClass} bg-[#F3F6F9]`}>
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
