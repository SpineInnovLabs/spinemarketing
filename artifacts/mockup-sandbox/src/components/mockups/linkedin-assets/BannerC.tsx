import React from 'react';

export const BannerC = () => {
  const tabs = [
    { name: 'HubSpot', color: '#FF7A59' },
    { name: 'Slack', color: '#E01E5A' },
    { name: 'Jira', color: '#0052CC' },
    { name: 'Zendesk', color: '#03363D' },
    { name: 'Sheets', color: '#34A853' },
    { name: 'Salesforce', color: '#00A1E0' },
    { name: 'Intercom', color: '#6AFDEF' },
    { name: 'Notion', color: '#FFFFFF' },
  ];

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: '#0B0F17',
      background: 'radial-gradient(ellipse at 30% 50%, rgba(235,67,121,0.08) 0%, transparent 50%), #0B0F17',
      display: 'flex',
      margin: 0,
      padding: 0,
    }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');" }} />

      <div style={{
        width: '52%',
        height: '100%',
        paddingLeft: '5vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box',
      }}>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: 'white', fontSize: '5vh', lineHeight: 1.1 }}>
          You check 8 tools before
        </div>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: '#EB4379', fontSize: '5vh', lineHeight: 1.1, marginTop: '0.3vh' }}>
          one customer call.
        </div>
        <div style={{ width: '5vw', height: '2px', backgroundColor: '#EB4379', margin: '2vh 0', opacity: 0.6 }} />
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.5)', fontSize: '2.8vh', lineHeight: 1.4 }}>
          Copy deal stage from HubSpot. Check open tickets in Jira.<br/>
          Search Slack for what the customer said last week.<br/>
          Paste it all into a Google Sheet. Repeat 30× a day.
        </div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#2EE5A8', fontSize: '2.6vh', marginTop: '2vh' }}>
          We built IntegrateWise to end that.
        </div>
      </div>

      <div style={{
        width: '48%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.8vh',
          width: '36vw',
          justifyContent: 'center',
          position: 'relative',
        }}>
          {tabs.map((tab, i) => (
            <div key={tab.name} style={{
              background: '#111827',
              border: '1px solid rgba(255,255,255,0.08)',
              borderTop: `2px solid ${tab.color}`,
              borderRadius: '6px',
              padding: '1.2vh 1.3vw',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5vw',
              opacity: 0.5 + (i % 3) * 0.15,
              transform: i % 2 === 0 ? 'rotate(-1deg)' : 'rotate(0.5deg)',
            }}>
              <div style={{
                width: '1.2vh',
                height: '1.2vh',
                borderRadius: '50%',
                backgroundColor: tab.color,
              }} />
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.6)',
                fontSize: '1.8vh',
              }}>
                {tab.name}
              </span>
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.2)',
                fontSize: '1.5vh',
                marginLeft: '0.3vw',
              }}>
                ×
              </span>
            </div>
          ))}

          <div style={{
            position: 'absolute',
            bottom: '-4vh',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.25)',
            fontSize: '1.8vh',
            whiteSpace: 'nowrap',
          }}>
            ↑ Your browser tabs right now
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerC;
