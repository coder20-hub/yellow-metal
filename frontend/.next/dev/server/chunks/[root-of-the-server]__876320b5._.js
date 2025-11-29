module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/gold-rates/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// API Route to fetch IBJA gold rates (server-side to avoid CORS)
__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
const dynamic = 'force-dynamic';
const revalidate = 0;
async function fetchIBJAPage() {
    try {
        const response = await fetch('https://ibjarates.com/', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            },
            cache: 'no-store'
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
function parseIBJARates(html) {
    const rates = [];
    try {
        console.log('Parsing IBJA HTML...');
        // Method 1: Try to extract from the main display sections (e.g., "995 Purity ### 12429 (1 Gram)")
        const purityPatterns = [
            {
                purity: '999',
                pattern: /999\s+Purity[^0-9#]*#{1,3}\s*(\d{4,5})\s*\(1\s*Gram\)/i
            },
            {
                purity: '995',
                pattern: /995\s+Purity[^0-9#]*#{1,3}\s*(\d{4,5})\s*\(1\s*Gram\)/i
            },
            {
                purity: '916',
                pattern: /916\s+Purity[^0-9#]*#{1,3}\s*(\d{4,5})\s*\(1\s*Gram\)/i
            },
            {
                purity: '750',
                pattern: /750\s+Purity[^0-9#]*#{1,3}\s*(\d{4,5})\s*\(1\s*Gram\)/i
            }
        ];
        for (const { purity, pattern } of purityPatterns){
            const match = html.match(pattern);
            if (match && match[1]) {
                const rate = parseInt(match[1]);
                console.log(`Found ${purity} purity rate: ${rate}`);
                rates.push({
                    purity,
                    rate
                });
            }
        }
        // Method 2: If Method 1 fails, try simpler pattern (just number after purity)
        if (rates.length === 0) {
            console.log('Trying alternative parsing method...');
            // Look for pattern like "995 Purity" followed by numbers
            const alt995Match = html.match(/995\s+Purity[^\d]*(\d{4,5})/i);
            if (alt995Match) {
                const rate = parseInt(alt995Match[1]);
                console.log(`Found 995 purity rate (alt method): ${rate}`);
                rates.push({
                    purity: '995',
                    rate
                });
            }
            const alt916Match = html.match(/916\s+Purity[^\d]*(\d{4,5})/i);
            if (alt916Match) {
                const rate = parseInt(alt916Match[1]);
                console.log(`Found 916 purity rate (alt method): ${rate}`);
                rates.push({
                    purity: '916',
                    rate
                });
            }
        }
        // Method 3: Try to extract from the historical table (as backup)
        if (rates.length === 0) {
            console.log('Trying to parse from historical table...');
            // Look for the table with dates and rates
            const tableMatch = html.match(/\d{2}\/\d{2}\/\d{4}\*\*\s+(\d{5,6})\s+(\d{5,6})\s+(\d{5,6})/);
            if (tableMatch) {
                // Rates in table are per 10 grams, so divide by 10
                const rate999 = Math.round(parseInt(tableMatch[1]) / 10);
                const rate995 = Math.round(parseInt(tableMatch[2]) / 10);
                const rate916 = Math.round(parseInt(tableMatch[3]) / 10);
                console.log(`Found rates from table - 999: ${rate999}, 995: ${rate995}, 916: ${rate916}`);
                rates.push({
                    purity: '999',
                    rate: rate999
                });
                rates.push({
                    purity: '995',
                    rate: rate995
                });
                rates.push({
                    purity: '916',
                    rate: rate916
                });
            }
        }
        console.log(`Total rates parsed: ${rates.length}`);
        return rates;
    } catch (error) {
        console.error('Error parsing IBJA rates:', error);
        return [];
    }
}
async function GET() {
    try {
        console.log('=== IBJA Gold Rates API Called ===');
        // Fetch IBJA page
        const html = await fetchIBJAPage();
        console.log('IBJA page fetched successfully, length:', html.length);
        // Parse rates
        const rates = parseIBJARates(html);
        console.log('Parsed rates:', rates);
        if (rates.length === 0) {
            console.error('No rates parsed from IBJA page');
            throw new Error('Could not parse rates from IBJA');
        }
        // Find 995 purity (24k base)
        const base995 = rates.find((r)=>r.purity === '995');
        if (!base995) {
            console.error('995 purity rate not found in parsed rates:', rates);
            throw new Error('995 purity rate not found');
        }
        console.log('Using 995 purity base rate:', base995.rate);
        // Calculate different karats
        const karatRates = {
            '24k': {
                purity: 99.5,
                rate: base995.rate
            },
            '22k': {
                purity: 91.6,
                rate: Math.round(base995.rate * 91.6 / 99.5)
            },
            '21k': {
                purity: 87.5,
                rate: Math.round(base995.rate * 87.5 / 99.5)
            },
            '20k': {
                purity: 83.3,
                rate: Math.round(base995.rate * 83.3 / 99.5)
            },
            '19k': {
                purity: 79.2,
                rate: Math.round(base995.rate * 79.2 / 99.5)
            },
            '18k': {
                purity: 75.0,
                rate: Math.round(base995.rate * 75.0 / 99.5)
            }
        };
        console.log('Calculated karat rates:', karatRates);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            source: 'IBJA',
            timestamp: new Date().toISOString(),
            base24k: base995.rate,
            rates: karatRates,
            rawData: rates
        });
    } catch (error) {
        console.error('=== Error in gold-rates API ===');
        console.error('Error details:', error);
        // Return mock data as fallback
        const mockBase = 12429; // From IBJA website
        const karatRates = {
            '24k': {
                purity: 99.5,
                rate: mockBase
            },
            '22k': {
                purity: 91.6,
                rate: Math.round(mockBase * 91.6 / 99.5)
            },
            '21k': {
                purity: 87.5,
                rate: Math.round(mockBase * 87.5 / 99.5)
            },
            '20k': {
                purity: 83.3,
                rate: Math.round(mockBase * 83.3 / 99.5)
            },
            '19k': {
                purity: 79.2,
                rate: Math.round(mockBase * 79.2 / 99.5)
            },
            '18k': {
                purity: 75.0,
                rate: Math.round(mockBase * 75.0 / 99.5)
            }
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            source: 'Mock Data (IBJA unavailable)',
            timestamp: new Date().toISOString(),
            base24k: mockBase,
            rates: karatRates,
            error: 'Using fallback data'
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__876320b5._.js.map