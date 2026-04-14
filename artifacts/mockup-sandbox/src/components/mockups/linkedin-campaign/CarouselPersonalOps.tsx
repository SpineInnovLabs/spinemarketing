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
    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.6vh' }}>Personal Ops</span>
  </div>
);

const Footer = ({ num }: { num: number }) => (
  <div style={{ position: 'absolute', bottom: '4%', display: 'flex', gap: '1vh', zIndex: 10 }}>
    {[1,2,3,4,5].map(i => (
      <div key={i} style={{ width: '5vh', height: '0.5vh', borderRadius: '2px', background: i === num ? '#c084fc' : 'rgba(255,255,255,0.1)' }} />
    ))}
  </div>
);

export function CarouselPersonalOps() {
  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'auto' }}>
      <Slide>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 40%, rgba(192,132,252,0.06) 0%, transparent 55%)' }} />
        <Header />
        <div style={{ textAlign: 'center', zIndex: 10, padding: '0 8%' }}>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '3vh', marginBottom: '2vh' }}>You spend</div>
          <div style={{ fontWeight: 800, color: '#c084fc', fontSize: '8vh', lineHeight: 1.1 }}>45 minutes</div>
          <div style={{ fontWeight: 800, color: 'white', fontSize: '5vh', lineHeight: 1.2, marginBottom: '2vh' }}>every morning just<br/>getting organised.</div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '2.5vh' }}>What if it was done for you? →</div>
        </div>
        <Footer num={1} />
      </Slide>

      <Slide>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 40%, rgba(239,68,68,0.05) 0%, transparent 55%)' }} />
        <Header />
        <div style={{ textAlign: 'center', zIndex: 10, padding: '0 8%' }}>
          <div style={{ fontWeight: 800, color: 'white', fontSize: '4.5vh', lineHeight: 1.15, marginBottom: '4vh' }}>
            The morning ritual <span style={{ color: '#ef4444' }}>nobody asked for</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5vh', maxWidth: '85%' }}>
            {[
              { tool: 'Email', action: 'Scan 40 messages', time: '12 min' },
              { tool: 'Jira', action: 'Check assigned tasks', time: '5 min' },
              { tool: 'Slack', action: 'Catch up on 6 channels', time: '10 min' },
              { tool: 'Calendar', action: 'Prep for 3 meetings', time: '8 min' },
              { tool: 'Docs', action: 'Find latest versions', time: '10 min' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#121118', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '1.5vh 3vh' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5vh' }}>
                  <span style={{ color: '#c084fc', fontSize: '1.8vh', fontWeight: 600, minWidth: '8vh' }}>{item.tool}</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '2vh' }}>{item.action}</span>
                </div>
                <span style={{ color: '#ef4444', fontSize: '1.8vh', fontWeight: 600 }}>+{item.time}</span>
              </div>
            ))}
          </div>
        </div>
        <Footer num={2} />
      </Slide>

      <Slide>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 40%, rgba(192,132,252,0.08) 0%, transparent 55%)' }} />
        <Header />
        <div style={{ textAlign: 'center', zIndex: 10, padding: '0 8%' }}>
          <div style={{ fontWeight: 800, color: 'white', fontSize: '5vh', lineHeight: 1.15 }}>Your day,</div>
          <div style={{ fontWeight: 800, color: '#c084fc', fontSize: '5vh', lineHeight: 1.15, marginBottom: '3vh' }}>already assembled.</div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '2.5vh', lineHeight: 1.6, maxWidth: '80%', margin: '0 auto' }}>
            The Intelligence Layer pulls from every tool overnight — so your morning starts with clarity, not chaos.
          </div>
        </div>
        <Footer num={3} />
      </Slide>

      <Slide>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 40%, rgba(192,132,252,0.06) 0%, transparent 55%)' }} />
        <Header />
        <div style={{ textAlign: 'center', zIndex: 10, padding: '0 6%' }}>
          <div style={{ fontWeight: 700, color: 'white', fontSize: '3.5vh', marginBottom: '3vh' }}>Your morning brief</div>
          <div style={{ background: '#121118', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '3vh', textAlign: 'left' }}>
            {[
              { time: '9:00', label: 'Prep for standup', source: 'Jira + Slack', color: '#c084fc' },
              { time: '9:15', label: '3 follow-ups due', source: 'HubSpot + Gmail', color: '#34D399' },
              { time: '10:30', label: 'Review escalation', source: 'Zendesk', color: '#f59e0b' },
              { time: '14:00', label: 'QBR deck auto-updated', source: 'Docs + CRM', color: '#60a5fa' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '2vh', padding: '1.5vh 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                <span style={{ color: item.color, fontSize: '2vh', fontWeight: 700, minWidth: '6vh' }}>{item.time}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ color: 'white', fontSize: '2vh', fontWeight: 600 }}>{item.label}</div>
                  <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.5vh' }}>{item.source}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer num={4} />
      </Slide>

      <Slide>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 45%, rgba(192,132,252,0.1) 0%, transparent 55%)' }} />
        <Header />
        <div style={{ textAlign: 'center', zIndex: 10, padding: '0 8%' }}>
          <div style={{ fontWeight: 800, color: 'white', fontSize: '5.5vh', lineHeight: 1.15 }}>Open one tab.</div>
          <div style={{ fontWeight: 800, color: '#c084fc', fontSize: '5.5vh', lineHeight: 1.15 }}>Own your day.</div>
          <div style={{ fontWeight: 800, color: 'white', fontSize: '5.5vh', lineHeight: 1.15, marginBottom: '4vh' }}>No assembly required.</div>
          <div style={{ background: '#1BA784', borderRadius: '10px', padding: '2vh 5vh', display: 'inline-block', marginBottom: '2vh' }}>
            <span style={{ color: 'white', fontSize: '2.5vh', fontWeight: 600 }}>Try It Free →</span>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '2vh' }}>integratewise.ai</div>
        </div>
        <Footer num={5} />
      </Slide>
    </div>
  );
}
