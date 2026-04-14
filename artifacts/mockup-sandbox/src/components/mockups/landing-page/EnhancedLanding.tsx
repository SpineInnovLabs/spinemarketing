import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Check, Database, Zap, ShieldCheck, MonitorDot, Bot, Star, Layers } from "lucide-react";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export function EnhancedLanding() {
  const { scrollYProgress } = useScroll();
  const [activeTab, setActiveTab] = useState<'l1' | 'l2'>('l1');

  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const mockupY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <div
      className="min-h-screen bg-[#08070E] text-[#FFFFFF] overflow-x-hidden selection:bg-[#1BA784]/30 selection:text-white"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 min-h-[95vh] flex flex-col items-center overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(27,167,132,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-[#34D399]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute top-[30%] right-[20%] w-[500px] h-[500px] bg-[#8B5CF6]/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
          
          {/* Announcement Badge */}
          <motion.a 
            href="#"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] hover:border-[#1BA784]/40 hover:bg-[#1BA784]/5 transition-all mb-12 backdrop-blur-md"
          >
            <span className="text-[#34D399]">✦</span>
            <span className="text-sm font-medium text-[rgba(255,255,255,0.8)]">Now in early access — Adaptive Spine for 70+ tools</span>
            <ArrowRight className="w-4 h-4 text-[rgba(255,255,255,0.4)] group-hover:text-[#1BA784] group-hover:translate-x-0.5 transition-all" />
          </motion.a>

          {/* Hero Typography */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[80px] md:text-[110px] font-[800] tracking-[-0.04em] leading-[0.95] mb-8"
          >
            Every customer.<br/>
            Every tool.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">One screen.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[19px] text-[rgba(255,255,255,0.5)] font-normal max-w-[520px] leading-[1.6] mb-12"
          >
            The Adaptive Spine connects your entire stack — Salesforce, HubSpot, Jira, Slack, Stripe — into a unified intelligence layer. Your team works. The Twin watches.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="h-14 px-8 rounded-full bg-gradient-to-b from-[#34D399] to-[#1BA784] text-[#08070E] font-bold text-base hover:shadow-[0_0_30px_rgba(27,167,132,0.4)] hover:scale-[1.02] transition-all flex items-center gap-2 group">
                Book a demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="h-14 px-8 rounded-full bg-transparent border border-[rgba(255,255,255,0.15)] text-white font-medium text-base hover:bg-[rgba(255,255,255,0.05)] transition-colors flex items-center gap-2 group">
                See how it works
                <ArrowRight className="w-5 h-5 rotate-90 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
            <div className="flex items-center gap-3 text-sm text-[rgba(255,255,255,0.4)]">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full bg-[rgba(255,255,255,0.1)] border border-[#08070E] flex items-center justify-center text-[10px]">
                    {String.fromCharCode(64+i)}
                  </div>
                ))}
              </div>
              Trusted by 500+ revenue teams
            </div>
          </motion.div>

          {/* Hero Product Mockup */}
          <motion.div 
            style={{ y: mockupY }}
            initial={{ opacity: 0, y: 100, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="relative w-full max-w-5xl mt-24 perspective-[2000px] z-20"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#08070E] via-transparent to-transparent z-20 h-full w-full pointer-events-none translate-y-10" />
            <div className="relative rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] p-2 shadow-[0_40px_100px_rgba(0,0,0,0.8),0_0_80px_rgba(27,167,132,0.15)] backdrop-blur-xl transform-style-3d">
              <img 
                src="/__mockup/images/mockup-crm-ui.png" 
                alt="Product UI" 
                className="w-full rounded-xl object-cover border border-[rgba(255,255,255,0.05)] shadow-2xl"
              />
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-12 z-30 w-48 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#08070E]/90 backdrop-blur-xl p-4 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#1BA784]/20 flex items-center justify-center">
                  <Star className="w-4 h-4 text-[#1BA784]" />
                </div>
                <div className="text-sm font-semibold">Account Health</div>
              </div>
              <div className="text-2xl font-bold text-[#34D399]">94%</div>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-8 z-30 w-56 rounded-xl border border-[#1BA784]/30 bg-[#08070E]/90 backdrop-blur-xl p-4 shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <Bot className="w-4 h-4 text-[#1BA784]" />
                <div className="text-xs font-medium text-[rgba(255,255,255,0.6)]">Twin AI</div>
              </div>
              <div className="text-sm font-medium">Proposed 3 new actions for Acme Corp</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Logo Strip */}
      <section className="py-16 border-y border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.01)]">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 px-6">
          <span className="text-[11px] font-semibold tracking-[0.2em] text-[rgba(255,255,255,0.35)] uppercase">
            Connects your entire stack
          </span>
          <div className="flex items-center justify-center flex-wrap gap-x-12 gap-y-6">
            {['salesforce', 'hubspot', 'slack', 'atlassian', 'google', 'intercom'].map((logo, i) => (
              <img
                key={i}
                src={`/__mockup/images/logos/${logo}.png`}
                alt={logo}
                className="h-6 object-contain opacity-40 hover:opacity-80 grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-40 px-6 relative">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <FadeIn className="text-center mb-24">
            <h3 className="text-[#1BA784] text-[13px] font-semibold tracking-[0.2em] uppercase mb-8">
              The Problem
            </h3>
            <h2 className="text-[56px] md:text-[72px] font-bold leading-[1.05] tracking-[-0.02em] max-w-4xl">
              You have 12 open tabs.<br/>
              Your accounts have answers.<br/>
              <span className="text-[rgba(255,255,255,0.3)]">They just can't talk to each other.</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
            {[
              { title: "Copy-pasting between tools", desc: "Manually moving data from CRM to Jira to Slack.", icon: MonitorDot },
              { title: "Missed signals buried in CRM", desc: "Critical account updates lost in the noise.", icon: Database },
              { title: "AI tools with no context", desc: "Generic bots that don't know your business.", icon: Bot },
              { title: "Tab-switching killing focus", desc: "Losing hours every week finding the right screen.", icon: Layers }
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1} className="group p-8 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.05)] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-2xl">
                <card.icon className="w-8 h-8 text-[rgba(255,255,255,0.4)] mb-6 group-hover:text-[#1BA784] transition-colors" />
                <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
                <p className="text-[rgba(255,255,255,0.5)] text-base">{card.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Adaptive Spine Section */}
      <section className="py-32 px-6 border-t border-[rgba(255,255,255,0.05)] bg-gradient-to-b from-[rgba(255,255,255,0.01)] to-transparent">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[60%_40%] gap-20 items-center">
          <FadeIn>
            <h3 className="text-[#1BA784] text-[13px] font-semibold tracking-[0.2em] uppercase mb-6">
              The Adaptive Spine
            </h3>
            <h2 className="text-[48px] font-bold leading-[1.1] tracking-[-0.02em] mb-8">
              Connect once.<br/>
              Know everything.
            </h2>
            <p className="text-xl text-[rgba(255,255,255,0.6)] leading-relaxed mb-10 max-w-lg">
              The Adaptive Spine is the foundational intelligence layer. It connects your fragmented tools, normalizes the data, and builds a real-time entity graph of your business.
            </p>
            <ul className="space-y-6">
              {[
                "70+ native connectors — one-time OAuth setup",
                "Three data paths: Truth, Context, Session Summaries",
                "Live sync — never stale, never manual"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4 text-[17px] font-medium text-[rgba(255,255,255,0.9)]">
                  <div className="w-6 h-6 rounded-full bg-[#1BA784]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#1BA784]" />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </FadeIn>
          
          <FadeIn delay={0.2} className="relative">
            <div className="relative rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[#08070E] p-2 shadow-[0_0_60px_rgba(27,167,132,0.1)] transform-style-3d rotate-y-[-5deg] rotate-x-[5deg]">
              <img src="/__mockup/images/adaptive-spine.png" alt="Adaptive Spine" className="w-full rounded-xl opacity-90" />
            </div>
            
            {/* Sync Pulse Dots */}
            <div className="absolute top-1/2 -left-10 flex gap-2 -translate-y-1/2">
              {[0,1,2].map(i => (
                <motion.div 
                  key={i}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  className="w-2 h-2 rounded-full bg-[#34D399]"
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* L1 / L2 Tab Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Tab Switcher */}
          <div className="flex justify-center mb-20">
            <div className="flex p-1 bg-[rgba(255,255,255,0.05)] rounded-full border border-[rgba(255,255,255,0.05)]">
              <button 
                onClick={() => setActiveTab('l1')}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${activeTab === 'l1' ? 'bg-[#1BA784] text-white shadow-lg' : 'text-[rgba(255,255,255,0.5)] hover:text-white'}`}
              >
                L1 — Daily Workbench
              </button>
              <button 
                onClick={() => setActiveTab('l2')}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${activeTab === 'l2' ? 'bg-[#1BA784] text-white shadow-lg' : 'text-[rgba(255,255,255,0.5)] hover:text-white'}`}
              >
                L2 — Intelligence Layer
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="relative min-h-[500px]">
            {/* L1 Content */}
            <motion.div 
              initial={false}
              animate={{ opacity: activeTab === 'l1' ? 1 : 0, pointerEvents: activeTab === 'l1' ? 'auto' : 'none', y: activeTab === 'l1' ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 grid md:grid-cols-[40%_60%] gap-16 items-center"
            >
              <div>
                <h3 className="text-[32px] font-bold mb-6">The workspace for human operators.</h3>
                <p className="text-lg text-[rgba(255,255,255,0.6)] mb-8">
                  Where work actually happens. The Workbench surfaces everything you need from 70+ tools into a single, lightning-fast interface.
                </p>
                <ul className="space-y-5">
                  {[
                    { title: "Entity 360 View", desc: "See every touchpoint, ticket, and invoice in one place." },
                    { title: "Unified Tasks", desc: "Manage cross-platform workflows without switching tabs." },
                    { title: "Workflow Automation", desc: "Trigger actions in any connected tool instantly." }
                  ].map((item, i) => (
                    <li key={i}>
                      <div className="font-semibold text-white mb-1">{item.title}</div>
                      <div className="text-[15px] text-[rgba(255,255,255,0.5)]">{item.desc}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] p-2">
                <img src="/__mockup/images/mockup-crm-ui.png" alt="L1 Workbench" className="w-full rounded-xl" />
              </div>
            </motion.div>

            {/* L2 Content */}
            <motion.div 
              initial={false}
              animate={{ opacity: activeTab === 'l2' ? 1 : 0, pointerEvents: activeTab === 'l2' ? 'auto' : 'none', y: activeTab === 'l2' ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 grid md:grid-cols-[40%_60%] gap-16 items-center"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1BA784]/20 text-[#34D399] text-xs font-bold mb-6">
                  <Bot className="w-3.5 h-3.5" /> Powered by Twin
                </div>
                <h3 className="text-[32px] font-bold mb-6">The intelligence that watches the Spine.</h3>
                <p className="text-lg text-[rgba(255,255,255,0.6)] mb-8">
                  The Twin monitors the data flow, identifies patterns, and drafts actions for you. It does the thinking, you do the approving.
                </p>
                <ul className="space-y-5">
                  {[
                    { title: "Pattern Detection", desc: "Spots churn risks and upsell signals automatically." },
                    { title: "Action Proposals", desc: "Drafts emails, creates tickets, updates records." },
                    { title: "Human Approval", desc: "Nothing executes without your explicit consent." }
                  ].map((item, i) => (
                    <li key={i}>
                      <div className="font-semibold text-white mb-1">{item.title}</div>
                      <div className="text-[15px] text-[rgba(255,255,255,0.5)]">{item.desc}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-[#1BA784]/30 bg-[#08070E] p-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#1BA784]/10 mix-blend-overlay z-10 pointer-events-none" />
                <img src="/__mockup/images/mockup-crm-ui.png" alt="L2 Intelligence" className="w-full rounded-xl opacity-80 filter contrast-125" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proof Metrics */}
      <section className="py-24 border-y border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.01)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[rgba(255,255,255,0.1)]">
            {[
              { val: "70+", label: "Native connectors" },
              { val: "4.2h", label: "Saved per rep / day" },
              { val: "31%", label: "Churn reduction average" },
              { val: "94%", label: "AI actions approved by users" }
            ].map((stat, i) => (
              <div key={i} className="flex-1 text-center py-6 md:py-0 px-4">
                <div className="text-[56px] md:text-[64px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-[#34D399] tracking-tighter leading-none mb-2">
                  {stat.val}
                </div>
                <div className="text-[13px] font-medium text-[rgba(255,255,255,0.5)] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "IntegrateWise replaced 6 different tools we were juggling. The Spine made everything click.", author: "Sarah K.", role: "VP Account Success" },
              { quote: "The Twin flagged an at-risk account we'd have missed for weeks. One screen, full picture.", author: "Marcus L.", role: "RevOps Lead" },
              { quote: "Setup took hours, not months. We connected HubSpot, Jira, and Slack in a morning.", author: "Priya M.", role: "CXO" }
            ].map((test, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-[12px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] flex flex-col justify-between">
                <p className="text-[17px] text-[rgba(255,255,255,0.8)] italic leading-relaxed mb-8">"{test.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center text-sm font-bold text-white">
                    {test.author.split(' ')[0][0]}{test.author.split(' ')[1][0]}
                  </div>
                  <div>
                    <div className="font-bold text-[15px]">{test.author}</div>
                    <div className="text-[13px] text-[rgba(255,255,255,0.4)]">{test.role}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-bold tracking-tight mb-4">Simple pricing, powerful capabilities.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Starter */}
            <div className="p-8 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]">
              <h3 className="text-xl font-semibold mb-2">Starter</h3>
              <div className="text-[40px] font-bold mb-6">$49<span className="text-lg text-[rgba(255,255,255,0.4)] font-normal">/user/mo</span></div>
              <ul className="space-y-4 mb-8 text-[15px] text-[rgba(255,255,255,0.7)]">
                <li className="flex gap-3"><Check className="w-5 h-5 text-[rgba(255,255,255,0.3)] shrink-0" /> L1 Workbench</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[rgba(255,255,255,0.3)] shrink-0" /> 5 Connectors</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[rgba(255,255,255,0.3)] shrink-0" /> Entity 360</li>
              </ul>
              <button className="w-full py-3 rounded-full border border-[rgba(255,255,255,0.2)] font-semibold hover:bg-[rgba(255,255,255,0.05)] transition-colors">Start free trial</button>
            </div>

            {/* Growth */}
            <div className="p-8 rounded-2xl border border-[#1BA784] bg-gradient-to-b from-[#1BA784]/10 to-[rgba(255,255,255,0.02)] scale-105 relative shadow-[0_0_40px_rgba(27,167,132,0.15)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1BA784] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#34D399]">Growth</h3>
              <div className="text-[40px] font-bold mb-6">$99<span className="text-lg text-[rgba(255,255,255,0.4)] font-normal">/user/mo</span></div>
              <ul className="space-y-4 mb-8 text-[15px] text-white">
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#1BA784] shrink-0" /> L1 + L2 Layer</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#1BA784] shrink-0" /> 15 Connectors</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#1BA784] shrink-0" /> Intelligence Engine</li>
              </ul>
              <button className="w-full py-3 rounded-full bg-[#1BA784] text-white font-bold hover:bg-[#158C6E] transition-colors shadow-lg">Get Growth</button>
            </div>

            {/* Command */}
            <div className="p-8 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]">
              <h3 className="text-xl font-semibold mb-2">Command</h3>
              <div className="text-[40px] font-bold mb-6">Custom</div>
              <ul className="space-y-4 mb-8 text-[15px] text-[rgba(255,255,255,0.7)]">
                <li className="flex gap-3"><Check className="w-5 h-5 text-[rgba(255,255,255,0.3)] shrink-0" /> L1 + L2 + Enterprise</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[rgba(255,255,255,0.3)] shrink-0" /> Unlimited Connectors</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[rgba(255,255,255,0.3)] shrink-0" /> SSO / RBAC</li>
              </ul>
              <button className="w-full py-3 rounded-full border border-[rgba(255,255,255,0.2)] font-semibold hover:bg-[rgba(255,255,255,0.05)] transition-colors">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 relative overflow-hidden border-t border-[rgba(255,255,255,0.05)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,167,132,0.15)_0%,rgba(139,92,246,0.05)_50%,transparent_100%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-[56px] md:text-[72px] font-bold tracking-tight leading-[1.05] mb-6">
              Ready to see everything in one screen?
            </h2>
            <p className="text-[20px] text-[rgba(255,255,255,0.5)] mb-12">
              Most teams go live within 48 hours.
            </p>
            <button className="h-16 px-10 rounded-full bg-white text-[#08070E] font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2 group shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              Book your demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-10 px-6 border-t border-[rgba(255,255,255,0.05)] bg-[#08070E]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#1BA784] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#08070E]" />
              </div>
              <span className="font-bold text-xl tracking-tight">IntegrateWise</span>
            </div>
            <p className="text-[14px] text-[rgba(255,255,255,0.5)]">
              The intelligence and orchestration layer for modern revenue teams.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Platform</h4>
            <ul className="space-y-4 text-[14px] text-[rgba(255,255,255,0.5)]">
              <li className="hover:text-white cursor-pointer transition-colors">Adaptive Spine</li>
              <li className="hover:text-white cursor-pointer transition-colors">L1 Workbench</li>
              <li className="hover:text-white cursor-pointer transition-colors">L2 Intelligence</li>
              <li className="hover:text-white cursor-pointer transition-colors">Security</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Solutions</h4>
            <ul className="space-y-4 text-[14px] text-[rgba(255,255,255,0.5)]">
              <li className="hover:text-white cursor-pointer transition-colors">For RevOps</li>
              <li className="hover:text-white cursor-pointer transition-colors">For Customer Success</li>
              <li className="hover:text-white cursor-pointer transition-colors">For Founders</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-[14px] text-[rgba(255,255,255,0.5)]">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-[rgba(255,255,255,0.05)] text-[13px] text-[rgba(255,255,255,0.3)] flex justify-between items-center">
          <div>© {new Date().getFullYear()} IntegrateWise. All rights reserved.</div>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default EnhancedLanding;
