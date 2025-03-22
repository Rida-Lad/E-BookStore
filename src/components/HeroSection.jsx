import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import herophoto from '../assets/herophoto.jpg';

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Only prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-blue-50 to-white relative flex flex-col items-center justify-center">
      {/* Regular Navbar */}
      <nav className="w-full px-6 md:px-12 py-4 flex justify-between items-center z-40 bg-transparent shadow-none absolute top-0 left-0">
        <div style={{ fontFamily: 'Dancing Script' }} className="text-3xl md:text-4xl font-bold text-blue-600">BookHaven</div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-xl">
          <li><a href="#" className="hover:text-blue-600 transition-all duration-300">Home</a></li>
          <li><a href="#" className="hover:text-blue-600 transition-all duration-300">Browse</a></li>
          <li><a href="#" className="hover:text-blue-600 transition-all duration-300">New Releases</a></li>
          <li><a href="#" className="hover:text-blue-600 transition-all duration-300">About</a></li>
          <li><a href="#" className="hover:text-blue-600 transition-all duration-300">Contact</a></li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-blue-600 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-30 pt-20 px-6 md:hidden overflow-auto">
          <div className="flex flex-col">
            <ul className="flex flex-col">
              <li>
                <a href="#" className="text-2xl font-medium hover:text-blue-600 transition-all duration-300 block py-4">
                  Home
                </a>
                <hr className="border-gray-200" />
              </li>
              <li>
                <a href="#" className="text-2xl font-medium hover:text-blue-600 transition-all duration-300 block py-4">
                  Browse
                </a>
                <hr className="border-gray-200" />
              </li>
              <li>
                <a href="#" className="text-2xl font-medium hover:text-blue-600 transition-all duration-300 block py-4">
                  New Releases
                </a>
                <hr className="border-gray-200" />
              </li>
              <li>
                <a href="#" className="text-2xl font-medium hover:text-blue-600 transition-all duration-300 block py-4">
                  About
                </a>
                <hr className="border-gray-200" />
              </li>
              <li>
                <a href="#" className="text-2xl font-medium hover:text-blue-600 transition-all duration-300 block py-4">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className={`w-full max-w-7xl px-6 md:px-12 pt-24 md:pt-0 ${mobileMenuOpen ? 'hidden' : 'block'}`}>
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          {/* Left Text Content */}
          <div className="text-center md:text-left w-full md:w-1/2 space-y-6 md:space-y-8 mb-10 md:mb-0 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Discover Your Next Favorite Book
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0">
              Thousands of e-books at your fingertips. Read anywhere, anytime.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 pt-2 justify-center md:justify-start">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg md:text-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Start Reading
              </button>
              <button className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-full text-lg md:text-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                Learn more
              </button>
            </div>
            
            {/* Stats Section */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-10 mt-4 pt-4 border-t border-gray-200 relative z-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">15.2K</div>
                <div className="text-base text-gray-600">Book titles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">4.5K</div>
                <div className="text-base text-gray-600">Happy readers</div>
              </div>
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-blue-500 -ml-0 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-blue-600 -ml-3 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-blue-700 -ml-3 border-2 border-white"></div>
              </div>
            </div>
          </div>
          
          {/* Right Image Grid */}
          <div className="w-full md:w-1/2 flex items-center justify-center relative mt-8 md:mt-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96">
              {/* Decorative shapes - Adjusted z-index and positioning */}
              <div className="absolute w-12 h-12 bg-blue-200 rounded-full top-2 left-2 z-0"></div>
              <div className="absolute w-8 h-8 bg-purple-200 rounded-full bottom-2 right-2 z-0"></div>
              <div className="absolute w-6 h-6 bg-blue-300 rounded-full top-0 right-0 z-0"></div>
              <div className="absolute w-4 h-4 bg-purple-300 rounded-full bottom-0 left-0 z-0"></div>
              
              {/* Main image (center) */}
              <div className="absolute inset-4 flex items-center justify-center z-1">
                <div className="w-full h-full bg-blue-100 rounded-2xl overflow-hidden shadow-lg">
                  <img src={herophoto} alt="Person reading on tablet" className="object-cover h-full w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;