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
      padding: 0
    }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');" }} />
      
      {/* Left Side */}
      <div style={{
        width: '60%',
        height: '100%',
        paddingLeft: '5vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box'
      }}>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'white', fontSize: '5.5vh', lineHeight: 1.1 }}>
          Building IntegrateWise
        </div>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400, color: '#2EE5A8', fontSize: '4.5vh', marginTop: '2vh', lineHeight: 1.2 }}>
          The Knowledge Workspace over the Spine
        </div>
        <div style={{ width: '8vw', height: '2px', backgroundColor: '#2EE5A8', margin: '2.5vh 0' }} />
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.6)', fontSize: '3.5vh', lineHeight: 1.3 }}>
          AI that connects your tools. Governed by you.
        </div>
        <div style={{
          backgroundColor: 'rgba(46,229,168,0.1)',
          border: '1px solid rgba(46,229,168,0.3)',
          color: '#2EE5A8',
          padding: '1vh 2vw',
          borderRadius: '10px',
          fontSize: '2.8vh',
          fontFamily: 'Sora, sans-serif',
          fontWeight: 500,
          marginTop: '2vh',
          display: 'inline-block',
          width: 'fit-content'
        }}>
          Founder & CEO
        </div>
      </div>

      {/* Right Side */}
      <div style={{
        width: '40%',
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ position: 'relative', width: '30vw', height: '60vh', display: 'flex', alignItems: 'center' }}>
          {/* Tool Nodes */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '40vh', position: 'absolute', left: '2vw' }}>
            <div style={{ width: '5vh', height: '5vh', borderRadius: '50%', backgroundColor: '#E01E5A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '2vh', zIndex: 2 }}>S</div>
            <div style={{ width: '5vh', height: '5vh', borderRadius: '50%', backgroundColor: '#0052CC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '2vh', zIndex: 2 }}>J</div>
            <div style={{ width: '5vh', height: '5vh', borderRadius: '50%', backgroundColor: '#FF7A59', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '2vh', zIndex: 2 }}>H</div>
          </div>
          
          {/* Connecting Lines */}
          <svg style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 1 }}>
            <path d="M calc(2vw + 5vh) 10vh L calc(15vw) 30vh" stroke="rgba(46,229,168,0.4)" strokeWidth="2" fill="none" />
            <path d="M calc(2vw + 5vh) 30vh L calc(15vw) 30vh" stroke="rgba(46,229,168,0.4)" strokeWidth="2" fill="none" />
            <path d="M calc(2vw + 5vh) 50vh L calc(15vw) 30vh" stroke="rgba(46,229,168,0.4)" strokeWidth="2" fill="none" />
          </svg>
          
          {/* Center Brain */}
          <div style={{
            position: 'absolute',
            left: '15vw',
            top: '50%',
            transform: 'translateY(-50%)',
            boxShadow: '0 0 60px rgba(46,229,168,0.3)',
            borderRadius: '50%',
            zIndex: 3
          }}>
            <svg viewBox="0 0 32 32" fill="none" style={{ width: '8vh', height: '8vh' }}>
              <circle cx="16" cy="16" r="16" fill="#2EE5A8"/>
              <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerA;
