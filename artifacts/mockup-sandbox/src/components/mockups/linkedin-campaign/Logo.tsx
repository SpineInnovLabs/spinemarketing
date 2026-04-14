import React from 'react';

export function Logo({ size = '4vw', bg = '#1BA784' }: { size?: string; bg?: string }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden'
    }}>
      <img src="/__mockup/images/integratewise-logo.png" alt=""
        style={{ width: '72%', height: '72%', objectFit: 'contain' }} />
    </div>
  );
}
