import React from 'react';

export function PostD() {
  return (
    <div style={{ backgroundColor: '#0B0F17', width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative', fontFamily: 'Inter, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');" }} />
      
      <div style={{ paddingTop: '5vw', zIndex: 10 }}>
        <div style={{ border: '1px solid #2EE5A8', color: '#2EE5A8', padding: '1.2vw 3vw', borderRadius: '100vw', fontSize: '2.2vw', fontFamily: 'Sora, sans-serif', fontWeight: 500, display: 'inline-block' }}>
          Early Access
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '12vw', position: 'relative', zIndex: 10, width: '100%' }}>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: 'white', fontSize: '7vw', lineHeight: 1.1 }}>IntegrateWise</div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '150%', height: '200%', background: 'radial-gradient(circle, rgba(46,229,168,0.15) 0%, transparent 70%)', zIndex: -1 }}></div>
          <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: '#2EE5A8', fontSize: '7vw', lineHeight: 1.1 }}>is live.</div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2vw', marginTop: '8vw', zIndex: 10 }}>
        {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com', 'intercom.com'].map((d) => (
          <img key={d} src={`/__mockup/images/logos/${d}`} alt=""
            style={{ width: '3.5vw', height: '3.5vw', borderRadius: '6px', objectFit: 'contain' }} />
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '8vw', marginTop: '8vw', zIndex: 10, width: '100%' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: 'white', fontSize: '6vw' }}>70+</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.6)', fontSize: '2.2vw', marginTop: '0.5vw' }}>Apps Connected</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: 'white', fontSize: '6vw' }}>1</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.6)', fontSize: '2.2vw', marginTop: '0.5vw' }}>Customer Screen</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: 'white', fontSize: '6vw' }}>0</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.6)', fontSize: '2.2vw', marginTop: '0.5vw' }}>Unsupervised AI</div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '5vw', left: 0, right: 0, textAlign: 'center', zIndex: 10 }}>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: 'white', fontSize: '2.8vw' }}>
          Book a Demo &nbsp;→&nbsp; integratewise.ai
        </div>
      </div>
    </div>
  );
}
