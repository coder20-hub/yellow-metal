export default function LoansForAllSection() {
  return (
    <section className="w-full bg-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative flex flex-col items-center justify-center min-h-[500px]">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-full flex items-center justify-center text-6xl">
              🪡
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-center text-black leading-tight max-w-4xl">
            Loans for
            <br />
            all your assets
            <br />
            in rural India
          </h1>

          <div className="absolute right-0 top-1/4 hidden lg:block">
            <div className="w-40 h-40 bg-yellow-100 rounded-lg flex items-center justify-center text-6xl">
              🏍️
            </div>
          </div>

          <div className="absolute right-12 bottom-12 hidden lg:block">
            <div className="w-32 h-32 bg-amber-100 rounded-lg flex items-center justify-center text-5xl">
              🏠
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
