"use client";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import JogarDeNovo from "./JogarDeNovo";
import "@fontsource/press-start-2p";

const CELL_SIZE = 30;
const GRID_SIZE = 30;

const SNAKE_COLOR = "limegreen";
const APPLE_COLOR = "yellow";
const GRID_COLOR_DARK = "#1a1a1a";
const GRID_COLOR_LIGHT = "#2e2e2e";

const INITIAL_SNAKE = [{ x: 8, y: 8 }];
const INITIAL_APPLE = { x: 12, y: 12 };

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [apple, setApple] = useState(INITIAL_APPLE);
  const [direction, setDirection] = useState("RIGHT");
  const [score, setScore] = useState(0);
  const [isDead, setIsDead] = useState(false);

  const playerName =
    typeof window !== "undefined" ? localStorage.getItem("nomeJogador") : "";
  const playerId =
    typeof window !== "undefined" ? localStorage.getItem("jogadorId") : "";

  function draw(ctx: CanvasRenderingContext2D) {
    // fundo quadriculado
    for (let x = 0; x < GRID_SIZE; x++) {
      for (let y = 0; y < GRID_SIZE; y++) {
        ctx.fillStyle = (x + y) % 2 === 0 ? GRID_COLOR_DARK : GRID_COLOR_LIGHT;
        ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
    }
    // cobra
    ctx.fillStyle = SNAKE_COLOR;
    snake.forEach((seg) => {
      ctx.fillRect(seg.x * CELL_SIZE, seg.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    });
    // maçã
    ctx.fillStyle = APPLE_COLOR;
    ctx.fillRect(apple.x * CELL_SIZE, apple.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  }

  function gameOver() {
    setIsDead(true);
    if (playerId) {
      axios.put(`http://localhost:4000/jogadores/${playerId}/score`, { score });
    }
  }

  function restartGame() {
    setSnake(INITIAL_SNAKE);
    setApple(INITIAL_APPLE);
    setDirection("RIGHT");
    setScore(0);
    setIsDead(false);
  }

  function gameLoop(ctx: CanvasRenderingContext2D) {
    draw(ctx);

    const head = { ...snake[0] };
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
    if (snake.some((seg, i) => i !== 0 && seg.x === head.x && seg.y === head.y)) {
      gameOver();
      return;
    }

    let newSnake = [head, ...snake];

    // comeu maçã
    if (head.x === apple.x && head.y === apple.y) {
      setScore((s) => s + 10);
      let newApple;
      do {
        newApple = {
          x: Math.floor(Math.random() * GRID_SIZE),
          y: Math.floor(Math.random() * GRID_SIZE),
        };
      } while (newSnake.some((seg) => seg.x === newApple.x && seg.y === newApple.y));
      setApple(newApple);
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || isDead) return;

    const interval = setInterval(() => {
      gameLoop(ctx);
    }, 150);

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" && direction !== "DOWN") setDirection("UP");
      if (e.key === "ArrowDown" && direction !== "UP") setDirection("DOWN");
      if (e.key === "ArrowLeft" && direction !== "RIGHT") setDirection("LEFT");
      if (e.key === "ArrowRight" && direction !== "LEFT") setDirection("RIGHT");
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      clearInterval(interval);
      document.removeEventListener("keydown", handleKey);
    };
  }, [snake, direction, apple, isDead]);

  return (
    <div style={{ textAlign: "center", minHeight: "100vh", background: "#111" }}>
      <h1
        style={{
          color: "white",
          fontSize: "2.5em",
          fontFamily: "'Press Start 2P', cursive",
        }}
      >
        🐍 SNAKE 🐍
      </h1>

      <p style={{ color: "white", fontFamily: "'Press Start 2P', cursive" }}>
        Jogador: {playerName || "Convidado"}
      </p>
      <p style={{ color: "yellow", fontFamily: "'Press Start 2P', cursive" }}>
        Pontuação: {score}
      </p>

      <div style={{ position: "relative", width: CELL_SIZE * GRID_SIZE, margin: "20px auto" }}>
        <canvas
          ref={canvasRef}
          width={CELL_SIZE * GRID_SIZE}
          height={CELL_SIZE * GRID_SIZE}
          style={{ border: "2px solid white", background: GRID_COLOR_DARK }}
        />
        {isDead && <JogarDeNovo onRestart={restartGame} />}
      </div>
    </div>
  );
}

