import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface Section {
  id: string;
  label: string;
  icon?: string;
}

const sections: Section[] = [
  { id: 'hero', label: 'Home', icon: '🏠' },
  { id: 'trust', label: 'Trust', icon: '✨' },
  { id: 'calculator', label: 'Calculator', icon: '🧮' },
  { id: 'how-it-works', label: 'How It Works', icon: '⚡' },
  { id: 'application', label: 'Apply Now', icon: '📋' },
  { id: 'testimonials', label: 'Reviews', icon: '💬' },
  { id: 'contact', label: 'Contact', icon: '📞' },
];

export function SectionNavigator() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Show navigator after scrolling past hero section
      const shouldShow = window.scrollY > window.innerHeight * 0.3;
      
      if (shouldShow) {
        setIsScrolling(true);
        setIsVisible(true);
        
        // Clear existing timeout
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
        
        // Hide navigator after scrolling stops (300ms delay)
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
          setIsVisible(false);
        }, 300);
      } else {
        setIsVisible(false);
        setIsScrolling(false);
      }
    };

    const observerOptions = {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div 
      className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
      }`}
    >
      <div className="bg-card/95 backdrop-blur-md border border-border rounded-2xl shadow-xl p-2 max-w-[200px]">
        {/* Header */}
        <div className="px-3 py-2 border-b border-border mb-1">
          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Navigate
          </div>
        </div>

        {/* Section List */}
        <div className="space-y-1">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left
                  transition-all duration-200 group relative overflow-hidden
                  ${isActive 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'hover:bg-secondary text-muted-foreground hover:text-foreground'
                  }
                `}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute inset-0 gradient-animated opacity-10 rounded-lg"></div>
                )}
                
                {/* Icon */}
                <span className="text-sm flex-shrink-0 relative z-10">
                  {section.icon}
                </span>
                
                {/* Label */}
                <span className="text-sm font-medium truncate relative z-10">
                  {section.label}
                </span>
                
                {/* Arrow indicator for active */}
                {isActive && (
                  <ChevronRight className="w-3 h-3 ml-auto flex-shrink-0 relative z-10" />
                )}
                
                {/* Hover effect */}
                {!isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Footer - Progress indicator */}
        <div className="px-3 py-2 border-t border-border mt-1">
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full gradient-animated transition-all duration-500"
                style={{ 
                  width: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%` 
                }}
              ></div>
            </div>
            <span className="text-xs text-muted-foreground font-medium">
              {sections.findIndex(s => s.id === activeSection) + 1}/{sections.length}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile hint */}
      <div className={`mt-3 text-center transition-opacity duration-300 ${
        isScrolling ? 'opacity-100' : 'opacity-50'
      }`}>
        <div className="inline-flex items-center gap-1 px-2 py-1 bg-background/80 backdrop-blur-sm 
                        border border-border rounded-full text-xs text-muted-foreground">
          <div className={`w-1 h-1 bg-gradient-animated rounded-full ${
            isScrolling ? 'animate-pulse' : 'animate-none'
          }`}></div>
          Quick Nav
        </div>
      </div>
    </div>
  );
}