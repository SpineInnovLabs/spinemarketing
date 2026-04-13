import React from 'react';

export function Identity() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
      background: '#08070E',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <img
        src="/__mockup/images/hero-identity.png"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
        }}
      />

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '70%',
        background: 'linear-gradient(to top, rgba(8,7,14,0.97) 0%, rgba(8,7,14,0.88) 35%, rgba(8,7,14,0.45) 65%, transparent 100%)',
      }} />

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '30%',
        background: 'linear-gradient(to bottom, rgba(8,7,14,0.5) 0%, transparent 100%)',
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
        zIndex: 2,
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
          For CS, Ops & Revenue Teams
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '4vw',
        boxSizing: 'border-box',
        zIndex: 2,
      }}>
        <div style={{ display: 'flex', gap: '1vw', marginBottom: '2vw' }}>
          {[
            { name: 'HubSpot', domain: 'hubspot.com' },
            { name: 'Slack', domain: 'slack.com' },
            { name: 'Salesforce', domain: 'salesforce.com' },
            { name: 'Intercom', domain: 'intercom.com' },
          ].map((t) => (
            <img key={t.name} src={`/__mockup/images/logos/${t.domain}`} alt={t.name}
              style={{ width: '2.8vw', height: '2.8vw', borderRadius: '6px', objectFit: 'contain' }} />
          ))}
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.4vw', fontWeight: 500, alignSelf: 'center', marginLeft: '0.5vw' }}>
            +66 more
          </span>
        </div>
        <div style={{
          fontSize: '8.5vw',
          fontWeight: 900,
          color: 'white',
          lineHeight: 0.95,
          letterSpacing: '-0.045em',
          textShadow: '0 4px 60px rgba(0,0,0,0.6)',
        }}>
          Every app.<br />One<br />customer view.
        </div>
        <div style={{
          fontSize: '2.4vw',
          color: 'rgba(255,255,255,0.55)',
          fontWeight: 500,
          marginTop: '2.5vw',
          lineHeight: 1.4,
          maxWidth: '75%',
        }}>
          Morning briefs. Account health scores. Churn alerts. All from tools you already use.
        </div>
        <div style={{ marginTop: '3vw', display: 'flex', alignItems: 'center', gap: '2.5vw' }}>
          <div style={{
            background: '#1ba784',
            color: 'white',
            borderRadius: '100vw',
            padding: '1.4vw 3.8vw',
            fontSize: '2.4vw',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.8vw',
            boxShadow: '0 0 40px rgba(27,167,132,0.35)',
          }}>
            See how it works <span style={{ fontSize: '1.1em' }}>→</span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.4vw', fontWeight: 500 }}>
            SOC 2 · Enterprise ready
          </span>
        </div>
      </div>
    </div>
  );
}
