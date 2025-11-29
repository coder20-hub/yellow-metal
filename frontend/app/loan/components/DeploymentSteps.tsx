import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CheckCircle, Circle, ExternalLink, Copy, Check, ChevronRight, ChevronDown } from 'lucide-react';

interface Step {
  id: string;
  title: string;
  description: string;
  instructions: string[];
  commands?: string[];
  links?: { text: string; url: string }[];
  important?: boolean;
}

const deploymentSteps: Step[] = [
  {
    id: 'prep-repo',
    title: 'Prepare Your Repository',
    description: 'Ensure all changes are committed and pushed',
    instructions: [
      'Make sure all your code changes are saved',
      'Commit all changes to git',
      'Push to your main branch'
    ],
    commands: [
      'git add .',
      'git commit -m "Prepare for subdomain deployment"',
      'git push origin main'
    ],
    important: true
  },
  {
    id: 'vercel-project',
    title: 'Vercel Project Configuration',
    description: 'Set up your project in Vercel dashboard',
    instructions: [
      'Go to Vercel Dashboard',
      'Click "New Project" or select existing project',
      'Import your repository',
      'Configure build settings'
    ],
    links: [
      { text: 'Vercel Dashboard', url: 'https://vercel.com/dashboard' }
    ],
    important: true
  },
  {
    id: 'build-settings',
    title: 'Configure Build Settings',
    description: 'Set up the correct build configuration',
    instructions: [
      'Framework Preset: Vite',
      'Build Command: npm run build',
      'Output Directory: dist',
      'Install Command: npm install'
    ]
  },
  {
    id: 'env-vars',
    title: 'Environment Variables Setup',
    description: 'Configure all production environment variables',
    instructions: [
      'Go to Project Settings → Environment Variables',
      'Add all your environment variables for Production',
      'Make sure to prefix React variables with VITE_',
      'Include database credentials and API keys'
    ],
    commands: [
      'VITE_API_BASE_URL=https://app.yellowmetal.co/api',
      'VITE_SITE_URL=https://app.yellowmetal.co',
      'VITE_MAIN_SITE_URL=https://yellowmetal.co'
    ],
    important: true
  },
  {
    id: 'add-domain',
    title: 'Add Subdomain to Vercel',
    description: 'Configure your custom subdomain',
    instructions: [
      'Go to Project Settings → Domains',
      'Add your subdomain: app.yellowmetal.co',
      'Vercel will provide DNS configuration details'
    ],
    important: true
  },
  {
    id: 'dns-config',
    title: 'DNS Configuration',
    description: 'Set up DNS records with your domain provider',
    instructions: [
      'Add CNAME record in your DNS provider',
      'Name: app',
      'Value: cname.vercel-dns.com',
      'TTL: 300 (or default)'
    ],
    commands: [
      'Type: CNAME',
      'Name: app',
      'Value: cname.vercel-dns.com'
    ]
  },
  {
    id: 'deploy',
    title: 'Deploy to Production',
    description: 'Trigger the production deployment',
    instructions: [
      'Deployment happens automatically when you push to main',
      'Or use Vercel CLI for manual deployment',
      'Monitor deployment in Vercel dashboard'
    ],
    commands: [
      'npx vercel --prod'
    ]
  },
  {
    id: 'verify',
    title: 'Verify Deployment',
    description: 'Test your deployed application',
    instructions: [
      'Visit https://app.yellowmetal.co',
      'Test admin panel: https://app.yellowmetal.co?admin=true',
      'Verify SSL certificate is working',
      'Test all functionality'
    ],
    links: [
      { text: 'Your App', url: 'https://app.yellowmetal.co' },
      { text: 'Admin Panel', url: 'https://app.yellowmetal.co?admin=true' }
    ],
    important: true
  }
];

export function DeploymentSteps() {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [expandedSteps, setExpandedSteps] = useState<Set<string>>(new Set(['prep-repo']));
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const toggleStep = (stepId: string) => {
    setCompletedSteps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(stepId)) {
        newSet.delete(stepId);
      } else {
        newSet.add(stepId);
      }
      return newSet;
    });
  };

  const toggleExpanded = (stepId: string) => {
    setExpandedSteps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(stepId)) {
        newSet.delete(stepId);
      } else {
        newSet.add(stepId);
      }
      return newSet;
    });
  };

  const copyCommand = async (command: string) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedCommand(command);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error('Failed to copy command:', err);
    }
  };

  const progress = Math.round((completedSteps.size / deploymentSteps.length) * 100);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Deploy to app.yellowmetal.co</h1>
        <p className="text-muted-foreground">
          Follow these steps to deploy your gold loan app to the subdomain
        </p>
        
        {/* Progress Bar */}
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Progress</span>
              <Badge variant={progress === 100 ? 'default' : 'secondary'}>
                {completedSteps.size}/{deploymentSteps.length} Steps Complete
              </Badge>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="text-center">
              <span className="text-2xl font-bold text-green-600">{progress}%</span>
              <span className="text-muted-foreground ml-2">Complete</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {deploymentSteps.map((step, index) => {
          const isCompleted = completedSteps.has(step.id);
          const isExpanded = expandedSteps.has(step.id);
          
          return (
            <Card key={step.id} className={`p-6 transition-all duration-200 ${isCompleted ? 'bg-green-50 border-green-200' : ''}`}>
              <div className="space-y-4">
                {/* Step Header */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <button 
                      onClick={() => toggleStep(step.id)}
                      className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <Circle className="w-6 h-6 text-gray-400" />
                      )}
                    </button>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium text-muted-foreground">
                        Step {index + 1}
                      </span>
                      {step.important && (
                        <Badge variant="destructive" className="text-xs">Important</Badge>
                      )}
                    </div>
                    
                    <button
                      onClick={() => toggleExpanded(step.id)}
                      className="flex items-center space-x-2 mt-1 text-left hover:text-primary transition-colors"
                    >
                      <h3 className={`font-semibold ${isCompleted ? 'line-through text-muted-foreground' : ''}`}>
                        {step.title}
                      </h3>
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    
                    <p className={`text-sm mt-1 ${isCompleted ? 'line-through text-muted-foreground' : 'text-muted-foreground'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Content */}
                {isExpanded && (
                  <div className="ml-10 space-y-4">
                    {/* Instructions */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Instructions:</h4>
                      <ul className="space-y-1">
                        {step.instructions.map((instruction, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                            <span className="text-primary">•</span>
                            <span>{instruction}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Commands */}
                    {step.commands && (
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Commands:</h4>
                        <div className="space-y-2">
                          {step.commands.map((command, idx) => (
                            <div key={idx} className="flex items-center space-x-2 bg-gray-100 rounded-lg p-3">
                              <code className="flex-1 text-sm font-mono">{command}</code>
                              <button
                                onClick={() => copyCommand(command)}
                                className="p-1 hover:bg-gray-200 rounded transition-colors"
                                title="Copy command"
                              >
                                {copiedCommand === command ? (
                                  <Check className="w-4 h-4 text-green-600" />
                                ) : (
                                  <Copy className="w-4 h-4" />
                                )}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Links */}
                    {step.links && (
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Useful Links:</h4>
                        <div className="flex flex-wrap gap-2">
                          {step.links.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                            >
                              <span>{link.text}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <Button 
            variant="outline" 
            className="justify-start"
            onClick={() => window.open('https://vercel.com/dashboard', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Vercel Dashboard
          </Button>
          <Button 
            variant="outline" 
            className="justify-start"
            onClick={() => window.open('https://app.yellowmetal.co', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Your App
          </Button>
          <Button 
            variant="outline" 
            className="justify-start"
            onClick={() => window.open('https://pagespeed.web.dev/', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Speed Test
          </Button>
        </div>
      </Card>

      {/* Success Message */}
      {progress === 100 && (
        <Card className="p-6 bg-green-50 border-green-200">
          <div className="text-center space-y-2">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
            <h3 className="font-semibold text-green-800">Deployment Complete! 🎉</h3>
            <p className="text-green-700">
              Your app should now be live at{' '}
              <a 
                href="https://app.yellowmetal.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold underline hover:no-underline"
              >
                https://app.yellowmetal.co
              </a>
            </p>
          </div>
        </Card>
      )}
    </div>
  );
}