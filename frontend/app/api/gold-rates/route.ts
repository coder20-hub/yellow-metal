// API Route to fetch IBJA gold rates (server-side to avoid CORS)
import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface IBJARate {
  purity: string;
  rate: number;
}

async function fetchIBJAPage(): Promise<string> {
  try {
    const response = await fetch('https://ibjarates.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.text();
  } catch (error) {
    console.error('Error fetching IBJA page:', error);
    throw error;
  }
}

interface ParsedRates {
  goldRates: IBJARate[];
  silver999: number; // Silver rate per gram
}

function parseIBJARates(html: string): ParsedRates {
  const goldRates: IBJARate[] = [];
  let silver999 = 0;

  try {
    console.log('Parsing IBJA HTML...');
    const $ = cheerio.load(html);
    
    // IBJA website shows rates in this order at the top:
    // 999 Purity - 12479 (1 Gram)
    // 995 Purity - 12429 (1 Gram)
    // 916 Purity - 11431 (1 Gram)
    // 750 Purity - 9360 (1 Gram)
    // 585 Purity - 7301 (1 Gram)
    
    console.log('Method 1: Extract purity + rate pairs...');
    
    // Pattern that works: "995 Purity" followed by number within 300 chars
    // HTML structure: <span id="GoldRatesCompare995">12429</span>
    const purityPattern = /(\d{3})\s+Purity[\s\S]{1,300}?(\d{4,5})/g;
    let match;
    
    while ((match = purityPattern.exec(html)) !== null) {
      const purity = match[1];
      const rate = parseInt(match[2]);
      
      // Validate: rate should be in reasonable range for gold
      if (rate >= 7000 && rate <= 15000) {
        console.log(`✓ Found ${purity} purity: ₹${rate}/gram`);
        goldRates.push({ purity, rate });
      }
    }

    // Parse silver rate from table
    console.log('Parsing silver rate...');
    const tableText = $('table').text();
    
    // Try multiple patterns to find silver rate
    // Pattern 1: "999 995 916 750 585 Silver 999 **28/11/2025** 126666 126159 116026 95000 74100 164286"
    // The last number after the date is silver rate per 1kg
    let silverPattern = /Silver\s+999[\s\S]{0,800}?\*\*[\s\S]{0,300}?(\d{5,6})\s+(\d{5,6})\s+(\d{5,6})\s+(\d{5,6})\s+(\d{5,6})\s+(\d{6})/;
    let silverMatch = tableText.match(silverPattern);
    
    if (silverMatch && silverMatch[6]) {
      // Last number is silver per 1kg
      const silverPerKg = parseInt(silverMatch[6]);
      silver999 = Math.round((silverPerKg / 1000) * 100) / 100; // Round to 2 decimal places
      console.log(`✓ Found Silver 999 (Method 1): ₹${silverPerKg}/kg (₹${silver999}/gram)`);
    }

    // Pattern 2: Look for date pattern with 7 numbers (6 gold + 1 silver)
    // Format: "**28/11/2025** 126666 126159 116026 95000 74100 164286"
    if (!silver999) {
      const datePattern = /(\d{2}\/\d{2}\/\d{4})\*\*\s+(\d{5,6})\s+(\d{5,6})\s+(\d{5,6})\s+(\d{5,6})\s+(\d{5,6})\s+(\d{6})/;
      const dateMatch = tableText.match(datePattern);
      
      if (dateMatch && dateMatch[7]) {
        const silverPerKg = parseInt(dateMatch[7]);
        silver999 = Math.round((silverPerKg / 1000) * 100) / 100;
        console.log(`✓ Found Silver 999 (Method 2): ₹${silverPerKg}/kg (₹${silver999}/gram)`);
      }
    }

    // Method 2: Parse from historical table if gold rates not found
    if (goldRates.length === 0) {
      console.log('Method 2: Historical table parsing...');
      
      // Pattern: 14/11/2025** 125428 124926 114892 94071 73375 160656
      // Last number is silver per kg
      const tablePattern = /(\d{2}\/\d{2}\/\d{4})\*\*\s+(\d{5,6})\s+(\d{5,6})\s+(\d{5,6})\s+(\d{5,6})\s+(\d{5,6})\s+(\d{5,6})/;
      const tableMatch = tableText.match(tablePattern);
      
      if (tableMatch) {
        // Rates in table are per 10 grams for gold, so divide by 10
        const rate999 = Math.round(parseInt(tableMatch[2]) / 10);
        const rate995 = Math.round(parseInt(tableMatch[3]) / 10);
        const rate916 = Math.round(parseInt(tableMatch[4]) / 10);
        const rate750 = Math.round(parseInt(tableMatch[5]) / 10);
        const rate585 = Math.round(parseInt(tableMatch[6]) / 10);
        
        // Last number is silver per 1kg (if not already found)
        if (!silver999 && tableMatch[7]) {
          const silverPerKg = parseInt(tableMatch[7]);
          silver999 = Math.round((silverPerKg / 1000) * 100) / 100;
          console.log(`✓ Found Silver 999 from historical table: ₹${silverPerKg}/kg (₹${silver999}/gram)`);
        }
        
        console.log(`✓ Found from table (${tableMatch[1]}):`);
        console.log(`  999: ₹${rate999}, 995: ₹${rate995}, 916: ₹${rate916}, 750: ₹${rate750}, 585: ₹${rate585}`);
        
        goldRates.push({ purity: '999', rate: rate999 });
        goldRates.push({ purity: '995', rate: rate995 });
        goldRates.push({ purity: '916', rate: rate916 });
        goldRates.push({ purity: '750', rate: rate750 });
        goldRates.push({ purity: '585', rate: rate585 });
      }
    }

    console.log(`\n✅ Total gold rates parsed: ${goldRates.length}`);
    if (goldRates.length > 0) {
      console.log('Final parsed gold rates:');
      goldRates.forEach(r => console.log(`  ${r.purity} purity: ₹${r.rate}/gram`));
    } else {
      console.error('❌ No gold rates could be parsed from IBJA');
    }
    
    if (silver999 > 0) {
      console.log(`✅ Silver 999 rate: ₹${silver999}/gram`);
    } else {
      console.warn('⚠️ Silver rate not found, using fallback');
    }
    
    return { goldRates, silver999 };
  } catch (error) {
    console.error('Error parsing IBJA rates:', error);
    return { goldRates: [], silver999: 0 };
  }
}

export async function GET() {
  try {
    console.log('=== IBJA Gold Rates API Called ===');
    
    // Fetch IBJA page
    const html = await fetchIBJAPage();
    console.log('IBJA page fetched successfully, length:', html.length);

    // Parse rates (gold and silver)
    const parsedData = parseIBJARates(html);
    console.log('Parsed gold rates:', parsedData.goldRates);
    console.log('Parsed silver rate:', parsedData.silver999);

    if (parsedData.goldRates.length === 0) {
      console.error('No gold rates parsed from IBJA page');
      throw new Error('Could not parse gold rates from IBJA');
    }

    // Find 995 purity (24k base)
    const base995 = parsedData.goldRates.find((r) => r.purity === '995');

    if (!base995) {
      console.error('995 purity rate not found in parsed rates:', parsedData.goldRates);
      throw new Error('995 purity rate not found');
    }

    console.log('Using 995 purity base rate:', base995.rate);

    // Calculate different karats
    const karatRates = {
      '24k': { purity: 99.5, rate: base995.rate },
      '22k': { purity: 91.6, rate: Math.round((base995.rate * 91.6) / 99.5) },
      '21k': { purity: 87.5, rate: Math.round((base995.rate * 87.5) / 99.5) },
      '20k': { purity: 83.3, rate: Math.round((base995.rate * 83.3) / 99.5) },
      '19k': { purity: 79.2, rate: Math.round((base995.rate * 79.2) / 99.5) },
      '18k': { purity: 75.0, rate: Math.round((base995.rate * 75.0) / 99.5) },
    };

    console.log('Calculated karat rates:', karatRates);

    // Use fallback silver rate if not parsed (164.29 per gram based on current IBJA rates)
    const silver999 = parsedData.silver999 || 164.29;

    return NextResponse.json({
      success: true,
      source: 'IBJA',
      timestamp: new Date().toISOString(),
      base24k: base995.rate,
      rates: karatRates,
      silver999: silver999, // Silver rate per gram
      rawData: parsedData.goldRates,
    });
  } catch (error) {
    console.error('=== Error in gold-rates API ===');
    console.error('Error details:', error);

    // Return current IBJA data as fallback (from websearch results)
    const mockBase = 12608; // 995 purity from IBJA website (current rate from Nov 2025)
    const mockSilver = 164.29; // Silver 999 per gram (based on current IBJA rates: 164286 per kg / 1000)

    const karatRates = {
      '24k': { purity: 99.5, rate: mockBase },
      '22k': { purity: 91.6, rate: Math.round((mockBase * 91.6) / 99.5) },
      '21k': { purity: 87.5, rate: Math.round((mockBase * 87.5) / 99.5) },
      '20k': { purity: 83.3, rate: Math.round((mockBase * 83.3) / 99.5) },
      '19k': { purity: 79.2, rate: Math.round((mockBase * 79.2) / 99.5) },
      '18k': { purity: 75.0, rate: Math.round((mockBase * 75.0) / 99.5) },
    };

    return NextResponse.json({
      success: true,
      source: 'Mock Data (IBJA unavailable)',
      timestamp: new Date().toISOString(),
      base24k: mockBase,
      rates: karatRates,
      silver999: mockSilver,
      error: 'Using fallback data',
    });
  }
}


