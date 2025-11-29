import { useState, useEffect, useCallback } from 'react';
import { loanPlansService, LoanPlan, LoanPlansFilters, LoanPlansResponse } from '../lib/api/loanPlans';

interface UseLoanPlansState {
  plans: LoanPlan[];
  loading: boolean;
  error: string | null;
  total: number;
  message?: string;
}

interface UseLoanPlansReturn extends UseLoanPlansState {
  refetch: () => Promise<void>;
  fetchPlans: (filters: LoanPlansFilters) => Promise<void>;
}

// Cache implementation for better performance
interface CacheEntry {
  data: LoanPlansResponse;
  timestamp: number;
  filters: LoanPlansFilters;
}

class LoanPlansCache {
  private cache = new Map<string, CacheEntry>();
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  private generateKey(filters: LoanPlansFilters): string {
    return JSON.stringify(filters);
  }

  get(filters: LoanPlansFilters): LoanPlansResponse | null {
    const key = this.generateKey(filters);
    const entry = this.cache.get(key);
    
    if (!entry) return null;
    
    const isExpired = Date.now() - entry.timestamp > this.CACHE_DURATION;
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }
    
    return entry.data;
  }

  set(filters: LoanPlansFilters, data: LoanPlansResponse): void {
    const key = this.generateKey(filters);
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      filters
    });
  }

  clear(): void {
    this.cache.clear();
  }

  // Clear cache entries for specific loan amounts (useful when loan amount changes)
  clearForAmount(loanAmount: number): void {
    for (const [key, entry] of this.cache.entries()) {
      if (entry.filters.loanAmount === loanAmount) {
        this.cache.delete(key);
      }
    }
  }
}

const cache = new LoanPlansCache();

export function useLoanPlans(initialFilters: LoanPlansFilters = {}): UseLoanPlansReturn {
  const [state, setState] = useState<UseLoanPlansState>({
    plans: [],
    loading: false,
    error: null,
    total: 0,
    message: undefined
  });

  const [currentFilters, setCurrentFilters] = useState<LoanPlansFilters>(initialFilters);

  const fetchPlans = useCallback(async (filters: LoanPlansFilters = {}) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    setCurrentFilters(filters);

    try {
      // Check cache first
      const cachedData = cache.get(filters);
      if (cachedData) {
        setState({
          plans: cachedData.plans,
          loading: false,
          error: null,
          total: cachedData.total,
          message: cachedData.message
        });
        return;
      }

      // Fetch from API
      const response = await loanPlansService.getLoanPlans(filters);
      
      // Cache the response
      cache.set(filters, response);

      setState({
        plans: response.plans,
        loading: false,
        error: null,
        total: response.total,
        message: response.message
      });
    } catch (error) {
      console.error('Error in useLoanPlans:', error);
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch loan plans'
      }));
    }
  }, []);

  const refetch = useCallback(async () => {
    // Clear cache for current filters and refetch
    cache.clear();
    await fetchPlans(currentFilters);
  }, [currentFilters, fetchPlans]);

  // Initial fetch on mount - use useEffect with empty dependency array to avoid infinite re-renders
  useEffect(() => {
    fetchPlans(initialFilters);
  }, []); // Remove the problematic dependencies

  return {
    plans: state.plans,
    loading: state.loading,
    error: state.error,
    total: state.total,
    message: state.message,
    refetch,
    fetchPlans
  };
}

// Hook for fetching a single loan plan
export function useLoanPlan(planId: string | null) {
  const [plan, setPlan] = useState<LoanPlan | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPlan = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      const planData = await loanPlansService.getLoanPlanById(id);
      setPlan(planData);
    } catch (error) {
      console.error('Error fetching loan plan:', error);
      setError(error instanceof Error ? error.message : 'Failed to fetch loan plan');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (planId) {
      fetchPlan(planId);
    } else {
      setPlan(null);
      setError(null);
    }
  }, [planId, fetchPlan]);

  return {
    plan,
    loading,
    error,
    refetch: planId ? () => fetchPlan(planId) : undefined
  };
}

export default useLoanPlans;