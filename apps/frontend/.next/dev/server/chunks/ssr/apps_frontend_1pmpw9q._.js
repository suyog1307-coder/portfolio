module.exports = [
"[project]/apps/frontend/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/frontend/src/actions/formActions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "60c3e4bb12163cb79892564426949e760c59e5b17a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$actions$2f$formActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitContactForm"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$frontend$2f$src$2f$actions$2f$formActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/frontend/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/frontend/src/actions/formActions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$actions$2f$formActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/src/actions/formActions.ts [app-rsc] (ecmascript)");
}),
"[project]/apps/frontend/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/frontend/src/actions/formActions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$actions$2f$formActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/src/actions/formActions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/apps/frontend/src/actions/formActions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60c3e4bb12163cb79892564426949e760c59e5b17a":{"name":"submitContactForm"}},"apps/frontend/src/actions/formActions.ts",""] */ __turbopack_context__.s([
    "submitContactForm",
    ()=>submitContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$2_0572fc944b1abe8d25884e0d1d1ac323$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.2_0572fc944b1abe8d25884e0d1d1ac323/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/src/lib/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$2_0572fc944b1abe8d25884e0d1d1ac323$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.2_0572fc944b1abe8d25884e0d1d1ac323/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const contactSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, 'Name must be at least 2 characters.'),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email('Please enter a valid email address.'),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$4$2e$3$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, 'Message must be at least 10 characters.')
});
async function submitContactForm(_prevState, formData) {
    const raw = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    const result = contactSchema.safeParse(raw);
    if (!result.success) {
        return {
            success: false,
            error: result.error.issues[0].message
        };
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitContactForm"])(result.data);
        return {
            success: true
        };
    } catch (err) {
        return {
            success: false,
            error: err instanceof Error ? err.message : 'Failed to send message. Please try again.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$2_0572fc944b1abe8d25884e0d1d1ac323$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    submitContactForm
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$2_0572fc944b1abe8d25884e0d1d1ac323$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitContactForm, "60c3e4bb12163cb79892564426949e760c59e5b17a", null);
}),
"[project]/apps/frontend/src/lib/api.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createProject",
    ()=>createProject,
    "deleteMessage",
    ()=>deleteMessage,
    "deleteProject",
    ()=>deleteProject,
    "getMessages",
    ()=>getMessages,
    "getProject",
    ()=>getProject,
    "getProjects",
    ()=>getProjects,
    "loginAdmin",
    ()=>loginAdmin,
    "submitContactForm",
    ()=>submitContactForm,
    "updateProject",
    ()=>updateProject
]);
/**
 * Typed API client for the backend service.
 * Uses NEXT_PUBLIC_API_URL (set per environment in .env.local).
 */ const BASE_URL = ("TURBOPACK compile-time value", "http://localhost:4000") ?? 'http://localhost:5000';
async function getProjects() {
    const res = await fetch(`${BASE_URL}/api/projects`, {
        cache: 'no-store'
    });
    if (!res.ok) throw new Error('Failed to fetch projects');
    return res.json();
}
async function getProject(id) {
    const res = await fetch(`${BASE_URL}/api/projects/${id}`, {
        cache: 'no-store'
    });
    if (!res.ok) throw new Error('Failed to fetch project');
    return res.json();
}
async function createProject(data, token) {
    const res = await fetch(`${BASE_URL}/api/projects`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        const err = await res.json().catch(()=>({}));
        throw new Error(err.message ?? 'Failed to create project');
    }
    return res.json();
}
async function updateProject(id, data, token) {
    const res = await fetch(`${BASE_URL}/api/projects/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        const err = await res.json().catch(()=>({}));
        throw new Error(err.message ?? 'Failed to update project');
    }
    return res.json();
}
async function deleteProject(id, token) {
    const res = await fetch(`${BASE_URL}/api/projects/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if (!res.ok) throw new Error('Failed to delete project');
}
async function submitContactForm(data) {
    const res = await fetch(`${BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        const err = await res.json().catch(()=>({}));
        throw new Error(err.message ?? 'Failed to send message');
    }
    return res.json();
}
async function getMessages(token) {
    const res = await fetch(`${BASE_URL}/api/contact`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        cache: 'no-store'
    });
    if (!res.ok) throw new Error('Failed to fetch messages');
    return res.json();
}
async function deleteMessage(id, token) {
    const res = await fetch(`${BASE_URL}/api/contact/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if (!res.ok) throw new Error('Failed to delete message');
}
async function loginAdmin(password) {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password
        })
    });
    if (!res.ok) {
        const err = await res.json().catch(()=>({}));
        throw new Error(err.message ?? 'Invalid credentials');
    }
    return res.json();
}
}),
];

//# sourceMappingURL=apps_frontend_1pmpw9q._.js.map