module.exports = [
"[project]/snake-frontend/src/app/jogo/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Jogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/snake-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './JogarDeNovo'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
// =================================================================
// 🎮 Configurações do Jogo
// =================================================================
const CELL_SIZE = 20; // Tamanho de cada célula (bloco) em pixels
const GRID_SIZE = 20; // Número de células por lado (20x20)
const GAME_SPEED = 150; // Velocidade em milissegundos (a cada 150ms a cobra se move)
// Cores para o tema SNAKE-ONLINE
const SNAKE_COLOR = "white";
const APPLE_COLOR = "yellow";
const GRID_COLOR_DARK = "#1a1a1a"; // Fundo cinza escuro
const GRID_COLOR_LIGHT = "#2e2e2e"; // O "quadradinho branco clarinho" (na verdade, cinza claro)
// Posições iniciais
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
function Jogo() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [context, setContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Estados principais do jogo
    const [snake, setSnake] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(INITIAL_SNAKE);
    const [apple, setApple] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(INITIAL_APPLE);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("RIGHT");
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDead, setIsDead] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Informações do jogador (puxadas do localStorage)
    const playerName = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "";
    const playerId = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "";
    // =================================================================
    // 🎨 Funções de Desenho (para o canvas)
    // =================================================================
    // Desenha o fundo quadriculado (xadrez)
    const drawGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ctx)=>{
        for(let x = 0; x < GRID_SIZE; x++){
            for(let y = 0; y < GRID_SIZE; y++){
                // Alterna a cor com base na soma das coordenadas para criar o xadrez
                ctx.fillStyle = (x + y) % 2 === 0 ? GRID_COLOR_DARK : GRID_COLOR_LIGHT;
                ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
            }
        }
    }, []);
    // Desenha a cobra
    const drawSnake = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ctx, s)=>{
        ctx.fillStyle = SNAKE_COLOR;
        s.forEach((segment)=>{
            ctx.fillRect(segment.x * CELL_SIZE, segment.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        });
    }, []);
    // Desenha a maçã
    const drawApple = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ctx, a)=>{
        ctx.fillStyle = APPLE_COLOR;
        ctx.fillRect(a.x * CELL_SIZE, a.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }, []);
    // Função principal de desenho, chamada a cada frame
    const drawGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ctx, s, a)=>{
        drawGrid(ctx);
        drawSnake(ctx, s);
        drawApple(ctx, a);
    }, [
        drawGrid,
        drawSnake,
        drawApple
    ]);
    // =================================================================
    // ⚙️ Lógica do Jogo
    // =================================================================
    // Salva a pontuação final no servidor
    const saveScore = async (finalScore)=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    };
    // Encerra o jogo e chama a função de salvar score
    const gameOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsDead(true);
        saveScore(score);
    }, [
        score,
        playerId
    ]);
    // Reinicia o jogo para o estado inicial
    const restartGame = ()=>{
        setSnake(INITIAL_SNAKE);
        setApple(INITIAL_APPLE);
        setDirection("RIGHT");
        setScore(0);
        setIsDead(false);
    };
    // O "tick" do jogo: calcula a nova posição e verifica colisões
    const gameLoop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!context || isDead) return;
        // 1. Desenha o estado atual
        drawGame(context, snake, apple);
        // 2. Calcula a próxima posição da cabeça (cabeça nova)
        const head = {
            ...snake[0]
        };
        if (direction === "UP") head.y -= 1;
        else if (direction === "DOWN") head.y += 1;
        else if (direction === "LEFT") head.x -= 1;
        else if (direction === "RIGHT") head.x += 1;
        // 3. Verifica Colisões: Paredes
        if (head.x < 0 || head.y < 0 || head.x >= GRID_SIZE || head.y >= GRID_SIZE) {
            gameOver();
            return;
        }
        // 4. Verifica Colisões: Corpo
        // Começa a verificar do segundo segmento (índice 1)
        for(let i = 1; i < snake.length; i++){
            if (head.x === snake[i].x && head.y === snake[i].y) {
                gameOver();
                return;
            }
        }
        let newSnake = [
            head,
            ...snake
        ];
        // 5. Verifica Colisão: Maçã
        if (head.x === apple.x && head.y === apple.y) {
            setScore((prevScore)=>prevScore + 10);
            // Gera nova maçã em uma posição que não esteja ocupada pela cobra
            let newApple;
            do {
                newApple = {
                    x: Math.floor(Math.random() * GRID_SIZE),
                    y: Math.floor(Math.random() * GRID_SIZE)
                };
            }while (newSnake.some((segment)=>segment.x === newApple.x && segment.y === newApple.y))
            setApple(newApple);
        } else {
            newSnake.pop(); // Se não comeu, remove o último segmento para simular o movimento
        }
        setSnake(newSnake);
    }, [
        context,
        snake,
        direction,
        apple,
        isDead,
        drawGame,
        gameOver
    ]);
    // =================================================================
    // 🚀 Efeitos e Handlers
    // =================================================================
    // Efeito: Inicializa o contexto 2D e o desenho inicial
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) {
                setContext(ctx);
                drawGame(ctx, INITIAL_SNAKE, INITIAL_APPLE);
            }
        }
    }, [
        drawGame
    ]);
    // Efeito: Controla o loop do jogo e os comandos do teclado
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isDead) return;
        // Inicia o loop de repetição do jogo (movimento da cobra)
        const interval = setInterval(()=>{
            gameLoop();
        }, GAME_SPEED);
        // Handler para capturar as teclas de direção
        const handleKey = (e)=>{
            // Bloqueia movimento contrário
            if (e.key === "ArrowUp" && direction !== "DOWN") setDirection("UP");
            else if (e.key === "ArrowDown" && direction !== "UP") setDirection("DOWN");
            else if (e.key === "ArrowLeft" && direction !== "RIGHT") setDirection("LEFT");
            else if (e.key === "ArrowRight" && direction !== "LEFT") setDirection("RIGHT");
        };
        document.addEventListener("keydown", handleKey);
        // Limpeza: Desliga o intervalo e remove o listener ao desmontar
        return ()=>{
            clearInterval(interval);
            document.removeEventListener("keydown", handleKey);
        };
    }, [
        gameLoop,
        isDead,
        direction
    ]);
    // =================================================================
    // 🖼️ Renderização
    // =================================================================
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: "center",
            backgroundColor: "#000",
            minHeight: "100vh",
            color: "white",
            paddingBottom: "50px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    color: "yellow",
                    paddingTop: 20
                },
                children: "🐍 SNAKE-ONLINE"
            }, void 0, false, {
                fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "white"
                },
                children: [
                    "Jogador: **",
                    playerName || "Convidado",
                    "**"
                ]
            }, void 0, true, {
                fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "white",
                    fontSize: "1.2em",
                    fontWeight: "bold"
                },
                children: [
                    "Pontuação: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "yellow"
                        },
                        children: score
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                        lineNumber: 218,
                        columnNumber: 20
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    width: CELL_SIZE * GRID_SIZE,
                    margin: '20px auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        width: CELL_SIZE * GRID_SIZE,
                        height: CELL_SIZE * GRID_SIZE,
                        style: {
                            border: "2px solid white",
                            background: GRID_COLOR_DARK
                        }
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    isDead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$snake$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(JogarDeNovo, {
                        onRestart: restartGame
                    }, void 0, false, {
                        fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                        lineNumber: 231,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/snake-frontend/src/app/jogo/page.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=snake-frontend_src_app_jogo_page_tsx_4856295b._.js.map