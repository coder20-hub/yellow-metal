'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Edit, Trash2, Loader2, Settings as SettingsIcon, Percent, Save } from 'lucide-react';

interface LoanPlan {
  id: string;
  name: string;
  interestRate: number;
  maxTenure: number;
  minAmount: number;
  maxAmount: number;
  processingFee: number;
  loanToValue: number;
  features: string[];
  specialOffer?: string;
  isPopular: boolean;
  category: string;
  status: string;
}

export default function SettingsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [loanPlans, setLoanPlans] = useState<LoanPlan[]>([]);
  const [defaultInterestRate, setDefaultInterestRate] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<LoanPlan | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    interestRate: '',
    maxTenure: '',
    minAmount: '',
    maxAmount: '',
    processingFee: '0',
    loanToValue: '75',
    features: '',
    specialOffer: '',
    isPopular: false,
    category: 'basic',
    status: 'active',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('crm_token');
    const userStr = localStorage.getItem('crm_user');
    
    if (!token) {
      router.push('/crm');
      return;
    }

    if (userStr) {
      const user = JSON.parse(userStr);
      if (user.role !== 'superadmin') {
        router.push('/crm/dashboard');
        return;
      }
    }

    fetchData(token);
  }, [router]);

  const fetchData = async (token: string) => {
    try {
      const [plansRes, settingsRes] = await Promise.all([
        fetch('/api/crm/loan-plans', {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch('/api/crm/settings', {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      const plansData = await plansRes.json();
      const settingsData = await settingsRes.json();

      if (plansData.success) {
        setLoanPlans(plansData.plans || []);
      }
      if (settingsData.success) {
        setDefaultInterestRate(settingsData.settings.defaultInterestRate ?? null);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveInterestRate = async () => {
    if (defaultInterestRate === null || defaultInterestRate === undefined) {
      setError('Please enter an interest rate');
      return;
    }

    if (defaultInterestRate <= 0 || defaultInterestRate > 50) {
      setError('Interest rate must be between 0 and 50');
      return;
    }

    const token = localStorage.getItem('crm_token');
    if (!token) return;

    try {
      const response = await fetch('/api/crm/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ defaultInterestRate }),
      });

      const data = await response.json();
      if (data.success) {
        setSuccess('Interest rate updated successfully');
        setError('');
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.error || 'Failed to update');
      }
    } catch (err) {
      setError('Failed to update interest rate');
    }
  };

  const handleOpenDialog = (plan?: LoanPlan) => {
    if (plan) {
      setEditingPlan(plan);
      setFormData({
        name: plan.name || '',
        interestRate: (plan.interestRate ?? 0).toString(),
        maxTenure: (plan.maxTenure ?? 12).toString(),
        minAmount: (plan.minAmount ?? 0).toString(),
        maxAmount: (plan.maxAmount ?? 0).toString(),
        processingFee: (plan.processingFee ?? 0).toString(),
        loanToValue: (plan.loanToValue ?? 75).toString(),
        features: (plan.features || []).join('\n'),
        specialOffer: plan.specialOffer || '',
        isPopular: plan.isPopular || false,
        category: plan.category || 'basic',
        status: plan.status || 'active',
      });
    } else {
      setEditingPlan(null);
      setFormData({
        name: '',
        interestRate: '',
        maxTenure: '',
        minAmount: '',
        maxAmount: '',
        processingFee: '0',
        loanToValue: '75',
        features: '',
        specialOffer: '',
        isPopular: false,
        category: 'basic',
        status: 'active',
      });
    }
    setError('');
    setSuccess('');
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setEditingPlan(null);
  };

  const handleSubmitPlan = async () => {
    setError('');
    setSuccess('');

    if (!formData.name || !formData.interestRate || !formData.maxTenure) {
      setError('Please fill all required fields');
      return;
    }

    const token = localStorage.getItem('crm_token');
    if (!token) return;

    try {
      const url = '/api/crm/loan-plans';
      const method = editingPlan ? 'PUT' : 'POST';
      const body = editingPlan
        ? {
            id: editingPlan.id,
            ...formData,
            features: formData.features.split('\n').filter(f => f.trim()),
          }
        : {
            ...formData,
            features: formData.features.split('\n').filter(f => f.trim()),
          };

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.error || 'Operation failed');
        return;
      }

      setSuccess(editingPlan ? 'Plan updated successfully' : 'Plan created successfully');
      setTimeout(() => {
        handleCloseDialog();
        fetchData(token);
      }, 1000);
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleDeletePlan = async (id: string) => {
    if (!confirm('Are you sure you want to delete this loan plan?')) return;

    const token = localStorage.getItem('crm_token');
    if (!token) return;

    try {
      const response = await fetch(`/api/crm/loan-plans?id=${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        alert(data.error || 'Failed to delete plan');
        return;
      }

      fetchData(token);
    } catch (err) {
      alert('An error occurred. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="p-6 lg:p-8">
        <div className="flex items-center justify-center h-96">
          <Loader2 className="h-8 w-8 animate-spin text-amber-600" />
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
          <SettingsIcon className="w-8 h-8 mr-3 text-amber-600" />
          Settings
        </h1>
        <p className="text-gray-600 mt-2">Manage loan plans and interest rates</p>
      </div>

      {/* Default Interest Rate */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Percent className="w-5 h-5 mr-2 text-amber-600" />
            Default Interest Rate
          </CardTitle>
          <CardDescription>Set the default interest rate for loan calculations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <Label>Interest Rate (%)</Label>
              <Input
                type="number"
                step="0.1"
                min="0"
                max="50"
                value={defaultInterestRate ?? ''}
                onChange={(e) => {
                  const value = e.target.value;
                  setDefaultInterestRate(value === '' ? null : parseFloat(value));
                }}
                placeholder="Enter interest rate (e.g., 10.5)"
                className="mt-2"
              />
              {defaultInterestRate === null && (
                <p className="text-sm text-amber-600 mt-1">⚠️ Interest rate must be set for loan calculator to work</p>
              )}
            </div>
            <Button onClick={handleSaveInterestRate} className="mt-6 bg-amber-600 hover:bg-amber-700">
              <Save className="w-4 h-4 mr-2" />
              Save Rate
            </Button>
          </div>
          {success && (
            <Alert className="mt-4 bg-green-50 border-green-200">
              <AlertDescription className="text-green-800">{success}</AlertDescription>
            </Alert>
          )}
          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Loan Plans */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Loan Plans</CardTitle>
            <CardDescription>Manage all loan plans available to customers</CardDescription>
          </div>
          <Button onClick={() => handleOpenDialog()} className="bg-amber-600 hover:bg-amber-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Plan
          </Button>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Interest Rate</TableHead>
                  <TableHead>Tenure</TableHead>
                  <TableHead>Amount Range</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loanPlans.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                      No loan plans found
                    </TableCell>
                  </TableRow>
                ) : (
                  loanPlans.map((plan) => (
                    <TableRow key={plan.id}>
                      <TableCell className="font-medium">{plan.name}</TableCell>
                      <TableCell>{plan.interestRate}%</TableCell>
                      <TableCell>{plan.maxTenure} months</TableCell>
                      <TableCell>
                        ₹{plan.minAmount.toLocaleString('en-IN')} - ₹{plan.maxAmount.toLocaleString('en-IN')}
                      </TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                          {plan.category}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          plan.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {plan.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleOpenDialog(plan)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeletePlan(plan.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Create/Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingPlan ? 'Edit Loan Plan' : 'Create New Loan Plan'}
            </DialogTitle>
            <DialogDescription>
              {editingPlan ? 'Update loan plan details' : 'Add a new loan plan for customers'}
            </DialogDescription>
          </DialogHeader>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="bg-green-50 border-green-200">
              <AlertDescription className="text-green-800">{success}</AlertDescription>
            </Alert>
          )}

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Plan Name *</Label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Premium Gold Plus"
                />
              </div>
              <div className="space-y-2">
                <Label>Interest Rate (%) *</Label>
                <Input
                  type="number"
                  step="0.1"
                  value={formData.interestRate}
                  onChange={(e) => setFormData({ ...formData, interestRate: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Max Tenure (months) *</Label>
                <Input
                  type="number"
                  value={formData.maxTenure}
                  onChange={(e) => setFormData({ ...formData, maxTenure: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Loan to Value (LTV) %</Label>
                <Input
                  type="number"
                  step="0.1"
                  value={formData.loanToValue}
                  onChange={(e) => setFormData({ ...formData, loanToValue: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Min Amount (₹) *</Label>
                <Input
                  type="number"
                  value={formData.minAmount}
                  onChange={(e) => setFormData({ ...formData, minAmount: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Max Amount (₹) *</Label>
                <Input
                  type="number"
                  value={formData.maxAmount}
                  onChange={(e) => setFormData({ ...formData, maxAmount: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Processing Fee (%)</Label>
                <Input
                  type="number"
                  step="0.1"
                  value={formData.processingFee}
                  onChange={(e) => setFormData({ ...formData, processingFee: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                    <SelectItem value="elite">Elite</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => setFormData({ ...formData, status: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 flex items-center">
                <div className="flex items-center space-x-2 mt-6">
                  <Switch
                    checked={formData.isPopular}
                    onCheckedChange={(checked) => setFormData({ ...formData, isPopular: checked })}
                  />
                  <Label>Mark as Popular</Label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Features (one per line)</Label>
              <Textarea
                value={formData.features}
                onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                placeholder="Quick approval&#10;Minimal documentation&#10;Flexible repayment"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label>Special Offer</Label>
              <Input
                value={formData.specialOffer}
                onChange={(e) => setFormData({ ...formData, specialOffer: e.target.value })}
                placeholder="e.g., First 3 months at 8.5% interest"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={handleCloseDialog}>
              Cancel
            </Button>
            <Button onClick={handleSubmitPlan} className="bg-amber-600 hover:bg-amber-700">
              {editingPlan ? 'Update Plan' : 'Create Plan'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

