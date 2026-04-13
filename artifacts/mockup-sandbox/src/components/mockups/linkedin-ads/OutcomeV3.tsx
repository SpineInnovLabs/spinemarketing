import React from 'react';

export function OutcomeV3() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: '#0A1228',
        fontFamily: '"Inter", sans-serif',
      }}
    >
      {/* Image Layer */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: '12vh',
        }}
      >
        <img
          src="/__mockup/images/ref-homepage-hero.png"
          alt="Hero"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />
      </div>

      {/* Top-left vignette */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '30%',
          background: 'linear-gradient(135deg, rgba(10,18,40,0.85) 0%, transparent 100%)',
        }}
      />

      {/* Bottom gradient bridge */}
      <div
        style={{
          position: 'absolute',
          bottom: '12vh',
          left: 0,
          right: 0,
          height: '20vh',
          background: 'linear-gradient(transparent, #0A1228)',
        }}
      />

      {/* Logo Row */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '3vw',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1vw' }}>
          <svg width="3vw" height="3vw" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#1BA784"/>
            <path d="M10 20C10 20 13.5 15 20 15C26.5 15 30 20 30 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 25C10 25 13.5 20 20 20C26.5 20 30 25 30 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ color: 'white', fontWeight: 700, fontSize: '3vw' }}>
            IntegrateWise
          </span>
        </div>
        
        {/* Badge */}
        <div
          style={{
            border: '0.15vw solid #1ba784',
            color: '#1ba784',
            fontSize: '1.5vw',
            padding: '0.4vw 1.2vw',
            borderRadius: '2vw',
            fontWeight: 600,
          }}
        >
          AI Workspace
        </div>
      </div>

      {/* Bottom Text Bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '12vh',
          background: '#0A1228',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 4vw',
          borderTop: '1px solid rgba(27,167,132,0.15)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              textTransform: 'uppercase',
              color: '#1ba784',
              fontSize: '1.3vw',
              letterSpacing: '0.1em',
              fontWeight: 700,
              marginBottom: '0.5vh',
              display: 'block',
            }}
          >
            ADAPTIVE SPINE ARCHITECTURE
          </span>
          <h1
            style={{
              fontSize: '4.5vw',
              fontWeight: 900,
              color: 'white',
              lineHeight: 1.0,
              letterSpacing: '-0.04em',
              margin: 0,
            }}
          >
            Your apps, finally united.
          </h1>
        </div>

        <button
          style={{
            background: '#1ba784',
            color: 'white',
            borderRadius: '100vw',
            padding: '1.5vw 4vw',
            fontSize: '2.4vw',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            boxShadow: '0 0 30px rgba(27,167,132,0.4)',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Book a demo →
        </button>
      </div>
    </div>
  );
}
