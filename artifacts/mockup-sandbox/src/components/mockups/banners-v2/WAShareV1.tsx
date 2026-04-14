import React from 'react';

export function WAShareV1() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#08070E',
      backgroundImage: 'radial-gradient(circle at 50% 45%, rgba(52,211,153,0.07) 0%, transparent 60%)',
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

      <div style={{ textAlign: 'center', zIndex: 2, padding: '0 6vw' }}>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '7vw', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
          Every customer.
        </div>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '7vw', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
          Every tool.
        </div>
        <div style={{ fontWeight: 800, color: '#34D399', fontSize: '7vw', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
          One screen.
        </div>

        <div style={{ width: '8vw', height: '2px', background: '#34D399', margin: '4vw auto' }} />

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5vw', marginBottom: '3vw' }}>
          {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com', 'intercom.com'].map((d) => (
            <div key={d} style={{
              width: '7vw', height: '7vw', borderRadius: '12px',
              backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <img src={`/__mockup/images/logos/${d}`} alt="" style={{ width: '4vw', height: '4vw', objectFit: 'contain' }} />
            </div>
          ))}
        </div>

        <div style={{ fontWeight: 500, color: 'rgba(255,255,255,0.45)', fontSize: '3vw', marginBottom: '4vw' }}>
          Deals, tickets, conversations — live from 70+ apps.
        </div>

        <div style={{
          display: 'inline-block',
          backgroundColor: '#34D399',
          color: '#08070E',
          fontWeight: 700,
          fontSize: '3.5vw',
          padding: '2vw 7vw',
          borderRadius: '10px',
          boxShadow: '0 0 30px rgba(52,211,153,0.25)',
        }}>
          Book a Demo →
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '4vw', color: 'rgba(255,255,255,0.25)', fontSize: '2.2vw', fontWeight: 500 }}>
        integratewise.ai
      </div>
    </div>
  );
}

export default WAShareV1;
