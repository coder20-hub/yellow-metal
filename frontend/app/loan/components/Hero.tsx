import { Button } from "./ui/button";
import { ArrowRight, Shield, Zap, Clock, Star, Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Use public folder paths for images in Next.js
const image_f6176e935d277229becc55033e75185fcd01783f = '/loan-assets/f6176e935d277229becc55033e75185fcd01783f.png';
const image_42e90d3b248fa1a196ccaab27084b6259874ed93 = '/loan-assets/42e90d3b248fa1a196ccaab27084b6259874ed93.png';
const image_4d94e7b5b4498e3f28fb0605e4cd62b31918e3ad = '/loan-assets/4d94e7b5b4498e3f28fb0605e4cd62b31918e3ad.png';
const image_dda93ea931a3583394aee4bee3a6fe2674ac5171 = '/loan-assets/dda93ea931a3583394aee4bee3a6fe2674ac5171.png';
const traditionalBangle = '/loan-assets/1fb3c1576e24931b905039038514e24995c20e6c.png';
const goldOrnament = '/loan-assets/614198e351b64b31c5db1b73d69cf45df0b3726c.png';

export function Hero() {
  const { t, language } = useLanguage();

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToApplication = () => {
    document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative hero-section-optimized bg-white overflow-hidden flex items-center justify-center">

      <div className="relative w-full h-full flex items-center justify-center px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center text-center justify-center relative w-full max-w-7xl mx-auto">
          {/* Centered Content */}
          <div className="space-y-8 animate-fade-in-up w-full mx-auto text-center mt-[100px]">


            {/* Headline */}
            <div className="space-y-6 text-center">
              <h1 className={`font-normal text-center hero-headline hero-headline-${language}`}>
                <span className="hero-line-1">{t('hero.title-highlight')}</span>
                <br />
                <span className="hero-line-2">{t('hero.title-suffix')}</span>
                <br />
                <span className="hero-line-3">{t('hero.title-audience')}</span>
              </h1>
              

            </div>



            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-6 max-w-2xl mx-auto mt-12">
              <div className="flex items-center gap-2 group">
                <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                  <Shield className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{t('hero.secure-process')}</span>
              </div>
              <div className="flex items-center gap-2 group">


              </div>
              <div className="flex items-center gap-2 group">
                <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                  <Clock className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{t('contact.available-24x7')}</span>
              </div>
            </div>


          </div>

          {/* Floating Jewelry Elements - Positioned around centered content */}
          {/* Traditional Bangle - Top Right */}
          <div className="absolute top-[40px] right-[210px] lg:right-[250px] w-48 h-48 animate-float scale-[0.6]">
            <img
              src={traditionalBangle}
              alt="Traditional Indian Gold Bangle"
              className="w-full h-full object-contain rotate-[30deg] hover:scale-105 transition-transform duration-300"
            />
          </div>





          {/* Traditional Ring - Bottom Right */}
          <div className="absolute bottom-[150px] right-[775px] lg:right-[815px] w-50 h-50 animate-float rotate-[30deg]" style={{ animationDelay: '-3s' }}>
            <ImageWithFallback
              src={image_dda93ea931a3583394aee4bee3a6fe2674ac5171}
              alt="Indian Gold Ring"
              className="w-[70%] h-[70%] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Gold Chain - Mid Left */}
          <div className="absolute top-[140px] left-[75px] lg:left-[115px] w-84 h-84 animate-float scale-[0.45] rotate-[-30deg]">
            <ImageWithFallback
              src={image_f6176e935d277229becc55033e75185fcd01783f}
              alt="Indian Gold Chain"
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 rotate-[60deg]"
            />
          </div>




        </div>
      </div>
      

    </section>
  );
}