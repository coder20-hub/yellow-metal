'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, BarChart3, Settings, TrendingUp, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();
  const [stats, setStats] = useState({
    totalApplications: 0,
    totalAmount: 0,
    avgAmount: 0,
  });
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('crm_token');
    const userStr = localStorage.getItem('crm_user');
    
    if (!token) {
      router.push('/crm');
      return;
    }

    if (userStr) {
      const userData = JSON.parse(userStr);
      setUser(userData);
    }

    fetch('/api/crm/applications', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const apps = data.applications || [];
          const total = apps.reduce((sum: number, app: any) => sum + (app.loanAmount || 0), 0);
          setStats({
            totalApplications: data.pagination?.total || apps.length,
            totalAmount: total,
            avgAmount: apps.length > 0 ? total / apps.length : 0,
          });
        }
      })
      .finally(() => setLoading(false));
  }, [router]);

  const isSuperAdmin = user?.role === 'superadmin';

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to Gold Loan CRM</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card className="border-l-4 border-l-amber-500">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Total Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-gray-900">
                {loading ? '...' : stats.totalApplications.toLocaleString()}
              </div>
              <FileText className="w-8 h-8 text-amber-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Total Loan Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-gray-900">
                  {loading ? '...' : `₹${(stats.totalAmount / 100000).toFixed(1)}L`}
                </div>
                <p className="text-xs text-gray-500 mt-1">All time</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Average Loan Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-gray-900">
                  {loading ? '...' : `₹${stats.avgAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`}
                </div>
                <p className="text-xs text-gray-500 mt-1">Per application</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Link href="/crm/applications" className="block text-sm text-blue-600 hover:underline">
                View Applications →
              </Link>
              {isSuperAdmin && (
                <Link href="/crm/analytics" className="block text-sm text-blue-600 hover:underline">
                  View Analytics →
                </Link>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Links */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/crm/applications">
          <Card className="cursor-pointer hover:shadow-lg transition-all hover:border-amber-500 border-2">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <FileText className="h-5 w-5 mr-2 text-amber-600" />
                Loan Applications
              </CardTitle>
              <p className="text-sm text-gray-600">View and manage all loan applications</p>
            </CardHeader>
          </Card>
        </Link>

        {isSuperAdmin && (
          <>
            <Link href="/crm/analytics">
              <Card className="cursor-pointer hover:shadow-lg transition-all hover:border-blue-500 border-2">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                    Analytics Dashboard
                  </CardTitle>
                  <p className="text-sm text-gray-600">View detailed analytics and insights</p>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/crm/settings">
              <Card className="cursor-pointer hover:shadow-lg transition-all hover:border-green-500 border-2">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Settings className="h-5 w-5 mr-2 text-green-600" />
                    Settings
                  </CardTitle>
                  <p className="text-sm text-gray-600">Manage loan plans and interest rates</p>
                </CardHeader>
              </Card>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

