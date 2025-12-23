export function LogosSection() {
  const partners = [
    { name: "n8n", type: "Partner" },
    { name: "HubSpot", type: "Partner" },
    { name: "MuleSoft", type: "Partner" },
    { name: "Salesforce", type: "Platform" },
    { name: "Slack", type: "Platform" },
    { name: "Zendesk", type: "Platform" },
    { name: "Gainsight", type: "Platform" },
    { name: "Neon", type: "Infrastructure" },
  ]

  return (
    <section className="border-y border-border/60 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
          Strategic Partners & Platforms We Integrate
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              <span className="text-base font-semibold tracking-wide text-foreground/80 transition-colors hover:text-foreground">
                {partner.name}
              </span>
              <span className="text-xs text-muted-foreground">{partner.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
