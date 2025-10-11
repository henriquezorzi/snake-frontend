"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface Score {
  _id: string;
  nome: string;
  pontos: number;
}

export default function Ranking() {
  const [scores, setScores] = useState<Score[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchScores = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Tenta buscar do endpoint de ranking primeiro
      let response;
      try {
        response = await axios.get(`${process.env.NEXT_PUBLIC_URLAPI!}/ranking`);
      } catch (rankingError) {
        // Se não existir endpoint de ranking, busca todos os jogadores
        response = await axios.get(`${process.env.NEXT_PUBLIC_URLAPI!}/jogadores`);
      }
      
      if (response.data && Array.isArray(response.data)) {
        // Filtra apenas jogadores com pontos e ordena por pontuação
        const playersWithScores = response.data
          .filter((player: any) => player.score > 0 || player.pontos > 0)
          .map((player: any) => ({
            _id: player._id || player.id,
            nome: player.name || player.nome,
            pontos: player.score || player.pontos || 0
          }))
          .sort((a: Score, b: Score) => b.pontos - a.pontos);
        
        setScores(playersWithScores);
      } else {
        // Fallback para a URL original
        const fallbackResponse = await axios.get(process.env.NEXT_PUBLIC_URLAPI!);
        if (fallbackResponse.data && Array.isArray(fallbackResponse.data)) {
          const sortedScores = fallbackResponse.data.sort((a: Score, b: Score) => b.pontos - a.pontos);
          setScores(sortedScores);
        } else {
          setError("Não foi possível carregar os dados do ranking");
        }
      }
    } catch (err) {
      console.error("Erro ao buscar ranking:", err);
      setError("Erro ao conectar com o servidor. Verifique se o backend está rodando.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScores();
  }, []);

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return "🥇";
      case 2:
        return "🥈";
      case 3:
        return "🥉";
      default:
        return `${position}°`;
    }
  };

  const getRowClasses = (position: number) => {
    const baseClasses = "border-b border-yellow-400/20 hover:bg-yellow-400/5 transition-colors duration-200";
    
    switch (position) {
      case 1:
        return `${baseClasses} bg-yellow-400/10 text-yellow-300`;
      case 2:
        return `${baseClasses} bg-yellow-400/5 text-yellow-200`;
      case 3:
        return `${baseClasses} bg-yellow-400/5 text-yellow-100`;
      default:
        return `${baseClasses} text-white`;
    }
  };

  return (
    <div className="min-h-screen bg-[url('/bg-clouds.png')] bg-cover flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Título */}
        <h1 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400 drop-shadow-[2px_2px_0px_black]"
          style={{ fontFamily: "Press Start 2P, cursive" }}
        >
          RANKING
        </h1>

        {/* Tabela */}
        <div className="bg-black/80 backdrop-blur-sm border-2 border-yellow-400 rounded-lg overflow-hidden mb-8">
          <div className="border-b-2 border-yellow-400 bg-yellow-400/10 p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="text-yellow-400 font-bold text-sm"
                   style={{ fontFamily: "Press Start 2P, cursive" }}>
                {scores.length > 0 && `${scores.length} JOGADORES`}
              </div>
              <button 
                onClick={fetchScores}
                disabled={loading}
                className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 text-xs disabled:opacity-50"
                style={{ fontFamily: "Press Start 2P, cursive" }}
              >
                {loading ? "..." : "🔄 ATUALIZAR"}
              </button>
            </div>
            <div className="grid grid-cols-12 gap-4 text-yellow-400 font-bold text-sm md:text-base"
                 style={{ fontFamily: "Press Start 2P, cursive" }}>
              <div className="col-span-2 text-center">POS</div>
              <div className="col-span-6">JOGADOR</div>
              <div className="col-span-4 text-right">PONTOS</div>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {loading ? (
              <div className="p-8 text-center text-yellow-400"
                   style={{ fontFamily: "Press Start 2P, cursive" }}>
                CARREGANDO...
              </div>
            ) : error ? (
              <div className="p-8 text-center text-red-400"
                   style={{ fontFamily: "Press Start 2P, cursive" }}>
                {error}
              </div>
            ) : scores.length === 0 ? (
              <div className="p-8 text-center text-yellow-400/60"
                   style={{ fontFamily: "Press Start 2P, cursive" }}>
                NENHUM SCORE ENCONTRADO
              </div>
            ) : (
              scores.map((score, index) => {
                const position = index + 1;
                return (
                  <div key={score._id} className={`grid grid-cols-12 gap-4 p-4 items-center ${getRowClasses(position)}`}>
                    <div className="col-span-2 text-center text-lg font-bold"
                         style={{ fontFamily: "Press Start 2P, cursive" }}>
                      {getPositionIcon(position)}
                    </div>
                    <div className="col-span-6 font-semibold truncate"
                         style={{ fontFamily: "Press Start 2P, cursive" }}>
                      {score.nome}
                    </div>
                    <div className="col-span-4 text-right font-bold text-yellow-300"
                         style={{ fontFamily: "Press Start 2P, cursive" }}>
                      {score.pontos.toLocaleString()}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Botão para recarregar em caso de erro */}
          {error && (
            <div className="p-4 text-center border-t-2 border-yellow-400">
              <button 
                onClick={fetchScores}
                className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                style={{ fontFamily: "Press Start 2P, cursive" }}
              >
                TENTAR NOVAMENTE
              </button>
            </div>
          )}
        </div>

        <div className="text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-xl text-white hover:text-yellow-300 transition-colors duration-200"
            style={{ fontFamily: "Press Start 2P, cursive" }}
          >
            <span className="mr-2">◀</span>
            VOLTAR
          </Link>
        </div>
      </div>
    </div>
  );
}
