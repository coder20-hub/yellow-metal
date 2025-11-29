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

// GET - List all loan plans
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
    const plansCollection = db.collection('loan_plans');

    const plans = await plansCollection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({
      success: true,
      plans: plans.map(plan => ({
        id: plan._id.toString(),
        name: plan.name,
        interestRate: plan.interestRate,
        maxTenure: plan.maxTenure,
        minAmount: plan.minAmount,
        maxAmount: plan.maxAmount,
        processingFee: plan.processingFee,
        loanToValue: plan.loanToValue,
        features: plan.features || [],
        specialOffer: plan.specialOffer,
        isPopular: plan.isPopular,
        category: plan.category,
        status: plan.status,
        createdAt: plan.createdAt,
        updatedAt: plan.updatedAt,
      })),
    });
  } catch (error) {
    console.error('Get loan plans error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Create new loan plan
export async function POST(request: NextRequest) {
  try {
    const auth = await verifySuperAdmin(request);
    if (!auth.valid) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const {
      name,
      interestRate,
      maxTenure,
      minAmount,
      maxAmount,
      processingFee,
      loanToValue,
      features,
      specialOffer,
      isPopular,
      category,
      status,
    } = body;

    if (!name || interestRate === undefined || !maxTenure || !minAmount || !maxAmount) {
      return NextResponse.json(
        { success: false, error: 'Required fields are missing' },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const plansCollection = db.collection('loan_plans');

    const newPlan = {
      name,
      interestRate: parseFloat(interestRate),
      maxTenure: parseInt(maxTenure),
      minAmount: parseFloat(minAmount),
      maxAmount: parseFloat(maxAmount),
      processingFee: processingFee ? parseFloat(processingFee) : 0,
      loanToValue: loanToValue ? parseFloat(loanToValue) : 75,
      features: features || [],
      specialOffer: specialOffer || null,
      isPopular: isPopular || false,
      category: category || 'basic',
      status: status || 'active',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await plansCollection.insertOne(newPlan);

    return NextResponse.json({
      success: true,
      plan: {
        id: result.insertedId.toString(),
        ...newPlan,
      },
    });
  } catch (error) {
    console.error('Create loan plan error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT - Update loan plan
export async function PUT(request: NextRequest) {
  try {
    const auth = await verifySuperAdmin(request);
    if (!auth.valid) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Plan ID is required' },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const plansCollection = db.collection('loan_plans');

    // Convert numeric fields
    const updateFields: any = {
      updatedAt: new Date(),
    };

    if (updateData.interestRate !== undefined) updateFields.interestRate = parseFloat(updateData.interestRate);
    if (updateData.maxTenure !== undefined) updateFields.maxTenure = parseInt(updateData.maxTenure);
    if (updateData.minAmount !== undefined) updateFields.minAmount = parseFloat(updateData.minAmount);
    if (updateData.maxAmount !== undefined) updateFields.maxAmount = parseFloat(updateData.maxAmount);
    if (updateData.processingFee !== undefined) updateFields.processingFee = parseFloat(updateData.processingFee);
    if (updateData.loanToValue !== undefined) updateFields.loanToValue = parseFloat(updateData.loanToValue);
    if (updateData.name !== undefined) updateFields.name = updateData.name;
    if (updateData.features !== undefined) updateFields.features = updateData.features;
    if (updateData.specialOffer !== undefined) updateFields.specialOffer = updateData.specialOffer;
    if (updateData.isPopular !== undefined) updateFields.isPopular = updateData.isPopular;
    if (updateData.category !== undefined) updateFields.category = updateData.category;
    if (updateData.status !== undefined) updateFields.status = updateData.status;

    let objectId;
    try {
      objectId = new ObjectId(id);
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid plan ID' },
        { status: 400 }
      );
    }

    const result = await plansCollection.updateOne(
      { _id: objectId },
      { $set: updateFields }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Plan not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Update loan plan error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE - Delete loan plan
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
        { success: false, error: 'Plan ID is required' },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const plansCollection = db.collection('loan_plans');

    let objectId;
    try {
      objectId = new ObjectId(id);
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid plan ID' },
        { status: 400 }
      );
    }

    const result = await plansCollection.deleteOne({ _id: objectId });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Plan not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete loan plan error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

