import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md text-green-800' 
          : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Leaf className={`h-8 w-8 ${isScrolled ? 'text-green-600' : 'text-white'}`} />
              <span className="ml-2 text-xl font-bold">Earth Day 2025</span>
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
            <div className="flex items-center">
              <img 
                src="/images/raffles_logo.png" 
                alt="Raffles University Logo" 
                className="h-8 w-auto"
              />
              <span className={`ml-2 text-sm font-semibold ${
                isScrolled ? 'text-green-800' : 'text-white'
              }`}>
                Raffles University
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="px-3 py-2 rounded-md text-sm font-medium hover:text-green-500 transition-colors">Home</a>
              <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:text-green-500 transition-colors">About</a>
              <a href="#quiz" className="px-3 py-2 rounded-md text-sm font-medium hover:text-green-500 transition-colors">Quiz</a>
              <a href="#calculator" className="px-3 py-2 rounded-md text-sm font-medium hover:text-green-500 transition-colors">Calculator</a>
              <a href="#pledge" className="px-3 py-2 rounded-md text-sm font-medium hover:text-green-500 transition-colors">Take Action</a>
              <a href="#gallery" className="px-3 py-2 rounded-md text-sm font-medium hover:text-green-500 transition-colors">Gallery</a>
              <a href="#resources" className="px-3 py-2 rounded-md text-sm font-medium hover:text-green-500 transition-colors">Resources</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a 
              href="#home" 
              className="block px-3 py-2 rounded-md text-base font-medium text-green-800 hover:text-green-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-green-800 hover:text-green-500"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#calculator" 
              className="block px-3 py-2 rounded-md text-base font-medium text-green-800 hover:text-green-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Calculator
            </a>
            <a 
              href="#pledge" 
              className="block px-3 py-2 rounded-md text-base font-medium text-green-800 hover:text-green-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Take Action
            </a>
            <a 
              href="#gallery" 
              className="block px-3 py-2 rounded-md text-base font-medium text-green-800 hover:text-green-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
            <a 
              href="#resources" 
              className="block px-3 py-2 rounded-md text-base font-medium text-green-800 hover:text-green-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;