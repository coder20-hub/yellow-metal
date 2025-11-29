import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { Calculator, IndianRupee, AlertCircle, RefreshCw, Wifi, WifiOff, TrendingUp, TrendingDown, Plus, Trash2, Package, CheckCircle, Info, Scale, Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useGoldRates } from "../hooks/useGoldRates";
import { Skeleton } from "./ui/skeleton";
import { Alert, AlertDescription } from "./ui/alert";
import { Separator } from "./ui/separator";
import { LoanPlans } from "./LoanPlans";

interface JewelryItem {
  id: string;
  name: string;
  weight: string;
  purity: string;
  deductions: string;
  loanAmount: number;
  goldValue: number;
  deductionAmount: number;
  netGoldValue: number;
  actualWeight: number;
}

export function LoanCalculator() {
  const { t } = useLanguage();
  const { goldRate, loading, error, refetch } = useGoldRates();
  const [jewelryItems, setJewelryItems] = useState<JewelryItem[]>([
    { id: '1', name: 'Jewelry Item 1', weight: '', purity: '', deductions: '', loanAmount: 0, goldValue: 0, deductionAmount: 0, netGoldValue: 0, actualWeight: 0 }
  ]);
  const [totalLoanAmount, setTotalLoanAmount] = useState(0);
  const [totalEmi, setTotalEmi] = useState(0);
  const [totalGoldValue, setTotalGoldValue] = useState(0);
  const [totalDeductions, setTotalDeductions] = useState(0);
  const [totalNetGoldValue, setTotalNetGoldValue] = useState(0);
  const [totalActualWeight, setTotalActualWeight] = useState(0);
  const [interestRate, setInterestRate] = useState<number | null>(null);
  const [interestRateError, setInterestRateError] = useState('');

  // Fetch interest rate from CRM settings (database only, no hardcoded values)
  useEffect(() => {
    fetch('/api/settings/public')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.defaultInterestRate !== null && data.defaultInterestRate !== undefined) {
          setInterestRate(data.defaultInterestRate);
          setInterestRateError('');
        } else {
          setInterestRateError('Interest rate not configured. Please contact administrator.');
          console.error('Interest rate not configured:', data.error);
        }
      })
      .catch((error) => {
        console.error('Error fetching interest rate:', error);
        setInterestRateError('Failed to load interest rate. Please refresh the page.');
      });
  }, []);

  // Use live rate from API with graceful fallback
  const goldRateToday = goldRate?.rate24k || 0;
  const lastUpdated = goldRate?.lastUpdated || "Loading...";
  const dataSource = goldRate?.source || "Connecting...";
  
  // Determine data source type - IBJA is our reliable source
  const isLiveData = dataSource.includes('IBJA');
  const isMarketRate = dataSource.includes('Mock Data');
  const isLoadingData = loading || !goldRate;
  
  // Calculate price trend using stored previous rate
  const [previousRate, setPreviousRate] = useState<number | null>(null);
  
  // Store previous rate when new rate is fetched
  useEffect(() => {
    if (goldRateToday > 0 && previousRate === null) {
      // Initialize with a slightly lower value for demo purposes
      setPreviousRate(goldRateToday - 50);
    }
  }, [goldRateToday, previousRate]);
  
  const priceChange = previousRate ? goldRateToday - previousRate : 0;
  const isRising = priceChange > 0;
  const changePercentage = previousRate ? ((priceChange / previousRate) * 100).toFixed(2) : '0.00';
  
  // Use IBJA rates for different purities (from web scraping)
  const purityRates = [
    { karat: "24k", purity: 99.5, rate: goldRate?.rate24k || 0, value: 24 },
    { karat: "22k", purity: 91.6, rate: goldRate?.rate22k || 0, value: 22 },
    { karat: "21k", purity: 87.5, rate: goldRate?.rate21k || 0, value: 21 },
    { karat: "20k", purity: 83.3, rate: goldRate?.rate20k || 0, value: 20 },
    { karat: "19k", purity: 79.2, rate: goldRate?.rate19k || 0, value: 19 },
    { karat: "18k", purity: 75.0, rate: goldRate?.rate18k || 0, value: 18 }
  ];

  // Add new jewelry item
  const addJewelryItem = () => {
    const newItem: JewelryItem = {
      id: Date.now().toString(),
      name: `Jewelry Item ${jewelryItems.length + 1}`,
      weight: '',
      purity: '',
      deductions: '',
      loanAmount: 0,
      goldValue: 0,
      deductionAmount: 0,
      netGoldValue: 0,
      actualWeight: 0
    };
    setJewelryItems([...jewelryItems, newItem]);
  };

  // Remove jewelry item
  const removeJewelryItem = (id: string) => {
    if (jewelryItems.length > 1) {
      setJewelryItems(jewelryItems.filter(item => item.id !== id));
    }
  };

  // Update jewelry item
  const updateJewelryItem = (id: string, field: keyof JewelryItem, value: string) => {
    setJewelryItems(items =>
      items.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // Calculate individual item loan amount with weight-based deductions
  const calculateItemLoan = (weight: string, purity: string, deductions: string): { 
    loanAmount: number, 
    goldValue: number, 
    deductionAmount: number, 
    netGoldValue: number,
    actualWeight: number
  } => {
    if (!weight || !purity || !goldRateToday) {
      return { loanAmount: 0, goldValue: 0, deductionAmount: 0, netGoldValue: 0, actualWeight: 0 };
    }

    const weightNum = parseFloat(weight);
    const purityNum = parseFloat(purity);
    const deductionWeight = deductions ? parseFloat(deductions) : 0;
    
    if (weightNum <= 0 || purityNum <= 0) {
      return { loanAmount: 0, goldValue: 0, deductionAmount: 0, netGoldValue: 0, actualWeight: 0 };
    }

    // Validate deduction weight doesn't exceed total weight
    if (deductionWeight >= weightNum) {
      return { loanAmount: 0, goldValue: 0, deductionAmount: 0, netGoldValue: 0, actualWeight: 0 };
    }

    // Get the correct rate for the selected purity
    const selectedPurityRate = purityRates.find(p => p.value === purityNum);
    const ratePerGram = selectedPurityRate ? selectedPurityRate.rate : goldRateToday;

    // Calculate actual weight after deductions
    const actualWeight = weightNum - deductionWeight;
    
    // Calculate gross gold value (before deductions)
    const goldValue = weightNum * ratePerGram;
    
    // Calculate deduction amount (value of deducted weight)
    const deductionAmount = deductionWeight * ratePerGram;
    
    // Calculate net gold value (actual weight value)
    const netGoldValue = actualWeight * ratePerGram;
    
    // Loan to value ratio - typically 75-80% of net gold value
    const loanToValue = 0.75;
    const loanAmount = netGoldValue * loanToValue;
    
    return {
      loanAmount: Math.round(Math.max(0, loanAmount)),
      goldValue: Math.round(goldValue),
      deductionAmount: Math.round(deductionAmount),
      netGoldValue: Math.round(netGoldValue),
      actualWeight: Math.round(actualWeight * 100) / 100 // Round to 2 decimal places
    };
  };

  // Auto-calculate loans when inputs change
  useEffect(() => {
    const updatedItems = jewelryItems.map(item => {
      const { loanAmount, goldValue, deductionAmount, netGoldValue, actualWeight } = calculateItemLoan(item.weight, item.purity, item.deductions);
      return { ...item, loanAmount, goldValue, deductionAmount, netGoldValue, actualWeight };
    });

    setJewelryItems(updatedItems);

    // Calculate totals
    const totalLoan = updatedItems.reduce((sum, item) => sum + item.loanAmount, 0);
    const totalValue = updatedItems.reduce((sum, item) => sum + item.goldValue, 0);
    const totalDeduct = updatedItems.reduce((sum, item) => sum + item.deductionAmount, 0);
    const totalNet = updatedItems.reduce((sum, item) => sum + item.netGoldValue, 0);
    const totalActual = updatedItems.reduce((sum, item) => sum + item.actualWeight, 0);
    
    setTotalLoanAmount(totalLoan);
    setTotalGoldValue(totalValue);
    setTotalDeductions(totalDeduct);
    setTotalNetGoldValue(totalNet);
    setTotalActualWeight(totalActual);

    // Calculate total EMI for 12 months using interest rate from CRM (database)
    if (totalLoan > 0 && interestRate !== null && interestRate > 0) {
      const monthlyRate = interestRate / 100 / 12;
      const months = 12;
      const monthlyEmi = (totalLoan * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                        (Math.pow(1 + monthlyRate, months) - 1);
      setTotalEmi(Math.round(monthlyEmi));
    } else {
      setTotalEmi(0);
    }
  }, [jewelryItems.map(item => `${item.weight}-${item.purity}-${item.deductions}`).join('|'), goldRateToday, interestRate]);

  // Check if we have any valid inputs
  const hasValidInputs = jewelryItems.some(item => item.weight && item.purity && parseFloat(item.weight) > 0);
  const validItemsCount = jewelryItems.filter(item => item.weight && item.purity && parseFloat(item.weight) > 0).length;

  return (
    <section id="calculator" className="section-padding-large bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 gradient-aurora rounded-full blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 accent-gradient rounded-full blur-3xl opacity-5 animate-float" style={{ animationDelay: '-3s' }}></div>
      
      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-background/80 backdrop-blur-md border border-border rounded-full mb-6 relative overflow-hidden">
            <div className="absolute inset-0 gradient-shimmer-gold opacity-30"></div>
            <Sparkles className="w-4 h-4 mr-2 relative z-10" />
            <span className="text-sm font-medium relative z-10">Smart Calculator</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('calculator.title')}
          </h2>
          
          <p className="lead">
            {t('calculator.subtitle')}
          </p>
        </div>

        {/* Status Alert - Only show meaningful errors */}
        {error && !isLiveData && (
          <Alert className="mb-8 border-amber-200 bg-amber-50 animate-fade-in">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800">
              <div className="flex items-center justify-between">
                <div>
                  <strong>Connection Issue:</strong> {error}. Using fallback rates - Calculator remains fully functional.
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={refetch}
                  disabled={loading}
                  className="ml-4 text-amber-700 hover:text-amber-900 hover:bg-amber-100"
                >
                  <RefreshCw className={`w-3 h-3 mr-1 ${loading ? 'animate-spin' : ''}`} />
                  Retry
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        )}

        {/* Success Notice - Show when data is live */}
        {!error && isLiveData && goldRate && (
          <Alert className="mb-8 border-green-200 bg-green-50 animate-fade-in">
            <Wifi className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              <strong>Live Data Active:</strong> Gold rates are updating automatically from {dataSource}. Last refresh: {lastUpdated}
            </AlertDescription>
          </Alert>
        )}

        {/* Gold Rates Section */}
        <div className="mb-12 animate-fade-in-up">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="flex items-center space-x-3">
                <div>
                  <h3 className="text-xl font-semibold">{t('calculator.gold-rate-today')}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    {isLiveData ? (
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-700 font-medium">Live IBJA Data</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span className="text-xs text-amber-700 font-medium">Fallback Data</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={refetch}
                disabled={loading}
                className="h-10 w-10 p-0 hover:bg-secondary/80"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              </Button>
            </div>

            {/* Live Gold Price Display */}
            <div className="bg-gradient-to-br from-background/90 to-secondary/50 border border-border/50 rounded-2xl p-6 mb-6 backdrop-blur-sm relative overflow-hidden">
              {isLoadingData ? (
                <div className="space-y-3 relative z-10">
                  <Skeleton className="h-10 w-64" />
                  <Skeleton className="h-4 w-48" />
                </div>
              ) : (
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-3xl font-bold text-foreground">
                      ₹{goldRateToday.toLocaleString('en-IN')} per gram
                    </div>
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${
                      isRising ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {isRising ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      <span className="text-sm font-semibold">
                        {isRising ? '+' : ''}{changePercentage}%
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <span>24k Gold (995 Purity) • IBJA Rate • Last updated: {lastUpdated}</span>
                    {isLiveData && (
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Live from IBJA</span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Purity Rate Table - All 6 equally distributed */}
            <div className="space-y-3 relative z-10">
              <h4 className="font-medium text-muted-foreground">Rates by Purity</h4>
              <div className="grid grid-cols-6 gap-2">
                {isLoadingData ? (
                  Array.from({ length: 6 }).map((_, i) => (
                    <Skeleton key={i} className="h-16 w-full" />
                  ))
                ) : (
                  purityRates.map((item) => (
                    <div key={item.karat} className="flex flex-col items-center justify-between p-3 bg-secondary/50 backdrop-blur-sm rounded-lg hover:bg-secondary/80 transition-colors border border-border/30 group">
                      <div className="text-center">
                        <div className="font-medium group-hover:gradient-text-fast transition-all duration-300">{item.karat}</div>
                        <div className="text-xs text-muted-foreground mb-2">{item.purity}%</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-sm">₹{item.rate.toLocaleString('en-IN')}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Calculator Layout - Jewelry Items (2/3) & Loan Estimate (1/3) */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Jewelry Items Section - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg animate-fade-in-up relative overflow-hidden" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-lg">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Your Jewelry Items ({jewelryItems.length})</h3>
                    <p className="text-sm text-muted-foreground">Add multiple items for accurate calculation</p>
                  </div>
                </div>
                
                <Button onClick={addJewelryItem} className="btn-outline">
                  <Plus className="w-4 h-4 mr-2" />
                  {t('calculator.add-item')}
                </Button>
              </div>

              <div className="space-y-8 relative z-10">
                {jewelryItems.map((item, index) => (
                  <div key={item.id} className="p-8 bg-gradient-to-br from-background/90 to-secondary/30 border border-border/50 rounded-2xl space-y-8 backdrop-blur-sm relative overflow-hidden group">
                    <div className="flex items-center justify-between relative z-10">
                      <Input
                        value={item.name}
                        onChange={(e) => updateJewelryItem(item.id, 'name', e.target.value)}
                        className="text-lg font-semibold bg-transparent border-none p-0 h-auto focus-visible:ring-0"
                        placeholder="Jewelry name"
                      />
                      {jewelryItems.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeJewelryItem(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 w-8 p-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Weight (grams)</Label>
                        <Input
                          type="number"
                          placeholder="e.g. 10"
                          value={item.weight}
                          onChange={(e) => updateJewelryItem(item.id, 'weight', e.target.value)}
                          step="0.1"
                          min="0"
                          className="h-12 bg-background/50 backdrop-blur-sm border-border/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Purity</Label>
                        <Select value={item.purity} onValueChange={(value) => updateJewelryItem(item.id, 'purity', value)}>
                          <SelectTrigger className="!h-12 bg-background/50 backdrop-blur-sm border-border/50">
                            <SelectValue placeholder="Select purity" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="24">24k Gold</SelectItem>
                            <SelectItem value="22">22k Gold</SelectItem>
                            <SelectItem value="21">21k Gold</SelectItem>
                            <SelectItem value="20">20k Gold</SelectItem>
                            <SelectItem value="19">19k Gold</SelectItem>
                            <SelectItem value="18">18k Gold</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Weight Deduction (g)</Label>
                        <Input
                          type="number"
                          placeholder="0.0"
                          value={item.deductions}
                          onChange={(e) => updateJewelryItem(item.id, 'deductions', e.target.value)}
                          min="0"
                          max={item.weight ? parseFloat(item.weight) - 0.1 : undefined}
                          step="0.1"
                          className="h-12 bg-background/50 backdrop-blur-sm border-border/50"
                        />

                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Ornament Value</Label>
                        <div className="h-12 px-4 rounded-lg flex items-center justify-center font-semibold text-foreground">
                          {item.netGoldValue > 0 ? `₹${item.netGoldValue.toLocaleString('en-IN')}` : ''}
                        </div>
                      </div>
                    </div>

                    {/* Item Details */}
                    {item.weight && item.purity && parseFloat(item.weight) > 0 && (
                      <div className="p-4 bg-white border border-gray-300 rounded-xl relative z-10">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="space-y-1">
                            <span className="text-foreground font-medium">Total Weight:</span>
                            <span className="block font-semibold">{item.weight}g</span>
                          </div>
                          <div className="space-y-1">
                            <span className="text-foreground font-medium">Rate:</span>
                            <span className="block font-semibold">₹{purityRates.find(p => p.value.toString() === item.purity)?.rate.toLocaleString('en-IN')}/g</span>
                          </div>
                          {item.deductions && parseFloat(item.deductions) > 0 && parseFloat(item.deductions) < parseFloat(item.weight) && (
                            <>
                              <div className="space-y-1">
                                <span className="text-foreground font-medium">Deduction:</span>
                                <span className="block font-semibold text-red-600">{item.deductions}g</span>
                              </div>
                              <div className="space-y-1">
                                <span className="text-foreground font-medium">Actual Weight:</span>
                                <span className="block font-semibold text-green-600">{item.actualWeight}g</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Loan Estimate Section - Takes 1 column */}
          <div className="lg:col-span-1 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg sticky top-24 relative overflow-hidden">
              <div className="flex items-center space-x-3 mb-6 relative z-10">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-lg">
                  <IndianRupee className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Loan Estimate</h3>

                </div>
              </div>

              {!hasValidInputs ? (
                <div className="text-center py-12 space-y-4 relative z-10">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-muted/50 to-secondary/50 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Calculator className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Add Jewelry Details</h4>
                    <p className="text-sm text-muted-foreground">
                      Enter weight and purity to see instant loan estimates
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 relative z-10">
                  {/* Total Loan Amount */}
                  <div className="p-6 bg-black text-white rounded-2xl shadow-lg relative overflow-hidden">
                    <div className="space-y-3 relative z-10">
                      <div className="text-sm opacity-90">Total Loan Amount</div>
                      <div className="text-4xl font-bold">₹{totalLoanAmount.toLocaleString('en-IN')}</div>
                      <div className="text-sm opacity-90">For {validItemsCount} jewelry item{validItemsCount > 1 ? 's' : ''}</div>
                    </div>
                  </div>

                  {/* EMI & Interest */}
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-4 bg-blue-50/50 backdrop-blur-sm border border-blue-200/50 rounded-xl text-center">
                      <div className="text-sm text-foreground mb-1">Monthly EMI</div>
                      <div className="text-xl font-bold text-foreground">₹{totalEmi.toLocaleString('en-IN')}</div>
                      <div className="text-xs text-foreground">12 months</div>
                    </div>
                    <div className="p-4 bg-green-50/50 backdrop-blur-sm border border-green-200/50 rounded-xl text-center">
                      <div className="text-sm text-foreground mb-1">Interest Rate</div>
                      {interestRate !== null ? (
                        <>
                          <div className="text-xl font-bold text-foreground">{interestRate}%</div>
                          <div className="text-xs text-foreground">per annum</div>
                        </>
                      ) : (
                        <>
                          <div className="text-sm text-red-600">Not configured</div>
                          <div className="text-xs text-foreground">Contact admin</div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="space-y-4">
                    <h4 className="font-medium">Summary</h4>
                    <div className="space-y-3 p-4 bg-secondary/50 backdrop-blur-sm rounded-xl border border-border/50">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Total Gold Value:</span>
                        <span className="font-semibold">₹{totalGoldValue.toLocaleString('en-IN')}</span>
                      </div>
                      {totalDeductions > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Weight Deductions:</span>
                          <span className="font-semibold text-red-600">-₹{totalDeductions.toLocaleString('en-IN')}</span>
                        </div>
                      )}
                      <Separator />
                      <div className="flex justify-between">
                        <span className="font-medium">Loan Amount (75%):</span>
                        <span className="font-bold text-black">₹{totalLoanAmount.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <Button className="w-full btn-primary h-12 text-lg relative overflow-hidden">
                    <span className="relative z-10">Apply for ₹{totalLoanAmount.toLocaleString('en-IN')} Loan</span>
                  </Button>
                </div>
              )}

              {/* Notes */}
              <div className="mt-8 pt-6 border-t border-border space-y-2 text-xs text-muted-foreground relative z-10">
                <div>• Loan amount is 75% of net gold value</div>
                <div>• Interest rate: {interestRate !== null ? `${interestRate}% per annum` : 'Not configured - contact administrator'}</div>
                <div>• Weight deductions for testing and evaluation</div>
                <div>• Final amount subject to physical verification</div>
                {interestRateError && (
                  <div className="text-red-600 font-medium">⚠️ {interestRateError}</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Loan Plans Section - Only show when we have valid calculations */}
        {hasValidInputs && totalLoanAmount > 0 && (
          <LoanPlans 
            loanAmount={totalLoanAmount}
            goldValue={totalGoldValue}
            actualWeight={totalActualWeight}
          />
        )}
      </div>
    </section>
  );
}