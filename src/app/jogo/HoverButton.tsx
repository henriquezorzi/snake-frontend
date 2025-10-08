"use client"; 

import React, { useState } from 'react';
import Link from 'next/link';

interface HoverButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  isPrimary: boolean; // Para diferenciar JOGAR DE NOVO de VOLTAR AO MENU
}

const HoverButton: React.FC<HoverButtonProps> = ({ children, onClick, href, isPrimary }) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyle: React.CSSProperties = {
    padding: "12px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: isPrimary ? "1.2em" : "1.1em",
    fontWeight: "bold",
    transition: "background 0.2s, color 0.2s, border-color 0.2s",
    textDecoration: "none", 
    display: "block",
    textAlign: "center",
  };

  const primaryStyle: React.CSSProperties = {
    background: isHovered ? 'yellow' : 'white', 
    color: isHovered ? 'black' : 'black',
    border: "none",
    boxShadow: isHovered ? "0 4px 0 #ccaa00" : "0 4px 0 #333",
  };

  const secondaryStyle: React.CSSProperties = {
    background: isHovered ? 'yellow' : 'transparent', 
    color: isHovered ? 'black' : 'white',
    border: isHovered ? "2px solid yellow" : "2px solid white",
  };

  const style = {
    ...baseStyle,
    ...(isPrimary ? primaryStyle : secondaryStyle),
  };

  const handlers = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  if (href) {
    // VOLTAR AO MENU
    return (
      <Link href={href} style={style} {...handlers}>
        {children}
      </Link>
    );
  }

  // Botão JOGAR DE NOVO
  return (
    <button onClick={onClick} style={style} {...handlers}>
      {children}
    </button>
  );
};

export default HoverButton;