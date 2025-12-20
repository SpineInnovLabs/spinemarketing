export function ArchitectureSection() {
  return (
    <section id="architecture" aria-label="Architecture snapshot" className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">Architecture</h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">Schema-first, AI-assisted data flow</p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="overflow-hidden rounded-xl border border-border bg-card p-8">
            <svg
              className="w-full"
              viewBox="0 0 800 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Architecture: Sources → Normalization → Orchestration → Channels"
            >
              <title>System Architecture Diagram</title>
              <desc>
                Data flows from multiple sources through normalization and orchestration to various output channels
              </desc>

              {/* Sources */}
              <rect
                x="20"
                y="80"
                width="120"
                height="60"
                rx="8"
                className="fill-primary/10 stroke-primary"
                strokeWidth="2"
              />
              <text x="80" y="115" className="fill-foreground text-sm font-medium" textAnchor="middle">
                Sources
              </text>

              {/* Arrow 1 */}
              <path d="M 160 110 L 240 110" className="stroke-primary" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* Normalization */}
              <rect
                x="260"
                y="80"
                width="120"
                height="60"
                rx="8"
                className="fill-primary/10 stroke-primary"
                strokeWidth="2"
              />
              <text x="320" y="115" className="fill-foreground text-sm font-medium" textAnchor="middle">
                Normalization
              </text>

              {/* Arrow 2 */}
              <path d="M 400 110 L 480 110" className="stroke-primary" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* Orchestration */}
              <rect
                x="500"
                y="80"
                width="120"
                height="60"
                rx="8"
                className="fill-primary/10 stroke-primary"
                strokeWidth="2"
              />
              <text x="560" y="115" className="fill-foreground text-sm font-medium" textAnchor="middle">
                Orchestration
              </text>

              {/* Arrow 3 */}
              <path d="M 640 110 L 720 110" className="stroke-primary" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* Channels */}
              <rect
                x="740"
                y="80"
                width="120"
                height="60"
                rx="8"
                className="fill-primary/10 stroke-primary"
                strokeWidth="2"
              />
              <text x="800" y="115" className="fill-foreground text-sm font-medium" textAnchor="middle">
                Channels
              </text>

              {/* Arrow marker */}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="10"
                  refX="8"
                  refY="3"
                  orient="auto"
                  className="fill-primary"
                >
                  <polygon points="0 0, 10 3, 0 6" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
