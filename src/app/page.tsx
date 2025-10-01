"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ hook do Next

export default function Menu() {
  const [selected, setSelected] = useState(0);
  const router = useRouter(); // ✅ substitui useNavigate

  const options = ["JOGAR", "RANKING", "EXIT"];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        setSelected((prev) => (prev === 0 ? options.length - 1 : prev - 1));
      } else if (e.key === "ArrowDown") {
        setSelected((prev) => (prev === options.length - 1 ? 0 : prev + 1));
      } else if (e.key === "Enter") {
        if (options[selected] === "JOGAR") {
          router.push("/login"); // ✅ navega no Next.js
        } else if (options[selected] === "RANKING") {
          router.push("/raking"); // ✅ navega no Next.js
        } else if (options[selected] === "EXIT") {
          window.location.href = "https://google.com";
        }
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
            className={`flex items-center text-xl md:text-2xl ${
              selected === index ? "text-yellow-300" : "text-white"
            }`}
            style={{ fontFamily: "Press Start 2P, cursive" }}
          >
            {selected === index && <span className="mr-2">▶</span>}
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
}
