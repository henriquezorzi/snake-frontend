(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/snake-frontend/src/app/jogo/JogarDeNovo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const JogarDeNovo = (param)=>{
    let { onRestart } = param;
    _s();
    const [hoverRestart, setHoverRestart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoverMenu, setHoverMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const baseStyle = {
        padding: "12px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold",
        transition: "background 0.2s, color 0.2s, border-color 0.2s",
        textDecoration: "none",
        display: "block",
        textAlign: "center",
        fontFamily: "'Press Start 2P', cursive"
    };
    const restartButtonStyle = {
        ...baseStyle,
        fontSize: "1.2em",
        background: hoverRestart ? "yellow" : "white",
        color: "black",
        border: "none",
        boxShadow: hoverRestart ? "0 4px 0 #ccaa00" : "0 4px 0 #333"
    };
    const menuLinkStyle = {
        ...baseStyle,
        fontSize: "1.1em",
        background: hoverMenu ? "yellow" : "transparent",
        color: hoverMenu ? "black" : "white",
        border: hoverMenu ? "2px solid yellow" : "2px solid white"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: 10
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    color: "yellow",
                    fontSize: "2.5em",
                    marginBottom: "30px",
                    fontFamily: "'Press Start 2P', cursive",
                    letterSpacing: "2px",
                    textShadow: "\n            2px 2px 0 #000,\n            -2px 2px 0 #000,\n            2px -2px 0 #000,\n            -2px -2px 0 #000\n          "
                },
                children: "GAME OVER!"
            }, void 0, false, {
                fileName: "[project]/snake-frontend/src/app/jogo/JogarDeNovo.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    width: "80%",
                    maxWidth: "250px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onRestart,
                        style: restartButtonStyle,
                        onMouseEnter: ()=>setHoverRestart(true),
                        onMouseLeave: ()=>setHoverRestart(false),
                        title: "Inicia uma nova partida",
                        children: "JOGAR DE NOVO"
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/jogo/JogarDeNovo.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        style: menuLinkStyle,
                        onMouseEnter: ()=>setHoverMenu(true),
                        onMouseLeave: ()=>setHoverMenu(false),
                        children: "VOLTAR AO MENU"
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/jogo/JogarDeNovo.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/snake-frontend/src/app/jogo/JogarDeNovo.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/snake-frontend/src/app/jogo/JogarDeNovo.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(JogarDeNovo, "yn8nJwgutS7mLxulRNoRRKyaHJY=");
_c = JogarDeNovo;
const __TURBOPACK__default__export__ = JogarDeNovo;
var _c;
__turbopack_context__.k.register(_c, "JogarDeNovo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/snake-frontend/src/app/jogo/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$src$2f$app$2f$jogo$2f$JogarDeNovo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/src/app/jogo/JogarDeNovo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const CELL_SIZE = 30;
const GRID_SIZE = 30;
const SNAKE_COLOR = "limegreen";
const APPLE_COLOR = "yellow";
const GRID_COLOR_DARK = "#1a1a1a";
const GRID_COLOR_LIGHT = "#2e2e2e";
const INITIAL_SNAKE = [
    {
        x: 8,
        y: 8
    }
];
const INITIAL_APPLE = {
    x: 12,
    y: 12
};
function Page() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [snake, setSnake] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_SNAKE);
    const [apple, setApple] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_APPLE);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("RIGHT");
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDead, setIsDead] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const playerName = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("nomeJogador") : "TURBOPACK unreachable";
    const playerId = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("jogadorId") : "TURBOPACK unreachable";
    function draw(ctx) {
        // fundo quadriculado
        for(let x = 0; x < GRID_SIZE; x++){
            for(let y = 0; y < GRID_SIZE; y++){
                ctx.fillStyle = (x + y) % 2 === 0 ? GRID_COLOR_DARK : GRID_COLOR_LIGHT;
                ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
            }
        }
        // cobra
        ctx.fillStyle = SNAKE_COLOR;
        snake.forEach((seg)=>{
            ctx.fillRect(seg.x * CELL_SIZE, seg.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        });
        // maçã
        ctx.fillStyle = APPLE_COLOR;
        ctx.fillRect(apple.x * CELL_SIZE, apple.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
    function gameOver() {
        setIsDead(true);
        if (playerId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("http://localhost:4000/jogadores/".concat(playerId, "/score"), {
                score
            });
        }
    }
    function restartGame() {
        setSnake(INITIAL_SNAKE);
        setApple(INITIAL_APPLE);
        setDirection("RIGHT");
        setScore(0);
        setIsDead(false);
    }
    function gameLoop(ctx) {
        draw(ctx);
        const head = {
            ...snake[0]
        };
        if (direction === "UP") head.y--;
        if (direction === "DOWN") head.y++;
        if (direction === "LEFT") head.x--;
        if (direction === "RIGHT") head.x++;
        // colisão parede
        if (head.x < 0 || head.y < 0 || head.x >= GRID_SIZE || head.y >= GRID_SIZE) {
            gameOver();
            return;
        }
        // colisão corpo
        if (snake.some((seg, i)=>i !== 0 && seg.x === head.x && seg.y === head.y)) {
            gameOver();
            return;
        }
        let newSnake = [
            head,
            ...snake
        ];
        // comeu maçã
        if (head.x === apple.x && head.y === apple.y) {
            setScore((s)=>s + 10);
            let newApple;
            do {
                newApple = {
                    x: Math.floor(Math.random() * GRID_SIZE),
                    y: Math.floor(Math.random() * GRID_SIZE)
                };
            }while (newSnake.some((seg)=>seg.x === newApple.x && seg.y === newApple.y))
            setApple(newApple);
        } else {
            newSnake.pop();
        }
        setSnake(newSnake);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            var _canvasRef_current;
            const ctx = (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.getContext("2d");
            if (!ctx || isDead) return;
            const interval = setInterval({
                "Page.useEffect.interval": ()=>{
                    gameLoop(ctx);
                }
            }["Page.useEffect.interval"], 150);
            const handleKey = {
                "Page.useEffect.handleKey": (e)=>{
                    if (e.key === "ArrowUp" && direction !== "DOWN") setDirection("UP");
                    if (e.key === "ArrowDown" && direction !== "UP") setDirection("DOWN");
                    if (e.key === "ArrowLeft" && direction !== "RIGHT") setDirection("LEFT");
                    if (e.key === "ArrowRight" && direction !== "LEFT") setDirection("RIGHT");
                }
            }["Page.useEffect.handleKey"];
            document.addEventListener("keydown", handleKey);
            return ({
                "Page.useEffect": ()=>{
                    clearInterval(interval);
                    document.removeEventListener("keydown", handleKey);
                }
            })["Page.useEffect"];
        }
    }["Page.useEffect"], [
        snake,
        direction,
        apple,
        isDead
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: "center",
            minHeight: "100vh",
            background: "#111"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    color: "white",
                    fontSize: "2.5em",
                    fontFamily: "'Press Start 2P', cursive"
                },
                children: "🐍 SNAKE 🐍"
            }, void 0, false, {
                fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "white",
                    fontFamily: "'Press Start 2P', cursive"
                },
                children: [
                    "Jogador: ",
                    playerName || "Convidado"
                ]
            }, void 0, true, {
                fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "yellow",
                    fontFamily: "'Press Start 2P', cursive"
                },
                children: [
                    "Pontuação: ",
                    score
                ]
            }, void 0, true, {
                fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    width: CELL_SIZE * GRID_SIZE,
                    margin: "20px auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        width: CELL_SIZE * GRID_SIZE,
                        height: CELL_SIZE * GRID_SIZE,
                        style: {
                            border: "2px solid white",
                            background: GRID_COLOR_DARK
                        }
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    isDead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$src$2f$app$2f$jogo$2f$JogarDeNovo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onRestart: restartGame
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                        lineNumber: 155,
                        columnNumber: 20
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_s(Page, "4LGDsN/cpm3iNTXz4Cc0Iv0R6UQ=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=snake-frontend_src_app_jogo_d62ab6ed._.js.map