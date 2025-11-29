import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { 
  Save, 
  X, 
  Plus, 
  Trash2, 
  AlertCircle, 
  CheckCircle, 
  DollarSign,
  Percent,
  Calendar,
  Tag,
  TrendingUp
} from 'lucide-react';
import { LoanPlan, loanPlansService } from '../lib/api/loanPlans';

interface LoanPlanFormProps {
  plan?: LoanPlan | null;
  onSuccess: () => void;
  onCancel: () => void;
}

export function LoanPlanForm({ plan, onSuccess, onCancel }: LoanPlanFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    interestRate: '',
    maxTenure: '',
    minAmount: '',
    maxAmount: '',
    processingFee: '',
    loanToValue: '', // New field for LTV
    features: [''],
    specialOffer: '',
    isPopular: false,
    category: 'basic' as 'basic' | 'premium' | 'elite',
    status: 'active' as 'active' | 'inactive'
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Load existing plan data when editing
  useEffect(() => {
    if (plan) {
      setFormData({
        name: plan.name,
        interestRate: plan.interestRate.toString(),
        maxTenure: plan.maxTenure.toString(),
        minAmount: plan.minAmount.toString(),
        maxAmount: plan.maxAmount.toString(),
        processingFee: plan.processingFee.toString(),
        loanToValue: plan.loanToValue.toString(),
        features: plan.features.length > 0 ? plan.features : [''],
        specialOffer: plan.specialOffer || '',
        isPopular: plan.isPopular || false,
        category: plan.category,
        status: plan.status
      });
    }
  }, [plan]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setError(null);
  };

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData(prev => ({
      ...prev,
      features: newFeatures
    }));
  };

  const addFeature = () => {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, '']
    }));
  };

  const removeFeature = (index: number) => {
    if (formData.features.length > 1) {
      const newFeatures = formData.features.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        features: newFeatures
      }));
    }
  };

  // LTV preset options for quick selection
  const ltvPresets = [
    { label: '70% - Conservative', value: '70' },
    { label: '75% - Standard', value: '75' },
    { label: '80% - Premium', value: '80' },
    { label: '85% - Elite', value: '85' }
  ];

  const validateForm = (): string | null => {
    if (!formData.name.trim()) return 'Plan name is required';
    if (!formData.interestRate || parseFloat(formData.interestRate) <= 0) return 'Valid interest rate is required';
    if (!formData.maxTenure || parseInt(formData.maxTenure) <= 0) return 'Valid max tenure is required';
    if (!formData.minAmount || parseInt(formData.minAmount) <= 0) return 'Valid minimum amount is required';
    if (!formData.maxAmount || parseInt(formData.maxAmount) <= 0) return 'Valid maximum amount is required';
    if (parseInt(formData.maxAmount) <= parseInt(formData.minAmount)) return 'Maximum amount must be greater than minimum amount';
    if (formData.processingFee && parseFloat(formData.processingFee) < 0) return 'Processing fee cannot be negative';
    if (!formData.loanToValue || parseFloat(formData.loanToValue) <= 0 || parseFloat(formData.loanToValue) > 100) return 'Loan-to-Value must be between 1% and 100%';
    if (formData.features.filter(f => f.trim()).length === 0) return 'At least one feature is required';
    
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const planData = {
        name: formData.name.trim(),
        interestRate: parseFloat(formData.interestRate),
        maxTenure: parseInt(formData.maxTenure),
        minAmount: parseInt(formData.minAmount),
        maxAmount: parseInt(formData.maxAmount),
        processingFee: formData.processingFee ? parseFloat(formData.processingFee) : 0,
        loanToValue: parseFloat(formData.loanToValue),
        features: formData.features.filter(f => f.trim()),
        specialOffer: formData.specialOffer.trim() || undefined,
        isPopular: formData.isPopular,
        category: formData.category,
        status: formData.status
      };

      if (plan) {
        // Update existing plan
        await loanPlansService.updateLoanPlan(plan.id, planData);
        setSuccess('Loan plan updated successfully!');
      } else {
        // Create new plan
        await loanPlansService.createLoanPlan({
          ...planData,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
        setSuccess('Loan plan created successfully!');
      }

      setTimeout(() => {
        onSuccess();
      }, 1500);

    } catch (error) {
      console.error('Error saving loan plan:', error);
      setError(error instanceof Error ? error.message : 'Failed to save loan plan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <DollarSign className="w-5 h-5" />
          <span>{plan ? 'Edit Loan Plan' : 'Create New Loan Plan'}</span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Alert Messages */}
          {error && (
            <Alert className="border-red-200 bg-red-50">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">
                {error}
              </AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                {success}
              </AlertDescription>
            </Alert>
          )}

          {/* Basic Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Plan Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="e.g., Premium Gold Plus"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="category">Category *</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                    <SelectItem value="elite">Elite</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="status">Status</Label>
                <Select value={formData.status} onValueChange={(value) => handleInputChange('status', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="interestRate">Interest Rate (% per annum) *</Label>
                <div className="relative mt-1">
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.1"
                    min="0"
                    max="50"
                    value={formData.interestRate}
                    onChange={(e) => handleInputChange('interestRate', e.target.value)}
                    placeholder="e.g., 9.5"
                    className="pr-8"
                  />
                  <Percent className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div>
                <Label htmlFor="maxTenure">Maximum Tenure (months) *</Label>
                <div className="relative mt-1">
                  <Input
                    id="maxTenure"
                    type="number"
                    min="1"
                    max="120"
                    value={formData.maxTenure}
                    onChange={(e) => handleInputChange('maxTenure', e.target.value)}
                    placeholder="e.g., 24"
                    className="pr-8"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div>
                <Label htmlFor="processingFee">Processing Fee (% of loan amount)</Label>
                <div className="relative mt-1">
                  <Input
                    id="processingFee"
                    type="number"
                    step="0.1"
                    min="0"
                    max="10"
                    value={formData.processingFee}
                    onChange={(e) => handleInputChange('processingFee', e.target.value)}
                    placeholder="e.g., 0.5 (0 for free)"
                    className="pr-8"
                  />
                  <Percent className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Loan-to-Value Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>Loan-to-Value (LTV) Configuration</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="loanToValue">Loan-to-Value Ratio (%) *</Label>
                <div className="relative mt-1">
                  <Input
                    id="loanToValue"
                    type="number"
                    step="0.1"
                    min="1"
                    max="100"
                    value={formData.loanToValue}
                    onChange={(e) => handleInputChange('loanToValue', e.target.value)}
                    placeholder="e.g., 75"
                    className="pr-8"
                  />
                  <Percent className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Percentage of gold value that can be borrowed
                </p>
              </div>

              <div>
                <Label>Quick LTV Presets</Label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {ltvPresets.map((preset) => (
                    <Button
                      key={preset.value}
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => handleInputChange('loanToValue', preset.value)}
                      className={`text-xs ${formData.loanToValue === preset.value ? 'bg-blue-50 border-blue-300' : ''}`}
                    >
                      {preset.label}
                    </Button>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Click to quickly set common LTV values
                </p>
              </div>
            </div>

            {/* LTV Explanation */}
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Understanding Loan-to-Value (LTV)</h4>
              <div className="text-sm text-blue-800 space-y-2">
                <p>
                  <strong>LTV determines how much customers can borrow against their gold:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>70% LTV: Conservative approach, lower risk</li>
                  <li>75% LTV: Standard market rate, balanced risk</li>
                  <li>80% LTV: Competitive rate, moderate risk</li>
                  <li>85% LTV: Aggressive rate, higher risk</li>
                </ul>
                <p className="mt-2">
                  <strong>Example:</strong> If gold is worth ₹1,00,000 and LTV is {formData.loanToValue || '75'}%, 
                  customer can borrow up to ₹{formData.loanToValue ? (parseFloat(formData.loanToValue) * 1000).toLocaleString('en-IN') : '75,000'}
                </p>
              </div>
            </div>
          </div>

          {/* Loan Amount Range */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Loan Amount Range</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="minAmount">Minimum Amount (₹) *</Label>
                <Input
                  id="minAmount"
                  type="number"
                  min="1000"
                  step="1000"
                  value={formData.minAmount}
                  onChange={(e) => handleInputChange('minAmount', e.target.value)}
                  placeholder="e.g., 50000"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="maxAmount">Maximum Amount (₹) *</Label>
                <Input
                  id="maxAmount"
                  type="number"
                  min="1000"
                  step="1000"
                  value={formData.maxAmount}
                  onChange={(e) => handleInputChange('maxAmount', e.target.value)}
                  placeholder="e.g., 500000"
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Plan Features *</h3>
            <div className="space-y-3">
              {formData.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Input
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    placeholder="e.g., Quick approval in 30 minutes"
                    className="flex-1"
                  />
                  {formData.features.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFeature(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
              
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addFeature}
                className="flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Feature</span>
              </Button>
            </div>
          </div>

          {/* Special Offer */}
          <div>
            <Label htmlFor="specialOffer">Special Offer (Optional)</Label>
            <Textarea
              id="specialOffer"
              value={formData.specialOffer}
              onChange={(e) => handleInputChange('specialOffer', e.target.value)}
              placeholder="e.g., First 3 months at 8.5% interest"
              className="mt-1"
              rows={3}
            />
          </div>

          {/* Popular Plan Toggle */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Tag className="w-5 h-5 text-gray-600" />
              <div>
                <Label htmlFor="isPopular" className="text-base font-medium">
                  Mark as Popular Plan
                </Label>
                <p className="text-sm text-gray-500">
                  Popular plans will be highlighted with a badge
                </p>
              </div>
            </div>
            <Switch
              id="isPopular"
              checked={formData.isPopular}
              onCheckedChange={(checked) => handleInputChange('isPopular', checked)}
            />
          </div>

          {/* Enhanced Preview */}
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold mb-2 text-blue-900">Preview</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
              <div>
                <span className="text-blue-700 font-medium">Plan:</span>
                <p className="text-blue-900">{formData.name || 'Not set'}</p>
              </div>
              <div>
                <span className="text-blue-700 font-medium">Interest:</span>
                <p className="text-blue-900">{formData.interestRate || '0'}% p.a.</p>
              </div>
              <div>
                <span className="text-blue-700 font-medium">LTV:</span>
                <p className="text-blue-900 font-semibold">{formData.loanToValue || '0'}%</p>
              </div>
              <div>
                <span className="text-blue-700 font-medium">Tenure:</span>
                <p className="text-blue-900">Up to {formData.maxTenure || '0'} months</p>
              </div>
              <div>
                <span className="text-blue-700 font-medium">Amount:</span>
                <p className="text-blue-900">
                  ₹{formData.minAmount || '0'} - ₹{formData.maxAmount || '0'}
                </p>
              </div>
            </div>
            
            {formData.loanToValue && (
              <div className="mt-3 p-2 bg-white rounded border">
                <p className="text-xs text-gray-600">
                  <strong>LTV Example:</strong> For ₹1,00,000 worth of gold, customer can borrow up to{' '}
                  <span className="font-semibold text-blue-700">
                    ₹{(parseFloat(formData.loanToValue) * 1000).toLocaleString('en-IN')}
                  </span>
                </p>
              </div>
            )}
            
            {formData.isPopular && (
              <Badge className="mt-2 bg-amber-100 text-amber-800 border-amber-300">
                Popular Plan
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end space-x-4 pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="flex items-center space-x-2"
            >
              <X className="w-4 h-4" />
              <span>Cancel</span>
            </Button>

            <Button
              type="submit"
              disabled={loading}
              className="flex items-center space-x-2"
            >
              <Save className="w-4 h-4" />
              <span>{loading ? 'Saving...' : plan ? 'Update Plan' : 'Create Plan'}</span>
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}