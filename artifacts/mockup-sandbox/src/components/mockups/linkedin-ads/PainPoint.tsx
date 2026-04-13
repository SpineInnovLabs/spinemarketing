import React from "react";

export function PainPoint() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "rgb(8,7,14)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Hero Image */}
      <img
        src="/__mockup/images/ad-pain.png"
        alt="Pain Point"
        style={{
          position: "absolute",
          inset: 0,
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />

      {/* Top Gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "30%",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)",
        }}
      />

      {/* Dark Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "60%",
          background: "linear-gradient(to top, rgba(0,0,0,0.88), transparent)",
        }}
      />

      {/* Logo Top Left */}
      <div
        style={{
          position: "absolute",
          top: "4vw",
          left: "4vw",
          display: "flex",
          alignItems: "center",
          gap: "1.5vw",
        }}
      >
        <svg width="6vw" height="6vw" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#1ba784" />
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9" />
        </svg>
        <span
          style={{
            color: "white",
            fontWeight: 700,
            fontSize: "3.5vw",
          }}
        >
          IntegrateWise
        </span>
      </div>

      {/* Bottom Text Area */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          padding: "4vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            color: "#1ba784",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontSize: "2vw",
            fontWeight: 700,
            marginBottom: "2vw",
          }}
        >
          LinkedIn Sponsored
        </div>

        {/* Headline */}
        <h1
          style={{
            color: "white",
            fontSize: "9vw",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            margin: 0,
          }}
        >
          12 tabs.<br />0 clarity.
        </h1>

        {/* Subtext */}
        <p
          style={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "3.2vw",
            fontWeight: 600,
            marginTop: "1.5vw",
            marginBottom: 0,
          }}
        >
          Stop translating between tools.
        </p>

        {/* CTA Button */}
        <div
          style={{
            backgroundColor: "#1ba784",
            color: "white",
            borderRadius: "0.5rem",
            padding: "1.5vw 3vw",
            fontSize: "3vw",
            fontWeight: 700,
            marginTop: "3vw",
            display: "inline-block",
          }}
        >
          See it live &rarr;
        </div>
      </div>
    </div>
  );
}
