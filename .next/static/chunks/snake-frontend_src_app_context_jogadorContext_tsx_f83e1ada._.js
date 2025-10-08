(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/snake-frontend/src/app/context/jogadorContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JogadorProvider",
    ()=>JogadorProvider,
    "useJogador",
    ()=>useJogador
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const JogadorContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    jogador: null,
    setJogador: ()=>{}
});
const JogadorProvider = (param)=>{
    let { children } = param;
    _s();
    const [jogador, setJogador] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(JogadorContext.Provider, {
        value: {
            jogador,
            setJogador
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/snake-frontend/src/app/context/jogadorContext.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(JogadorProvider, "UVrez+MpHVabFwW/ZHwPHWzFya0=");
_c = JogadorProvider;
const useJogador = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(JogadorContext);
};
_s1(useJogador, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "JogadorProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=snake-frontend_src_app_context_jogadorContext_tsx_f83e1ada._.js.map