import React from 'react';

export function WAStatusV2() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#08070E',
      backgroundImage: 'radial-gradient(circle at 50% 40%, rgba(52,211,153,0.08) 0%, transparent 55%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Inter', sans-serif",
      position: 'relative',
    }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');" }} />

      <div style={{ position: 'absolute', top: '5vw', left: '6vw', display: 'flex', alignItems: 'center', gap: '2vw' }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '5vw', height: '5vw' }}>
          <circle cx="16" cy="16" r="16" fill="#34D399"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{ fontWeight: 700, color: 'white', fontSize: '3.5vw', letterSpacing: '-0.02em' }}>IntegrateWise</span>
      </div>

      <svg viewBox="0 0 32 32" fill="none" style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '40vw', height: '40vw', opacity: 0.04, zIndex: 1,
      }}>
        <circle cx="16" cy="16" r="16" fill="#34D399"/>
        <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
      </svg>

      <div style={{ textAlign: 'center', zIndex: 2, padding: '0 8vw' }}>
        <div style={{ fontWeight: 900, color: 'white', fontSize: '10vw', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
          AI finds
        </div>
        <div style={{ fontWeight: 900, color: 'white', fontSize: '10vw', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
          the risk.
        </div>
        <div style={{ fontWeight: 900, color: '#34D399', fontSize: '10vw', lineHeight: 1.05, letterSpacing: '-0.03em', marginTop: '1vw' }}>
          You decide.
        </div>

        <div style={{ width: '10vw', height: '3px', background: '#34D399', margin: '5vw auto' }} />

        <div style={{ fontWeight: 500, color: 'rgba(255,255,255,0.45)', fontSize: '3.5vw', lineHeight: 1.5, marginBottom: '5vw' }}>
          Nothing fires without your approval. Ever.
        </div>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '3vw',
          backgroundColor: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.3)',
          padding: '2.5vw 6vw', borderRadius: '12px',
        }}>
          <span style={{ fontWeight: 700, color: '#34D399', fontSize: '4vw' }}>Book a Demo</span>
          <span style={{ color: '#34D399', fontSize: '4vw' }}>→</span>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '4vw', display: 'flex', gap: '2vw', alignItems: 'center' }}>
        {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com'].map((d) => (
          <img key={d} src={`/__mockup/images/logos/${d}`} alt="" style={{ width: '4vw', height: '4vw', objectFit: 'contain', opacity: 0.4 }} />
        ))}
        <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '2.2vw', fontWeight: 500 }}>+65 more</span>
      </div>
    </div>
  );
}

export default WAStatusV2;
