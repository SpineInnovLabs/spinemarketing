import React from "react";

const Logo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
    <svg viewBox="0 0 32 32" fill="none" style={{ width: "3vw", height: "3vw" }}>
      <circle cx="16" cy="16" r="16" fill="#34D399" />
      <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9" />
    </svg>
    <span style={{ color: "white", fontSize: "2.5vw", fontWeight: 600, fontFamily: "Inter, sans-serif" }}>IntegrateWise</span>
  </div>
);

export const Slide1 = () => {
  const tools = [
    { domain: 'slack.com', top: '2vw', left: '5vw' },
    { domain: 'salesforce.com', top: '15vw', left: '12vw' },
    { domain: 'atlassian.com', top: '6vw', left: '22vw' },
    { domain: 'stripe.com', top: '18vw', left: '28vw' },
    { domain: 'hubspot.com', top: '4vw', left: '38vw' },
    { domain: 'zendesk.com', top: '12vw', left: '45vw' },
  ];

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
        01/04
      </div>

      <div style={{ position: "absolute", top: "4vw", right: "5vw" }}>
        <Logo />
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "0.4vw", backgroundColor: "#34D399" }} />

      <div style={{ textAlign: "center", zIndex: 10 }}>
        <h1 style={{ margin: 0, fontSize: "5.5vw", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.15 }}>You use 8+ tools.</h1>
        <h1 style={{ margin: 0, fontSize: "5.5vw", fontWeight: 700, color: "#34D399", lineHeight: 1.15 }}>None of them talk.</h1>
        
        <div style={{ height: "3vw" }} />
        
        <p style={{ margin: 0, fontSize: "2.8vw", fontWeight: 500, color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}>
          So you copy-paste between tabs. Every. Single. Day.
        </p>

        <div style={{ position: "relative", width: "50vw", height: "25vw", margin: "6vw auto 0" }}>
          {tools.map((icon, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: icon.top,
                left: icon.left,
                width: "5vw",
                height: "5vw",
                backgroundColor: "#121118",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                overflow: "hidden",
              }}
            >
              <img src={`/__mockup/images/logos/${icon.domain}`} alt=""
                style={{ width: "3vw", height: "3vw", objectFit: "contain", borderRadius: "4px" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
