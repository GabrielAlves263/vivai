import { FaMicrophone } from "react-icons/fa";

export default function VoiceButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-xl">
        Fale com a <span className="text-red-400">Alice</span>
      </p>
      <div className="group rounded-full bg-blue-100 p-5 shadow-lg cursor-pointer">
        <button className="transition-all rounded-full bg-blue-500 p-14 shadow-lg group-hover:p-16 cursor-pointer">
          <FaMicrophone size={80} className="group-hover:text-white" />
        </button>
      </div>
    </div>
  );
}
