import React from 'react';

export function CoverA() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      background: '#0B0F17',
      fontFamily: 'Sora, Inter, system-ui, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 4vw',
      boxSizing: 'border-box',
      position: 'relative',
    }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');" }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5vw', flexShrink: 0 }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '4vh', height: '4vh' }}>
          <circle cx="16" cy="16" r="16" fill="#2EE5A8"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: 'white', fontSize: '4vh', whiteSpace: 'nowrap' }}>
          IntegrateWise
        </span>
      </div>

      <div style={{ textAlign: 'center', flex: 1, padding: '0 3vw' }}>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'white', fontSize: '4.5vh', whiteSpace: 'nowrap' }}>
          Every customer. Every tool. One screen.
        </div>
        <div style={{ width: '12vw', height: '1px', background: '#2EE5A8', margin: '1.5vh auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5vw', alignItems: 'center' }}>
          {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com'].map((d) => (
            <img key={d} src={`https://logo.clearbit.com/${d}`} alt=""
              style={{ width: '2.5vh', height: '2.5vh', borderRadius: '3px', objectFit: 'contain' }} />
          ))}
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.4)', fontSize: '2.5vh' }}>
            +66 more apps
          </span>
        </div>
      </div>

      <div style={{
        border: '1px solid #2EE5A8',
        color: '#2EE5A8',
        fontFamily: 'Sora, sans-serif',
        fontWeight: 500,
        padding: '1.5vh 2vw',
        borderRadius: '10px',
        fontSize: '2.8vh',
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}>
        Book a Demo →
      </div>
    </div>
  );
}
