import React from "react";

const PricingSection = () => {
  const features = [
    {
      items: [
        "Non-custodial wallet control",
        "Real-time portfolio tracking",
        "NFT viewing and transfers",
      ],
    },
    {
      items: [
        "DEX aggregation best price",
        "Fiat on/off ramps",
        "Staking and yield access",
      ],
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-4 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-[3.25rem] font-bold text-center mb-16 max-w-2xl leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50">
          One plan that covers everything you need, no surprises.
        </h2>

        {/* Main Section */}
        <div className="relative w-full py-24 flex flex-col items-center justify-center rounded-3xl overflow-hidden group">

          {/* Background Image */}
          <div 
            className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
            style={{
              backgroundImage: `url('/cta_image.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Orange Glow (FIXED) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,31,0.35),transparent_60%)] z-0"></div>

          {/* Dark Edge Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_100%)] opacity-90 z-0"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center w-full">
            
            {/* Price */}
            <div className="flex items-center gap-5 mb-14">
              <h3 className="text-7xl md:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500">
                $12
              </h3>
              <div className="flex flex-col justify-center text-[#a1a1aa] text-sm md:text-base font-medium leading-snug">
                <span className="text-gray-300">/ month</span>
                <span className="opacity-60">(billed annually)</span>
              </div>
            </div>

            {/* Features */}
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-16 px-8">
              {features.map((list, index) => (
                <div key={index} className="space-y-5 flex flex-col md:items-center">
                  <div className="space-y-5 w-full max-w-xs">
                    {list.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex} 
                        className="group flex items-center gap-4 cursor-default transition-all duration-300 hover:translate-x-1"
                      >
                        {/* Check Icon */}
                        <div className="relative flex-shrink-0 w-5 h-5 rounded-full border border-[#ff5a1f]/40 bg-[#ff5a1f]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#ff5a1f]/30 group-hover:border-[#ff5a1f]/80 group-hover:shadow-[0_0_10px_rgba(255,90,31,0.4)]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ff5a1f"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3 h-3"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>

                        <p className="text-[#a1a1aa] font-medium text-sm md:text-base transition-colors duration-300 group-hover:text-white">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              className="
                relative px-8 py-3.5 rounded-full text-white text-base font-semibold tracking-wide
                bg-[#1a1a1a] border border-[#ff5a1f]
                shadow-[0_0_20px_rgba(255,90,31,0.4),inset_0_0_12px_rgba(255,90,31,0.2)]
                hover:bg-[#262626]
                hover:shadow-[0_0_30px_rgba(255,90,31,0.8),inset_0_0_15px_rgba(255,90,31,0.5)]
                hover:-translate-y-0.5
                transition-all duration-300 ease-out active:scale-95 active:translate-y-0
                overflow-hidden
              "
            >
              <span className="relative z-10">Start your 14-day trial</span>

              {/* subtle shimmer */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent hover:animate-[shimmer_1.5s_infinite] skew-x-12"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;