import React from "react";

const notifications = [
  { tool: "hubspot.com", label: "HubSpot", color: "#FF7A59", title: "Deal stage changed", body: "Acme Corp moved to Negotiation — no activity in 12 days", time: "2m ago", x: 4, y: 18, rot: -1.5, z: 7 },
  { tool: "atlassian.com", label: "Jira", color: "#0052CC", title: "Ticket escalated to P1", body: "ACME-4821: API integration broken — customer blocked", time: "5m ago", x: 8, y: 30, rot: 1.2, z: 6 },
  { tool: "slack.com", label: "Slack", color: "#4A154B", title: "#acme-account", body: "@you: \"Did anyone talk to them about the renewal?\"", time: "8m ago", x: 2, y: 42, rot: -0.8, z: 5 },
  { tool: "zendesk.com", label: "Zendesk", color: "#03363D", title: "Case #8847 reopened", body: "Customer reply: \"This still isn't fixed.\"", time: "11m ago", x: 12, y: 54, rot: 2.1, z: 4 },
  { tool: "salesforce.com", label: "Salesforce", color: "#00A1E0", title: "Forecast updated", body: "Q3 pipeline dropped $240K — 3 deals at risk", time: "14m ago", x: 5, y: 66, rot: -1.8, z: 3 },
  { tool: "intercom.com", label: "Intercom", color: "#286EFA", title: "New conversation", body: "Acme Corp: \"We need to talk about our contract.\"", time: "18m ago", x: 10, y: 78, rot: 0.6, z: 2 },
];

const ghostNotifs = [
  { x: 55, y: 12, rot: 2.5, opacity: 0.08, w: 38 },
  { x: 50, y: 35, rot: -1.5, opacity: 0.06, w: 42 },
  { x: 48, y: 58, rot: 3.2, opacity: 0.05, w: 35 },
  { x: 52, y: 75, rot: -2.8, opacity: 0.04, w: 40 },
];

export function PainV1() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#08070E",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          width: "70vw",
          height: "70vh",
          transform: "translate(-50%, 0)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(235,67,121,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {ghostNotifs.map((g, i) => (
        <div
          key={`ghost-${i}`}
          style={{
            position: "absolute",
            left: `${g.x}%`,
            top: `${g.y}%`,
            width: `${g.w}vw`,
            height: "6vh",
            borderRadius: "1vw",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.04)",
            transform: `rotate(${g.rot}deg)`,
            opacity: g.opacity,
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          top: "2%",
          right: "3%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "0.5vw",
          zIndex: 1,
        }}
      >
        <div style={{
          background: "rgba(235,67,121,0.15)",
          border: "1px solid rgba(235,67,121,0.3)",
          borderRadius: "2vw",
          padding: "0.5vw 1.5vw",
          color: "#EB4379",
          fontSize: "1.8vw",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          gap: "0.6vw",
        }}>
          <span style={{
            width: "1vw",
            height: "1vw",
            borderRadius: "50%",
            background: "#EB4379",
            display: "inline-block",
            animation: "pulse 2s ease-in-out infinite",
          }} />
          6 unread
        </div>
        <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "1.2vw" }}>
          across 6 tools
        </span>
      </div>

      {notifications.map((n, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${n.x}%`,
            top: `${n.y}%`,
            width: "52vw",
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "1.2vw",
            padding: "1.8vw 2vw",
            transform: `rotate(${n.rot}deg)`,
            zIndex: n.z,
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "0.6vw" }}>
            <img
              src={`/__mockup/images/logos/${n.tool}`}
              alt={n.label}
              style={{ width: "2.2vw", height: "2.2vw", borderRadius: "0.4vw" }}
            />
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.3vw", fontWeight: 600 }}>
              {n.label}
            </span>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "1.1vw", marginLeft: "auto" }}>
              {n.time}
            </span>
          </div>
          <div style={{ color: "white", fontSize: "1.6vw", fontWeight: 700, marginBottom: "0.3vw" }}>
            {n.title}
          </div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.3vw", lineHeight: 1.3 }}>
            {n.body}
          </div>
        </div>
      ))}

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background: "linear-gradient(to top, #08070E 0%, #08070E 20%, transparent 100%)",
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
            fontSize: "7.5vw",
            fontWeight: 900,
            color: "white",
            lineHeight: 0.95,
            letterSpacing: "-0.045em",
          }}
        >
          This is your
          <br />
          Monday.
        </div>
        <div
          style={{
            fontSize: "2.2vw",
            color: "rgba(255,255,255,0.45)",
            fontWeight: 500,
            marginTop: "2vw",
            lineHeight: 1.4,
          }}
        >
          6 tools. 6 alerts. One customer. Zero context.
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
            See one screen instead <span style={{ fontSize: "1.1em" }}>→</span>
          </div>
        </div>
      </div>

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

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
}

export default PainV1;
