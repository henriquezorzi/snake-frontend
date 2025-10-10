"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Menu() {
  const [selected, setSelected] = useState(0);
  const router = useRouter(); 

  const options = ["JOGAR", "RANKING"];

  const handleOptionClick = (optionName: string) => {
    if (optionName === "JOGAR") {
      router.push("/login"); 
    } else if (optionName === "RANKING") {
      router.push("/ranking"); 
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleOptionClick(options[selected]);
      } 
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected, options, router]);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-[url('/bg-clouds.png')] bg-cover">
      <h1
        className="text-4xl md:text-5xl font-bold mb-10 text-yellow-400 drop-shadow-[2px_2px_0px_black]"
        style={{ fontFamily: "Press Start 2P, cursive" }}
      >
        SNAKE-ONLINE
      </h1>

      <div className="flex flex-col gap-4">
        {options.map((opt, index) => (
          <div
            key={opt}
            className={`flex items-center text-xl md:text-2xl cursor-pointer transition-colors duration-200 hover:text-yellow-300 ${
              selected === index ? "text-yellow-300" : "text-white"
            }`}
            style={{ fontFamily: "Press Start 2P, cursive" }}
            onClick={() => handleOptionClick(opt)}
            onMouseEnter={() => setSelected(index)}
          >
            {selected === index && <span className="mr-2">▶</span>}
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
}
