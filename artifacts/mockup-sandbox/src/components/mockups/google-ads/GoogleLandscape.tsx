import React from 'react';

export function GoogleLandscape() {
  const tools = [
    { domain: 'hubspot.com', angle: 0 },
    { domain: 'slack.com', angle: 72 },
    { domain: 'atlassian.com', angle: 144 },
    { domain: 'zendesk.com', angle: 216 },
    { domain: 'salesforce.com', angle: 288 },
  ];

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: '#08070E', position: 'relative', fontFamily: "'Inter', sans-serif", display: 'flex' }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');" }} />

      <div style={{
        width: '55%',
        height: '100%',
        paddingLeft: '4vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box',
        zIndex: 2,
      }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '5vw', height: '5vw', marginBottom: '2vw' }}>
          <circle cx="16" cy="16" r="16" fill="#34D399" />
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9" />
        </svg>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: 'white', fontSize: '5vw', lineHeight: 1.1 }}>Every customer.</div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: '#34D399', fontSize: '5vw', lineHeight: 1.1 }}>One screen.</div>
        <div style={{ width: '4vw', height: '2px', backgroundColor: '#34D399', margin: '1.5vw 0' }} />
        <div style={{ display: 'flex', gap: '0.8vw', alignItems: 'center', marginBottom: '1vw' }}>
          {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com'].map((d) => (
            <img key={d} src={`/__mockup/images/logos/${d}`} alt=""
              style={{ width: '2.5vw', height: '2.5vw', borderRadius: '4px', objectFit: 'contain' }} />
          ))}
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.8vw' }}>+65 more</span>
        </div>
        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '2.2vw', lineHeight: 1.4 }}>Deals, tickets, and conversations from 70+ apps — one view per account.</div>
        <div style={{ backgroundColor: '#34D399', color: '#08070E', fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '2.2vw', padding: '1.2vw 3vw', borderRadius: '8px', marginTop: '2vw', display: 'inline-block', width: 'fit-content' }}>Book a Demo &rarr;</div>
      </div>

      <div style={{
        width: '45%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ position: 'relative', width: '30vw', height: '30vw' }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '5vw',
            height: '5vw',
            boxShadow: '0 0 40px rgba(52,211,153,0.3)',
            borderRadius: '50%',
            zIndex: 5,
          }}>
            <svg viewBox="0 0 32 32" fill="none" style={{ width: '100%', height: '100%' }}>
              <circle cx="16" cy="16" r="16" fill="#34D399" />
              <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9" />
            </svg>
          </div>

          {tools.map((icon, i) => {
            const radius = 12;
            const angleRad = (icon.angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;

            return (
              <React.Fragment key={i}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: `${radius}vw`,
                  height: '1px',
                  backgroundColor: 'rgba(52,211,153,0.25)',
                  transformOrigin: '0 0',
                  transform: `rotate(${icon.angle}deg)`,
                  zIndex: 1,
                }} />
                <div style={{
                  position: 'absolute',
                  top: `calc(50% + ${y}vw - 2vw)`,
                  left: `calc(50% + ${x}vw - 2vw)`,
                  width: '4vw',
                  height: '4vw',
                  backgroundColor: '#121118',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                  overflow: 'hidden',
                }}>
                  <img src={`/__mockup/images/logos/${icon.domain}`} alt=""
                    style={{ width: '2.5vw', height: '2.5vw', objectFit: 'contain', borderRadius: '4px' }} />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
