import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { mainSiteDomain } from "../config/environment";

// Use public folder path for logo in Next.js
const logoImage = '/loan-assets/da124a0c074b8c023228740c8aa4a81fd9689824.png';

export function MinimalHeader() {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const scrollToApplication = () => {
    document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container-custom">
        <div className="flex items-center justify-between h-32 px-12">
          {/* Logo with link to main site */}
          <div className="flex items-center justify-center h-full">
            <a 
              href={mainSiteDomain}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105 relative"
            >
              <img 
                src={logoImage} 
                alt="Yellow Metal Logo" 
                className="h-24 w-auto object-contain drop-shadow-lg"
              />
              
              {/* Animated Gold Sparkles */}
              <div className="absolute pointer-events-none" style={{ top: '2px', right: '2px' }}>
                {/* Sparkle 1 - Small */}
                <div 
                  className="absolute w-2 h-2"
                  style={{
                    animation: 'sparkleFloat1 2.5s ease-out infinite',
                    top: '0px',
                    right: '0px'
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path
                      d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z"
                      fill="url(#sparkle-gold-1)"
                      className="drop-shadow-sm"
                    />
                    <defs>
                      <linearGradient id="sparkle-gold-1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFD700" />
                        <stop offset="50%" stopColor="#FFA500" />
                        <stop offset="100%" stopColor="#FF8C00" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                {/* Sparkle 2 - Tiny */}
                <div 
                  className="absolute w-1.5 h-1.5"
                  style={{
                    animation: 'sparkleFloat2 2.8s ease-out 0.4s infinite',
                    top: '8px',
                    right: '-10px'
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path
                      d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z"
                      fill="url(#sparkle-gold-2)"
                    />
                    <defs>
                      <linearGradient id="sparkle-gold-2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFD700" />
                        <stop offset="50%" stopColor="#FFA500" />
                        <stop offset="100%" stopColor="#FF8C00" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                {/* Sparkle 3 - Small */}
                <div 
                  className="absolute w-2 h-2"
                  style={{
                    animation: 'sparkleFloat3 3s ease-out 0.8s infinite',
                    top: '-10px',
                    right: '15px'
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path
                      d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z"
                      fill="url(#sparkle-gold-3)"
                      className="drop-shadow-sm"
                    />
                    <defs>
                      <linearGradient id="sparkle-gold-3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFD700" />
                        <stop offset="50%" stopColor="#FFA500" />
                        <stop offset="100%" stopColor="#FF8C00" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Sparkle 4 - Tiny */}
                <div 
                  className="absolute w-1.5 h-1.5"
                  style={{
                    animation: 'sparkleFloat4 2.6s ease-out 1.2s infinite',
                    top: '5px',
                    right: '20px'
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path
                      d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z"
                      fill="url(#sparkle-gold-4)"
                    />
                    <defs>
                      <linearGradient id="sparkle-gold-4" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFD700" />
                        <stop offset="50%" stopColor="#FFA500" />
                        <stop offset="100%" stopColor="#FF8C00" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Sparkle 5 - Small */}
                <div 
                  className="absolute w-2 h-2"
                  style={{
                    animation: 'sparkleFloat5 2.9s ease-out 1.6s infinite',
                    top: '-5px',
                    right: '-5px'
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path
                      d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z"
                      fill="url(#sparkle-gold-5)"
                      className="drop-shadow-sm"
                    />
                    <defs>
                      <linearGradient id="sparkle-gold-5" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFD700" />
                        <stop offset="50%" stopColor="#FFA500" />
                        <stop offset="100%" stopColor="#FF8C00" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Sparkle 6 - Extra Tiny */}
                <div 
                  className="absolute w-1.5 h-1.5"
                  style={{
                    animation: 'sparkleFloat6 2.4s ease-out 2s infinite',
                    top: '12px',
                    right: '8px'
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path
                      d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z"
                      fill="url(#sparkle-gold-6)"
                    />
                    <defs>
                      <linearGradient id="sparkle-gold-6" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFD700" />
                        <stop offset="50%" stopColor="#FFA500" />
                        <stop offset="100%" stopColor="#FF8C00" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-6">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-foreground hover:text-foreground transition-colors rounded-xl hover:bg-white/10 backdrop-blur-sm border border-white/20 group"
              >
                <span>{currentLanguage?.flag}</span>
                <span className="hidden sm:inline">{currentLanguage?.name}</span>
                <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>

              {isLanguageMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-card/95 backdrop-blur-md border border-border rounded-xl shadow-xl py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as 'en' | 'kn' | 'te');
                        setIsLanguageMenuOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-sm hover:bg-secondary/50 transition-colors flex items-center space-x-3 group rounded-lg mx-1 ${
                        language === lang.code ? 'bg-secondary/50 font-medium' : ''
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                      {language === lang.code && (
                        <div className="ml-auto w-2 h-2 rounded-full status-indicator"></div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Apply Now Button */}
            <Button
              onClick={scrollToApplication}
              className="btn-primary shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
            >
              {t('header.apply-now')}
            </Button>
          </div>
        </div>
      </div>

      {/* Click outside to close language menu */}
      {isLanguageMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLanguageMenuOpen(false)}
        />
      )}
    </header>
  );
}