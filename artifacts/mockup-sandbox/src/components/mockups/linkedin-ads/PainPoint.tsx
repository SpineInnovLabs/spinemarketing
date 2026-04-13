import React from "react";

export function PainPoint() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#0A1228",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Hero Image */}
      <img
        src="/__mockup/images/ref-flying-blind.png"
        alt="Flying Blind vs Flying With Sight"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: "30%",
          objectFit: "cover",
          width: "100%",
          height: "70%",
        }}
      />

      {/* Top Nav Strip */}
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "10vh",
          background: "rgba(10,18,40,0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 3vw",
          boxSizing: "border-box",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
          <svg
            width="3vw"
            height="3vw"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="#1ba784" />
            <path
              d="M8 16 Q16 8 24 16 Q16 24 8 16Z"
              fill="white"
              opacity="0.9"
            />
          </svg>
          <span
            style={{
              color: "white",
              fontWeight: 700,
              fontSize: "3vw",
              letterSpacing: "-0.02em",
            }}
          >
            IntegrateWise
          </span>
        </div>
        <div
          style={{
            color: "rgba(255, 255, 255, 0.4)",
            fontSize: "1.5vw",
            fontWeight: 500,
          }}
        >
          Sponsored
        </div>
      </div>

      {/* Bottom Text Area */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "38%",
          background: "linear-gradient(transparent, #0A1228 40%)",
          padding: "4vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          boxSizing: "border-box",
          zIndex: 10,
        }}
      >
        <div
          style={{
            textTransform: "uppercase",
            fontSize: "1.8vw",
            color: "#1ba784",
            letterSpacing: "0.12em",
            fontWeight: 700,
            marginBottom: "2vw",
          }}
        >
          Adaptive Spine Architecture
        </div>
        <div
          style={{
            fontSize: "8vw",
            fontWeight: 900,
            color: "white",
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
          }}
        >
          Stop flying blind.
        </div>
        <div
          style={{
            fontSize: "2.8vw",
            color: "rgba(255, 255, 255, 0.6)",
            fontWeight: 600,
            marginTop: "1.5vw",
          }}
        >
          One workspace. Every signal. Every account.
        </div>
        <div
          style={{
            background: "#1ba784",
            color: "white",
            borderRadius: "0.8vw",
            padding: "1.4vw 3.5vw",
            fontSize: "2.4vw",
            fontWeight: 700,
            marginTop: "3vw",
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          See it live &rarr;
        </div>
      </div>
    </div>
  );
}

export default PainPoint;
