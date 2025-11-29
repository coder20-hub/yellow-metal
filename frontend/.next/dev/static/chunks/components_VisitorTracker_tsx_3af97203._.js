(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/VisitorTracker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VisitorTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function VisitorTracker() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VisitorTracker.useEffect": ()=>{
            // Track page view
            const trackPageView = {
                "VisitorTracker.useEffect.trackPageView": ()=>{
                    // Add your analytics tracking code here
                    // For example: Google Analytics, Plausible, etc.
                    // Example: Google Analytics 4
                    if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.gtag) {
                        window.gtag('config', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GA_ID, {
                            page_path: window.location.pathname
                        });
                    }
                    // Example: Plausible Analytics
                    if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.plausible) {
                        window.plausible('pageview');
                    }
                // You can also send to a custom API endpoint
                // fetch('/api/analytics', { method: 'POST', ... });
                }
            }["VisitorTracker.useEffect.trackPageView"];
            trackPageView();
        }
    }["VisitorTracker.useEffect"], []);
    // This component doesn't render anything visible
    return null;
}
_s(VisitorTracker, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = VisitorTracker;
var _c;
__turbopack_context__.k.register(_c, "VisitorTracker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_VisitorTracker_tsx_3af97203._.js.map