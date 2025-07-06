import Link from "next/link";
import { IconType } from "react-icons";

interface ButtonNavProps {
  Icon: IconType;
  isSelected?: boolean;
  path: string;
  currentPath: string;
  action?: () => void;
}

export default function ButtonNav({
  Icon,
  isSelected = false,
  path,
  currentPath,
  action,
}: ButtonNavProps) {
  return (
    <Link
      href={path}
      onClick={action}
      data-active={currentPath === path}
      className="data-[active=true]:text-blue-500 data-[active=false]:opacity-50 hover:text-blue-500"
    >
      <Icon className="size-12" />
    </Link>
  );
}
