import React from "react";

const Logo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
    <svg viewBox="0 0 32 32" fill="none" style={{ width: "3vw", height: "3vw" }}>
      <circle cx="16" cy="16" r="16" fill="#2EE5A8" />
      <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9" />
    </svg>
    <span style={{ color: "white", fontSize: "2.5vw", fontWeight: 600, fontFamily: "Sora, sans-serif" }}>IntegrateWise</span>
  </div>
);

export const Slide1 = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0B0F17",
        position: "relative",
        fontFamily: "'Sora', 'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@400;500;600;700;800&display=swap');",
        }}
      />
      
      {/* Top Left Slide Number */}
      <div style={{ position: "absolute", top: "4vw", left: "5vw", color: "rgba(255,255,255,0.25)", fontSize: "2vw", fontWeight: 400 }}>
        01/04
      </div>

      {/* Top Right Logo */}
      <div style={{ position: "absolute", top: "4vw", right: "5vw" }}>
        <Logo />
      </div>

      {/* Bottom Accent */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "0.4vw", backgroundColor: "#2EE5A8" }} />

      {/* Center Content */}
      <div style={{ textAlign: "center", zIndex: 10 }}>
        <h1 style={{ margin: 0, fontSize: "7vw", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.1 }}>The Productivity</h1>
        <h1 style={{ margin: 0, fontSize: "7vw", fontWeight: 700, color: "#2EE5A8", lineHeight: 1.1 }}>Paradox</h1>
        
        <div style={{ height: "4vw" }} />
        
        <p style={{ margin: 0, fontSize: "3.5vw", fontWeight: 500, color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}>
          More tools. Less clarity.
        </p>

        {/* Scattered Tool Icons */}
        <div style={{ position: "relative", width: "50vw", height: "25vw", margin: "6vw auto 0" }}>
          {[
            { letter: "S", top: "2vw", left: "5vw", color: "#36C5F0" },
            { letter: "S", top: "15vw", left: "12vw", color: "#00A1E0" },
            { letter: "J", top: "6vw", left: "22vw", color: "#2684FF" },
            { letter: "$", top: "18vw", left: "28vw", color: "#00D632" },
            { letter: "H", top: "4vw", left: "38vw", color: "#FF7A59" },
            { letter: "Z", top: "12vw", left: "45vw", color: "#D93F1C" },
          ].map((icon, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: icon.top,
                left: icon.left,
                width: "4vw",
                height: "4vw",
                backgroundColor: "#111827",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: icon.color,
                fontSize: "2vw",
                fontWeight: 700,
                boxShadow: "0 4px 20px rgba(0,0,0,0.5)"
              }}
            >
              {icon.letter}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
