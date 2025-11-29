'use client';

import { useEffect } from 'react';

export default function VisitorTracker() {
  useEffect(() => {
    // Track page view
    const trackPageView = () => {
      // Add your analytics tracking code here
      // For example: Google Analytics, Plausible, etc.
      
      // Example: Google Analytics 4
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
          page_path: window.location.pathname,
        });
      }

      // Example: Plausible Analytics
      if (typeof window !== 'undefined' && (window as any).plausible) {
        (window as any).plausible('pageview');
      }

      // You can also send to a custom API endpoint
      // fetch('/api/analytics', { method: 'POST', ... });
    };

    trackPageView();
  }, []);

  // This component doesn't render anything visible
  return null;
}

