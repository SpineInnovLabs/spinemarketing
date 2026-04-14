import React from 'react';

export function LICompanyV1() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#08070E',
      backgroundImage: 'radial-gradient(ellipse 40% 100% at 50% 50%, rgba(52,211,153,0.06) 0%, transparent 70%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '4vw',
      padding: '0 5vw',
      boxSizing: 'border-box',
      fontFamily: "'Inter', sans-serif",
    }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');" }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '1vw', flexShrink: 0 }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '6vh', height: '6vh' }}>
          <circle cx="16" cy="16" r="16" fill="#34D399"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{ fontWeight: 700, color: 'white', fontSize: '5vh', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>IntegrateWise</span>
      </div>

      <div style={{ width: '1px', height: '40%', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

      <div style={{ fontWeight: 700, color: 'white', fontSize: '4.5vh', whiteSpace: 'nowrap', letterSpacing: '-0.02em' }}>
        The Spine connects{' '}
        <span style={{ color: '#34D399' }}>your apps.</span>
      </div>

      <div style={{ width: '1px', height: '40%', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

      <div style={{ display: 'flex', gap: '1vw', alignItems: 'center', flexShrink: 0 }}>
        {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com'].map((d) => (
          <img key={d} src={`/__mockup/images/logos/${d}`} alt="" style={{ width: '4vh', height: '4vh', borderRadius: '4px', objectFit: 'contain' }} />
        ))}
      </div>
    </div>
  );
}

export default LICompanyV1;
