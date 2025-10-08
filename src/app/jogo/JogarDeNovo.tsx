"use client";

import React, { useState } from "react";
import Link from "next/link";
import "@fontsource/press-start-2p";

interface JogarDeNovoProps {
  onRestart: () => void;
}

const JogarDeNovo: React.FC<JogarDeNovoProps> = ({ onRestart }) => {
  const [hoverRestart, setHoverRestart] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(false);

  const baseStyle: React.CSSProperties = {
    padding: "12px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background 0.2s, color 0.2s, border-color 0.2s",
    textDecoration: "none",
    display: "block",
    textAlign: "center",
    fontFamily: "'Press Start 2P', cursive", 
  };

  const restartButtonStyle: React.CSSProperties = {
    ...baseStyle,
    fontSize: "1.2em",
    background: hoverRestart ? "yellow" : "white",
    color: "black",
    border: "none",
    boxShadow: hoverRestart ? "0 4px 0 #ccaa00" : "0 4px 0 #333",
  };

  const menuLinkStyle: React.CSSProperties = {
    ...baseStyle,
    fontSize: "1.1em",
    background: hoverMenu ? "yellow" : "transparent",
    color: hoverMenu ? "black" : "white",
    border: hoverMenu ? "2px solid yellow" : "2px solid white",
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        zIndex: 10,
      }}
    >
      <h2
        style={{
          color: "yellow",
          fontSize: "2.5em",
          marginBottom: "30px",
          fontFamily: "'Press Start 2P', cursive", 
          letterSpacing: "2px",
          textShadow: `
            2px 2px 0 #000,
            -2px 2px 0 #000,
            2px -2px 0 #000,
            -2px -2px 0 #000
          `,
        }}
      >
        GAME OVER!
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "80%",
          maxWidth: "250px",
        }}
      >
        <button
          onClick={onRestart}
          style={restartButtonStyle}
          onMouseEnter={() => setHoverRestart(true)}
          onMouseLeave={() => setHoverRestart(false)}
          title="Inicia uma nova partida"
        >
          JOGAR DE NOVO
        </button>

        <Link
          href="/"
          style={menuLinkStyle}
          onMouseEnter={() => setHoverMenu(true)}
          onMouseLeave={() => setHoverMenu(false)}
        >
          VOLTAR AO MENU
        </Link>
      </div>
    </div>
  );
};

export default JogarDeNovo;

