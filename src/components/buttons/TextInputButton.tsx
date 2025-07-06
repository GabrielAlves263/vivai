"use client";
import { useState } from "react";
import { LuSendHorizontal } from "react-icons/lu";

export default function TextInputButton() {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // O input está "ativo" se estiver focado ou se tiver algum valor
  const isActive = isFocused || value !== "";

  return (
    <div className="relative w-full max-w-sm mt-6 bg-primary-light rounded-2xl">
      <div>
        <span
          className={`
          absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 
          text-text pointer-events-none 
          transition-all duration-200 ease-in-out
          font-semibol
          ${isActive ? "hidden" : ""}
        `}
        >
          OU <b className="font-black">DIGITE</b> AQUI
        </span>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <LuSendHorizontal className="size-8 text-red" />
        </div>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="
          w-full rounded-2xl px-4 py-3 
          text-xl text-text focus:ring-2 focus:ring-blue-200 
          focus:outline-none
        "
      />
    </div>
  );
}
