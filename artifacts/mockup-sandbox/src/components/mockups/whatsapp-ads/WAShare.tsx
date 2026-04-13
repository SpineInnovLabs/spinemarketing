import React from 'react';

export const WAShare: React.FC = () => {
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
        src="/__mockup/images/hero-fb-product.png" 
        alt="Workspace Dashboard" 
        style={{
          position: 'absolute',
          inset: 0,
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      />

      {/* Radial Vignette */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 20%, rgba(11,15,23,0.6) 100%)',
        zIndex: 2
      }} />

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
          style={{ width: '6vw', height: '6vw', objectFit: 'contain' }} 
        />
        <span style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 700,
          color: 'white',
          fontSize: '3vw',
          letterSpacing: '-0.02em'
        }}>
          IntegrateWise
        </span>
      </div>

      {/* Center Frosted Glass Card */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '75%',
        padding: '5vw',
        textAlign: 'center',
        backdropFilter: 'blur(10px)',
        background: 'rgba(11,15,23,0.7)',
        border: '1px solid rgba(46,229,168,0.2)',
        borderRadius: '2vw',
        zIndex: 10,
        boxSizing: 'border-box'
      }}>
        <div style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 700,
          color: 'white',
          fontSize: '6vw',
          lineHeight: 1.2
        }}>
          One Workspace.
        </div>
        <div style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 700,
          color: '#2EE5A8',
          fontSize: '6vw',
          lineHeight: 1.2
        }}>
          Every Tool.
        </div>
        
        <div style={{
          width: '5vw',
          height: '2px',
          backgroundColor: '#2EE5A8',
          margin: '2vw auto'
        }} />
        
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          color: 'rgba(255,255,255,0.6)',
          fontSize: '2.5vw'
        }}>
          AI that waits for you.
        </div>
        
        <button style={{
          backgroundColor: '#2EE5A8',
          color: '#0B0F17',
          fontFamily: "'Sora', sans-serif",
          fontWeight: 700,
          fontSize: '2.5vw',
          padding: '1.5vw 4vw',
          borderRadius: '10px',
          marginTop: '3vw',
          border: 'none',
          cursor: 'pointer'
        }}>
          Book a Demo &rarr;
        </button>
      </div>

      {/* Bottom Right text */}
      <div style={{
        position: 'absolute',
        bottom: '3vw',
        right: '4vw',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        color: 'rgba(255,255,255,0.4)',
        fontSize: '2vw',
        zIndex: 10
      }}>
        integratewise.ai
      </div>
    </div>
  );
};
