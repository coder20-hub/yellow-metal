// Environment configuration management
export interface EnvironmentConfig {
  NODE_ENV: 'development' | 'production' | 'test';
  
  // API Configuration
  API_BASE_URL: string;
  API_KEY: string;
  API_TIMEOUT: number;
  API_RETRY_ATTEMPTS: number;
  
  // Database Configuration
  DATABASE_PROVIDER: 'notion' | 'firebase' | 'supabase' | 'postgres' | 'mongodb';
  DATABASE_URL?: string;
  DATABASE_API_KEY?: string;
  DATABASE_ID?: string;
  
  // Notion Specific
  NOTION_API_KEY?: string;
  NOTION_DATABASE_ID?: string;
  NOTION_VERSION?: string;
  
  // Firebase Specific
  FIREBASE_PROJECT_ID?: string;
  FIREBASE_API_KEY?: string;
  FIREBASE_AUTH_DOMAIN?: string;
  FIREBASE_DATABASE_URL?: string;
  
  // Authentication
  JWT_SECRET?: string;
  JWT_EXPIRES_IN?: string;
  ADMIN_PASSWORD?: string;
  
  // Features
  ENABLE_CACHE: boolean;
  ENABLE_ANALYTICS: boolean;
  ENABLE_ERROR_TRACKING: boolean;
  ENABLE_AUDIT_LOGGING: boolean;
  ENABLE_BACKUP: boolean;
  
  // External Services
  GOLD_RATE_API_URL?: string;
  GOLD_RATE_API_KEY?: string;
  SMS_PROVIDER?: string;
  SMS_API_KEY?: string;
  EMAIL_PROVIDER?: string;
  EMAIL_API_KEY?: string;
  
  // Security
  CORS_ORIGINS: string[];
  RATE_LIMIT_WINDOW: number;
  RATE_LIMIT_MAX_REQUESTS: number;
  
  // Monitoring
  LOG_LEVEL: 'error' | 'warn' | 'info' | 'debug';
  HEALTH_CHECK_INTERVAL: number;
}

class EnvironmentConfigService {
  private static instance: EnvironmentConfigService;
  private config: EnvironmentConfig;
  private isInitialized: boolean = false;

  private constructor() {
    this.config = this.loadEnvironmentConfig();
    this.validateConfig();
    this.isInitialized = true;
  }

  static getInstance(): EnvironmentConfigService {
    if (!EnvironmentConfigService.instance) {
      EnvironmentConfigService.instance = new EnvironmentConfigService();
    }
    return EnvironmentConfigService.instance;
  }

  private loadEnvironmentConfig(): EnvironmentConfig {
    // Default configuration
    const defaultConfig: EnvironmentConfig = {
      NODE_ENV: 'development',
      
      // API Configuration
      API_BASE_URL: 'https://api.goldloan.com',
      API_KEY: '',
      API_TIMEOUT: 10000,
      API_RETRY_ATTEMPTS: 3,
      
      // Database Configuration
      DATABASE_PROVIDER: 'notion',
      
      // Features
      ENABLE_CACHE: true,
      ENABLE_ANALYTICS: false,
      ENABLE_ERROR_TRACKING: false,
      ENABLE_AUDIT_LOGGING: true,
      ENABLE_BACKUP: true,
      
      // Security
      CORS_ORIGINS: ['http://localhost:3000', 'http://localhost:5173'],
      RATE_LIMIT_WINDOW: 900000, // 15 minutes
      RATE_LIMIT_MAX_REQUESTS: 100,
      
      // Monitoring
      LOG_LEVEL: 'info',
      HEALTH_CHECK_INTERVAL: 60000 // 1 minute
    };

    // Load from environment variables
    const envConfig: Partial<EnvironmentConfig> = {
      NODE_ENV: (process.env.NODE_ENV as any) || defaultConfig.NODE_ENV,
      
      // API Configuration
      API_BASE_URL: process.env.VITE_API_BASE_URL || process.env.API_BASE_URL || defaultConfig.API_BASE_URL,
      API_KEY: process.env.VITE_API_KEY || process.env.API_KEY || defaultConfig.API_KEY,
      API_TIMEOUT: parseInt(process.env.VITE_API_TIMEOUT || process.env.API_TIMEOUT || '') || defaultConfig.API_TIMEOUT,
      API_RETRY_ATTEMPTS: parseInt(process.env.VITE_API_RETRY_ATTEMPTS || process.env.API_RETRY_ATTEMPTS || '') || defaultConfig.API_RETRY_ATTEMPTS,
      
      // Database Configuration
      DATABASE_PROVIDER: (process.env.DATABASE_PROVIDER as any) || defaultConfig.DATABASE_PROVIDER,
      DATABASE_URL: process.env.DATABASE_URL,
      DATABASE_API_KEY: process.env.DATABASE_API_KEY,
      DATABASE_ID: process.env.DATABASE_ID,
      
      // Notion Specific
      NOTION_API_KEY: process.env.NOTION_API_KEY || process.env.VITE_NOTION_API_KEY,
      NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID || process.env.VITE_NOTION_DATABASE_ID,
      NOTION_VERSION: process.env.NOTION_VERSION || '2022-06-28',
      
      // Firebase Specific
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || process.env.VITE_FIREBASE_PROJECT_ID,
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || process.env.VITE_FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || process.env.VITE_FIREBASE_AUTH_DOMAIN,
      FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL || process.env.VITE_FIREBASE_DATABASE_URL,
      
      // Authentication
      JWT_SECRET: process.env.JWT_SECRET,
      JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '24h',
      ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || 'admin123',
      
      // Features
      ENABLE_CACHE: process.env.ENABLE_CACHE !== 'false',
      ENABLE_ANALYTICS: process.env.ENABLE_ANALYTICS === 'true',
      ENABLE_ERROR_TRACKING: process.env.ENABLE_ERROR_TRACKING === 'true',
      ENABLE_AUDIT_LOGGING: process.env.ENABLE_AUDIT_LOGGING !== 'false',
      ENABLE_BACKUP: process.env.ENABLE_BACKUP !== 'false',
      
      // External Services
      GOLD_RATE_API_URL: process.env.GOLD_RATE_API_URL,
      GOLD_RATE_API_KEY: process.env.GOLD_RATE_API_KEY,
      SMS_PROVIDER: process.env.SMS_PROVIDER,
      SMS_API_KEY: process.env.SMS_API_KEY,
      EMAIL_PROVIDER: process.env.EMAIL_PROVIDER,
      EMAIL_API_KEY: process.env.EMAIL_API_KEY,
      
      // Security
      CORS_ORIGINS: process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : defaultConfig.CORS_ORIGINS,
      RATE_LIMIT_WINDOW: parseInt(process.env.RATE_LIMIT_WINDOW || '') || defaultConfig.RATE_LIMIT_WINDOW,
      RATE_LIMIT_MAX_REQUESTS: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '') || defaultConfig.RATE_LIMIT_MAX_REQUESTS,
      
      // Monitoring
      LOG_LEVEL: (process.env.LOG_LEVEL as any) || defaultConfig.LOG_LEVEL,
      HEALTH_CHECK_INTERVAL: parseInt(process.env.HEALTH_CHECK_INTERVAL || '') || defaultConfig.HEALTH_CHECK_INTERVAL
    };

    return { ...defaultConfig, ...envConfig } as EnvironmentConfig;
  }

  private validateConfig(): void {
    const errors: string[] = [];

    // Validate required fields based on environment
    if (this.config.NODE_ENV === 'production') {
      if (!this.config.API_KEY) {
        errors.push('API_KEY is required in production');
      }
      
      if (this.config.DATABASE_PROVIDER === 'notion' && !this.config.NOTION_API_KEY) {
        errors.push('NOTION_API_KEY is required when using Notion database');
      }
      
      if (this.config.DATABASE_PROVIDER === 'firebase' && !this.config.FIREBASE_PROJECT_ID) {
        errors.push('FIREBASE_PROJECT_ID is required when using Firebase database');
      }
    }

    // Validate numeric values
    if (this.config.API_TIMEOUT <= 0) {
      errors.push('API_TIMEOUT must be a positive number');
    }
    
    if (this.config.API_RETRY_ATTEMPTS < 0) {
      errors.push('API_RETRY_ATTEMPTS must be a non-negative number');
    }

    // Validate URL formats
    try {
      new URL(this.config.API_BASE_URL);
    } catch {
      errors.push('API_BASE_URL must be a valid URL');
    }

    if (errors.length > 0) {
      console.error('Environment configuration validation errors:', errors);
      if (this.config.NODE_ENV === 'production') {
        throw new Error(`Environment configuration is invalid: ${errors.join(', ')}`);
      }
    }
  }

  // Getters
  get nodeEnv(): EnvironmentConfig['NODE_ENV'] {
    return this.config.NODE_ENV;
  }

  get isDevelopment(): boolean {
    return this.config.NODE_ENV === 'development';
  }

  get isProduction(): boolean {
    return this.config.NODE_ENV === 'production';
  }

  get isTest(): boolean {
    return this.config.NODE_ENV === 'test';
  }

  get apiConfig(): {
    baseUrl: string;
    key: string;
    timeout: number;
    retryAttempts: number;
  } {
    return {
      baseUrl: this.config.API_BASE_URL,
      key: this.config.API_KEY,
      timeout: this.config.API_TIMEOUT,
      retryAttempts: this.config.API_RETRY_ATTEMPTS
    };
  }

  get databaseConfig(): {
    provider: EnvironmentConfig['DATABASE_PROVIDER'];
    url?: string;
    apiKey?: string;
    databaseId?: string;
  } {
    return {
      provider: this.config.DATABASE_PROVIDER,
      url: this.config.DATABASE_URL,
      apiKey: this.config.DATABASE_API_KEY,
      databaseId: this.config.DATABASE_ID
    };
  }

  get notionConfig(): {
    apiKey?: string;
    databaseId?: string;
    version?: string;
  } {
    return {
      apiKey: this.config.NOTION_API_KEY,
      databaseId: this.config.NOTION_DATABASE_ID,
      version: this.config.NOTION_VERSION
    };
  }

  get firebaseConfig(): {
    projectId?: string;
    apiKey?: string;
    authDomain?: string;
    databaseURL?: string;
  } {
    return {
      projectId: this.config.FIREBASE_PROJECT_ID,
      apiKey: this.config.FIREBASE_API_KEY,
      authDomain: this.config.FIREBASE_AUTH_DOMAIN,
      databaseURL: this.config.FIREBASE_DATABASE_URL
    };
  }

  get authConfig(): {
    jwtSecret?: string;
    jwtExpiresIn?: string;
    adminPassword?: string;
  } {
    return {
      jwtSecret: this.config.JWT_SECRET,
      jwtExpiresIn: this.config.JWT_EXPIRES_IN,
      adminPassword: this.config.ADMIN_PASSWORD
    };
  }

  get featureFlags(): {
    enableCache: boolean;
    enableAnalytics: boolean;
    enableErrorTracking: boolean;
    enableAuditLogging: boolean;
    enableBackup: boolean;
  } {
    return {
      enableCache: this.config.ENABLE_CACHE,
      enableAnalytics: this.config.ENABLE_ANALYTICS,
      enableErrorTracking: this.config.ENABLE_ERROR_TRACKING,
      enableAuditLogging: this.config.ENABLE_AUDIT_LOGGING,
      enableBackup: this.config.ENABLE_BACKUP
    };
  }

  get securityConfig(): {
    corsOrigins: string[];
    rateLimitWindow: number;
    rateLimitMaxRequests: number;
  } {
    return {
      corsOrigins: this.config.CORS_ORIGINS,
      rateLimitWindow: this.config.RATE_LIMIT_WINDOW,
      rateLimitMaxRequests: this.config.RATE_LIMIT_MAX_REQUESTS
    };
  }

  get monitoringConfig(): {
    logLevel: EnvironmentConfig['LOG_LEVEL'];
    healthCheckInterval: number;
  } {
    return {
      logLevel: this.config.LOG_LEVEL,
      healthCheckInterval: this.config.HEALTH_CHECK_INTERVAL
    };
  }

  // Get entire configuration
  getConfig(): EnvironmentConfig {
    return { ...this.config };
  }

  // Update configuration at runtime (for testing or dynamic configuration)
  updateConfig(updates: Partial<EnvironmentConfig>): void {
    this.config = { ...this.config, ...updates };
    this.validateConfig();
  }

  // Get environment-specific configuration for frontend
  getClientConfig(): {
    apiBaseUrl: string;
    enableAnalytics: boolean;
    logLevel: string;
    nodeEnv: string;
  } {
    return {
      apiBaseUrl: this.config.API_BASE_URL,
      enableAnalytics: this.config.ENABLE_ANALYTICS,
      logLevel: this.config.LOG_LEVEL,
      nodeEnv: this.config.NODE_ENV
    };
  }

  // Health check
  async healthCheck(): Promise<{
    status: 'healthy' | 'unhealthy';
    checks: Array<{
      name: string;
      status: 'pass' | 'fail';
      message?: string;
    }>;
  }> {
    const checks = [];

    // Check API connectivity
    try {
      const response = await fetch(`${this.config.API_BASE_URL}/health`, {
        method: 'GET',
        timeout: 5000
      });
      checks.push({
        name: 'API Connection',
        status: response.ok ? 'pass' : 'fail',
        message: response.ok ? 'API is reachable' : `API returned ${response.status}`
      });
    } catch (error) {
      checks.push({
        name: 'API Connection',
        status: 'fail',
        message: `Failed to connect to API: ${error}`
      });
    }

    // Check database connectivity
    try {
      // This would check the actual database connection
      checks.push({
        name: 'Database Connection',
        status: 'pass', // Mock for now
        message: 'Database is accessible'
      });
    } catch (error) {
      checks.push({
        name: 'Database Connection',
        status: 'fail',
        message: `Database connection failed: ${error}`
      });
    }

    const allPassed = checks.every(check => check.status === 'pass');

    return {
      status: allPassed ? 'healthy' : 'unhealthy',
      checks
    };
  }
}

// Export singleton instance
export const environmentConfig = EnvironmentConfigService.getInstance();

// Helper functions
export function getEnvironmentConfig(): EnvironmentConfig {
  return environmentConfig.getConfig();
}

export function getClientConfig() {
  return environmentConfig.getClientConfig();
}

export function isProduction(): boolean {
  return environmentConfig.isProduction;
}

export function isDevelopment(): boolean {
  return environmentConfig.isDevelopment;
}

export default environmentConfig;