'use client';

import React, { useRef, useState } from 'react';

const images = [
  {
    src: '/house-building-rural.jpg',
    alt: 'Business growth scene',
  },
  {
    src: '/motorcycle-bike-rural.jpg',
    alt: 'Business growth scene',
  },
  {
    src: '/gold-chain-necklace.jpg',
    alt: 'Business growth scene',
  },
  {
    src: '/dairy-milk-gold-loan.jpg',
    alt: 'Dairy cooperative and milk collection facility - gold loan for dairy business',
  },
  {
    src: '/flower-shop-gold-loan.jpg',
    alt: 'Flower market and flower shop business - gold loan for flower trading',
  },
  {
    src: '/farmer-gold-loan.jpg',
    alt: 'Agricultural and farming business - gold loan for farmers',
  },
  {
    src: '/vegetable-shop-gold-loan.jpg',
    alt: 'Aquaculture and fish farming business - gold loan for fish farmers',
  },
];

export default function SixHundredCroresSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (scrollContainerRef.current) {
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-3 text-gray-900">
          600 crores & growing
        </h2>
        <p className="text-center text-gray-600 text-base md:text-lg mb-8 md:mb-12">
          Loans for all types of business growth
        </p>

        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="flex gap-4 md:gap-6 overflow-x-auto cursor-grab active:cursor-grabbing pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw] aspect-[4/3] rounded-[24px] overflow-hidden shadow-md"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover select-none pointer-events-none"
                draggable={false}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.jpg';
                }}
              />
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-xs md:text-sm mt-6 md:mt-8 max-w-3xl mx-auto leading-relaxed">
          Above Images are AI generated. All the loan scenarios are real examples, borrowing customers like to keep their identity private.
        </p>
      </div>
    </section>
  );
}
