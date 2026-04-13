import React from 'react';

export const BannerA = () => {
  const tools = [
    { name: 'HubSpot', color: '#FF7A59', logo: '/__mockup/images/logos/hubspot.com' },
    { name: 'Jira', color: '#0052CC', logo: '/__mockup/images/logos/atlassian.com' },
    { name: 'Slack', color: '#E01E5A', logo: '/__mockup/images/logos/slack.com' },
    { name: 'Zendesk', color: '#03363D', logo: '/__mockup/images/logos/zendesk.com' },
  ];

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: '#0B0F17',
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      backgroundSize: '40px 40px',
      margin: 0,
      padding: 0,
      display: 'flex',
    }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');" }} />

      <div style={{
        width: '50%',
        height: '100%',
        paddingLeft: '5vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box',
        zIndex: 2,
      }}>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: 'white', fontSize: '4.8vh', lineHeight: 1.15 }}>
          Building IntegrateWise
        </div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.55)', fontSize: '3vh', marginTop: '1.5vh', lineHeight: 1.3 }}>
          One place to see deals, tickets, conversations,<br/>and account health — pulled live from your tools.
        </div>
        <div style={{ width: '5vw', height: '2px', backgroundColor: '#2EE5A8', margin: '2vh 0' }} />
        <div style={{ display: 'flex', gap: '1.2vw', alignItems: 'center' }}>
          <div style={{
            backgroundColor: '#2EE5A8',
            color: '#0B0F17',
            padding: '1vh 2vw',
            borderRadius: '8px',
            fontSize: '2.5vh',
            fontFamily: 'Sora, sans-serif',
            fontWeight: 700,
          }}>
            Book a Demo →
          </div>
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.3)', fontSize: '2.2vh' }}>
            Founder & CEO
          </span>
        </div>
      </div>

      <div style={{
        width: '50%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ position: 'relative', width: '90%', height: '85%' }}>
          <div style={{
            position: 'absolute',
            right: '2vw',
            top: '50%',
            transform: 'translateY(-50%)',
            background: '#111827',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '10px',
            padding: '2vh 1.5vw',
            width: '22vw',
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          }}>
            <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'white', fontSize: '2.2vh', marginBottom: '0.5vh' }}>
              Acme Corp
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.4)', fontSize: '1.7vh', marginBottom: '1.5vh' }}>
              Last activity: 2 hours ago
            </div>

            {[
              { source: 'HubSpot', data: 'Deal: $48K — Negotiation stage', logo: '/__mockup/images/logos/hubspot.com' },
              { source: 'Jira', data: '3 open tickets, 1 critical', logo: '/__mockup/images/logos/atlassian.com' },
              { source: 'Slack', data: '12 threads this week, sentiment: positive', logo: '/__mockup/images/logos/slack.com' },
              { source: 'Zendesk', data: '0 open, avg resolution: 4h', logo: '/__mockup/images/logos/zendesk.com' },
            ].map((row) => (
              <div key={row.source} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.6vw',
                marginBottom: '1vh',
              }}>
                <img
                  src={row.logo}
                  alt={row.source}
                  style={{
                    width: '2.2vh',
                    height: '2.2vh',
                    borderRadius: '3px',
                    marginTop: '0.3vh',
                    flexShrink: 0,
                    objectFit: 'contain',
                  }}
                />
                <div>
                  <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'rgba(255,255,255,0.8)', fontSize: '1.8vh' }}>
                    {row.source}
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.4)', fontSize: '1.6vh', lineHeight: 1.3 }}>
                    {row.data}
                  </div>
                </div>
              </div>
            ))}

            <div style={{
              marginTop: '0.5vh',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5vw',
              padding: '0.8vh 1vw',
              background: 'rgba(46,229,168,0.08)',
              borderRadius: '6px',
              border: '1px solid rgba(46,229,168,0.2)',
            }}>
              <div style={{ width: '0.7vw', height: '0.7vw', borderRadius: '50%', backgroundColor: '#2EE5A8' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#2EE5A8', fontSize: '1.7vh' }}>
                Health: 87 — Healthy
              </span>
            </div>
          </div>

          <div style={{
            position: 'absolute',
            left: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.8vh',
          }}>
            {tools.map((t) => (
              <div key={t.name} style={{
                width: '5vh',
                height: '5vh',
                borderRadius: '50%',
                backgroundColor: '#1A1F2E',
                border: `2px solid ${t.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
                <img
                  src={t.logo}
                  alt={t.name}
                  style={{
                    width: '3vh',
                    height: '3vh',
                    objectFit: 'contain',
                    borderRadius: '2px',
                  }}
                />
              </div>
            ))}
          </div>

          {tools.map((t, i) => {
            const startY = 50 - ((tools.length - 1) * 12) / 2 + i * 12;
            return (
              <svg key={t.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                <line
                  x1="6%"
                  y1={`${startY}%`}
                  x2="42%"
                  y2="50%"
                  stroke={t.color}
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  strokeDasharray="4 3"
                />
              </svg>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BannerA;
