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

export const Slide3 = () => {
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
        03/04
      </div>

      {/* Top Right Logo */}
      <div style={{ position: "absolute", top: "4vw", right: "5vw" }}>
        <Logo />
      </div>

      {/* Bottom Accent */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "0.4vw", backgroundColor: "#2EE5A8" }} />

      {/* Center Content */}
      <div style={{ textAlign: "center", zIndex: 10, width: "100%" }}>
        <h1 style={{ margin: 0, fontSize: "6vw", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.1 }}>AI that acts —</h1>
        <h1 style={{ margin: 0, fontSize: "6vw", fontWeight: 700, color: "#2EE5A8", lineHeight: 1.1 }}>with your approval.</h1>
        
        <div style={{ height: "3vw" }} />
        
        <p style={{ margin: 0, fontSize: "3vw", fontWeight: 500, color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}>
          Confidence scores. Impact previews. You decide.
        </p>

        {/* Approval Card Mockup */}
        <div style={{ 
          marginTop: "4vw", 
          backgroundColor: "#111827", 
          border: "1px solid rgba(255,255,255,0.1)", 
          borderRadius: "10px", 
          padding: "3vw 4vw", 
          maxWidth: "65vw", 
          margin: "4vw auto 0",
          textAlign: "left"
        }}>
          {/* Row 1 */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
            <span style={{ fontSize: "2.8vw", fontWeight: 600, color: "white" }}>Churn Risk Detected</span>
            <span style={{ 
              backgroundColor: "#2EE5A8", 
              color: "#0B0F17", 
              fontWeight: 700, 
              padding: "0.6vw 1.5vw", 
              borderRadius: "6px", 
              fontSize: "2.2vw" 
            }}>
              92/100
            </span>
          </div>

          {/* Row 2 */}
          <div style={{ marginTop: "1.5vw", fontSize: "2.2vw", fontWeight: 400, color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}>
            Recommend: Schedule executive check-in with Acme Corp
          </div>

          {/* Row 3 - Buttons */}
          <div style={{ marginTop: "2vw", display: "flex", gap: "1.5vw" }}>
            <button style={{ 
              backgroundColor: "#2EE5A8", 
              color: "#0B0F17", 
              fontFamily: "'Sora', sans-serif",
              fontWeight: 600, 
              fontSize: "2.2vw", 
              padding: "1vw 2.5vw", 
              borderRadius: "8px",
              border: "none",
              cursor: "pointer"
            }}>
              Approve
            </button>
            <button style={{ 
              backgroundColor: "transparent", 
              border: "1px solid rgba(255,255,255,0.2)", 
              color: "rgba(255,255,255,0.6)", 
              fontFamily: "'Sora', sans-serif",
              fontWeight: 600, 
              fontSize: "2.2vw", 
              padding: "1vw 2.5vw", 
              borderRadius: "8px",
              cursor: "pointer"
            }}>
              Modify
            </button>
            <button style={{ 
              backgroundColor: "transparent", 
              border: "1px solid rgba(235,67,121,0.3)", 
              color: "#EB4379", 
              fontFamily: "'Sora', sans-serif",
              fontWeight: 600, 
              fontSize: "2.2vw", 
              padding: "1vw 2.5vw", 
              borderRadius: "8px",
              cursor: "pointer"
            }}>
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
