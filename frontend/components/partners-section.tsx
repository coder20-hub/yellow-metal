'use client';

import { useGoldRatesMain } from '@/hooks/useGoldRatesMain';

export default function PartnersSection() {
  const { rates, loading } = useGoldRatesMain();

  const formatPrice = (price: number) => {
    if (!price || price === 0) return 'Loading...';
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0,
    }).format(price);
  };

  const goldRate24k = rates.rate24k || 0;
  const silverRate = rates.silver999 || 0;

  return (
    <section className="w-full bg-white">
      <div className="w-full bg-gray-50 py-4 overflow-hidden border-b border-gray-200">
        <div className="animate-scroll flex gap-12 whitespace-nowrap">
          <span className="text-sm md:text-base text-gray-600">ಅಂದಿನ ಚಿನ್ನದ ದರ ₹{formatPrice(goldRate24k)}*</span>
          <span className="text-sm md:text-base text-amber-600 font-semibold">Today's Gold Rate (24k) ₹{formatPrice(goldRate24k)}*</span>
          <span className="text-sm md:text-base text-gray-500">Today's Silver Rate (999) ₹{formatPrice(silverRate)}*</span>
          <span className="text-sm md:text-base text-amber-600 font-semibold">నేటి బంగారం ధర ₹{formatPrice(goldRate24k)}*</span>
          <span className="text-sm md:text-base text-gray-500">आज का सोने की दर ₹{formatPrice(goldRate24k)}*</span>
          
          {/* Duplicate for seamless loop */}
          <span className="text-sm md:text-base text-gray-600">ಅಂದಿನ ಚಿನ್ನದ ದರ ₹{formatPrice(goldRate24k)}*</span>
          <span className="text-sm md:text-base text-amber-600 font-semibold">Today's Gold Rate (24k) ₹{formatPrice(goldRate24k)}*</span>
          <span className="text-sm md:text-base text-gray-500">Today's Silver Rate (999) ₹{formatPrice(silverRate)}*</span>
          <span className="text-sm md:text-base text-amber-600 font-semibold">నేటి బంగారం ధర ₹{formatPrice(goldRate24k)}*</span>
          <span className="text-sm md:text-base text-gray-500">आज का सोने की दर ₹{formatPrice(goldRate24k)}*</span>
        </div>
      </div>

      <div className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <img
            src="/Logo cloud.png"
            alt="Banking Partners"
            className="w-full h-auto object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.jpg';
            }}
          />
        </div>
      </div>

      <div className="w-full bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* Image 1 */}
            <div className="flex-shrink-0 w-[60vw] md:w-[28vw] lg:w-[24vw] h-[350px] md:h-[380px] bg-white rounded-[24px] border border-gray-200 shadow-sm overflow-hidden">
              <img
                src="/image1.png"
                alt="Feature 1"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.jpg';
                }}
              />
            </div>
            
            {/* Image 2 */}
            <div className="flex-shrink-0 w-[60vw] md:w-[28vw] lg:w-[24vw] h-[350px] md:h-[380px] bg-white rounded-[24px] border border-gray-200 shadow-sm overflow-hidden">
              <img
                src="/image2.png"
                alt="Feature 2"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.jpg';
                }}
              />
            </div>
            
            {/* Image 3 */}
            <div className="flex-shrink-0 w-[60vw] md:w-[28vw] lg:w-[24vw] h-[350px] md:h-[380px] bg-white rounded-[24px] border border-gray-200 shadow-sm overflow-hidden">
              <img
                src="/image3.png"
                alt="Feature 3"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.jpg';
                }}
              />
            </div>
            
            {/* Image 4 */}
            <div className="flex-shrink-0 w-[60vw] md:w-[28vw] lg:w-[24vw] h-[350px] md:h-[380px] bg-white rounded-[24px] border border-gray-200 shadow-sm overflow-hidden">
              <img
                src="/image4.png"
                alt="Feature 4"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
