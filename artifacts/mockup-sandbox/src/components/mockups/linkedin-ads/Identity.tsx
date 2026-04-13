import React from 'react';

export function Identity() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: '#081020',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Hero Image FULL BLEED */}
      <img 
        src="/__mockup/images/ref-data-hub.png" 
        alt="Data Hub"
        style={{
          position: 'absolute', 
          inset: 0, 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          objectPosition: 'center'
        }} 
      />

      {/* Top overlay gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '50%',
        background: 'linear-gradient(to bottom, rgba(8,16,32,0.92) 0%, rgba(8,16,32,0.7) 60%, transparent 100%)'
      }} />

      {/* Bottom overlay strip */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '15%',
        background: 'linear-gradient(to top, rgba(8,16,32,0.95), transparent)'
      }} />

      {/* Top content */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        padding: '3.5vw',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {/* Logo row */}
        <div style={{
          display: 'flex',
          gap: '1.5vw',
          alignItems: 'center'
        }}>
          <svg width="3.5vw" height="3.5vw" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#1ba784"/>
            <path d="M10 20C15 20 15 12 20 12C25 12 25 28 30 28C35 28 35 20 40 20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          <span style={{
            color: 'white',
            fontSize: '3vw',
            fontWeight: 700
          }}>IntegrateWise</span>
        </div>

        {/* Eyebrow */}
        <div style={{
          marginTop: '3vw',
          textTransform: 'uppercase',
          color: '#1ba784',
          fontSize: '1.6vw',
          letterSpacing: '0.14em',
          fontWeight: 700
        }}>
          Adaptive Spine Architecture
        </div>

        {/* Headline */}
        <div style={{
          marginTop: '1.5vw',
          fontSize: '8.5vw',
          fontWeight: 900,
          color: 'white',
          lineHeight: 1.0,
          letterSpacing: '-0.05em',
          textShadow: '0 2px 40px rgba(0,0,0,0.8)',
          whiteSpace: 'pre-line'
        }}>
          {"Every app.\nOne intelligence."}
        </div>

        {/* Subtext */}
        <div style={{
          marginTop: '2vw',
          fontSize: '2.4vw',
          color: 'rgba(255,255,255,0.65)',
          fontWeight: 600,
          maxWidth: '60%',
          lineHeight: 1.4
        }}>
          70+ connectors. One Spine. AI that proposes. You that approves.
        </div>
      </div>

      {/* Bottom strip */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '2.5vw 3.5vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box'
      }}>
        {/* LEFT: CTA button */}
        <div style={{
          background: '#1ba784',
          color: 'white',
          borderRadius: '100vw',
          padding: '1.5vw 4vw',
          fontSize: '2.4vw',
          fontWeight: 700,
          boxShadow: '0 0 30px rgba(27,167,132,0.45)',
          display: 'flex',
          alignItems: 'center',
          gap: '1vw'
        }}>
          See how it works
          <span style={{ fontSize: '1.2em', lineHeight: 1 }}>→</span>
        </div>

        {/* RIGHT: stat badge */}
        <div style={{
          background: 'rgba(255,255,255,0.2)',
          color: 'rgba(255,255,255,0.6)',
          borderRadius: '100vw',
          padding: '0.8vw 2vw',
          fontSize: '1.8vw',
          fontWeight: 600,
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          70+ integrations
        </div>
      </div>
    </div>
  );
}