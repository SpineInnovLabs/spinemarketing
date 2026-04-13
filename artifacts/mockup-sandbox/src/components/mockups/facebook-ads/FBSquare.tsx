import React from 'react';

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5vw' }}>
    <svg viewBox="0 0 32 32" fill="none" style={{ width: '4vw', height: '4vw' }}>
      <circle cx="16" cy="16" r="16" fill="#34D399" />
      <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9" />
    </svg>
    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: 'white', fontSize: '2.8vw', letterSpacing: '-0.02em' }}>
      IntegrateWise
    </span>
  </div>
);

export default function FBSquare() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#08070E',
      backgroundImage: 'radial-gradient(circle at 50% 40%, rgba(52,211,153,0.06) 0%, transparent 60%)',
      position: 'relative',
      fontFamily: "'Inter', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');" }} />

      <div style={{ position: 'absolute', top: '4vw', left: '4vw', zIndex: 10 }}>
        <Logo />
      </div>

      <div style={{ textAlign: 'center', zIndex: 10, padding: '0 5vw' }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: 'white', fontSize: '7vw', lineHeight: 1.15 }}>
          Every customer.
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: '#34D399', fontSize: '7vw', lineHeight: 1.15 }}>
          One screen.
        </div>

        <div style={{ width: '4vw', height: '2px', backgroundColor: '#34D399', margin: '3vw auto' }} />

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5vw', alignItems: 'center', marginBottom: '2vw' }}>
          {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com', 'intercom.com'].map((d) => (
            <img key={d} src={`/__mockup/images/logos/${d}`} alt=""
              style={{ width: '3vw', height: '3vw', borderRadius: '4px', objectFit: 'contain' }} />
          ))}
        </div>

        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: 'rgba(255,255,255,0.55)', fontSize: '2.5vw' }}>
          Deals, tickets, and conversations from 70+ apps — on one screen per account.
        </div>

        <button style={{
          backgroundColor: '#34D399',
          color: '#08070E',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          fontSize: '2.8vw',
          padding: '1.5vw 4vw',
          borderRadius: '10px',
          marginTop: '4vw',
          border: 'none',
          boxShadow: '0 0 30px rgba(52,211,153,0.3)',
          cursor: 'pointer',
        }}>
          Book a Demo &rarr;
        </button>
      </div>

      <div style={{ position: 'absolute', bottom: '4vw', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '3vw' }}>
        <span style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.35)', fontSize: '1.8vw' }}>70+ Apps</span>
        <span style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.35)', fontSize: '1.8vw' }}>·</span>
        <span style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.35)', fontSize: '1.8vw' }}>No Code</span>
        <span style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.35)', fontSize: '1.8vw' }}>·</span>
        <span style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.35)', fontSize: '1.8vw' }}>SOC 2</span>
      </div>
    </div>
  );
}
