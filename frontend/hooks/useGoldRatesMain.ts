'use client';

import { useState, useEffect, useCallback } from 'react';

interface GoldRates {
  rate24k: number;
  rate22k: number;
  rate21k: number;
  rate20k: number;
  rate19k: number;
  rate18k: number;
  silver999: number;
}

interface UseGoldRatesMainReturn {
  rates: GoldRates;
  loading: boolean;
  error: string | null;
}

export function useGoldRatesMain(): UseGoldRatesMainReturn {
  const [rates, setRates] = useState<GoldRates>({
    rate24k: 0,
    rate22k: 0,
    rate21k: 0,
    rate20k: 0,
    rate19k: 0,
    rate18k: 0,
    silver999: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGoldRates = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/gold-rates', {
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.success || !data.rates) {
        throw new Error('Invalid response from API');
      }

      // Extract rates from the API response
      const apiRates = data.rates;
      
      setRates({
        rate24k: apiRates['24k']?.rate || 0,
        rate22k: apiRates['22k']?.rate || 0,
        rate21k: apiRates['21k']?.rate || 0,
        rate20k: apiRates['20k']?.rate || 0,
        rate19k: apiRates['19k']?.rate || 0,
        rate18k: apiRates['18k']?.rate || 0,
        silver999: data.silver999 || 0, // Silver rate from IBJA (per gram)
      });

      setError(null);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching gold rates:', err);
      setError('Failed to fetch gold rates');
      
      // Use fallback rates (current IBJA rates as of Nov 2025)
      const mockBase = 12608; // 995 purity from IBJA
      const mockSilver = 164.29; // Silver 999 per gram (164286 per kg / 1000)
      setRates({
        rate24k: mockBase,
        rate22k: Math.round((mockBase * 91.6) / 99.5),
        rate21k: Math.round((mockBase * 87.5) / 99.5),
        rate20k: Math.round((mockBase * 83.3) / 99.5),
        rate19k: Math.round((mockBase * 79.2) / 99.5),
        rate18k: Math.round((mockBase * 75.0) / 99.5),
        silver999: mockSilver, // Silver rate per gram from IBJA
      });
      
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGoldRates();
    
    // Refresh rates every 5 minutes
    const interval = setInterval(() => {
      fetchGoldRates();
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [fetchGoldRates]);

  return {
    rates,
    loading,
    error,
  };
}

