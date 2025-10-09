(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/snake-frontend/src/app/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$src$2f$app$2f$context$2f$jogadorContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/src/app/context/jogadorContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LoginPage() {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { setJogador } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$src$2f$app$2f$context$2f$jogadorContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJogador"])();
    const handleLogin = async ()=>{
        if (!name || !password) return;
        try {
            const res = await fetch("http://localhost:4000/jogadores", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    password
                })
            });
            const data = await res.json();
            if (res.ok) {
                setJogador(data.jogador);
                if ("TURBOPACK compile-time truthy", 1) {
                    localStorage.setItem("nomeJogador", data.jogador.name);
                    localStorage.setItem("jogadorId", data.jogador._id);
                }
                router.push("/jogo");
            } else {
                alert("Erro no login/cadastro: " + (data.error || "Servidor não respondeu"));
            }
        } catch (err) {
            console.error(err);
            alert("Erro ao conectar com o servidor");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen flex flex-col items-center justify-center bg-black text-green-400 font-mono",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl mb-6",
                children: "Bem-vindo jogador"
            }, void 0, false, {
                fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: "mb-4 px-4 py-2 rounded bg-gray-800 text-white",
                placeholder: "Nome",
                value: name,
                onChange: (e)=>setName(e.target.value)
            }, void 0, false, {
                fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "password",
                className: "mb-4 px-4 py-2 rounded bg-gray-800 text-white",
                placeholder: "Senha",
                value: password,
                onChange: (e)=>setPassword(e.target.value)
            }, void 0, false, {
                fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "border px-6 py-2 rounded hover:bg-green-600",
                onClick: handleLogin,
                children: "Entrar"
            }, void 0, false, {
                fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/snake-frontend/src/app/login/page.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(LoginPage, "n0WYBfAjAW8hPlPmz8tAG+zJAFo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$src$2f$app$2f$context$2f$jogadorContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJogador"]
    ];
});
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/snake-frontend/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/snake-frontend/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=snake-frontend_d3492426._.js.map