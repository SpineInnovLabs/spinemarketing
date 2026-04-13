import React from "react";

const tabs = [
  { name: "HubSpot", domain: "hubspot.com", color: "#FF7A59", active: false },
  { name: "Jira", domain: "atlassian.com", color: "#0052CC", active: false },
  { name: "Slack", domain: "slack.com", color: "#4A154B", active: false },
  { name: "Zendesk", domain: "zendesk.com", color: "#03363D", active: true },
  { name: "Salesforce", domain: "salesforce.com", color: "#00A1E0", active: false },
  { name: "Intercom", domain: "intercom.com", color: "#286EFA", active: false },
  { name: "Notion", domain: "notion.so", color: "#000000", active: false },
  { name: "Gainsight", domain: "gainsight.com", color: "#FF6B35", active: false },
  { name: "Gmail", domain: "google.com", color: "#EA4335", active: false },
  { name: "Sheets", domain: "google.com", color: "#34A853", active: false },
  { name: "Monday", domain: "monday.com", color: "#FF3D57", active: false },
  { name: "Mixpanel", domain: "mixpanel.com", color: "#7856FF", active: false },
];

export function PainV2() {
  const tabWidth = 100 / tabs.length;

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

      <div
        style={{
          position: "absolute",
          top: "13%",
          left: "5%",
          right: "5%",
          borderRadius: "1.2vw 1.2vw 0 0",
          overflow: "hidden",
          zIndex: 5,
          boxShadow: "0 -4px 40px rgba(0,0,0,0.5)",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "stretch",
            height: "4.5vh",
            paddingLeft: "0.5vw",
            paddingTop: "0.5vw",
          }}
        >
          {tabs.map((tab, i) => (
            <div
              key={i}
              style={{
                flex: `0 0 ${tabWidth}%`,
                display: "flex",
                alignItems: "center",
                gap: "0.4vw",
                padding: "0 0.8vw",
                background: tab.active ? "rgba(255,255,255,0.08)" : "transparent",
                borderRadius: "0.6vw 0.6vw 0 0",
                borderRight: "1px solid rgba(255,255,255,0.05)",
                cursor: "default",
                overflow: "hidden",
                minWidth: 0,
              }}
            >
              <img
                src={`/__mockup/images/logos/${tab.domain}`}
                alt=""
                style={{ width: "1.4vw", height: "1.4vw", borderRadius: "2px", flexShrink: 0 }}
              />
              <span
                style={{
                  color: tab.active ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.3)",
                  fontSize: "0.95vw",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {tab.name}
              </span>
              <span
                style={{
                  color: "rgba(255,255,255,0.15)",
                  fontSize: "0.8vw",
                  marginLeft: "auto",
                  flexShrink: 0,
                }}
              >
                ×
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            height: "3.5vh",
            display: "flex",
            alignItems: "center",
            padding: "0 1.5vw",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              borderRadius: "1vw",
              padding: "0.3vw 1.2vw",
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: "0.5vw",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "0.9vw" }}>🔒</span>
            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.9vw" }}>
              acme-corp.zendesk.com/agent/tickets/8847
            </span>
          </div>
        </div>

        <div
          style={{
            background: "rgba(10,18,40,0.95)",
            height: "48vh",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "2.5vw 3vw" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: "1vw", marginBottom: "2vw",
            }}>
              <div style={{
                background: "rgba(3,54,61,0.3)",
                padding: "0.5vw 1.2vw",
                borderRadius: "0.5vw",
                color: "#03363D",
                fontSize: "1.1vw",
                fontWeight: 700,
                border: "1px solid rgba(3,54,61,0.2)",
              }}>
                OPEN
              </div>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.2vw" }}>
                Ticket #8847 · Acme Corp
              </span>
            </div>
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.6vw", fontWeight: 600, marginBottom: "1vw" }}>
              API integration broken — customer blocked
            </div>
            <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "1.2vw", lineHeight: 1.5 }}>
              The sync between our platform and their HubSpot instance stopped
              working 3 days ago. Customer says they're manually copying data
              between systems. Escalated by Sarah.
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "60%",
              background: "linear-gradient(to top, rgba(10,18,40,0.98), transparent)",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "2vw",
              left: "3vw",
              right: "3vw",
              display: "flex",
              alignItems: "center",
              gap: "1.5vw",
            }}
          >
            {[
              { q: "What's their deal stage?", tool: "Check HubSpot" },
              { q: "Any open Jira tickets?", tool: "Check Jira" },
              { q: "Last Slack thread?", tool: "Check Slack" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "0.8vw",
                  padding: "1.2vw",
                  textAlign: "center",
                }}
              >
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.1vw", marginBottom: "0.3vw" }}>
                  {item.q}
                </div>
                <div style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.95vw" }}>
                  → {item.tool}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "38%",
          background: "linear-gradient(to top, #0A1228 0%, #0A1228 30%, transparent 100%)",
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
        <div style={{
          color: "rgba(255,255,255,0.35)",
          fontSize: "1.6vw",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          marginBottom: "1vw",
        }}>
          12 tabs. One customer.
        </div>
        <div
          style={{
            fontSize: "7.5vw",
            fontWeight: 900,
            color: "white",
            lineHeight: 0.95,
            letterSpacing: "-0.045em",
          }}
        >
          Sound
          <br />
          familiar?
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
            Try one screen <span style={{ fontSize: "1.1em" }}>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PainV2;
