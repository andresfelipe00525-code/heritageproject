import React, { useState } from 'react';
import { Globe, Moon, Sun } from 'lucide-react';
import { navigationLinks } from '../mockData';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gray-900 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="font-semibold text-lg text-gray-900">Heritage</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900">
              <Globe className="w-4 h-4" />
              <span>EN</span>
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-9 h-9 rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;