module.exports = [
"[project]/snake-frontend/.next-internal/server/app/jogo/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/snake-frontend/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/snake-frontend/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/snake-frontend/src/app/jogo/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
const JogarDeNovo = ({ onRestart })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 10
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    color: "yellow",
                    fontSize: "2.5em",
                    marginBottom: "30px",
                    textShadow: "0 0 10px yellow"
                },
                children: "GAME OVER!"
            }, void 0, false, {
                fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    width: "80%",
                    maxWidth: "250px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onRestart,
                        style: {
                            background: "white",
                            color: "black",
                            padding: "12px 20px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontSize: "1.2em",
                            fontWeight: "bold",
                            transition: "background 0.2s, transform 0.1s",
                            boxShadow: "0 4px 0 #333"
                        },
                        // --- LÓGICA DO HOVER AMARELO ---
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.background = 'yellow';
                            e.currentTarget.style.boxShadow = '0 4px 0 #ccaa00';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.background = 'white'; // Volta para branco
                            e.currentTarget.style.boxShadow = '0 4px 0 #333';
                        },
                        title: "Inicia uma nova partida",
                        children: "JOGAR DE NOVO"
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        style: {
                            color: "white",
                            textDecoration: "none",
                            padding: "12px 20px",
                            border: "2px solid white",
                            borderRadius: "5px",
                            fontSize: "1.1em",
                            fontWeight: "bold",
                            transition: "background 0.2s, color 0.2s, border-color 0.2s"
                        },
                        // --- LÓGICA DO HOVER AMARELO ---
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.backgroundColor = 'yellow';
                            e.currentTarget.style.color = 'black';
                            e.currentTarget.style.borderColor = 'yellow';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.backgroundColor = 'transparent'; // Volta para transparente
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.borderColor = 'white';
                        },
                        children: "VOLTAR AO MENU"
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = JogarDeNovo;
}),
"[project]/snake-frontend/src/app/jogo/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/snake-frontend/src/app/jogo/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__54e22fb5._.js.map