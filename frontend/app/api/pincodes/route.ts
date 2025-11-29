import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

// Public endpoint to get all pincodes (for dropdown in application form)
export async function GET(request: NextRequest) {
  try {
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
      })),
    });
  } catch (error) {
    console.error('Get pincodes error:', error);
    // Return empty array if collection doesn't exist yet
    return NextResponse.json({
      success: true,
      pincodes: [],
    });
  }
}

