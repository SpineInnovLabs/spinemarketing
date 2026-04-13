import React from 'react';

export default function FBStories() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#08070E',
      backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(52,211,153,0.08) 0%, transparent 50%)',
      position: 'relative',
      fontFamily: "'Inter', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8vw 5vw 6vw',
      boxSizing: 'border-box',
    }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');" }} />

      <svg viewBox="0 0 32 32" fill="none" style={{ width: '8vw', height: '8vw' }}>
        <circle cx="16" cy="16" r="16" fill="#34D399" />
        <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9" />
      </svg>

      <div style={{ textAlign: 'center', zIndex: 10 }}>
        <div style={{ fontWeight: 500, color: 'rgba(255,255,255,0.5)', fontSize: '4vw', marginBottom: '1vw' }}>
          8 tools.
        </div>
        <div style={{ fontWeight: 700, color: 'white', fontSize: '8vw', lineHeight: 1.15 }}>
          One screen.
        </div>
        <div style={{ fontWeight: 500, color: 'rgba(255,255,255,0.5)', fontSize: '4vw', marginTop: '1vw' }}>
          Zero copy-paste.
        </div>

        <div style={{ marginTop: '4vw' }}>
          <div style={{ fontWeight: 700, color: '#34D399', fontSize: '6vw', lineHeight: 1.15 }}>
            IntegrateWise.
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5vw', alignItems: 'center', marginTop: '4vw' }}>
          {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com'].map((d) => (
            <img key={d} src={`/__mockup/images/logos/${d}`} alt=""
              style={{ width: '4.5vw', height: '4.5vw', borderRadius: '6px', objectFit: 'contain', opacity: 0.6 }} />
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
        <button style={{
          backgroundColor: '#34D399',
          color: '#08070E',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          fontSize: '3.5vw',
          padding: '2vw 6vw',
          borderRadius: '10px',
          border: 'none',
          boxShadow: '0 0 40px rgba(52,211,153,0.3)',
          cursor: 'pointer',
        }}>
          Book a Demo &rarr;
        </button>
        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '2.5vw', marginTop: '2vw' }}>
          integratewise.ai
        </div>
      </div>
    </div>
  );
}
