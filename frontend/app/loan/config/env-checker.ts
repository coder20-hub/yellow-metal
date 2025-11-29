// Environment variable checker utility for debugging

export function debugEnvironmentVariables(): void {
  console.group('🔍 Environment Variables Debug');
  
  try {
    if (import.meta?.env) {
      console.log('✅ import.meta.env is available');
      
      // Log all VITE_ prefixed variables
      const viteVars = Object.entries(import.meta.env)
        .filter(([key]) => key.startsWith('VITE_'))
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {} as Record<string, any>);
      
      console.log('VITE_ Environment Variables:', viteVars);
      
      // Check specific variables
      const criticalVars = [
        'VITE_MAIN_SITE_DOMAIN',
        'VITE_APP_URL',
        'VITE_API_BASE_URL',
        'NODE_ENV'
      ];
      
      criticalVars.forEach(varName => {
        const value = import.meta.env[varName];
        const status = value ? '✅' : '❌';
        console.log(`${status} ${varName}:`, value || 'undefined');
      });
      
    } else {
      console.error('❌ import.meta.env is not available');
    }
  } catch (error) {
    console.error('❌ Error accessing environment variables:', error);
  }
  
  console.groupEnd();
}

// Check if we're in a browser environment
export function isBrowserEnvironment(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

// Check if we're in development mode
export function isDevelopment(): boolean {
  try {
    return import.meta.env?.NODE_ENV === 'development' || 
           import.meta.env?.VITE_APP_ENV === 'development' ||
           (!import.meta.env?.NODE_ENV && isBrowserEnvironment());
  } catch {
    return true; // Default to development if we can't determine
  }
}

// Simple environment status check
export function getEnvironmentStatus(): {
  environment: string;
  hasImportMeta: boolean;
  hasViteVars: boolean;
  criticalVarsLoaded: boolean;
} {
  try {
    const hasImportMeta = !!import.meta?.env;
    const viteVars = hasImportMeta ? 
      Object.keys(import.meta.env).filter(key => key.startsWith('VITE_')) : [];
    const hasViteVars = viteVars.length > 0;
    
    const criticalVars = ['VITE_MAIN_SITE_DOMAIN', 'VITE_APP_URL'];
    const criticalVarsLoaded = hasImportMeta && 
      criticalVars.every(varName => import.meta.env[varName]);
    
    return {
      environment: isDevelopment() ? 'development' : 'production',
      hasImportMeta,
      hasViteVars,
      criticalVarsLoaded
    };
  } catch (error) {
    return {
      environment: 'unknown',
      hasImportMeta: false,
      hasViteVars: false,
      criticalVarsLoaded: false
    };
  }
}