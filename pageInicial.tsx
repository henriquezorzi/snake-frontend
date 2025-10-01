"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function Home() {
  const [nome, setNome] = useState("");
  const [registrado, setRegistrado] = useState(false);

  const registrarJogador = async () => {
    if (!nome) return alert("Digite seu nome!");
    await axios.post("https://SUA_API/players", { nome });
    localStorage.setItem("snake_player", nome);
    setRegistrado(true);
  };

  if (registrado) {
    // Se registrou, manda para o jogo
    window.location.href = "/jogo";
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🐍 Snake Online</h1>

      <div style={{ marginTop: 40 }}>
        <button onClick={() => {
          const nomeDigitado = prompt("Digite seu nome:");
          if (nomeDigitado) {
            setNome(nomeDigitado);
            registrarJogador();
          }
        }}>
          Jogar
        </button>
      </div>

      <div style={{ marginTop: 20 }}>
        <Link href="/ranking">
          <button>Ranking</button>
        </Link>
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => alert("Volte sempre!")}>
          Sair
        </button>
      </div>
    </div>
  );
}
