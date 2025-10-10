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
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { setJogador } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$src$2f$app$2f$context$2f$jogadorContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJogador"])();
    const handleLogin = async ()=>{
        // validações (mantive as suas)
        const trimmedName = name.trim();
        if (!trimmedName) {
            setErrorMessage("Por favor, preencha o nome");
            return;
        }
        if (trimmedName.length < 3) {
            setErrorMessage("Nome deve ter pelo menos 3 caracteres");
            return;
        }
        const trimmedPassword = password.trim();
        if (!trimmedPassword) {
            setErrorMessage("Por favor, preencha a senha");
            return;
        }
        if (trimmedPassword.length < 4 || trimmedPassword.length > 20) {
            setErrorMessage("Senha deve ter entre 4 e 20 caracteres");
            return;
        }
        const hasLetter = /[a-zA-Z]/.test(trimmedPassword);
        const hasNumber = /[0-9]/.test(trimmedPassword);
        if (!hasLetter || !hasNumber) {
            setErrorMessage("Senha deve conter pelo menos uma letra e um número");
            return;
        }
        setErrorMessage("");
        setLoading(true);
        try {
            // checa existência
            const checkRes = await fetch("http://localhost:4000/jogadores");
            if (checkRes.ok) {
                const existingPlayers = await checkRes.json();
                const nameExists = existingPlayers.some((player)=>{
                    var _player_name;
                    return ((_player_name = player.name) === null || _player_name === void 0 ? void 0 : _player_name.toLowerCase()) === trimmedName.toLowerCase();
                });
                if (nameExists) {
                    setErrorMessage('O nome "'.concat(trimmedName, '" já está sendo usado. Escolha outro.'));
                    setLoading(false);
                    return;
                }
            }
            // cria jogador
            const res = await fetch("http://localhost:4000/jogadores", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: trimmedName,
                    password: trimmedPassword
                })
            });
            const data = await res.json();
            if (res.ok) {
                setJogador(data.jogador);
                localStorage.setItem("nomeJogador", data.jogador.name);
                localStorage.setItem("jogadorId", data.jogador._id);
                router.push("/jogo");
            } else {
                var _data_error, _data_error1;
                if (res.status === 409 || ((_data_error = data.error) === null || _data_error === void 0 ? void 0 : _data_error.includes("já existe")) || ((_data_error1 = data.error) === null || _data_error1 === void 0 ? void 0 : _data_error1.includes("duplicado"))) {
                    setErrorMessage('O nome "'.concat(trimmedName, '" já está sendo usado. Tente outro.'));
                } else {
                    setErrorMessage(data.error || "Erro no cadastro/login");
                }
            }
        } catch (err) {
            console.error(err);
            setErrorMessage("Erro ao conectar com o servidor");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen flex flex-col items-center justify-center bg-black text-yellow-400 font-mono",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl mb-6",
                children: "Bem-vindo jogador"
            }, void 0, false, {
                fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-3 bg-red-900/50 border border-red-500 rounded text-red-300 text-center max-w-md",
                children: errorMessage
            }, void 0, false, {
                fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: -9999,
                    top: 0,
                    height: 0,
                    width: 0,
                    overflow: "hidden"
                },
                "aria-hidden": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "no_autofill_user",
                        type: "text",
                        autoComplete: "username",
                        tabIndex: -1
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "no_autofill_pass",
                        type: "password",
                        autoComplete: "new-password",
                        tabIndex: -1
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: (e)=>{
                    e.preventDefault();
                    handleLogin();
                },
                autoComplete: "off",
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        // nome sem palavras comuns como "username" ou "password"
                        name: "jogo_nome",
                        autoComplete: "off",
                        className: "mb-4 px-4 py-2 rounded bg-gray-800 text-white",
                        placeholder: "Nome",
                        value: name,
                        onChange: (e)=>{
                            setName(e.target.value);
                            setErrorMessage("");
                        }
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        // rotina: readOnly até o usuário focar — ajuda a prevenir autofill e prompt de salvar
                        name: "jogo_senha",
                        autoComplete: "new-password",
                        className: "mb-4 px-4 py-2 rounded bg-gray-800 text-white",
                        placeholder: "Senha",
                        value: password,
                        onChange: (e)=>{
                            setPassword(e.target.value);
                            setErrorMessage("");
                        },
                        onKeyDown: (e)=>{
                            if (e.key === "Enter") handleLogin();
                        },
                        // starta readOnly para evitar autofill; ao focar removemos o readOnly
                        readOnly: true,
                        onFocus: (e)=>{
                            // remove readOnly quando o usuário focar (funciona bem em React)
                            e.target.removeAttribute("readOnly");
                        }
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "border px-6 py-2 rounded hover:bg-green-600 ".concat(loading ? "opacity-60 cursor-not-allowed" : ""),
                        children: loading ? "Carregando..." : "Entrar"
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 text-sm text-gray-400 text-center max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2",
                        children: "Regras de cadastro:"
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "• Nome: mínimo 3 caracteres (único no ranking)"
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "• Senha: 4 a 20 caracteres, com pelo menos uma letra e um número"
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-xs text-yellow-400",
                        children: "⚠️ Cada jogador deve ter um nome único"
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/snake-frontend/src/app/login/page.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/snake-frontend/src/app/login/page.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(LoginPage, "xS7OP+TWBuCx6E+nOhbxFDWa9t0=", false, function() {
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