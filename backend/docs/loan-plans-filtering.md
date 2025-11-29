# Loan Plans Dynamic Filtering

## Overview
The loan plans section now intelligently filters and displays only the plans that are suitable for the user's calculated loan amount.

## How It Works

### 1. Loan Amount Calculation
When users add jewelry items with weight and purity:
```
Example:
- 10g of 22k gold
- Live gold rate: ₹7,071/gram (24k)
- 22k rate: ₹6,482/gram
- Net gold value: ₹61,579 (after 0.5g deduction)
- Loan amount: ₹46,184 (75% LTV)
```

### 2. Plan Filtering Logic
Plans are filtered to show only those where:
```typescript
loanAmount >= plan.minAmount && loanAmount <= plan.maxAmount
```

### 3. Available Plan Ranges

| Plan Name | Min Amount | Max Amount | Category |
|-----------|------------|------------|----------|
| Quick Cash Plan | ₹10,000 | ₹1,00,000 | Basic |
| Standard Gold Loan | ₹25,000 | ₹1,50,000 | Basic |
| Premium Gold Plus | ₹50,000 | ₹5,00,000 | Premium |
| Business Growth Loan | ₹1,00,000 | ₹7,50,000 | Premium |
| Elite Gold Reserve | ₹2,00,000 | ₹20,00,000 | Elite |
| Platinum Wealth Loan | ₹5,00,000 | ₹50,00,000 | Elite |

## Example Scenarios

### Scenario 1: Small Loan (₹15,000)
**Suitable Plans Shown:**
- Quick Cash Plan (₹10k - ₹1L)

**Not Shown:**
- Standard Gold Loan (min ₹25k)
- All premium and elite plans (higher minimums)

### Scenario 2: Medium Loan (₹75,000)
**Suitable Plans Shown:**
- Quick Cash Plan (₹10k - ₹1L)
- Standard Gold Loan (₹25k - ₹1.5L)
- Premium Gold Plus (₹50k - ₹5L) ⭐ Popular

**Not Shown:**
- Business Growth Loan (min ₹1L)
- Elite plans (higher minimums)

### Scenario 3: Large Loan (₹3,50,000)
**Suitable Plans Shown:**
- Premium Gold Plus (₹50k - ₹5L) ⭐ Popular
- Business Growth Loan (₹1L - ₹7.5L)
- Elite Gold Reserve (₹2L - ₹20L) ⭐ Popular

**Not Shown:**
- Basic plans (max limits too low)
- Platinum Wealth Loan (min ₹5L)

### Scenario 4: Premium Loan (₹15,00,000)
**Suitable Plans Shown:**
- Elite Gold Reserve (₹2L - ₹20L) ⭐ Popular
- Platinum Wealth Loan (₹5L - ₹50L)

**Not Shown:**
- All basic and premium plans (max limits too low)

## User Interface Features

### Dynamic Badge
```
"3 Suitable Plans" or "1 Suitable Plan"
```
Shows the count of matching plans in real-time.

### Contextual Headings
- **Plans Found:** "Perfect Loan Plans for ₹XX,XXX"
- **Loading:** "Finding Your Perfect Plans..."
- **No Match:** "No Matching Plans Found"

### No Plans State
When no plans match the loan amount, the system shows:
1. Clear message explaining why
2. List of all available plan ranges
3. Suggestion to adjust jewelry items
4. Refresh button to retry

### Plan Display
Each suitable plan shows:
- Interest rate prominently
- Category badge (Basic/Premium/Elite)
- Popular badge if applicable
- EMI calculated for user's specific loan amount
- Available loan range at the bottom
- All plan features and benefits

## Technical Implementation

### Client-Side Filtering
```typescript
const suitablePlans = availablePlans.filter(plan => 
  loanAmount >= plan.minAmount && loanAmount <= plan.maxAmount
);
```

### Server-Side Filtering
The `loanPlansService` also filters on the backend:
```typescript
if (filters.loanAmount) {
  filteredPlans = filteredPlans.filter(plan => 
    filters.loanAmount! >= plan.minAmount && 
    filters.loanAmount! <= plan.maxAmount
  );
}
```

### Dual Filtering Approach
- **Server-side:** Initial filtering through API/service
- **Client-side:** Additional filtering for certainty
- **Result:** Only relevant plans are displayed

## Real-Time Updates

Plans automatically update when:
1. ✅ User adds/removes jewelry items
2. ✅ User changes weight or purity
3. ✅ User adjusts deductions
4. ✅ Gold rate refreshes (every 5 minutes)
5. ✅ User clicks refresh button

## Benefits

### For Users
- ✅ No confusion - only see relevant plans
- ✅ Easy comparison of suitable options
- ✅ Clear guidance when no plans match
- ✅ Understand which plans fit their needs

### For Business
- ✅ Better conversion rates
- ✅ Reduced support queries
- ✅ Improved user experience
- ✅ Clear plan positioning

## Edge Cases Handled

### 1. No Plans Available
- Shows helpful message
- Lists all available plan ranges
- Suggests actions to take

### 2. Very Small Amounts (< ₹10,000)
- No plans shown
- Minimum amount guidance provided

### 3. Very Large Amounts (> ₹50,00,000)
- No plans shown
- Contact support message

### 4. Loading State
- Shows skeleton cards
- "Loading Plans..." badge
- Professional loading experience

### 5. Error State
- Clear error message
- Retry functionality
- Falls back gracefully

## Formula Reference

### Loan Amount Calculation
```
Gold Value = Weight × Rate (for purity)
Deduction = Deduction Weight × Rate
Net Value = (Weight - Deduction) × Rate
Loan Amount = Net Value × 75% (LTV)
```

### Plan Match Logic
```
if (Loan Amount >= Plan Min AND Loan Amount <= Plan Max) {
  SHOW PLAN
} else {
  HIDE PLAN
}
```

## Testing Checklist

- ✅ Add 10g 22k gold → Should show 2-3 basic plans
- ✅ Add 50g 24k gold → Should show premium plans
- ✅ Add 100g 24k gold → Should show elite plans
- ✅ Remove items → Plans should disappear
- ✅ Adjust weight down → Should filter out higher-tier plans
- ✅ Adjust weight up → Should add higher-tier plans
- ✅ Very small amount → Should show "no plans" state
- ✅ Refresh plans → Should maintain filtering

## Future Enhancements

1. **Smart Recommendations**
   - Suggest adding more gold to reach better plans
   - Show "Add ₹X more to unlock Premium Plans"

2. **Plan Comparison**
   - Side-by-side comparison of suitable plans
   - Highlight key differences

3. **Saved Preferences**
   - Remember user's preferred plan category
   - Quick filters by interest rate or tenure

4. **Personalization**
   - Based on user profile
   - Previous loan history
   - Location-based offers

---

**Status:** ✅ Fully Implemented and Working  
**Last Updated:** 2024-11-08
