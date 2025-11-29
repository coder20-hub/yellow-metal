import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

// Public endpoint to get default interest rate (for loan calculator)
export async function GET() {
  try {
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
      } else {
        // Don't initialize with hardcoded value - settings must be set via CRM
        console.warn('defaultInterestRate not found in database. Please set it via CRM Settings.');
        return NextResponse.json({
          success: false,
          error: 'Interest rate not configured. Please set it via CRM Settings first.',
          defaultInterestRate: null,
        }, { status: 404 });
      }
    }

    return NextResponse.json({
      success: true,
      defaultInterestRate: settings.value || 10.5,
    });
  } catch (error) {
    console.error('Get public settings error:', error);
    // Return error instead of hardcoded fallback
    console.error('Failed to get settings from database');
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch settings from database',
      defaultInterestRate: null,
    }, { status: 500 });
  }
}

