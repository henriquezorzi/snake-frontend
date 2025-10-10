"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useJogador } from "../context/jogadorContext";
import Link from "next/link";

function validate(name: string, password: string) {
    if (!name || !password) return "Por favor, preencha nome e senha";
    return "";
}

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setJogador } = useJogador();

  const handleLogin = async () => {
    
    const trimmedName = name.trim();
    if (!trimmedName) {
      setErrorMessage("Por favor, preencha o nome");
      return;
    }
    if (trimmedName.length < 3) {
      setErrorMessage("Nome deve ter pelo menos 3 caracteres");
      return;
    }

    const trimmedPassword = password.trim();
    if (!trimmedPassword) {
      setErrorMessage("Por favor, preencha a senha");
      return;
    }
    if (trimmedPassword.length < 4 || trimmedPassword.length > 20) {
      setErrorMessage("Senha deve ter entre 4 e 20 caracteres");
      return;
    }

    const hasLetter = /[a-zA-Z]/.test(trimmedPassword);
    const hasNumber = /[0-9]/.test(trimmedPassword);
    if (!hasLetter || !hasNumber) {
      setErrorMessage("Senha deve conter pelo menos uma letra e um número");
      return;
    }

    setErrorMessage("");
    setLoading(true);

    try {
      // checa existência
      const checkRes = await fetch("http://localhost:4000/jogadores");
      if (checkRes.ok) {
        const existingPlayers = await checkRes.json();
        const nameExists = existingPlayers.some(
          (player: any) => player.name?.toLowerCase() === trimmedName.toLowerCase()
        );
        if (nameExists) {
          setErrorMessage(`O nome "${trimmedName}" já está sendo usado. Escolha outro.`);
          setLoading(false);
          return;
        }
      }

      
      const res = await fetch("http://localhost:4000/jogadores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, password: trimmedPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        setJogador(data.jogador);
        localStorage.setItem("nomeJogador", data.jogador.name);
        localStorage.setItem("jogadorId", data.jogador._id);
        router.push("/jogo");
      } else {
        if (res.status === 409 || (data.error?.includes("já existe") || data.error?.includes("duplicado"))) {
          setErrorMessage(`O nome "${trimmedName}" já está sendo usado. Tente outro.`);
        } else {
          setErrorMessage(data.error || "Erro no cadastro/login");
        }
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Erro ao conectar com o servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-yellow-400 font-mono">
      <h1 className="text-3xl mb-6">Bem-vindo jogador</h1>

      {errorMessage && (
        <div className="mb-4 p-3 bg-red-900/50 border border-red-500 rounded text-red-300 text-center max-w-md">
          {errorMessage}
        </div>
      )}

      {}
      <div style={{ position: "absolute", left: -9999, top: 0, height: 0, width: 0, overflow: "hidden" }} aria-hidden>
        <input name="no_autofill_user" type="text" autoComplete="username" tabIndex={-1} />
        <input name="no_autofill_pass" type="password" autoComplete="new-password" tabIndex={-1} />
      </div>

      {}
      <form
        onSubmit={(e) => { e.preventDefault(); handleLogin(); }}
        autoComplete="off"
        className="flex flex-col items-center"
      >
        <input
         
          name="jogo_nome"
          autoComplete="off"
          className="mb-4 px-4 py-2 rounded bg-gray-800 text-white"
          placeholder="Nome"
          value={name}
          onChange={(e) => { setName(e.target.value); setErrorMessage(""); }}
        />

        <input
          
          name="jogo_senha"
          autoComplete="new-password"
          className="mb-4 px-4 py-2 rounded bg-gray-800 text-white"
          placeholder="Senha"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setErrorMessage(""); }}
          onKeyDown={(e) => { if (e.key === "Enter") handleLogin(); }}
          
          readOnly
          onFocus={(e) => {
           
            (e.target as HTMLInputElement).removeAttribute("readOnly");
          }}
        />

        <button
          type="submit"
          disabled={loading}
          className={`border px-6 py-2 rounded hover:bg-green-600 ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
        >
          {loading ? "Carregando..." : "Entrar"}
        </button>
      </form>

      <div className="mt-6 text-sm text-gray-400 text-center max-w-md">
        <p className="mb-2">Regras de cadastro:</p>
        <p>• Nome: mínimo 3 caracteres (único no ranking)</p>
        <p>• Senha: 4 a 20 caracteres, com pelo menos uma letra e um número</p>
        <p className="mt-2 text-xs text-yellow-400">
          ⚠️ Cada jogador deve ter um nome único
        </p>
      </div>
    </div>
  );
}
