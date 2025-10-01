"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface Jogador {
  _id: string;
  name: string;
  score: number;
}

interface JogadorContextType {
  jogador: Jogador | null;
  setJogador: (j: Jogador | null) => void;
}

const JogadorContext = createContext<JogadorContextType>({
  jogador: null,
  setJogador: () => {},
});

export const JogadorProvider = ({ children }: { children: ReactNode }) => {
  const [jogador, setJogador] = useState<Jogador | null>(null);
  return (
    <JogadorContext.Provider value={{ jogador, setJogador }}>
      {children}
    </JogadorContext.Provider>
  );
};

export const useJogador = () => useContext(JogadorContext);
