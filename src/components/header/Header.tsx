import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-primary w-full p-4 flex items-center gap-2">
      <Image
        src="/LogoBEM.svg"
        alt="Logo Bem"
        className="h-6"
        width={64}
        height={24}
      />
    </div>
  );
}
