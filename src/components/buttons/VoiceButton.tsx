import { FaMicrophone } from "react-icons/fa";

export default function VoiceButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-lg">
        Fale com a <span className="text-red-400">Alice</span>
      </p>
      <div className="rounded-full bg-blue-100 p-5 shadow-lg">
        <button className="group transition-all rounded-full bg-blue-500 p-14 shadow-lg hover:p-16">
          <FaMicrophone size={80} className="group-hover:text-white" />
        </button>
      </div>
    </div>
  );
}
