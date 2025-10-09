"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import JogarDeNovo from "./JogarDeNovo";
import "@fontsource/press-start-2p";

const CELL_SIZE = 30;
const GRID_SIZE = 30;

const SNAKE_COLOR = "limegreen";
const APPLE_COLOR = "yellow";
const GRID_COLOR_DARK = "#1a1a1a";
const GRID_COLOR_LIGHT = "#2e2e2e";

type Point = { x: number; y: number };
type Dir = "UP" | "DOWN" | "LEFT" | "RIGHT";

const INITIAL_SNAKE: Point[] = [{ x: 8, y: 8 }];
const INITIAL_APPLE: Point = { x: 12, y: 12 };

export default function Page(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const intervalRef = useRef<number | null>(null);

  const [snake, setSnake] = useState<Point[]>(INITIAL_SNAKE);
  const [apple, setApple] = useState<Point>(INITIAL_APPLE);
  const [direction, setDirection] = useState<Dir>("RIGHT");
  const [score, setScore] = useState(0);
  const [isDead, setIsDead] = useState(false);

  // read once (safe for SSR check)
  const playerName = typeof window !== "undefined" ? localStorage.getItem("nomeJogador") : null;
  const playerId = typeof window !== "undefined" ? localStorage.getItem("jogadorId") : null;

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

  function saveScoreRemote(finalScore: number) {
    if (!playerId) return;
    axios
      .put(`http://localhost:4000/jogadores/${playerId}/score`, { score: finalScore })
      .then(() => console.log("Score salvo/atualizado com sucesso!"))
      .catch((err) => console.error("Erro ao salvar score:", err));
  }

  function gameOver() {
    setIsDead(true);
    saveScoreRemote(score);
  }

  function restartGame() {
    setSnake(INITIAL_SNAKE);
    setApple(INITIAL_APPLE);
    setDirection("RIGHT");
    setScore(0);
    setIsDead(false);
  }

  function step() {
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
      let newApple: Point;
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

  // draw + step loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // desenha imediatamente
    draw(ctx);

    // limpa qualquer intervalo anterior
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (isDead) return;

    // loop de jogo
    intervalRef.current = window.setInterval(() => {
      step();
      // redesenha após o passo
      const ctx2 = canvas.getContext("2d");
      if (ctx2) draw(ctx2);
    }, 150);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snake, apple, direction, isDead]);

  // keyboard
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" && direction !== "DOWN") setDirection("UP");
      if (e.key === "ArrowDown" && direction !== "UP") setDirection("DOWN");
      if (e.key === "ArrowLeft" && direction !== "RIGHT") setDirection("LEFT");
      if (e.key === "ArrowRight" && direction !== "LEFT") setDirection("RIGHT");
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [direction]);

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
