import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Connect', path: '/connect' },
    { name: 'Process', path: '/process' },
    { name: 'Insight', path: '/insight' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-night/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
              <img 
                src="logo.png" 
                alt="DOULIA Logo" 
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="text-2xl font-bold tracking-tighter text-white">
                DOULIA<span className="text-lime-400">.</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-lime-400 bg-white/5'
                      : 'text-gray-300 hover:text-lime-400 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors duration-200"
              aria-expanded={isOpen}
              aria-label="Menu principal"
            >
              {isOpen ? (
                <X className="h-7 w-7 text-lime-400" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with Fade In/Out Transition */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-midnight border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out origin-top transform ${
          isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                isActive(link.path)
                  ? 'text-lime-400 bg-white/10 border-l-4 border-lime-400'
                  : 'text-gray-300 hover:text-lime-400 hover:bg-white/5 border-l-4 border-transparent'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;