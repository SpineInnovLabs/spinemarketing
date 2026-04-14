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
    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.6vh' }}>Account Success</span>
  </div>
);

const Footer = ({ num }: { num: number }) => (
  <div style={{ position: 'absolute', bottom: '4%', display: 'flex', gap: '1vh', zIndex: 10 }}>
    {[1,2,3,4,5].map(i => (
      <div key={i} style={{ width: '5vh', height: '0.5vh', borderRadius: '2px', background: i === num ? '#34D399' : 'rgba(255,255,255,0.1)' }} />
    ))}
  </div>
);

export function CarouselAccountSuccess() {
  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'auto' }}>
      <Slide>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 40%, rgba(239,68,68,0.06) 0%, transparent 55%)' }} />
        <Header />
        <div style={{ textAlign: 'center', zIndex: 10, padding: '0 8%' }}>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '3vh', marginBottom: '2vh' }}>Your</div>
          <div style={{ fontWeight: 800, color: '#f59e0b', fontSize: '8vh', lineHeight: 1.1 }}>$8M account</div>
          <div style={{ fontWeight: 800, color: 'white', fontSize: '6vh', lineHeight: 1.1, marginBottom: '3vh' }}>is about to churn.</div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '2.5vh' }}>Swipe to see what you missed →</div>
        </div>
        <Footer num={1} />
      </Slide>

      <Slide>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 40%, rgba(245,158,11,0.06) 0%, transparent 55%)' }} />
        <Header />
        <div style={{ textAlign: 'center', zIndex: 10, padding: '0 8%' }}>
          <div style={{ fontWeight: 800, color: 'white', fontSize: '5vh', lineHeight: 1.15, marginBottom: '4vh' }}>
            The signals were there.<br/><span style={{ color: '#f59e0b' }}>In 4 different tools.</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5vh', width: '75vh', maxWidth: '85%' }}>
            {[
              { signal: 'Ticket escalated', source: 'Zendesk', dot: '#ef4444' },
              { signal: 'Usage dropped 40%', source: 'Analytics', dot: '#f59e0b' },
              { signal: 'Champion went silent', source: 'Slack', dot: '#f59e0b' },
              { signal: 'Competitor eval started', source: 'HubSpot', dot: '#ef4444' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#121118', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '2vh 3vh' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5vh' }}>
                  <div style={{ width: '1.2vh', height: '1.2vh', borderRadius: '50%', background: item.dot }} />
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '2.2vh', fontWeight: 500 }}>{item.signal}</span>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.8vh' }}>{item.source}</span>
              </div>
            ))}
          </div>
        </div>
        <Footer num={2} />
      </Slide>

      <Slide>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 40%, rgba(27,167,132,0.08) 0%, transparent 55%)' }} />
        <Header />
        <div style={{ textAlign: 'center', zIndex: 10, padding: '0 8%' }}>
          <div style={{ fontWeight: 800, color: 'white', fontSize: '5vh', lineHeight: 1.15 }}>
            The Intelligence Layer
          </div>
          <div style={{ fontWeight: 800, color: '#34D399', fontSize: '5vh', lineHeight: 1.15, marginBottom: '3vh' }}>
            sees what humans miss.
          </div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '2.5vh', lineHeight: 1.6, maxWidth: '80%', margin: '0 auto' }}>
            It fuses CRM, support, product usage, and comms into a unified signal — surfacing churn risk weeks before renewal.
          </div>
        </div>
        <Footer num={3} />
      </Slide>

      <Slide>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 40%, rgba(27,167,132,0.06) 0%, transparent 55%)' }} />
        <Header />
        <div style={{ textAlign: 'center', zIndex: 10, padding: '0 8%' }}>
          <div style={{ fontWeight: 700, color: 'white', fontSize: '4vh', marginBottom: '4vh' }}>How it works</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
            {[
              { icon: '🔍', label: 'Health Score', desc: 'Real-time account health from every source', color: '#34D399' },
              { icon: '⚡', label: 'Risk Alerts', desc: 'Automated signals before things go wrong', color: '#f59e0b' },
              { icon: '📊', label: 'Renewal Intel', desc: 'Evidence-backed expansion & save plays', color: '#60a5fa' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '2vh', background: '#121118', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '2.5vh 3vh', textAlign: 'left' }}>
                <div style={{ fontSize: '4vh', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ color: item.color, fontSize: '2.2vh', fontWeight: 700, marginBottom: '0.3vh' }}>{item.label}</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.8vh' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer num={4} />
      </Slide>

      <Slide>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 45%, rgba(27,167,132,0.1) 0%, transparent 55%)' }} />
        <Header />
        <div style={{ textAlign: 'center', zIndex: 10, padding: '0 8%' }}>
          <div style={{ fontWeight: 800, color: 'white', fontSize: '5.5vh', lineHeight: 1.15 }}>See churn</div>
          <div style={{ fontWeight: 800, color: '#34D399', fontSize: '5.5vh', lineHeight: 1.15 }}>before it hits.</div>
          <div style={{ fontWeight: 800, color: 'white', fontSize: '5.5vh', lineHeight: 1.15, marginBottom: '4vh' }}>Save the account.</div>
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
