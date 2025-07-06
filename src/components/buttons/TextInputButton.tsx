"use client";
import { useAI } from "@/hooks/useAI";
import { useState } from "react";
import { LuSendHorizontal } from "react-icons/lu";

export default function TextInputButton() {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const { conversar, falar } = useAI();
  const [loading, setLoading] = useState(false);

  const isActive = isFocused || value !== "";

  const handleSubmit = async () => {
    try {
      if (value.trim() === "") return;
      setLoading(true);
      const resposta = await conversar(value);
      console.log("IA respondeu:", resposta);
      await falar(resposta);
      setValue("");
    } catch (error) {
      console.error(error);
      alert(
        "Algo deu errado! Certifique-se que o seu navegador é compatível com reconhecimento de voz (Chrome, Edge, etc)."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="relative w-full max-w-sm mt-4 bg-primary-light rounded-2xl">
      <div>
        <span
          className={`
          absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 
          text-text pointer-events-none 
          transition-all duration-200 ease-in-out
          font-semibold
          ${isActive ? "hidden" : ""}
        `}
        >
          OU <b className="font-black">DIGITE</b> AQUI
        </span>
        <button
          onClick={handleSubmit}
          className="absolute inset-y-0 right-0 flex items-center pr-4"
        >
          <LuSendHorizontal className="size-8 text-red cursor-pointer" />
        </button>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
        className="
          w-full rounded-2xl px-4 py-3 
          text-xl text-text focus:ring-2 focus:ring-blue-200 
          focus:outline-none pr-14
        "
      />
    </div>
  );
}
