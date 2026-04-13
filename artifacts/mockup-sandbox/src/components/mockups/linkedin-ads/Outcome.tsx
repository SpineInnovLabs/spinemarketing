import React from 'react';

export function Outcome() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
      background: 'rgb(8,7,14)',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Hero Image */}
      <img
        src="/__mockup/images/ad-outcome.png"
        alt="Confident executive at window, teal city glow"
        style={{
          position: 'absolute',
          inset: 0,
          objectFit: 'cover',
          width: '100%',
          height: '100%'
        }}
      />

      {/* Top gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '25%',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)'
      }} />

      {/* Bottom gradient overlay */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '65%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.92), transparent)'
      }} />

      {/* Logo Top Left */}
      <div style={{
        position: 'absolute',
        top: '4vw',
        left: '4vw',
        display: 'flex',
        alignItems: 'center',
        gap: '1.5vw',
        zIndex: 10
      }}>
        <svg width="6vw" height="6vw" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '32px', maxHeight: '32px' }}>
          <circle cx="16" cy="16" r="16" fill="#1ba784"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{
          color: 'white',
          fontWeight: 700,
          fontSize: '3.5vw',
          letterSpacing: '-0.02em'
        }}>
          IntegrateWise
        </span>
      </div>

      {/* Bottom Content */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: '4vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        zIndex: 10
      }}>
        {/* Badge */}
        <div style={{
          background: 'rgba(27, 167, 132, 0.15)',
          border: '1px solid rgba(27, 167, 132, 0.3)',
          color: '#1ba784',
          padding: '0.75vw 2vw',
          borderRadius: '9999px',
          fontSize: '2vw',
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          marginBottom: '3vw'
        }}>
          New — AI Workspace
        </div>

        {/* Headline */}
        <h1 style={{
          color: 'white',
          fontSize: '8.5vw',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.04em',
          margin: 0,
          maxWidth: '90%'
        }}>
          Connect once.<br/>Know everything.
        </h1>

        {/* Subtext */}
        <p style={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '3vw',
          fontWeight: 600,
          marginTop: '2vw',
          marginBottom: 0
        }}>
          Your AI already read every account.
        </p>

        {/* CTA Button */}
        <button style={{
          background: '#1ba784',
          color: 'white',
          border: 'none',
          borderRadius: '0.5rem',
          padding: '1.5vw 3vw',
          fontSize: '3vw',
          fontWeight: 700,
          marginTop: '3vw',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '1vw',
          boxShadow: '0 4px 14px 0 rgba(27, 167, 132, 0.39)'
        }}>
          Book a demo
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
}
