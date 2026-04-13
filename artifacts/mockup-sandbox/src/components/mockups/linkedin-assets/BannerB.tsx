import React from 'react';

export const BannerB = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: '#0B0F17',
      background: 'radial-gradient(ellipse at 80% 50%, rgba(65,84,163,0.15) 0%, transparent 60%), #0B0F17',
      margin: 0,
      padding: 0,
      display: 'flex'
    }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');" }} />
      
      {/* Left Side */}
      <div style={{
        width: '55%',
        height: '100%',
        paddingLeft: '5vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box'
      }}>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'white', fontSize: '5.5vh', lineHeight: 1.1 }}>
          No AI writes without human approval.
        </div>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400, color: '#2EE5A8', fontSize: '4vh', marginTop: '1.5vh', lineHeight: 1.2 }}>
          Architectural law, not a feature flag.
        </div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.4)', fontSize: '3vh', marginTop: '2vh' }}>
          integratewise.ai
        </div>
      </div>

      {/* Right Side */}
      <div style={{
        width: '45%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          backgroundColor: '#111827',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '10px',
          padding: '3vh 2vw',
          width: '35vw',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500, color: 'white', fontSize: '2.8vh' }}>
              AI Recommendation
            </div>
            <div style={{
              backgroundColor: '#2EE5A8',
              color: '#0B0F17',
              fontWeight: 700,
              padding: '0.5vh 1vw',
              borderRadius: '6px',
              fontSize: '2.5vh',
              fontFamily: 'Sora, sans-serif'
            }}>
              92/100
            </div>
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.6)', fontSize: '2.2vh', marginTop: '1.5vh', lineHeight: 1.4 }}>
            Update account health score and notify CSM
          </div>
          <div style={{ marginTop: '2vh', display: 'flex', gap: '1vw' }}>
            <button style={{
              backgroundColor: '#2EE5A8',
              color: '#0B0F17',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              padding: '1vh 2vw',
              borderRadius: '8px',
              fontSize: '2.5vh',
              border: 'none',
              cursor: 'pointer'
            }}>
              Approve
            </button>
            <button style={{
              backgroundColor: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.6)',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 500,
              padding: '1vh 2vw',
              borderRadius: '8px',
              fontSize: '2.5vh',
              cursor: 'pointer'
            }}>
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerB;
