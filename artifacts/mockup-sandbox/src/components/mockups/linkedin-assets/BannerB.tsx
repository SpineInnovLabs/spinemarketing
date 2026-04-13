import React from 'react';

export const BannerB = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: '#08070E',
      background: 'radial-gradient(ellipse at 80% 50%, rgba(65,84,163,0.15) 0%, transparent 60%), #08070E',
      margin: 0,
      padding: 0,
      display: 'flex'
    }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');" }} />
      
      <div style={{
        width: '55%',
        height: '100%',
        paddingLeft: '5vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box'
      }}>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: 'white', fontSize: '5.5vh', lineHeight: 1.1 }}>
          AI finds the risk.
        </div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: 'white', fontSize: '5.5vh', lineHeight: 1.1 }}>
          You make the call.
        </div>
        <div style={{ width: '5vw', height: '2px', backgroundColor: '#34D399', margin: '2vh 0' }} />
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.5)', fontSize: '3vh', lineHeight: 1.4 }}>
          IntegrateWise spots at-risk accounts across your<br/>tools and recommends next steps. Nothing happens<br/>until you approve.
        </div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.3)', fontSize: '2.5vh', marginTop: '2vh' }}>
          integratewise.ai
        </div>
      </div>

      <div style={{
        width: '45%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          backgroundColor: '#121118',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '10px',
          padding: '3vh 2vw',
          width: '35vw',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8vw' }}>
              <img src="/__mockup/images/logos/hubspot.com" alt="HubSpot"
                style={{ width: '2.5vh', height: '2.5vh', borderRadius: '3px', objectFit: 'contain' }} />
              <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: 'white', fontSize: '2.5vh' }}>
                Acme Corp — Churn Risk
              </div>
            </div>
            <div style={{
              backgroundColor: '#EB4379',
              color: 'white',
              fontWeight: 700,
              padding: '0.5vh 1vw',
              borderRadius: '6px',
              fontSize: '2vh',
              fontFamily: 'Inter, sans-serif'
            }}>
              High
            </div>
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.6)', fontSize: '2vh', marginTop: '1.5vh', lineHeight: 1.4 }}>
            3 missed meetings · 2 open tickets unresolved · NPS dropped to 6.
            <br/>AI recommends: Schedule exec check-in this week.
          </div>
          <div style={{ marginTop: '2vh', display: 'flex', gap: '1vw' }}>
            <button style={{
              backgroundColor: '#34D399',
              color: '#08070E',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              padding: '1vh 2vw',
              borderRadius: '8px',
              fontSize: '2.2vh',
              border: 'none',
              cursor: 'pointer'
            }}>
              Approve
            </button>
            <button style={{
              backgroundColor: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.6)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              padding: '1vh 2vw',
              borderRadius: '8px',
              fontSize: '2.2vh',
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
