/**
 * Interactive script to create superadmin user
 * This script prompts for username and password (not hardcoded)
 * Run with: node scripts/init-superadmin-interactive.js
 */

const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');
const readline = require('readline');
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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function initSuperAdmin() {
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log('✅ Connected to MongoDB\n');

    const db = client.db(DB_NAME);
    const usersCollection = db.collection('crm_users');

    // Check if superadmin already exists
    const existingSuperAdmin = await usersCollection.findOne({ role: 'superadmin' });
    if (existingSuperAdmin) {
      console.log('⚠️  Superadmin already exists!');
      console.log(`   Username: ${existingSuperAdmin.username}`);
      console.log('   You can edit superadmin credentials from CRM → Manage Admins\n');
      rl.close();
      return;
    }

    console.log('Create Superadmin User');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // Get username
    let username = '';
    while (!username.trim()) {
      username = await question('Enter username: ');
      if (!username.trim()) {
        console.log('Username cannot be empty. Please try again.');
      }
    }

    // Check if username already exists
    const existingUser = await usersCollection.findOne({ username: username.trim() });
    if (existingUser) {
      console.log(`\n❌ Username "${username.trim()}" already exists!`);
      rl.close();
      return;
    }

    // Get password
    let password = '';
    while (!password.trim() || password.length < 6) {
      password = await question('Enter password (min 6 characters): ');
      if (!password.trim()) {
        console.log('Password cannot be empty. Please try again.');
      } else if (password.length < 6) {
        console.log('Password must be at least 6 characters. Please try again.');
      }
    }

    // Get name
    const name = await question('Enter full name (optional, press Enter to skip): ') || username.trim();

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create superadmin user
    const superAdmin = {
      username: username.trim(),
      password: hashedPassword,
      name: name.trim(),
      role: 'superadmin',
      createdAt: new Date(),
      createdBy: 'system',
    };

    const result = await usersCollection.insertOne(superAdmin);
    
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🎉 Superadmin created successfully!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`   Username: ${username.trim()}`);
    console.log(`   Name: ${name.trim()}`);
    console.log(`   Role: superadmin`);
    console.log(`   ID: ${result.insertedId.toString()}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('\n✅ You can now login to CRM with these credentials.');
    console.log('   All credentials are stored in the database and can be edited from CRM.\n');
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    rl.close();
    await client.close();
  }
}

initSuperAdmin();

