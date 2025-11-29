import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import PartnersSection from '@/components/partners-section';
import NoHiddenChargesSection from '@/components/no-hidden-charges';
import SixHundredCroresSection from '@/components/six-hundred-crores';
import TrustedBySection from '@/components/trusted-by-section';
import MobileAppSection from '@/components/mobile-app-section';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Yellow Metal - Loans for All Your Assets in Rural India',
  description: 'Get gold loans, property loans, and fixed deposits with transparent rates and no hidden charges',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-[80px]">
      <Navigation />
      <HeroSection />
      <PartnersSection />
      <NoHiddenChargesSection />
      <SixHundredCroresSection />
      <TrustedBySection />
      <MobileAppSection />
      <Footer />
    </main>
  );
}
