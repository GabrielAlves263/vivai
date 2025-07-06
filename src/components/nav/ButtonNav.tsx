import Link from "next/link";
import { IconType } from "react-icons";

interface ButtonNavProps {
  Icon: IconType;
  isSelected?: boolean;
  path: string;
  currentPath: string;
  action?: () => void;
  text?: string;
}

export default function ButtonNav({
  Icon,
  isSelected = false,
  path,
  currentPath,
  action,
  text,
}: ButtonNavProps) {
  return (
    <Link
      href={path}
      onClick={action}
      data-active={currentPath === path}
      className="flex flex-col items-center justify-center bg-paper border rounded-2xl size-24 data-[active=true]:text-paper data-[active=true]:bg-red data-[active=false]:opacity-50 hover:text-red"
    >
      <Icon className="size-12" />
      <p>{text}</p>
    </Link>
  );
}
