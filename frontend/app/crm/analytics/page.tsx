'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp, MapPin, DollarSign, Loader2, Users } from 'lucide-react';

const COLORS = ['#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EF4444', '#F97316'];

interface AnalyticsData {
  overview: {
    totalApplications: number;
    totalLoanAmount: number;
    avgLoanAmount: number;
  };
  pincodeBreakdown: Array<{ pincode: string; count: number; totalAmount: number; avgAmount: number }>;
  dailyTrend: Array<{ date: string; count: number }>;
  amountDistribution: Array<{ range: string; count: number }>;
  branchBreakdown: Array<{ branch: string; count: number; totalAmount: number }>;
  monthlyTrend: Array<{ month: string; count: number; totalAmount: number }>;
}

export default function AnalyticsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('crm_token');
    const userStr = localStorage.getItem('crm_user');
    
    if (!token) {
      router.push('/crm');
      return;
    }

    // Check if user is superadmin
    if (userStr) {
      const user = JSON.parse(userStr);
      if (user.role !== 'superadmin') {
        router.push('/crm/dashboard');
        return;
      }
    }

    fetch('/api/crm/analytics', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setAnalytics(data.analytics);
        } else {
          setError(data.error || 'Failed to load analytics');
        }
      })
      .catch(() => {
        setError('Failed to load analytics');
      })
      .finally(() => setLoading(false));
  }, [router]);

  if (loading) {
    return (
      <div className="p-6 lg:p-8">
        <div className="flex items-center justify-center h-96">
          <Loader2 className="h-8 w-8 animate-spin text-amber-600" />
        </div>
      </div>
    );
  }

  if (error || !analytics) {
    return (
      <div className="p-6 lg:p-8">
        <Card>
          <CardContent className="pt-6">
            <p className="text-red-600">{error || 'Failed to load analytics'}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="text-gray-600 mt-2">Comprehensive insights and statistics</p>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Total Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-gray-900">
                {analytics.overview.totalApplications.toLocaleString()}
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Total Loan Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-gray-900">
                  ₹{(analytics.overview.totalLoanAmount / 100000).toFixed(1)}L
                </div>
                <p className="text-xs text-gray-500 mt-1">All time</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Average Loan Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-gray-900">
                  ₹{analytics.overview.avgLoanAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                </div>
                <p className="text-xs text-gray-500 mt-1">Per application</p>
              </div>
              <TrendingUp className="w-8 h-8 text-amber-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid gap-6 lg:grid-cols-2 mb-8">
        {/* Daily Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Applications Over Time</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{ count: { label: 'Applications', color: '#F59E0B' } }}>
              <AreaChart data={analytics.dailyTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area type="monotone" dataKey="count" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.3} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Monthly Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Applications</CardTitle>
            <CardDescription>Last 12 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{ count: { label: 'Applications', color: '#3B82F6' } }}>
              <BarChart data={analytics.monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill="#3B82F6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid gap-6 lg:grid-cols-2 mb-8">
        {/* Amount Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Loan Amount Distribution</CardTitle>
            <CardDescription>By amount range</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}}>
              <PieChart>
                <Pie
                  data={analytics.amountDistribution}
                  dataKey="count"
                  nameKey="range"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {analytics.amountDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Top Branches */}
        <Card>
          <CardHeader>
            <CardTitle>Top Branches</CardTitle>
            <CardDescription>By application count</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.branchBreakdown.slice(0, 5).map((branch, index) => (
                <div key={branch.branch} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="text-sm font-semibold text-amber-600">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{branch.branch}</p>
                      <p className="text-sm text-gray-500">{branch.count} applications</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">₹{(branch.totalAmount / 1000).toFixed(1)}K</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pincode Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            Pincode-wise Statistics
          </CardTitle>
          <CardDescription>Applications by pincode</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Pincode</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">Count</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">Total Amount</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">Avg Amount</th>
                </tr>
              </thead>
              <tbody>
                {analytics.pincodeBreakdown.slice(0, 10).map((item) => (
                  <tr key={item.pincode} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{item.pincode}</td>
                    <td className="py-3 px-4 text-right">{item.count}</td>
                    <td className="py-3 px-4 text-right">₹{item.totalAmount.toLocaleString('en-IN')}</td>
                    <td className="py-3 px-4 text-right">₹{item.avgAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

