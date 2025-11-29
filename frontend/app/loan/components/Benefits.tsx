
import { useLanguage } from "../contexts/LanguageContext";

export function Benefits() {
  const { t } = useLanguage();



  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-[24px] font-normanot-l italic no-underline font-normal">
            "You money needs and your jewels are our responsibility. Everyone around you have trusted us."
          </h2>

        </div>



        {/* Trusted By Stats Section */}
        <div className="text-center animate-fade-in-up">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full px-12 py-8">

            <div className="flex flex-col sm:flex-row items-center gap-8 lg:gap-12 relative z-10">
              <div className="text-lg font-bold text-center">
                <span className="text-2xl font-normal text-foreground text-[96px] px-[36px] py-[0px] mx-[10px] my-[0px] tracking-[-0.02em]">50,000</span> <span className="text-muted-foreground text-[24px] font-normal">{t('hero.customers')}</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-border"></div>
              <div className="text-lg font-bold text-center">
                <span className="text-2xl font-normal text-foreground text-[96px] px-[36px] py-[0px] tracking-[-0.02em] whitespace-nowrap">₹800 Cr</span> <span className="text-muted-foreground text-[24px] font-normal">disbursed</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-border"></div>
              <div className="text-lg font-bold text-center">
                <span className="text-2xl font-normal text-foreground text-[96px] px-[36px] py-[0px] tracking-[-0.02em]">1200</span> <span className="text-muted-foreground text-[24px] text-[20px] font-normal">{t('hero.villages-served')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}