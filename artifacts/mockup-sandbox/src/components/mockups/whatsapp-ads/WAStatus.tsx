import React from 'react';

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '2vw' }}>
    <svg viewBox="0 0 32 32" fill="none" style={{ width: '5vw', height: '5vw' }}>
      <circle cx="16" cy="16" r="16" fill="#34D399" />
      <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9" />
    </svg>
    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: 'white', fontSize: '3.5vw', letterSpacing: '-0.02em' }}>
      IntegrateWise
    </span>
  </div>
);

export const WAStatus: React.FC = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#08070E',
        backgroundImage: 'radial-gradient(circle at 50% 35%, rgba(235,67,121,0.06) 0%, transparent 60%)',
        position: 'relative',
        fontFamily: "'Inter', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');" }} />

      <div style={{ position: 'absolute', top: '4vw', left: '5vw', zIndex: 10 }}>
        <Logo />
      </div>

      <div style={{ textAlign: 'center', zIndex: 10, padding: '0 5vw', marginTop: '8vw' }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: 'rgba(255,255,255,0.5)', fontSize: '3vw', lineHeight: 1.2 }}>
          Stop being the
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, color: '#EB4379', fontSize: '9vw', lineHeight: 1.1, marginTop: '1vw' }}>
          human API.
        </div>

        <div style={{ height: '4vw' }} />

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2vw', alignItems: 'center', marginBottom: '2vw' }}>
          {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com'].map((d) => (
            <img key={d} src={`/__mockup/images/logos/${d}`} alt=""
              style={{ width: '4vw', height: '4vw', borderRadius: '4px', objectFit: 'contain' }} />
          ))}
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, color: 'rgba(255,255,255,0.35)', fontSize: '2.5vw' }}>+65 more</span>
        </div>

        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: '#34D399', fontSize: '3vw' }}>
          There's a better way.
        </div>

        <button style={{
          backgroundColor: '#34D399',
          color: '#08070E',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          fontSize: '3.5vw',
          padding: '2vw 5vw',
          borderRadius: '10px',
          marginTop: '4vw',
          border: 'none',
          boxShadow: '0 0 30px rgba(52,211,153,0.3)',
          cursor: 'pointer',
        }}>
          Book a Demo &rarr;
        </button>
      </div>

      <div style={{ position: 'absolute', bottom: '4vw', left: 0, right: 0, textAlign: 'center', fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.3)', fontSize: '2vw' }}>
        integratewise.ai
      </div>
    </div>
  );
};
