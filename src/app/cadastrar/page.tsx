"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useJogador } from "../context/jogadorContext";
import Link from "next/link";

function validate(name: string, password: string) {
    if (!name || !password) return "Por favor, preencha nome e senha";
    if (name.length < 3) return "Nome deve ter pelo menos 3 caracteres";
    if (password.length < 4) return "Senha deve ter pelo menos 4 caracteres";
    if (password.length > 20) return "Senha deve ter no máximo 20 caracteres";
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    if (!hasLetter || !hasNumber) return "Senha deve conter pelo menos uma letra e um número";
    return "";
}

export default function CadastrarPage() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();
    const { setJogador } = useJogador();

    const handleCadastrar = async () => {
            const validationError = validate(name, password);
            if (validationError) {
                setErrorMessage(validationError);
                return;
            }

            setErrorMessage("");
            try {
                const res = await fetch("http://localhost:4000/jogadores", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, password }),
                });

                const data = await res.json().catch(() => ({}));

                if (res.ok) {
                    const jogador = data.jogador;
                    setJogador(jogador);
                    if (typeof window !== "undefined") {
                        localStorage.setItem("nomeJogador", jogador.name);
                        localStorage.setItem("jogadorId", jogador._id);
                    }
                    router.push("/jogo");
                } else if (res.status === 400) {
                    setErrorMessage(data.error || "Dados inválidos");
                } else {
                    setErrorMessage(data.error || "Erro ao cadastrar");
                }
            } catch (err) {
                console.error(err);
                setErrorMessage("Erro ao conectar com o servidor");
            }
    };

    return (
        <>
            <Link
                href="/"
                className="absolute top-3 left-3 inline-flex items-center text-xl text-white hover:text-yellow-300 transition-colors duration-200 bg-transparent z-50"
                style={{ fontFamily: "Press Start 2P, cursive" }}
            >
                <span className="mr-2">◀</span>
                VOLTAR
            </Link>
            <div className="h-screen flex items-center justify-center bg-black text-yellow-400 font-mono">
                <div className="w-full max-w-md mx-4">
                    <div className="p-6 bg-gray-900/60 border border-gray-700 rounded">
                        <h2 className="text-2xl mb-4">Cadastrar</h2>

                        {errorMessage && (
                            <div className="mb-4 p-2 bg-red-900/50 border border-red-500 rounded text-red-300 text-center">{errorMessage}</div>
                        )}

                        <input
                            className="mb-3 w-full px-4 py-2 rounded bg-gray-800 text-white"
                            placeholder="Nome"
                            value={name}
                            onChange={(e) => { setName(e.target.value); setErrorMessage(""); }}
                        />

                        <input
                            type="password"
                            className="mb-4 w-full px-4 py-2 rounded bg-gray-800 text-white"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); setErrorMessage(""); }}
                            onKeyPress={(e) => { if (e.key === "Enter") handleCadastrar(); }}
                        />

                        <div className="flex gap-3">
                            <button 
                                className="flex-1 border px-6 py-2 rounded hover:bg-yellow-400 hover:text-black" 
                                onClick={handleCadastrar}>
                                Cadastrar
                            </button>
                        </div>

                        <p className="mt-4 text-sm text-gray-400">Já tem conta? <Link href="/login" className="text-yellow-300">Entrar</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
}
