// Loan Plans Service - Frontend implementation with mock data fallback
import { appConfig } from '../../config/app.config';

export interface LoanPlan {
  id: string;
  name: string;
  minAmount: number;
  maxAmount: number;
  interestRate: number;
  minTenure: number;
  maxTenure: number;
  processingFee: number;
  features: string[];
  benefits: string[];
  eligibility: string[];
  description: string;
  isPopular?: boolean;
  category: 'gold' | 'property' | 'fixed-deposit';
  order?: number;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface LoanPlansResponse {
  plans: LoanPlan[];
  total: number;
  message?: string;
}

export interface LoanPlansFilters {
  loanAmount?: number;
  category?: 'gold' | 'property' | 'fixed-deposit';
  minAmount?: number;
  maxAmount?: number;
  isActive?: boolean;
  isPopular?: boolean;
  limit?: number;
  offset?: number;
}

class LoanPlansService {
  private apiBaseUrl: string;
  private useMockData: boolean;

  constructor() {
    this.apiBaseUrl = appConfig?.apiBaseUrl || 'http://localhost:3000/api';
    // Always use mock data in client-side Next.js
    this.useMockData = true;
  }

  async getLoanPlans(filters: LoanPlansFilters = {}): Promise<LoanPlansResponse> {
    // Always return mock data for now
    return this.getMockLoanPlans(filters);
  }

  async getLoanPlanById(id: string): Promise<LoanPlan | null> {
    const response = await this.getLoanPlans();
    return response.plans.find(plan => plan.id === id) || null;
  }

  async createLoanPlan(plan: Omit<LoanPlan, 'id' | 'createdAt' | 'updatedAt'>): Promise<LoanPlan> {
    throw new Error('Create operation not available in mock mode');
  }

  async updateLoanPlan(id: string, updates: Partial<LoanPlan>): Promise<LoanPlan> {
    throw new Error('Update operation not available in mock mode');
  }

  async deleteLoanPlan(id: string): Promise<void> {
    throw new Error('Delete operation not available in mock mode');
  }

  private getMockLoanPlans(filters: LoanPlansFilters): LoanPlansResponse {
    const mockPlans: LoanPlan[] = [
      {
        id: '1',
        name: 'Gold Loan Express',
        minAmount: 10000,
        maxAmount: 1000000,
        interestRate: 12.0,
        minTenure: 3,
        maxTenure: 12,
        processingFee: 0.5,
        features: [
          'Instant approval',
          'Minimal documentation',
          'Flexible repayment',
          'No prepayment charges'
        ],
        benefits: [
          'Quick disbursal within 30 minutes',
          'Competitive interest rates',
          'Transparent process',
          'Secure gold storage'
        ],
        eligibility: [
          'Age: 18-70 years',
          'Valid ID proof',
          'Pure gold (18-22 carats)',
          'Any occupation'
        ],
        description: 'Get instant loans against your gold jewelry with minimal paperwork and quick disbursal.',
        isPopular: true,
        category: 'gold',
        order: 1,
        isActive: true
      },
      {
        id: '2',
        name: 'Gold Loan Premium',
        minAmount: 50000,
        maxAmount: 5000000,
        interestRate: 10.5,
        minTenure: 6,
        maxTenure: 24,
        processingFee: 0.25,
        features: [
          'Higher loan amount',
          'Lower interest rate',
          'Extended tenure',
          'Premium customer service'
        ],
        benefits: [
          'Best rates for premium customers',
          'Priority processing',
          'Dedicated relationship manager',
          'Free insurance coverage'
        ],
        eligibility: [
          'Age: 21-65 years',
          'Valid ID and address proof',
          'High-purity gold (20-22 carats)',
          'Stable income source'
        ],
        description: 'Premium gold loan product for high-value jewelry with exclusive benefits and lower rates.',
        isPopular: false,
        category: 'gold',
        order: 2,
        isActive: true
      },
      {
        id: '3',
        name: 'Gold Loan Basic',
        minAmount: 5000,
        maxAmount: 500000,
        interestRate: 13.5,
        minTenure: 1,
        maxTenure: 12,
        processingFee: 1.0,
        features: [
          'Low minimum amount',
          'Short-term options',
          'Simple process',
          'Quick approval'
        ],
        benefits: [
          'Accessible to all',
          'Flexible tenure options',
          'Easy documentation',
          'Fast processing'
        ],
        eligibility: [
          'Age: 18-75 years',
          'Valid ID proof',
          'Gold jewelry (16-22 carats)',
          'No income proof required'
        ],
        description: 'Basic gold loan for small amounts with flexible terms and easy accessibility.',
        isPopular: false,
        category: 'gold',
        order: 3,
        isActive: true
      }
    ];

    // Apply filters
    let filteredPlans = mockPlans.filter(plan => {
      if (filters.category && plan.category !== filters.category) return false;
      if (filters.isActive !== undefined && plan.isActive !== filters.isActive) return false;
      if (filters.isPopular !== undefined && plan.isPopular !== filters.isPopular) return false;
      if (filters.loanAmount) {
        if (plan.minAmount > filters.loanAmount || plan.maxAmount < filters.loanAmount) return false;
      }
      if (filters.minAmount && plan.minAmount < filters.minAmount) return false;
      if (filters.maxAmount && plan.maxAmount > filters.maxAmount) return false;
      return true;
    });

    // Sort by order
    filteredPlans.sort((a, b) => (a.order || 999) - (b.order || 999));

    // Apply pagination
    const offset = filters.offset || 0;
    const limit = filters.limit || filteredPlans.length;
    const paginatedPlans = filteredPlans.slice(offset, offset + limit);

    return {
      plans: paginatedPlans,
      total: filteredPlans.length,
      message: paginatedPlans.length > 0 
        ? `Found ${paginatedPlans.length} loan plan(s) matching your criteria`
        : 'No loan plans found matching your criteria'
    };
  }
}

export const loanPlansService = new LoanPlansService();
export default loanPlansService;
