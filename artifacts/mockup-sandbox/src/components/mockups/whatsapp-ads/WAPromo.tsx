import React from 'react';

export const WAPromo: React.FC = () => {
  return (
    <div
      style={{
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
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');" }} />

      <svg viewBox="0 0 32 32" fill="none" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '25vw',
        height: '25vw',
        opacity: 0.06,
        zIndex: 1,
      }}>
        <circle cx="16" cy="16" r="16" fill="#34D399" />
        <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9" />
      </svg>

      <div style={{ zIndex: 10, textAlign: 'center' }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: 'white', fontSize: '7vw', lineHeight: 1.1 }}>
          AI finds the risk.
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: 'white', fontSize: '7vw', lineHeight: 1.1 }}>
          You make
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: '#34D399', fontSize: '7vw', lineHeight: 1.1 }}>
          the call.
        </div>

        <div style={{ height: '3vw' }} />

        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: 'rgba(255,255,255,0.5)', fontSize: '3vw', lineHeight: 1.4 }}>
          Nothing executes until you say so. Ever.
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2vw', marginTop: '3vw', alignItems: 'center' }}>
          {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com'].map((d) => (
            <img key={d} src={`/__mockup/images/logos/${d}`} alt=""
              style={{ width: '3.5vw', height: '3.5vw', borderRadius: '4px', objectFit: 'contain', opacity: 0.5 }} />
          ))}
          <span style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.25)', fontSize: '2.5vw' }}>+65 more</span>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '5vw',
        left: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2vw',
        zIndex: 10,
      }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '3vw', height: '3vw' }}>
          <circle cx="16" cy="16" r="16" fill="#34D399" />
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9" />
        </svg>
        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: 'white', fontSize: '2vw' }}>
          IntegrateWise
        </span>
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '2vw' }}>|</span>
        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: '#34D399', fontSize: '2vw' }}>
          Book a Demo
        </span>
      </div>
    </div>
  );
};
