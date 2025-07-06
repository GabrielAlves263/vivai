"use client";

import { useState } from "react";
import { useAI } from "../../hooks/useAI";
import { useSpeechRecognition } from "../../hooks/useSpeechRecognition";

import { FaMicrophone } from "react-icons/fa";

export default function VoiceButton() {
  const { reconhecer } = useSpeechRecognition();
  const { conversar, falar } = useAI();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const pergunta = await reconhecer();
      const resposta = await conversar(pergunta);
      console.log("IA respondeu:", resposta);
      await falar(resposta);
    } catch (error) {
      console.error(error);
      alert(
        "Algo deu errado! Certifique-se que o seu navegador é compatível com reconhecimento de voz (Chrome, Edge, etc)."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-2xl">
        <strong className="font-black">APERTE O BOTÃO</strong> <br />
        Para falar com a <span className="text-red-400">Alice</span>
      </p>
      <button
        onClick={handleClick}
        disabled={loading}
        className="group rounded-full bg-blue-100 p-5 shadow-lg cursor-pointer"
      >
        <div className="transition-all rounded-full bg-blue-500 p-10 shadow-lg group-hover:p-12 cursor-pointer">
          {loading ? (
            <span className="animate-pulse text-white text-lg size-20">
              ...
            </span>
          ) : (
            <FaMicrophone size={80} className="group-hover:text-white" />
          )}
        </div>
      </button>
    </div>
  );
}
