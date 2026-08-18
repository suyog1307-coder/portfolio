module.exports = [
"[project]/apps/frontend/.next-internal/server/app/admin/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/frontend/src/actions/authActions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "60e20998c3a73362c652701f32d2520594a1b305e1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$actions$2f$authActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loginAdmin"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$frontend$2f$src$2f$actions$2f$authActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/frontend/.next-internal/server/app/admin/login/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/frontend/src/actions/authActions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$actions$2f$authActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/src/actions/authActions.ts [app-rsc] (ecmascript)");
}),
"[project]/apps/frontend/.next-internal/server/app/admin/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/frontend/src/actions/authActions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$actions$2f$authActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/src/actions/authActions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/apps/frontend/src/actions/authActions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0086cf89bafe10b78b40a4f47040a12a3e0df76886":{"name":"logoutAdmin"},"60e20998c3a73362c652701f32d2520594a1b305e1":{"name":"loginAdmin"}},"apps/frontend/src/actions/authActions.ts",""] */ __turbopack_context__.s([
    "loginAdmin",
    ()=>loginAdmin,
    "logoutAdmin",
    ()=>logoutAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$2_0572fc944b1abe8d25884e0d1d1ac323$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.2_0572fc944b1abe8d25884e0d1d1ac323/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$2_0572fc944b1abe8d25884e0d1d1ac323$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.2_0572fc944b1abe8d25884e0d1d1ac323/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$2_0572fc944b1abe8d25884e0d1d1ac323$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.2_0572fc944b1abe8d25884e0d1d1ac323/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$2_0572fc944b1abe8d25884e0d1d1ac323$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.2_0572fc944b1abe8d25884e0d1d1ac323/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$2_0572fc944b1abe8d25884e0d1d1ac323$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.2_0572fc944b1abe8d25884e0d1d1ac323/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function loginAdmin(_prevState, formData) {
    const password = formData.get('password');
    if (password !== process.env.ADMIN_PASSWORD) {
        return {
            error: 'Invalid credentials. Please try again.'
        };
    }
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$2_0572fc944b1abe8d25884e0d1d1ac323$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.set('admin_session', 'authenticated', {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === 'production',
        maxAge: 60 * 60 * 24,
        path: '/'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$2_0572fc944b1abe8d25884e0d1d1ac323$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/admin');
}
async function logoutAdmin() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$2_0572fc944b1abe8d25884e0d1d1ac323$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete('admin_session');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$2_0572fc944b1abe8d25884e0d1d1ac323$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/admin/login');
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$2_0572fc944b1abe8d25884e0d1d1ac323$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    loginAdmin,
    logoutAdmin
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$2_0572fc944b1abe8d25884e0d1d1ac323$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(loginAdmin, "60e20998c3a73362c652701f32d2520594a1b305e1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$2_0572fc944b1abe8d25884e0d1d1ac323$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logoutAdmin, "0086cf89bafe10b78b40a4f47040a12a3e0df76886", null);
}),
];

//# sourceMappingURL=apps_frontend_1ydujub._.js.map