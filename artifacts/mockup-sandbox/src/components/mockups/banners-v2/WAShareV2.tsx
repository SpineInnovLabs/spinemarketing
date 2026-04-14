import React from 'react';

export function WAShareV2() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#08070E',
      backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(52,211,153,0.06) 0%, transparent 55%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Inter', sans-serif",
      position: 'relative',
    }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');" }} />

      <div style={{ position: 'absolute', top: '5vw', left: '5vw', display: 'flex', alignItems: 'center', gap: '2vw' }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '5vw', height: '5vw' }}>
          <circle cx="16" cy="16" r="16" fill="#34D399"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{ fontWeight: 700, color: 'white', fontSize: '3.5vw', letterSpacing: '-0.02em' }}>IntegrateWise</span>
      </div>

      <svg viewBox="0 0 32 32" fill="none" style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '35vw', height: '35vw', opacity: 0.03, zIndex: 1,
      }}>
        <circle cx="16" cy="16" r="16" fill="#34D399"/>
        <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
      </svg>

      <div style={{ textAlign: 'center', zIndex: 2, padding: '0 6vw' }}>
        <div style={{ fontWeight: 500, color: 'rgba(255,255,255,0.4)', fontSize: '3vw', marginBottom: '2vw', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          The Spine
        </div>
        <div style={{ fontWeight: 900, color: 'white', fontSize: '7.5vw', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
          connects
        </div>
        <div style={{ fontWeight: 900, color: '#34D399', fontSize: '7.5vw', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
          your apps.
        </div>

        <div style={{ width: '6vw', height: '2px', background: '#34D399', margin: '4vw auto' }} />

        <div style={{
          display: 'inline-block',
          background: '#121118',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '14px',
          padding: '3vw 4vw',
          marginBottom: '3vw',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3vw', marginBottom: '2vw' }}>
            {['hubspot.com', 'slack.com', 'atlassian.com'].map((d) => (
              <img key={d} src={`/__mockup/images/logos/${d}`} alt="" style={{ width: '5vw', height: '5vw', objectFit: 'contain' }} />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2vw', marginBottom: '2vw' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(52,211,153,0.3)' }} />
            <svg viewBox="0 0 32 32" fill="none" style={{ width: '5vw', height: '5vw' }}>
              <circle cx="16" cy="16" r="16" fill="#34D399"/>
              <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
            </svg>
            <div style={{ flex: 1, height: '1px', background: 'rgba(52,211,153,0.3)' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3vw' }}>
            {['zendesk.com', 'salesforce.com', 'intercom.com'].map((d) => (
              <img key={d} src={`/__mockup/images/logos/${d}`} alt="" style={{ width: '5vw', height: '5vw', objectFit: 'contain' }} />
            ))}
          </div>
        </div>

        <div style={{ fontWeight: 500, color: 'rgba(255,255,255,0.4)', fontSize: '2.8vw' }}>
          One canonical truth. Every tool unified.
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '4vw', color: 'rgba(255,255,255,0.25)', fontSize: '2.2vw', fontWeight: 500 }}>
        integratewise.ai
      </div>
    </div>
  );
}

export default WAShareV2;
