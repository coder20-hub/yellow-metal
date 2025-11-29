import { Button } from "./ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { mainSiteDomain, appUrl } from "../config/environment";

interface CrossSiteNavigationProps {
  showBackToMain?: boolean;
  className?: string;
}

export function CrossSiteNavigation({ 
  showBackToMain = false, 
  className = "" 
}: CrossSiteNavigationProps) {
  const mainSiteUrl = mainSiteDomain;
  const appSiteUrl = appUrl;

  const handleNavigateToMain = () => {
    window.open(mainSiteUrl, '_blank', 'noopener,noreferrer');
  };

  const handleNavigateToSection = (section: string) => {
    if (window.location.hostname.includes('app.')) {
      // Already on app subdomain, scroll to section
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to app subdomain with section
      window.open(`${appSiteUrl}#${section}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {showBackToMain && (
        <Button
          variant="outline"
          onClick={handleNavigateToMain}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Main Site
        </Button>
      )}
      
      {/* Quick navigation to app sections */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleNavigateToSection('calculator')}
          className="text-sm"
        >
          Calculator
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleNavigateToSection('application')}
          className="text-sm"
        >
          Apply Now
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleNavigateToSection('how-it-works')}
          className="text-sm"
        >
          How It Works
        </Button>
      </div>

      {/* External link indicator for cross-domain navigation */}
      {!window.location.hostname.includes('app.') && (
        <ExternalLink className="w-3 h-3 text-muted-foreground ml-1" />
      )}
    </div>
  );
}