"use client";

import { useState } from "react";

const features = [
  {
    id: "001",
    title: "Setup and customize",
    description: "Monitor category balances so you always know how much is left to spend.",
  },
  {
    id: "002",
    title: "Track Spending",
    description: "Monitor overages, compare spending trends, and adjust as needed.",
  },
  {
    id: "003",
    title: "Optimized Budget",
    description: "Setup smart allocations and make smarter financial decisions.",
  },
  {
    id: "004",
    title: "Open source",
    description: "Transparent and built in public.",
  },
];

const IsometricCube = ({ x, y, size, opacity = 1, accent = false }: any) => {
  const w = size * 0.866;
  const h = size * 0.5;

  const strokeColor = accent ? "#ff4d00" : "#3a2f2f";

  return (
    <g transform={`translate(${x}, ${y})`} opacity={opacity}>
      <polygon points={`0,${-h} ${w},${-h*2} ${w*2},${-h} ${w},0`} fill="#272121" stroke={strokeColor}/>
      <polygon points={`0,${-h} ${w},0 ${w},${size} 0,${size-h}`} fill="#1a1515" stroke={strokeColor}/>
      <polygon points={`${w},0 ${w*2},${-h} ${w*2},${size-h} ${w},${size}`} fill="#000000" stroke={strokeColor}/>
    </g>
  );
};

export default function SecurityPage() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black font-sans px-4 py-12 md:px-10 flex justify-center text-white">
      
      {/* subtle brand glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.1),transparent_60%)] -z-10"/>

      <div className="w-full max-w-[1100px]">

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {features.map((f) => (
            <div
              key={f.id}
              onMouseEnter={() => setHovered(f.id)}
              onMouseLeave={() => setHovered(null)}
              className={`bg-[#272121] border border-[#3a2f2f] rounded-[24px] p-6 flex flex-col justify-between min-h-[220px] transition ${
                hovered === f.id
                  ? "shadow-[0_10px_40px_rgba(255,0,0,0.15)] -translate-y-1 border-[#ff0000]/40"
                  : ""
              }`}
            >
              <span className="text-xs text-[#b3b3b3]">{f.id}</span>

              <div className="mt-auto">
                <p className="text-base font-semibold mb-2">{f.title}</p>
                <p className="text-sm text-[#b3b3b3]">{f.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="bg-[#1a1515] rounded-[32px] overflow-hidden grid lg:grid-cols-2 border border-[#3a2f2f]">

          {/* LEFT GRAPHIC */}
          <div className="relative flex items-center justify-center overflow-hidden min-h-[400px] border-r border-[#3a2f2f]">
            
            {/* glow */}
            <div className="absolute w-64 h-64 bg-[#ff0000]/10 blur-[120px] rounded-full" />

            <svg viewBox="0 0 500 600" className="absolute inset-0 w-full h-full opacity-90">
              
              {/* grid */}
              <defs>
                <pattern id="grid" width="20" height="20">
                  <path d="M20 0 L0 0 0 20" stroke="#ff0000" strokeOpacity="0.05"/>
                </pattern>
              </defs>

              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* connections */}
              <g stroke="#3a2f2f" strokeWidth="1.2">
                <line x1="250" y1="300" x2="350" y2="150" />
                <line x1="250" y1="300" x2="100" y2="200" />
                <line x1="250" y1="300" x2="200" y2="450" />
              </g>

              {/* cubes */}
              <IsometricCube x={220} y={280} size={50} accent />
              <IsometricCube x={375} y={380} size={25} accent />
              <IsometricCube x={75} y={180} size={35} />
              <IsometricCube x={175} y={430} size={40} />
            </svg>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-12 p-10">

            <div>
              <p className="text-[11px] text-[#ff4d00] uppercase mb-4 tracking-widest">
                MOSS Perks
              </p>

              <h2 className="text-5xl font-semibold leading-tight mb-4">
                Security,<br />
                <span className="bg-gradient-to-r from-[#ff0000] to-[#ff4d00] bg-clip-text text-transparent">
                  Reinforced
                </span>
              </h2>

              <p className="text-[#b3b3b3] max-w-sm mb-8">
                Secure, transparent, and built in public. Designed for control and trust.
              </p>

              <button className="bg-[#ff0000] hover:bg-[#ff4d00] text-white px-6 py-3 rounded-full font-semibold shadow-[0_0_20px_rgba(255,0,0,0.5)] transition">
                Start Contributing
              </button>
            </div>

            {/* bottom cards */}
            <div>
              <p className="text-[10px] text-[#b3b3b3] uppercase mb-4 tracking-widest">
                More details
              </p>

              <div className="grid sm:grid-cols-2 gap-4">

                <div className="bg-[#272121] border border-[#3a2f2f] rounded-[20px] p-5">
                  <p className="font-semibold mb-2">Highly Secure</p>
                  <p className="text-xs text-[#b3b3b3]">
                    Strong encryption and secure authentication.
                  </p>
                </div>

                <div className="bg-[#272121] border border-[#3a2f2f] rounded-[20px] p-5">
                  <p className="font-semibold mb-2">Built in public</p>
                  <p className="text-xs text-[#b3b3b3]">
                    Transparent and community-driven.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}