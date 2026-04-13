import React from "react";

const tools = [
  { name: "HubSpot", domain: "hubspot.com", x: 15, y: 15, size: 5.5 },
  { name: "Jira", domain: "atlassian.com", x: 72, y: 10, size: 5 },
  { name: "Slack", domain: "slack.com", x: 45, y: 32, size: 5.5 },
  { name: "Zendesk", domain: "zendesk.com", x: 82, y: 38, size: 5 },
  { name: "Salesforce", domain: "salesforce.com", x: 25, y: 48, size: 5 },
  { name: "Intercom", domain: "intercom.com", x: 60, y: 55, size: 4.5 },
  { name: "Notion", domain: "notion.so", x: 10, y: 35, size: 4 },
  { name: "Gmail", domain: "google.com", x: 88, y: 22, size: 4 },
];

const connections: [number, number][] = [
  [0, 2], [0, 4], [0, 6], [1, 2], [1, 3], [1, 7],
  [2, 3], [2, 4], [2, 5], [3, 5], [3, 7], [4, 5],
  [4, 6], [5, 7], [0, 3], [1, 5], [6, 2], [0, 7],
  [4, 3], [6, 5], [1, 4],
];

export function PainV3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#0A1228",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding: "3vw 3.5vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
          zIndex: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.2vw" }}>
          <svg width="3vw" height="3vw" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#1ba784" />
            <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9" />
          </svg>
          <span style={{ color: "white", fontWeight: 700, fontSize: "2.8vw", letterSpacing: "-0.02em" }}>
            IntegrateWise
          </span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.4vw", fontWeight: 500 }}>
          Sponsored
        </div>
      </div>

      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(235,67,121,0.15)" />
            <stop offset="50%" stopColor="rgba(235,67,121,0.08)" />
            <stop offset="100%" stopColor="rgba(235,67,121,0.15)" />
          </linearGradient>
        </defs>
        {connections.map(([a, b], i) => {
          const ta = tools[a];
          const tb = tools[b];
          const mx = (ta.x + tb.x) / 2 + (Math.sin(i * 1.7) * 8);
          const my = (ta.y + tb.y) / 2 + (Math.cos(i * 2.3) * 6);
          return (
            <path
              key={i}
              d={`M ${ta.x} ${ta.y} Q ${mx} ${my} ${tb.x} ${tb.y}`}
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="0.15"
              opacity={0.4 + Math.sin(i) * 0.2}
            />
          );
        })}
      </svg>

      {tools.map((tool, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${tool.x}%`,
            top: `${tool.y}%`,
            transform: "translate(-50%, -50%)",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.6vw",
          }}
        >
          <div
            style={{
              width: `${tool.size}vw`,
              height: `${tool.size}vw`,
              borderRadius: "1.2vw",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              backdropFilter: "blur(10px)",
            }}
          >
            <img
              src={`/__mockup/images/logos/${tool.domain}`}
              alt={tool.name}
              style={{
                width: `${tool.size * 0.55}vw`,
                height: `${tool.size * 0.55}vw`,
                borderRadius: "0.3vw",
                objectFit: "contain",
              }}
            />
          </div>
          <span
            style={{
              color: "rgba(255,255,255,0.25)",
              fontSize: "1vw",
              fontWeight: 500,
            }}
          >
            {tool.name}
          </span>
        </div>
      ))}

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "42%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: "28vw",
            height: "28vw",
            borderRadius: "50%",
            border: "1px dashed rgba(235,67,121,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "16vw",
              height: "16vw",
              borderRadius: "50%",
              border: "1px dashed rgba(235,67,121,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                color: "rgba(235,67,121,0.2)",
                fontSize: "1.6vw",
                fontWeight: 600,
                textAlign: "center",
                lineHeight: 1.3,
              }}
            >
              your
              <br />
              customer
              <br />
              data
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "42%",
          background: "linear-gradient(to top, #0A1228 0%, #0A1228 25%, transparent 100%)",
          zIndex: 10,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "4vw",
          left: "4vw",
          right: "4vw",
          zIndex: 11,
        }}
      >
        <div
          style={{
            fontSize: "7vw",
            fontWeight: 900,
            color: "white",
            lineHeight: 0.95,
            letterSpacing: "-0.045em",
          }}
        >
          This is how
          <br />
          your data
          <br />
          <span style={{ color: "rgba(235,67,121,0.7)" }}>actually</span> flows.
        </div>
        <div
          style={{
            fontSize: "2vw",
            color: "rgba(255,255,255,0.4)",
            fontWeight: 500,
            marginTop: "2vw",
            lineHeight: 1.4,
          }}
        >
          8 tools. 21 connections. No single source of truth.
        </div>
        <div style={{ marginTop: "2.5vw", display: "flex", alignItems: "center", gap: "2vw" }}>
          <div
            style={{
              background: "#1ba784",
              color: "white",
              borderRadius: "0.8vw",
              padding: "1.3vw 3.5vw",
              fontSize: "2.2vw",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.8vw",
              boxShadow: "0 0 40px rgba(27,167,132,0.3)",
            }}
          >
            See it unified <span style={{ fontSize: "1.1em" }}>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PainV3;
