import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Settings, 
  Plus, 
  BarChart3, 
  Users, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  DollarSign,
  Shield,
  LogOut,
  Percent
} from 'lucide-react';
import { LoanPlanForm } from './LoanPlanForm';
import { LoanPlansList } from './LoanPlansList';
import { useLoanPlans } from '../hooks/useLoanPlans';
import { LoanPlan } from '../lib/api/loanPlans';
import { Alert, AlertDescription } from './ui/alert';

interface AdminPanelProps {
  onLogout: () => void;
}

export function AdminPanel({ onLogout }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingPlan, setEditingPlan] = useState<LoanPlan | null>(null);
  const [showForm, setShowForm] = useState(false);
  
  const { 
    plans, 
    loading, 
    error, 
    total, 
    refetch 
  } = useLoanPlans({ activeOnly: false });

  // Calculate dashboard stats including LTV - with safety checks
  const safePlans = plans || [];
  const activePlans = safePlans.filter(plan => plan.status === 'active').length;
  const popularPlans = safePlans.filter(plan => plan.isPopular).length;
  const averageInterestRate = safePlans.length > 0 
    ? (safePlans.reduce((sum, plan) => sum + plan.interestRate, 0) / safePlans.length).toFixed(2)
    : '0';
  const averageLTV = safePlans.length > 0 
    ? (safePlans.reduce((sum, plan) => sum + plan.loanToValue, 0) / safePlans.length).toFixed(1)
    : '0';

  const handleCreatePlan = () => {
    setEditingPlan(null);
    setShowForm(true);
    setActiveTab('form');
  };

  const handleEditPlan = (plan: LoanPlan) => {
    setEditingPlan(plan);
    setShowForm(true);
    setActiveTab('form');
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingPlan(null);
    setActiveTab('plans');
    refetch();
  };

  const handleDeletePlan = async (planId: string) => {
    if (window.confirm('Are you sure you want to delete this loan plan?')) {
      // In a real app, this would call the delete API
      console.log('Deleting plan:', planId);
      refetch();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-sm text-gray-500">Loan Plans Management System</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="text-green-600 border-green-600">
              <CheckCircle className="w-3 h-3 mr-1" />
              Online
            </Badge>
            
            <Button
              variant="ghost"
              onClick={onLogout}
              className="text-gray-600 hover:text-gray-900"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="plans" className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Plans</span>
            </TabsTrigger>
            <TabsTrigger value="form" className="flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>{editingPlan ? 'Edit Plan' : 'New Plan'}</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Analytics</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Total Plans */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Total Plans
                  </CardTitle>
                  <Settings className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{total}</div>
                  <p className="text-xs text-gray-500">
                    {activePlans} active, {total - activePlans} inactive
                  </p>
                </CardContent>
              </Card>

              {/* Active Plans */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Active Plans
                  </CardTitle>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{activePlans}</div>
                  <p className="text-xs text-gray-500">
                    {popularPlans} popular plans
                  </p>
                </CardContent>
              </Card>

              {/* Average Interest Rate */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Avg Interest Rate
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">{averageInterestRate}%</div>
                  <p className="text-xs text-gray-500">
                    Across all plans
                  </p>
                </CardContent>
              </Card>

              {/* Average LTV */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    Avg LTV
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-purple-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">{averageLTV}%</div>
                  <p className="text-xs text-gray-500">
                    Loan-to-Value ratio
                  </p>
                </CardContent>
              </Card>

              {/* System Status */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    System Status
                  </CardTitle>
                  <Clock className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">Online</div>
                  <p className="text-xs text-gray-500">
                    All services running
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Plus className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">New loan plan created</p>
                      <p className="text-xs text-gray-500">Premium Gold Plus (LTV: 75%) - 2 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Settings className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Plan LTV updated</p>
                      <p className="text-xs text-gray-500">Elite Gold Reserve (80% → 85%) - 5 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Plan marked as popular</p>
                      <p className="text-xs text-gray-500">Quick Cash Plan (LTV: 70%) - 1 day ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button 
                    onClick={handleCreatePlan}
                    className="flex items-center space-x-2 h-12"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create New Plan</span>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={() => setActiveTab('plans')}
                    className="flex items-center space-x-2 h-12"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Manage Plans</span>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={refetch}
                    className="flex items-center space-x-2 h-12"
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span>Refresh Data</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Plans Management Tab */}
          <TabsContent value="plans" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Loan Plans</h2>
                <p className="text-gray-500">Manage all loan plans and their configurations</p>
              </div>
              <Button onClick={handleCreatePlan} className="flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Create Plan</span>
              </Button>
            </div>

            {error && (
              <Alert className="border-red-200 bg-red-50">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  {error}
                </AlertDescription>
              </Alert>
            )}

            <LoanPlansList 
              plans={safePlans}
              loading={loading}
              onEdit={handleEditPlan}
              onDelete={handleDeletePlan}
              onRefresh={refetch}
            />
          </TabsContent>

          {/* Form Tab */}
          <TabsContent value="form" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingPlan ? 'Edit Loan Plan' : 'Create New Loan Plan'}
                </h2>
                <p className="text-gray-500">
                  {editingPlan 
                    ? 'Update the loan plan details below' 
                    : 'Fill in the details to create a new loan plan'
                  }
                </p>
              </div>
            </div>

            <LoanPlanForm 
              plan={editingPlan}
              onSuccess={handleFormClose}
              onCancel={handleFormClose}
            />
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
              <p className="text-gray-500">Insights and performance metrics</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Plan Categories Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {['basic', 'premium', 'elite'].map(category => {
                      const count = safePlans.filter(plan => plan.category === category).length;
                      const percentage = total > 0 ? (count / total * 100).toFixed(1) : '0';
                      
                      return (
                        <div key={category} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${
                              category === 'basic' ? 'bg-blue-500' :
                              category === 'premium' ? 'bg-purple-500' : 'bg-amber-500'
                            }`}></div>
                            <span className="text-sm font-medium capitalize">{category}</span>
                          </div>
                          <div className="text-sm text-gray-500">
                            {count} ({percentage}%)
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>LTV Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { range: '< 75%', min: 0, max: 75, color: 'bg-orange-500' },
                      { range: '75-79%', min: 75, max: 80, color: 'bg-blue-500' },
                      { range: '≥ 80%', min: 80, max: 100, color: 'bg-green-500' }
                    ].map(({ range, min, max, color }) => {
                      const count = safePlans.filter(plan => 
                        plan.loanToValue >= min && plan.loanToValue < max
                      ).length;
                      const percentage = total > 0 ? (count / total * 100).toFixed(1) : '0';
                      
                      return (
                        <div key={range} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${color}`}></div>
                            <span className="text-sm font-medium">{range}</span>
                          </div>
                          <div className="text-sm text-gray-500">
                            {count} ({percentage}%)
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Interest Rate Ranges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { range: '< 9%', min: 0, max: 9 },
                      { range: '9-12%', min: 9, max: 12 },
                      { range: '> 12%', min: 12, max: 100 }
                    ].map(({ range, min, max }) => {
                      const count = safePlans.filter(plan => 
                        plan.interestRate >= min && plan.interestRate < max
                      ).length;
                      const percentage = total > 0 ? (count / total * 100).toFixed(1) : '0';
                      
                      return (
                        <div key={range} className="flex items-center justify-between">
                          <span className="text-sm font-medium">{range}</span>
                          <div className="text-sm text-gray-500">
                            {count} ({percentage}%)
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>LTV vs Interest Rate Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {safePlans.length > 0 ? (
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Highest LTV Plan:</span>
                          <span className="font-medium">
                            {safePlans.reduce((max, plan) => plan.loanToValue > max.loanToValue ? plan : max).name} ({safePlans.reduce((max, plan) => plan.loanToValue > max.loanToValue ? plan : max).loanToValue}%)
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Lowest Interest Rate:</span>
                          <span className="font-medium">
                            {safePlans.reduce((min, plan) => plan.interestRate < min.interestRate ? plan : min).interestRate}% p.a.
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Best Value Plan:</span>
                          <span className="font-medium">
                            {safePlans.reduce((best, plan) => {
                              const score = plan.loanToValue / plan.interestRate;
                              const bestScore = best.loanToValue / best.interestRate;
                              return score > bestScore ? plan : best;
                            }).name}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">No plans available for analysis</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}