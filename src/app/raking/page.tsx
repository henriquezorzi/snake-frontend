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

  useEffect(() => {
    axios.get("https://SUA_API/scores").then((res) => setScores(res.data));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>🏆 Ranking Snake</h1>
      <ol>
        {scores.map((s, i) => (
          <li key={s._id}>
            {i + 1}. {s.nome} - {s.pontos}
          </li>
        ))}
      </ol>
      <br />
      <Link href="/">Voltar ao Menu</Link>
    </div>
  );
}
