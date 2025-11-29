import { LoanPlan, LoanPlansResponse, LoanPlansFilters } from '../../services/loanPlansService';
import { loanPlansService } from '../../services/loanPlansService';

// Database models and types
export interface DatabaseLoanPlan extends LoanPlan {
  createdBy?: string;
  updatedBy?: string;
  version?: number;
  metadata?: {
    source?: string;
    tags?: string[];
    approvedBy?: string;
    approvalDate?: string;
  };
}

export interface CreateLoanPlanRequest {
  name: string;
  interestRate: number;
  maxTenure: number;
  minAmount: number;
  maxAmount: number;
  processingFee: number;
  loanToValue: number;
  features: string[];
  specialOffer?: string;
  isPopular?: boolean;
  category: 'basic' | 'premium' | 'elite';
  status: 'active' | 'inactive';
}

export interface UpdateLoanPlanRequest extends Partial<CreateLoanPlanRequest> {
  version?: number; // For optimistic locking
}

export interface LoanPlanQueryParams extends LoanPlansFilters {
  page?: number;
  limit?: number;
  sortBy?: 'name' | 'interestRate' | 'maxTenure' | 'createdAt' | 'updatedAt';
  sortOrder?: 'asc' | 'desc';
  search?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    hasNext?: boolean;
    hasPrevious?: boolean;
  };
}

class LoanPlansApiService {
  private baseUrl: string;
  private apiKey: string;

  constructor(baseUrl: string = '/api/v1', apiKey: string = '') {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  // GET /api/v1/loan-plans
  async getLoanPlans(params: LoanPlanQueryParams = {}): Promise<ApiResponse<LoanPlansResponse>> {
    try {
      const queryString = this.buildQueryString(params);
      const response = await this.makeRequest(`${this.baseUrl}/loan-plans${queryString}`, {
        method: 'GET'
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        success: true,
        data: data,
        meta: {
          page: params.page || 1,
          limit: params.limit || 10,
          total: data.total,
          hasNext: data.hasNext,
          hasPrevious: data.hasPrevious
        }
      };
    } catch (error) {
      console.error('Error fetching loan plans:', error);
      
      // Fallback to service layer
      try {
        const fallbackData = await loanPlansService.getLoanPlans(params);
        return {
          success: true,
          data: fallbackData,
          meta: {
            page: 1,
            limit: fallbackData.plans.length,
            total: fallbackData.total,
            hasNext: false,
            hasPrevious: false
          }
        };
      } catch (fallbackError) {
        return {
          success: false,
          error: {
            code: 'FETCH_ERROR',
            message: 'Failed to fetch loan plans',
            details: error
          }
        };
      }
    }
  }

  // GET /api/v1/loan-plans/:id
  async getLoanPlanById(id: string): Promise<ApiResponse<DatabaseLoanPlan>> {
    try {
      const response = await this.makeRequest(`${this.baseUrl}/loan-plans/${id}`, {
        method: 'GET'
      });

      if (response.status === 404) {
        return {
          success: false,
          error: {
            code: 'NOT_FOUND',
            message: 'Loan plan not found'
          }
        };
      }

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        success: true,
        data: data.plan
      };
    } catch (error) {
      console.error('Error fetching loan plan:', error);
      
      // Fallback to service layer
      try {
        const fallbackPlan = await loanPlansService.getLoanPlanById(id);
        if (!fallbackPlan) {
          return {
            success: false,
            error: {
              code: 'NOT_FOUND',
              message: 'Loan plan not found'
            }
          };
        }
        
        return {
          success: true,
          data: fallbackPlan as DatabaseLoanPlan
        };
      } catch (fallbackError) {
        return {
          success: false,
          error: {
            code: 'FETCH_ERROR',
            message: 'Failed to fetch loan plan',
            details: error
          }
        };
      }
    }
  }

  // POST /api/v1/loan-plans
  async createLoanPlan(planData: CreateLoanPlanRequest): Promise<ApiResponse<DatabaseLoanPlan>> {
    try {
      // Validate input
      const validation = this.validateLoanPlanData(planData);
      if (!validation.isValid) {
        return {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid loan plan data',
            details: validation.errors
          }
        };
      }

      const response = await this.makeRequest(`${this.baseUrl}/loan-plans`, {
        method: 'POST',
        body: JSON.stringify({
          ...planData,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          version: 1
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        success: true,
        data: data.plan
      };
    } catch (error) {
      console.error('Error creating loan plan:', error);
      return {
        success: false,
        error: {
          code: 'CREATE_ERROR',
          message: 'Failed to create loan plan',
          details: error
        }
      };
    }
  }

  // PUT /api/v1/loan-plans/:id
  async updateLoanPlan(id: string, updates: UpdateLoanPlanRequest): Promise<ApiResponse<DatabaseLoanPlan>> {
    try {
      // Validate input
      const validation = this.validateLoanPlanData(updates, true);
      if (!validation.isValid) {
        return {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid loan plan data',
            details: validation.errors
          }
        };
      }

      const response = await this.makeRequest(`${this.baseUrl}/loan-plans/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          ...updates,
          updatedAt: new Date().toISOString()
        })
      });

      if (response.status === 404) {
        return {
          success: false,
          error: {
            code: 'NOT_FOUND',
            message: 'Loan plan not found'
          }
        };
      }

      if (response.status === 409) {
        return {
          success: false,
          error: {
            code: 'CONFLICT',
            message: 'Loan plan has been modified by another user'
          }
        };
      }

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        success: true,
        data: data.plan
      };
    } catch (error) {
      console.error('Error updating loan plan:', error);
      return {
        success: false,
        error: {
          code: 'UPDATE_ERROR',
          message: 'Failed to update loan plan',
          details: error
        }
      };
    }
  }

  // DELETE /api/v1/loan-plans/:id
  async deleteLoanPlan(id: string): Promise<ApiResponse<{ deleted: boolean }>> {
    try {
      const response = await this.makeRequest(`${this.baseUrl}/loan-plans/${id}`, {
        method: 'DELETE'
      });

      if (response.status === 404) {
        return {
          success: false,
          error: {
            code: 'NOT_FOUND',
            message: 'Loan plan not found'
          }
        };
      }

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return {
        success: true,
        data: { deleted: true }
      };
    } catch (error) {
      console.error('Error deleting loan plan:', error);
      return {
        success: false,
        error: {
          code: 'DELETE_ERROR',
          message: 'Failed to delete loan plan',
          details: error
        }
      };
    }
  }

  // Batch operations
  async batchUpdateLoanPlans(updates: Array<{ id: string; data: UpdateLoanPlanRequest }>): Promise<ApiResponse<DatabaseLoanPlan[]>> {
    try {
      const response = await this.makeRequest(`${this.baseUrl}/loan-plans/batch`, {
        method: 'PUT',
        body: JSON.stringify({ updates })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        success: true,
        data: data.plans
      };
    } catch (error) {
      console.error('Error batch updating loan plans:', error);
      return {
        success: false,
        error: {
          code: 'BATCH_UPDATE_ERROR',
          message: 'Failed to batch update loan plans',
          details: error
        }
      };
    }
  }

  // Helper methods
  private async makeRequest(url: string, options: RequestInit): Promise<Response> {
    const headers = new Headers(options.headers);
    headers.set('Content-Type', 'application/json');
    
    if (this.apiKey) {
      headers.set('Authorization', `Bearer ${this.apiKey}`);
    }
    
    headers.set('X-API-Version', '1.0');
    headers.set('X-Client-Version', '1.0.0');

    return fetch(url, {
      ...options,
      headers
    });
  }

  private buildQueryString(params: LoanPlanQueryParams): string {
    const searchParams = new URLSearchParams();
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        searchParams.set(key, value.toString());
      }
    });

    const queryString = searchParams.toString();
    return queryString ? `?${queryString}` : '';
  }

  private validateLoanPlanData(data: CreateLoanPlanRequest | UpdateLoanPlanRequest, isUpdate: boolean = false): {
    isValid: boolean;
    errors: string[];
  } {
    const errors: string[] = [];

    if (!isUpdate) {
      // Required fields for creation
      if (!data.name?.trim()) errors.push('Name is required');
      if (typeof data.interestRate !== 'number' || data.interestRate <= 0) errors.push('Interest rate must be a positive number');
      if (typeof data.maxTenure !== 'number' || data.maxTenure <= 0) errors.push('Max tenure must be a positive number');
      if (typeof data.minAmount !== 'number' || data.minAmount <= 0) errors.push('Min amount must be a positive number');
      if (typeof data.maxAmount !== 'number' || data.maxAmount <= data.minAmount!) errors.push('Max amount must be greater than min amount');
      if (typeof data.loanToValue !== 'number' || data.loanToValue <= 0 || data.loanToValue > 100) errors.push('Loan to value must be between 1 and 100');
      if (!Array.isArray(data.features) || data.features.length === 0) errors.push('At least one feature is required');
      if (!['basic', 'premium', 'elite'].includes(data.category!)) errors.push('Category must be basic, premium, or elite');
      if (!['active', 'inactive'].includes(data.status!)) errors.push('Status must be active or inactive');
    } else {
      // Validation for updates (optional fields)
      if (data.name !== undefined && !data.name?.trim()) errors.push('Name cannot be empty');
      if (data.interestRate !== undefined && (typeof data.interestRate !== 'number' || data.interestRate <= 0)) errors.push('Interest rate must be a positive number');
      if (data.maxTenure !== undefined && (typeof data.maxTenure !== 'number' || data.maxTenure <= 0)) errors.push('Max tenure must be a positive number');
      if (data.minAmount !== undefined && (typeof data.minAmount !== 'number' || data.minAmount <= 0)) errors.push('Min amount must be a positive number');
      if (data.maxAmount !== undefined && data.minAmount !== undefined && data.maxAmount <= data.minAmount) errors.push('Max amount must be greater than min amount');
      if (data.loanToValue !== undefined && (typeof data.loanToValue !== 'number' || data.loanToValue <= 0 || data.loanToValue > 100)) errors.push('Loan to value must be between 1 and 100');
      if (data.features !== undefined && (!Array.isArray(data.features) || data.features.length === 0)) errors.push('At least one feature is required');
      if (data.category !== undefined && !['basic', 'premium', 'elite'].includes(data.category)) errors.push('Category must be basic, premium, or elite');
      if (data.status !== undefined && !['active', 'inactive'].includes(data.status)) errors.push('Status must be active or inactive');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

// Export singleton instance
export const loanPlansApi = new LoanPlansApiService();
export default loanPlansApi;