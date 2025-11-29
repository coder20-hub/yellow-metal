import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from './ui/table';
import { Skeleton } from './ui/skeleton';
import { 
  Edit, 
  Trash2, 
  RefreshCw, 
  Search, 
  Filter, 
  Star, 
  CheckCircle, 
  XCircle,
  DollarSign,
  Calendar,
  Percent,
  TrendingUp,
  Eye
} from 'lucide-react';
import { LoanPlan } from '../lib/api/loanPlans';

interface LoanPlansListProps {
  plans: LoanPlan[];
  loading: boolean;
  onEdit: (plan: LoanPlan) => void;
  onDelete: (planId: string) => void;
  onRefresh: () => void;
}

export function LoanPlansList({ 
  plans, 
  loading, 
  onEdit, 
  onDelete, 
  onRefresh 
}: LoanPlansListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [ltvFilter, setLtvFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Filter and sort plans
  const filteredPlans = plans
    .filter(plan => {
      const matchesSearch = plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           plan.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || plan.category === categoryFilter;
      const matchesStatus = statusFilter === 'all' || plan.status === statusFilter;
      
      let matchesLTV = true;
      if (ltvFilter !== 'all') {
        switch (ltvFilter) {
          case 'low':
            matchesLTV = plan.loanToValue < 75;
            break;
          case 'standard':
            matchesLTV = plan.loanToValue >= 75 && plan.loanToValue < 80;
            break;
          case 'high':
            matchesLTV = plan.loanToValue >= 80;
            break;
        }
      }
      
      return matchesSearch && matchesCategory && matchesStatus && matchesLTV;
    })
    .sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'name':
          aValue = a.name;
          bValue = b.name;
          break;
        case 'interestRate':
          aValue = a.interestRate;
          bValue = b.interestRate;
          break;
        case 'maxTenure':
          aValue = a.maxTenure;
          bValue = b.maxTenure;
          break;
        case 'minAmount':
          aValue = a.minAmount;
          bValue = b.minAmount;
          break;
        case 'loanToValue':
          aValue = a.loanToValue;
          bValue = b.loanToValue;
          break;
        case 'category':
          aValue = a.category;
          bValue = b.category;
          break;
        default:
          aValue = a.name;
          bValue = b.name;
      }
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortOrder === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      return sortOrder === 'asc' 
        ? (aValue as number) - (bValue as number)
        : (bValue as number) - (aValue as number);
    });

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'basic':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'premium':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'elite':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'active' 
      ? 'bg-green-100 text-green-800 border-green-300'
      : 'bg-red-100 text-red-800 border-red-300';
  };

  const getLTVColor = (ltv: number) => {
    if (ltv < 75) return 'bg-orange-100 text-orange-800 border-orange-300';
    if (ltv < 80) return 'bg-blue-100 text-blue-800 border-blue-300';
    return 'bg-green-100 text-green-800 border-green-300';
  };

  const getLTVLabel = (ltv: number) => {
    if (ltv < 75) return 'Conservative';
    if (ltv < 80) return 'Standard';
    return 'Competitive';
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Loading Loan Plans...</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <Skeleton className="h-12 w-full" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5" />
            <span>Loan Plans ({filteredPlans.length})</span>
          </CardTitle>
          
          <Button
            variant="outline"
            size="sm"
            onClick={onRefresh}
            className="flex items-center space-x-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Refresh</span>
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        {/* Enhanced Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search plans..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full lg:w-40">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="basic">Basic</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
              <SelectItem value="elite">Elite</SelectItem>
            </SelectContent>
          </Select>

          <Select value={ltvFilter} onValueChange={setLtvFilter}>
            <SelectTrigger className="w-full lg:w-40">
              <SelectValue placeholder="LTV Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All LTV</SelectItem>
              <SelectItem value="low">&lt; 75%</SelectItem>
              <SelectItem value="standard">75-79%</SelectItem>
              <SelectItem value="high">≥ 80%</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full lg:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Plans Table */}
        {filteredPlans.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No plans found</h3>
            <p className="text-gray-500">
              {searchTerm || categoryFilter !== 'all' || statusFilter !== 'all' || ltvFilter !== 'all'
                ? 'Try adjusting your filters or search terms.'
                : 'Get started by creating your first loan plan.'
              }
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead 
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSort('name')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Plan Name</span>
                      {sortBy === 'name' && (
                        <span className="text-xs">
                          {sortOrder === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </TableHead>
                  
                  <TableHead 
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSort('category')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Category</span>
                      {sortBy === 'category' && (
                        <span className="text-xs">
                          {sortOrder === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </TableHead>
                  
                  <TableHead 
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSort('loanToValue')}
                  >
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>LTV</span>
                      {sortBy === 'loanToValue' && (
                        <span className="text-xs">
                          {sortOrder === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </TableHead>
                  
                  <TableHead 
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSort('interestRate')}
                  >
                    <div className="flex items-center space-x-1">
                      <Percent className="w-4 h-4" />
                      <span>Interest Rate</span>
                      {sortBy === 'interestRate' && (
                        <span className="text-xs">
                          {sortOrder === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </TableHead>
                  
                  <TableHead 
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSort('maxTenure')}
                  >
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Max Tenure</span>
                      {sortBy === 'maxTenure' && (
                        <span className="text-xs">
                          {sortOrder === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </TableHead>
                  
                  <TableHead 
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSort('minAmount')}
                  >
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4" />
                      <span>Amount Range</span>
                      {sortBy === 'minAmount' && (
                        <span className="text-xs">
                          {sortOrder === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </TableHead>
                  
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              
              <TableBody>
                {filteredPlans.map((plan) => (
                  <TableRow key={plan.id} className="hover:bg-gray-50">
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div>
                          <div className="font-medium text-gray-900">{plan.name}</div>
                          <div className="flex items-center space-x-2 mt-1">
                            {plan.isPopular && (
                              <Badge className="bg-amber-100 text-amber-800 border-amber-300">
                                <Star className="w-3 h-3 mr-1" />
                                Popular
                              </Badge>
                            )}
                            {plan.specialOffer && (
                              <Badge variant="outline" className="text-xs">
                                Special Offer
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    
                    <TableCell>
                      <Badge className={getCategoryColor(plan.category)}>
                        {plan.category.charAt(0).toUpperCase() + plan.category.slice(1)}
                      </Badge>
                    </TableCell>
                    
                    <TableCell>
                      <div className="flex flex-col space-y-1">
                        <Badge className={getLTVColor(plan.loanToValue)}>
                          {plan.loanToValue}%
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {getLTVLabel(plan.loanToValue)}
                        </span>
                      </div>
                    </TableCell>
                    
                    <TableCell>
                      <div className="font-medium text-gray-900">
                        {plan.interestRate}% p.a.
                      </div>
                      <div className="text-sm text-gray-500">
                        Processing: {plan.processingFee === 0 ? 'Free' : `${plan.processingFee}%`}
                      </div>
                    </TableCell>
                    
                    <TableCell>
                      <div className="font-medium text-gray-900">
                        {plan.maxTenure} months
                      </div>
                    </TableCell>
                    
                    <TableCell>
                      <div className="font-medium text-gray-900">
                        ₹{plan.minAmount.toLocaleString('en-IN')}
                      </div>
                      <div className="text-sm text-gray-500">
                        to ₹{plan.maxAmount.toLocaleString('en-IN')}
                      </div>
                    </TableCell>
                    
                    <TableCell>
                      <Badge className={getStatusColor(plan.status)}>
                        {plan.status === 'active' ? (
                          <CheckCircle className="w-3 h-3 mr-1" />
                        ) : (
                          <XCircle className="w-3 h-3 mr-1" />
                        )}
                        {plan.status.charAt(0).toUpperCase() + plan.status.slice(1)}
                      </Badge>
                    </TableCell>
                    
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onEdit(plan)}
                          className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onDelete(plan.id)}
                          className="text-red-600 hover:text-red-800 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
        
        {/* Enhanced Summary */}
        {filteredPlans.length > 0 && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Total Plans:</span>
                <span className="ml-2 font-medium">{filteredPlans.length}</span>
              </div>
              <div>
                <span className="text-gray-500">Active:</span>
                <span className="ml-2 font-medium text-green-600">
                  {filteredPlans.filter(p => p.status === 'active').length}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Popular:</span>
                <span className="ml-2 font-medium text-amber-600">
                  {filteredPlans.filter(p => p.isPopular).length}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Avg Interest:</span>
                <span className="ml-2 font-medium">
                  {filteredPlans.length > 0 
                    ? (filteredPlans.reduce((sum, p) => sum + p.interestRate, 0) / filteredPlans.length).toFixed(1)
                    : '0'
                  }%
                </span>
              </div>
              <div>
                <span className="text-gray-500">Avg LTV:</span>
                <span className="ml-2 font-medium text-blue-600">
                  {filteredPlans.length > 0 
                    ? (filteredPlans.reduce((sum, p) => sum + p.loanToValue, 0) / filteredPlans.length).toFixed(1)
                    : '0'
                  }%
                </span>
              </div>
              <div>
                <span className="text-gray-500">LTV Range:</span>
                <span className="ml-2 font-medium">
                  {filteredPlans.length > 0 
                    ? `${Math.min(...filteredPlans.map(p => p.loanToValue))}%-${Math.max(...filteredPlans.map(p => p.loanToValue))}%`
                    : '0%-0%'
                  }
                </span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}