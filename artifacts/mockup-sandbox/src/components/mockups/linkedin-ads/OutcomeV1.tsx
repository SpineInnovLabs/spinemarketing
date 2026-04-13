import React from 'react';

export function OutcomeV1() {
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
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 15%, rgba(8,14,30,0.55) 100%)',
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
        <div style={{
          color: '#1ba784',
          fontSize: '1.4vw',
          fontWeight: 600,
          border: '1px solid rgba(27,167,132,0.3)',
          padding: '0.4vw 1.2vw',
          borderRadius: '2vw',
          background: 'rgba(27,167,132,0.08)',
        }}>
          70+ Apps Connected
        </div>
      </div>

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '72%',
        padding: '5vw',
        textAlign: 'center',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        background: 'rgba(10,18,40,0.72)',
        border: '1px solid rgba(27,167,132,0.2)',
        borderRadius: '2vw',
        boxSizing: 'border-box',
        zIndex: 2,
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2vw', marginBottom: '2vw' }}>
          {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com'].map((d) => (
            <img key={d} src={`https://logo.clearbit.com/${d}`} alt=""
              style={{ width: '2.5vw', height: '2.5vw', borderRadius: '5px', objectFit: 'contain' }} />
          ))}
        </div>
        <div style={{
          fontSize: '6.5vw',
          fontWeight: 900,
          color: 'white',
          lineHeight: 1.0,
          letterSpacing: '-0.04em',
          marginTop: '1vw',
          textShadow: '0 2px 30px rgba(0,0,0,0.5)',
        }}>
          Your apps,<br />finally united.
        </div>
        <div style={{
          margin: '2.5vw auto',
          width: '5vw',
          height: '0.25vw',
          background: '#1ba784',
        }} />
        <div style={{
          fontSize: '2vw',
          color: 'rgba(255,255,255,0.55)',
          fontWeight: 500,
          lineHeight: 1.5,
        }}>
          Deals, tickets, conversations, and account health<br />from every tool — on one screen.
        </div>
        <div style={{
          marginTop: '3vw',
          display: 'inline-flex',
          background: '#1ba784',
          color: 'white',
          borderRadius: '0.8vw',
          padding: '1.4vw 4vw',
          fontSize: '2.2vw',
          fontWeight: 700,
          alignItems: 'center',
          gap: '0.8vw',
          boxShadow: '0 0 40px rgba(27,167,132,0.3)',
        }}>
          Book a demo <span style={{ fontSize: '1.1em' }}>→</span>
        </div>
        <div style={{
          marginTop: '1.8vw',
          color: 'rgba(255,255,255,0.3)',
          fontSize: '1.4vw',
          fontWeight: 500,
        }}>
          No code · SOC 2 certified · Works with your stack
        </div>
      </div>
    </div>
  );
}
