import React from 'react';

export function LIProfileV2() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#08070E',
      backgroundImage: 'radial-gradient(ellipse 50% 100% at 70% 50%, rgba(52,211,153,0.05) 0%, transparent 70%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 6vw',
      boxSizing: 'border-box',
      fontFamily: "'Inter', sans-serif",
    }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');" }} />

      <div style={{ flex: 1, zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1vw', marginBottom: '2.5vh' }}>
          <svg viewBox="0 0 32 32" fill="none" style={{ width: '4.5vh', height: '4.5vh' }}>
            <circle cx="16" cy="16" r="16" fill="#34D399"/>
            <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
          </svg>
          <span style={{ fontWeight: 700, color: 'white', fontSize: '3vh', letterSpacing: '-0.02em' }}>IntegrateWise</span>
        </div>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '6.5vh', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
          Every customer.
        </div>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '6.5vh', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
          Every tool.{' '}
          <span style={{ color: '#34D399' }}>One screen.</span>
        </div>
        <div style={{ fontWeight: 500, color: 'rgba(255,255,255,0.45)', fontSize: '2.8vh', marginTop: '2vh' }}>
          AI proposes, you approve. Nothing fires without you.
        </div>
      </div>

      <div style={{
        width: '25vw',
        background: '#121118',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '14px',
        padding: '2.5vh 2vw',
        boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
        zIndex: 2,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8vw', marginBottom: '1.5vh' }}>
          <div style={{ width: '4vh', height: '4vh', borderRadius: '50%', background: 'linear-gradient(135deg, #34D399, #059669)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontWeight: 700, color: 'white', fontSize: '1.8vh' }}>A</span>
          </div>
          <div>
            <div style={{ fontWeight: 600, color: 'white', fontSize: '2vh' }}>Acme Corp</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.5vh' }}>Enterprise</div>
          </div>
          <div style={{ marginLeft: 'auto', background: 'rgba(52,211,153,0.1)', color: '#34D399', padding: '0.5vh 1vw', borderRadius: '20px', fontSize: '1.5vh', fontWeight: 600 }}>
            Healthy
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.8vw', marginBottom: '1.5vh' }}>
          {[{ label: 'Health', val: '92' }, { label: 'NPS', val: '74' }, { label: 'Tickets', val: '3' }].map(s => (
            <div key={s.label} style={{ flex: 1, background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '1vh 0', textAlign: 'center' }}>
              <div style={{ fontWeight: 700, color: '#34D399', fontSize: '2.5vh' }}>{s.val}</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.3vh', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
        {[
          { src: 'Salesforce', ev: 'Renewal in 45 days' },
          { src: 'Zendesk', ev: 'P1 ticket opened' },
          { src: 'Stripe', ev: 'Invoice paid ($24K)' },
        ].map(r => (
          <div key={r.src} style={{ display: 'flex', alignItems: 'center', gap: '0.6vw', marginBottom: '0.8vh', padding: '0.6vh 0.8vw', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
            <div style={{ width: '0.6vw', height: '0.6vw', borderRadius: '50%', background: '#34D399', flexShrink: 0 }} />
            <span style={{ fontWeight: 600, color: 'rgba(255,255,255,0.7)', fontSize: '1.5vh' }}>{r.src}</span>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.4vh' }}>— {r.ev}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LIProfileV2;
