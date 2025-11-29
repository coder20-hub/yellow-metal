// Application configuration service
export interface AppConfig {
  api: {
    baseUrl: string;
    key: string;
    timeout: number;
    retryAttempts: number;
  };
  features: {
    enableCache: boolean;
    cacheDuration: number;
    enableAnalytics: boolean;
    enableErrorTracking: boolean;
  };
  ui: {
    theme: 'light' | 'dark' | 'auto';
    language: 'en' | 'hi';
    currency: 'INR';
  };
  loan: {
    defaultLTV: number; // Loan to Value ratio
    minLTV: number; // Minimum allowed LTV
    maxLTV: number; // Maximum allowed LTV
    defaultInterestRate: number;
    maxLoanAmount: number;
    minLoanAmount: number;
    ltvPresets: { label: string; value: number; description: string }[]; // Predefined LTV options
  };
}

// Default configuration
const defaultConfig: AppConfig = {
  api: {
    baseUrl: 'https://api.yourdomain.com',
    key: 'YOUR_API_KEY_HERE',
    timeout: 10000, // 10 seconds
    retryAttempts: 3
  },
  features: {
    enableCache: true,
    cacheDuration: 300000, // 5 minutes
    enableAnalytics: false,
    enableErrorTracking: false
  },
  ui: {
    theme: 'light',
    language: 'en',
    currency: 'INR'
  },
  loan: {
    defaultLTV: 75, // 75% default LTV
    minLTV: 50, // Minimum 50% LTV
    maxLTV: 90, // Maximum 90% LTV
    defaultInterestRate: 9.0,
    maxLoanAmount: 5000000, // 50 lakhs
    minLoanAmount: 10000, // 10k
    ltvPresets: [
      { label: 'Conservative', value: 70, description: 'Lower risk, standard for basic plans' },
      { label: 'Standard', value: 75, description: 'Market standard, balanced approach' },
      { label: 'Competitive', value: 80, description: 'Higher value, premium plans' },
      { label: 'Aggressive', value: 85, description: 'Maximum value, elite plans' }
    ]
  }
};

class AppConfigService {
  private static instance: AppConfigService;
  private config: AppConfig;

  private constructor() {
    this.config = { ...defaultConfig };
    this.loadConfig();
  }

  static getInstance(): AppConfigService {
    if (!AppConfigService.instance) {
      AppConfigService.instance = new AppConfigService();
    }
    return AppConfigService.instance;
  }

  private loadConfig(): void {
    try {
      // Try to load configuration from various sources
      
      // 1. Check for configuration in window object (set by server-side rendering or build process)
      if (typeof window !== 'undefined') {
        const globalConfig = (window as any).__APP_CONFIG__;
        if (globalConfig) {
          this.config = this.mergeConfig(this.config, globalConfig);
        }
      }

      // 2. Check localStorage for user preferences
      if (typeof localStorage !== 'undefined') {
        const savedConfig = localStorage.getItem('app-config');
        if (savedConfig) {
          try {
            const parsedConfig = JSON.parse(savedConfig);
            this.config = this.mergeConfig(this.config, parsedConfig);
          } catch (error) {
            console.warn('Failed to parse saved configuration');
          }
        }
      }

      // 3. For development, you can set configuration here
      if (this.isDevelopment()) {
        this.config = this.mergeConfig(this.config, {
          api: {
            baseUrl: 'http://localhost:3001', // Local development server
            key: 'dev-api-key'
          },
          features: {
            enableCache: true,
            enableAnalytics: false,
            enableErrorTracking: false
          }
        });
      }

    } catch (error) {
      console.warn('Error loading configuration, using defaults:', error);
    }
  }

  private mergeConfig(base: AppConfig, override: Partial<AppConfig>): AppConfig {
    return {
      api: { ...base.api, ...override.api },
      features: { ...base.features, ...override.features },
      ui: { ...base.ui, ...override.ui },
      loan: { ...base.loan, ...override.loan }
    };
  }

  private isDevelopment(): boolean {
    return typeof window !== 'undefined' && 
           (window.location.hostname === 'localhost' || 
            window.location.hostname === '127.0.0.1' ||
            window.location.hostname.startsWith('192.168.'));
  }

  // Getters for different configuration sections
  get api(): AppConfig['api'] {
    return this.config.api;
  }

  get features(): AppConfig['features'] {
    return this.config.features;
  }

  get ui(): AppConfig['ui'] {
    return this.config.ui;
  }

  get loan(): AppConfig['loan'] {
    return this.config.loan;
  }

  // Get the entire configuration
  getConfig(): AppConfig {
    return { ...this.config };
  }

  // Update configuration at runtime
  updateConfig(updates: Partial<AppConfig>): void {
    this.config = this.mergeConfig(this.config, updates);
    
    // Save user preferences to localStorage
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem('app-config', JSON.stringify({
          ui: updates.ui,
          features: {
            enableCache: updates.features?.enableCache,
            cacheDuration: updates.features?.cacheDuration
          }
        }));
      } catch (error) {
        console.warn('Failed to save configuration');
      }
    }
  }

  // Update API configuration specifically
  updateApiConfig(baseUrl?: string, key?: string): void {
    this.updateConfig({
      api: {
        ...this.config.api,
        ...(baseUrl && { baseUrl }),
        ...(key && { key })
      }
    });
  }

  // Update loan configuration specifically
  updateLoanConfig(loanConfig: Partial<AppConfig['loan']>): void {
    this.updateConfig({
      loan: {
        ...this.config.loan,
        ...loanConfig
      }
    });
  }

  // Set production configuration
  setProductionConfig(config: Partial<AppConfig>): void {
    if (!this.isDevelopment()) {
      this.updateConfig(config);
    }
  }

  // Helper methods for LTV
  getLTVPresets(): AppConfig['loan']['ltvPresets'] {
    return this.config.loan.ltvPresets;
  }

  validateLTV(ltv: number): boolean {
    return ltv >= this.config.loan.minLTV && ltv <= this.config.loan.maxLTV;
  }

  getLTVRecommendation(category: 'basic' | 'premium' | 'elite'): number {
    switch (category) {
      case 'basic':
        return 70;
      case 'premium':
        return 75;
      case 'elite':
        return 80;
      default:
        return this.config.loan.defaultLTV;
    }
  }
}

// Export singleton instance
export const appConfig = AppConfigService.getInstance();

// Helper function to initialize configuration
export function initializeAppConfig(config?: Partial<AppConfig>): void {
  if (config) {
    appConfig.updateConfig(config);
  }
}

// Hook for React components to use configuration
export function useAppConfig() {
  return {
    config: appConfig.getConfig(),
    updateConfig: appConfig.updateConfig.bind(appConfig),
    updateApiConfig: appConfig.updateApiConfig.bind(appConfig),
    updateLoanConfig: appConfig.updateLoanConfig.bind(appConfig),
    getLTVPresets: appConfig.getLTVPresets.bind(appConfig),
    validateLTV: appConfig.validateLTV.bind(appConfig),
    getLTVRecommendation: appConfig.getLTVRecommendation.bind(appConfig)
  };
}

export default appConfig;