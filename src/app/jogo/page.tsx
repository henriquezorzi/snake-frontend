"use client";

import React, {  useEffect, useRef, useState } from "react";
import axios from "axios";
import JogarDeNovo from "./JogarDeNovo";
import "@fontsource/press-start-2p";
import { JSX } from "react/jsx-runtime";

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

  // estados para render
  const [snake, setSnake] = useState<Point[]>(INITIAL_SNAKE);
  const [apple, setApple] = useState<Point>(INITIAL_APPLE);
  const [score, setScore] = useState(0);
  const [isDead, setIsDead] = useState(false);
  const [speed, setSpeed] = useState(150);

  // refs para a lógica real
  const snakeRef = useRef<Point[]>(INITIAL_SNAKE);
  const directionRef = useRef<Dir>("RIGHT");
  const nextDirectionRef = useRef<Dir>("RIGHT");

  const playerName =
    typeof window !== "undefined" ? localStorage.getItem("nomeJogador") : null;
  const playerId =
    typeof window !== "undefined" ? localStorage.getItem("jogadorId") : null;

  function draw(ctx: CanvasRenderingContext2D) {
    for (let x = 0; x < GRID_SIZE; x++) {
      for (let y = 0; y < GRID_SIZE; y++) {
        ctx.fillStyle =
          (x + y) % 2 === 0 ? GRID_COLOR_DARK : GRID_COLOR_LIGHT;
        ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
    }

    ctx.fillStyle = SNAKE_COLOR;
    snakeRef.current.forEach((seg) => {
      ctx.fillRect(seg.x * CELL_SIZE, seg.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    });

    ctx.fillStyle = APPLE_COLOR;
    ctx.fillRect(apple.x * CELL_SIZE, apple.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  }

  function saveScoreRemote(finalScore: number) {
    if (!playerId) return;
    axios
      .put(`http://localhost:4000/jogadores/${playerId}/score`, {
        score: finalScore,
      })
      .then(() => console.log("Score salvo/atualizado com sucesso!"))
      .catch((err) => console.error("Erro ao salvar score:", err));
  }

  function gameOver() {
    setIsDead(true);
    saveScoreRemote(score);
  }

  function restartGame() {
    snakeRef.current = INITIAL_SNAKE;
    directionRef.current = "RIGHT";
    nextDirectionRef.current = "RIGHT";

    setSnake(INITIAL_SNAKE);
    setApple(INITIAL_APPLE);
    setScore(0);
    setSpeed(150);
    setIsDead(false);
  }

  function step() {
    const snake = snakeRef.current;
    const dir = nextDirectionRef.current;

    directionRef.current = dir;

    const head = { ...snake[0] };
    if (dir === "UP") head.y--;
    if (dir === "DOWN") head.y++;
    if (dir === "LEFT") head.x--;
    if (dir === "RIGHT") head.x++;

    // colisões
    if (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= GRID_SIZE ||
      head.y >= GRID_SIZE ||
      snake.some((seg, i) => i !== 0 && seg.x === head.x && seg.y === head.y)
    ) {
      gameOver();
      return;
    }

    let newSnake = [head, ...snake];
    if (head.x === apple.x && head.y === apple.y) {
      setScore((s) => s + 10);
      setSpeed((prev) => Math.max(80, prev - 3));

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

    snakeRef.current = newSnake;
    setSnake(newSnake);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    draw(ctx);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (isDead) return;

    intervalRef.current = window.setInterval(() => {
      step();
      const ctx2 = canvas.getContext("2d");
      if (ctx2) draw(ctx2);
    }, speed);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [apple, isDead, speed]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const dir = directionRef.current;

      if (e.key === "ArrowUp" && dir !== "DOWN") nextDirectionRef.current = "UP";
      if (e.key === "ArrowDown" && dir !== "UP") nextDirectionRef.current = "DOWN";
      if (e.key === "ArrowLeft" && dir !== "RIGHT") nextDirectionRef.current = "LEFT";
      if (e.key === "ArrowRight" && dir !== "LEFT") nextDirectionRef.current = "RIGHT";
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

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

      <div
        style={{
          position: "relative",
          width: CELL_SIZE * GRID_SIZE,
          margin: "20px auto",
        }}
      >
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
