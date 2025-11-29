import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CheckCircle, Star, TrendingUp, Clock, Shield, Gift, Sparkles, RefreshCw, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useLoanPlans } from '../hooks/useLoanPlans';
import { LoanPlansFilters } from '../lib/api/loanPlans';
import { Skeleton } from './ui/skeleton';
import { Alert, AlertDescription } from './ui/alert';

interface LoanPlansProps {
  loanAmount: number;
  goldValue: number;
  actualWeight: number;
}

export function LoanPlans({ loanAmount, goldValue, actualWeight }: LoanPlansProps) {
  const { t } = useLanguage();
  const [filters, setFilters] = useState<LoanPlansFilters>({});

  // Use the real loan plans hook
  const { 
    plans: availablePlans, 
    loading, 
    error, 
    message,
    refetch,
    fetchPlans 
  } = useLoanPlans();

  // Update filters when loan amount changes
  useEffect(() => {
    if (loanAmount > 0) {
      const newFilters: LoanPlansFilters = {
        loanAmount,
        activeOnly: true
      };
      setFilters(newFilters);
      fetchPlans(newFilters);
    }
  }, [loanAmount, fetchPlans]);

  // Filter plans on the client side as well to ensure only suitable plans show
  const suitablePlans = availablePlans.filter(plan => 
    loanAmount >= plan.minAmount && loanAmount <= plan.maxAmount
  );

  // Calculate EMI for a plan
  const calculateEMI = (principal: number, rate: number, tenure: number) => {
    const monthlyRate = rate / 100 / 12;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / 
                 (Math.pow(1 + monthlyRate, tenure) - 1);
    return Math.round(emi);
  };

  // Get category styling
  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'basic':
        return 'border-blue-200 bg-blue-50';
      case 'premium':
        return 'border-purple-200 bg-purple-50';
      case 'elite':
        return 'border-amber-200 bg-amber-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'basic':
        return <CheckCircle className="w-5 h-5 text-blue-600" />;
      case 'premium':
        return <TrendingUp className="w-5 h-5 text-purple-600" />;
      case 'elite':
        return <Star className="w-5 h-5 text-amber-600" />;
      default:
        return <CheckCircle className="w-5 h-5" />;
    }
  };

  // Don't show component if no loan amount
  if (loanAmount <= 0) {
    return null;
  }

  return (
    <section className="mt-16 animate-fade-in-up">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-background/80 backdrop-blur-md border border-border rounded-full relative overflow-hidden">
            <div className="absolute inset-0 gradient-shimmer-gold opacity-30"></div>
            <Sparkles className="w-4 h-4 mr-2 relative z-10" />
            <span className="text-sm font-medium relative z-10">
              {loading ? 'Loading Plans...' : `${suitablePlans.length} Suitable Plan${suitablePlans.length !== 1 ? 's' : ''}`}
            </span>
          </div>
          
          {/* Refresh Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={refetch}
            disabled={loading}
            className="flex items-center space-x-2"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh Plans</span>
          </Button>
        </div>
        
        <h3 className="text-3xl font-bold mb-4">
          {suitablePlans.length > 0 ? (
            `Perfect Loan Plans for ₹${loanAmount.toLocaleString('en-IN')}`
          ) : loading ? (
            'Finding Your Perfect Plans...'
          ) : (
            'No Matching Plans Found'
          )}
        </h3>
        
        <p className="text-muted-foreground">
          {suitablePlans.length > 0 ? (
            `Based on your gold value of ₹${goldValue.toLocaleString('en-IN')} (${actualWeight}g), we found ${suitablePlans.length} plan${suitablePlans.length !== 1 ? 's' : ''} that perfectly match your loan amount:`
          ) : loading ? (
            'Searching through our loan plans to find the best matches for your requirements...'
          ) : (
            `Based on your loan amount of ₹${loanAmount.toLocaleString('en-IN')}, no plans are currently available in this range. Try adjusting your jewelry items or contact support.`
          )}
        </p>
      </div>

      {/* Error Alert */}
      {error && (
        <Alert className="mb-6 border-red-200 bg-red-50">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Error:</strong> {error}
            {message && (
              <span className="block mt-1 text-sm">
                {message}
              </span>
            )}
          </AlertDescription>
        </Alert>
      )}

      {/* Fallback Message */}
      {message && !error && (
        <Alert className="mb-6 border-blue-200 bg-blue-50">
          <AlertCircle className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            <strong>Notice:</strong> {message}
          </AlertDescription>
        </Alert>
      )}

      {/* Loading State */}
      {loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-6 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-8 w-16" />
                </div>
                <Skeleton className="h-6 w-3/4" />
                <div className="grid grid-cols-2 gap-4">
                  <Skeleton className="h-16" />
                  <Skeleton className="h-16" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Plans Grid */}
      {!loading && suitablePlans.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suitablePlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-card border border-border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                plan.isPopular ? 'ring-2 ring-amber-400' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-2 -right-2 z-10">
                  <Badge className="bg-amber-500 text-white px-3 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}

              {/* Category Header */}
              <div className={`p-4 ${getCategoryStyle(plan.category)} border-b`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {getCategoryIcon(plan.category)}
                    <span className="text-sm font-medium capitalize">{plan.category} Plan</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">
                      {plan.interestRate}%
                    </div>
                    <div className="text-xs text-muted-foreground">per annum</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                  
                  {/* Special Offer */}
                  {plan.specialOffer && (
                    <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Gift className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-green-800 font-medium">
                          {plan.specialOffer}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Key Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-secondary/50 rounded-lg">
                    <div className="font-semibold">₹{calculateEMI(loanAmount, plan.interestRate, 12).toLocaleString('en-IN')}</div>
                    <div className="text-xs text-muted-foreground">Monthly EMI*</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/50 rounded-lg">
                    <div className="font-semibold">{plan.maxTenure} months</div>
                    <div className="text-xs text-muted-foreground">Max Tenure</div>
                  </div>
                </div>

                {/* Processing Fee */}
                <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-800">Processing Fee:</span>
                    <span className="font-semibold text-blue-800">
                      {plan.processingFee === 0 ? 'FREE' : `${plan.processingFee}%`}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Plan Features:</h5>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <Button className="w-full btn-primary">
                  <Shield className="w-4 h-4 mr-2" />
                  Choose This Plan
                </Button>
              </div>

              {/* Loan Range Info */}
              <div className="px-6 pb-4">
                <div className="text-xs text-muted-foreground text-center">
                  Available for loans: ₹{plan.minAmount.toLocaleString('en-IN')} - ₹{plan.maxAmount.toLocaleString('en-IN')}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Plans Found */}
      {!loading && suitablePlans.length === 0 && !error && (
        <div className="text-center py-12">
          <div className="w-20 h-20 mx-auto bg-muted rounded-2xl flex items-center justify-center mb-4">
            <AlertCircle className="w-10 h-10 text-muted-foreground" />
          </div>
          <h4 className="text-xl font-semibold mb-2">No Plans Available</h4>
          <p className="text-muted-foreground mb-6">
            We couldn't find any loan plans for the amount ₹{loanAmount.toLocaleString('en-IN')}. 
          </p>
          
          {/* Show available plan ranges */}
          {availablePlans.length > 0 && (
            <div className="max-w-2xl mx-auto mb-6">
              <p className="text-sm text-muted-foreground mb-4">
                Our loan plans are available for the following amounts:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {availablePlans.map((plan) => (
                  <div key={plan.id} className="p-3 bg-secondary/50 rounded-lg text-left">
                    <div className="font-medium text-sm">{plan.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      ₹{plan.minAmount.toLocaleString('en-IN')} - ₹{plan.maxAmount.toLocaleString('en-IN')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <p className="text-sm text-muted-foreground mb-6">
            Try adjusting your jewelry items or adding more gold to match one of our plan ranges.
          </p>
          <Button onClick={refetch} className="btn-outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </div>
      )}

      {/* Disclaimer */}
      {suitablePlans.length > 0 && (
        <div className="mt-8 p-4 bg-secondary/50 rounded-lg">
          <div className="flex items-start space-x-2">
            <Clock className="w-4 h-4 text-muted-foreground mt-0.5" />
            <div className="text-xs text-muted-foreground">
              <p className="mb-1">
                * EMI calculated for 12 months tenure. Interest rates and offers are subject to approval and may vary based on profile assessment.
              </p>
              <p>
                Processing fees, if applicable, will be deducted from the loan amount. Terms and conditions apply.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}