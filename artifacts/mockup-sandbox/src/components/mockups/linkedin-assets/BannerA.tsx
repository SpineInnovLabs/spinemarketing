import React from 'react';

export const BannerA = () => {
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
        width: '58%',
        height: '100%',
        paddingLeft: '5vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box',
        zIndex: 2,
      }}>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: 'white', fontSize: '5vh', lineHeight: 1.1 }}>
          Building IntegrateWise
        </div>
        <div style={{ width: '6vw', height: '2px', backgroundColor: '#2EE5A8', margin: '1.8vh 0' }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8vw', marginTop: '0.5vh' }}>
          {['Entity 360s', 'Morning Briefs', 'Churn Detection', 'Confidence Scores', 'Govern Gate'].map((f) => (
            <span key={f} style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.7)',
              fontSize: '2.6vh',
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '0.6vh 1.2vw',
              borderRadius: '6px',
            }}>{f}</span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1.5vw', marginTop: '2vh', alignItems: 'center' }}>
          <div style={{
            backgroundColor: '#2EE5A8',
            color: '#0B0F17',
            padding: '1vh 2vw',
            borderRadius: '8px',
            fontSize: '2.6vh',
            fontFamily: 'Sora, sans-serif',
            fontWeight: 700,
          }}>
            Book a Demo →
          </div>
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.35)', fontSize: '2.4vh' }}>
            70+ connectors · SOC 2 · No code
          </span>
        </div>
      </div>

      <div style={{
        width: '42%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5vh', width: '80%' }}>
          {[
            { label: 'Entity 360', desc: 'Full customer view across every tool', color: '#2EE5A8' },
            { label: 'Morning Brief', desc: 'AI-generated daily priorities + risks', color: '#4EAAFF' },
            { label: 'Govern Gate', desc: 'Nothing executes without your approval', color: '#EB4379' },
          ].map((item) => (
            <div key={item.label} style={{
              background: '#111827',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '8px',
              padding: '1.5vh 1.5vw',
              display: 'flex',
              alignItems: 'center',
              gap: '1.2vw',
            }}>
              <div style={{
                width: '1vw',
                height: '4vh',
                borderRadius: '3px',
                backgroundColor: item.color,
                flexShrink: 0,
                opacity: 0.8,
              }} />
              <div>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'white', fontSize: '2.5vh', lineHeight: 1.2 }}>
                  {item.label}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.45)', fontSize: '2vh', lineHeight: 1.3 }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerA;
