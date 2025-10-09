(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/snake-frontend/src/app/jogo/GameOverOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameOverOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
function GameOverOverlay(param) {
    let { onRestart } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            padding: '40px',
            borderRadius: '10px',
            border: '2px solid yellow',
            textAlign: 'center',
            width: '300px',
            boxShadow: '0 0 20px rgba(255, 255, 0, 0.5)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    color: "yellow",
                    fontSize: "2em",
                    marginBottom: "20px"
                },
                children: "Game Over!"
            }, void 0, false, {
                fileName: "[project]/snake-frontend/src/app/jogo/GameOverOverlay.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onRestart,
                        style: {
                            background: "yellow",
                            color: "black",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontSize: "1.1em",
                            fontWeight: "bold",
                            transition: "background 0.2s"
                        },
                        children: "Jogar de Novo"
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/jogo/GameOverOverlay.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        style: {
                            color: "white",
                            textDecoration: "none",
                            padding: "10px 20px",
                            border: "1px solid white",
                            borderRadius: "5px",
                            transition: "background 0.2s"
                        },
                        children: "Voltar ao Menu"
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/jogo/GameOverOverlay.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/snake-frontend/src/app/jogo/GameOverOverlay.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/snake-frontend/src/app/jogo/GameOverOverlay.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = GameOverOverlay;
var _c;
__turbopack_context__.k.register(_c, "GameOverOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/snake-frontend/src/app/jogo/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Jogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$src$2f$app$2f$jogo$2f$GameOverOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/src/app/jogo/GameOverOverlay.tsx [app-client] (ecmascript)"); // Importando o novo componente
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Jogo() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [context, setContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Estados iniciais para o reinício
    const initialSnake = [
        {
            x: 8,
            y: 8
        }
    ];
    const initialApple = {
        x: 12,
        y: 12
    };
    const [snake, setSnake] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialSnake);
    const [apple, setApple] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialApple);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("RIGHT");
    const [pontos, setPontos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [morto, setMorto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const nomeJogador = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("nomeJogador") : "TURBOPACK unreachable";
    const jogadorId = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("jogadorId") : "TURBOPACK unreachable";
    // Definições de cores e tamanho
    const box = 20;
    const canvasSize = 20;
    const snakeColor = "white"; // Cobrinha branca
    const appleColor = "yellow"; // Maçã amarela
    const canvasBgColor = "#1a1a1a"; // Fundo cinza escuro
    // Função para desenhar o corpo da cobra
    const drawSnake = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Jogo.useCallback[drawSnake]": (ctx, s)=>{
            ctx.fillStyle = snakeColor;
            s.forEach({
                "Jogo.useCallback[drawSnake]": (segment)=>{
                    ctx.fillRect(segment.x * box, segment.y * box, box, box);
                }
            }["Jogo.useCallback[drawSnake]"]);
        }
    }["Jogo.useCallback[drawSnake]"], [
        box
    ]);
    // Função para desenhar a maçã
    const drawApple = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Jogo.useCallback[drawApple]": (ctx, a)=>{
            ctx.fillStyle = appleColor;
            ctx.fillRect(a.x * box, a.y * box, box, box);
        }
    }["Jogo.useCallback[drawApple]"], [
        box
    ]);
    // Função para limpar e desenhar o canvas
    const drawGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Jogo.useCallback[drawGame]": (ctx, s, a)=>{
            ctx.fillStyle = canvasBgColor;
            ctx.fillRect(0, 0, box * canvasSize, box * canvasSize);
            drawSnake(ctx, s);
            drawApple(ctx, a);
        }
    }["Jogo.useCallback[drawGame]"], [
        box,
        canvasSize,
        canvasBgColor,
        drawSnake,
        drawApple
    ]);
    // Hook para obter o contexto do canvas na montagem
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Jogo.useEffect": ()=>{
            if (canvasRef.current) {
                const ctx = canvasRef.current.getContext("2d");
                if (ctx) {
                    setContext(ctx);
                    // Desenha o estado inicial
                    drawGame(ctx, initialSnake, initialApple);
                }
            }
        }
    }["Jogo.useEffect"], [
        drawGame
    ]);
    // Função assíncrona para salvar o score
    const salvarScore = async (finalPontos)=>{
        if (!jogadorId) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("http://localhost:4000/jogadores/".concat(jogadorId, "/score"), {
                score: finalPontos
            });
            console.log("Score salvo/atualizado com sucesso!");
        } catch (err) {
            console.error("Erro ao salvar score:", err);
        }
    };
    // Funções de Jogo
    const morrer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Jogo.useCallback[morrer]": ()=>{
            setMorto(true);
            salvarScore(pontos); // Salva o score atual
        }
    }["Jogo.useCallback[morrer]"], [
        pontos
    ]);
    // Reinicia o estado do jogo
    const reiniciarJogo = ()=>{
        setSnake(initialSnake);
        setApple(initialApple);
        setDirection("RIGHT");
        setPontos(0);
        setMorto(false);
    };
    const gameLoop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Jogo.useCallback[gameLoop]": ()=>{
            if (!context || morto) return;
            // Desenha o estado atual do jogo
            drawGame(context, snake, apple);
            // Lógica de Movimento
            const head = {
                ...snake[0]
            };
            if (direction === "UP") head.y -= 1;
            if (direction === "DOWN") head.y += 1;
            if (direction === "LEFT") head.x -= 1;
            if (direction === "RIGHT") head.x += 1;
            // Colisão com paredes
            if (head.x < 0 || head.y < 0 || head.x >= canvasSize || head.y >= canvasSize) {
                morrer();
                return;
            }
            // Colisão com o corpo
            for(let i = 1; i < snake.length; i++){
                if (head.x === snake[i].x && head.y === snake[i].y) {
                    morrer();
                    return;
                }
            }
            let newSnake = [
                head,
                ...snake
            ];
            // Colisão com a maçã
            if (head.x === apple.x && head.y === apple.y) {
                setPontos({
                    "Jogo.useCallback[gameLoop]": (p)=>p + 10
                }["Jogo.useCallback[gameLoop]"]);
                let newApple;
                do {
                    newApple = {
                        x: Math.floor(Math.random() * canvasSize),
                        y: Math.floor(Math.random() * canvasSize)
                    };
                }while (newSnake.some({
                    "Jogo.useCallback[gameLoop]": (segment)=>segment.x === newApple.x && segment.y === newApple.y
                }["Jogo.useCallback[gameLoop]"])) // Garante que a maçã não nasça na cobra
                setApple(newApple);
            } else {
                newSnake.pop(); // Remove a cauda se não comeu
            }
            setSnake(newSnake);
        }
    }["Jogo.useCallback[gameLoop]"], [
        context,
        snake,
        direction,
        apple,
        morto,
        canvasSize,
        drawGame,
        morrer
    ]);
    // Hook de controle do jogo (Intervalo e Teclas)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Jogo.useEffect": ()=>{
            if (morto) return;
            // Intervalo do jogo (velocidade)
            const interval = setInterval({
                "Jogo.useEffect.interval": ()=>{
                    gameLoop();
                }
            }["Jogo.useEffect.interval"], 150);
            // Controle de Teclas
            const handleKey = {
                "Jogo.useEffect.handleKey": (e)=>{
                    if (e.key === "ArrowUp" && direction !== "DOWN") setDirection("UP");
                    else if (e.key === "ArrowDown" && direction !== "UP") setDirection("DOWN");
                    else if (e.key === "ArrowLeft" && direction !== "RIGHT") setDirection("LEFT");
                    else if (e.key === "ArrowRight" && direction !== "LEFT") setDirection("RIGHT");
                }
            }["Jogo.useEffect.handleKey"];
            document.addEventListener("keydown", handleKey);
            return ({
                "Jogo.useEffect": ()=>{
                    clearInterval(interval);
                    document.removeEventListener("keydown", handleKey);
                }
            })["Jogo.useEffect"];
        }
    }["Jogo.useEffect"], [
        gameLoop,
        morto,
        direction
    ]); // Adicionei 'direction' às dependências para evitar bugs de direção
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: "center",
            backgroundColor: "#000",
            minHeight: "100vh",
            color: "white"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    color: "yellow",
                    paddingTop: 20
                },
                children: "🐍 SNAKE-ONLINE"
            }, void 0, false, {
                fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "white"
                },
                children: [
                    "Jogador: **",
                    nomeJogador || "Convidado",
                    "**"
                ]
            }, void 0, true, {
                fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "white",
                    fontSize: "1.2em",
                    fontWeight: "bold"
                },
                children: [
                    "Pontuação: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "yellow"
                        },
                        children: pontos
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                        lineNumber: 172,
                        columnNumber: 87
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                width: box * canvasSize,
                height: box * canvasSize,
                style: {
                    border: "2px solid white",
                    background: canvasBgColor,
                    margin: "20px auto"
                }
            }, void 0, false, {
                fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            morto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$src$2f$app$2f$jogo$2f$GameOverOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onRestart: reiniciarJogo
            }, void 0, false, {
                fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_s(Jogo, "Kw1h6LhxCP75mQHx+QQblljW05Q=");
_c = Jogo;
var _c;
__turbopack_context__.k.register(_c, "Jogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=snake-frontend_src_app_jogo_d6a8ba23._.js.map