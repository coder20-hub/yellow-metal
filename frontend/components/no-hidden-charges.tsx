'use client';

import { useState, useEffect, useRef } from 'react';

export default function NoHiddenChargesSection() {
  const [activeTab, setActiveTab] = useState('gold-loan');
  const originalText = 'No Hidden Charges';
  const startPlaceholder = 'xxxxxxx';
  const [revealedText, setRevealedText] = useState(startPlaceholder);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1)
      // Text starts revealing when section enters viewport
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight * 0.6)));
      
      // Calculate how many characters to reveal
      const charsToReveal = Math.floor(scrollProgress * originalText.length);
      
      if (charsToReveal === 0) {
        setRevealedText(startPlaceholder);
      } else if (charsToReveal >= originalText.length) {
        setRevealedText(originalText);
      } else {
        // Start with xxxxxxx, then gradually reveal characters
        if (charsToReveal <= startPlaceholder.length) {
          // Replace x's one by one
          const revealed = originalText.substring(0, charsToReveal);
          const remainingX = 'x'.repeat(startPlaceholder.length - charsToReveal);
          setRevealedText(revealed + remainingX);
        } else {
          // All x's are replaced, now add remaining characters
          setRevealedText(originalText.substring(0, charsToReveal));
        }
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-light text-center mb-20 text-gray-900 transition-all duration-300">
          {revealedText}
        </h2>
        
       

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="bg-white rounded-3x4 p-10 border border-gray-200 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-8 text-gray-900">Passbook</h3>
            
            <div className="space-y-6">
              <div className="border-b pb-6">
                <div className="flex justify-between mb-3">
                  <p className="font-medium text-gray-900">Interest Payment</p>
                  <p className="font-bold text-gray-900">₹3,496.50</p>
                </div>
                <p className="text-sm text-gray-500 mb-2">Apr 21, 11:55pm • UPI</p>
                <div className="flex gap-2 text-sm">
                  <p className="text-gray-600">Penalty Interest Charged?</p>
                  
                </div>
              </div>

              <div className="border-b pb-6">
                <div className="flex justify-between mb-3">
                  <p className="font-medium text-gray-900">Interest Payment</p>
                  <p className="font-bold text-gray-900">₹2,615</p>
                </div>
                <p className="text-sm text-gray-500">Mar 15, 11:55pm • UPI</p>
                
              </div>

              <div className="border-b pb-6">
                <div className="flex justify-between mb-3">
                  <p className="font-medium text-gray-900">Interest Payment</p>
                  <p className="font-bold text-gray-900">₹2,615</p>
                </div>
                <p className="text-sm text-gray-500">Feb 14, 08:15pm • UPI</p>
               
              </div>

              <div className="border-b pb-6">
                <div className="flex justify-between mb-3">
                  <p className="font-medium text-gray-900">Loan Disbursed</p>
                  <p className="font-bold text-gray-900">₹2,09,500</p>
                </div>
                <p className="text-sm text-gray-500">Jan 15, 12:45pm • Net Banking</p>
                
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <p className="font-medium text-gray-900">New Loan Stamp Duty</p>
                  <p className="font-bold text-gray-900">₹500</p>
                </div>
                <p className="text-sm text-gray-500">Jan 15, 12:45pm • Net Banking</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-8 text-gray-900">Loan Details</h3>
            
            <div className="space-y-6">
              <div className="flex justify-between items-start pb-6 border-b">
                <div>
                  <p className="text-sm text-gray-600">YM-CMY67004</p>
                  <p className="text-xs text-gray-500 mt-1">Loan ID</p>
                </div>
               
              </div>

              <div className="pb-6 border-b">
                <h4 className="text-sm font-bold text-gray-900 mb-4">Monthly Plan</h4>
                <div className="flex justify-between mb-3">
                  <span className="text-gray-600 text-sm">Plan Type</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-bold text-gray-900">₹2,10,000</span>
                  <span className="text-gray-600 text-sm">6 months</span>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Principle Due</span>
                  <span>Loan Tenure</span>
                </div>
              </div>

              <div className="pb-6 border-b">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-900">15 Jan 2024</span>
                  <span className="text-gray-900">12 Jun 2025</span>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Start Date</span>
                  <span>Closing Date</span>
                </div>
              </div>

              <div className="pb-6 border-b">
                <h4 className="font-bold text-gray-900 mb-4 text-sm">INTEREST CALCULATION</h4>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 text-gray-900">0 - 30 Days</td>
                      <td className="text-right text-gray-900">1.15%</td>
                      <td className="text-right text-gray-900">₹2,615</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-900">31 - 60 Days</td>
                      <td className="text-right text-gray-900">1.35%</td>
                      <td className="text-right text-gray-900">₹2,835</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-900">61 - 180 Days</td>
                      <td className="text-right text-gray-900">1.55%</td>
                      <td className="text-right text-gray-900">₹3,255</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
