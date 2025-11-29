import { NextRequest, NextResponse } from 'next/server';
import { getDatabase, ObjectId } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';
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

// GET - List all admins
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
    const usersCollection = db.collection('crm_users');

    const admins = await usersCollection
      .find({})
      .project({ password: 0 }) // Exclude password
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({
      success: true,
      admins: admins.map(admin => ({
        id: admin._id.toString(),
        username: admin.username,
        name: admin.name || admin.username,
        role: admin.role,
        createdAt: admin.createdAt,
        lastLogin: admin.lastLogin,
      })),
    });
  } catch (error) {
    console.error('Get admins error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Create new admin
export async function POST(request: NextRequest) {
  try {
    const auth = await verifySuperAdmin(request);
    if (!auth.valid) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 403 }
      );
    }

    const { username, password, name, role } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: 'Username and password are required' },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const usersCollection = db.collection('crm_users');

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

    // Create admin user
    const newAdmin = {
      username,
      password: hashedPassword,
      name: name || username,
      role: role || 'admin',
      createdAt: new Date(),
      createdBy: auth.userId,
    };

    const result = await usersCollection.insertOne(newAdmin);

    return NextResponse.json({
      success: true,
      admin: {
        id: result.insertedId.toString(),
        username: newAdmin.username,
        name: newAdmin.name,
        role: newAdmin.role,
      },
    });
  } catch (error) {
    console.error('Create admin error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT - Update admin
export async function PUT(request: NextRequest) {
  try {
    const auth = await verifySuperAdmin(request);
    if (!auth.valid) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 403 }
      );
    }

    const { id, username, password, name, role } = await request.json();

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Admin ID is required' },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const usersCollection = db.collection('crm_users');

    let objectId;
    try {
      objectId = new ObjectId(id);
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid admin ID' },
        { status: 400 }
      );
    }

    // Get the user being updated
    const userToUpdate = await usersCollection.findOne({ _id: objectId });
    
    if (!userToUpdate) {
      return NextResponse.json(
        { success: false, error: 'Admin not found' },
        { status: 404 }
      );
    }

    const updateData: any = {
      updatedAt: new Date(),
      updatedBy: auth.userId,
    };

    // Allow username change (check for duplicates)
    if (username && username !== userToUpdate.username) {
      const existingUser = await usersCollection.findOne({ 
        username,
        _id: { $ne: objectId }
      });
      if (existingUser) {
        return NextResponse.json(
          { success: false, error: 'Username already exists' },
          { status: 400 }
        );
      }
      updateData.username = username;
    }

    if (name) updateData.name = name;

    // Prevent role change for superadmin users (can only be superadmin)
    if (role && userToUpdate.role === 'superadmin' && role !== 'superadmin') {
      return NextResponse.json(
        { success: false, error: 'Cannot change superadmin role' },
        { status: 400 }
      );
    }
    // Allow role change for non-superadmin users
    if (role && userToUpdate.role !== 'superadmin') {
      updateData.role = role;
    }

    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const result = await usersCollection.updateOne(
      { _id: objectId },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Admin not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: 'Admin updated successfully' });
  } catch (error) {
    console.error('Update admin error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE - Delete admin
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
        { success: false, error: 'Admin ID is required' },
        { status: 400 }
      );
    }

    // Prevent deleting yourself
    const token = request.headers.get('authorization')?.replace('Bearer ', '') || '';
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as any;
      if (decoded.userId === id) {
        return NextResponse.json(
          { success: false, error: 'Cannot delete your own account' },
          { status: 400 }
        );
      }
    } catch {
      // Token verification failed, but continue with role check
    }

    const db = await getDatabase();
    const usersCollection = db.collection('crm_users');

    let objectId;
    try {
      objectId = new ObjectId(id);
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid admin ID' },
        { status: 400 }
      );
    }

    // Check if user exists and is not a superadmin
    const userToDelete = await usersCollection.findOne({ _id: objectId });
    
    if (!userToDelete) {
      return NextResponse.json(
        { success: false, error: 'Admin not found' },
        { status: 404 }
      );
    }

    // Prevent deletion of superadmin users
    if (userToDelete.role === 'superadmin') {
      return NextResponse.json(
        { success: false, error: 'Cannot delete superadmin. You can only edit superadmin credentials.' },
        { status: 400 }
      );
    }

      const result = await usersCollection.deleteOne({ _id: objectId });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Admin not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete admin error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

