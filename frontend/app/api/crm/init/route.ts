import { NextRequest, NextResponse } from 'next/server';
import { getDatabase, ObjectId } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

// This endpoint initializes the superadmin user
// Run this once to create the initial superadmin account
export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: 'Username and password are required' },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const usersCollection = db.collection('crm_users');

    // Check if superadmin already exists
    const existingSuperAdmin = await usersCollection.findOne({ role: 'superadmin' });
    if (existingSuperAdmin) {
      return NextResponse.json(
        { success: false, error: 'Superadmin already exists' },
        { status: 400 }
      );
    }

    // Check if username already exists
    const existingUser = await usersCollection.findOne({ username });
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'Username already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create superadmin user
    const superAdmin = {
      username,
      password: hashedPassword,
      name: username,
      role: 'superadmin',
      createdAt: new Date(),
      createdBy: 'system',
    };

    const result = await usersCollection.insertOne(superAdmin);

    return NextResponse.json({
      success: true,
      message: 'Superadmin created successfully',
      admin: {
        id: result.insertedId.toString(),
        username: superAdmin.username,
        role: superAdmin.role,
      },
    });
  } catch (error) {
    console.error('Init error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

