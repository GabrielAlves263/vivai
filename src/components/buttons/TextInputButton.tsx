import { TbKeyboardFilled } from "react-icons/tb";

export default function TextInputButton() {
  return (
    <button className="group mt-6 px-6 py-3 rounded-lg border flex items-center gap-2 text-lg cursor-pointer hover:text-blue-400 hover:px-7 transition-all">
      Digitar{" "}
      <TbKeyboardFilled className="size-6 group-hover:text-blue-400 transition-all" />
    </button>
  );
}
