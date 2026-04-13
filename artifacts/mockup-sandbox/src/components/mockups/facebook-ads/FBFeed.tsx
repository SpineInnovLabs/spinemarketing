import React from 'react';

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5vw' }}>
    <svg viewBox="0 0 32 32" fill="none" style={{ width: '4vw', height: '4vw' }}>
      <circle cx="16" cy="16" r="16" fill="#34D399" />
      <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9" />
    </svg>
    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: 'white', fontSize: '2.8vw', letterSpacing: '-0.02em' }}>
      IntegrateWise
    </span>
  </div>
);

export default function FBFeed() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#08070E',
      backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(235,67,121,0.06) 0%, transparent 50%)',
      position: 'relative',
      fontFamily: "'Inter', sans-serif",
      display: 'flex',
    }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');" }} />

      <div style={{ position: 'absolute', top: '4vw', left: '4vw', zIndex: 10 }}>
        <Logo />
      </div>

      <div style={{
        width: '55%',
        height: '100%',
        paddingLeft: '4vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box',
        zIndex: 2,
      }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: 'rgba(255,255,255,0.5)', fontSize: '2.5vw', marginBottom: '0.5vw' }}>
          You are the
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, color: '#EB4379', fontSize: '8vw', lineHeight: 1.1 }}>
          human API
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: 'white', fontSize: '4vw', lineHeight: 1.2, marginTop: '0.5vw' }}>
          between your tools.
        </div>

        <div style={{ display: 'flex', gap: '1.5vw', alignItems: 'center', marginTop: '3vw', marginBottom: '2vw' }}>
          {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com'].map((d) => (
            <img key={d} src={`/__mockup/images/logos/${d}`} alt=""
              style={{ width: '3vw', height: '3vw', borderRadius: '4px', objectFit: 'contain' }} />
          ))}
          <span style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.3)', fontSize: '1.8vw' }}>+65 more</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2vw' }}>
          <div style={{
            backgroundColor: '#34D399',
            color: '#08070E',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: '2.5vw',
            padding: '1.2vw 3.5vw',
            borderRadius: '8px',
          }}>
            Book a Demo &rarr;
          </div>
          <span style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.35)', fontSize: '1.8vw' }}>
            integratewise.ai
          </span>
        </div>
      </div>

      <div style={{
        width: '45%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          background: '#121118',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '10px',
          padding: '2.5vw 2vw',
          width: '35vw',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
        }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: 'white', fontSize: '2.2vw', marginBottom: '0.5vw' }}>
            Acme Corp
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.4)', fontSize: '1.5vw', marginBottom: '1.5vw' }}>
            Last activity: 2 hours ago
          </div>

          {[
            { source: 'HubSpot', data: 'Deal: $48K — Negotiation', logo: '/__mockup/images/logos/hubspot.com' },
            { source: 'Jira', data: '3 open tickets, 1 critical', logo: '/__mockup/images/logos/atlassian.com' },
            { source: 'Slack', data: '12 threads, sentiment: positive', logo: '/__mockup/images/logos/slack.com' },
            { source: 'Zendesk', data: '0 open, avg resolution: 4h', logo: '/__mockup/images/logos/zendesk.com' },
          ].map((row) => (
            <div key={row.source} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6vw', marginBottom: '1vw' }}>
              <img src={row.logo} alt={row.source}
                style={{ width: '2vw', height: '2vw', borderRadius: '3px', marginTop: '0.2vw', flexShrink: 0, objectFit: 'contain' }} />
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: 'rgba(255,255,255,0.8)', fontSize: '1.6vw' }}>
                  {row.source}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, color: 'rgba(255,255,255,0.4)', fontSize: '1.4vw', lineHeight: 1.3 }}>
                  {row.data}
                </div>
              </div>
            </div>
          ))}

          <div style={{
            marginTop: '0.5vw',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5vw',
            padding: '0.6vw 1vw',
            background: 'rgba(52,211,153,0.08)',
            borderRadius: '6px',
            border: '1px solid rgba(52,211,153,0.2)',
          }}>
            <div style={{ width: '0.6vw', height: '0.6vw', borderRadius: '50%', backgroundColor: '#34D399' }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: '#34D399', fontSize: '1.4vw' }}>
              Health: 87 — Healthy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
