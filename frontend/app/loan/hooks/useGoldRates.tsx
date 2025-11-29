import {
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";

interface GoldRateData {
  rate24k: number;
  rate22k: number;
  rate21k: number;
  rate20k: number;
  rate19k: number;
  rate18k: number;
  currency: string;
  lastUpdated: string;
  source: string;
  priceChangePercent?: number;
  usdToInr?: number;
}

interface UseGoldRatesReturn {
  goldRate: GoldRateData | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useGoldRates(): UseGoldRatesReturn {
  const [goldRate, setGoldRate] = useState<GoldRateData | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Polling interval reference
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch IBJA gold rates from our API
  const fetchIBJARates = useCallback(async () => {
    try {
      console.log("🔄 Fetching IBJA gold rates...");
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

      console.log("✅ IBJA rates fetched successfully:", data);

      // Extract rates for different karats
      const rates = data.rates;

      setGoldRate({
        rate24k: rates['24k'].rate,
        rate22k: rates['22k'].rate,
        rate21k: rates['21k'].rate,
        rate20k: rates['20k'].rate,
        rate19k: rates['19k'].rate,
        rate18k: rates['18k'].rate,
        currency: "INR",
        lastUpdated: new Date(data.timestamp).toLocaleString("en-IN", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        source: data.source,
      });

      setError(null);
      setLoading(false);
    } catch (err) {
      console.error("❌ Error fetching IBJA rates:", err);
      setError("Failed to fetch gold rates");
      
      // Use fallback mock data
      useFallbackRate();
      setLoading(false);
    }
  }, []);

  // Start polling IBJA rates (refresh every 30 seconds for testing, 5 minutes for production)
  const startPolling = useCallback(() => {
    console.log("🔄 Starting IBJA rate polling (every 30 seconds)...");
    
    // Fetch immediately
    fetchIBJARates();
    
    // Then poll every 30 seconds (change to 5 * 60 * 1000 for production)
    if (pollingIntervalRef.current) {
      clearInterval(pollingIntervalRef.current);
    }
    
    pollingIntervalRef.current = setInterval(() => {
      fetchIBJARates();
    }, 30 * 1000); // 30 seconds for testing
    
  }, [fetchIBJARates]);

  const useFallbackRate = useCallback(() => {
    console.log(
      "📍 Using fallback IBJA rates (from mock data)",
    );
    
    const mockBase = 12429; // 995 purity from IBJA
    
    setGoldRate({
      rate24k: mockBase,
      rate22k: Math.round((mockBase * 91.6) / 99.5),
      rate21k: Math.round((mockBase * 87.5) / 99.5),
      rate20k: Math.round((mockBase * 83.3) / 99.5),
      rate19k: Math.round((mockBase * 79.2) / 99.5),
      rate18k: Math.round((mockBase * 75.0) / 99.5),
      currency: "INR",
      lastUpdated: new Date().toLocaleString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      source: "IBJA (Mock Data)",
    });
    setLoading(false);
  }, []);

  const refetch = useCallback(() => {
    console.log(
      "🔄 Manual refresh triggered - fetching IBJA rates...",
    );
    fetchIBJARates();
  }, [fetchIBJARates]);

  // Initial connection
  useEffect(() => {
    startPolling();

    // Cleanup on unmount
    return () => {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
      }
    };
  }, [startPolling]);

  return {
    goldRate,
    loading,
    error,
    refetch,
  };
}
