/**
 * Migration Script: Export from Local MongoDB and Import to MongoDB Atlas
 * 
 * This script migrates all collections from your local MongoDB to MongoDB Atlas.
 * 
 * Usage:
 * 1. Update LOCAL_URI and LOCAL_DB_NAME below with your local MongoDB details
 * 2. Update ATLAS_URI below with your MongoDB Atlas connection string
 * 3. Run: node scripts/migrate-to-atlas.js
 */

const { MongoClient } = require('mongodb');
const readline = require('readline');

// Configuration - UPDATE THESE VALUES
const LOCAL_URI = 'mongodb://localhost:27017';
const LOCAL_DB_NAME = 'yellowmetal'; // or 'crm_db' - check your local database name

// Atlas connection string - CONFIGURED
// Format: mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/database-name
// IMPORTANT: Password contains "@" which must be URL-encoded as "%40"
// Replace "xxxxx" with your actual cluster ID from MongoDB Atlas
const ATLAS_URI = 'mongodb+srv://yellowmetal:Yellowmetal%40123@cluster0.xxxxx.mongodb.net/yellowmetal?retryWrites=true&w=majority&appName=Cluster0';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

// Collections to migrate (based on your application)
const collectionsToMigrate = [
  'crm_users',
  'loan_applications',
  'pincodes',
  'crm_settings',
  'loan_plans',
  'visitors'
];

async function migrateData() {
  try {
    console.log('\n🔄 Starting MongoDB Migration Process...\n');
    console.log('═══════════════════════════════════════════════════════════\n');

    // Validate Atlas URI
    if (ATLAS_URI.includes('REPLACE_WITH_YOUR_ATLAS_CONNECTION_STRING')) {
      console.error('❌ ERROR: Please update ATLAS_URI in the script with your MongoDB Atlas connection string!');
      console.log('\n📝 Instructions:');
      console.log('1. Get your connection string from MongoDB Atlas');
      console.log('2. Open: frontend/scripts/migrate-to-atlas.js');
      console.log('3. Replace ATLAS_URI value with your connection string');
      console.log('4. Run the script again\n');
      process.exit(1);
    }

    // Connect to local database
    console.log('📡 Connecting to LOCAL MongoDB...');
    const localClient = new MongoClient(LOCAL_URI);
    await localClient.connect();
    const localDb = localClient.db(LOCAL_DB_NAME);
    console.log('✅ Connected to local database:', LOCAL_DB_NAME);

    // Connect to Atlas
    console.log('📡 Connecting to MONGODB ATLAS...');
    const atlasClient = new MongoClient(ATLAS_URI);
    await atlasClient.connect();
    const atlasDb = atlasClient.db();
    console.log('✅ Connected to MongoDB Atlas\n');

    console.log('📦 Checking collections...\n');
    console.log('═══════════════════════════════════════════════════════════\n');

    let totalMigrated = 0;
    let totalSkipped = 0;
    let totalErrors = 0;

    for (const collectionName of collectionsToMigrate) {
      try {
        // Check if collection exists in local database
        const localCollections = await localDb.listCollections({ name: collectionName }).toArray();
        
        if (localCollections.length === 0) {
          console.log(`⚠️  Collection "${collectionName}" not found in local database. Skipping...`);
          totalSkipped++;
          continue;
        }

        // Get all documents from local
        const documents = await localDb.collection(collectionName).find({}).toArray();
        
        if (documents.length === 0) {
          console.log(`ℹ️  Collection "${collectionName}" is empty. Skipping...`);
          totalSkipped++;
          continue;
        }

        console.log(`📄 Found ${documents.length} documents in "${collectionName}"`);

        // Check if collection already exists in Atlas
        const atlasCollections = await atlasDb.listCollections({ name: collectionName }).toArray();
        
        if (atlasCollections.length > 0) {
          const existingCount = await atlasDb.collection(collectionName).countDocuments();
          console.log(`⚠️  Collection "${collectionName}" already exists in Atlas (${existingCount} documents)`);
          
          const answer = await askQuestion(`   Do you want to replace it? (yes/no): `);
          if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
            // Drop existing collection
            await atlasDb.collection(collectionName).drop();
            console.log(`   ✅ Dropped existing collection`);
          } else {
            console.log(`   ⏭️  Skipping "${collectionName}"`);
            totalSkipped++;
            continue;
          }
        }

        // Insert into Atlas
        if (documents.length > 0) {
          const result = await atlasDb.collection(collectionName).insertMany(documents);
          console.log(`✅ Migrated "${collectionName}": ${result.insertedCount} documents\n`);
          totalMigrated += result.insertedCount;
        }

      } catch (error) {
        if (error.code === 11000) {
          console.log(`⚠️  Duplicate key error for "${collectionName}". Skipping...`);
          totalSkipped++;
        } else {
          console.error(`❌ Error migrating "${collectionName}":`, error.message);
          totalErrors++;
        }
      }
    }

    await localClient.close();
    await atlasClient.close();
    rl.close();

    console.log('\n═══════════════════════════════════════════════════════════');
    console.log('✅ Migration completed!');
    console.log('═══════════════════════════════════════════════════════════\n');
    console.log(`📊 Summary:`);
    console.log(`   ✅ Documents migrated: ${totalMigrated}`);
    console.log(`   ⏭️  Collections skipped: ${totalSkipped}`);
    console.log(`   ❌ Errors: ${totalErrors}\n`);
    console.log('🎉 Your data is now in MongoDB Atlas!');
    console.log('💡 Next step: Update environment variables in Netlify\n');

  } catch (error) {
    console.error('\n❌ Migration failed:', error.message);
    console.error('\n🔍 Troubleshooting:');
    console.error('1. Check if local MongoDB is running');
    console.error('2. Verify Atlas connection string is correct');
    console.error('3. Ensure Atlas network access allows your IP');
    console.error('4. Verify database user credentials\n');
    process.exit(1);
  }
}

// Run migration
console.log('╔═══════════════════════════════════════════════════════════╗');
console.log('║   MongoDB Local to Atlas Migration Tool                  ║');
console.log('╚═══════════════════════════════════════════════════════════╝');
migrateData().catch(error => {
  console.error('Fatal error:', error);
  rl.close();
  process.exit(1);
});

