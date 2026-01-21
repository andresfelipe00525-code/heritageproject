import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80"
          alt="Heritage Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/60 via-gray-700/50 to-gray-800/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Preserve the Spirit,<br />Modernize the Space
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
          Authentic restoration meets contemporary functionality for heritage homes across UNESCO World Heritage Cities
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3.5 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 group">
            Explore Heritage
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-3.5 bg-transparent text-white border-2 border-white/50 rounded-md font-medium hover:bg-white/10 hover:border-white transition-all duration-300">
            View Projects
          </button>
        </div>
      </div>

      {/* Sound Toggle */}
      <button className="absolute bottom-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="22" y1="9" x2="22" y2="15"></line>
          <line x1="18" y1="7" x2="18" y2="17"></line>
        </svg>
      </button>
    </section>
  );
};

export default HeroSection;