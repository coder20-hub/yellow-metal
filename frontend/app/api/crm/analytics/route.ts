import { NextRequest, NextResponse } from 'next/server';
import { getDatabase, ObjectId } from '@/lib/mongodb';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

async function verifySuperAdmin(request: NextRequest): Promise<{ valid: boolean }> {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    if (!token) return { valid: false };

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    
    const db = await getDatabase();
    const usersCollection = db.collection('crm_users');
    const user = await usersCollection.findOne({ _id: new ObjectId(decoded.userId) });

    if (!user || user.role !== 'superadmin') {
      return { valid: false };
    }

    return { valid: true };
  } catch {
    return { valid: false };
  }
}

export async function GET(request: NextRequest) {
  try {
    const auth = await verifySuperAdmin(request);
    if (!auth.valid) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized - Superadmin only' },
        { status: 403 }
      );
    }

    const db = await getDatabase();
    const applicationsCollection = db.collection('loan_applications');

    // Get all applications
    const applications = await applicationsCollection.find({}).toArray();

    // Total applications
    const totalApplications = applications.length;

    // Total loan amount
    const totalLoanAmount = applications.reduce((sum, app) => sum + (app.loanAmount || 0), 0);
    const avgLoanAmount = totalApplications > 0 ? totalLoanAmount / totalApplications : 0;

    // Pincode-wise statistics
    const pincodeStats: Record<string, { count: number; totalAmount: number }> = {};
    applications.forEach(app => {
      const pincode = app.pincode || extractPincode(app.branch) || 'Unknown';
      if (!pincodeStats[pincode]) {
        pincodeStats[pincode] = { count: 0, totalAmount: 0 };
      }
      pincodeStats[pincode].count++;
      pincodeStats[pincode].totalAmount += app.loanAmount || 0;
    });

    const pincodeBreakdown = Object.entries(pincodeStats)
      .map(([pincode, stats]) => ({
        pincode,
        count: stats.count,
        totalAmount: stats.totalAmount,
        avgAmount: stats.totalAmount / stats.count,
      }))
      .sort((a, b) => b.count - a.count);

    // Applications over time (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const dailyApplications: Record<string, number> = {};
    applications
      .filter(app => new Date(app.createdAt) >= thirtyDaysAgo)
      .forEach(app => {
        const date = new Date(app.createdAt).toISOString().split('T')[0];
        dailyApplications[date] = (dailyApplications[date] || 0) + 1;
      });

    const dailyTrend = Object.entries(dailyApplications)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => a.date.localeCompare(b.date));

    // Loan amount distribution
    const amountRanges = [
      { range: '0-50000', min: 0, max: 50000, count: 0 },
      { range: '50000-100000', min: 50000, max: 100000, count: 0 },
      { range: '100000-250000', min: 100000, max: 250000, count: 0 },
      { range: '250000-500000', min: 250000, max: 500000, count: 0 },
      { range: '500000+', min: 500000, max: Infinity, count: 0 },
    ];

    applications.forEach(app => {
      const amount = app.loanAmount || 0;
      const range = amountRanges.find(r => amount >= r.min && amount < r.max);
      if (range) {
        range.count++;
      }
    });

    // Branch-wise statistics
    const branchStats: Record<string, { count: number; totalAmount: number }> = {};
    applications.forEach(app => {
      const branch = app.branch || 'Unknown';
      if (!branchStats[branch]) {
        branchStats[branch] = { count: 0, totalAmount: 0 };
      }
      branchStats[branch].count++;
      branchStats[branch].totalAmount += app.loanAmount || 0;
    });

    const branchBreakdown = Object.entries(branchStats)
      .map(([branch, stats]) => ({
        branch,
        count: stats.count,
        totalAmount: stats.totalAmount,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10); // Top 10 branches

    // Monthly comparison
    const monthlyData: Record<string, { count: number; totalAmount: number }> = {};
    applications.forEach(app => {
      const month = new Date(app.createdAt).toISOString().slice(0, 7); // YYYY-MM
      if (!monthlyData[month]) {
        monthlyData[month] = { count: 0, totalAmount: 0 };
      }
      monthlyData[month].count++;
      monthlyData[month].totalAmount += app.loanAmount || 0;
    });

    const monthlyTrend = Object.entries(monthlyData)
      .map(([month, stats]) => ({
        month,
        count: stats.count,
        totalAmount: stats.totalAmount,
      }))
      .sort((a, b) => a.month.localeCompare(b.month))
      .slice(-12); // Last 12 months

    return NextResponse.json({
      success: true,
      analytics: {
        overview: {
          totalApplications,
          totalLoanAmount,
          avgLoanAmount,
        },
        pincodeBreakdown,
        dailyTrend,
        amountDistribution: amountRanges,
        branchBreakdown,
        monthlyTrend,
      },
    });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function extractPincode(branch: string): string | null {
  const match = branch.match(/\b\d{6}\b/);
  return match ? match[0] : null;
}

