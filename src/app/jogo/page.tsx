"use client";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Jogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  const [snake, setSnake] = useState([{ x: 8, y: 8 }]);
  const [apple, setApple] = useState({ x: 12, y: 12 });
  const [direction, setDirection] = useState("RIGHT");
  const [pontos, setPontos] = useState(0);
  const [morto, setMorto] = useState(false);
  
  const nomeJogador = typeof window !== "undefined" ? localStorage.getItem("nomeJogador") : "";
  const jogadorId = typeof window !== "undefined" ? localStorage.getItem("jogadorId") : "";

  const box = 20;
  const canvasSize = 20;

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) setContext(ctx);
    }
  }, []);
  
  useEffect(() => {
    if (!context || morto) return;

    const interval = setInterval(() => {
      gameLoop();
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
  }, [context, snake, direction, apple, morto]);
  
  const gameLoop = () => {
    if (!context) return;

    // Limpa tela
    context.fillStyle = "#111";
    context.fillRect(0, 0, box * canvasSize, box * canvasSize);

    context.fillStyle = "lime";
    snake.forEach((s) => {
      context.fillRect(s.x * box, s.y * box, box, box);
    });
    
    context.fillStyle = "red";
    context.fillRect(apple.x * box, apple.y * box, box, box);
    
    const head = { ...snake[0] };
    if (direction === "UP") head.y -= 1;
    if (direction === "DOWN") head.y += 1;
    if (direction === "LEFT") head.x -= 1;
    if (direction === "RIGHT") head.x += 1;

    // Colisão com paredes
    if (head.x < 0 || head.y < 0 || head.x >= canvasSize || head.y >= canvasSize) {
      morrer();
      return;
    }
    
    for (let i = 0; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        morrer();
        return;
      }
    }

    const newSnake = [head, ...snake];

    if (head.x === apple.x && head.y === apple.y) {
      setPontos((p) => p + 10);
      setApple({
        x: Math.floor(Math.random() * canvasSize),
        y: Math.floor(Math.random() * canvasSize),
      });
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  const salvarScore = async () => {
    if (!jogadorId) return;
    try {
      await axios.put(`http://localhost:4000/jogadores/${jogadorId}/score`, {
        score: pontos,
      });
      console.log("Score salvo/atualizado com sucesso!");
    } catch (err) {
      console.error("Erro ao salvar score:", err);
    }
  };
  
  const morrer = () => {
    setMorto(true);
    salvarScore(); 
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>🐍 Snake Game</h1>
      <p>Jogador: {nomeJogador}</p>
      <p>Pontuação: {pontos}</p>

      <canvas
        ref={canvasRef}
        width={box * canvasSize}
        height={box * canvasSize}
        style={{ border: "2px solid white", background: "#111" }}
      />

      {morto && (
        <div style={{ marginTop: 20 }}>
          <h2>Game Over!</h2>
          <Link href="/">Voltar ao Menu</Link>
        </div>
      )}
    </div>
  );
}
