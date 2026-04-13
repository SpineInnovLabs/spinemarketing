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

export const Slide2 = () => {
  const tools = [
    { domain: 'slack.com', angle: 0 },
    { domain: 'salesforce.com', angle: 60 },
    { domain: 'atlassian.com', angle: 120 },
    { domain: 'stripe.com', angle: 180 },
    { domain: 'hubspot.com', angle: 240 },
    { domain: 'zendesk.com', angle: 300 },
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
        02/04
      </div>

      <div style={{ position: "absolute", top: "4vw", right: "5vw" }}>
        <Logo />
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "0.4vw", backgroundColor: "#34D399" }} />

      <div style={{ textAlign: "center", zIndex: 10 }}>
        <h1 style={{ margin: 0, fontSize: "5.5vw", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.15 }}>We connect them.</h1>
        <h1 style={{ margin: 0, fontSize: "5.5vw", fontWeight: 700, color: "#34D399", lineHeight: 1.15 }}>You see one screen.</h1>
        
        <div style={{ height: "3vw" }} />
        
        <p style={{ margin: 0, fontSize: "3.5vw", fontWeight: 500, color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}>
          Every deal, ticket, and conversation — one view per customer.
        </p>

        <div style={{ position: "relative", width: "40vw", height: "40vw", margin: "5vw auto 0" }}>
          <div style={{ 
            position: "absolute", 
            top: "50%", 
            left: "50%", 
            transform: "translate(-50%, -50%)",
            width: "6vw",
            height: "6vw",
            boxShadow: "0 0 40px rgba(52,211,153,0.3)",
            borderRadius: "50%",
            zIndex: 5
          }}>
            <svg viewBox="0 0 32 32" fill="none" style={{ width: "100%", height: "100%" }}>
              <circle cx="16" cy="16" r="16" fill="#34D399" />
              <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9" />
            </svg>
          </div>

          {tools.map((icon, i) => {
            const radius = 15;
            const angleRad = (icon.angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;
            
            return (
              <React.Fragment key={i}>
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: `${radius}vw`,
                  height: "1px",
                  backgroundColor: "rgba(52,211,153,0.3)",
                  transformOrigin: "0 0",
                  transform: `rotate(${icon.angle}deg)`,
                  zIndex: 1
                }} />
                
                <div
                  style={{
                    position: "absolute",
                    top: `calc(50% + ${y}vw - 2.5vw)`,
                    left: `calc(50% + ${x}vw - 2.5vw)`,
                    width: "5vw",
                    height: "5vw",
                    backgroundColor: "#121118",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                    overflow: "hidden",
                  }}
                >
                  <img src={`/__mockup/images/logos/${icon.domain}`} alt=""
                    style={{ width: "3vw", height: "3vw", objectFit: "contain", borderRadius: "4px" }} />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
