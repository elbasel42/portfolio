import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi";

export const HomeButton = () => {
  return (
    <Link
      href="/"
      className="bg-black/80 fixed z-20 px-2 py-2 transform border rounded-full bottom-4 transition-all duration-2000 hover:rotate-[360deg] active:rotate-[360deg] border-white/50 right-4"
    >
      <BiHomeAlt2 className="w-6 h-6 transition-all duration-300 md:w-8 md:h-8 active:scale-125 hover:text-red-600 hover:scale-125" />
    </Link>
  );
};
