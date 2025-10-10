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
    const router = useRouter();
    const { setJogador } = useJogador();

    const handleLogin = async () => {
        const validationError = validate(name, password);
        if (validationError) {
            setErrorMessage(validationError);
            return;
        }

        setErrorMessage("");
        try {
            // Buscar jogador existente e não criar automaticamente
            const res = await fetch("http://localhost:4000/jogadores");
            if (!res.ok) {
                // tenta ler mensagem do backend (json) e mostra status
                const text = await res.text().catch(() => null);
                let serverMsg = res.statusText;
                try {
                    const parsed = text ? JSON.parse(text) : null;
                    if (parsed && parsed.error) serverMsg = parsed.error;
                } catch (e) {
                    // não JSON, manter statusText
                }
                setErrorMessage(`Erro ${res.status}: ${serverMsg}`);
                return;
            }

            const players = await res.json();
            const jogador = players.find((p: any) => p.name?.toLowerCase().trim() === name.toLowerCase().trim());

            if (!jogador) {
                setErrorMessage("Usuário não foi encontrado. Por favor, cadastre-se primeiro.");
                return;
            }

            if (jogador.password !== password) {
                setErrorMessage("Senha incorreta");
                return;
            }

            setJogador(jogador);
            if (typeof window !== "undefined") {
                localStorage.setItem("nomeJogador", jogador.name);
                localStorage.setItem("jogadorId", jogador._id);
            }
            router.push("/jogo");
        } catch (err: any) {
            console.error(err);
            // Mostra mensagem detalhada do erro de rede
            setErrorMessage(err?.message || "Erro ao conectar com o servidor");
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

            <div className="relative h-screen flex items-center justify-center bg-black text-yellow-400 font-mono">
                <div className="w-full max-w-md mx-4">
                    <div className="p-6 bg-gray-900/60 border border-gray-700 rounded">
                        <h2 className="text-2xl mb-4">Login</h2>
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
                            onKeyPress={(e) => { if (e.key === "Enter") handleLogin(); }}
                        />

                        <button
                            className="w-full border px-6 py-2 rounded hover:bg-yellow-400 hover:text-black"
                            onClick={handleLogin}>
                            Entrar
                        </button>

                        <p
                            className="mt-4 text-sm text-gray-400">Ainda não tem conta?
                            <Link
                                href="/cadastrar"
                                className="text-yellow-300"> Cadastre-se
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
