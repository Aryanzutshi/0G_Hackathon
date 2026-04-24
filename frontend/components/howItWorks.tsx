"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function HowItWorks() {
  const [activeRetail, setActiveRetail] = useState(0);
  const [activeEnterprise, setActiveEnterprise] = useState(0);

  const retailSteps = [
    {
      title: "Create — Quick wallet setup",
      desc: "Install app or extension; generate or import keys; backup securely.",
      image: "/how-it-works-1.png",
    },
    {
      title: "Buy — Fast fiat access",
      desc: "Purchase with local payments or swap tokens; fees shown upfront.",
      image: "/how-it-works-3.jpeg",
    },
    {
      title: "Use — Connect and manage",
      desc: "Connect Apps, stake, trade, send tokens and NFTs securely easily.",
      image: "/how-it-works-4.jpeg",
    },
  ];

  const enterpriseSteps = [
    {
      title: "Integrate — SDKs & APIs",
      desc: "Install SDKs or use APIs to add wallet functionality fast.",
      image: "/how-it-works-2.png",
    },
    {
      title: "Test — Sandbox & webhooks",
      desc: "Validate flows in sandbox, testnets; simulate events with webhooks now.",
      image: "/enterprise-step-2.png",
    },
    {
      title: "Deploy — Production & SLAs",
      desc: "Launch with production credentials, optional custody, compliance, and support available.",
      image: "/enterprise-step-3.png",
    },
  ];

  useEffect(() => {
    const i = setInterval(() => {
      setActiveRetail((p) => (p === retailSteps.length - 1 ? 0 : p + 1));
    }, 4000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const i = setInterval(() => {
      setActiveEnterprise((p) =>
        p === enterpriseSteps.length - 1 ? 0 : p + 1
      );
    }, 4000);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="min-h-screen bg-black text-white py-24 px-6 md:px-16 font-sans relative">
      
      {/* 🔴 subtle brand glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.12),transparent_60%)] -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-20 md:mb-32">
          What do you want to{" "}
          <span className="bg-gradient-to-r from-[#ff0000] to-[#ff4d00] bg-clip-text text-transparent">
            build?
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-x-24 lg:gap-y-40">
          
          {/* -------- Retail -------- */}
          <div className="relative rounded-[2.5rem] overflow-hidden border border-[#3a2f2f] bg-[#272121]/60 p-3 backdrop-blur-xl shadow-[0_0_40px_rgba(255,0,0,0.08)] flex items-center justify-center h-[400px] md:h-[550px]">
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-black">
              {retailSteps.map((step, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    activeRetail === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover scale-[1.02]"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-14">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Retail — Simple, secure access
              </h3>
              <p className="text-[#b3b3b3] text-lg">
                Build, buy, and use crypto in three steps.
              </p>
            </div>

            <div className="relative space-y-10">
              <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-[#3a2f2f]" />

              {retailSteps.map((step, index) => {
                const isActive = activeRetail === index;

                return (
                  <div
                    key={index}
                    onClick={() => setActiveRetail(index)}
                    className="relative pl-8 cursor-pointer"
                  >
                    <div
                      className={`absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#ff0000] ring-4 ring-black shadow-[0_0_12px_rgba(255,0,0,0.8)] transition ${
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-50 opacity-0"
                      }`}
                    />

                    <div
                      className={`transition ${
                        isActive
                          ? "opacity-100 translate-x-1"
                          : "opacity-40 hover:opacity-70"
                      }`}
                    >
                      <h4 className="font-semibold mb-2 text-lg">
                        {step.title}
                      </h4>
                      <p className="text-[#b3b3b3] text-sm max-w-sm">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* -------- Enterprise -------- */}
          <div className="order-3 lg:order-4 relative rounded-[2.5rem] overflow-hidden border border-[#3a2f2f] bg-[#272121]/60 p-3 backdrop-blur-xl shadow-[0_0_40px_rgba(255,77,0,0.08)] flex items-center justify-center h-[400px] md:h-[550px]">
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-black">
              {enterpriseSteps.map((step, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    activeEnterprise === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover scale-[1.02]"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="order-4 lg:order-3 flex flex-col justify-center">
            <div className="mb-14">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Enterprise & Developers
              </h3>
              <p className="text-[#b3b3b3] text-lg">
                Integrate, validate, and deploy at scale.
              </p>
            </div>

            <div className="relative space-y-10">
              <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-[#3a2f2f]" />

              {enterpriseSteps.map((step, index) => {
                const isActive = activeEnterprise === index;

                return (
                  <div
                    key={index}
                    onClick={() => setActiveEnterprise(index)}
                    className="relative pl-8 cursor-pointer"
                  >
                    <div
                      className={`absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#ff4d00] ring-4 ring-black shadow-[0_0_12px_rgba(255,77,0,0.8)] transition ${
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-50 opacity-0"
                      }`}
                    />

                    <div
                      className={`transition ${
                        isActive
                          ? "opacity-100 translate-x-1"
                          : "opacity-40 hover:opacity-70"
                      }`}
                    >
                      <h4 className="font-semibold mb-2 text-lg">
                        {step.title}
                      </h4>
                      <p className="text-[#b3b3b3] text-sm max-w-sm">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}