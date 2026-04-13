import React from 'react';

export function CoverB() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at center, rgba(65,84,163,0.15) 0%, rgba(235,67,121,0.08) 40%, transparent 70%), #08070E',
      fontFamily: 'Inter, system-ui, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 4vw',
      boxSizing: 'border-box',
      position: 'relative',
    }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');" }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5vw', flexShrink: 0 }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '4vh', height: '4vh' }}>
          <circle cx="16" cy="16" r="16" fill="#34D399"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: 'white', fontSize: '4vh', whiteSpace: 'nowrap' }}>
          IntegrateWise
        </span>
      </div>

      <div style={{ flex: 1, textAlign: 'right', paddingLeft: '5vw' }}>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: 'white', fontSize: '4vh' }}>
          You check 8 tools before one customer call.
        </div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#34D399', fontSize: '2.5vh', marginTop: '1vh' }}>
          We built one screen to replace all of them.
        </div>
        <div style={{ display: 'flex', gap: '1vw', marginTop: '1.5vh', justifyContent: 'flex-end', alignItems: 'center' }}>
          {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com', 'intercom.com'].map((d) => (
            <img key={d} src={`/__mockup/images/logos/${d}`} alt=""
              style={{ width: '2.2vh', height: '2.2vh', borderRadius: '3px', objectFit: 'contain', opacity: 0.6 }} />
          ))}
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.3)', fontSize: '2vh' }}>+64 more</span>
        </div>
      </div>
    </div>
  );
}
