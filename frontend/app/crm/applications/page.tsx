'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Download, Loader2, Search, Filter, X } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Application {
  id: string;
  name: string;
  phone: string;
  loanAmount: number;
  branch: string;
  pincode?: string;
  createdAt: string;
  referenceNumber: string;
  status: string;
}

export default function ApplicationsPage() {
  const router = useRouter();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    pincode: '',
    minAmount: '',
    maxAmount: '',
    branch: '',
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('crm_token');
    if (!token) {
      router.push('/crm');
      return;
    }

    fetchApplications(token);
  }, [router]);

  const fetchApplications = async (token: string) => {
    try {
      const params = new URLSearchParams();
      if (filters.search) params.append('search', filters.search);
      if (filters.pincode) params.append('pincode', filters.pincode);
      if (filters.minAmount) params.append('minAmount', filters.minAmount);
      if (filters.maxAmount) params.append('maxAmount', filters.maxAmount);
      if (filters.branch) params.append('branch', filters.branch);

      const response = await fetch(`/api/crm/applications?${params.toString()}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.success) {
        setApplications(data.applications || []);
      }
    } catch (error) {
      console.error('Error fetching applications:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleApplyFilters = () => {
    setLoading(true);
    const token = localStorage.getItem('crm_token');
    if (token) {
      fetchApplications(token);
    }
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      pincode: '',
      minAmount: '',
      maxAmount: '',
      branch: '',
    });
    setLoading(true);
    const token = localStorage.getItem('crm_token');
    if (token) {
      fetchApplications(token);
    }
  };

  const getStatusClassName = (status: string, isMobile = false) => {
    const baseClass = isMobile 
      ? 'w-[100px] h-7 text-xs font-medium' 
      : 'w-[130px] sm:w-[140px] h-8 text-xs font-medium';
    
    const statusClasses = {
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
      approved: 'bg-green-100 text-green-800 border-green-300',
      rejected: 'bg-red-100 text-red-800 border-red-300',
      in_progress: 'bg-blue-100 text-blue-800 border-blue-300',
      completed: 'bg-purple-100 text-purple-800 border-purple-300',
    };
    
    return `${baseClass} ${statusClasses[status as keyof typeof statusClasses] || 'bg-gray-100 text-gray-800 border-gray-300'}`;
  };

  const handleStatusUpdate = async (applicationId: string, newStatus: string) => {
    const token = localStorage.getItem('crm_token');
    if (!token) return;

    try {
      const response = await fetch('/api/crm/applications', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id: applicationId, status: newStatus }),
      });

      const data = await response.json();

      if (data.success) {
        // Update the local state
        setApplications(prev =>
          prev.map(app =>
            app.id === applicationId ? { ...app, status: newStatus } : app
          )
        );
      } else {
        alert(data.error || 'Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status. Please try again.');
    }
  };

  const handleExport = async () => {
    const token = localStorage.getItem('crm_token');
    if (!token) return;

    setExporting(true);
    try {
      const params = new URLSearchParams();
      if (filters.search) params.append('search', filters.search);
      if (filters.pincode) params.append('pincode', filters.pincode);
      if (filters.minAmount) params.append('minAmount', filters.minAmount);
      if (filters.maxAmount) params.append('maxAmount', filters.maxAmount);
      if (filters.branch) params.append('branch', filters.branch);

      const response = await fetch(`/api/crm/applications/export?${params.toString()}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `loan-applications-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error exporting applications:', error);
      alert('Failed to export applications');
    } finally {
      setExporting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 max-w-full overflow-x-hidden">
      {/* Header Section - Mobile Responsive */}
      <div className="mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Loan Applications</h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1">Manage and track all loan applications</p>
          </div>
          <div className="flex flex-row items-center gap-2 sm:gap-2 flex-shrink-0">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center flex-1 sm:flex-initial"
            size="sm"
          >
            <Filter className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Filters</span>
          </Button>
          <Button 
            onClick={handleExport} 
            disabled={exporting} 
            className="bg-amber-600 hover:bg-amber-700 flex-1 sm:flex-initial"
            size="sm"
          >
            {exporting ? (
              <>
                <Loader2 className="h-4 w-4 sm:mr-2 animate-spin" />
                <span className="hidden sm:inline">Exporting...</span>
              </>
            ) : (
              <>
                <Download className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Export CSV</span>
              </>
            )}
          </Button>
          </div>
        </div>
      </div>

      {/* Filters Panel - Mobile Responsive */}
      {showFilters && (
        <Card className="mb-4 sm:mb-6 border-amber-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between text-base sm:text-lg">
              <span>Filter Applications</span>
              <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)} className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2 sm:col-span-1">
                <Label className="text-sm">Search</Label>
                <Input
                  placeholder="Name, phone, reference..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange('search', e.target.value)}
                  className="text-sm"
                />
              </div>
              <div className="space-y-2 sm:col-span-1">
                <Label className="text-sm">Pincode</Label>
                <Input
                  placeholder="e.g., 560001"
                  value={filters.pincode}
                  onChange={(e) => handleFilterChange('pincode', e.target.value)}
                  className="text-sm"
                />
              </div>
              <div className="space-y-2 sm:col-span-1">
                <Label className="text-sm">Min Amount (₹)</Label>
                <Input
                  type="number"
                  placeholder="Min amount"
                  value={filters.minAmount}
                  onChange={(e) => handleFilterChange('minAmount', e.target.value)}
                  className="text-sm"
                />
              </div>
              <div className="space-y-2 sm:col-span-1">
                <Label className="text-sm">Max Amount (₹)</Label>
                <Input
                  type="number"
                  placeholder="Max amount"
                  value={filters.maxAmount}
                  onChange={(e) => handleFilterChange('maxAmount', e.target.value)}
                  className="text-sm"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label className="text-sm">Branch</Label>
                <Input
                  placeholder="Branch name or location"
                  value={filters.branch}
                  onChange={(e) => handleFilterChange('branch', e.target.value)}
                  className="text-sm"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2 mt-4">
              <Button 
                onClick={handleApplyFilters} 
                className="bg-amber-600 hover:bg-amber-700 w-full sm:w-auto"
                size="sm"
              >
                Apply Filters
              </Button>
              <Button 
                variant="outline" 
                onClick={handleClearFilters}
                className="w-full sm:w-auto"
                size="sm"
              >
                Clear All
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base sm:text-lg">All Applications ({applications.length})</CardTitle>
        </CardHeader>
        <CardContent className="p-0 sm:p-6">
          {/* Desktop/Tablet Table View */}
          <div className="hidden md:block overflow-x-auto -mx-3 sm:mx-0">
            <div className="rounded-md border min-w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs sm:text-sm">Reference Number</TableHead>
                    <TableHead className="text-xs sm:text-sm">Name</TableHead>
                    <TableHead className="text-xs sm:text-sm">Phone</TableHead>
                    <TableHead className="text-xs sm:text-sm">Loan Amount</TableHead>
                    <TableHead className="text-xs sm:text-sm">Branch</TableHead>
                    <TableHead className="text-xs sm:text-sm">Pincode</TableHead>
                    <TableHead className="text-xs sm:text-sm">Status</TableHead>
                    <TableHead className="text-xs sm:text-sm">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-8 text-gray-500 text-sm">
                        {loading ? 'Loading...' : 'No applications found'}
                      </TableCell>
                    </TableRow>
                  ) : (
                    applications.map((app) => (
                      <TableRow key={app.id} className="hover:bg-gray-50">
                        <TableCell className="font-medium text-xs sm:text-sm">{app.referenceNumber}</TableCell>
                        <TableCell className="text-xs sm:text-sm">{app.name}</TableCell>
                        <TableCell className="text-xs sm:text-sm">{app.phone}</TableCell>
                        <TableCell className="font-semibold text-xs sm:text-sm">₹{app.loanAmount.toLocaleString('en-IN')}</TableCell>
                        <TableCell className="text-xs sm:text-sm">{app.branch}</TableCell>
                        <TableCell className="text-xs sm:text-sm">{app.pincode || '-'}</TableCell>
                        <TableCell>
                          <Select
                            value={app.status || 'pending'}
                            onValueChange={(newStatus) => handleStatusUpdate(app.id, newStatus)}
                          >
                            <SelectTrigger className={getStatusClassName(app.status || 'pending', false)}>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="in_progress">In Progress</SelectItem>
                              <SelectItem value="approved">Approved</SelectItem>
                              <SelectItem value="rejected">Rejected</SelectItem>
                              <SelectItem value="completed">Completed</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm">
                          {new Date(app.createdAt).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-3 p-3">
            {applications.length === 0 ? (
              <div className="text-center py-8 text-gray-500 text-sm">
                {loading ? 'Loading...' : 'No applications found'}
              </div>
            ) : (
              applications.map((app) => (
                <Card key={app.id} className="border border-gray-200 shadow-sm">
                  <CardContent className="p-4 space-y-3">
                    {/* Header Row */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-gray-900 truncate">{app.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">Ref: {app.referenceNumber}</p>
                      </div>
                      <Select
                        value={app.status || 'pending'}
                        onValueChange={(newStatus) => handleStatusUpdate(app.id, newStatus)}
                      >
                        <SelectTrigger className={getStatusClassName(app.status || 'pending', true)}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="in_progress">In Progress</SelectItem>
                          <SelectItem value="approved">Approved</SelectItem>
                          <SelectItem value="rejected">Rejected</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <p className="text-gray-500 mb-0.5">Phone</p>
                        <p className="text-gray-900 font-medium">{app.phone}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-0.5">Loan Amount</p>
                        <p className="text-gray-900 font-semibold">₹{app.loanAmount.toLocaleString('en-IN')}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-0.5">Branch</p>
                        <p className="text-gray-900">{app.branch}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-0.5">Pincode</p>
                        <p className="text-gray-900">{app.pincode || '-'}</p>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-xs text-gray-500">
                        {new Date(app.createdAt).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

