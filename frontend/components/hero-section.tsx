'use client';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="w-full">
        <div className="relative w-full">
          <img 
            alt="Loans for all your assets in rural India - Gold loans, property loans, and more" 
            className="w-full h-auto object-cover object-center" 
            src="/hero-banner.png"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              // Fallback to placeholder if hero-banner.png doesn't exist
              target.src = '/placeholder.jpg';
              target.alt = 'Hero banner placeholder';
            }}
            loading="eager"
            priority
            style={{
              display: 'block',
              maxHeight: '90vh',
              width: '100%',
            }}
          />
        </div>
      </div>
    </section>
  );
}
