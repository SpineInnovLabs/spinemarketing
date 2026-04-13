import React from 'react';

export const WAStatus: React.FC = () => {
  return (
    <div 
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#0B0F17',
        position: 'relative',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800;900&display=swap');" }} />
      
      {/* Hero Image */}
      <img 
        src="/__mockup/images/hero-wa-problem.png" 
        alt="Overwhelmed person" 
        style={{
          position: 'absolute',
          inset: 0,
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      />

      {/* Top Left Logo */}
      <div style={{
        position: 'absolute',
        top: '5vw',
        left: '5vw',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        gap: '2vw'
      }}>
        <img 
          src="/__mockup/images/iw-brain-logo.png" 
          alt="Brain Logo" 
          style={{ width: '8vw', height: '8vw', objectFit: 'contain' }} 
        />
        <span style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 700,
          color: 'white',
          fontSize: '4vw',
          letterSpacing: '-0.02em'
        }}>
          IntegrateWise
        </span>
      </div>

      {/* Bottom Gradient Overlay */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '60%',
        background: 'linear-gradient(to bottom, transparent, rgba(11,15,23,0.9))',
        zIndex: 5
      }} />

      {/* Bottom Content */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: '5vw',
        zIndex: 10,
        boxSizing: 'border-box'
      }}>
        <div style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 500,
          color: 'rgba(255,255,255,0.6)',
          fontSize: '4vw',
          lineHeight: 1.2
        }}>
          Stop being the
        </div>
        <div style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 800,
          color: '#EB4379',
          fontSize: '10vw',
          lineHeight: 1.1,
          textShadow: '0 4px 12px rgba(0,0,0,0.5)',
          marginTop: '1vw'
        }}>
          human API.
        </div>
        
        <div style={{ height: '2vw' }} />
        
        <div style={{ display: 'flex', gap: '2vw', alignItems: 'center', marginBottom: '2vw' }}>
          {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com'].map((d) => (
            <img key={d} src={`/__mockup/images/logos/${d}`} alt=""
              style={{ width: '4vw', height: '4vw', borderRadius: '4px', objectFit: 'contain' }} />
          ))}
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, color: 'rgba(255,255,255,0.35)', fontSize: '3vw' }}>+65 more</span>
        </div>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          color: '#2EE5A8',
          fontSize: '3.5vw'
        }}>
          There's a better way.
        </div>
        
        <button style={{
          backgroundColor: '#2EE5A8',
          color: '#0B0F17',
          fontFamily: "'Sora', sans-serif",
          fontWeight: 700,
          fontSize: '4vw',
          padding: '2vw 5vw',
          borderRadius: '100vw',
          marginTop: '4vw',
          border: 'none',
          boxShadow: '0 0 30px rgba(46,229,168,0.3)',
          cursor: 'pointer'
        }}>
          Learn More &rarr;
        </button>
      </div>
    </div>
  );
};
