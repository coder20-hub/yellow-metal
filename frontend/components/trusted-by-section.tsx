'use client';

export default function TrustedBySection() {
  return (
    <section 
      className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('/31ed6c77ebcce4798cb1d868c7f424777d00655c.webp')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/35"></div>
      
      <div className="relative z-10 text-center text-white max-w-3xl px-4 py-20">
        <h2 className="text-4xl md:text-6xl font-light mb-6 text-white drop-shadow-lg">
          Trusted by 30,000 people
        </h2>
        <p className="text-lg md:text-2xl font-light text-white drop-shadow-lg">
          across Andra Pradesh & Karnataka
        </p>
      </div>
    </section>
  );
}
