import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi";

export const HomeButton = () => {
  return (
    <Link
      href="/"
      className="bg-black/80 fixed z-20 px-2 py-2 transform border rounded-full transition-all duration-2000 hover:rotate-[360deg] active:rotate-[360deg] bottom-4 md:bottom-4 border-white/50 right-4"
    >
      <BiHomeAlt2 className="w-8 h-8 active:scale-125 transition-all hover:text-red-600 duration-300 hover:scale-125" />
    </Link>
  );
};
