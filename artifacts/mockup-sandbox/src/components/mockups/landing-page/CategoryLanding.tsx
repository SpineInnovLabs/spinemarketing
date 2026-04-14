import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { ArrowRight, Layers, Zap, Database, Activity, GitMerge, Fingerprint, ShieldCheck, MonitorDot, Bot } from "lucide-react";

export function CategoryLanding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#08070E] text-white font-sans overflow-x-hidden selection:bg-[#1BA784] selection:text-white"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          animation: pulse-slow 8s infinite alternate;
          pointer-events: none;
        }
      `}} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between border-b border-white/5 bg-[#08070E]/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#1BA784" />
            <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9" />
          </svg>
          <span className="font-bold text-xl tracking-tight">IntegrateWise</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#platform" className="hover:text-white transition-colors">Platform</a>
          <a href="#spine" className="hover:text-white transition-colors">Adaptive Spine</a>
          <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
        </div>
        <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all border border-white/10">
          Sign In
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden min-h-[90vh] flex flex-col items-center justify-center">
        <div className="glow-orb w-[600px] h-[600px] bg-[#1BA784]/20 -top-40 -left-20" />
        <div className="glow-orb w-[800px] h-[800px] bg-[#34D399]/10 bottom-0 -right-40" style={{ animationDelay: '2s' }} />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#1BA784] font-medium text-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#1BA784] animate-pulse" />
            The Knowledge Workspace over the Adaptive Spine
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] mb-8"
          >
            Every customer. <br />
            <span className="text-white/40">Every tool.</span> <br />
            One screen.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-xl md:text-2xl text-white/60 font-medium max-w-3xl mx-auto leading-relaxed mb-12"
          >
            You've been sold CRM upgrades and AI add-ons. Nobody built the thing that connects them all. Until now.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group bg-[#1BA784] hover:bg-[#158C6E] text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-[0_0_40px_rgba(27,167,132,0.3)] hover:shadow-[0_0_60px_rgba(27,167,132,0.5)] flex items-center gap-2">
              Book a demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <span className="text-white/40 text-sm font-medium mt-4 sm:mt-0 sm:ml-4">
              Join 500+ revenue leaders
            </span>
          </motion.div>
        </div>

        {/* Hero Image Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          style={{ y: useTransform(scrollYProgress, [0, 0.5], [0, -100]) }}
          className="relative z-20 w-full max-w-6xl mx-auto mt-24 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(27,167,132,0.15)] bg-[#08070E]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#08070E] via-transparent to-transparent z-10 h-full w-full pointer-events-none" />
          <img 
            src="/__mockup/images/mockup-crm-ui.png" 
            alt="IntegrateWise Workspace Interface" 
            className="w-full h-auto object-cover opacity-90 rounded-2xl"
          />
        </motion.div>
      </section>

      {/* Logos Section */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-semibold text-white/40 tracking-widest uppercase mb-10">
            Native integrations with the tools you already trust
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['Salesforce', 'HubSpot', 'Jira', 'Zendesk', 'Stripe', 'Slack', 'Notion'].map(logo => (
              <span key={logo} className="text-2xl font-bold text-white font-serif tracking-tight">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Hook */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-white/30"
          >
            You have 12 open tabs. <br />
            <span className="text-white">Your accounts have answers.</span> <br />
            They just can't talk to each other.
          </motion.h2>
        </div>
      </section>

      {/* Category Statement / Adaptive Spine */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#08070E]">
          <motion.img 
            style={{ y: useTransform(scrollYProgress, [0.3, 0.8], [0, 200]) }}
            src="/__mockup/images/adaptive-spine.png" 
            alt="Adaptive Spine" 
            className="w-full h-full object-cover opacity-30 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08070E] via-transparent to-[#08070E]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1BA784]/10 border border-[#1BA784]/20 text-[#1BA784] font-medium text-sm mb-6">
              <Database className="w-4 h-4" />
              The Architecture
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Built on the <br/> <span className="text-[#1BA784]">Adaptive Spine</span>
            </h2>
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              IntegrateWise is the first Knowledge Workspace built over a live data backbone that turns disconnected tools into a single source of truth. It maps your business entities automatically.
            </p>
            <ul className="space-y-4">
              {[
                { icon: GitMerge, text: "Bidirectional sync across 70+ platforms" },
                { icon: Zap, text: "Real-time signal processing and alerts" },
                { icon: ShieldCheck, text: "Enterprise-grade truth boundary" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-medium">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#1BA784]" />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[600px] rounded-3xl border border-white/10 bg-black/50 backdrop-blur-2xl overflow-hidden p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="h-2 w-20 bg-[#1BA784] rounded-full" />
              <h3 className="text-2xl font-bold">Data Flow Architecture</h3>
              <p className="text-white/50">Signals ingested, normalized, and unified into an entity graph.</p>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(27,167,132,0.15)_0%,transparent_70%)] pointer-events-none" />
            
            {/* Abstract visual representation of spine */}
            <div className="relative h-64 flex items-center justify-center">
              <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#1BA784] to-transparent absolute" />
              <div className="absolute w-full flex justify-between px-10">
                {[1,2,3,4,5].map(i => (
                  <motion.div 
                    key={i}
                    animate={{ 
                      y: [0, -10, 0], 
                      boxShadow: ["0 0 0px rgba(27,167,132,0)", "0 0 20px rgba(27,167,132,0.8)", "0 0 0px rgba(27,167,132,0)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="w-4 h-4 rounded-full bg-[#1BA784]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Layers */}
      <section className="py-32 px-6 bg-[#0B0A12]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Work happens in <span className="italic font-serif font-medium text-white/50">two layers</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">A workspace built for humans, powered by an intelligence engine that never sleeps.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* L1 Workbench */}
            <div className="group rounded-3xl p-10 bg-gradient-to-b from-white/5 to-transparent border border-white/5 hover:border-[#1BA784]/30 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <MonitorDot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">L1 — Daily Workbench</h3>
              <p className="text-lg text-white/50 mb-8">
                Where account managers, RevOps leads, and business ops teams actually work. Every account, every task, every engagement signal — on one precision screen.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-medium text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1BA784]" /> No more tab switching
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1BA784]" /> Unified entity profiles
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1BA784]" /> Direct write-back to source systems
                </div>
              </div>
            </div>

            {/* L2 Intelligence Layer */}
            <div className="group rounded-3xl p-10 bg-gradient-to-b from-[#1BA784]/10 to-transparent border border-[#1BA784]/20 hover:border-[#1BA784]/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1BA784]/20 blur-[100px] pointer-events-none" />
              <div className="w-16 h-16 rounded-2xl bg-[#1BA784]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Bot className="w-8 h-8 text-[#1BA784]" />
              </div>
              <h3 className="text-3xl font-bold mb-4">L2 — Intelligence Layer</h3>
              <p className="text-lg text-white/60 mb-8">
                The AI Twin monitors the Spine, surfaces hidden patterns, drafts actions, and presents them with evidence. Nothing executes without your approval.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-medium text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1BA784]" /> Autonomous signal detection
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1BA784]" /> Context-aware drafting
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1BA784]" /> Human-in-the-loop execution
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Points */}
      <section className="py-32 px-6 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 divide-x divide-white/5">
            {[
              { metric: "70+", label: "Native Connectors", sub: "Deep, bi-directional" },
              { metric: "4.2h", label: "Saved Per Rep", sub: "Every single day" },
              { metric: "31%", label: "Churn Reduction", sub: "Avg for success teams" },
              { metric: "94%", label: "AI Actions Approved", sub: "Unmatched precision" }
            ].map((stat, i) => (
              <div key={i} className="pl-8 first:pl-0 flex flex-col justify-center">
                <div className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-2">
                  {stat.metric}
                </div>
                <div className="text-lg font-bold text-[#1BA784] mb-1">{stat.label}</div>
                <div className="text-sm font-medium text-white/40">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1BA784] opacity-[0.03]" />
        <div className="glow-orb w-[1000px] h-[1000px] bg-[#1BA784]/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
            Stop switching context. <br />
            Start driving revenue.
          </h2>
          <p className="text-xl text-white/50 mb-12">
            Experience the first Knowledge Workspace built on the Adaptive Spine.
          </p>
          <button className="bg-white text-black hover:bg-gray-100 px-10 py-5 rounded-full text-xl font-bold transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] flex items-center gap-3 mx-auto">
            Book a demo
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6 text-center text-sm font-medium text-white/30">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#1BA784" />
            <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9" />
          </svg>
          <span className="font-bold tracking-tight text-white">IntegrateWise</span>
        </div>
        © {new Date().getFullYear()} IntegrateWise. All rights reserved. The Adaptive Spine™ is a trademark of IntegrateWise.
      </footer>
    </div>
  );
}

export default CategoryLanding;