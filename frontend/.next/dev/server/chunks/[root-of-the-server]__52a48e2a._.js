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
"[project]/app/api/applications/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'mongodb'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
// Re-use MongoDB client between requests in dev
let cachedClient = null;
let cachedDb = null;
async function getDb() {
    if (cachedDb) return cachedDb;
    const uri = process.env.DATABASE_URL || process.env.MONGODB_URI || '';
    const dbName = process.env.DATABASE_DB || 'yellowmetal';
    if (!uri) {
        throw new Error('MongoDB connection string not set. Please set DATABASE_URL or MONGODB_URI in your environment.');
    }
    if (!cachedClient) {
        cachedClient = new MongoClient(uri);
    }
    if (!cachedClient.topology) {
        await cachedClient.connect();
    }
    cachedDb = cachedClient.db(dbName);
    return cachedDb;
}
function validatePayload(body) {
    const errors = [];
    if (!body || typeof body !== 'object') {
        errors.push('Invalid request body');
        return errors;
    }
    if (!body.name || typeof body.name !== 'string') {
        errors.push('Name is required');
    }
    if (!body.phone || typeof body.phone !== 'string') {
        errors.push('Phone is required');
    }
    if (!body.loanAmount || typeof body.loanAmount !== 'string') {
        errors.push('Loan amount is required');
    }
    if (!body.branch || typeof body.branch !== 'string') {
        errors.push('Branch or pincode is required');
    }
    return errors;
}
async function POST(request) {
    try {
        const body = await request.json();
        const errors = validatePayload(body);
        if (errors.length > 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                errors
            }, {
                status: 400
            });
        }
        const db = await getDb();
        const collection = db.collection('quick_applications');
        const doc = {
            name: body.name.trim(),
            phone: body.phone.trim(),
            loanAmount: body.loanAmount.trim(),
            branch: body.branch.trim(),
            createdAt: new Date().toISOString(),
            source: 'loan-quick-application'
        };
        const result = await collection.insertOne(doc);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            id: result.insertedId
        }, {
            status: 201
        });
    } catch (error) {
        console.error('Error saving quick application:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to save application. Please try again later.'
        }, {
            status: 500
        });
    }
}
async function GET() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: false,
        message: 'GET not allowed on this endpoint. Use POST to submit applications.'
    }, {
        status: 405
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__52a48e2a._.js.map