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

// GET - Get settings (default interest rate)
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
    const settingsCollection = db.collection('crm_settings');

    let settings = await settingsCollection.findOne({ key: 'defaultInterestRate' });
    
    if (!settings) {
      // Check if old format exists (no key field)
      const oldSettings = await settingsCollection.findOne({});
      if (oldSettings && oldSettings.defaultInterestRate !== undefined) {
        // Migrate old format
        await settingsCollection.updateOne(
          { _id: oldSettings._id },
          { $set: { key: 'defaultInterestRate' } }
        );
        settings = { ...oldSettings, key: 'defaultInterestRate' };
      }
    }

    // Return null if not set - no hardcoded defaults
    return NextResponse.json({
      success: true,
      settings: {
        defaultInterestRate: settings?.value || null,
      },
    });
  } catch (error) {
    console.error('Get settings error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT - Update settings
export async function PUT(request: NextRequest) {
  try {
    const auth = await verifySuperAdmin(request);
    if (!auth.valid) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 403 }
      );
    }

    const { defaultInterestRate } = await request.json();

    if (defaultInterestRate === undefined) {
      return NextResponse.json(
        { success: false, error: 'Default interest rate is required' },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const settingsCollection = db.collection('crm_settings');

    await settingsCollection.updateOne(
      { key: 'defaultInterestRate' },
      {
        $set: {
          value: parseFloat(defaultInterestRate),
          updatedAt: new Date(),
        },
      },
      { upsert: true }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Update settings error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

