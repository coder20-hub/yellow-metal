import { environmentConfig } from '../config/environment.config';

export interface User {
  id: string;
  username: string;
  email?: string;
  role: 'admin' | 'manager' | 'viewer';
  permissions: Permission[];
  lastLoginAt?: string;
  createdAt: string;
  isActive: boolean;
  metadata?: {
    firstName?: string;
    lastName?: string;
    department?: string;
    avatar?: string;
  };
}

export interface Permission {
  resource: 'loan-plans' | 'applications' | 'users' | 'reports' | 'settings';
  actions: Array<'create' | 'read' | 'update' | 'delete' | 'approve'>;
}

export interface LoginCredentials {
  username: string;
  password: string;
  rememberMe?: boolean;
}

export interface AuthToken {
  token: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: 'Bearer';
}

export interface AuthSession {
  user: User;
  token: AuthToken;
  issuedAt: string;
  expiresAt: string;
}

export interface LoginResult {
  success: boolean;
  session?: AuthSession;
  error?: {
    code: string;
    message: string;
    requiresTwoFactor?: boolean;
  };
}

export interface TokenValidationResult {
  isValid: boolean;
  user?: User;
  error?: string;
}

class AuthenticationService {
  private static instance: AuthenticationService;
  private currentSession: AuthSession | null = null;
  private refreshTimer: NodeJS.Timeout | null = null;

  private constructor() {
    this.loadSessionFromStorage();
    this.setupTokenRefresh();
  }

  static getInstance(): AuthenticationService {
    if (!AuthenticationService.instance) {
      AuthenticationService.instance = new AuthenticationService();
    }
    return AuthenticationService.instance;
  }

  // Login with username and password
  async login(credentials: LoginCredentials): Promise<LoginResult> {
    try {
      // Validate input
      if (!credentials.username || !credentials.password) {
        return {
          success: false,
          error: {
            code: 'INVALID_CREDENTIALS',
            message: 'Username and password are required'
          }
        };
      }

      // In development/demo mode, use simple authentication
      if (environmentConfig.isDevelopment || !environmentConfig.apiConfig.key) {
        return this.handleDemoLogin(credentials);
      }

      // Production authentication via API
      const response = await fetch(`${environmentConfig.apiConfig.baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Client-Version': '1.0.0'
        },
        body: JSON.stringify(credentials)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        return {
          success: false,
          error: {
            code: response.status === 401 ? 'INVALID_CREDENTIALS' : 'LOGIN_FAILED',
            message: errorData.message || 'Login failed',
            requiresTwoFactor: errorData.requiresTwoFactor
          }
        };
      }

      const authData = await response.json();
      const session = this.createSession(authData.user, authData.token);
      
      this.setCurrentSession(session);
      this.saveSessionToStorage(session);
      this.setupTokenRefresh();

      return {
        success: true,
        session
      };
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: {
          code: 'NETWORK_ERROR',
          message: 'Network error during login'
        }
      };
    }
  }

  // Demo/development login
  private handleDemoLogin(credentials: LoginCredentials): LoginResult {
    const adminPassword = environmentConfig.authConfig.adminPassword || 'admin123';
    
    // Check demo credentials
    if (credentials.username === 'admin' && credentials.password === adminPassword) {
      const demoUser: User = {
        id: 'demo-admin-1',
        username: 'admin',
        email: 'admin@goldloan.com',
        role: 'admin',
        permissions: [
          {
            resource: 'loan-plans',
            actions: ['create', 'read', 'update', 'delete', 'approve']
          },
          {
            resource: 'applications',
            actions: ['read', 'update', 'approve']
          },
          {
            resource: 'users',
            actions: ['create', 'read', 'update', 'delete']
          },
          {
            resource: 'reports',
            actions: ['read']
          },
          {
            resource: 'settings',
            actions: ['read', 'update']
          }
        ],
        createdAt: new Date().toISOString(),
        isActive: true,
        metadata: {
          firstName: 'Admin',
          lastName: 'User',
          department: 'Administration'
        }
      };

      const demoToken: AuthToken = {
        token: this.generateToken(demoUser),
        refreshToken: this.generateRefreshToken(),
        expiresIn: 24 * 60 * 60, // 24 hours
        tokenType: 'Bearer'
      };

      const session = this.createSession(demoUser, demoToken);
      
      this.setCurrentSession(session);
      this.saveSessionToStorage(session);
      this.setupTokenRefresh();

      return {
        success: true,
        session
      };
    }

    // Check manager credentials
    if (credentials.username === 'manager' && credentials.password === 'manager123') {
      const managerUser: User = {
        id: 'demo-manager-1',
        username: 'manager',
        email: 'manager@goldloan.com',
        role: 'manager',
        permissions: [
          {
            resource: 'loan-plans',
            actions: ['read', 'update']
          },
          {
            resource: 'applications',
            actions: ['read', 'update', 'approve']
          },
          {
            resource: 'reports',
            actions: ['read']
          }
        ],
        createdAt: new Date().toISOString(),
        isActive: true,
        metadata: {
          firstName: 'Manager',
          lastName: 'User',
          department: 'Operations'
        }
      };

      const managerToken: AuthToken = {
        token: this.generateToken(managerUser),
        refreshToken: this.generateRefreshToken(),
        expiresIn: 24 * 60 * 60,
        tokenType: 'Bearer'
      };

      const session = this.createSession(managerUser, managerToken);
      
      this.setCurrentSession(session);
      this.saveSessionToStorage(session);
      this.setupTokenRefresh();

      return {
        success: true,
        session
      };
    }

    return {
      success: false,
      error: {
        code: 'INVALID_CREDENTIALS',
        message: 'Invalid username or password'
      }
    };
  }

  // Logout
  async logout(): Promise<void> {
    try {
      // Notify server about logout (in production)
      if (this.currentSession && !environmentConfig.isDevelopment) {
        await fetch(`${environmentConfig.apiConfig.baseUrl}/auth/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.currentSession.token.token}`,
            'Content-Type': 'application/json'
          }
        }).catch(() => {
          // Ignore logout errors - proceed with local cleanup
        });
      }
    } finally {
      this.clearSession();
    }
  }

  // Validate token
  async validateToken(token: string): Promise<TokenValidationResult> {
    try {
      if (environmentConfig.isDevelopment) {
        // In development, decode the demo token
        return this.validateDemoToken(token);
      }

      // Production token validation
      const response = await fetch(`${environmentConfig.apiConfig.baseUrl}/auth/validate`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        return {
          isValid: false,
          error: 'Token validation failed'
        };
      }

      const data = await response.json();
      return {
        isValid: true,
        user: data.user
      };
    } catch (error) {
      return {
        isValid: false,
        error: 'Token validation error'
      };
    }
  }

  // Refresh token
  async refreshToken(): Promise<boolean> {
    try {
      if (!this.currentSession) return false;

      if (environmentConfig.isDevelopment) {
        // In development, just extend the current session
        const newExpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
        this.currentSession.expiresAt = newExpiresAt;
        this.saveSessionToStorage(this.currentSession);
        return true;
      }

      // Production token refresh
      const response = await fetch(`${environmentConfig.apiConfig.baseUrl}/auth/refresh`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.currentSession.token.refreshToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        this.clearSession();
        return false;
      }

      const data = await response.json();
      const newSession = this.createSession(this.currentSession.user, data.token);
      
      this.setCurrentSession(newSession);
      this.saveSessionToStorage(newSession);

      return true;
    } catch (error) {
      console.error('Token refresh error:', error);
      this.clearSession();
      return false;
    }
  }

  // Check if user has permission
  hasPermission(resource: Permission['resource'], action: Permission['actions'][0]): boolean {
    if (!this.currentSession) return false;

    const user = this.currentSession.user;
    if (user.role === 'admin') return true; // Admin has all permissions

    const permission = user.permissions.find(p => p.resource === resource);
    return permission ? permission.actions.includes(action) : false;
  }

  // Get current session
  getCurrentSession(): AuthSession | null {
    return this.currentSession;
  }

  // Get current user
  getCurrentUser(): User | null {
    return this.currentSession?.user || null;
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    if (!this.currentSession) return false;
    
    const now = new Date();
    const expiresAt = new Date(this.currentSession.expiresAt);
    
    return now < expiresAt;
  }

  // Check if session is expiring soon (within 5 minutes)
  isSessionExpiring(): boolean {
    if (!this.currentSession) return false;
    
    const now = new Date();
    const expiresAt = new Date(this.currentSession.expiresAt);
    const fiveMinutesFromNow = new Date(now.getTime() + 5 * 60 * 1000);
    
    return expiresAt < fiveMinutesFromNow;
  }

  // Private helper methods
  private createSession(user: User, token: AuthToken): AuthSession {
    const now = new Date();
    const expiresAt = new Date(now.getTime() + token.expiresIn * 1000);
    
    return {
      user: {
        ...user,
        lastLoginAt: now.toISOString()
      },
      token,
      issuedAt: now.toISOString(),
      expiresAt: expiresAt.toISOString()
    };
  }

  private setCurrentSession(session: AuthSession): void {
    this.currentSession = session;
  }

  private saveSessionToStorage(session: AuthSession): void {
    try {
      localStorage.setItem('auth_session', JSON.stringify(session));
    } catch (error) {
      console.warn('Failed to save session to storage:', error);
    }
  }

  private loadSessionFromStorage(): void {
    try {
      const stored = localStorage.getItem('auth_session');
      if (stored) {
        const session: AuthSession = JSON.parse(stored);
        
        // Check if session is still valid
        const now = new Date();
        const expiresAt = new Date(session.expiresAt);
        
        if (now < expiresAt) {
          this.currentSession = session;
        } else {
          localStorage.removeItem('auth_session');
        }
      }
    } catch (error) {
      console.warn('Failed to load session from storage:', error);
      localStorage.removeItem('auth_session');
    }
  }

  private clearSession(): void {
    this.currentSession = null;
    localStorage.removeItem('auth_session');
    
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
      this.refreshTimer = null;
    }
  }

  private setupTokenRefresh(): void {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
    }

    if (!this.currentSession) return;

    // Set up automatic token refresh 5 minutes before expiry
    const expiresAt = new Date(this.currentSession.expiresAt);
    const refreshAt = new Date(expiresAt.getTime() - 5 * 60 * 1000);
    const now = new Date();
    
    if (refreshAt > now) {
      const timeUntilRefresh = refreshAt.getTime() - now.getTime();
      
      this.refreshTimer = setTimeout(() => {
        this.refreshToken();
      }, timeUntilRefresh);
    }
  }

  private generateToken(user: User): string {
    // In production, this would be a proper JWT
    // For demo, we'll create a simple encoded token
    const payload = {
      userId: user.id,
      username: user.username,
      role: user.role,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
    };
    
    return btoa(JSON.stringify(payload));
  }

  private generateRefreshToken(): string {
    return btoa(JSON.stringify({
      type: 'refresh',
      iat: Math.floor(Date.now() / 1000),
      random: Math.random().toString(36)
    }));
  }

  private validateDemoToken(token: string): TokenValidationResult {
    try {
      const payload = JSON.parse(atob(token));
      
      if (payload.exp < Math.floor(Date.now() / 1000)) {
        return {
          isValid: false,
          error: 'Token expired'
        };
      }

      // In a real implementation, you'd fetch the user from database
      const user: User = {
        id: payload.userId,
        username: payload.username,
        role: payload.role,
        permissions: [], // Would be fetched from database
        createdAt: new Date().toISOString(),
        isActive: true
      };

      return {
        isValid: true,
        user
      };
    } catch (error) {
      return {
        isValid: false,
        error: 'Invalid token format'
      };
    }
  }
}

// Export singleton instance
export const authService = AuthenticationService.getInstance();
export default authService;