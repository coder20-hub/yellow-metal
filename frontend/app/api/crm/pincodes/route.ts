import { NextRequest, NextResponse } from 'next/server';
import { getDatabase, ObjectId } from '@/lib/mongodb';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

async function verifySuperAdmin(request: NextRequest): Promise<{ valid: boolean; userId?: string }> {
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

    return { valid: true, userId: user._id.toString() };
  } catch {
    return { valid: false };
  }
}

// GET - List all pincodes
export async function GET(request: NextRequest) {
  try {
    const auth = await verifySuperAdmin(request);
    if (!auth.valid) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 403 }
      );
    }

    const db = await getDatabase();
    const pincodesCollection = db.collection('pincodes');

    const pincodes = await pincodesCollection
      .find({})
      .sort({ town: 1 })
      .toArray();

    return NextResponse.json({
      success: true,
      pincodes: pincodes.map(p => ({
        id: p._id.toString(),
        town: p.town,
        pincode: p.pincode,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
      })),
    });
  } catch (error) {
    console.error('Get pincodes error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Create new pincode
export async function POST(request: NextRequest) {
  try {
    const auth = await verifySuperAdmin(request);
    if (!auth.valid) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 403 }
      );
    }

    const { town, pincode } = await request.json();

    if (!town || !pincode) {
      return NextResponse.json(
        { success: false, error: 'Town and pincode are required' },
        { status: 400 }
      );
    }

    // Validate pincode format (6 digits)
    if (!/^\d{6}$/.test(pincode)) {
      return NextResponse.json(
        { success: false, error: 'Pincode must be 6 digits' },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const pincodesCollection = db.collection('pincodes');

    // Check if pincode already exists
    const existingPincode = await pincodesCollection.findOne({ pincode });
    if (existingPincode) {
      return NextResponse.json(
        { success: false, error: 'Pincode already exists' },
        { status: 400 }
      );
    }

    const newPincode = {
      town,
      pincode,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await pincodesCollection.insertOne(newPincode);

    return NextResponse.json({
      success: true,
      pincode: {
        id: result.insertedId.toString(),
        ...newPincode,
      },
    });
  } catch (error) {
    console.error('Create pincode error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT - Update pincode
export async function PUT(request: NextRequest) {
  try {
    const auth = await verifySuperAdmin(request);
    if (!auth.valid) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 403 }
      );
    }

    const { id, town, pincode } = await request.json();

    if (!id || !town || !pincode) {
      return NextResponse.json(
        { success: false, error: 'ID, town, and pincode are required' },
        { status: 400 }
      );
    }

    // Validate pincode format
    if (!/^\d{6}$/.test(pincode)) {
      return NextResponse.json(
        { success: false, error: 'Pincode must be 6 digits' },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const pincodesCollection = db.collection('pincodes');

    // Check if pincode already exists (excluding current one)
    const existingPincode = await pincodesCollection.findOne({ 
      pincode,
      _id: { $ne: new ObjectId(id) }
    });
    if (existingPincode) {
      return NextResponse.json(
        { success: false, error: 'Pincode already exists' },
        { status: 400 }
      );
    }

    let objectId;
    try {
      objectId = new ObjectId(id);
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid pincode ID' },
        { status: 400 }
      );
    }

    const result = await pincodesCollection.updateOne(
      { _id: objectId },
      {
        $set: {
          town,
          pincode,
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Pincode not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Update pincode error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE - Delete pincode
export async function DELETE(request: NextRequest) {
  try {
    const auth = await verifySuperAdmin(request);
    if (!auth.valid) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Pincode ID is required' },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const pincodesCollection = db.collection('pincodes');

    let objectId;
    try {
      objectId = new ObjectId(id);
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid pincode ID' },
        { status: 400 }
      );
    }

    const result = await pincodesCollection.deleteOne({ _id: objectId });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Pincode not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete pincode error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

