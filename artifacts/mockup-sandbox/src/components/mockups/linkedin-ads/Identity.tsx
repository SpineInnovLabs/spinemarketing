import React from 'react';

export function Identity() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative', background: 'rgb(8,7,14)', fontFamily: '"Inter", sans-serif' }}>
      <img 
        src="/__mockup/images/ad-identity.png" 
        style={{ position: 'absolute', inset: 0, objectFit: 'cover', width: '100%', height: '100%' }} 
        alt="Data streams converging to emerald orb"
      />
      
      {/* Dark gradient bottom */}
      <div style={{ position: 'absolute', width: '100%', bottom: 0, height: '55%', background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.9))' }}></div>
      
      {/* Top left vignette */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '50%', background: 'radial-gradient(circle at top left, rgba(0,0,0,0.4), transparent 70%)' }}></div>
      
      {/* Logo */}
      <div style={{ position: 'absolute', top: '4vw', left: '4vw', display: 'flex', alignItems: 'center', gap: '1.5vw', zIndex: 10 }}>
        <svg style={{ width: '4vw', height: '4vw' }} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#1ba784"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{ color: 'white', fontWeight: 700, fontSize: '3.5vw', letterSpacing: '-0.02em' }}>IntegrateWise</span>
      </div>
      
      {/* Bottom text area */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '4vw', width: '100%', boxSizing: 'border-box', zIndex: 10 }}>
        <div style={{ 
          color: '#1ba784', 
          textTransform: 'uppercase', 
          letterSpacing: '0.1em', 
          fontSize: '2vw', 
          marginBottom: '2vw',
          fontWeight: 600
        }}>
          Adaptive Spine Architecture
        </div>
        
        <h1 style={{ 
          color: 'white', 
          fontSize: '9.5vw', 
          fontWeight: 900, 
          lineHeight: 1.0, 
          letterSpacing: '-0.05em', 
          textShadow: '0 2px 20px rgba(0,0,0,0.5)',
          margin: '0 0 2vw 0'
        }}>
          AI proposes.<br/>You approve.
        </h1>
        
        <p style={{ 
          color: 'rgba(255,255,255,0.65)', 
          fontSize: '3.2vw', 
          fontWeight: 600, 
          margin: '0 0 3vw 0',
          letterSpacing: '-0.01em'
        }}>
          One Spine. Every system. One truth.
        </p>
        
        <button style={{ 
          backgroundColor: '#1ba784', 
          color: 'white', 
          borderRadius: '9999px', 
          padding: '1.5vw 3.5vw', 
          fontSize: '2.8vw', 
          fontWeight: 700, 
          border: 'none',
          boxShadow: '0 0 24px rgba(27,167,132,0.5)',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '1vw'
        }}>
          See how it works <span style={{ fontSize: '1.2em', lineHeight: 1 }}>→</span>
        </button>
      </div>
    </div>
  );
}
