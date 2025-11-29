/**
 * Gold Rate Configuration
 * 
 * This file contains the gold rate settings for the loan calculator.
 * Update the BASE_GOLD_RATE_24K regularly to reflect current market prices.
 * 
 * Current market rate (as of November 2024): ₹7,100 - ₹7,300 per gram
 */

export const GOLD_RATE_CONFIG = {
  // Base rate for 24K gold per gram in INR
  // Update this value regularly from: https://www.goodreturns.in/gold-rates/
  BASE_GOLD_RATE_24K: 7200,
  
  // Purity percentages for different gold types
  PURITY: {
    '24K': 100,
    '22K': 91.67,
    '18K': 75,
  },
  
  // Last manual update date
  LAST_UPDATED: '2024-11-08',
  
  // Currency
  CURRENCY: 'INR',
  
  // Rate source
  SOURCE: 'Manual Configuration',
  
  // Auto-refresh interval in milliseconds (5 minutes)
  REFRESH_INTERVAL: 5 * 60 * 1000,
};

/**
 * Calculate gold rate based on purity
 */
export function calculateGoldRateByPurity(purity: '24K' | '22K' | '18K'): number {
  const baseRate = GOLD_RATE_CONFIG.BASE_GOLD_RATE_24K;
  const purityPercentage = GOLD_RATE_CONFIG.PURITY[purity];
  return Math.round((baseRate * purityPercentage) / 100);
}

/**
 * Format the last updated date
 */
export function getLastUpdatedDate(): string {
  return new Date(GOLD_RATE_CONFIG.LAST_UPDATED).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
