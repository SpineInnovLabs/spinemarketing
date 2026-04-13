import React from 'react';

export const WAPromo: React.FC = () => {
  return (
    <div 
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#0B0F17',
        backgroundImage: 'radial-gradient(circle at 50% 40%, rgba(46,229,168,0.06) 0%, transparent 60%)',
        position: 'relative',
        fontFamily: "'Inter', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800;900&display=swap');" }} />
      
      {/* Top Right Small Logo */}
      <img 
        src="/__mockup/images/iw-brain-logo.png" 
        alt="" 
        style={{
          position: 'absolute',
          top: '5vw',
          right: '5vw',
          width: '5vw',
          height: '5vw',
          opacity: 0.5,
          objectFit: 'contain'
        }}
      />

      {/* Center Brain Watermark */}
      <img 
        src="/__mockup/images/iw-brain-logo.png" 
        alt="" 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '25vw',
          height: '25vw',
          opacity: 0.08,
          objectFit: 'contain',
          zIndex: 1
        }}
      />

      {/* Center Content */}
      <div style={{ zIndex: 10, textAlign: 'center' }}>
        <div style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 700,
          color: 'white',
          fontSize: '7vw',
          lineHeight: 1.1
        }}>
          No AI writes
        </div>
        <div style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 700,
          color: 'white',
          fontSize: '7vw',
          lineHeight: 1.1
        }}>
          without human
        </div>
        <div style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 700,
          color: '#2EE5A8',
          fontSize: '7vw',
          lineHeight: 1.1
        }}>
          approval.
        </div>
        
        <div style={{ height: '3vw' }} />
        
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          color: 'rgba(255,255,255,0.5)',
          fontSize: '3vw',
          lineHeight: 1.4
        }}>
          Architectural law,
        </div>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          color: 'rgba(255,255,255,0.5)',
          fontSize: '3vw',
          lineHeight: 1.4
        }}>
          not a feature flag.
        </div>
      </div>

      {/* Bottom Row */}
      <div style={{
        position: 'absolute',
        bottom: '5vw',
        left: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2vw',
        zIndex: 10
      }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '3vw', height: '3vw' }}>
          <circle cx="16" cy="16" r="16" fill="#2EE5A8"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 700,
          color: 'white',
          fontSize: '2vw'
        }}>
          IntegrateWise
        </span>
        <span style={{
          color: 'rgba(255,255,255,0.3)',
          fontSize: '2vw'
        }}>
          |
        </span>
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          color: '#2EE5A8',
          fontSize: '2vw'
        }}>
          Book a Demo
        </span>
      </div>
    </div>
  );
};
