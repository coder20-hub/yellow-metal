/**
 * Script to initialize default pincodes
 * Run this with: node scripts/init-pincodes.js
 */

const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local if it exists
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, 'utf8');
  envFile.split('\n').forEach(line => {
    const match = line.match(/^([^=:#]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim().replace(/^["']|["']$/g, '');
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  });
}

const MONGODB_URI = process.env.MONGODB_URI || process.env.DATABASE_URL || 'mongodb://localhost:27017';
const DB_NAME = process.env.MONGODB_DB_NAME || process.env.DATABASE_NAME || 'yellowmetal';

// Default pincodes from the image
const defaultPincodes = [
  { town: 'Chintamani', pincode: '563125' },
  { town: 'Chikkaballapur', pincode: '562101' },
  { town: 'Sidlaghatta', pincode: '562105' },
  { town: 'Kolar', pincode: '563101' },
  { town: 'Doddaballapur', pincode: '561203' },
  { town: 'Hoskote', pincode: '562114' },
  { town: 'Malur', pincode: '563130' },
  { town: 'Chittoor', pincode: '517001' },
  { town: 'Bangarpet', pincode: '563114' },
  { town: 'Mulbagal', pincode: '563131' },
  { town: 'Tirupati', pincode: '517502' },
  { town: 'Anantapur', pincode: '515001' },
  { town: 'Avalahalli', pincode: '560049' },
  { town: 'Hiriyur', pincode: '577598' },
  { town: 'Tadipatri', pincode: '515411' },
  { town: 'Palamaner', pincode: '517408' },
  { town: 'Kurnool', pincode: '518003' },
  { town: 'V.Kota', pincode: '517424' },
  { town: 'Madanapalle', pincode: '517325' },
  { town: 'Yemmignur', pincode: '518360' },
  { town: 'Nandyal', pincode: '518501' },
];

async function initPincodes() {
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db(DB_NAME);
    const pincodesCollection = db.collection('pincodes');

    // Check existing pincodes
    const existingCount = await pincodesCollection.countDocuments({});
    if (existingCount > 0) {
      console.log(`⚠️  ${existingCount} pincodes already exist.`);
      console.log('   To add these default pincodes, delete existing ones first or add them manually via CRM.');
      return;
    }

    // Insert default pincodes
    const pincodesToInsert = defaultPincodes.map(p => ({
      ...p,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    const result = await pincodesCollection.insertMany(pincodesToInsert);
    console.log(`\n🎉 Successfully added ${result.insertedCount} pincodes!`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    defaultPincodes.forEach((p, index) => {
      console.log(`   ${index + 1}. ${p.town} - ${p.pincode}`);
    });
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('\n✅ Pincodes are now available in the loan application form!');
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await client.close();
  }
}

initPincodes();

