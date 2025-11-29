import { NextRequest, NextResponse } from 'next/server';
import { getDatabase, ObjectId } from '@/lib/mongodb';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

async function verifyAuth(request: NextRequest): Promise<{ valid: boolean; userId?: string; role?: string }> {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    if (!token) return { valid: false };

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    
    const db = await getDatabase();
    const usersCollection = db.collection('crm_users');
    const user = await usersCollection.findOne({ _id: new ObjectId(decoded.userId) });

    if (!user) {
      return { valid: false };
    }

    return { valid: true, userId: user._id.toString(), role: user.role };
  } catch {
    return { valid: false };
  }
}

// GET - List all loan applications with filtering
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
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const skip = (page - 1) * limit;
    
    // Filter parameters
    const pincode = searchParams.get('pincode');
    const minAmount = searchParams.get('minAmount');
    const maxAmount = searchParams.get('maxAmount');
    const branch = searchParams.get('branch');
    const search = searchParams.get('search');

    const db = await getDatabase();
    const applicationsCollection = db.collection('loan_applications');

    // Build filter query
    const filter: any = {};
    
    if (pincode) {
      // Extract pincode from branch field (branch can be "City or 560001")
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

    const [applications, total] = await Promise.all([
      applicationsCollection
        .find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .toArray(),
      applicationsCollection.countDocuments(filter),
    ]);

    return NextResponse.json({
      success: true,
      applications: applications.map(app => ({
        id: app._id.toString(),
        name: app.name,
        phone: app.phone,
        loanAmount: app.loanAmount,
        branch: app.branch,
        pincode: app.pincode || extractPincode(app.branch),
        createdAt: app.createdAt,
        referenceNumber: app.referenceNumber,
        status: app.status || 'pending',
      })),
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Get applications error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function extractPincode(branch: string): string | null {
  // Extract 6-digit pincode from branch string
  const match = branch.match(/\b\d{6}\b/);
  return match ? match[0] : null;
}

// POST - Create new loan application
export async function POST(request: NextRequest) {
  try {
    const { name, phone, loanAmount, branch } = await request.json();

    if (!name || !phone || !loanAmount || !branch) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const applicationsCollection = db.collection('loan_applications');

    const referenceNumber = `GL${Date.now()}`;

    // Extract pincode from branch if present
    const pincodeMatch = branch.match(/\b\d{6}\b/);
    const pincode = pincodeMatch ? pincodeMatch[0] : null;

    const newApplication = {
      name,
      phone,
      loanAmount: parseFloat(loanAmount),
      branch,
      pincode,
      referenceNumber,
      createdAt: new Date(),
      status: 'pending',
    };

    const result = await applicationsCollection.insertOne(newApplication);

    return NextResponse.json({
      success: true,
      application: {
        id: result.insertedId.toString(),
        ...newApplication,
      },
    });
  } catch (error) {
    console.error('Create application error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT - Update application status
export async function PUT(request: NextRequest) {
  try {
    const auth = await verifyAuth(request);
    if (!auth.valid) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id, status } = await request.json();

    if (!id || !status) {
      return NextResponse.json(
        { success: false, error: 'Application ID and status are required' },
        { status: 400 }
      );
    }

    // Validate status value
    const validStatuses = ['pending', 'approved', 'rejected', 'in_progress', 'completed'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, error: `Invalid status. Must be one of: ${validStatuses.join(', ')}` },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const applicationsCollection = db.collection('loan_applications');

    let objectId;
    try {
      objectId = new ObjectId(id);
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid application ID' },
        { status: 400 }
      );
    }

    const result = await applicationsCollection.updateOne(
      { _id: objectId },
      { 
        $set: { 
          status: status,
          updatedAt: new Date(),
          updatedBy: auth.userId,
        } 
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Application not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      success: true,
      message: 'Application status updated successfully'
    });
  } catch (error) {
    console.error('Update application status error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

