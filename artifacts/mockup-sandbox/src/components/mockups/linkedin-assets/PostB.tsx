import React from 'react';

export function PostB() {
  return (
    <div style={{ backgroundColor: '#0B0F17', width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative', fontFamily: 'Inter, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');" }} />
      
      {/* Top Badge */}
      <div style={{ paddingTop: '5vw', zIndex: 10 }}>
        <div style={{ border: '1px solid #2EE5A8', color: '#2EE5A8', padding: '1.2vw 3vw', borderRadius: '100vw', fontSize: '2.2vw', fontFamily: 'Sora, sans-serif', fontWeight: 500, display: 'inline-block' }}>
          How IntegrateWise Works
        </div>
      </div>

      {/* Center Flow */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '2vw', marginTop: '10vw', zIndex: 10, width: '100%' }}>
        {/* Card 1 */}
        <div style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '3vw', textAlign: 'center', width: '25vw' }}>
          <div style={{ fontSize: '5vw', marginBottom: '1vw' }}>💡</div>
          <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500, color: 'white', fontSize: '2.2vw' }}>AI Recommends</div>
        </div>
        {/* Arrow */}
        <div style={{ color: '#2EE5A8', fontSize: '4vw', fontWeight: 'bold' }}>→</div>
        {/* Card 2 */}
        <div style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '3vw', textAlign: 'center', width: '25vw' }}>
          <div style={{ fontSize: '5vw', marginBottom: '1vw' }}>✓</div>
          <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500, color: 'white', fontSize: '2.2vw' }}>Human Approves</div>
        </div>
        {/* Arrow */}
        <div style={{ color: '#2EE5A8', fontSize: '4vw', fontWeight: 'bold' }}>→</div>
        {/* Card 3 */}
        <div style={{ background: '#111827', border: '1px solid rgba(46,229,168,0.3)', borderRadius: '10px', padding: '3vw', textAlign: 'center', width: '25vw' }}>
          <div style={{ fontSize: '5vw', marginBottom: '1vw' }}>🚀</div>
          <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500, color: 'white', fontSize: '2.2vw' }}>Action Executes</div>
        </div>
      </div>

      {/* Below Flow Quote */}
      <div style={{ padding: '5vw', marginTop: '6vw', zIndex: 10, width: '100%' }}>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: 'white', fontSize: '2.8vw', lineHeight: 1.5, textAlign: 'center', maxWidth: '80vw', margin: '0 auto' }}>
          "Every AI action waits for human approval. Evidence, confidence scores, and impact previews — all before anything executes."
        </div>
      </div>

      {/* Bottom */}
      <div style={{ position: 'absolute', bottom: '4vw', left: 0, right: 0, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', zIndex: 10 }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '3vw', height: '3vw' }}>
          <circle cx="16" cy="16" r="16" fill="#2EE5A8"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.5)', fontSize: '2vw', marginLeft: '1vw' }}>integratewise.ai</span>
      </div>
    </div>
  );
}
