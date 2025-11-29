import { DatabaseLoanPlan, CreateLoanPlanRequest, UpdateLoanPlanRequest } from '../api/notion/loan-plans';

export interface DatabaseConfig {
  provider: 'notion' | 'firebase' | 'supabase' | 'postgres' | 'mongodb';
  connectionString?: string;
  apiKey?: string;
  databaseId?: string;
  options?: {
    enableCache?: boolean;
    cacheTimeout?: number;
    enableBackup?: boolean;
    enableAudit?: boolean;
  };
}

export interface QueryOptions {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  filters?: Record<string, any>;
  search?: string;
}

export interface DatabaseResult<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  meta?: {
    total?: number;
    page?: number;
    limit?: number;
    hasNext?: boolean;
    hasPrevious?: boolean;
  };
}

export interface AuditLog {
  id: string;
  entityType: string;
  entityId: string;
  action: 'create' | 'update' | 'delete' | 'read';
  userId?: string;
  timestamp: string;
  changes?: {
    before?: any;
    after?: any;
  };
  metadata?: {
    ipAddress?: string;
    userAgent?: string;
    source?: string;
  };
}

abstract class BaseDatabaseService {
  protected config: DatabaseConfig;
  protected cache: Map<string, { data: any; timestamp: number }> = new Map();

  constructor(config: DatabaseConfig) {
    this.config = config;
  }

  // Abstract methods that must be implemented by specific database providers
  abstract connect(): Promise<boolean>;
  abstract disconnect(): Promise<void>;
  abstract health(): Promise<boolean>;

  // Generic CRUD operations
  abstract create<T>(table: string, data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<DatabaseResult<T>>;
  abstract findById<T>(table: string, id: string): Promise<DatabaseResult<T>>;
  abstract findMany<T>(table: string, options?: QueryOptions): Promise<DatabaseResult<T[]>>;
  abstract update<T>(table: string, id: string, data: Partial<T>): Promise<DatabaseResult<T>>;
  abstract delete(table: string, id: string): Promise<DatabaseResult<boolean>>;
  abstract search<T>(table: string, query: string, options?: QueryOptions): Promise<DatabaseResult<T[]>>;

  // Cache management
  protected getCacheKey(table: string, id?: string, options?: QueryOptions): string {
    const optionsStr = options ? JSON.stringify(options) : '';
    return `${table}:${id || 'all'}:${optionsStr}`;
  }

  protected setCache(key: string, data: any): void {
    if (this.config.options?.enableCache) {
      this.cache.set(key, {
        data,
        timestamp: Date.now()
      });
    }
  }

  protected getCache(key: string): any | null {
    if (!this.config.options?.enableCache) return null;

    const cached = this.cache.get(key);
    if (!cached) return null;

    const timeout = this.config.options?.cacheTimeout || 300000; // 5 minutes default
    if (Date.now() - cached.timestamp > timeout) {
      this.cache.delete(key);
      return null;
    }

    return cached.data;
  }

  protected clearCache(pattern?: string): void {
    if (pattern) {
      for (const key of this.cache.keys()) {
        if (key.includes(pattern)) {
          this.cache.delete(key);
        }
      }
    } else {
      this.cache.clear();
    }
  }

  // Audit logging
  protected async logAudit(log: Omit<AuditLog, 'id' | 'timestamp'>): Promise<void> {
    if (!this.config.options?.enableAudit) return;

    try {
      const auditLog: AuditLog = {
        ...log,
        id: this.generateId(),
        timestamp: new Date().toISOString()
      };

      // Store audit log (implementation depends on database provider)
      await this.storeAuditLog(auditLog);
    } catch (error) {
      console.error('Failed to log audit:', error);
    }
  }

  protected abstract storeAuditLog(log: AuditLog): Promise<void>;

  // Utility methods
  protected generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  protected validateRequired(data: any, requiredFields: string[]): string[] {
    const errors: string[] = [];
    requiredFields.forEach(field => {
      if (!data[field]) {
        errors.push(`${field} is required`);
      }
    });
    return errors;
  }
}

// Notion Database Service Implementation
class NotionDatabaseService extends BaseDatabaseService {
  private notionClient: any = null;

  constructor(config: DatabaseConfig) {
    super(config);
  }

  async connect(): Promise<boolean> {
    try {
      // Initialize Notion client (would require @notionhq/client package)
      // For now, we'll simulate the connection
      console.log('Connecting to Notion database...');
      return true;
    } catch (error) {
      console.error('Failed to connect to Notion:', error);
      return false;
    }
  }

  async disconnect(): Promise<void> {
    this.notionClient = null;
    this.clearCache();
  }

  async health(): Promise<boolean> {
    try {
      // Check if the database is accessible
      return this.notionClient !== null;
    } catch (error) {
      return false;
    }
  }

  async create<T>(table: string, data: any): Promise<DatabaseResult<T>> {
    try {
      const timestamp = new Date().toISOString();
      const newItem = {
        id: this.generateId(),
        ...data,
        createdAt: timestamp,
        updatedAt: timestamp
      };

      // In a real implementation, this would create a page in Notion
      console.log(`Creating ${table} item:`, newItem);

      // Log audit
      await this.logAudit({
        entityType: table,
        entityId: newItem.id,
        action: 'create',
        changes: { after: newItem }
      });

      // Clear cache for this table
      this.clearCache(table);

      return {
        success: true,
        data: newItem as T
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: 'CREATE_FAILED',
          message: 'Failed to create item',
          details: error
        }
      };
    }
  }

  async findById<T>(table: string, id: string): Promise<DatabaseResult<T>> {
    try {
      const cacheKey = this.getCacheKey(table, id);
      const cached = this.getCache(cacheKey);
      if (cached) {
        return { success: true, data: cached };
      }

      // In a real implementation, this would query Notion database
      console.log(`Finding ${table} item by ID:`, id);

      // Simulate finding an item (replace with real Notion query)
      const mockItem = this.createMockItem(table, id);
      
      if (mockItem) {
        this.setCache(cacheKey, mockItem);
        
        // Log audit
        await this.logAudit({
          entityType: table,
          entityId: id,
          action: 'read'
        });

        return {
          success: true,
          data: mockItem as T
        };
      }

      return {
        success: false,
        error: {
          code: 'NOT_FOUND',
          message: 'Item not found'
        }
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: 'QUERY_FAILED',
          message: 'Failed to query item',
          details: error
        }
      };
    }
  }

  async findMany<T>(table: string, options: QueryOptions = {}): Promise<DatabaseResult<T[]>> {
    try {
      const cacheKey = this.getCacheKey(table, undefined, options);
      const cached = this.getCache(cacheKey);
      if (cached) {
        return { success: true, data: cached.data, meta: cached.meta };
      }

      // In a real implementation, this would query Notion database with filters
      console.log(`Finding ${table} items with options:`, options);

      // Simulate querying items (replace with real Notion query)
      const mockItems = this.createMockItems(table, options);
      const total = mockItems.length;
      const page = options.page || 1;
      const limit = options.limit || 10;
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedItems = mockItems.slice(startIndex, endIndex);

      const result = {
        data: paginatedItems as T[],
        meta: {
          total,
          page,
          limit,
          hasNext: endIndex < total,
          hasPrevious: page > 1
        }
      };

      this.setCache(cacheKey, result);

      return {
        success: true,
        ...result
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: 'QUERY_FAILED',
          message: 'Failed to query items',
          details: error
        }
      };
    }
  }

  async update<T>(table: string, id: string, data: Partial<T>): Promise<DatabaseResult<T>> {
    try {
      // Get existing item first
      const existing = await this.findById<T>(table, id);
      if (!existing.success || !existing.data) {
        return {
          success: false,
          error: {
            code: 'NOT_FOUND',
            message: 'Item not found'
          }
        };
      }

      const updatedItem = {
        ...existing.data,
        ...data,
        updatedAt: new Date().toISOString()
      };

      // In a real implementation, this would update a page in Notion
      console.log(`Updating ${table} item:`, id, data);

      // Log audit
      await this.logAudit({
        entityType: table,
        entityId: id,
        action: 'update',
        changes: {
          before: existing.data,
          after: updatedItem
        }
      });

      // Clear cache for this table
      this.clearCache(table);

      return {
        success: true,
        data: updatedItem
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: 'UPDATE_FAILED',
          message: 'Failed to update item',
          details: error
        }
      };
    }
  }

  async delete(table: string, id: string): Promise<DatabaseResult<boolean>> {
    try {
      // Get existing item first for audit log
      const existing = await this.findById(table, id);
      
      // In a real implementation, this would archive a page in Notion
      console.log(`Deleting ${table} item:`, id);

      // Log audit
      await this.logAudit({
        entityType: table,
        entityId: id,
        action: 'delete',
        changes: {
          before: existing.data
        }
      });

      // Clear cache for this table
      this.clearCache(table);

      return {
        success: true,
        data: true
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: 'DELETE_FAILED',
          message: 'Failed to delete item',
          details: error
        }
      };
    }
  }

  async search<T>(table: string, query: string, options: QueryOptions = {}): Promise<DatabaseResult<T[]>> {
    try {
      // In a real implementation, this would perform a full-text search in Notion
      console.log(`Searching ${table} for:`, query);

      const allItems = this.createMockItems(table, {});
      const filteredItems = allItems.filter(item => 
        JSON.stringify(item).toLowerCase().includes(query.toLowerCase())
      );

      return {
        success: true,
        data: filteredItems as T[],
        meta: {
          total: filteredItems.length
        }
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: 'SEARCH_FAILED',
          message: 'Failed to search items',
          details: error
        }
      };
    }
  }

  protected async storeAuditLog(log: AuditLog): Promise<void> {
    // In a real implementation, this would store the audit log in Notion or a separate audit table
    console.log('Audit log:', log);
  }

  // Mock data methods (replace with real Notion queries)
  private createMockItem(table: string, id: string): any | null {
    if (table === 'loan-plans') {
      return {
        id,
        name: `Mock Plan ${id}`,
        interestRate: 9.5,
        maxTenure: 24,
        minAmount: 50000,
        maxAmount: 500000,
        processingFee: 0,
        loanToValue: 75,
        features: ['Mock feature 1', 'Mock feature 2'],
        category: 'premium',
        status: 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
    }
    return null;
  }

  private createMockItems(table: string, options: QueryOptions): any[] {
    if (table === 'loan-plans') {
      return [
        {
          id: 'mock-1',
          name: 'Mock Plan 1',
          interestRate: 9.5,
          maxTenure: 24,
          minAmount: 50000,
          maxAmount: 500000,
          processingFee: 0,
          loanToValue: 75,
          features: ['Feature 1', 'Feature 2'],
          category: 'premium',
          status: 'active',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 'mock-2',
          name: 'Mock Plan 2',
          interestRate: 8.5,
          maxTenure: 36,
          minAmount: 100000,
          maxAmount: 1000000,
          processingFee: 0,
          loanToValue: 80,
          features: ['Feature A', 'Feature B'],
          category: 'elite',
          status: 'active',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ];
    }
    return [];
  }
}

// Database factory
export class DatabaseServiceFactory {
  static create(config: DatabaseConfig): BaseDatabaseService {
    switch (config.provider) {
      case 'notion':
        return new NotionDatabaseService(config);
      // Add other providers as needed
      // case 'firebase':
      //   return new FirebaseDatabaseService(config);
      // case 'supabase':
      //   return new SupabaseDatabaseService(config);
      default:
        throw new Error(`Unsupported database provider: ${config.provider}`);
    }
  }
}

// Export default database service instance
const defaultConfig: DatabaseConfig = {
  provider: 'notion',
  apiKey: process.env.NOTION_API_KEY || '',
  databaseId: process.env.NOTION_DATABASE_ID || '',
  options: {
    enableCache: true,
    cacheTimeout: 300000, // 5 minutes
    enableBackup: true,
    enableAudit: true
  }
};

export const databaseService = DatabaseServiceFactory.create(defaultConfig);
export default databaseService;