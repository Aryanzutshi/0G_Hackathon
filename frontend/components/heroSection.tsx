"use client";

import React, { useState, useEffect } from 'react';

const StatefulAbstractBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [pulse, setPulse] = useState(1);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    const interval = setInterval(() => {
      setPulse((prev) => (prev === 1 ? 1.05 : 1));
    }, 3000);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 flex items-end justify-center pb-20">
      <div
        className="absolute w-[500px] h-[500px] blur-[100px] rounded-full transition-transform duration-300 ease-out"
        style={{
          background: 'rgba(255, 77, 0, 0.12)',
          transform: `translate(${mousePos.x * 100}px, ${mousePos.y * 100}px)`
        }}
      />

      <div
        className="absolute bottom-[-10%] w-[800px] h-[400px] blur-[60px] rounded-full transition-transform duration-[3000ms] ease-in-out"
        style={{
          background: 'linear-gradient(to top, rgba(255,77,0,0.18), transparent)',
          transform: `scale(${pulse})`
        }}
      />

      <div className="relative w-full max-w-4xl h-[400px]">
        <div
          className="absolute bottom-10 left-[20%] w-[200px] h-[200px] backdrop-blur-md transition-transform duration-300 ease-out"
          style={{
            border: '1px solid rgba(255,77,0,0.3)',
            background: 'rgba(255,77,0,0.06)',
            transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px) rotate(12deg)`
          }}
        />

        <div
          className="absolute bottom-[-50px] right-[15%] w-[350px] h-[350px] backdrop-blur-sm rounded-3xl transition-transform duration-300 ease-out"
          style={{
            border: '1px solid rgba(68,55,55,0.5)',
            background: 'rgba(68,55,55,0.12)',
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px) rotate(-6deg)`
          }}
        />

        <svg
          width="200" height="200" viewBox="0 0 200 200" fill="none"
          className="absolute bottom-32 left-[50%] opacity-60 transition-transform duration-300 ease-out"
          style={{ transform: `translate(calc(-50% + ${mousePos.x * -60}px), ${mousePos.y * -20}px) rotate(45deg)` }}
        >
          <rect x="25" y="25" width="150" height="150" stroke="url(#paint0_linear)" strokeWidth="2"/>
          <path d="M25 25L175 175M175 25L25 175" stroke="url(#paint0_linear)" strokeWidth="1.5"/>
          <defs>
            <linearGradient id="paint0_linear" x1="25" y1="25" x2="175" y2="175">
              <stop stopColor="#ff4d00" />
              <stop offset="1" stopColor="#ff0000" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen text-white font-[var(--font-switzer)] overflow-hidden selection:bg-[#443737] relative z-0 flex flex-col" style={{ background: '#272121' }}>

      <div className="absolute inset-0 -z-20" style={{ background: 'radial-gradient(ellipse at top, #443737 0%, #272121 60%)' }} />

      <header className="w-full relative z-20 pt-6">
        <nav className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between rounded-full backdrop-blur-md shadow-2xl" style={{ background: 'rgba(255,77,0,0.08)', border: '1px solid rgba(255,77,0,0.25)' }}>
          <div className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 5.5C12.8284 5.5 13.5 6.17157 13.5 7V10.5H17C17.8284 10.5 18.5 11.1716 18.5 12C18.5 12.8284 17.8284 13.5 17 13.5H13.5V17C13.5 17.8284 12.8284 18.5 12 18.5C11.1716 18.5 10.5 17.8284 10.5 17V13.5H7C6.17157 13.5 5.5 12.8284 5.5 12C5.5 11.1716 6.17157 10.5 7 10.5H10.5V7C10.5 6.17157 11.1716 5.5 12 5.5Z" fill="#ff4d00"/>
            </svg>
          </div>

          <ul className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide" style={{ color: '#c4a8a8' }}>
            <li><a href="#">Product</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>

          <a href="#" className="px-5 py-2 rounded-full text-[13px] font-medium">
            Get Started
          </a>
        </nav>
      </header>

      <main className="relative w-full max-w-5xl mx-auto mt-32 px-6 flex flex-col items-center text-center z-10 flex-grow">
        <h1 className="text-[48px] md:text-[72px] font-bold leading-[1.05] tracking-tight mb-6">
          Take control of your crypto. <br className="hidden md:block" />
          <span style={{ color: '#ff4d00' }}>Secure, simple, and ready.</span>
        </h1>

        <p className="text-[18px] md:text-[20px] max-w-2xl mx-auto mb-12 font-light tracking-wide leading-relaxed" style={{ color: '#c4a8a8' }}>
          A single platform for buying, storing, trading, staking, and building.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 z-20">
          <a href="#" className="px-8 py-3.5 rounded-full font-bold text-[15px] text-white">
            Start Building Free
          </a>
          <a href="#" className="px-8 py-3.5 rounded-full font-semibold text-[15px]">
            Talk to Sales
          </a>
        </div>
      </main>

      <StatefulAbstractBackground />
    </div>
  );
}