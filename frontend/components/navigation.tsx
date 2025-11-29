'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

export default function Navigation() {
  const [activeTab, setActiveTab] = useState('gold-loan');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 50);
  }, []);

  useEffect(() => {
    // Set initial state
    handleScroll();
    
    // Add throttled scroll listener
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  return (
    <>
      {/* Full Navigation - When at top */}
      <nav 
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? 'opacity-0 pointer-events-none h-0 overflow-hidden' : 'opacity-100 pt-0 pb-1'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-[80px]">
            <Link href="/" className="flex items-center">
              <img
                src="/Container.png"
                alt="Yellow Metal"
                className="h-200 md:h-24 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.jpg';
                }}
              />
            </Link>
            
            <div className="hidden md:flex items-center gap-12">
              <Link 
                href="/loan"
                className={`text-sm font-medium transition ${activeTab === 'gold-loan' ? 'text-black' : 'text-gray-600 hover:text-black'}`}
                onClick={() => setActiveTab('gold-loan')}
              >
                Gold Loan
              </Link>
              <button 
                onClick={() => setActiveTab('property-loan')}
                className={`text-sm font-medium transition ${activeTab === 'property-loan' ? 'text-black' : 'text-gray-600 hover:text-black'}`}
              >
                Loan Against Property
              </button>
              <button 
                onClick={() => setActiveTab('fixed-deposit')}
                className={`text-sm font-medium transition ${activeTab === 'fixed-deposit' ? 'text-black' : 'text-gray-600 hover:text-black'}`}
              >
                Fixed Deposit
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dynamic Island - When scrolled */}
      <nav 
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="bg-gradient-to-b from-gray-200 to-gray-400 rounded-full px-8 py-3 shadow-lg">
          <div className="flex items-center gap-8 md:gap-12">
            <Link 
              href="/loan"
              className={`text-sm font-medium transition ${activeTab === 'gold-loan' ? 'text-gray-900 font-semibold' : 'text-gray-700 hover:text-gray-900'}`}
              onClick={() => setActiveTab('gold-loan')}
            >
              Gold Loan
            </Link>
            <button 
              onClick={() => setActiveTab('property-loan')}
              className={`text-sm font-medium transition ${activeTab === 'property-loan' ? 'text-gray-900 font-semibold' : 'text-gray-700 hover:text-gray-900'}`}
            >
              Loan Against Property
            </button>
            <button 
              onClick={() => setActiveTab('fixed-deposit')}
              className={`text-sm font-medium transition ${activeTab === 'fixed-deposit' ? 'text-gray-900 font-semibold' : 'text-gray-700 hover:text-gray-900'}`}
            >
              Fixed Deposit
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
