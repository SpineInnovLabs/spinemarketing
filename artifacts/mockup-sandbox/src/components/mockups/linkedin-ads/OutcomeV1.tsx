import React from "react";

export function OutcomeV1() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0A1228",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Background Image */}
      <img
        src="/__mockup/images/ref-homepage-hero.png"
        alt="Adaptive Spine Architecture"
        style={{
          position: "absolute",
          inset: 0,
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />

      {/* Vignette Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 20%, rgba(8,14,30,0.65) 100%)",
        }}
      />

      {/* Logo Strip */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding: "3vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <svg
            width="2.5vw"
            height="2.5vw"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="#1ba784" />
            <path
              d="M8 16c2.667-2.667 5.333-2.667 8 0s5.333 2.667 8 0"
              stroke="#fff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              color: "#fff",
              fontSize: "1.8vw",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            IntegrateWise
          </span>
        </div>
      </div>

      {/* Center Card */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          padding: "5vw",
          textAlign: "center",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          background: "rgba(10,18,40,0.72)",
          border: "1px solid rgba(27,167,132,0.25)",
          borderRadius: "2vw",
        }}
      >
        <div
          style={{
            textTransform: "uppercase",
            color: "#1ba784",
            fontSize: "1.4vw",
            letterSpacing: "0.14em",
            fontWeight: 700,
          }}
        >
          ADAPTIVE SPINE ARCHITECTURE
        </div>
        <h1
          style={{
            fontSize: "6.5vw",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            marginTop: "1.5vw",
            marginBottom: 0,
          }}
        >
          Your apps, finally united.
        </h1>
        <div
          style={{
            margin: "2.5vw auto",
            width: "5vw",
            height: "0.25vw",
            background: "#1ba784",
          }}
        />
        <p
          style={{
            fontSize: "2vw",
            color: "rgba(255,255,255,0.55)",
            fontWeight: 500,
            lineHeight: 1.5,
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          The Adaptive Spine connects every tool. Your AI reads everything and
          tells you what to do next.
        </p>
        <div
          style={{
            marginTop: "3vw",
            display: "inline-block",
            background: "#1ba784",
            color: "#fff",
            borderRadius: "0.8vw",
            padding: "1.4vw 4vw",
            fontSize: "2.2vw",
            fontWeight: 700,
          }}
        >
          Book a demo &rarr;
        </div>
        <div
          style={{
            marginTop: "1.8vw",
            fontSize: "1.4vw",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          70+ connectors &middot; SOC 2 certified &middot; No code
        </div>
      </div>
    </div>
  );
}

export default OutcomeV1;
