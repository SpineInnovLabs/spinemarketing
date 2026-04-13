import React from "react";

export const Slide4 = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#08070E",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');",
        }}
      />
      
      <div style={{ position: "absolute", top: "4vw", left: "5vw", color: "rgba(255,255,255,0.25)", fontSize: "2vw", fontWeight: 400 }}>
        04/04
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "0.4vw", backgroundColor: "#34D399" }} />

      <div style={{ textAlign: "center", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: "10vw", height: "10vw" }}>
          <circle cx="16" cy="16" r="16" fill="#34D399" />
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9" />
        </svg>

        <h1 style={{ margin: "3vw 0 0", fontSize: "7vw", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.1 }}>
          IntegrateWise
        </h1>
        <h2 style={{ margin: "1.5vw 0 0", fontSize: "3.5vw", fontWeight: 400, color: "#34D399", lineHeight: 1.2 }}>
          Every customer. Every tool. One screen.
        </h2>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5vw', marginTop: '3vw' }}>
          {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com'].map((d) => (
            <img key={d} src={`/__mockup/images/logos/${d}`} alt=""
              style={{ width: '3vw', height: '3vw', borderRadius: '5px', objectFit: 'contain' }} />
          ))}
        </div>
        
        <div style={{ height: "3vw" }} />
        
        <button style={{
          backgroundColor: "#34D399",
          color: "#08070E",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          fontSize: "3.5vw",
          padding: "2vw 5vw",
          borderRadius: "10px",
          border: "none",
          boxShadow: "0 0 40px rgba(52,211,153,0.3)",
          cursor: "pointer"
        }}>
          Book a Demo →
        </button>
        
        <div style={{ margin: "2vw 0 0", fontSize: "2.5vw", fontWeight: 400, color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif" }}>
          integratewise.ai
        </div>
      </div>
    </div>
  );
};
