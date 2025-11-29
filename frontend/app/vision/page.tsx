'use client';

import Link from 'next/link';
import Footer from '@/components/footer';

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Simple Header with Logo Only */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center min-h-[80px]">
            <Link href="/" className="flex items-center">
              <img
                src="/Container.png"
                alt="Yellow Metal"
                className="h-20 md:h-24 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.jpg';
                }}
              />
            </Link>
          </div>
        </div>
      </header>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Date */}
        <div className="text-center mb-4">
          <p className="text-gray-600">January 1, 2022</p>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Our Vision</h1>
          <p className="text-gray-600 text-lg">Author, Rahul Boggaram</p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none space-y-8">
          
          {/* Introduction */}
          <div className="space-y-6">
            <p className="text-gray-800 leading-relaxed text-lg">
              <span className="font-bold text-2xl">125 Crore (1.25 billion) Indians cannot borrow money.</span>
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Currently, Indians have the highest amount of gold in their homes, its worth approximately <strong>110 Lakh Crores ($1.4Trillion)</strong>. Over 70% of this gold is in rural India, where people struggle the most to borrow money. Yellow Metal was founded in 2020 with the purpose to transform the way people use their household gold. We are on a mission to monetise this gold mine for rural India to make their lives better. The first step in this direction is to enable rural India with a simple gold loan at their home in 30 mins.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Gold Loan is an industry dominated by aged players with no intention or reward to change. We want to revolutionize this industry. There are 3 big areas we will focus towards.
            </p>
          </div>

          {/* Building Awareness Section */}
          <div className="space-y-4 pt-8">
            <h2 className="text-3xl font-bold text-gray-900">Building Awareness</h2>
            <p className="text-gray-700 leading-relaxed">
              There are at least <strong>8 hidden charges</strong> on any gold loan from a bank or a financier. Processing Charges, Valuation Charges, Stamp Duties & 18 more. Leading gold loan company earns <strong>₹14,000 - ₹20,000 for every one lakh loan per year</strong> for the most secured loan in this whole freaking world!!!
            </p>
          </div>

          {/* Why does this anger us? */}
          <div className="space-y-4 pt-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              Why does this anger us?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Banks earn ₹3,000 - ₹9,000 for every one lakh on a high-risk loan. Risky because there are no assets that you hand over to the bank as security. For a gold loan, jewelry is handed over, and in most cases that will help recover the full value of a gold loan if the customers don't pay. Then why are the interest rates so high?
            </p>
            <p className="text-gray-700 leading-relaxed font-medium">
              It all leads to people's awareness. We will teach them the right things!
            </p>
          </div>

          {/* Access Section */}
          <div className="space-y-4 pt-8">
            <h2 className="text-3xl font-bold text-gray-900">Access</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>80 Crore Indians have mobile phones.</strong> Any products can be delivered to nook and corner of the country through the Internet. But an emergency need for money has to wait! Every bank and its branch does not have a gold loan facility. The national average has <strong>one gold loan branch per 40 sq km.</strong>
            </p>
          </div>

          {/* Affordability Section */}
          <div className="space-y-4 pt-8">
            <h2 className="text-3xl font-bold text-gray-900">Affordability</h2>
            <p className="text-gray-700 leading-relaxed">
              Gold loan is a close-knit industry. A large part of the organized market is controlled by a handful of brands. Banks have shown no interest in improving their services. Financiers have to run a branch that costs a lot. Unorganised lenders prey on consumers' emergency needs. All these reasons increase the total cost of the gold loans to the end consumer.
            </p>
          </div>

          {/* We will change them all! */}
          <div className="space-y-4 pt-8">
            <h2 className="text-3xl font-bold text-gray-900">We will change them all!</h2>
            <p className="text-gray-700 leading-relaxed">
              Listen to our back story and journey to starting up in our podcast
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>That One Idea</strong> hosted by Anjali Sosale from Waterbridge Ventures - <a href="#" className="text-blue-600 hover:underline">Click Here</a>
            </p>
          </div>

          {/* Our Office Section */}
          <div className="space-y-4 pt-8 border-t border-gray-200 mt-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Office</h2>
            <div className="space-y-3 text-gray-700">
              <p className="font-semibold text-lg">Yellow Fintech Pvt Ltd</p>
              <p>#677, 27th main, 13th cross, sector 1, HSR Layout, Bangalore 560102</p>
              <div className="space-y-2 pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl text-red-600">📞</span>
                  <a href="tel:9090976076" className="text-gray-700 hover:text-gray-900">90909 76076</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl text-red-600">✉️</span>
                  <a href="mailto:contact@yellowmetal.co" className="text-gray-700 hover:text-gray-900">contact@yellowmetal.co</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}

