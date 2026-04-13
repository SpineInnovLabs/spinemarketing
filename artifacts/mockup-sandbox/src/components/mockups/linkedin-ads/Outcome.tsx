import React from 'react';

export function Outcome() {
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
        bottom: 0,
        left: 0,
        right: 0,
        height: '65%',
        background: 'linear-gradient(to top, rgba(8,14,30,0.95) 0%, rgba(8,14,30,0.85) 35%, rgba(8,14,30,0.4) 70%, transparent 100%)',
      }} />

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '25%',
        background: 'linear-gradient(to bottom, rgba(8,14,30,0.6) 0%, transparent 100%)',
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
          70+ Apps Connected
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
            { name: 'Jira', domain: 'atlassian.com' },
            { name: 'Zendesk', domain: 'zendesk.com' },
            { name: 'Salesforce', domain: 'salesforce.com' },
          ].map((t) => (
            <img key={t.name} src={`https://logo.clearbit.com/${t.domain}`} alt={t.name}
              style={{ width: '2.8vw', height: '2.8vw', borderRadius: '6px', objectFit: 'contain' }} />
          ))}
        </div>
        <div style={{
          fontSize: '9vw',
          fontWeight: 900,
          color: 'white',
          lineHeight: 0.95,
          letterSpacing: '-0.045em',
          textShadow: '0 4px 60px rgba(0,0,0,0.6)',
        }}>
          Your apps,<br />finally<br />united.
        </div>
        <div style={{
          fontSize: '2.4vw',
          color: 'rgba(255,255,255,0.55)',
          fontWeight: 500,
          marginTop: '2.5vw',
          lineHeight: 1.4,
          maxWidth: '75%',
        }}>
          HubSpot deals + Jira tickets + Slack threads + Zendesk cases — all on one screen per customer.
        </div>
        <div style={{ marginTop: '3vw', display: 'flex', alignItems: 'center', gap: '2.5vw' }}>
          <div style={{
            background: '#1ba784',
            color: 'white',
            borderRadius: '0.8vw',
            padding: '1.4vw 3.8vw',
            fontSize: '2.4vw',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.8vw',
            boxShadow: '0 0 40px rgba(27,167,132,0.3)',
          }}>
            Book a demo <span style={{ fontSize: '1.1em' }}>→</span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.4vw', fontWeight: 500 }}>
            No code · SOC 2 · Works with your stack
          </span>
        </div>
      </div>
    </div>
  );
}
