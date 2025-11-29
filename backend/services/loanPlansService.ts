import { appConfig } from '../config/app.config';

export interface LoanPlan {
  id: string;
  name: string;
  interestRate: number;
  maxTenure: number;
  minAmount: number;
  maxAmount: number;
  processingFee: number;
  loanToValue: number; // New field: LTV percentage (e.g., 75 for 75%)
  features: string[];
  specialOffer?: string;
  isPopular?: boolean;
  category: 'basic' | 'premium' | 'elite';
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface LoanPlansResponse {
  plans: LoanPlan[];
  total: number;
  message?: string;
}

export interface LoanPlansFilters {
  loanAmount?: number;
  category?: string;
  minInterestRate?: number;
  maxInterestRate?: number;
  minTenure?: number;
  maxTenure?: number;
  minLTV?: number;
  maxLTV?: number;
  activeOnly?: boolean;
}

class LoanPlansService {
  // Get loan plans filtered by loan amount and other criteria
  async getLoanPlans(filters: LoanPlansFilters = {}): Promise<LoanPlansResponse> {
    // Check if we should use API or mock data
    const useApi = appConfig.api.baseUrl && 
                   appConfig.api.key && 
                   appConfig.api.baseUrl !== 'https://api.yourdomain.com' &&
                   appConfig.api.key !== 'YOUR_API_KEY_HERE';
    
    if (!useApi) {
      // Use mock data by default
      return this.getMockLoanPlans(filters);
    }

    try {
      const queryParams = new URLSearchParams();
      
      if (filters.loanAmount) queryParams.set('loanAmount', filters.loanAmount.toString());
      if (filters.category) queryParams.set('category', filters.category);
      if (filters.minInterestRate) queryParams.set('minInterestRate', filters.minInterestRate.toString());
      if (filters.maxInterestRate) queryParams.set('maxInterestRate', filters.maxInterestRate.toString());
      if (filters.minTenure) queryParams.set('minTenure', filters.minTenure.toString());
      if (filters.maxTenure) queryParams.set('maxTenure', filters.maxTenure.toString());
      if (filters.minLTV) queryParams.set('minLTV', filters.minLTV.toString());
      if (filters.maxLTV) queryParams.set('maxLTV', filters.maxLTV.toString());
      if (filters.activeOnly !== undefined) queryParams.set('activeOnly', filters.activeOnly.toString());

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), appConfig.api.timeout);

      try {
        const response = await fetch(
          `${appConfig.api.baseUrl}/api/v1/loan-plans?${queryParams.toString()}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${appConfig.api.key}`,
              'X-API-Version': '1.0'
            },
            signal: controller.signal
          }
        );

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        const data: LoanPlansResponse = await response.json();
        return data;
      } catch (error) {
        clearTimeout(timeoutId);
        throw error;
      }
    } catch (error) {
      console.error('Error fetching loan plans:', error);
      
      // Fallback to mock data in case of API failure
      return this.getMockLoanPlans(filters);
    }
  }

  // Get a specific loan plan by ID
  async getLoanPlanById(id: string): Promise<LoanPlan | null> {
    // Check if we should use API or mock data
    const useApi = appConfig.api.baseUrl && 
                   appConfig.api.key && 
                   appConfig.api.baseUrl !== 'https://api.yourdomain.com' &&
                   appConfig.api.key !== 'YOUR_API_KEY_HERE';
    
    if (!useApi) {
      // Use mock data by default
      const mockResponse = this.getMockLoanPlans({});
      return mockResponse.plans.find(plan => plan.id === id) || null;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), appConfig.api.timeout);

      try {
        const response = await fetch(
          `${appConfig.api.baseUrl}/api/v1/loan-plans/${id}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${appConfig.api.key}`,
              'X-API-Version': '1.0'
            },
            signal: controller.signal
          }
        );

        clearTimeout(timeoutId);

        if (!response.ok) {
          if (response.status === 404) {
            return null;
          }
          throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        const data: { plan: LoanPlan } = await response.json();
        return data.plan;
      } catch (error) {
        clearTimeout(timeoutId);
        throw error;
      }
    } catch (error) {
      console.error('Error fetching loan plan:', error);
      // Fallback to mock data
      const mockResponse = this.getMockLoanPlans({});
      return mockResponse.plans.find(plan => plan.id === id) || null;
    }
  }

  // Create a new loan plan (admin functionality)
  async createLoanPlan(plan: Omit<LoanPlan, 'id' | 'createdAt' | 'updatedAt'>): Promise<LoanPlan> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), appConfig.api.timeout);

      try {
        const response = await fetch(
          `${appConfig.api.baseUrl}/api/v1/loan-plans`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${appConfig.api.key}`,
              'X-API-Version': '1.0'
            },
            body: JSON.stringify(plan),
            signal: controller.signal
          }
        );

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        const data: { plan: LoanPlan } = await response.json();
        return data.plan;
      } catch (error) {
        clearTimeout(timeoutId);
        throw error;
      }
    } catch (error) {
      console.error('Error creating loan plan:', error);
      throw error;
    }
  }

  // Update an existing loan plan (admin functionality)
  async updateLoanPlan(id: string, updates: Partial<LoanPlan>): Promise<LoanPlan> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), appConfig.api.timeout);

      try {
        const response = await fetch(
          `${appConfig.api.baseUrl}/api/v1/loan-plans/${id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${appConfig.api.key}`,
              'X-API-Version': '1.0'
            },
            body: JSON.stringify(updates),
            signal: controller.signal
          }
        );

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        const data: { plan: LoanPlan } = await response.json();
        return data.plan;
      } catch (error) {
        clearTimeout(timeoutId);
        throw error;
      }
    } catch (error) {
      console.error('Error updating loan plan:', error);
      throw error;
    }
  }

  // Delete a loan plan (admin functionality)
  async deleteLoanPlan(id: string): Promise<boolean> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), appConfig.api.timeout);

      try {
        const response = await fetch(
          `${appConfig.api.baseUrl}/api/v1/loan-plans/${id}`,
          {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${appConfig.api.key}`,
              'X-API-Version': '1.0'
            },
            signal: controller.signal
          }
        );

        clearTimeout(timeoutId);
        return response.ok;
      } catch (error) {
        clearTimeout(timeoutId);
        throw error;
      }
    } catch (error) {
      console.error('Error deleting loan plan:', error);
      return false;
    }
  }

  // Method to update API configuration at runtime
  updateConfig(apiBaseUrl?: string, apiKey?: string): void {
    if (apiBaseUrl || apiKey) {
      appConfig.updateApiConfig(apiBaseUrl, apiKey);
    }
  }

  // Fallback mock data for development/testing
  private getMockLoanPlans(filters: LoanPlansFilters): LoanPlansResponse {
    const mockPlans: LoanPlan[] = [
      {
        id: 'basic-1',
        name: 'Quick Cash Plan',
        interestRate: 12,
        maxTenure: 12,
        minAmount: 10000,
        maxAmount: 100000,
        processingFee: 0.5,
        loanToValue: 70, // 70% LTV for basic plan
        features: [
          'Quick approval in 30 minutes',
          'Minimal documentation',
          'Flexible repayment',
          'No hidden charges'
        ],
        category: 'basic',
        status: 'active',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z'
      },
      {
        id: 'basic-2',
        name: 'Standard Gold Loan',
        interestRate: 10.5,
        maxTenure: 18,
        minAmount: 25000,
        maxAmount: 150000,
        processingFee: 0.75,
        loanToValue: 72, // 72% LTV for standard plan
        features: [
          'Competitive interest rate',
          'Up to 18 months tenure',
          'Online account management',
          'Part payment facility'
        ],
        category: 'basic',
        status: 'active',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z'
      },
      {
        id: 'premium-1',
        name: 'Premium Gold Plus',
        interestRate: 9.5,
        maxTenure: 24,
        minAmount: 50000,
        maxAmount: 500000,
        processingFee: 0,
        loanToValue: 75, // 75% LTV for premium plan
        features: [
          'Zero processing fee',
          'Priority customer service',
          'Extended tenure options',
          'Gold price protection',
          'Free gold valuation'
        ],
        specialOffer: 'First 3 months at 8.5% interest',
        isPopular: true,
        category: 'premium',
        status: 'active',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z'
      },
      {
        id: 'premium-2',
        name: 'Business Growth Loan',
        interestRate: 9,
        maxTenure: 36,
        minAmount: 100000,
        maxAmount: 750000,
        processingFee: 0,
        loanToValue: 78, // 78% LTV for business plan
        features: [
          'Lowest interest rate',
          'Extended 3-year tenure',
          'Business-focused features',
          'Bulk payment discounts',
          'Dedicated relationship manager'
        ],
        specialOffer: 'Additional 0.5% discount for businesses',
        category: 'premium',
        status: 'active',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z'
      },
      {
        id: 'elite-1',
        name: 'Elite Gold Reserve',
        interestRate: 8.5,
        maxTenure: 60,
        minAmount: 200000,
        maxAmount: 2000000,
        processingFee: 0,
        loanToValue: 80, // 80% LTV for elite plan
        features: [
          'Ultra-low interest rate',
          'Up to 5 years tenure',
          'Concierge banking services',
          'Investment advisory',
          'Insurance coverage',
          'Gold buyback guarantee'
        ],
        specialOffer: 'Complimentary gold storage for 1 year',
        isPopular: true,
        category: 'elite',
        status: 'active',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z'
      },
      {
        id: 'elite-2',
        name: 'Platinum Wealth Loan',
        interestRate: 8,
        maxTenure: 84,
        minAmount: 500000,
        maxAmount: 5000000,
        processingFee: 0,
        loanToValue: 85, // 85% LTV for premium elite plan
        features: [
          'Best-in-class interest rate',
          'Up to 7 years tenure',
          'White-glove service',
          'Wealth management services',
          'Tax advisory support',
          'Premium lounge access'
        ],
        specialOffer: 'Personal financial advisor included',
        category: 'elite',
        status: 'active',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z'
      }
    ];

    // Filter mock data based on criteria
    let filteredPlans = mockPlans;

    if (filters.loanAmount) {
      filteredPlans = filteredPlans.filter(plan => 
        filters.loanAmount! >= plan.minAmount && filters.loanAmount! <= plan.maxAmount
      );
    }

    if (filters.category) {
      filteredPlans = filteredPlans.filter(plan => plan.category === filters.category);
    }

    if (filters.minLTV && filters.maxLTV) {
      filteredPlans = filteredPlans.filter(plan => 
        plan.loanToValue >= filters.minLTV! && plan.loanToValue <= filters.maxLTV!
      );
    } else if (filters.minLTV) {
      filteredPlans = filteredPlans.filter(plan => plan.loanToValue >= filters.minLTV!);
    } else if (filters.maxLTV) {
      filteredPlans = filteredPlans.filter(plan => plan.loanToValue <= filters.maxLTV!);
    }

    if (filters.activeOnly) {
      filteredPlans = filteredPlans.filter(plan => plan.status === 'active');
    }

    // Sort by interest rate
    filteredPlans = filteredPlans.sort((a, b) => a.interestRate - b.interestRate);

    return {
      plans: filteredPlans,
      total: filteredPlans.length,
      message: 'Using demo data - Ready for API integration'
    };
  }
}

// Export singleton instance
export const loanPlansService = new LoanPlansService();
export default loanPlansService;