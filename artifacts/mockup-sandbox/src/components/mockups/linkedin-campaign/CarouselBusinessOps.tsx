import React from 'react';
import { Logo } from './Logo';

const Slide = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    width: '100vh', height: '100vh', flexShrink: 0, position: 'relative',
    background: '#08070E', display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
    fontFamily: 'Inter, system-ui, sans-serif'
  }}>
    {children}
  </div>
);

const Header = () => (
  <div style={{ position: 'absolute', top: '4%', left: '6%', right: '6%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 10 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5vh' }}>
      <Logo size="4vh" />
      <span style={{ color: 'white', fontSize: '2.2vh', fontWeight: 600 }}>IntegrateWise</span>
    </div>
    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.6vh' }}>Business Ops</span>
  </div>
);

const Footer = ({ num }: { num: number }) => (
  <div style={{ position: 'absolute', bottom: '4%', display: 'flex', gap: '1vh', zIndex: 10 }}>
    {[1,2,3,4,5].map(i => (
      <div key={i} style={{ width: '5vh', height: '0.5vh', borderRadius: '2px', background: i === num ? '#60a5fa' : 'rgba(255,255,255,0.1)' }} />
    ))}
  </div>
);

export function CarouselBusinessOps() {
  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'auto' }}>
      <Slide>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 40%, rgba(96,165,250,0.06) 0%, transparent 55%)' }} />
        <Header />
        <div style={{ textAlign: 'center', zIndex: 10, padding: '0 8%' }}>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '3vh', marginBottom: '2vh' }}>Your ops team lives in</div>
          <div style={{ fontWeight: 800, color: '#ef4444', fontSize: '10vh', lineHeight: 1, textDecoration: 'line-through', opacity: 0.7, marginBottom: '1vh' }}>12 tabs</div>
          <div style={{ fontWeight: 800, color: '#60a5fa', fontSize: '7vh', lineHeight: 1.1 }}>1 Workbench.</div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '2.5vh', marginTop: '3vh' }}>Swipe to see the difference →</div>
        </div>
        <Footer num={1} />
      </Slide>

      <Slide>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 40%, rgba(239,68,68,0.05) 0%, transparent 55%)' }} />
        <Header />
        <div style={{ textAlign: 'center', zIndex: 10, padding: '0 8%' }}>
          <div style={{ fontWeight: 800, color: 'white', fontSize: '5vh', lineHeight: 1.15, marginBottom: '4vh' }}>
            <span style={{ color: '#ef4444' }}>4 minutes</span> to find context.<br/>Every. Single. Time.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5vh', maxWidth: '85%' }}>
            {[
              { action: 'Open CRM → find account', time: '45s' },
              { action: 'Switch to Zendesk → check tickets', time: '60s' },
              { action: 'Jump to Slack → read thread', time: '50s' },
              { action: 'Open Jira → find task', time: '40s' },
              { action: 'Re-read CRM notes → remember context', time: '45s' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#121118', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '1.5vh 3vh' }}>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '2vh' }}>{item.action}</span>
                <span style={{ color: '#ef4444', fontSize: '1.8vh', fontWeight: 600 }}>+{item.time}</span>
              </div>
            ))}
          </div>
        </div>
        <Footer num={2} />
      </Slide>

      <Slide>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 40%, rgba(96,165,250,0.08) 0%, transparent 55%)' }} />
        <Header />
        <div style={{ textAlign: 'center', zIndex: 10, padding: '0 8%' }}>
          <div style={{ fontWeight: 800, color: 'white', fontSize: '5vh', lineHeight: 1.15 }}>The Workbench puts</div>
          <div style={{ fontWeight: 800, color: '#60a5fa', fontSize: '5vh', lineHeight: 1.15, marginBottom: '3vh' }}>everything on one screen.</div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '2.5vh', lineHeight: 1.6, maxWidth: '80%', margin: '0 auto' }}>
            CRM, support tickets, Slack threads, Jira tasks, billing — unified with full context on every customer interaction.
          </div>
        </div>
        <Footer num={3} />
      </Slide>

      <Slide>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 40%, rgba(96,165,250,0.06) 0%, transparent 55%)' }} />
        <Header />
        <div style={{ textAlign: 'center', zIndex: 10, padding: '0 6%' }}>
          <div style={{ fontWeight: 700, color: 'white', fontSize: '4vh', marginBottom: '4vh' }}>Before → After</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
            {[
              { before: '12 tabs open', after: '1 screen', color: '#60a5fa' },
              { before: '4 min context lookup', after: '0 sec — instant', color: '#34D399' },
              { before: 'Copy-paste between tools', after: 'Auto-synced', color: '#c084fc' },
              { before: 'Missed signals', after: 'AI-surfaced alerts', color: '#f59e0b' },
            ].map(item => (
              <div key={item.after} style={{ display: 'flex', alignItems: 'center', gap: '2vh', background: '#121118', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '2vh 3vh' }}>
                <div style={{ flex: 1, textAlign: 'right' }}>
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '2vh', textDecoration: 'line-through' }}>{item.before}</span>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '2.5vh' }}>→</span>
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <span style={{ color: item.color, fontSize: '2vh', fontWeight: 600 }}>{item.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer num={4} />
      </Slide>

      <Slide>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 45%, rgba(96,165,250,0.1) 0%, transparent 55%)' }} />
        <Header />
        <div style={{ textAlign: 'center', zIndex: 10, padding: '0 8%' }}>
          <div style={{ fontWeight: 800, color: 'white', fontSize: '5.5vh', lineHeight: 1.15 }}>Zero context lost.</div>
          <div style={{ fontWeight: 800, color: '#60a5fa', fontSize: '5.5vh', lineHeight: 1.15, marginBottom: '4vh' }}>See the Workbench.</div>
          <div style={{ background: '#1BA784', borderRadius: '10px', padding: '2vh 5vh', display: 'inline-block', marginBottom: '2vh' }}>
            <span style={{ color: 'white', fontSize: '2.5vh', fontWeight: 600 }}>Book a Demo →</span>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '2vh' }}>integratewise.ai</div>
        </div>
        <Footer num={5} />
      </Slide>
    </div>
  );
}
