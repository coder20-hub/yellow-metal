import { NextRequest, NextResponse } from 'next/server';
import { getDatabase, ObjectId } from '@/lib/mongodb';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

async function verifyAuth(request: NextRequest): Promise<{ valid: boolean }> {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    if (!token) return { valid: false };

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    
    const db = await getDatabase();
    const usersCollection = db.collection('crm_users');
    const user = await usersCollection.findOne({ _id: new ObjectId(decoded.userId) });

    return { valid: !!user };
  } catch {
    return { valid: false };
  }
}

export async function GET(request: NextRequest) {
  try {
    const auth = await verifyAuth(request);
    if (!auth.valid) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    
    // Apply same filters as GET endpoint
    const pincode = searchParams.get('pincode');
    const minAmount = searchParams.get('minAmount');
    const maxAmount = searchParams.get('maxAmount');
    const branch = searchParams.get('branch');
    const search = searchParams.get('search');

    const db = await getDatabase();
    const applicationsCollection = db.collection('loan_applications');

    // Build filter query (same as GET endpoint)
    const filter: any = {};
    
    if (pincode) {
      filter.$or = [
        { branch: { $regex: pincode, $options: 'i' } },
        { pincode: pincode }
      ];
    }
    
    if (minAmount || maxAmount) {
      filter.loanAmount = {};
      if (minAmount) {
        filter.loanAmount.$gte = parseFloat(minAmount);
      }
      if (maxAmount) {
        filter.loanAmount.$lte = parseFloat(maxAmount);
      }
    }
    
    if (branch) {
      filter.branch = { $regex: branch, $options: 'i' };
    }
    
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
        { referenceNumber: { $regex: search, $options: 'i' } },
        { branch: { $regex: search, $options: 'i' } }
      ];
    }

    const applications = await applicationsCollection
      .find(filter)
      .sort({ createdAt: -1 })
      .toArray();

    // Convert to CSV format
    const csvHeaders = ['Reference Number', 'Name', 'Phone', 'Loan Amount', 'Branch', 'Pincode', 'Status', 'Created At'];
    const csvRows = applications.map(app => [
      app.referenceNumber || '',
      app.name || '',
      app.phone || '',
      app.loanAmount || 0,
      app.branch || '',
      app.pincode || extractPincode(app.branch) || '',
      app.status || 'pending',
      app.createdAt ? new Date(app.createdAt).toLocaleString('en-IN') : '',
    ]);

    const csvContent = [
      csvHeaders.join(','),
      ...csvRows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    ].join('\n');

    return new NextResponse(csvContent, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="loan-applications-${new Date().toISOString().split('T')[0]}.csv"`,
      },
    });
  } catch (error) {
    console.error('Export applications error:', error);
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

