/**
 * Script to fix/update existing admin user's role to superadmin
 * Run this if your admin user is showing as "admin" instead of "superadmin"
 * 
 * Run with: node scripts/fix-admin-role.js
 */

const { MongoClient, ObjectId } = require('mongodb');
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
const USERNAME = 'admin';

async function fixAdminRole() {
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db(DB_NAME);
    const usersCollection = db.collection('crm_users');

    // Find the admin user
    const adminUser = await usersCollection.findOne({ username: USERNAME });

    if (!adminUser) {
      console.log('❌ Admin user not found!');
      console.log('   Please create the admin user first using init-default-superadmin.js');
      return;
    }

    console.log('\n📋 Current user details:');
    console.log('   Username:', adminUser.username);
    console.log('   Current Role:', adminUser.role || '(not set)');
    console.log('   Name:', adminUser.name || adminUser.username);

    // Update role to superadmin
    const result = await usersCollection.updateOne(
      { username: USERNAME },
      {
        $set: {
          role: 'superadmin',
          updatedAt: new Date(),
        },
      }
    );

    if (result.modifiedCount > 0) {
      console.log('\n✅ Successfully updated role to superadmin!');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('   Username: admin');
      console.log('   New Role: superadmin');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('\n💡 Please log out and log back in to see the changes.');
    } else {
      console.log('\n⚠️  Role was already set to superadmin or no changes needed.');
    }

    // Verify the update
    const updatedUser = await usersCollection.findOne({ username: USERNAME });
    console.log('\n📋 Verified user details:');
    console.log('   Username:', updatedUser.username);
    console.log('   Role:', updatedUser.role);
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await client.close();
  }
}

fixAdminRole();

