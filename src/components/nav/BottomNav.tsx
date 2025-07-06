"use client";
import { usePathname } from "next/navigation";
import { FaRegUser } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { LuSettings } from "react-icons/lu";
import ButtonNav from "./ButtonNav";

export default function BottomNav() {
  const currentPath = usePathname();

  return (
    <div className="fixed bottom-0 w-full max-w-md flex justify-around p-4">
      <ButtonNav
        Icon={FaRegUser}
        currentPath={currentPath}
        path="/perfil"
        text="Meu perfil"
      />
      <ButtonNav
        Icon={GrHomeRounded}
        currentPath={currentPath}
        path="/"
        text="Início"
      />
      <ButtonNav
        Icon={LuSettings}
        currentPath={currentPath}
        path="/ferramentas"
        text="Ferramentas"
      />

      {/* <img src="userIcon.svg" className="h-14 opacity-50" />
      <img src="homeIcon.svg" className="h-14 text-blue-500" />
      <img src="settingsIcon.svg" className="h-14 opacity-50" /> */}
    </div>
  );
}
