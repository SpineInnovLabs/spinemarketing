import React from 'react';

export function OutcomeV3() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
      background: '#0A1228',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <img
        src="/__mockup/images/hero-outcome.png"
        alt=""
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: '12vh',
          width: '100%',
          height: 'calc(100% - 12vh)',
          objectFit: 'cover',
          objectPosition: 'center top',
        }}
      />

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '50%',
        height: '30%',
        background: 'linear-gradient(135deg, rgba(10,18,40,0.85) 0%, transparent 100%)',
        zIndex: 1,
      }} />

      <div style={{
        position: 'absolute',
        bottom: '12vh',
        left: 0,
        right: 0,
        height: '20vh',
        background: 'linear-gradient(transparent, #0A1228)',
        zIndex: 1,
      }} />

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: '3vw 3.5vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        zIndex: 3,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw' }}>
          <svg width="3vw" height="3vw" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#1ba784"/>
            <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
          </svg>
          <span style={{ color: 'white', fontWeight: 700, fontSize: '2.8vw', letterSpacing: '-0.02em' }}>
            IntegrateWise
          </span>
        </div>
        <div style={{ display: 'flex', gap: '0.8vw', alignItems: 'center' }}>
          {['hubspot.com', 'slack.com', 'atlassian.com', 'salesforce.com'].map((d) => (
            <img key={d} src={`/__mockup/images/logos/${d}`} alt=""
              style={{ width: '2.2vw', height: '2.2vw', borderRadius: '4px', objectFit: 'contain' }} />
          ))}
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.3vw', fontWeight: 500, marginLeft: '0.3vw' }}>+66</span>
        </div>
      </div>

      <div style={{
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
        boxSizing: 'border-box',
        borderTop: '1px solid rgba(27,167,132,0.15)',
        zIndex: 2,
      }}>
        <div>
          <div style={{
            fontSize: '4.5vw',
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
          }}>
            Your apps, finally united.
          </div>
        </div>
        <div style={{
          background: '#1ba784',
          color: 'white',
          borderRadius: '100vw',
          padding: '1.5vw 4vw',
          fontSize: '2.4vw',
          fontWeight: 700,
          whiteSpace: 'nowrap',
          boxShadow: '0 0 30px rgba(27,167,132,0.4)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.8vw',
          flexShrink: 0,
        }}>
          Book a demo <span style={{ fontSize: '1.1em' }}>→</span>
        </div>
      </div>
    </div>
  );
}
