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

export const Slide2 = () => {
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
        02/04
      </div>

      {/* Top Right Logo */}
      <div style={{ position: "absolute", top: "4vw", right: "5vw" }}>
        <Logo />
      </div>

      {/* Bottom Accent */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "0.4vw", backgroundColor: "#2EE5A8" }} />

      {/* Center Content */}
      <div style={{ textAlign: "center", zIndex: 10 }}>
        <h1 style={{ margin: 0, fontSize: "6.5vw", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.1 }}>The Spine connects</h1>
        <h1 style={{ margin: 0, fontSize: "6.5vw", fontWeight: 700, color: "#2EE5A8", lineHeight: 1.1 }}>everything.</h1>
        
        <div style={{ height: "3vw" }} />
        
        <p style={{ margin: 0, fontSize: "3.5vw", fontWeight: 500, color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}>
          One normalized truth layer.
        </p>

        {/* Connected Tool Icons */}
        <div style={{ position: "relative", width: "40vw", height: "40vw", margin: "5vw auto 0" }}>
          {/* Central Logo */}
          <div style={{ 
            position: "absolute", 
            top: "50%", 
            left: "50%", 
            transform: "translate(-50%, -50%)",
            width: "6vw",
            height: "6vw",
            boxShadow: "0 0 40px rgba(46,229,168,0.3)",
            borderRadius: "50%",
            zIndex: 5
          }}>
            <svg viewBox="0 0 32 32" fill="none" style={{ width: "100%", height: "100%" }}>
              <circle cx="16" cy="16" r="16" fill="#2EE5A8" />
              <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9" />
            </svg>
          </div>

          {/* Lines and Icons */}
          {[
            { letter: "S", angle: 0, color: "#36C5F0" },
            { letter: "S", angle: 60, color: "#00A1E0" },
            { letter: "J", angle: 120, color: "#2684FF" },
            { letter: "$", angle: 180, color: "#00D632" },
            { letter: "H", angle: 240, color: "#FF7A59" },
            { letter: "Z", angle: 300, color: "#D93F1C" },
          ].map((icon, i) => {
            const radius = 15; // vw
            const angleRad = (icon.angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;
            
            return (
              <React.Fragment key={i}>
                {/* Connecting Line */}
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: `${radius}vw`,
                  height: "1px",
                  backgroundColor: "rgba(46,229,168,0.3)",
                  transformOrigin: "0 0",
                  transform: `rotate(${icon.angle}deg)`,
                  zIndex: 1
                }} />
                
                {/* Icon */}
                <div
                  style={{
                    position: "absolute",
                    top: `calc(50% + ${y}vw - 2vw)`,
                    left: `calc(50% + ${x}vw - 2vw)`,
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
                    zIndex: 2,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.5)"
                  }}
                >
                  {icon.letter}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
