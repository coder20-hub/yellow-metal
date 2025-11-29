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
"[externals]/mongodb [external] (mongodb, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongodb", () => require("mongodb"));

module.exports = mod;
}),
"[project]/lib/mongodb.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getDatabase",
    ()=>getDatabase
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
;
const uri = process.env.MONGODB_URI || process.env.DATABASE_URL || 'mongodb://localhost:27017';
const dbName = process.env.MONGODB_DB_NAME || process.env.DATABASE_NAME || 'yellowmetal';
const options = {};
let client;
let clientPromise;
if ("TURBOPACK compile-time truthy", 1) {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    let globalWithMongo = /*TURBOPACK member replacement*/ __turbopack_context__.g;
    if (!globalWithMongo._mongoClientPromise) {
        client = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["MongoClient"](uri, options);
        globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
} else //TURBOPACK unreachable
;
async function getDatabase() {
    const client = await clientPromise;
    return client.db(dbName);
}
;
const __TURBOPACK__default__export__ = clientPromise;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/app/api/crm/analytics/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/mongodb.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
;
;
;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
async function verifySuperAdmin(request) {
    try {
        const token = request.headers.get('authorization')?.replace('Bearer ', '');
        if (!token) return {
            valid: false
        };
        const decoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET);
        const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDatabase"])();
        const usersCollection = db.collection('crm_users');
        const user = await usersCollection.findOne({
            _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](decoded.userId)
        });
        if (!user || user.role !== 'superadmin') {
            return {
                valid: false
            };
        }
        return {
            valid: true
        };
    } catch  {
        return {
            valid: false
        };
    }
}
async function GET(request) {
    try {
        const auth = await verifySuperAdmin(request);
        if (!auth.valid) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Unauthorized - Superadmin only'
            }, {
                status: 403
            });
        }
        const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDatabase"])();
        const applicationsCollection = db.collection('loan_applications');
        // Get all applications
        const applications = await applicationsCollection.find({}).toArray();
        // Total applications
        const totalApplications = applications.length;
        // Total loan amount
        const totalLoanAmount = applications.reduce((sum, app)=>sum + (app.loanAmount || 0), 0);
        const avgLoanAmount = totalApplications > 0 ? totalLoanAmount / totalApplications : 0;
        // Pincode-wise statistics
        const pincodeStats = {};
        applications.forEach((app)=>{
            const pincode = app.pincode || extractPincode(app.branch) || 'Unknown';
            if (!pincodeStats[pincode]) {
                pincodeStats[pincode] = {
                    count: 0,
                    totalAmount: 0
                };
            }
            pincodeStats[pincode].count++;
            pincodeStats[pincode].totalAmount += app.loanAmount || 0;
        });
        const pincodeBreakdown = Object.entries(pincodeStats).map(([pincode, stats])=>({
                pincode,
                count: stats.count,
                totalAmount: stats.totalAmount,
                avgAmount: stats.totalAmount / stats.count
            })).sort((a, b)=>b.count - a.count);
        // Applications over time (last 30 days)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const dailyApplications = {};
        applications.filter((app)=>new Date(app.createdAt) >= thirtyDaysAgo).forEach((app)=>{
            const date = new Date(app.createdAt).toISOString().split('T')[0];
            dailyApplications[date] = (dailyApplications[date] || 0) + 1;
        });
        const dailyTrend = Object.entries(dailyApplications).map(([date, count])=>({
                date,
                count
            })).sort((a, b)=>a.date.localeCompare(b.date));
        // Loan amount distribution
        const amountRanges = [
            {
                range: '0-50000',
                min: 0,
                max: 50000,
                count: 0
            },
            {
                range: '50000-100000',
                min: 50000,
                max: 100000,
                count: 0
            },
            {
                range: '100000-250000',
                min: 100000,
                max: 250000,
                count: 0
            },
            {
                range: '250000-500000',
                min: 250000,
                max: 500000,
                count: 0
            },
            {
                range: '500000+',
                min: 500000,
                max: Infinity,
                count: 0
            }
        ];
        applications.forEach((app)=>{
            const amount = app.loanAmount || 0;
            const range = amountRanges.find((r)=>amount >= r.min && amount < r.max);
            if (range) {
                range.count++;
            }
        });
        // Branch-wise statistics
        const branchStats = {};
        applications.forEach((app)=>{
            const branch = app.branch || 'Unknown';
            if (!branchStats[branch]) {
                branchStats[branch] = {
                    count: 0,
                    totalAmount: 0
                };
            }
            branchStats[branch].count++;
            branchStats[branch].totalAmount += app.loanAmount || 0;
        });
        const branchBreakdown = Object.entries(branchStats).map(([branch, stats])=>({
                branch,
                count: stats.count,
                totalAmount: stats.totalAmount
            })).sort((a, b)=>b.count - a.count).slice(0, 10); // Top 10 branches
        // Monthly comparison
        const monthlyData = {};
        applications.forEach((app)=>{
            const month = new Date(app.createdAt).toISOString().slice(0, 7); // YYYY-MM
            if (!monthlyData[month]) {
                monthlyData[month] = {
                    count: 0,
                    totalAmount: 0
                };
            }
            monthlyData[month].count++;
            monthlyData[month].totalAmount += app.loanAmount || 0;
        });
        const monthlyTrend = Object.entries(monthlyData).map(([month, stats])=>({
                month,
                count: stats.count,
                totalAmount: stats.totalAmount
            })).sort((a, b)=>a.month.localeCompare(b.month)).slice(-12); // Last 12 months
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            analytics: {
                overview: {
                    totalApplications,
                    totalLoanAmount,
                    avgLoanAmount
                },
                pincodeBreakdown,
                dailyTrend,
                amountDistribution: amountRanges,
                branchBreakdown,
                monthlyTrend
            }
        });
    } catch (error) {
        console.error('Analytics error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
function extractPincode(branch) {
    const match = branch.match(/\b\d{6}\b/);
    return match ? match[0] : null;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4f47d339._.js.map