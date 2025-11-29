import { useState } from 'react';
import { Card } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { CheckCircle, Circle, AlertCircle, ExternalLink } from 'lucide-react';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  category: 'setup' | 'config' | 'deploy' | 'verify';
  required: boolean;
  link?: string;
}

const checklistItems: ChecklistItem[] = [
  // Setup Phase
  {
    id: 'repo-ready',
    title: 'Repository Committed',
    description: 'All changes committed and pushed to main branch',
    category: 'setup',
    required: true
  },
  {
    id: 'vercel-account',
    title: 'Vercel Account Ready',
    description: 'Vercel account connected to repository',
    category: 'setup',
    required: true,
    link: 'https://vercel.com/dashboard'
  },
  {
    id: 'domain-owned',
    title: 'Domain Ownership',
    description: 'yellowmetal.co domain owned and accessible',
    category: 'setup',
    required: true
  },

  // Configuration Phase
  {
    id: 'env-vars',
    title: 'Environment Variables',
    description: 'All production environment variables configured in Vercel',
    category: 'config',
    required: true
  },
  {
    id: 'build-settings',
    title: 'Build Configuration',
    description: 'Vite build settings configured in Vercel project',
    category: 'config',
    required: true
  },
  {
    id: 'vercel-json',
    title: 'Vercel Config File',
    description: 'vercel.json properly configured for routing',
    category: 'config',
    required: true
  },

  // Deployment Phase
  {
    id: 'domain-added',
    title: 'Subdomain Added',
    description: 'app.yellowmetal.co added to Vercel project domains',
    category: 'deploy',
    required: true
  },
  {
    id: 'dns-configured',
    title: 'DNS Configuration',
    description: 'CNAME or A records configured for subdomain',
    category: 'deploy',
    required: true
  },
  {
    id: 'deployment-triggered',
    title: 'Deployment Triggered',
    description: 'Production deployment initiated in Vercel',
    category: 'deploy',
    required: true
  },

  // Verification Phase
  {
    id: 'ssl-active',
    title: 'SSL Certificate',
    description: 'HTTPS working with valid SSL certificate',
    category: 'verify',
    required: true,
    link: 'https://app.yellowmetal.co'
  },
  {
    id: 'site-loading',
    title: 'Site Loading',
    description: 'Main application loads correctly',
    category: 'verify',
    required: true,
    link: 'https://app.yellowmetal.co'
  },
  {
    id: 'admin-access',
    title: 'Admin Panel Access',
    description: 'Admin panel accessible and working',
    category: 'verify',
    required: true,
    link: 'https://app.yellowmetal.co?admin=true'
  },
  {
    id: 'api-working',
    title: 'API Endpoints',
    description: 'All API endpoints responding correctly',
    category: 'verify',
    required: true
  },
  {
    id: 'mobile-responsive',
    title: 'Mobile Responsive',
    description: 'Site works properly on mobile devices',
    category: 'verify',
    required: false
  },
  {
    id: 'performance-check',
    title: 'Performance Optimized',
    description: 'Good PageSpeed Insights scores',
    category: 'verify',
    required: false,
    link: 'https://pagespeed.web.dev/'
  }
];

const categoryLabels = {
  setup: 'Setup',
  config: 'Configuration', 
  deploy: 'Deployment',
  verify: 'Verification'
};

const categoryColors = {
  setup: 'bg-blue-100 text-blue-800',
  config: 'bg-yellow-100 text-yellow-800',
  deploy: 'bg-purple-100 text-purple-800',
  verify: 'bg-green-100 text-green-800'
};

export function DeploymentChecklist() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const handleItemCheck = (itemId: string, checked: boolean) => {
    const newCheckedItems = new Set(checkedItems);
    if (checked) {
      newCheckedItems.add(itemId);
    } else {
      newCheckedItems.delete(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const getProgress = () => {
    const requiredItems = checklistItems.filter(item => item.required);
    const completedRequired = requiredItems.filter(item => checkedItems.has(item.id));
    return {
      completed: completedRequired.length,
      total: requiredItems.length,
      percentage: Math.round((completedRequired.length / requiredItems.length) * 100)
    };
  };

  const progress = getProgress();
  const groupedItems = checklistItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, ChecklistItem[]>);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Subdomain Deployment Checklist</h1>
        <p className="text-muted-foreground">
          Track your progress deploying to app.yellowmetal.co
        </p>
        
        {/* Progress Summary */}
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Overall Progress</span>
              <Badge variant={progress.percentage === 100 ? 'default' : 'secondary'}>
                {progress.completed}/{progress.total} Required Tasks
              </Badge>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress.percentage}%` }}
              />
            </div>
            
            <div className="text-center">
              <span className="text-2xl font-bold text-green-600">{progress.percentage}%</span>
              <span className="text-muted-foreground ml-2">Complete</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Checklist Items by Category */}
      <div className="space-y-8">
        {Object.entries(groupedItems).map(([category, items]) => (
          <Card key={category} className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Badge className={categoryColors[category as keyof typeof categoryColors]}>
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {items.filter(item => checkedItems.has(item.id)).length}/{items.length} completed
                </span>
              </div>
              
              <div className="space-y-3">
                {items.map((item) => {
                  const isChecked = checkedItems.has(item.id);
                  return (
                    <div key={item.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <Checkbox
                        id={item.id}
                        checked={isChecked}
                        onCheckedChange={(checked) => handleItemCheck(item.id, checked as boolean)}
                        className="mt-1"
                      />
                      
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center space-x-2">
                          <label 
                            htmlFor={item.id}
                            className={`font-medium cursor-pointer ${isChecked ? 'line-through text-muted-foreground' : ''}`}
                          >
                            {item.title}
                          </label>
                          {item.required && (
                            <Badge variant="outline" className="text-xs">Required</Badge>
                          )}
                          {item.link && (
                            <a 
                              href={item.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <p className={`text-sm ${isChecked ? 'line-through text-muted-foreground' : 'text-muted-foreground'}`}>
                          {item.description}
                        </p>
                      </div>
                      
                      <div className="mt-1">
                        {isChecked ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : item.required ? (
                          <AlertCircle className="w-5 h-5 text-orange-500" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Links */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Quick Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <a 
            href="https://vercel.com/dashboard" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Vercel Dashboard</span>
          </a>
          <a 
            href="https://app.yellowmetal.co" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Your Deployed App</span>
          </a>
          <a 
            href="https://pagespeed.web.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>PageSpeed Insights</span>
          </a>
          <a 
            href="https://www.whatsmydns.net/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>DNS Propagation Checker</span>
          </a>
        </div>
      </Card>
    </div>
  );
}