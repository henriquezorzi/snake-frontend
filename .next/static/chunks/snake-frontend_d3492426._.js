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
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { setJogador } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$src$2f$app$2f$context$2f$jogadorContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJogador"])();
    const handleLogin = async ()=>{
        if (!name || !password) {
            setErrorMessage("Por favor, preencha nome e senha");
            return;
        }
        // Validação do nome
        if (name.length < 3) {
            setErrorMessage("Nome deve ter pelo menos 3 caracteres");
            return;
        }
        // Validação da senha
        if (password.length < 4) {
            setErrorMessage("Senha deve ter pelo menos 4 caracteres");
            return;
        }
        if (password.length > 20) {
            setErrorMessage("Senha deve ter no máximo 20 caracteres");
            return;
        }
        // Verificar se a senha contém pelo menos uma letra e um número
        const hasLetter = /[a-zA-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        if (!hasLetter || !hasNumber) {
            setErrorMessage("Senha deve conter pelo menos uma letra e um número");
            return;
        }
        setErrorMessage("");
        try {
            // Verificar se já existe um jogador com esse nome no banco
            const checkRes = await fetch("http://localhost:4000/jogadores");
            if (checkRes.ok) {
                const existingPlayers = await checkRes.json();
                const nameExists = existingPlayers.find((player)=>{
                    var _player_name;
                    return ((_player_name = player.name) === null || _player_name === void 0 ? void 0 : _player_name.toLowerCase().trim()) === name.toLowerCase().trim();
                });
                if (nameExists) {
                    setErrorMessage('O nome "'.concat(name, '" já está sendo usado por outro jogador. Escolha um nome diferente.'));
                    return;
                }
            }
            // Se o nome não existe, tenta criar o jogador
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
                // Se mesmo assim der erro de nome duplicado (double-check do backend)
                if (res.status === 409 || data.error && (data.error.includes("já existe") || data.error.includes("duplicado"))) {
                    setErrorMessage('O nome "'.concat(name, '" já está sendo usado. Tente outro nome.'));
                } else {
                    setErrorMessage(data.error || "Erro no cadastro/login");
                }
            }
        } catch (err) {
            console.error(err);
            setErrorMessage("Erro ao conectar com o servidor");
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
                lineNumber: 96,
                columnNumber: 7
            }, this),
            errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-3 bg-red-900/50 border border-red-500 rounded text-red-300 text-center max-w-md",
                children: errorMessage
            }, void 0, false, {
                fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: "mb-4 px-4 py-2 rounded bg-gray-800 text-white",
                placeholder: "Nome",
                value: name,
                onChange: (e)=>{
                    setName(e.target.value);
                    setErrorMessage("");
                }
            }, void 0, false, {
                fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "password",
                className: "mb-4 px-4 py-2 rounded bg-gray-800 text-white",
                placeholder: "Senha",
                value: password,
                onChange: (e)=>{
                    setPassword(e.target.value);
                    setErrorMessage("");
                },
                onKeyPress: (e)=>{
                    if (e.key === "Enter") {
                        handleLogin();
                    }
                }
            }, void 0, false, {
                fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "border px-6 py-2 rounded hover:bg-green-600",
                onClick: handleLogin,
                children: "Entrar"
            }, void 0, false, {
                fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 text-sm text-gray-400 text-center max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2",
                        children: "Requisitos:"
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "• Nome: mínimo 3 caracteres (deve ser único)"
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "• Senha: 4-20 caracteres com letra e número"
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-xs text-yellow-400",
                        children: "⚠️ Cada jogador deve ter um nome único no ranking"
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/snake-frontend/src/app/login/page.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(LoginPage, "pK5YxLUoq4W22vlry2ieNrtLkOE=", false, function() {
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