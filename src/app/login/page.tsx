"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useJogador } from "../context/jogadorContext";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const { setJogador } = useJogador();

  const handleLogin = async () => {
    if (!name || !password) {
      setErrorMessage("Por favor, preencha nome e senha");
      return;
    }

    // Validação do nome
    if (name.length < 3) {
      setErrorMessage("Nome deve ter pelo menos 3 caracteres");
      return;
    }

    // Validação da senha
    if (password.length < 4) {
      setErrorMessage("Senha deve ter pelo menos 4 caracteres");
      return;
    }

    if (password.length > 20) {
      setErrorMessage("Senha deve ter no máximo 20 caracteres");
      return;
    }

    // Verificar se a senha contém pelo menos uma letra e um número
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    
    if (!hasLetter || !hasNumber) {
      setErrorMessage("Senha deve conter pelo menos uma letra e um número");
      return;
    }

    setErrorMessage("");

    try {
      // Verificar se já existe um jogador com esse nome no banco
      const checkRes = await fetch("http://localhost:4000/jogadores");
      if (checkRes.ok) {
        const existingPlayers = await checkRes.json();
        const nameExists = existingPlayers.find((player: any) => 
          player.name?.toLowerCase().trim() === name.toLowerCase().trim()
        );
        
        if (nameExists) {
          setErrorMessage(`O nome "${name}" já está sendo usado por outro jogador. Escolha um nome diferente.`);
          return;
        }
      }

      // Se o nome não existe, tenta criar o jogador
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
        // Se mesmo assim der erro de nome duplicado (double-check do backend)
        if (res.status === 409 || (data.error && (data.error.includes("já existe") || data.error.includes("duplicado")))) {
          setErrorMessage(`O nome "${name}" já está sendo usado. Tente outro nome.`);
        } else {
          setErrorMessage(data.error || "Erro no cadastro/login");
        }
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Erro ao conectar com o servidor");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-green-400 font-mono">
      <h1 className="text-3xl mb-6">Bem-vindo jogador</h1>
      
      {errorMessage && (
        <div className="mb-4 p-3 bg-red-900/50 border border-red-500 rounded text-red-300 text-center max-w-md">
          {errorMessage}
        </div>
      )}
      
      <input
        className="mb-4 px-4 py-2 rounded bg-gray-800 text-white"
        placeholder="Nome"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setErrorMessage(""); 
        }}
      />
      <input
        type="password"
        className="mb-4 px-4 py-2 rounded bg-gray-800 text-white"
        placeholder="Senha"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setErrorMessage("");
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleLogin();
          }
        }}
      />
      <button
        className="border px-6 py-2 rounded hover:bg-green-600"
        onClick={handleLogin}
      >
        Entrar
      </button>
      
      <div className="mt-6 text-sm text-gray-400 text-center max-w-md">
        <p className="mb-2">Requisitos:</p>
        <p>• Nome: mínimo 3 caracteres (deve ser único)</p>
        <p>• Senha: 4-20 caracteres com letra e número</p>
        <p className="mt-2 text-xs text-yellow-400">
          ⚠️ Cada jogador deve ter um nome único no ranking
        </p>
      </div>
    </div>
  );
}
