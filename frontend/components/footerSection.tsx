import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0E0E11] text-white pt-16 pb-8 px-6 font-sans border-t border-[#2a2a2e]">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 mb-16">
          
          {/* Brand & Newsletter Section */}
          <div className="w-full md:w-5/12 lg:w-1/3">
            
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 2C10.6193 6.42229 6.42229 10.6193 2 12C6.42229 13.3807 10.6193 17.5777 12 22C13.3807 17.5777 17.5777 13.3807 22 12C17.5777 10.6193 13.3807 6.42229 12 2Z" 
                  fill="#ff5a1f"
                />
                <circle cx="12" cy="12" r="3" fill="#0E0E11" />
              </svg>
              <span className="text-xl font-bold tracking-wide">Logoipsum</span>
            </div>
            
            {/* Description */}
            <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6 pr-4">
              Get actionable security guides, product updates, and developer releases — sign up for product updates.
            </p>
            
            {/* Newsletter Form */}
            <form className="flex flex-col gap-3 w-full max-w-sm">
              
              <input 
                type="email" 
                placeholder="Enter your E-mail" 
                required
                className="
                  bg-[#18181B] 
                  border border-white/5 
                  rounded-full px-5 py-3 
                  text-sm text-white 
                  placeholder:text-[#52525B] 
                  focus:outline-none 
                  focus:border-[#ff5a1f] 
                  focus:ring-1 focus:ring-[#ff5a1f]/40
                  transition-all
                "
              />
              
              <button 
                type="submit" 
                className="
                  bg-[#ff5a1f] 
                  hover:bg-[#ff6a2f] 
                  text-white font-semibold 
                  rounded-full px-5 py-3 text-sm 
                  transition-all
                  shadow-[0_0_20px_rgba(255,90,31,0.35)]
                  hover:shadow-[0_0_30px_rgba(255,90,31,0.6)]
                  active:scale-[0.97]
                "
              >
                Sign Up
              </button>

            </form>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-7/12 lg:w-3/5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-medium mb-5 text-sm">Quick Links</h4>
              <ul className="flex flex-col gap-3">
                {["Product", "Developers", "Security", "Docs", "Blog"].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-[#a1a1aa] hover:text-[#ff5a1f] text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-medium mb-5 text-sm">Legal</h4>
              <ul className="flex flex-col gap-3">
                {["Privacy Policy", "Help Center"].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-[#a1a1aa] hover:text-[#ff5a1f] text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Center */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-white font-medium mb-5 text-sm">Help Center</h4>
              <ul className="flex flex-col gap-3 text-sm text-[#a1a1aa]">
                <li>
                  Support:{" "}
                  <a 
                    href="mailto:support@company.com" 
                    className="hover:text-[#ff5a1f] transition-colors"
                  >
                    support@[company].com
                  </a>
                </li>
                <li>
                  Sales:{" "}
                  <a 
                    href="mailto:sales@company.com" 
                    className="hover:text-[#ff5a1f] transition-colors"
                  >
                    sales@[company].com
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-[#52525B] text-xs pt-8 border-t border-white/5">
          &copy; 2025 Logoipsum. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
}