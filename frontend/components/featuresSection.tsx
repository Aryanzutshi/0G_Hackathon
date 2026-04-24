"use client";

import React, { useState, useEffect, useRef } from "react";

export default function FeaturesSlider() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      num: "01",
      title: "Cash in, cash out.",
      desc: "Hold dollars onchain as USDC and cash out to your bank anytime, powered by Coinbase Onramp.",
      graphic: (
        <div className="flex items-center justify-center h-full">
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center z-10 -mr-4 shadow-lg shadow-black/50"
              style={{ border: '1px solid #443737', background: '#1e1717' }}>
              <span style={{ color: '#7a5f5f' }} className="font-medium text-xl">$</span>
            </div>
            <div className="w-16 h-16 rounded-full flex items-center justify-center z-20"
              style={{ border: '1px solid #ff4d00', background: '#2a1a10', boxShadow: '0 0 20px rgba(255,77,0,0.25)' }}>
              <span style={{ color: '#ff4d00' }} className="font-bold text-2xl">$</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: "02",
      title: "Use your assets everywhere.",
      desc: "Legend leverages Across to bridge assets between chains. Get to where you want to end up, no more bridge-first UX.",
      graphic: (
        <div className="relative flex items-center justify-center h-full">
          <svg className="absolute animate-[spin_20s_linear_infinite]" width="96" height="96" viewBox="0 0 96 96" fill="none">
            <circle cx="48" cy="48" r="44" stroke="#443737" strokeWidth="1" strokeDasharray="4 4"/>
          </svg>
          <div className="w-12 h-12 rounded-full flex items-center justify-center z-10"
            style={{ background: '#ff4d00', boxShadow: '0 0 24px rgba(255,77,0,0.5)' }}>
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/></svg>
          </div>
        </div>
      ),
    },
    {
      num: "03",
      title: "Manage your positions from anywhere.",
      desc: "Total visibility for your assets, whether held in your wallet or active in DeFi. Never lose track of your assets when you put them to work.",
      graphic: (
        <div className="relative w-full h-full overflow-hidden flex items-end justify-center">
          <div className="w-48 h-48 rounded-full translate-y-1/3 relative overflow-hidden"
            style={{ border: '1px solid #443737', background: 'linear-gradient(to bottom,#2a1a10,#1a1010)', boxShadow: 'inset 0 20px 40px rgba(0,0,0,.8)' }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <path d="M20,80 Q50,20 80,80" fill="none" stroke="#ff4d00" strokeWidth="1.2" strokeDasharray="2 2"/>
              <path d="M10,60 Q40,10 90,50" fill="none" stroke="#ff0000" strokeWidth="1.2" strokeDasharray="2 2"/>
            </svg>
          </div>
        </div>
      ),
    },
    {
      num: "04",
      title: "Notifications, so you never miss a signal.",
      desc: "Your onchain activity is finally supported by push notifications that actually work. Know when you start earning interest and never miss a beat.",
      graphic: (
        <div className="flex items-center justify-center h-full">
          <div className="relative w-[72px] h-[72px] rounded-[20px] flex items-center justify-center"
            style={{ background: '#ff4d00', boxShadow: '0 0 32px rgba(255,77,0,0.4)' }}>
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/></svg>
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full" style={{ background: '#ff0000', border: '2px solid #1e1717' }}/>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollY = -top;
      const scrollableDistance = height - window.innerHeight;
      let progress = scrollY / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));
      const index = Math.min(features.length - 1, Math.floor(progress * features.length));
      setActiveIndex(index);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [features.length]);

  return (
    <section
      ref={containerRef}
      className="relative text-white font-sans"
      style={{ height: `${features.length * 100}vh`, background: '#272121' }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">

        {/* Dot grid */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.18]"
          style={{ backgroundImage: 'radial-gradient(#443737 1px, transparent 1px)', backgroundSize: '24px 24px' }}/>

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          {/* LEFT */}
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest" style={{ color: '#7a5f5f' }}>
                <span className="w-8 h-[1px]" style={{ background: '#443737' }}></span>
                Platform
              </div>
              <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.05] font-medium tracking-tight flex flex-col gap-4" style={{ color: '#f5f0f0' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: '#ff4d00', boxShadow: '0 0 20px rgba(255,77,0,0.35)' }}>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-sm"/>
                    <div className="w-1.5 h-1.5 bg-white rounded-sm"/>
                    <div className="w-1.5 h-1.5 bg-white rounded-sm"/>
                    <div className="w-1.5 h-1.5 bg-white rounded-sm"/>
                  </div>
                </div>
                Your money at internet speed.
              </h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed tracking-tight mt-6" style={{ color: '#c4a8a8' }}>
                Legend solved crypto's UX problem by integrating DeFi natively into the experience.
                View asset and protocol balances from your phone. No friction.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 relative h-[500px] w-full flex items-center justify-center">
            {features.map((feature, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;
              return (
                <div
                  key={index}
                  className={`absolute inset-0 flex flex-col w-full max-w-xl mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive ? 'opacity-100 translate-y-0 scale-100 z-20'
                    : isPast ? 'opacity-0 -translate-y-24 scale-95 z-10'
                    : 'opacity-0 translate-y-24 scale-95 z-10'
                  }`}
                >
                  <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden relative mb-8"
                    style={{ background: '#1e1717', border: '1px solid rgba(255,77,0,0.12)', boxShadow: 'inset 0 0 20px rgba(0,0,0,.5), 0 20px 40px rgba(0,0,0,.4)' }}>
                    <div className="absolute top-3 left-3 w-2 h-2 opacity-40" style={{ borderTop: '1px solid #7a5f5f', borderLeft: '1px solid #7a5f5f' }}/>
                    <div className="absolute top-3 right-3 w-2 h-2 opacity-40" style={{ borderTop: '1px solid #7a5f5f', borderRight: '1px solid #7a5f5f' }}/>
                    <div className="absolute bottom-3 left-3 w-2 h-2 opacity-40" style={{ borderBottom: '1px solid #7a5f5f', borderLeft: '1px solid #7a5f5f' }}/>
                    <div className="absolute bottom-3 right-3 w-2 h-2 opacity-40" style={{ borderBottom: '1px solid #7a5f5f', borderRight: '1px solid #7a5f5f' }}/>
                    {feature.graphic}
                  </div>

                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="text-xs font-mono" style={{ color: '#7a5f5f' }}>{feature.num}</span>
                    <h3 className="text-2xl font-medium tracking-tight" style={{ color: '#f5f0f0' }}>{feature.title}</h3>
                  </div>
                  <p className="text-lg leading-relaxed font-light pr-4" style={{ color: '#c4a8a8' }}>{feature.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}