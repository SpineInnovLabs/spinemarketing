import React from 'react';

export function PostC() {
  return (
    <div style={{ backgroundColor: '#0B0F17', width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative', fontFamily: 'Inter, sans-serif', display: 'flex' }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');" }} />
      
      {/* Left Side */}
      <div style={{ width: '55%', padding: '5vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 10 }}>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.6)', fontSize: '3vw' }}>You are the</div>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, color: '#EB4379', fontSize: '9vw', lineHeight: 1.0, marginTop: '1vw' }}>human API</div>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'white', fontSize: '5vw', marginTop: '1vw' }}>between your tools.</div>
        <div style={{ height: '2vw' }}></div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#2EE5A8', fontSize: '3vw' }}>There's a better way.</div>
      </div>

      {/* Right Side */}
      <div style={{ width: '45%', position: 'absolute', right: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
        
        {/* Center Brain/Logo */}
        <div style={{ position: 'relative', width: '8vw', height: '8vw', zIndex: 20 }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '12vw', height: '12vw', background: 'radial-gradient(circle, rgba(46,229,168,0.4) 0%, transparent 70%)', zIndex: -1 }}></div>
          <svg viewBox="0 0 32 32" fill="none" style={{ width: '8vw', height: '8vw' }}>
            <circle cx="16" cy="16" r="16" fill="#2EE5A8"/>
            <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
          </svg>
        </div>

        {/* Connecting Lines (SVG overlay) */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} pointerEvents="none">
          <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="rgba(46,229,168,0.2)" strokeWidth="1" />
          <line x1="50%" y1="50%" x2="80%" y2="15%" stroke="rgba(46,229,168,0.2)" strokeWidth="1" />
          <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="rgba(46,229,168,0.2)" strokeWidth="1" />
          <line x1="50%" y1="50%" x2="70%" y2="85%" stroke="rgba(46,229,168,0.2)" strokeWidth="1" />
          <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="rgba(46,229,168,0.2)" strokeWidth="1" />
          <line x1="50%" y1="50%" x2="15%" y2="45%" stroke="rgba(46,229,168,0.2)" strokeWidth="1" />
        </svg>

        {/* Tool Circles */}
        <div style={{ position: 'absolute', top: '20%', left: '20%', transform: 'translate(-50%, -50%)', width: '6vw', height: '6vw', background: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00A1E0', fontSize: '3vw', fontWeight: 'bold', zIndex: 10 }}>S</div>
        
        <div style={{ position: 'absolute', top: '15%', left: '80%', transform: 'translate(-50%, -50%)', width: '6vw', height: '6vw', background: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E01E5A', fontSize: '3vw', fontWeight: 'bold', zIndex: 10 }}>S</div>
        
        <div style={{ position: 'absolute', top: '50%', left: '85%', transform: 'translate(-50%, -50%)', width: '6vw', height: '6vw', background: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2684FF', fontSize: '3vw', fontWeight: 'bold', zIndex: 10 }}>J</div>
        
        <div style={{ position: 'absolute', top: '85%', left: '70%', transform: 'translate(-50%, -50%)', width: '6vw', height: '6vw', background: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#635BFF', fontSize: '3vw', fontWeight: 'bold', zIndex: 10 }}>$</div>
        
        <div style={{ position: 'absolute', top: '75%', left: '25%', transform: 'translate(-50%, -50%)', width: '6vw', height: '6vw', background: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF7A59', fontSize: '3vw', fontWeight: 'bold', zIndex: 10 }}>H</div>
        
        <div style={{ position: 'absolute', top: '45%', left: '15%', transform: 'translate(-50%, -50%)', width: '6vw', height: '6vw', background: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#03363D', fontSize: '3vw', fontWeight: 'bold', zIndex: 10 }}>Z</div>

      </div>
    </div>
  );
}
