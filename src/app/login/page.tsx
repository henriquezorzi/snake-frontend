"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useJogador } from "../context/jogadorContext";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setJogador } = useJogador();

  const handleLogin = async () => {
    if (!name || !password) return; 

    try {
      const res = await fetch("http://localhost:4000/jogadores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
      });

      const data = await res.json();

      if (res.ok) {
        
        setJogador(data.jogador);

        
        if (typeof window !== "undefined") {
          localStorage.setItem("nomeJogador", data.jogador.name);
          localStorage.setItem("jogadorId", data.jogador._id);
        }

        
        router.push("/jogo");
      } else {
        alert("Erro no login/cadastro: " + (data.error || "Servidor não respondeu"));
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao conectar com o servidor");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-green-400 font-mono">
      <h1 className="text-3xl mb-6">Bem-vindo jogador</h1>
      <input
        className="mb-4 px-4 py-2 rounded bg-gray-800 text-white"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        className="mb-4 px-4 py-2 rounded bg-gray-800 text-white"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="border px-6 py-2 rounded hover:bg-green-600"
        onClick={handleLogin}
      >
        Entrar
      </button>
    </div>
  );
}
