// Environment configuration with proper fallbacks and type safety

interface AppConfig {
  env: 'development' | 'production' | 'test';
  domain: string;
  mainSiteDomain: string;
  apiBaseUrl: string;
  appUrl: string;
  supabase: {
    url: string;
    anonKey: string;
  };
  notion: {
    apiToken: string;
    databaseId: string;
  };
  analytics: {
    gaTrackingId: string;
  };
  features: {
    adminPanel: boolean;
    multilingual: boolean;
    calculator: boolean;
  };
  goldRateApi: {
    endpoint: string;
    apiKey: string;
  };
  security: {
    adminSecretKey: string;
  };
}

// Safe environment variable getter with fallbacks
function getEnvVar(key: string, fallback: string = ''): string {
  try {
    // In Vite, import.meta.env should always be available
    const value = import.meta.env?.[key];
    if (value !== undefined && value !== null) {
      return String(value);
    }
    return fallback;
  } catch (error) {
    console.warn(`Failed to access environment variable ${key}, using fallback:`, fallback);
    return fallback;
  }
}

function getBooleanEnvVar(key: string, fallback: boolean = false): boolean {
  try {
    const value = getEnvVar(key, fallback.toString());
    return value.toLowerCase() === 'true';
  } catch (error) {
    console.warn(`Failed to parse boolean environment variable ${key}, using fallback:`, fallback);
    return fallback;
  }
}

// Get environment type safely
const nodeEnv = getEnvVar('NODE_ENV', 'development');
const envType = (nodeEnv === 'production' || nodeEnv === 'test') ? nodeEnv : 'development';

// App configuration with safe defaults
export const appConfig: AppConfig = {
  env: envType as AppConfig['env'],
  domain: getEnvVar('VITE_APP_DOMAIN', 'localhost:3000'),
  mainSiteDomain: getEnvVar('VITE_MAIN_SITE_DOMAIN', 'https://yellowmetal.co'),
  apiBaseUrl: getEnvVar('VITE_API_BASE_URL', 'http://localhost:3000/api'),
  appUrl: getEnvVar('VITE_APP_URL', 'http://localhost:3000'),
  
  supabase: {
    url: getEnvVar('VITE_SUPABASE_URL', ''),
    anonKey: getEnvVar('VITE_SUPABASE_ANON_KEY', ''),
  },
  
  notion: {
    apiToken: getEnvVar('NOTION_API_TOKEN', ''),
    databaseId: getEnvVar('NOTION_DATABASE_ID', ''),
  },
  
  analytics: {
    gaTrackingId: getEnvVar('VITE_GA_TRACKING_ID', ''),
  },
  
  features: {
    adminPanel: getBooleanEnvVar('VITE_ENABLE_ADMIN_PANEL', true),
    multilingual: getBooleanEnvVar('VITE_ENABLE_MULTILINGUAL', true),
    calculator: getBooleanEnvVar('VITE_ENABLE_CALCULATOR', true),
  },
  
  goldRateApi: {
    endpoint: getEnvVar('VITE_GOLD_RATE_API', ''),
    apiKey: getEnvVar('VITE_GOLD_RATE_API_KEY', ''),
  },
  
  security: {
    adminSecretKey: getEnvVar('VITE_ADMIN_SECRET_KEY', 'default_dev_key'),
  },
};

// Validation function to check if critical environment variables are set
export function validateEnvironment(): { isValid: boolean; missingVars: string[] } {
  // In development, we use fallback values, so validation should be more lenient
  if (appConfig.env === 'development') {
    return {
      isValid: true,
      missingVars: [],
    };
  }
  
  const criticalVars = [
    'VITE_MAIN_SITE_DOMAIN',
    'VITE_APP_URL',
  ];
  
  const missingVars: string[] = [];
  
  for (const varName of criticalVars) {
    const value = getEnvVar(varName);
    // In production, we need actual values, not placeholders
    if (!value || value.includes('localhost') || value.includes('your_')) {
      missingVars.push(varName);
    }
  }
  
  return {
    isValid: missingVars.length === 0,
    missingVars,
  };
}

// Development helper to log configuration
export function logEnvironmentConfig(): void {
  if (appConfig.env === 'development') {
    // Only log basic info, not all the details to reduce console noise
    console.log('🔧 Environment: Development mode loaded successfully');
    
    // Only show detailed logs if there are actual issues
    const hasIssues = !appConfig.mainSiteDomain || !appConfig.appUrl || 
                     appConfig.mainSiteDomain.includes('your_') || 
                     appConfig.appUrl.includes('your_');
    
    if (hasIssues) {
      console.group('🔧 Environment Configuration (Issues Detected)');
      console.log('Main Site Domain:', appConfig.mainSiteDomain);
      console.log('App URL:', appConfig.appUrl);
      console.log('API Base URL:', appConfig.apiBaseUrl);
      console.groupEnd();
    }
  }
}

// Export individual config sections for easier access
export const { 
  env, 
  domain, 
  mainSiteDomain, 
  apiBaseUrl, 
  appUrl, 
  supabase, 
  notion, 
  analytics, 
  features, 
  goldRateApi, 
  security 
} = appConfig;

export default appConfig;