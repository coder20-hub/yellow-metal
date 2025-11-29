import { useLanguage } from "../contexts/LanguageContext";

export function Trust() {
  const { t } = useLanguage();



  return (
    <section className="pt-8 pb-32 px-6 lg:px-8 bg-white trust-section-optimized">
      <div className="container-custom">
        {/* Trusted By Stats Section */}
        <div className="text-center animate-fade-in-up">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full px-12 py-8">

            <div className="flex flex-col sm:flex-row items-center gap-8 lg:gap-12 relative z-10">
              <div className="text-lg font-bold text-center">
                <span className="text-2xl font-medium text-foreground text-[64px] px-[36px] py-[0px] mx-[10px] my-[0px] tracking-[-0.02em]">50,000</span> <span className="text-muted-foreground text-[16px] font-normal">{t('hero.customers')}</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-border"></div>
              <div className="text-lg font-bold text-center">
                <span className="text-2xl font-medium text-foreground text-[64px] px-[36px] py-[0px] tracking-[-0.02em] whitespace-nowrap">₹800 Cr</span> <span className="text-muted-foreground text-[16px] font-normal">disbursed</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-border"></div>
              <div className="text-lg font-bold text-center">
                <span className="text-2xl font-medium text-foreground text-[64px] px-[36px] py-[0px] tracking-[-0.02em] whitespace-nowrap">1200</span> <span className="text-muted-foreground text-[16px] font-normal whitespace-nowrap">{t('hero.villages-served')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="mb-6 text-[16px] font-normanot-l not-italic no-underline font-normal">
            "You money needs and your jewels are our responsibility. Everyone around you have trusted us."
          </h2>
        </div>
      </div>
    </section>
  );
}