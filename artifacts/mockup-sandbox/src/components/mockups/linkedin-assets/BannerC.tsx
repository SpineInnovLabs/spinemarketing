import React from 'react';

export const BannerC = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: '#0B0F17',
      background: 'radial-gradient(ellipse at 30% 50%, rgba(65,84,163,0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(235,67,121,0.08) 0%, transparent 50%), #0B0F17',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      padding: 0
    }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');" }} />
      
      <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: 'white', fontSize: '7vh', textAlign: 'center', lineHeight: 1.1 }}>
        Stop being the human API
      </div>
      <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: '#2EE5A8', fontSize: '7vh', marginTop: '0.5vh', textAlign: 'center', lineHeight: 1.1 }}>
        between your tools.
      </div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.6)', fontSize: '3.5vh', marginTop: '3vh', textAlign: 'center' }}>
        IntegrateWise — Book a Demo
      </div>
      
      <div style={{ position: 'absolute', bottom: '3vh', right: '4vw' }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '4vh', height: '4vh' }}>
          <circle cx="16" cy="16" r="16" fill="#2EE5A8"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
      </div>
    </div>
  );
};

export default BannerC;
