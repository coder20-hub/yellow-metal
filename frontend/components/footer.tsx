'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-16">
          {/* Column 1 - Company Info & Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-2 tracking-wider text-white">YELLOW METAL</h3>
            <p className="text-sm text-white mb-1">ಯಲ್ಲೋ ಮೆಟಲ್</p>
            <p className="text-sm text-white mb-6">యెల్లో మెటల్</p>
            <div className="flex gap-4">
              {/* Instagram Icon */}
              <Link href="#" className="text-white hover:text-gray-300 transition w-6 h-6">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </Link>
              {/* LinkedIn Icon */}
              <Link href="#" className="text-white hover:text-gray-300 transition w-6 h-6">
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor"/>
                  <text x="12" y="16" fontSize="12" fill="black" fontWeight="bold" textAnchor="middle" fontFamily="Arial, sans-serif">in</text>
                </svg>
              </Link>
              {/* X (Twitter) Icon */}
              <Link href="#" className="text-white hover:text-gray-300 transition w-6 h-6">
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2 - Products */}
          <div>
            <h4 className="text-base font-normal mb-4 text-gray-400">Products</h4>
            <ul className="space-y-3">
              <li><Link href="/loan" className="text-white hover:text-gray-300 text-sm transition">Gold Loan</Link></li>
              <li><Link href="/loan" className="text-white hover:text-gray-300 text-sm transition">Loan Against Property</Link></li>
              <li><Link href="/loan" className="text-white hover:text-gray-300 text-sm transition">Fixed Deposits</Link></li>
            </ul>
          </div>

          {/* Column 3 - Learn more */}
          <div>
            <h4 className="text-base font-normal mb-4 text-gray-400">Learn more</h4>
            <ul className="space-y-3">
              <li><Link href="/vision" className="text-white hover:text-gray-300 text-sm underline transition">Our Vision</Link></li>
              <li><Link href="/loan#contact" className="text-white hover:text-gray-300 text-sm transition">Blogs</Link></li>
              <li><Link href="/loan#testimonials" className="text-white hover:text-gray-300 text-sm transition">Customer Stories</Link></li>
            </ul>
          </div>

          {/* Column 4 - Support */}
          <div>
            <h4 className="text-base font-normal mb-4 text-gray-400">Support</h4>
            <ul className="space-y-3">
              <li><Link href="/loan#contact" className="text-white hover:text-gray-300 text-sm transition">Contact</Link></li>
              <li><Link href="/privacy" className="text-white hover:text-gray-300 text-sm underline transition">Privacy</Link></li>
              <li><Link href="/crm" className="text-white hover:text-gray-300 text-sm transition">CRM</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
