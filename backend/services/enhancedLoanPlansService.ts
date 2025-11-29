import { LoanPlan, LoanPlansResponse, LoanPlansFilters } from './loanPlansService';
import { loanPlansApi } from '../api/notion/loan-plans';
import { databaseService } from './databaseService';
import { environmentConfig } from '../config/environment.config';
import { authService } from './authService';

export interface EnhancedLoanPlan extends LoanPlan {
  // Additional fields for enhanced functionality
  approvalStatus: 'draft' | 'pending' | 'approved' | 'rejected';
  approvedBy?: string;
  approvedAt?: string;
  tags?: string[];
  priority: 'low' | 'medium' | 'high';
  visibility: 'public' | 'internal' | 'hidden';
  effectiveDate?: string;
  expiryDate?: string;
  auditTrail?: {
    createdBy: string;
    updatedBy: string;
    version: number;
    changeLog: Array<{
      field: string;
      oldValue: any;
      newValue: any;
      changedBy: string;
      changedAt: string;
    }>;
  };
}

export interface LoanPlanAnalytics {
  totalPlans: number;
  activeePlans: number;
  plansByCategory: Record<string, number>;
  averageInterestRate: number;
  mostPopularPlan: string;
  recentlyUpdated: EnhancedLoanPlan[];
  conversionRates: Record<string, number>;
}

export interface BulkOperation {
  operation: 'update' | 'delete' | 'activate' | 'deactivate';
  planIds: string[];
  updates?: Partial<EnhancedLoanPlan>;
}

export interface LoanPlanValidation {
  isValid: boolean;
  errors: Array<{
    field: string;
    message: string;
    severity: 'error' | 'warning';
  }>;
  warnings: Array<{
    field: string;
    message: string;
    suggestion?: string;
  }>;
}

class EnhancedLoanPlansService {
  private static instance: EnhancedLoanPlansService;
  private cache: Map<string, { data: any; timestamp: number; ttl: number }> = new Map();
  private eventListeners: Map<string, Array<(data: any) => void>> = new Map();

  private constructor() {}

  static getInstance(): EnhancedLoanPlansService {
    if (!EnhancedLoanPlansService.instance) {
      EnhancedLoanPlansService.instance = new EnhancedLoanPlansService();
    }
    return EnhancedLoanPlansService.instance;
  }

  // Enhanced loan plan retrieval with caching and analytics
  async getLoanPlans(filters: LoanPlansFilters = {}): Promise<LoanPlansResponse> {
    try {
      const cacheKey = this.getCacheKey('loan-plans', filters);
      const cached = this.getFromCache(cacheKey);
      
      if (cached) {
        this.emit('cache-hit', { key: cacheKey });
        return cached;
      }

      // Try API first, then fallback to database service
      let result: LoanPlansResponse;
      
      try {
        const apiResponse = await loanPlansApi.getLoanPlans(filters);
        if (apiResponse.success && apiResponse.data) {
          result = apiResponse.data;
        } else {
          throw new Error('API request failed');
        }
      } catch (apiError) {
        console.warn('API request failed, trying database service:', apiError);
        
        // Fallback to database service
        const dbResponse = await databaseService.findMany<EnhancedLoanPlan>('loan-plans', {
          filters,
          page: 1,
          limit: 100
        });
        
        if (dbResponse.success && dbResponse.data) {
          result = {
            plans: dbResponse.data as LoanPlan[],
            total: dbResponse.meta?.total || dbResponse.data.length,
            message: 'Retrieved from database'
          };
        } else {
          throw new Error('Both API and database requests failed');
        }
      }

      // Cache the result
      this.setCache(cacheKey, result, 300000); // 5 minutes TTL
      this.emit('data-loaded', { source: 'api', count: result.plans.length });

      return result;
    } catch (error) {
      console.error('Error in getLoanPlans:', error);
      this.emit('error', { method: 'getLoanPlans', error });
      throw error;
    }
  }

  // Enhanced loan plan creation with validation and audit
  async createLoanPlan(planData: Omit<EnhancedLoanPlan, 'id' | 'createdAt' | 'updatedAt'>): Promise<EnhancedLoanPlan> {
    try {
      // Check permissions
      if (!authService.hasPermission('loan-plans', 'create')) {
        throw new Error('Insufficient permissions to create loan plans');
      }

      // Validate the plan data
      const validation = await this.validateLoanPlan(planData);
      if (!validation.isValid) {
        const errorMessages = validation.errors.map(e => e.message).join(', ');
        throw new Error(`Validation failed: ${errorMessages}`);
      }

      // Add audit information
      const currentUser = authService.getCurrentUser();
      const enhancedPlanData: Omit<EnhancedLoanPlan, 'id' | 'createdAt' | 'updatedAt'> = {
        ...planData,
        approvalStatus: currentUser?.role === 'admin' ? 'approved' : 'pending',
        priority: planData.priority || 'medium',
        visibility: planData.visibility || 'public',
        auditTrail: {
          createdBy: currentUser?.id || 'system',
          updatedBy: currentUser?.id || 'system',
          version: 1,
          changeLog: []
        }
      };

      // Create via API
      const apiResponse = await loanPlansApi.createLoanPlan(enhancedPlanData);
      if (apiResponse.success && apiResponse.data) {
        // Clear relevant caches
        this.clearCachePattern('loan-plans');
        this.emit('plan-created', apiResponse.data);
        
        return apiResponse.data as EnhancedLoanPlan;
      }

      // Fallback to database service
      const dbResponse = await databaseService.create<EnhancedLoanPlan>('loan-plans', enhancedPlanData);
      if (dbResponse.success && dbResponse.data) {
        this.clearCachePattern('loan-plans');
        this.emit('plan-created', dbResponse.data);
        return dbResponse.data;
      }

      throw new Error('Failed to create loan plan');
    } catch (error) {
      console.error('Error creating loan plan:', error);
      this.emit('error', { method: 'createLoanPlan', error });
      throw error;
    }
  }

  // Enhanced loan plan update with change tracking
  async updateLoanPlan(id: string, updates: Partial<EnhancedLoanPlan>): Promise<EnhancedLoanPlan> {
    try {
      // Check permissions
      if (!authService.hasPermission('loan-plans', 'update')) {
        throw new Error('Insufficient permissions to update loan plans');
      }

      // Get existing plan for change tracking
      const existing = await this.getLoanPlanById(id);
      if (!existing) {
        throw new Error('Loan plan not found');
      }

      // Validate updates
      const validation = await this.validateLoanPlan({ ...existing, ...updates }, true);
      if (!validation.isValid) {
        const errorMessages = validation.errors.map(e => e.message).join(', ');
        throw new Error(`Validation failed: ${errorMessages}`);
      }

      // Track changes
      const currentUser = authService.getCurrentUser();
      const changeLog = this.generateChangeLog(existing, updates, currentUser?.id || 'system');
      
      const enhancedUpdates = {
        ...updates,
        auditTrail: {
          ...existing.auditTrail,
          updatedBy: currentUser?.id || 'system',
          version: (existing.auditTrail?.version || 1) + 1,
          changeLog: [...(existing.auditTrail?.changeLog || []), ...changeLog]
        }
      };

      // Update via API
      const apiResponse = await loanPlansApi.updateLoanPlan(id, enhancedUpdates);
      if (apiResponse.success && apiResponse.data) {
        this.clearCachePattern('loan-plans');
        this.emit('plan-updated', { id, changes: changeLog });
        return apiResponse.data as EnhancedLoanPlan;
      }

      // Fallback to database service
      const dbResponse = await databaseService.update<EnhancedLoanPlan>('loan-plans', id, enhancedUpdates);
      if (dbResponse.success && dbResponse.data) {
        this.clearCachePattern('loan-plans');
        this.emit('plan-updated', { id, changes: changeLog });
        return dbResponse.data;
      }

      throw new Error('Failed to update loan plan');
    } catch (error) {
      console.error('Error updating loan plan:', error);
      this.emit('error', { method: 'updateLoanPlan', error });
      throw error;
    }
  }

  // Enhanced loan plan deletion with soft delete option
  async deleteLoanPlan(id: string, softDelete: boolean = true): Promise<boolean> {
    try {
      // Check permissions
      if (!authService.hasPermission('loan-plans', 'delete')) {
        throw new Error('Insufficient permissions to delete loan plans');
      }

      if (softDelete) {
        // Soft delete by updating status
        await this.updateLoanPlan(id, { 
          status: 'inactive',
          visibility: 'hidden'
        });
        this.emit('plan-soft-deleted', { id });
        return true;
      } else {
        // Hard delete
        const apiResponse = await loanPlansApi.deleteLoanPlan(id);
        if (apiResponse.success) {
          this.clearCachePattern('loan-plans');
          this.emit('plan-deleted', { id });
          return true;
        }

        // Fallback to database service
        const dbResponse = await databaseService.delete('loan-plans', id);
        if (dbResponse.success) {
          this.clearCachePattern('loan-plans');
          this.emit('plan-deleted', { id });
          return true;
        }
      }

      return false;
    } catch (error) {
      console.error('Error deleting loan plan:', error);
      this.emit('error', { method: 'deleteLoanPlan', error });
      throw error;
    }
  }

  // Get loan plan by ID with enhanced error handling
  async getLoanPlanById(id: string): Promise<EnhancedLoanPlan | null> {
    try {
      const cacheKey = `loan-plan-${id}`;
      const cached = this.getFromCache(cacheKey);
      
      if (cached) {
        return cached;
      }

      // Try API first
      const apiResponse = await loanPlansApi.getLoanPlanById(id);
      if (apiResponse.success && apiResponse.data) {
        this.setCache(cacheKey, apiResponse.data, 300000);
        return apiResponse.data as EnhancedLoanPlan;
      }

      // Fallback to database service
      const dbResponse = await databaseService.findById<EnhancedLoanPlan>('loan-plans', id);
      if (dbResponse.success && dbResponse.data) {
        this.setCache(cacheKey, dbResponse.data, 300000);
        return dbResponse.data;
      }

      return null;
    } catch (error) {
      console.error('Error getting loan plan by ID:', error);
      this.emit('error', { method: 'getLoanPlanById', error });
      return null;
    }
  }

  // Bulk operations for multiple loan plans
  async performBulkOperation(operation: BulkOperation): Promise<{
    success: boolean;
    results: Array<{ id: string; success: boolean; error?: string }>;
  }> {
    try {
      // Check permissions
      const requiredAction = operation.operation === 'delete' ? 'delete' : 'update';
      if (!authService.hasPermission('loan-plans', requiredAction)) {
        throw new Error(`Insufficient permissions for ${operation.operation} operation`);
      }

      const results = [];

      for (const planId of operation.planIds) {
        try {
          switch (operation.operation) {
            case 'update':
              if (operation.updates) {
                await this.updateLoanPlan(planId, operation.updates);
              }
              break;
            case 'delete':
              await this.deleteLoanPlan(planId);
              break;
            case 'activate':
              await this.updateLoanPlan(planId, { status: 'active' });
              break;
            case 'deactivate':
              await this.updateLoanPlan(planId, { status: 'inactive' });
              break;
          }
          
          results.push({ id: planId, success: true });
        } catch (error) {
          results.push({ 
            id: planId, 
            success: false, 
            error: error instanceof Error ? error.message : 'Unknown error'
          });
        }
      }

      const successCount = results.filter(r => r.success).length;
      this.emit('bulk-operation-completed', { 
        operation: operation.operation, 
        total: operation.planIds.length, 
        successful: successCount 
      });

      return {
        success: successCount > 0,
        results
      };
    } catch (error) {
      console.error('Error performing bulk operation:', error);
      this.emit('error', { method: 'performBulkOperation', error });
      throw error;
    }
  }

  // Get analytics for loan plans
  async getAnalytics(): Promise<LoanPlanAnalytics> {
    try {
      const cacheKey = 'loan-plans-analytics';
      const cached = this.getFromCache(cacheKey);
      
      if (cached) {
        return cached;
      }

      const allPlans = await this.getLoanPlans({ activeOnly: false });
      
      const analytics: LoanPlanAnalytics = {
        totalPlans: allPlans.total,
        activeePlans: allPlans.plans.filter(p => p.status === 'active').length,
        plansByCategory: this.groupByCategory(allPlans.plans),
        averageInterestRate: this.calculateAverageInterestRate(allPlans.plans),
        mostPopularPlan: this.findMostPopularPlan(allPlans.plans),
        recentlyUpdated: this.getRecentlyUpdated(allPlans.plans as EnhancedLoanPlan[]),
        conversionRates: await this.getConversionRates(allPlans.plans)
      };

      this.setCache(cacheKey, analytics, 600000); // 10 minutes TTL
      return analytics;
    } catch (error) {
      console.error('Error getting analytics:', error);
      this.emit('error', { method: 'getAnalytics', error });
      throw error;
    }
  }

  // Validate loan plan data
  async validateLoanPlan(planData: Partial<EnhancedLoanPlan>, isUpdate: boolean = false): Promise<LoanPlanValidation> {
    const errors: LoanPlanValidation['errors'] = [];
    const warnings: LoanPlanValidation['warnings'] = [];

    // Required field validation
    if (!isUpdate) {
      if (!planData.name?.trim()) {
        errors.push({ field: 'name', message: 'Plan name is required', severity: 'error' });
      }
      if (typeof planData.interestRate !== 'number' || planData.interestRate <= 0) {
        errors.push({ field: 'interestRate', message: 'Interest rate must be a positive number', severity: 'error' });
      }
      if (typeof planData.loanToValue !== 'number' || planData.loanToValue <= 0 || planData.loanToValue > 100) {
        errors.push({ field: 'loanToValue', message: 'Loan to value must be between 1 and 100', severity: 'error' });
      }
    }

    // Business rule validation
    if (planData.interestRate && planData.interestRate > 25) {
      warnings.push({ 
        field: 'interestRate', 
        message: 'Interest rate is quite high', 
        suggestion: 'Consider if this rate is competitive in the market'
      });
    }

    if (planData.maxAmount && planData.minAmount && planData.maxAmount <= planData.minAmount) {
      errors.push({ field: 'maxAmount', message: 'Maximum amount must be greater than minimum amount', severity: 'error' });
    }

    if (planData.loanToValue && planData.loanToValue > 90) {
      warnings.push({ 
        field: 'loanToValue', 
        message: 'High LTV ratio may increase risk', 
        suggestion: 'Consider additional risk assessment criteria'
      });
    }

    // Check for duplicate names
    if (planData.name && !isUpdate) {
      const existingPlans = await this.getLoanPlans({});
      const duplicateName = existingPlans.plans.some(p => p.name.toLowerCase() === planData.name!.toLowerCase());
      if (duplicateName) {
        errors.push({ field: 'name', message: 'A plan with this name already exists', severity: 'error' });
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  // Event handling
  on(event: string, callback: (data: any) => void): void {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, []);
    }
    this.eventListeners.get(event)!.push(callback);
  }

  off(event: string, callback: (data: any) => void): void {
    const listeners = this.eventListeners.get(event);
    if (listeners) {
      const index = listeners.indexOf(callback);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    }
  }

  private emit(event: string, data: any): void {
    const listeners = this.eventListeners.get(event);
    if (listeners) {
      listeners.forEach(callback => {
        try {
          callback(data);
        } catch (error) {
          console.error('Error in event listener:', error);
        }
      });
    }
  }

  // Helper methods
  private getCacheKey(prefix: string, data: any): string {
    return `${prefix}-${JSON.stringify(data)}`;
  }

  private getFromCache(key: string): any | null {
    if (!environmentConfig.featureFlags.enableCache) return null;
    
    const cached = this.cache.get(key);
    if (!cached) return null;
    
    if (Date.now() > cached.timestamp + cached.ttl) {
      this.cache.delete(key);
      return null;
    }
    
    return cached.data;
  }

  private setCache(key: string, data: any, ttl: number): void {
    if (!environmentConfig.featureFlags.enableCache) return;
    
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  }

  private clearCachePattern(pattern: string): void {
    for (const key of this.cache.keys()) {
      if (key.includes(pattern)) {
        this.cache.delete(key);
      }
    }
  }

  private generateChangeLog(existing: any, updates: any, userId: string): any[] {
    const changeLog = [];
    const timestamp = new Date().toISOString();
    
    for (const [field, newValue] of Object.entries(updates)) {
      if (field !== 'auditTrail' && existing[field] !== newValue) {
        changeLog.push({
          field,
          oldValue: existing[field],
          newValue,
          changedBy: userId,
          changedAt: timestamp
        });
      }
    }
    
    return changeLog;
  }

  private groupByCategory(plans: LoanPlan[]): Record<string, number> {
    return plans.reduce((acc, plan) => {
      acc[plan.category] = (acc[plan.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }

  private calculateAverageInterestRate(plans: LoanPlan[]): number {
    if (plans.length === 0) return 0;
    const sum = plans.reduce((acc, plan) => acc + plan.interestRate, 0);
    return sum / plans.length;
  }

  private findMostPopularPlan(plans: LoanPlan[]): string {
    const popularPlan = plans.find(p => p.isPopular);
    return popularPlan ? popularPlan.name : plans[0]?.name || '';
  }

  private getRecentlyUpdated(plans: EnhancedLoanPlan[]): EnhancedLoanPlan[] {
    return plans
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      .slice(0, 5);
  }

  private async getConversionRates(plans: LoanPlan[]): Promise<Record<string, number>> {
    // Mock conversion rates - in production, this would come from analytics
    const rates: Record<string, number> = {};
    plans.forEach(plan => {
      rates[plan.id] = Math.random() * 0.3 + 0.1; // Random rate between 10-40%
    });
    return rates;
  }
}

// Export singleton instance
export const enhancedLoanPlansService = EnhancedLoanPlansService.getInstance();
export default enhancedLoanPlansService;