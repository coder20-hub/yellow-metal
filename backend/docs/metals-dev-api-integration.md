# Metals.dev API Integration

## Overview
Real-time gold price integration using metals.dev API with direct INR per gram pricing.

## API Details

### Endpoint
```
https://api.metals.dev/v1/latest
```

### Parameters
- **api_key**: `FJUZG3LSD4PU9O8ZW7Q11578ZW7Q1`
- **currency**: `INR` (Indian Rupees)
- **unit**: `g` (grams)

### Full URL
```
https://api.metals.dev/v1/latest?api_key=FJUZG3LSD4PU9O8ZW7Q11578ZW7Q1&currency=INR&unit=g
```

## Implementation

### Hook: `/hooks/useGoldRates.tsx`
- Fetches real-time gold prices in INR per gram
- Auto-refreshes every 5 minutes
- Returns 24k gold rate directly (no conversion needed)
- Handles errors gracefully

### Component: `/components/LoanCalculator.tsx`
- Displays live gold rate with timestamp
- Shows price trends and changes
- Calculates purity-based rates (22k, 21k, 20k, 19k, 18k)
- Auto-updates all jewelry item valuations

## Data Flow

```
metals.dev API
    ↓
INR per gram (24k)
    ↓
Calculate purity rates:
  - 22k = 24k × (22/24)
  - 21k = 24k × (21/24)
  - 20k = 24k × (20/24)
  - 19k = 24k × (19/24)
  - 18k = 24k × (18/24)
    ↓
Update jewelry items:
  - Gold value = weight × rate
  - Deduction = deduction_weight × rate
  - Net value = (weight - deduction) × rate
  - Loan = net value × 75%
```

## Features

✅ **Real-time data only** - No mock data
✅ **Auto-refresh** - Every 5 minutes
✅ **Direct INR pricing** - No currency conversion
✅ **Live updates** - Jewelry items recalculate automatically
✅ **Error handling** - Shows connection status
✅ **Manual refresh** - Refresh button available

## Response Format

```json
{
  "metals": {
    "gold": 7071.25
  },
  "timestamp": "2024-11-08T10:30:00Z"
}
```

The `gold` value is directly in INR per gram for 24k gold.

## Auto-Update Behavior

All jewelry item calculations automatically update when:
1. Gold rate refreshes (every 5 minutes)
2. User manually refreshes the rate
3. User modifies jewelry details (weight, purity, deductions)

## Price Trend Calculation

The calculator shows price trends by:
1. Storing the first fetched rate as "previous rate"
2. Comparing current rate with previous rate
3. Displaying percentage change with up/down indicator

## Loan Calculation Formula

For each jewelry item:
```
Gross Value = Weight × Rate (for selected purity)
Deduction Amount = Deduction Weight × Rate
Net Gold Value = (Weight - Deduction Weight) × Rate
Loan Amount = Net Gold Value × 75%
```

## Status Indicators

- **"Metals.dev Live"** - Successfully fetching real-time data
- **"Loading..."** - Initial load or refreshing
- **"Connecting..."** - Attempting to connect to API
- **Error state** - Connection failed (shows error message)

## Refresh Interval

- **Auto-refresh**: Every 300,000ms (5 minutes)
- **Timeout**: 10 seconds per API call
- **Manual refresh**: Available via refresh button

## No Mock Data

This integration uses **only real-time data** from metals.dev API. There is no fallback to mock data. If the API is unavailable, the calculator will show a connection error.
